<?php
// api/view_logs.php - ログ確認用スクリプト
ini_set('display_errors', 1);
error_reporting(E_ALL);

header('Content-Type: text/html; charset=UTF-8');

echo "<h2>PHPエラーログ確認</h2>";
echo "<hr>";

// 1. PHPのエラーログ設定を確認
echo "<h3>1. PHP エラーログ設定</h3>";
$errorLogPath = ini_get('error_log');
echo "設定されているエラーログパス: <strong>" . ($errorLogPath ?: '設定なし') . "</strong><br>";
echo "ログエラー有効: " . (ini_get('log_errors') ? '有効' : '無効') . "<br>";
echo "表示エラー設定: " . ini_get('display_errors') . "<br>";

// 2. 可能性のあるログファイルの場所を確認
echo "<h3>2. ログファイル検索</h3>";
$possibleLogPaths = [
    __DIR__ . '/error_log',
    __DIR__ . '/../error_log',
    __DIR__ . '/../../error_log',
    __DIR__ . '/logs/error.log',
    __DIR__ . '/../logs/error.log',
    __DIR__ . '/error.log',
    __DIR__ . '/../error.log',
    '/var/log/apache2/error.log',
    '/var/log/httpd/error_log',
    '/var/log/nginx/error.log',
    '/tmp/php_errors.log'
];

$foundLogs = [];
foreach ($possibleLogPaths as $path) {
    if (file_exists($path) && is_readable($path)) {
        $foundLogs[] = $path;
        echo "✅ 発見: <strong>{$path}</strong> (サイズ: " . filesize($path) . " bytes)<br>";
    } else {
        echo "❌ なし: {$path}<br>";
    }
}

// 3. 見つかったログファイルの内容表示
if (!empty($foundLogs)) {
    echo "<h3>3. ログファイル内容（最新100行）</h3>";
    
    foreach ($foundLogs as $logPath) {
        echo "<h4>ファイル: {$logPath}</h4>";
        
        if (filesize($logPath) > 0) {
            $lines = file($logPath);
            $recentLines = array_slice($lines, -100); // 最新100行
            
            echo "<div style='background:#f0f0f0; padding:10px; border:1px solid #ccc; max-height:400px; overflow-y:scroll; font-family:monospace; font-size:12px;'>";
            foreach ($recentLines as $lineNumber => $line) {
                $line = htmlspecialchars($line);
                
                // contact関連のログをハイライト
                if (stripos($line, 'contact') !== false) {
                    echo "<div style='background:yellow; font-weight:bold;'>" . $line . "</div>";
                } 
                // エラー関連をハイライト
                elseif (stripos($line, 'error') !== false || stripos($line, 'fatal') !== false) {
                    echo "<div style='background:#ffcccc; font-weight:bold;'>" . $line . "</div>";
                }
                // 通常のログ
                else {
                    echo "<div>" . $line . "</div>";
                }
            }
            echo "</div>";
        } else {
            echo "<p>ログファイルは空です</p>";
        }
        echo "<hr>";
    }
} else {
    echo "<p><strong>読み取り可能なログファイルが見つかりませんでした。</strong></p>";
}

// 4. リアルタイムでテストログを作成
echo "<h3>4. テストログエントリー作成</h3>";
$testMessage = "テストログエントリー - " . date('Y-m-d H:i:s');
error_log($testMessage);
echo "テストメッセージを送信しました: <strong>{$testMessage}</strong><br>";
echo "上記のログファイルに表示されるか確認してください。<br>";

// 5. 推奨手順
echo "<h3>5. 次のステップ</h3>";
echo "<ol>";
echo "<li>上記で見つかったログファイルをブックマーク</li>";
echo "<li>お問い合わせフォームから送信テスト</li>";
echo "<li>このページを再読み込みして新しいログを確認</li>";
echo "<li>「contact」関連のエラーログを探す</li>";
echo "</ol>";

// 6. 手動でログファイルを指定する方法
echo "<h3>6. 手動でログファイルを確認する方法</h3>";
echo "<p>もし上記で見つからない場合、以下の手順で確認してください：</p>";
echo "<ul>";
echo "<li><strong>cPanel</strong>: ファイルマネージャー → error_logs フォルダ</li>";
echo "<li><strong>FileZilla</strong>: /public_html/error_logs/ または /public_html/logs/</li>";
echo "<li><strong>サーバー管理者</strong>: ログファイルの場所を問い合わせ</li>";
echo "</ul>";

echo "<hr>";
echo "<p><em>このページを更新すると最新のログが表示されます</em></p>";
?>

<style>
body { font-family: Arial, sans-serif; margin: 20px; }
h3 { color: #333; border-bottom: 1px solid #ccc; padding-bottom: 5px; }
h4 { color: #666; }
</style>