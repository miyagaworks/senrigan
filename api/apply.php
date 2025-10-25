<?php
require_once 'config_with_key.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

try {
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        exit();
    }

    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        throw new Exception('POSTメソッドのみ許可されています');
    }

    // デバッグログ
    error_log("Apply form - POSTデータ: " . print_r($_POST, true));
    error_log("Apply form - FILESデータ: " . print_r($_FILES, true));
    
    // 必須フィールドの確認
    $requiredFields = ['name', 'nameKana', 'email', 'phone', 'position', 'recaptchaToken'];
    foreach ($requiredFields as $field) {
        if (!isset($_POST[$field]) || empty(trim($_POST[$field]))) {
            throw new Exception("{$field}フィールドが不足しています");
        }
    }

    // reCAPTCHA検証
    verifyRecaptcha($_POST['recaptchaToken']);

    // メールアドレスの検証
    if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
        throw new Exception('無効なメールアドレスです');
    }

    // ファイルアップロード処理
    $uploadDir = 'uploads/';
    if (!file_exists($uploadDir)) {
        mkdir($uploadDir, 0755, true);
    }

    $uploadedFiles = [];
    
    // 履歴書（必須）
    if (!isset($_FILES['resume']) || $_FILES['resume']['error'] !== UPLOAD_ERR_OK) {
        throw new Exception('履歴書のアップロードが必要です');
    }
    $uploadedFiles['resume'] = handleFileUpload($_FILES['resume'], $uploadDir);

    // 職務経歴書（任意）
    if (isset($_FILES['coverLetter']) && $_FILES['coverLetter']['error'] === UPLOAD_ERR_OK) {
        $uploadedFiles['coverLetter'] = handleFileUpload($_FILES['coverLetter'], $uploadDir);
    }

    // メール送信処理
    $to = 'recruit@senrigan.systems';
    $subject = '採用エントリー受付';
    $emailContent = createEmailMessage($_POST, $uploadedFiles);
    
    if (!mail($to, $subject, $emailContent['message'], $emailContent['headers'])) {
        throw new Exception('メール送信に失敗しました');
    }

    // アップロードされたファイルの削除
    foreach ($uploadedFiles as $file) {
        if (file_exists($file)) {
            unlink($file);
        }
    }

    echo json_encode(['success' => true, 'message' => '応募を受け付けました']);

} catch (Exception $e) {
    error_log("Apply form error: " . $e->getMessage());
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}

function handleFileUpload($file, $uploadDir) {
    $allowedExtensions = ['pdf', 'doc', 'docx'];
    $fileName = basename($file['name']);
    $fileExt = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));
    
    if (!in_array($fileExt, $allowedExtensions)) {
        throw new Exception('許可されていないファイル形式です。PDF、DOC、DOCXのみアップロード可能です。');
    }
    
    $newFileName = uniqid() . '.' . $fileExt;
    $targetPath = $uploadDir . $newFileName;
    
    if (move_uploaded_file($file['tmp_name'], $targetPath)) {
        return $targetPath;
    }
    throw new Exception('ファイルアップロードに失敗しました');
}

function createEmailMessage($post, $files) {
    $boundary = md5(uniqid(rand(), true));

    $headers = "From: {$post['email']}\r\n";
    $headers .= "Reply-To: {$post['email']}\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"{$boundary}\"\r\n";

    $message = "--{$boundary}\r\n";
    $message .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $message .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
    
    $message .= "新しい採用エントリーが届きました。\n\n";
    $message .= "名前: {$post['name']}\n";
    $message .= "フリガナ: {$post['nameKana']}\n";
    $message .= "メール: {$post['email']}\n";
    $message .= "電話: {$post['phone']}\n";
    $message .= "希望職種: " . translatePosition($post['position']) . "\n";
    $message .= "自己PR:\n{$post['message']}\n\n";

    foreach ($files as $type => $file) {
        if (file_exists($file)) {
            $content = file_get_contents($file);
            $filename = basename($file);
            
            $message .= "\r\n--{$boundary}\r\n";
            $message .= "Content-Type: application/octet-stream; name=\"{$filename}\"\r\n";
            $message .= "Content-Transfer-Encoding: base64\r\n";
            $message .= "Content-Disposition: attachment; filename=\"{$filename}\"\r\n\r\n";
            $message .= chunk_split(base64_encode($content));
        }
    }

    $message .= "\r\n--{$boundary}--\r\n";

    return ['message' => $message, 'headers' => $headers];
}

function translatePosition($position) {
    $positions = [
        'engineer' => 'エンジニア職',
        'designer' => 'デザイナー職',
        'pm' => 'プロジェクトマネージャー'
    ];
    
    return $positions[$position] ?? $position;
}
?>