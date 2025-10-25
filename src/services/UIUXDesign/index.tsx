// src/components/services/UIUXDesign/index.tsx
import React from 'react';
import { 
  Layout, 
  Check, 
  Users, 
  PenTool,
  Eye,
  Sparkles,
  ArrowRight,
  Globe,
  LineChart,
  Zap
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import ServiceHero from '../ServiceHero';
import Breadcrumb from '../../components/common/Breadcrumb';

const UIUXDesign: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const breadcrumbItems = [
    { label: 'システム開発', path: '/#services' },
    { label: 'UI/UXデザイン' }
  ];

  const features = [
    {
      title: "UXリサーチ・設計",
      description: "ユーザーニーズを深く理解し、最適な体験を設計",
      items: [
        "ユーザーリサーチ",
        "ペルソナ設定",
        "カスタマージャーニー",
        "ワイヤーフレーム作成"
      ]
    },
    {
      title: "UIデザイン",
      description: "美しく使いやすいインターフェースのデザイン",
      items: [
        "モックアップデザイン",
        "プロトタイプ作成",
        "アニメーション設計",
        "ビジュアルデザイン"
      ]
    },
    {
      title: "実装・検証",
      description: "デザインの実装とユーザビリティの検証",
      items: [
        "ユーザビリティテスト",
        "A/Bテスト",
        "アクセシビリティ対応",
        "改善提案"
      ]
    }
  ];

  const designProcess = [
    {
      icon: Users,
      title: "ユーザーリサーチ",
      description: "ユーザーの行動と要望を深く理解",
      steps: [
        "ユーザーインタビュー",
        "行動観察",
        "アンケート調査",
        "競合分析"
      ]
    },
    {
      icon: PenTool,
      title: "デザイン設計",
      description: "使いやすさと見た目の両立",
      steps: [
        "情報設計",
        "ワイヤーフレーム作成",
        "UI設計",
        "プロトタイピング"
      ]
    },
    {
      icon: Eye,
      title: "検証・改善",
      description: "実際の使用感を確認し最適化",
      steps: [
        "ユーザビリティテスト",
        "フィードバック収集",
        "改善提案",
        "イテレーション"
      ]
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: "ユーザー満足度の向上",
      description: "直感的な操作性と魅力的なデザインにより、ユーザー満足度が向上します。",
      stats: "顧客満足度平均40%向上"
    },
    {
      icon: LineChart,
      title: "コンバージョン率の改善",
      description: "最適化されたUIによって、目的のアクションへの誘導が改善されます。",
      stats: "コンバージョン率平均25%向上"
    },
    {
      icon: Zap,
      title: "業務効率の向上",
      description: "使いやすいインターフェースにより、作業時間が短縮されます。",
      stats: "作業時間平均35%削減"
    }
  ];

  const caseStudies = [
    {
      title: "ECサイトのUI/UX改善",
      industry: "小売業",
      description: "複雑な購入プロセスを簡素化し、ユーザー体験を大幅に改善。",
      results: [
        "カート完了率45%向上",
        "離脱率30%削減",
        "顧客満足度40%向上"
      ]
    },
    {
      title: "業務システムのUIリニューアル",
      industry: "製造業",
      description: "従業員の使用する基幹システムのUIを刷新し、操作性を向上。",
      results: [
        "作業時間50%削減",
        "入力ミス80%削減",
        "従業員満足度60%向上"
      ]
    },
    {
      title: "医療システムのUX改善",
      industry: "医療",
      description: "医療従事者と患者双方の使いやすさを考慮したUI/UXの実現。",
      results: [
        "操作習得時間40%削減",
        "患者待ち時間35%削減",
        "医療ミス90%削減"
      ]
    }
  ];

  return (
    <div>
      <ServiceHero 
        icon={Layout}
        title="UI/UXデザイン"
        subtitle="UI/UX Design"
        description="ユーザー体験を最優先に考えた、魅力的なデザインを提供します。"
        color="text-yellow-400"
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* サービス内容セクション */}
      <div ref={ref} className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">サービス内容</h2>
            <p className="text-gray-600">ユーザー中心の設計アプローチで、最適なUI/UXを実現します</p>
          </div>

          <div className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <Check className="w-5 h-5 text-yellow-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* デザインプロセスセクション */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">デザインプロセス</h2>
            <p className="text-gray-600">ユーザー中心設計の手法に基づいた体系的なプロセス</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {designProcess.map((process, index) => {
              const Icon = process.icon;
              return (
                <div key={index} className="relative">
                  {index < designProcess.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-[calc(50%+1rem)] -translate-y-1/2 text-yellow-300 z-10">
                      <ArrowRight className="w-8 h-8" />
                    </div>
                  )}
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="w-16 h-16 rounded-xl bg-yellow-100 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-yellow-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{process.title}</h3>
                    <p className="text-gray-600 mb-6">{process.description}</p>
                    <ul className="space-y-3">
                      {process.steps.map((step, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                          <Check className="w-5 h-5 text-yellow-500" />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 期待される効果セクション */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">期待される効果</h2>
            <p className="text-gray-600">UI/UXデザイン改善がもたらす具体的な効果</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="w-16 h-16 rounded-xl bg-yellow-100 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 mb-6">{benefit.description}</p>
                  <div className="flex items-center gap-2 text-yellow-600 font-bold">
                    <Sparkles className="w-5 h-5" />
                    {benefit.stats}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 導入事例セクション */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">導入事例</h2>
            <p className="text-gray-600">UI/UXデザイン改善の実績をご紹介します</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
                <span className="inline-block px-4 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm font-medium mb-4">
                  {study.industry}
                </span>
                <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                <p className="text-gray-600 mb-6">{study.description}</p>
                <div className="space-y-4">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-yellow-600">
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

      {/* お問い合わせセクション */}
      <div className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">UI/UXデザインに関するご相談</h2>
          <p className="text-gray-600 mb-8">
            ユーザー体験の向上について、お気軽にご相談ください
          </p>
          <a 
            href="/#contact" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
          >
            お問い合わせ
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default UIUXDesign;