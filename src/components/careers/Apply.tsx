// src/components/careers/Apply.tsx
import React, { useState, useRef } from "react";
import { Upload, Briefcase, User, Send, Loader2 } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

interface FormData {
  name: string;
  nameKana: string;
  email: string;
  phone: string;
  position: string;
  resume: File | null;
  coverLetter: File | null;
  message: string;
}

interface FormErrors {
  name?: string;
  nameKana?: string;
  email?: string;
  phone?: string;
  position?: string;
  resume?: string;
  coverLetter?: string;
  message?: string;
  recaptcha?: string;
}

const ApplicationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    nameKana: "",
    email: "",
    phone: "",
    position: "",
    resume: null,
    coverLetter: null,
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  // reCAPTCHAのrefを追加
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const positions = [
    { value: "engineer", label: "エンジニア職" },
    { value: "designer", label: "デザイナー職" },
    { value: "pm", label: "プロジェクトマネージャー" },
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "お名前を入力してください";
    }

    if (!formData.nameKana.trim()) {
      newErrors.nameKana = "フリガナを入力してください";
    }

    if (!formData.email.trim()) {
      newErrors.email = "メールアドレスを入力してください";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "有効なメールアドレスを入力してください";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "電話番号を入力してください";
    }

    if (!formData.position) {
      newErrors.position = "希望職種を選択してください";
    }

    if (!formData.resume) {
      newErrors.resume = "履歴書をアップロードしてください";
    }

    if (!recaptchaToken) {
      newErrors.recaptcha = "reCAPTCHA認証を完了してください";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("採用フォーム送信開始"); // デバッグログ
    console.log("現在のフォームデータ:", formData); // デバッグログ
    console.log("reCAPTCHAトークン:", recaptchaToken); // デバッグログ

    if (!validateForm()) {
      console.log("バリデーションエラー:", errors); // デバッグログ
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    // FormDataオブジェクトを作成（ファイルアップロード用）
    const formPayload = new FormData();

    // 文字列フィールドを追加
    formPayload.append("name", formData.name);
    formPayload.append("nameKana", formData.nameKana);
    formPayload.append("email", formData.email);
    formPayload.append("phone", formData.phone);
    formPayload.append("position", formData.position);
    formPayload.append("message", formData.message);
    formPayload.append("recaptchaToken", recaptchaToken || "");

    // ファイルを追加
    if (formData.resume) {
      formPayload.append("resume", formData.resume);
    }
    if (formData.coverLetter) {
      formPayload.append("coverLetter", formData.coverLetter);
    }

    try {
      console.log("API送信開始"); // デバッグログ

      const apiUrl = import.meta.env.VITE_APPLY_API_URL || "/api/apply.php";
      console.log("API URL:", apiUrl); // デバッグログ

      const response = await fetch(apiUrl, {
        method: "POST",
        body: formPayload,
      });

      console.log("レスポンス状態:", response.status); // デバッグログ

      // レスポンステキストを取得
      const responseText = await response.text();
      console.log("レスポンステキスト:", responseText); // デバッグログ

      // JSONパース
      let data;
      try {
        data = JSON.parse(responseText);
      } catch (parseError) {
        console.error("JSONパースエラー:", parseError);
        throw new Error(`サーバーからの応答が不正です: ${responseText}`);
      }

      if (!response.ok) {
        console.error("HTTPエラー:", response.status, data);
        throw new Error(data.error || "送信に失敗しました");
      }

      console.log("送信成功:", data); // デバッグログ
      setSubmitStatus("success");

      // フォームをリセット
      setFormData({
        name: "",
        nameKana: "",
        email: "",
        phone: "",
        position: "",
        resume: null,
        coverLetter: null,
        message: "",
      });
      setRecaptchaToken(null);

      // reCAPTCHAをリセット
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }

      // ファイル入力をリセット
      const resumeInput = document.getElementById("resume") as HTMLInputElement;
      const coverLetterInput = document.getElementById(
        "coverLetter"
      ) as HTMLInputElement;
      if (resumeInput) resumeInput.value = "";
      if (coverLetterInput) coverLetterInput.value = "";
    } catch (error) {
      console.error("送信エラー:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: keyof FormData
  ) => {
    const file = e.target.files?.[0] || null;
    console.log(`ファイル選択 (${fieldName}):`, file?.name); // デバッグログ

    if (file) {
      // ファイルサイズチェック（10MB制限）
      if (file.size > 10 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          [fieldName]: "ファイルサイズは10MB以下にしてください",
        }));
        return;
      }

      // ファイル形式チェック
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(file.type)) {
        setErrors((prev) => ({
          ...prev,
          [fieldName]: "PDF、DOC、DOCXファイルのみアップロード可能です",
        }));
        return;
      }

      setFormData((prev) => ({
        ...prev,
        [fieldName]: file,
      }));

      // エラーをクリア
      if (errors[fieldName]) {
        setErrors((prev) => ({
          ...prev,
          [fieldName]: undefined,
        }));
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  // reCAPTCHA変更ハンドラー
  const handleRecaptchaChange = (token: string | null) => {
    console.log("reCAPTCHA変更:", token ? "トークン取得済み" : "トークンなし"); // デバッグログ
    setRecaptchaToken(token);
    if (token && errors.recaptcha) {
      setErrors((prev) => ({
        ...prev,
        recaptcha: undefined,
      }));
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 基本情報セクション */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-2 mb-6">
            <User className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-bold">基本情報</h3>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                placeholder="山田 太郎"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                フリガナ <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="nameKana"
                value={formData.nameKana}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.nameKana ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                placeholder="ヤマダ タロウ"
              />
              {errors.nameKana && (
                <p className="mt-1 text-sm text-red-600">{errors.nameKana}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                電話番号 <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                placeholder="090-1234-5678"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>
          </div>
        </div>

        {/* 応募情報セクション */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-bold">応募情報</h3>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                希望職種 <span className="text-red-500">*</span>
              </label>
              <select
                name="position"
                value={formData.position}
                onChange={handleChange}
                className={`w-full px-4 py-2 rounded-lg border ${
                  errors.position ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
              >
                <option value="">選択してください</option>
                {positions.map((pos) => (
                  <option key={pos.value} value={pos.value}>
                    {pos.label}
                  </option>
                ))}
              </select>
              {errors.position && (
                <p className="mt-1 text-sm text-red-600">{errors.position}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                履歴書 <span className="text-red-500">*</span>
              </label>
              <div className="mt-1">
                <div
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.resume ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                >
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(e, "resume")}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    id="resume"
                  />
                  <label
                    htmlFor="resume"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <Upload className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600">
                      {formData.resume
                        ? formData.resume.name
                        : "PDFまたはWord形式のファイルを選択"}
                    </span>
                  </label>
                </div>
                {errors.resume && (
                  <p className="mt-1 text-sm text-red-600">{errors.resume}</p>
                )}
                <p className="mt-1 text-sm text-gray-500">
                  PDFまたはWord形式のファイルをアップロードしてください（最大10MB）
                </p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                職務経歴書
              </label>
              <div className="mt-1">
                <div
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.coverLetter ? "border-red-500" : "border-gray-300"
                  } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                >
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(e, "coverLetter")}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    id="coverLetter"
                  />
                  <label
                    htmlFor="coverLetter"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <Upload className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600">
                      {formData.coverLetter
                        ? formData.coverLetter.name
                        : "PDFまたはWord形式のファイルを選択"}
                    </span>
                  </label>
                </div>
                {errors.coverLetter && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.coverLetter}
                  </p>
                )}
                <p className="mt-1 text-sm text-gray-500">
                  PDFまたはWord形式のファイルをアップロードしてください（最大10MB）
                </p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                自己PR
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="自己PRや志望動機をご記入ください"
              />
            </div>
          </div>
        </div>

        {/* reCAPTCHA */}
        <div className="flex justify-center">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={
              import.meta.env.VITE_RECAPTCHA_SITE_KEY ||
              "6LdXxNwqAAAAAOMZ6SphYqR7JiHofyIqZvVfu4d3"
            }
            onChange={handleRecaptchaChange}
            onExpired={() => {
              console.log("reCAPTCHA有効期限切れ");
              setRecaptchaToken(null);
            }}
            onError={(error) => {
              console.error("reCAPTCHAエラー:", error);
              setRecaptchaToken(null);
            }}
          />
        </div>
        {errors.recaptcha && (
          <p className="text-center text-sm text-red-600">{errors.recaptcha}</p>
        )}

        {/* 送信ステータス */}
        {submitStatus === "success" && (
          <div className="p-4 bg-green-100 text-green-700 rounded-lg">
            応募を受け付けました。内容を確認の上、担当者よりご連絡させていただきます。
          </div>
        )}

        {submitStatus === "error" && (
          <div className="p-4 bg-red-100 text-red-700 rounded-lg">
            送信に失敗しました。お手数ですが、時間をおいて再度お試しください。
          </div>
        )}

        {/* 送信ボタン */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`inline-flex items-center gap-2 px-8 py-3 rounded-lg text-white ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            } transition-colors`}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                送信中...
              </>
            ) : (
              <>
                応募する
                <Send className="w-5 h-5" />
              </>
            )}
          </button>
        </div>

        {/* 個人情報の取り扱いについて */}
        <div className="text-sm text-gray-600 text-center">
          <p>応募情報は、採用選考の目的のみに使用いたします。</p>
          <p>
            詳しくは
            <a href="/privacy" className="text-blue-600 hover:underline">
              プライバシーポリシー
            </a>
            をご確認ください。
          </p>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;