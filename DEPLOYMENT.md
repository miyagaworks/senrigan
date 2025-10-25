# デプロイメント設定ガイド

このプロジェクトは GitHub Actions を使用して自動的にXサーバーにデプロイされます。

## 自動デプロイの仕組み

`main` ブランチに push すると、自動的に以下の処理が実行されます：

1. ✅ コードのチェックアウト
2. ✅ Node.js 環境のセットアップ
3. ✅ 依存関係のインストール
4. ✅ プロジェクトのビルド（`npm run build`）
5. ✅ ビルド結果（`dist/`）をXサーバーにFTPアップロード

## 初回セットアップ手順

### 1. GitHub Secrets の設定

GitHubリポジトリで以下のシークレットを設定してください：

**Settings → Secrets and variables → Actions → New repository secret**

#### 必要なシークレット

| シークレット名 | 説明 | 例 |
|--------------|------|-----|
| `FTP_SERVER` | XサーバーのFTPホスト名 | `sv12345.xserver.jp` |
| `FTP_USERNAME` | FTPユーザー名 | `your-username` |
| `FTP_PASSWORD` | FTPパスワード | `your-password` |
| `FTP_SERVER_DIR` | サーバー上のアップロード先ディレクトリ | `/home/username/public_html/` |

### 2. XサーバーのFTP情報の確認方法

1. Xサーバーのサーバーパネルにログイン
2. **アカウント** → **サーバー情報** を確認
3. 以下の情報をメモ：
   - FTPホスト名（サーバー名）
   - FTPユーザー名
   - FTPパスワード

### 3. アップロード先ディレクトリ

通常、以下のいずれかのパスを使用します：

- メインドメインの場合: `/home/username/domain.com/public_html/`
- サブドメインの場合: `/home/username/subdomain.domain.com/public_html/`

## デプロイ方法

### 自動デプロイ（推奨）

```bash
# 変更をコミット
git add .
git commit -m "Update: 変更内容"

# mainブランチにプッシュ（自動的にデプロイが開始されます）
git push origin main
```

### デプロイの確認

1. GitHubリポジトリの **Actions** タブを開く
2. 最新のワークフロー実行を確認
3. 緑色のチェックマークが表示されれば成功

## トラブルシューティング

### デプロイが失敗する場合

1. **GitHub Secrets が正しく設定されているか確認**
   - Settings → Secrets and variables → Actions で確認

2. **FTP接続情報が正しいか確認**
   - サーバーパネルで最新の情報を確認

3. **ビルドエラーの場合**
   - ローカルで `npm run build` を実行してエラーを確認

4. **ログの確認**
   - GitHub の Actions タブでエラーログを確認

### 手動でのビルドとデプロイ

緊急時や開発中は、ローカルでビルドして手動でアップロードできます：

```bash
# ビルド
npm run build

# dist/ フォルダの内容をFTPクライアントでアップロード
```

## セキュリティに関する注意

- ✅ `.env` ファイルは `.gitignore` に含まれており、アップロードされません
- ✅ SSH鍵やパスワードは GitHub Secrets で安全に管理されます
- ✅ FTPパスワードは絶対にコードに含めないでください

## その他の情報

- **ワークフローファイル**: `.github/workflows/deploy.yml`
- **ビルド出力先**: `dist/`
- **Node.jsバージョン**: 20.x
