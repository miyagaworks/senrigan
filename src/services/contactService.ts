// services/contactService.ts - デバッグ強化版
import { FormData } from "../types/contact";

// 型エイリアスを設定（既存のFormDataインポートと互換性を保つ）
type ContactFormData = FormData;

interface ContactResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export const sendContactForm = async (
  formData: ContactFormData,
  recaptchaToken: string
): Promise<ContactResponse> => {
  console.log("contactService: 送信開始");
  console.log("contactService: フォームデータ:", formData);
  console.log(
    "contactService: reCAPTCHAトークン:",
    recaptchaToken ? "あり" : "なし"
  );

  try {
    // 送信データの準備
    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
      recaptchaToken: recaptchaToken,
    };

    console.log("contactService: 送信ペイロード:", payload);

    // API URLの取得
    const apiUrl = import.meta.env.VITE_CONTACT_API_URL || "/api/contact.php";
    console.log("contactService: API URL:", apiUrl);

    // fetch実行
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    console.log("contactService: レスポンス状態:", response.status);
    console.log(
      "contactService: レスポンスヘッダー:",
      Object.fromEntries(response.headers.entries())
    );

    // レスポンステキストを取得（JSONパースエラーを防ぐため）
    const responseText = await response.text();
    console.log("contactService: レスポンステキスト:", responseText);

    // JSONパース
    let data: ContactResponse;
    try {
      data = JSON.parse(responseText);
      console.log("contactService: パース済みデータ:", data);
    } catch (parseError) {
      console.error("contactService: JSONパースエラー:", parseError);
      throw new Error(`サーバーからの応答が不正です: ${responseText}`);
    }

    // ステータスコードチェック
    if (!response.ok) {
      console.error("contactService: HTTPエラー:", response.status, data);
      throw new Error(data.error || `サーバーエラー: ${response.status}`);
    }

    // 成功レスポンスチェック
    if (!data.success) {
      console.error("contactService: アプリケーションエラー:", data);
      throw new Error(data.error || "送信に失敗しました");
    }

    console.log("contactService: 送信成功");
    return data;
  } catch (error) {
    console.error("contactService: エラー発生:", error);

    // エラータイプに応じたメッセージ
    if (error instanceof TypeError) {
      throw new Error(
        "ネットワークエラーが発生しました。インターネット接続を確認してください。"
      );
    }

    if (error instanceof Error) {
      throw error;
    }

    throw new Error("予期しないエラーが発生しました。");
  }
};