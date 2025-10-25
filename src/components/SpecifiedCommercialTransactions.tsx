import React from "react";
import Section from "./Section";

const SpecifiedCommercialTransactions: React.FC = () => {
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
              <span className="text-sm font-medium text-blue-400">
                Commercial Transactions
              </span>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-8">
            特定商取引法に基づく表記
          </h1>
        </div>
      </section>

      <Section className="py-16 bg-gradient-to-b from-white to-gray-50 text-justify">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="text-gray-600 mb-8">
              特定商取引法に基づき、以下の通り表示いたします。
            </p>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  販売事業者名
                </h2>
                <p className="text-gray-600">株式会社Senrigan</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  代表責任者
                </h2>
                <p className="text-gray-600">代表取締役 宮川 清実</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  所在地
                </h2>
                <p className="text-gray-600">
                  〒731-0137
                  <br />
                  広島県広島市安佐南区山本2-3-35
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  電話番号
                </h2>
                <p className="text-gray-600">082-209-0181</p>
                <p className="text-sm text-gray-500 mt-1">
                  受付時間：平日 10:00〜17:00
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  メールアドレス
                </h2>
                <p className="text-gray-600">
                  <span className="select-all">info</span>
                  <span className="text-gray-400 mx-1">[at]</span>
                  <span className="select-all">senrigan</span>
                  <span className="text-gray-400 mx-1">[dot]</span>
                  <span className="select-all">systems</span>
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  ※ [at]を@に、[dot]を.に置き換えてください
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  販売価格
                </h2>
                <div className="text-gray-600 space-y-2">
                  <p>
                    サービス内容により異なります。詳細はお見積りにてご提示いたします。
                  </p>
                  <div className="ml-4 space-y-1">
                    <p>・Webシステム開発：100万円〜</p>
                    <p>・モバイルアプリ開発：150万円〜</p>
                    <p>・UI/UXデザイン：50万円〜</p>
                  </div>
                  <p className="text-sm text-gray-500">
                    ※上記は参考価格です。詳細な仕様により価格は変動いたします。
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  料金の支払方法
                </h2>
                <div className="text-gray-600 space-y-2">
                  <p>以下の方法でお支払いいただけます：</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>銀行振込（前払い）</li>
                    <li>請求書払い（月末締め翌月末払い）</li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-2">
                    ※振込手数料はお客様負担となります。
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  商品代金以外の必要料金
                </h2>
                <div className="text-gray-600 space-y-2">
                  <ul className="list-disc ml-6 space-y-1">
                    <li>消費税（10%）</li>
                    <li>銀行振込手数料（お客様負担）</li>
                    <li>サーバー・ドメイン費用（実費）</li>
                    <li>第三者ライセンス費用（該当する場合）</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  商品の引渡し時期
                </h2>
                <div className="text-gray-600 space-y-2">
                  <p>契約締結後、以下の期間で納品いたします：</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Webシステム開発：3〜6ヶ月</li>
                    <li>モバイルアプリ開発：4〜8ヶ月</li>
                    <li>UI/UXデザイン：1〜3ヶ月</li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-2">
                    ※プロジェクトの規模・複雑さにより期間は変動いたします。詳細は契約書にて明記いたします。
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  返品・キャンセルについて
                </h2>
                <div className="text-gray-600 space-y-3">
                  <div>
                    <h3 className="font-semibold mb-2">キャンセルについて</h3>
                    <ul className="list-disc ml-6 space-y-1 text-sm">
                      <li>契約前：キャンセル料は発生いたしません</li>
                      <li>開発開始前：契約金額の10%のキャンセル料</li>
                      <li>
                        開発開始後：完了済み作業分の料金をお支払いいただきます
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">返品について</h3>
                    <p className="text-sm">
                      システム開発は受注生産のため、原則として返品はお受けできません。
                      ただし、契約書に明記された仕様と著しく異なる場合は、無償で修正対応いたします。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  瑕疵担保責任
                </h2>
                <div className="text-gray-600 space-y-2">
                  <p>納品後、以下の期間において瑕疵担保責任を負います：</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>システムの不具合：納品後3ヶ月間</li>
                    <li>セキュリティ脆弱性：納品後6ヶ月間</li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-2">
                    ※お客様の使用環境や操作に起因する問題は対象外となります。
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  個人情報の取扱い
                </h2>
                <p className="text-gray-600">
                  お客様の個人情報は、当社の
                  <a
                    href="/privacy"
                    className="text-blue-600 hover:underline mx-1"
                  >
                    プライバシーポリシー
                  </a>
                  に従って適切に管理いたします。
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                  その他
                </h2>
                <div className="text-gray-600 space-y-2">
                  <ul className="list-disc ml-6 space-y-1">
                    <li>
                      本表記に記載のない事項については、特定商取引法その他の法令に従います
                    </li>
                    <li>
                      紛争が生じた場合は、当社所在地を管轄する裁判所を専属的合意管轄裁判所とします
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-blue-50 rounded-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                お問い合わせ
              </h2>
              <p className="text-gray-600 mb-4">
                ご不明な点がございましたら、お気軽にお問い合わせください。
              </p>
              <div className="space-y-2 text-gray-600">
                <p>
                  <strong>電話：</strong>082-209-0181（平日 10:00〜17:00）
                </p>
                <p>
                  <strong>メール：</strong>
                  <span className="select-all">info</span>
                  <span className="text-gray-400 mx-1">[at]</span>
                  <span className="select-all">senrigan</span>
                  <span className="text-gray-400 mx-1">[dot]</span>
                  <span className="select-all">systems</span>
                </p>
                <p className="text-sm text-gray-500">
                  ※ [at]を@に、[dot]を.に置き換えてください
                </p>
              </div>
            </div>

            <p className="text-gray-500 mt-12 text-sm">制定日：2025年7月1日</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default SpecifiedCommercialTransactions;