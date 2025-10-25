<?php
// config.php
ini_set('display_errors', 0);
error_reporting(0);
ini_set('log_errors', 1);

function verifyRecaptcha($token) {
    // 複数の方法で秘密鍵を取得
    $secret = getenv('RECAPTCHA_SECRET_KEY');
    if (!$secret && isset($_ENV['RECAPTCHA_SECRET_KEY'])) {
        $secret = $_ENV['RECAPTCHA_SECRET_KEY'];
    }
    if (!$secret && isset($_SERVER['RECAPTCHA_SECRET_KEY'])) {
        $secret = $_SERVER['RECAPTCHA_SECRET_KEY'];
    }
    
    // デバッグ用ログ
    error_log("reCAPTCHA秘密鍵取得: " . ($secret ? "成功" : "失敗"));
    
    if (!$secret) {
        throw new Exception('reCAPTCHA秘密鍵が設定されていません');
    }
    
    if (!$token) {
        throw new Exception('reCAPTCHAトークンがありません');
    }

    $verifyUrl = "https://www.google.com/recaptcha/api/siteverify";
    $verifyData = [
        'secret' => $secret,
        'response' => $token
    ];

    $options = [
        'http' => [
            'header' => "Content-type: application/x-www-form-urlencoded\r\n",
            'method' => 'POST',
            'content' => http_build_query($verifyData)
        ]
    ];

    $context = stream_context_create($options);
    $verifyResponse = file_get_contents($verifyUrl, false, $context);
    
    if ($verifyResponse === false) {
        throw new Exception('reCAPTCHA APIへの接続に失敗しました');
    }

    $responseData = json_decode($verifyResponse);
    error_log("reCAPTCHA検証結果: " . print_r($responseData, true));

    if (!$responseData->success) {
        throw new Exception('reCAPTCHA検証に失敗しました');
    }

    return true;
}