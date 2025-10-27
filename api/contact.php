<?php
// api/contact.php - Gmail配信最適化版
ini_set('display_errors', 1);
error_reporting(E_ALL);
ini_set('log_errors', 1);

header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

try {
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        http_response_code(200);
        echo json_encode(['status' => 'OPTIONS OK']);
        exit();
    }

    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        throw new Exception('POSTメソッドのみ許可されています');
    }

    // config_with_key.php の確認
    if (!file_exists('config_with_key.php')) {
        throw new Exception('設定ファイルが見つかりません');
    }

    require_once 'config_with_key.php';

    // JSONデータの取得
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if (json_last_error() !== JSON_ERROR_NONE) {
        throw new Exception('無効なデータ形式です');
    }

    // 必須フィールドの確認
    $requiredFields = ['name', 'email', 'message', 'recaptchaToken'];
    foreach ($requiredFields as $field) {
        if (!isset($data[$field]) || empty(trim($data[$field]))) {
            throw new Exception('必要な情報が不足しています');
        }
    }

    // reCAPTCHA検証
    verifyRecaptcha($data['recaptchaToken']);

    // メールアドレスの検証
    if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
        throw new Exception('有効なメールアドレスを入力してください');
    }

    // 1. 管理者宛メールの送信（必須）
    $adminMailResult = sendAdminMail($data);
    
    if (!$adminMailResult) {
        throw new Exception('送信処理中にエラーが発生しました');
    }

    // 2. お客様宛確認メールの送信（Gmail最適化版）
    $customerMailResult = sendCustomerMailOptimized($data);
    
    // 確認メールの送信結果をログに記録
    error_log("確認メール送信結果: " . ($customerMailResult ? '成功' : '失敗') . " - 宛先: " . $data['email']);

    // メッセージを確認メール送信結果に応じて変更
    if ($customerMailResult) {
        $message = 'お問い合わせを受け付けました。確認メールをお送りしましたので、受信トレイまたは迷惑メールフォルダをご確認ください。担当者より順次ご連絡させていただきます。';
    } else {
        $message = 'お問い合わせを受け付けました。確認メールの送信でエラーが発生いたしました。担当者より順次ご連絡させていただきます。';
    }

    echo json_encode([
        'success' => true,
        'message' => $message,
        'debug' => [
            'admin_mail' => $adminMailResult,
            'customer_mail' => $customerMailResult,
            'timestamp' => date('Y-m-d H:i:s')
        ]
    ]);

} catch (Exception $e) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'error' => $e->getMessage()
    ]);
}

/**
 * 管理者宛メール送信
 */
function sendAdminMail($data) {
    $to = 'contact@senrigan.systems';
    $subject = 'お問い合わせ受付 - ' . date('Y-m-d H:i:s');
    
    $boundary = md5(uniqid(rand(), true));
    
    $headers = "From: noreply@senrigan.systems\r\n";
    $headers .= "Sender: noreply@senrigan.systems\r\n";
    $headers .= "Return-Path: noreply@senrigan.systems\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"{$boundary}\"\r\n";
    $headers .= "Message-ID: <" . md5(uniqid()) . "@senrigan.systems>\r\n";

    $message = "--{$boundary}\r\n";
    $message .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $message .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
    
    $message .= "新しいお問い合わせが届きました。\n\n";
    $message .= "【重要】返信は以下のメールアドレスにお願いします：\n";
    $message .= "返信先: {$data['email']}\n\n";
    $message .= "送信日時: " . date('Y-m-d H:i:s') . "\n";
    $message .= "お名前: {$data['name']}\n";
    $message .= "メールアドレス: {$data['email']}\n\n";
    $message .= "お問い合わせ内容:\n";
    $message .= "----------------------------------------\n";
    $message .= "{$data['message']}\n";
    $message .= "----------------------------------------\n\n";
    $message .= "※このメールに直接返信せず、上記の返信先メールアドレスにご連絡ください。\n\n";
    $message .= getCompanySignature();
    $message .= "\r\n--{$boundary}--\r\n";

    error_log("管理者メール送信試行 - 宛先: {$to}");
    $result = mail($to, $subject, $message, $headers);
    error_log("管理者メール送信結果: " . ($result ? '成功' : '失敗'));
    
    return $result;
}

/**
 * お客様宛確認メール送信（Gmail最適化版）
 */
function sendCustomerMailOptimized($data) {
    $to = $data['email'];
    
    // Gmailに配信されやすい件名にする
    $subject = '【Senrigan】お問い合わせ受付のご確認';
    
    // Gmail配信最適化: シンプルなtext/plain形式を使用
    $headers = "From: 株式会社Senrigan <contact@senrigan.systems>\r\n";
    $headers .= "Reply-To: contact@senrigan.systems\r\n";
    $headers .= "Return-Path: contact@senrigan.systems\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "Content-Transfer-Encoding: 8bit\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
    $headers .= "X-Priority: 3\r\n";
    $headers .= "Message-ID: <" . md5(uniqid() . $to) . "@senrigan.systems>\r\n";
    
    // Gmail配信最適化: シンプルで読みやすいメッセージ
    $message = "{$data['name']} 様\n\n";
    $message .= "株式会社Senriganです。\n";
    $message .= "この度はお問い合わせをいただき、誠にありがとうございます。\n\n";
    
    $message .= "以下の内容で承りました：\n";
    $message .= "■ 受付日時: " . date('Y年n月j日 G:i') . "\n";
    $message .= "■ お名前: {$data['name']}\n";
    $message .= "■ メールアドレス: {$data['email']}\n\n";
    
    $message .= "■ お問い合わせ内容:\n";
    $message .= $data['message'] . "\n\n";
    
    $message .= "担当者より2営業日以内にご連絡いたします。\n";
    $message .= "お急ぎの場合は 082-209-0181（平日10:00-17:00）までお電話ください。\n\n";
    
    $message .= "※このメールは自動送信です。返信はできません。\n";
    $message .= "※迷惑メールフォルダに入る場合があります。\n\n";
    
    $message .= "──────────────────────────\n";
    $message .= "株式会社Senrigan\n";
    $message .= "〒731-0137 広島県広島市安佐南区山本2-3-35\n";
    $message .= "TEL: 082-209-0181\n";
    $message .= "WEB: https://senrigan.systems\n";
    $message .= "「千の想いを、ひとつのカタチに。」\n";
    $message .= "──────────────────────────\n";

    error_log("確認メール送信試行（最適化版） - 宛先: {$to}");
    error_log("確認メール件名: {$subject}");
    
    // 送信実行
    try {
        $result = mail($to, $subject, $message, $headers);
        error_log("確認メール送信結果（最適化版）: " . ($result ? '成功' : '失敗'));
        return $result;
    } catch (Exception $e) {
        error_log("確認メール送信エラー（最適化版）: " . $e->getMessage());
        return false;
    }
}

/**
 * 会社署名の取得
 */
function getCompanySignature() {
    $signature = "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
    $signature .= "株式会社Senrigan\n";
    $signature .= "Webシステム開発、モバイルアプリ開発、UI/UXデザイン\n";
    $signature .= "\n";
    $signature .= "〒731-0137\n";
    $signature .= "広島県広島市安佐南区山本2-3-35\n";
    $signature .= "TEL: 082-209-0181\n";
    $signature .= "受付時間: 平日 10:00〜17:00\n";
    $signature .= "WEB: https://senrigan.systems\n";
    $signature .= "E-mail: contact@senrigan.systems\n";
    $signature .= "\n";
    $signature .= "「千の想いを、ひとつのカタチに。」\n";
    $signature .= "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";
    
    return $signature;
}
?>