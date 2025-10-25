import React from 'react';
import Section from './Section';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="relative pt-40 pb-24 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-blue-500/10" />
        <div className="relative container mx-auto px-4">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/40 backdrop-blur-sm mb-8 border-2 border-blue-400/50 shadow-lg shadow-blue-500/20">
              <img 
                src="/images/logo_blue.svg" 
                alt="Senriganロゴ" 
                className="w-4 md:w-4 lg:w-5 h-4 md:h-4 lg:h-5"
              />
              <span className="text-sm font-medium text-blue-400">Privacy Policy</span>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-8">
            プライバシーポリシー
          </h1>
        </div>
      </section>

      <Section className="py-16 bg-gradient-to-b from-white to-gray-50 text-justify">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="text-gray-600 mb-8">
              株式会社Senrigan（以下、「当社」）は、個人情報の保護に関する法律（以下、「個人情報保護法」）に基づき、以下のプライバシーポリシーを定め、個人情報の適切な取り扱いに努めます。
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">1. 収集する個人情報</h2>
            <p className="text-gray-600 mb-4">当社は、以下の個人情報を収集することがあります：</p>
            <ul className="list-disc ml-6 text-gray-600 space-y-2">
              <li>氏名</li>
              <li>メールアドレス</li>
              <li>電話番号</li>
              <li>住所</li>
              <li>会社名・所属部署</li>
              <li>ウェブサイトの利用状況</li>
              <li>IPアドレス</li>
              <li>Cookie情報</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">2. 個人情報の利用目的</h2>
            <p className="text-gray-600 mb-4">収集した個人情報は、以下の目的で利用します：</p>
            <ul className="list-disc ml-6 text-gray-600 space-y-2">
              <li>お問い合わせへの対応</li>
              <li>サービスの提供、維持、改善</li>
              <li>新サービスや更新情報のご案内</li>
              <li>契約の履行</li>
              <li>法令に基づく対応</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">3. 個人情報の第三者提供</h2>
            <p className="text-gray-600 mb-4">当社は、以下のいずれかに該当する場合を除き、個人情報を第三者に提供いたしません：</p>
            <ul className="list-disc ml-6 text-gray-600 space-y-2">
              <li>お客様の同意がある場合</li>
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要な場合</li>
              <li>公衆衛生の向上または児童の健全な育成の推進のために必要な場合</li>
              <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">4. 個人情報の安全管理</h2>
            <p className="text-gray-600 mb-4">当社は、個人情報の漏洩、滅失またはき損を防止するため、適切なセキュリティ対策を実施します：</p>
            <ul className="list-disc ml-6 text-gray-600 space-y-2">
              <li>アクセス制御の実施</li>
              <li>セキュリティソフトウェアの利用</li>
              <li>社員教育の実施</li>
              <li>情報セキュリティに関する社内規程の整備</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">5. 個人情報の開示・訂正・利用停止</h2>
            <p className="text-gray-600">
              保有個人データについて、開示、訂正、利用停止等を請求される場合は、下記の連絡先までご連絡下さい。
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">6. Cookieの使用について</h2>
            <p className="text-gray-600">
              当社ウェブサイトでは、利便性向上のためCookieを使用しています。Cookieの使用を望まない場合は、ブラウザの設定で無効化することができます。
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">7. プライバシーポリシーの改定</h2>
            <p className="text-gray-600">
              本プライバシーポリシーは、法令変更や事業内容の変更に応じて、予告なく改定することがあります。
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">8. お問い合わせ窓口</h2>
            <p className="text-gray-600">個人情報の取扱いに関するお問い合わせは、下記までご連絡下さい：</p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <p className="text-gray-600">
                株式会社Senrigan 個人情報保護管理者<br />
                〒731-0137<br />
                広島県広島市安佐南区山本2-3-35<br />
                TEL：082-209-0181<br />
                受付時間：平日10:00～17:00
              </p>
            </div>

            <p className="text-gray-500 mt-12 text-sm">
              制定日：2025年7月1日
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default PrivacyPolicy;