// src/components/services/MobileAppDevelopment/index.tsx
import React from 'react';
import { 
  Smartphone, 
  Check, 
  Download,
  Zap,
  Globe,
  Shield,
  ArrowRight,
  Sparkles,
  Share2,
  Bell
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import ServiceHero from '../ServiceHero';
import Breadcrumb from '../../components/common/Breadcrumb';

const MobileAppDevelopment: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const breadcrumbItems = [
    { label: 'システム開発', path: '/#services' },
    { label: 'モバイルアプリ開発' }
  ];

  const businessValues = [
    {
      icon: Download,
      title: "新規顧客の獲得",
      description: "App StoreやGoogle Playを通じた新規顧客へのリーチと、モバイルならではの顧客体験を提供します。",
      benefits: [
        "アプリを通じた新規顧客獲得",
        "モバイルファースト戦略の実現",
        "顧客エンゲージメントの向上"
      ]
    },
    {
      icon: Zap,
      title: "業務効率の改善",
      description: "社内業務のモバイル化により、場所を問わない業務遂行と迅速な情報共有を実現します。",
      benefits: [
        "モバイルワークの実現",
        "リアルタイムな情報共有",
        "ペーパーレス化の促進"
      ]
    },
    {
      icon: Globe,
      title: "ブランド価値の向上",
      description: "質の高いモバイルアプリを通じて、企業のブランド価値とイメージを向上させます。",
      benefits: [
        "企業イメージの向上",
        "顧客満足度の向上",
        "競争優位性の確保"
      ]
    }
  ];

  const appTypes = [
    {
      title: "ネイティブアプリ",
      description: "iOS/Android向けの高性能なネイティブアプリケーションを開発します。",
      features: [
        "高いパフォーマンス",
        "ネイティブUI/UX",
        "デバイス機能の最大活用",
        "セキュアな実装"
      ]
    },
    {
      title: "クロスプラットフォームアプリ",
      description: "効率的な開発と運用を実現するクロスプラットフォームアプリを開発します。",
      features: [
        "開発コストの最適化",
        "統一されたUI/UX",
        "迅速なアップデート",
        "効率的な保守運用"
      ]
    },
    {
      title: "PWA（Progressive Web App）",
      description: "Webの利点を活かしたプログレッシブウェブアプリを開発します。",
      features: [
        "素早いデプロイ",
        "オフライン対応",
        "インストール不要",
        "自動アップデート"
      ]
    }
  ];

  const developmentProcess = [
    {
      phase: "企画・要件定義",
      description: "ビジネスゴールとユーザーニーズを明確化し、最適なアプリ戦略を策定します。",
      activities: [
        "市場調査・競合分析",
        "ユーザーペルソナ設定",
        "機能要件の定義",
        "アプリ戦略の策定"
      ]
    },
    {
      phase: "UI/UXデザイン",
      description: "使いやすく魅力的なユーザー体験を設計・デザインします。",
      activities: [
        "ワイヤーフレーム作成",
        "UIデザイン制作",
        "プロトタイプ作成",
        "ユーザビリティテスト"
      ]
    },
    {
      phase: "開発・テスト",
      description: "高品質なコードの実装とテストにより、信頼性の高いアプリを開発します。",
      activities: [
        "アプリケーション開発",
        "単体・結合テスト",
        "セキュリティテスト",
        "パフォーマンス最適化"
      ]
    },
    {
      phase: "リリース・運用",
      description: "アプリストアへの公開と継続的な改善・運用を行います。",
      activities: [
        "ストア審査対応",
        "分析・改善",
        "バージョンアップ対応",
        "ユーザーサポート"
      ]
    }
  ];

  const caseStudies = [
    {
      industry: "小売業",
      title: "ショッピングアプリのリニューアル",
      description: "既存のECサイトをネイティブアプリ化し、モバイルに最適化されたショッピング体験を実現。",
      results: [
        "モバイル売上200%増",
        "顧客満足度40%向上",
        "リピート率35%増加"
      ]
    },
    {
      industry: "サービス業",
      title: "予約管理アプリの開発",
      description: "美容院チェーン向けに予約・顧客管理アプリを開発し、業務効率化を実現。",
      results: [
        "予約作業時間70%削減",
        "予約キャンセル率50%減少",
        "顧客データの一元管理実現"
      ]
    },
    {
      industry: "製造業",
      title: "工場点検アプリの開発",
      description: "製造ラインの点検作業をデジタル化し、ペーパーレスと効率化を実現。",
      results: [
        "点検時間40%短縮",
        "データ入力ミス90%削減",
        "月間30万枚の用紙削減"
      ]
    }
  ];

  const appFeatures = [
    {
      icon: Share2,
      title: "マルチデバイス対応",
      points: [
        "スマートフォン/タブレット対応",
        "画面サイズ最適化",
        "デバイス間データ同期"
      ]
    },
    {
      icon: Shield,
      title: "セキュリティ対策",
      points: [
        "データ暗号化",
        "生体認証対応",
        "脆弱性診断実施"
      ]
    },
    {
      icon: Bell,
      title: "プッシュ通知",
      points: [
        "リアルタイム通知",
        "ターゲティング配信",
        "通知分析・最適化"
      ]
    }
  ];

  return (
    <div>
      <ServiceHero 
        icon={Smartphone}
        title="モバイルアプリ開発"
        subtitle="Mobile App Development"
        description="ビジネスの成長を加速する、高品質なモバイルアプリケーションを開発します。"
        color="text-purple-400"
      />

      <Breadcrumb items={breadcrumbItems} />
      
      {/* ビジネス価値セクション */}
      <div ref={ref} className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">導入効果</h2>
            <p className="text-gray-600">モバイルアプリの導入により、以下のような効果が期待できます</p>
          </div>

          <div className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {businessValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
                  <div className="w-16 h-16 rounded-xl bg-purple-100 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600 mb-6">{value.description}</p>
                  <ul className="space-y-3">
                    {value.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <Check className="w-5 h-5 text-purple-500" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* アプリ種類セクション */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">アプリケーションの種類</h2>
            <p className="text-gray-600">目的に応じた最適なアプリケーション形態をご提案します</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {appTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
                <h3 className="text-2xl font-bold mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.description}</p>
                <ul className="space-y-3">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <Check className="w-5 h-5 text-purple-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 開発プロセスセクション */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">開発プロセス</h2>
            <p className="text-gray-600">アプリ開発の成功に向けた、体系的な開発プロセス</p>
          </div>

          <div className="space-y-8">
            {developmentProcess.map((process, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-purple-600">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{process.phase}</h3>
                    <p className="text-gray-600 mb-6">{process.description}</p>
                    <ul className="grid md:grid-cols-2 gap-4">
                      {process.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                          <Check className="w-5 h-5 text-purple-500" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 導入事例セクション */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">導入事例</h2>
            <p className="text-gray-600">様々な業界での導入実績をご紹介します</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
                <span className="inline-block px-4 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
                  {study.industry}
                </span>
                <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                <p className="text-gray-600 mb-6">{study.description}</p>
                <div className="space-y-4">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-purple-600">
                      <Sparkles className="w-5 h-5" />
                      <span className="font-medium">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* アプリ特徴セクション */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">アプリの特徴</h2>
            <p className="text-gray-600">高品質なモバイルアプリを実現する特徴</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {appFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="w-16 h-16 rounded-xl bg-purple-100 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-6">{feature.title}</h3>
                  <ul className="space-y-4">
                    {feature.points.map((point, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <Check className="w-5 h-5 text-purple-500" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* お問い合わせセクション */}
      <div className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">モバイルアプリ開発に関するご相談</h2>
          <p className="text-gray-600 mb-8">
            ビジネスに最適なモバイルアプリの開発について、お気軽にご相談ください
          </p>
          <a 
            href="/#contact" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            お問い合わせ
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileAppDevelopment;