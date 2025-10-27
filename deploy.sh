#!/bin/bash

# Senrigan デプロイスクリプト
# 使い方: ./deploy.sh

echo "🚀 Senrigan デプロイ開始..."

# ビルド
echo "📦 ビルド中..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ ビルドに失敗しました"
    exit 1
fi

echo "✅ ビルド完了"
echo ""
echo "📤 次のステップ:"
echo "1. FileZillaでXサーバーに接続"
echo "   - ホスト: XサーバーのFTPホスト"
echo "   - ユーザー名: bialpha"
echo "   - パスワード: サーバーパスワード"
echo ""
echo "2. dist/ フォルダの内容を以下にアップロード:"
echo "   senrigan.systems/public_html/"
echo ""
echo "または、以下のコマンドでFTPアップロード（要設定）:"
echo "npm run deploy:ftp"
