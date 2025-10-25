import React from 'react';
import { Shield } from 'lucide-react';
import Section from './Section';

const Security: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="relative pt-40 pb-24 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="absolute inset-0 bg-purple-500/10"></div>
        <div className="relative container mx-auto px-4">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-full bg-black/40 backdrop-blur-sm mb-6 md:mb-10 border-2 border-purple-400/50 shadow-lg shadow-purple-500/20">
              <Shield className="w-4 md:w-4 lg:w-5 h-4 md:h-4 lg:h-5 text-purple-400" />
              <span className="text-sm md:text-sm lg:text-base font-medium text-purple-400">Security Policy</span>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-8">
            情報セキュリティ方針
          </h1>
        </div>
      </section>

      <Section className="py-16 bg-gradient-to-b from-white to-gray-50 text-justify">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="text-gray-600 mb-8">
              株式会社Senrigan（以下、「当社」）は、お客様の大切な情報資産を守るため、以下の情報セキュリティ方針を定め、全社を挙げて情報セキュリティの維持・向上に取り組みます。
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">1. 基本方針</h2>
            <p className="text-gray-600 mb-4">当社は、以下の基本方針に基づき情報セキュリティ管理を実施します：</p>
            <ul className="list-disc ml-6 text-gray-600 space-y-2">
              <li>情報資産の機密性・完全性・可用性の維持</li>
              <li>法令・規範の遵守</li>
              <li>継続的な改善の実施</li>
              <li>従業員への教育・啓発活動の実施</li>
              <li>インシデント発生時の適切な対応</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">2. 実施体制</h2>
            <p className="text-gray-600 mb-4">以下の体制で情報セキュリティ管理を実施します：</p>
            <ul className="list-disc ml-6 text-gray-600 space-y-2">
              <li>情報セキュリティ委員会の設置</li>
              <li>情報セキュリティ責任者の任命</li>
              <li>定期的な内部監査の実施</li>
              <li>セキュリティインシデント対応チームの編成</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">3. セキュリティ対策</h2>
            <p className="text-gray-600 mb-4">以下の対策を実施し、情報セキュリティの確保に努めます：</p>
            <ul className="list-disc ml-6 text-gray-600 space-y-2">
              <li>物理的セキュリティ対策の実施</li>
              <li>技術的セキュリティ対策の実施</li>
              <li>人的セキュリティ対策の実施</li>
              <li>組織的セキュリティ対策の実施</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">4. 教育・訓練</h2>
            <p className="text-gray-600 mb-4">以下の教育・訓練を実施します：</p>
            <ul className="list-disc ml-6 text-gray-600 space-y-2">
              <li>定期的なセキュリティ教育の実施</li>
              <li>インシデント対応訓練の実施</li>
              <li>セキュリティ意識向上のための啓発活動</li>
              <li>最新のセキュリティ動向の共有</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">5. インシデント対応</h2>
            <p className="text-gray-600 mb-4">セキュリティインシデント発生時は以下の対応を行います：</p>
            <ul className="list-disc ml-6 text-gray-600 space-y-2">
              <li>迅速な初動対応の実施</li>
              <li>影響範囲の特定と被害の最小化</li>
              <li>原因究明と再発防止策の策定</li>
              <li>関係者への適切な情報開示</li>
            </ul>

            <p className="text-gray-500 mt-12 text-sm">
              制定日：2024年1月1日
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Security;