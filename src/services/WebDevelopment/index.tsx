// src/components/services/WebDevelopment/index.tsx
import React from 'react';
import { 
  Code2, 
  Check, 
  BarChart,
  Users,
  Clock,
  ShieldCheck,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import ServiceHero from '../ServiceHero';
import Breadcrumb from '../../components/common/Breadcrumb';

const WebDevelopment: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const breadcrumbItems = [
    { label: 'システム開発', path: '/#services' },
    { label: 'Webシステム開発' }
  ];

  const businessValues = [
    {
      icon: BarChart,
      title: "業務効率の向上",
      description: "手作業の自動化や業務フローの最適化により、作業時間を大幅に削減し、コア業務に集中できる環境を実現します。",
      benefits: [
        "作業時間の50%削減を実現",
        "人的ミスを90%削減",
        "データ入力作業の自動化"
      ]
    },
    {
      icon: Users,
      title: "顧客満足度の向上",
      description: "直感的なUI/UXと高度な機能により、お客様へのサービス品質を向上し、競争力の強化を実現します。",
      benefits: [
        "顧客対応時間の短縮",
        "サービス品質の向上",
        "顧客データの一元管理"
      ]
    },
    {
      icon: Clock,
      title: "迅速な経営判断",
      description: "リアルタイムなデータ分析と可視化により、的確な経営判断をサポートし、ビジネスチャンスを逃しません。",
      benefits: [
        "データのリアルタイム分析",
        "経営指標の可視化",
        "予測分析による意思決定支援"
      ]
    }
  ];

  const developmentProcess = [
    {
      phase: "要件定義・分析",
      description: "お客様の業務内容とニーズを深く理解し、最適なソリューションを設計します。",
      activities: [
        "現状の業務フロー分析",
        "課題とニーズの整理",
        "システム化による効果の試算",
        "最適なソリューションの提案"
      ]
    },
    {
      phase: "設計・開発",
      description: "使いやすさと拡張性を重視した設計により、長期的な運用を見据えたシステムを開発します。",
      activities: [
        "直感的なUI/UX設計",
        "セキュアなシステム設計",
        "段階的な開発と改善",
        "品質管理とテスト"
      ]
    },
    {
      phase: "運用・保守",
      description: "システム導入後も継続的なサポートと改善提案を行い、ビジネスの成長をサポートします。",
      activities: [
        "24時間365日の監視体制",
        "定期的な保守・メンテナンス",
        "システムの改善提案",
        "柔軟な機能拡張"
      ]
    }
  ];

  const caseStudies = [
    {
      industry: "製造業",
      title: "生産管理システムの刷新",
      description: "手作業での生産管理をシステム化し、リアルタイムな進捗管理と予測分析を実現。",
      results: [
        "生産効率30%向上",
        "在庫コスト40%削減",
        "納期遅延90%削減"
      ]
    },
    {
      industry: "小売業",
      title: "受発注管理システムの統合",
      description: "複数の受発注システムを統合し、一元管理による業務効率化を実現。",
      results: [
        "作業時間50%削減",
        "発注ミス95%削減",
        "在庫回転率25%向上"
      ]
    },
    {
      industry: "サービス業",
      title: "顧客管理システムの構築",
      description: "顧客データの一元管理と分析により、効果的なマーケティングを実現。",
      results: [
        "顧客満足度30%向上",
        "リピート率40%向上",
        "売上高20%増加"
      ]
    }
  ];

  const systemFeatures = [
    {
      icon: ShieldCheck,
      title: "セキュリティ",
      points: [
        "堅牢な認証・認可",
        "データ暗号化",
        "定期的なセキュリティ診断"
      ]
    },
    {
      icon: Users,
      title: "カスタマイズ性",
      points: [
        "柔軟な機能拡張",
        "業務フローに合わせた最適化",
        "段階的な機能追加"
      ]
    },
    {
      icon: Clock,
      title: "可用性",
      points: [
        "24時間365日の稼働",
        "災害対策（BCP対応）",
        "迅速な障害復旧"
      ]
    }
  ];

  return (
    <div>
      <ServiceHero 
        icon={Code2}
        title="Webシステム開発"
        subtitle="Web Development"
        description="お客様のビジネスに最適化された、高品質なWebシステムを開発します。"
        color="text-blue-400"
      />

      <Breadcrumb items={breadcrumbItems} />
      
      {/* ビジネス価値セクション */}
      <div ref={ref} className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">導入効果</h2>
            <p className="text-gray-600">Webシステムの導入により、以下のような効果が期待できます</p>
          </div>

          <div className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {businessValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
                  <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600 mb-6">{value.description}</p>
                  <ul className="space-y-3">
                    {value.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <Check className="w-5 h-5 text-blue-500" />
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

      {/* 開発プロセスセクション */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">開発プロセス</h2>
            <p className="text-gray-600">お客様のビジネスの成功に向けた、確実な開発プロセス</p>
          </div>

          <div className="space-y-8">
            {developmentProcess.map((process, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-blue-600">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{process.phase}</h3>
                    <p className="text-gray-600 mb-6">{process.description}</p>
                    <ul className="grid md:grid-cols-2 gap-4">
                      {process.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                          <Check className="w-5 h-5 text-blue-500" />
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
                <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                  {study.industry}
                </span>
                <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                <p className="text-gray-600 mb-6">{study.description}</p>
                <div className="space-y-4">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-blue-600">
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

      {/* システム特徴セクション */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">システムの特徴</h2>
            <p className="text-gray-600">安全で安定した運用を実現する特徴</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {systemFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-6">{feature.title}</h3>
                  <ul className="space-y-4">
                    {feature.points.map((point, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <Check className="w-5 h-5 text-blue-500" />
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
          <h2 className="text-3xl font-bold mb-6">Webシステム開発に関するご相談</h2>
          <p className="text-gray-600 mb-8">
            お客様のビジネスに最適なWebシステムの開発について、お気軽にご相談ください
          </p>
          <a 
            href="/#contact" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            お問い合わせ
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;