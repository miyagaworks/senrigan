import React, { useState, useRef } from "react";
import { Phone, Send, Loader2, Mail } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import { sendContactForm } from "../services/contactService";
import Section from "./Section";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  recaptcha?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
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

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "お名前を入力してください";
    }

    if (!formData.email.trim()) {
      newErrors.email = "メールアドレスを入力してください";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "有効なメールアドレスを入力してください";
    }

    if (!formData.message.trim()) {
      newErrors.message = "お問い合わせ内容を入力してください";
    }

    if (!recaptchaToken) {
      newErrors.recaptcha = "reCAPTCHA認証を完了してください";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("フォーム送信開始"); // デバッグログ
    console.log("現在のフォームデータ:", formData); // デバッグログ
    console.log("reCAPTCHAトークン:", recaptchaToken); // デバッグログ

    if (!validateForm()) {
      console.log("バリデーションエラー:", errors); // デバッグログ
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      if (!recaptchaToken) {
        throw new Error("reCAPTCHAトークンが無効です");
      }

      console.log("sendContactForm 呼び出し開始"); // デバッグログ
      const result = await sendContactForm(formData, recaptchaToken);
      console.log("sendContactForm 結果:", result); // デバッグログ

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setRecaptchaToken(null);

      // reCAPTCHAをリセット
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
    console.log("reCAPTCHA変更:", token); // デバッグログ
    setRecaptchaToken(token);
    if (token && errors.recaptcha) {
      setErrors((prev) => ({
        ...prev,
        recaptcha: undefined,
      }));
    }
  };

  return (
    <Section id="contact" className="py-24 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm">
            <img
              src="/images/logo2.svg"
              alt="Senriganロゴ"
              className="w-5 h-5"
            />
            <span className="text-blue-600 font-medium">Contact Us</span>
          </div>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
          <span className="block mb-3">お気軽に</span>
          <span className="text-gradient">お問い合わせ下さい</span>
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* お問い合わせ情報カード */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg">
            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-bold mb-6">お問い合わせ</h3>
              <p className="text-gray-600 mb-8">
                Webシステム開発に関するご相談をお待ちしております。
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
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
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
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
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    } focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.message}
                    </p>
                  )}
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
                      console.log("reCAPTCHA有効期限切れ"); // デバッグログ
                      setRecaptchaToken(null);
                    }}
                    onError={(error) => {
                      console.error("reCAPTCHAエラー:", error); // デバッグログ
                      setRecaptchaToken(null);
                    }}
                  />
                </div>
                {errors.recaptcha && (
                  <p className="text-center text-sm text-red-600">
                    {errors.recaptcha}
                  </p>
                )}

                {submitStatus === "success" && (
                  <div className="p-4 bg-green-100 text-green-700 rounded-lg">
                    お問い合わせを受け付けました。担当者より順次ご連絡させていただきます。
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-100 text-red-700 rounded-lg">
                    送信に失敗しました。お手数ですが、時間をおいて再度お試しください。
                  </div>
                )}

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
                        送信する
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* お急ぎの方へカード */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white shadow-lg">
            <div className="p-6 sm:p-8">
              <h3 className="text-xl font-bold mb-4">お急ぎの方へ</h3>
              <p className="mb-6 text-white/90">
                お電話やメールでのお問い合わせも受け付けております。
                まずはお気軽にご相談下さい。
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <div>
                    <div className="text-xl font-bold">082-209-0181</div>
                    <div className="text-sm text-white/80">
                      受付時間: 平日 10:00〜17:00
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 mt-1" />
                  <div>
                    <div className="font-medium mb-1">
                      メールでのお問い合わせ
                    </div>
                    <div className="text-sm">
                      <span className="select-all">info</span>
                      <span className="text-white/60 mx-1">[at]</span>
                      <span className="select-all">senrigan</span>
                      <span className="text-white/60 mx-1">[dot]</span>
                      <span className="select-all">systems</span>
                    </div>
                    <div className="text-xs text-white/60 mt-1">
                      ※ [at]を@に、[dot]を.に置き換えてください
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;