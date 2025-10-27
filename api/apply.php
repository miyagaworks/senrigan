<?php
ini_set('display_errors', 0);
error_reporting(0);
ini_set('log_errors', 1);

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

    // 1. 管理者宛メール送信
    $adminTo = 'recruit@senrigan.systems';
    $adminSubject = '採用エントリー受付 - ' . date('Y-m-d H:i:s');
    $adminEmailContent = createAdminEmailMessage($_POST, $uploadedFiles);

    if (!mail($adminTo, $adminSubject, $adminEmailContent['message'], $adminEmailContent['headers'])) {
        throw new Exception('メール送信に失敗しました');
    }

    // 2. 応募者宛確認メール送信
    $applicantMailResult = sendApplicantConfirmationEmail($_POST);

    // アップロードされたファイルの削除
    foreach ($uploadedFiles as $file) {
        if (file_exists($file)) {
            unlink($file);
        }
    }

    // 応募者への確認メール送信結果に応じてメッセージを変更
    if ($applicantMailResult) {
        $message = '応募を受け付けました。確認メールをお送りしましたので、受信トレイまたは迷惑メールフォルダをご確認ください。選考の結果は追ってご連絡いたします。';
    } else {
        $message = '応募を受け付けました。確認メールの送信でエラーが発生いたしました。選考の結果は追ってご連絡いたします。';
    }

    echo json_encode([
        'success' => true,
        'message' => $message,
        'debug' => [
            'admin_mail' => true,
            'applicant_mail' => $applicantMailResult,
            'timestamp' => date('Y-m-d H:i:s')
        ]
    ]);

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

function createAdminEmailMessage($post, $files) {
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

/**
 * 応募者宛確認メール送信
 */
function sendApplicantConfirmationEmail($data) {
    $to = $data['email'];
    $subject = '【Senrigan】採用エントリー受付のご確認';

    $headers = "From: 株式会社Senrigan <recruit@senrigan.systems>\r\n";
    $headers .= "Reply-To: recruit@senrigan.systems\r\n";
    $headers .= "Return-Path: recruit@senrigan.systems\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "Content-Transfer-Encoding: 8bit\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
    $headers .= "X-Priority: 3\r\n";
    $headers .= "Message-ID: <" . md5(uniqid() . $to) . "@senrigan.systems>\r\n";

    $message = "{$data['name']} 様\n\n";
    $message .= "株式会社Senriganです。\n";
    $message .= "この度は採用エントリーをいただき、誠にありがとうございます。\n\n";

    $message .= "以下の内容で応募を承りました：\n";
    $message .= "■ 受付日時: " . date('Y年n月j日 G:i') . "\n";
    $message .= "■ お名前: {$data['name']}\n";
    $message .= "■ フリガナ: {$data['nameKana']}\n";
    $message .= "■ メールアドレス: {$data['email']}\n";
    $message .= "■ 電話番号: {$data['phone']}\n";
    $message .= "■ 希望職種: " . translatePosition($data['position']) . "\n\n";

    if (!empty($data['message'])) {
        $message .= "■ 自己PR・志望動機:\n";
        $message .= $data['message'] . "\n\n";
    }

    $message .= "書類選考の結果は1週間以内にご連絡いたします。\n";
    $message .= "選考に関するお問い合わせは recruit@senrigan.systems までご連絡ください。\n\n";

    $message .= "※このメールは自動送信です。返信はできません。\n";
    $message .= "※迷惑メールフォルダに入る場合があります。\n\n";

    $message .= "──────────────────────────\n";
    $message .= "株式会社Senrigan 採用担当\n";
    $message .= "〒731-0137 広島県広島市安佐南区山本2-3-35\n";
    $message .= "TEL: 082-209-0181\n";
    $message .= "E-mail: recruit@senrigan.systems\n";
    $message .= "WEB: https://senrigan.systems\n";
    $message .= "「千の想いを、ひとつのカタチに。」\n";
    $message .= "──────────────────────────\n";

    error_log("応募確認メール送信試行 - 宛先: {$to}");
    error_log("応募確認メール件名: {$subject}");

    try {
        $result = mail($to, $subject, $message, $headers);
        error_log("応募確認メール送信結果: " . ($result ? '成功' : '失敗'));
        return $result;
    } catch (Exception $e) {
        error_log("応募確認メール送信エラー: " . $e->getMessage());
        return false;
    }
}
?>