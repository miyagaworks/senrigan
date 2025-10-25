import React from 'react';
import { 
  Code2, 
  Check, 
  LineChart, 
  Users, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import TechnologyHero from '../TechnologyHero';
import Breadcrumb from '../../common/Breadcrumb';

const FrontendDevelopment: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const breadcrumbItems = [
    { label: '技術力', path: '/#technology' },
    { label: 'フロントエンド開発' }
  ];

  const features = [
    {
      title: "モダンフレームワーク",
      description: "最新のJavaScriptフレームワークを活用した開発",
      items: [
        "React/Next.js",
        "Vue.js/Nuxt.js",
        "TypeScript",
        "状態管理（Redux/Vuex）"
      ]
    },
    {
      title: "パフォーマンス最適化",
      description: "高速で快適なユーザー体験の実現",
      items: [
        "コード分割",
        "レンダリング最適化",
        "画像最適化",
        "キャッシュ戦略"
      ]
    },
    {
      title: "UI/UXデザイン連携",
      description: "デザインとの密接な連携による高品質な実装",
      items: [
        "アニメーション実装",
        "レスポンシブデザイン",
        "アクセシビリティ対応",
        "クロスブラウザ対応"
      ]
    }
  ];

  const techStacks = [
    {
      category: "フレームワーク",
      items: [
        { name: "React", level: 95 },
        { name: "Vue.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Nuxt.js", level: 80 }
      ]
    },
    {
      category: "言語",
      items: [
        { name: "TypeScript", level: 95 },
        { name: "JavaScript", level: 100 },
        { name: "HTML5", level: 100 },
        { name: "CSS3/Sass", level: 95 }
      ]
    },
    {
      category: "ツール・ライブラリ",
      items: [
        { name: "Redux/Vuex", level: 90 },
        { name: "Webpack", level: 85 },
        { name: "Jest/Vitest", level: 90 },
        { name: "Storybook", level: 85 }
      ]
    }
  ];

  const caseStudies = [
    {
      title: "大手ECサイトのフロントエンド刷新",
      description: "レガシーなjQueryベースのECサイトをReactベースのモダンなシステムに刷新。ページ読み込み時間を60%削減し、コンバージョン率が25%向上。",
      achievements: [
        "ページ読み込み時間60%削減",
        "コンバージョン率25%向上",
        "管理画面の操作効率30%改善"
      ]
    },
    {
      title: "SaaSプロダクトのUI/UX改善",
      description: "B2B向けSaaSプロダクトのフロントエンド開発。複雑な業務プロセスを直感的に操作できるUIを実現し、ユーザーの作業効率を大幅に改善。",
      achievements: [
        "ユーザー作業時間40%削減",
        "新規機能の学習時間50%削減",
        "ユーザー満足度92%達成"
      ]
    }
  ];

  const process = [
    {
      icon: Users,
      title: "要件定義・設計",
      description: "ユーザーニーズとビジネス要件を深く理解し、最適なフロントエンド設計を提案します。",
      points: [
        "ユーザーストーリーの分析",
        "技術スタックの選定",
        "アーキテクチャ設計"
      ]
    },
    {
      icon: Code2,
      title: "開発・実装",
      description: "最新のベストプラクティスに基づいた、保守性の高いコードを実装します。",
      points: [
        "コンポーネント設計",
        "状態管理の実装",
        "ユニットテスト作成"
      ]
    },
    {
      icon: LineChart,
      title: "最適化・改善",
      description: "パフォーマンスとユーザー体験を継続的に最適化します。",
      points: [
        "パフォーマンス計測",
        "ボトルネック特定",
        "最適化の実施"
      ]
    }
  ];

  return (
    <div>
      <TechnologyHero 
        icon={Code2}
        title="フロントエンド開発"
        subtitle="Frontend Development"
        description="最新のフレームワークを活用した、高パフォーマンスなWebアプリケーション開発"
        color="text-blue-400"
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* コア機能セクション */}
      <div ref={ref} className="py-24">
        <div className="container mx-auto px-4">
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
                      <Check className="w-5 h-5 text-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 技術スタックセクション */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">技術スタック</h2>
            <p className="text-gray-600">最新のフロントエンド技術を活用し、高品質な開発を実現します</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {techStacks.map((stack, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-6">{stack.category}</h3>
                <div className="space-y-6">
                  {stack.items.map((item, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-blue-600">{item.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-600 rounded-full"
                          style={{ width: `${item.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
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
            <p className="text-gray-600">体系的な開発プロセスにより、確実なプロジェクト遂行を実現します</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-[calc(50%+1rem)] -translate-y-1/2 text-blue-300 z-10">
                      <ArrowRight className="w-8 h-8" />
                    </div>
                  )}
                  <div className="bg-white p-8 rounded-2xl shadow-lg h-full relative z-0">
                    <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-600 mb-6">{step.description}</p>
                    <ul className="space-y-3">
                      {step.points.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                          <Check className="w-5 h-5 text-blue-500" />
                          {point}
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

      {/* 導入事例セクション */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">導入事例</h2>
            <p className="text-gray-600">フロントエンド開発の実績をご紹介します</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
                <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                <p className="text-gray-600 mb-6">{study.description}</p>
                <div className="space-y-4">
                  {study.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-blue-600">
                      <Sparkles className="w-5 h-5" />
                      <span className="font-medium">{achievement}</span>
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
          <h2 className="text-3xl font-bold mb-6">フロントエンド開発に関するご相談</h2>
          <p className="text-gray-600 mb-8">
            最新のフロントエンド技術を活用した開発について、お気軽にご相談ください
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

export default FrontendDevelopment;