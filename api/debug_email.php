<?php
// api/debug_email.php - メール送信問題デバッグ用
ini_set('display_errors', 1);
error_reporting(E_ALL);

header('Content-Type: text/html; charset=UTF-8');

echo "<h2>メール送信デバッグツール</h2>";
echo "<hr>";

// 1. mail()関数の利用可能性確認
echo "<h3>1. PHP mail()関数の状態</h3>";
if (function_exists('mail')) {
    echo "✅ mail()関数は利用可能<br>";
} else {
    echo "❌ mail()関数が無効<br>";
}

// 2. PHP設定確認
echo "<h3>2. PHP メール関連設定</h3>";
echo "sendmail_path: " . ini_get('sendmail_path') . "<br>";
echo "SMTP: " . ini_get('SMTP') . "<br>";
echo "smtp_port: " . ini_get('smtp_port') . "<br>";
echo "sendmail_from: " . ini_get('sendmail_from') . "<br>";

// 3. 最新のPHPエラーログ確認
echo "<h3>3. 最新のPHPエラーログ</h3>";
$errorLogPath = ini_get('error_log');
echo "エラーログパス: " . $errorLogPath . "<br>";

if (file_exists($errorLogPath) && is_readable($errorLogPath)) {
    $lines = file($errorLogPath);
    $recentLines = array_slice($lines, -20); // 最新20行
    echo "<pre style='background:#f0f0f0; padding:10px; max-height:300px; overflow-y:scroll;'>";
    foreach ($recentLines as $line) {
        if (strpos($line, 'contact') !== false || strpos($line, 'mail') !== false) {
            echo "<strong style='color:red;'>" . htmlspecialchars($line) . "</strong>";
        } else {
            echo htmlspecialchars($line);
        }
    }
    echo "</pre>";
} else {
    echo "エラーログにアクセスできません<br>";
}

// 4. テストメール送信（複数パターン）
echo "<h3>4. テストメール送信</h3>";

$testResults = [];

// パターン1: シンプルなメール
echo "<h4>パターン1: シンプルメール</h4>";
$to1 = 'contact@senrigan.systems';
$subject1 = 'テスト1: シンプルメール - ' . date('Y-m-d H:i:s');
$message1 = "シンプルなテストメールです。\n送信時刻: " . date('Y-m-d H:i:s');
$headers1 = "From: noreply@senrigan.systems\r\n";

$result1 = mail($to1, $subject1, $message1, $headers1);
echo "送信結果: " . ($result1 ? "✅ 成功" : "❌ 失敗") . "<br>";
$testResults[] = ['pattern' => 'シンプル', 'result' => $result1];

// パターン2: 詳細ヘッダー付き
echo "<h4>パターン2: 詳細ヘッダー付きメール</h4>";
$to2 = 'contact@senrigan.systems';
$subject2 = 'テスト2: 詳細ヘッダー - ' . date('Y-m-d H:i:s');
$message2 = "詳細ヘッダー付きテストメールです。\n送信時刻: " . date('Y-m-d H:i:s');
$headers2 = "From: noreply@senrigan.systems\r\n";
$headers2 .= "Reply-To: test@example.com\r\n";
$headers2 .= "Content-Type: text/plain; charset=UTF-8\r\n";

$result2 = mail($to2, $subject2, $message2, $headers2);
echo "送信結果: " . ($result2 ? "✅ 成功" : "❌ 失敗") . "<br>";
$testResults[] = ['pattern' => '詳細ヘッダー', 'result' => $result2];

// パターン3: multipart形式（採用フォームと同じ）
echo "<h4>パターン3: multipart形式（採用フォームと同じ）</h4>";
$to3 = 'contact@senrigan.systems';
$subject3 = 'テスト3: multipart形式 - ' . date('Y-m-d H:i:s');

$boundary = md5(uniqid(rand(), true));
$headers3 = "From: noreply@senrigan.systems\r\n";
$headers3 .= "Reply-To: test@example.com\r\n";
$headers3 .= "MIME-Version: 1.0\r\n";
$headers3 .= "Content-Type: multipart/mixed; boundary=\"{$boundary}\"\r\n";

$message3 = "--{$boundary}\r\n";
$message3 .= "Content-Type: text/plain; charset=UTF-8\r\n";
$message3 .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
$message3 .= "multipart形式のテストメールです。\n送信時刻: " . date('Y-m-d H:i:s') . "\n";
$message3 .= "\r\n--{$boundary}--\r\n";

$result3 = mail($to3, $subject3, $message3, $headers3);
echo "送信結果: " . ($result3 ? "✅ 成功" : "❌ 失敗") . "<br>";
$testResults[] = ['pattern' => 'multipart', 'result' => $result3];

// 5. 結果サマリー
echo "<h3>5. テスト結果サマリー</h3>";
echo "<table border='1' style='border-collapse:collapse;'>";
echo "<tr><th>パターン</th><th>mail()関数</th><th>推定問題</th></tr>";

foreach ($testResults as $test) {
    echo "<tr>";
    echo "<td>" . $test['pattern'] . "</td>";
    echo "<td>" . ($test['result'] ? "成功" : "失敗") . "</td>";
    
    if (!$test['result']) {
        echo "<td>PHPのmail()関数エラー</td>";
    } else {
        echo "<td>メールサーバー設定またはSMTP問題</td>";
    }
    echo "</tr>";
}
echo "</table>";

// 6. 推奨対処法
echo "<h3>6. 推奨対処法</h3>";
$allSuccess = array_reduce($testResults, function($carry, $test) {
    return $carry && $test['result'];
}, true);

if ($allSuccess) {
    echo "<div style='background:#ffffcc; padding:10px; border:1px solid #ffcc00;'>";
    echo "<strong>mail()関数は正常動作:</strong><br>";
    echo "1. contact@senrigan.systems のメールボックス設定を確認<br>";
    echo "2. スパムフォルダを確認<br>";
    echo "3. メールサーバーのログを確認<br>";
    echo "4. DNSのMXレコードを確認<br>";
    echo "</div>";
} else {
    echo "<div style='background:#ffcccc; padding:10px; border:1px solid #ff0000;'>";
    echo "<strong>mail()関数に問題あり:</strong><br>";
    echo "1. サーバー管理者にmail()設定を確認依頼<br>";
    echo "2. PHPMailerの導入を検討<br>";
    echo "3. SMTP認証の設定を検討<br>";
    echo "</div>";
}

// 7. 次のステップ
echo "<h3>7. 次のステップ</h3>";
echo "<ol>";
echo "<li>上記のテストメールが contact@senrigan.systems に届くか確認（5分程度待機）</li>";
echo "<li>届かない場合はサーバー管理者にメール設定を確認</li>";
echo "<li>PHPMailerの導入を検討</li>";
echo "</ol>";

?>

<hr>
<p><strong>このスクリプトの実行時刻:</strong> <?php echo date('Y-m-d H:i:s'); ?></p>
<p><strong>実行後の確認:</strong> contact@senrigan.systems のメールボックスを確認してください</p>