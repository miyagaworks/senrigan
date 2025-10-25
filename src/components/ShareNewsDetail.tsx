// src/components/ShareNewsDetail.tsx
import React from 'react';
import { Calendar, ExternalLink, Smartphone, QrCode, Users, Download, Globe } from 'lucide-react';
import Section from './Section';
import Breadcrumb from './common/Breadcrumb';

const ShareNewsDetail: React.FC = () => {
  const breadcrumbItems = [
    { label: 'ニュース', href: '/company/news' },
    { label: 'デジタル名刺サービス「Share」正式リリース' }
  ];

  const features = [
    {
      icon: Users,
      title: "複数SNSの一元管理",
      description:
        "LINE、YouTube、X、Instagramなど10種類以上のSNSアカウントを一つのプロフィールページにまとめて管理できます。",
    },
    {
      icon: QrCode,
      title: "QRコード共有",
      description:
        "ワンクリックでQRコードを生成。スマートフォンで読み取るだけで、すべてのSNSアカウントに瞬時にアクセス可能です。",
    },
    {
      icon: Download,
      title: "ワンタップ連絡先登録",
      description:
        "プロフィール情報をワンタップでスマホの連絡先アプリに登録できます。名前、電話番号、メールアドレスなどの全ての情報が瞬時に保存されます。",
    },
    {
      icon: Globe,
      title: "マルチデバイス対応",
      description:
        "iOSとAndroid両方に最適化されたモバイルフレンドリーなデザインで、どのデバイスからでも快適に利用できます。",
    },
  ];

  const useCases = [
    '名刺交換でのSNSアカウント共有',
    'ビジネスイベントでの連絡先交換',
    'マーケティング活動でのフォロワー獲得',
    'チーム内での連絡先統一管理'
  ];

  return (
    <div className="min-h-screen">
      <section className="relative pt-40 pb-24 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-blue-500/10" />
        <div className="relative container mx-auto px-4">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/40 backdrop-blur-sm mb-8 border-2 border-blue-400/50 shadow-lg shadow-blue-500/20">
              <Smartphone className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium text-blue-400">
                Press Release
              </span>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-8">
            デジタル名刺サービス「Share」正式リリース
          </h1>
          <div className="flex items-center justify-center gap-2 text-white/80">
            <Calendar className="w-4 h-4" />
            <time className="text-sm">2025年6月1日</time>
          </div>
        </div>
      </section>

      <Breadcrumb items={breadcrumbItems} />

      <Section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* メイン記事内容 */}
            <div className="prose prose-lg max-w-none mb-12">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                <p className="text-lg text-blue-800 font-medium mb-0 text-justify">
                  株式会社Senriganは、複数のSNSアカウントを一元管理できる次世代デジタル名刺サービス「Share」を2025年6月1日に正式リリースしました。
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-6">
                サービス概要
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                「Share」は、複数のSNSアカウントと連絡先情報を一つのデジタルプロフィールにまとめ、QRコードやNFCを通じて簡単に共有できるプラットフォームです。名刺交換のデジタル版として、ビジネスやプライベートでのコミュニケーションをスムーズにします。
              </p>

              <p className="text-gray-700 leading-relaxed mb-8 text-justify">
                従来の名刺交換では、SNSアカウントを一つひとつ教える必要がありましたが、「Share」を使用することで、QRコードを見せるだけですべてのSNSアカウントを一度に共有できるようになります。これにより、名刺交換後のフォローアップが格段に効率化されます。
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-6">
                主な機能
              </h2>
            </div>

            {/* 機能紹介カード */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-justify">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* 活用シーン */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                活用シーン
              </h2>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <ul className="space-y-3">
                  {useCases.map((useCase, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0" />
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 料金・提供開始 */}
            <div className="prose prose-lg max-w-none mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                料金プラン
              </h2>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200 mb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      月額プラン
                    </h3>
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      ¥500
                    </div>
                    <p className="text-sm text-gray-600">税込・月額</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      年額プラン
                    </h3>
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      ¥5,000
                    </div>
                    <p className="text-sm text-gray-600">
                      税込・年額（2ヶ月分お得）
                    </p>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <p className="text-sm text-gray-600">
                    7日間無料トライアル実施中
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                今後の展開
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                今後はより多くのSNSプラットフォームへの対応、NFC機能の強化、AI自己紹介文生成機能の追加などを予定しています。また、既存の法人向けプランにおいても、企業のブランディング統一機能やチーム管理機能のさらなる拡充により、ビジネスシーンでの活用をより促進してまいります。
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                代表コメント
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500 mb-8">
                <p className="text-gray-700 leading-relaxed italic mb-4 text-justify">
                  「現代のビジネスシーンにおいて、SNSでのつながりはますます重要になっています。『Share』は、この複雑化したデジタルコミュニケーションをシンプルで効率的なものに変える革新的なソリューションです。多くのビジネスパーソンに愛用していただき、より豊かなコミュニケーションの実現に貢献したいと考えています。」
                </p>
                <p className="text-sm text-gray-600 font-medium">
                  ― 株式会社Senrigan 代表取締役 宮川 清実
                </p>
              </div>
            </div>

            {/* サービスへのリンク */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">「Share」を今すぐ体験</h3>
              <p className="text-blue-100 mb-6 text-justify">
                7日間無料トライアルで、すべての機能をお試しいただけます
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://sns-share.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  サービスサイトを見る
                </a>
                <a
                  href="https://app.sns-share.com/auth/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/20 transition-colors"
                >
                  <Smartphone className="w-5 h-5" />
                  無料で始める
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ShareNewsDetail;