// src/components/technology/Cloud/index.tsx
import React from 'react';
import { 
  Cloud, 
  Check, 
  Users, 
  Sparkles,
  ArrowRight,
  MonitorDot
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import TechnologyHero from '../TechnologyHero';
import Breadcrumb from '../../common/Breadcrumb';

const CloudInfrastructure: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const breadcrumbItems = [
    { label: '技術力', path: '/#technology' },
    { label: 'クラウドインフラ' }
  ];

  const features = [
    {
      title: "クラウド設計・構築",
      description: "最適なクラウドアーキテクチャの設計と実装",
      items: [
        "AWS/GCP/Azure",
        "マルチクラウド構成",
        "マイクロサービス設計",
        "サーバーレスアーキテクチャ"
      ]
    },
    {
      title: "コンテナ化・運用",
      description: "コンテナ技術を活用した柔軟なインフラ構築",
      items: [
        "Docker/Kubernetes",
        "CI/CD構築",
        "コンテナオーケストレーション",
        "自動スケーリング"
      ]
    },
    {
      title: "監視・運用保守",
      description: "24時間365日の安定運用体制",
      items: [
        "性能監視",
        "ログ分析",
        "障害対応",
        "セキュリティ監視"
      ]
    }
  ];

  const techStacks = [
    {
      category: "クラウドプラットフォーム",
      items: [
        { name: "AWS", level: 95 },
        { name: "Google Cloud", level: 90 },
        { name: "Microsoft Azure", level: 85 },
        { name: "Oracle Cloud", level: 80 }
      ]
    },
    {
      category: "コンテナ/オーケストレーション",
      items: [
        { name: "Docker", level: 95 },
        { name: "Kubernetes", level: 90 },
        { name: "OpenShift", level: 85 },
        { name: "Terraform", level: 90 }
      ]
    },
    {
      category: "監視/セキュリティ",
      items: [
        { name: "Prometheus", level: 90 },
        { name: "Grafana", level: 85 },
        { name: "ELK Stack", level: 90 },
        { name: "AWS CloudWatch", level: 95 }
      ]
    }
  ];

  const caseStudies = [
    {
      title: "大規模ECサイトのクラウド移行",
      description: "オンプレミスで運用していたECサイトをAWSに完全移行。運用コストの削減とスケーラビリティの向上を実現。",
      achievements: [
        "運用コスト45%削減",
        "ページ応答速度60%改善",
        "システム可用性99.99%達成"
      ]
    },
    {
      title: "マイクロサービスアーキテクチャの実現",
      description: "モノリシックなシステムをKubernetesベースのマイクロサービスアーキテクチャに刷新。開発効率と運用効率を大幅に改善。",
      achievements: [
        "デプロイ時間90%短縮",
        "リソース利用効率35%向上",
        "障害影響範囲80%削減"
      ]
    }
  ];

  const process = [
    {
      icon: Users,
      title: "要件分析・設計",
      description: "ビジネス要件に最適なクラウドアーキテクチャを設計",
      points: [
        "クラウド戦略の策定",
        "アーキテクチャ設計",
        "コスト最適化計画"
      ]
    },
    {
      icon: Cloud,
      title: "構築・移行",
      description: "安全確実なクラウド環境の構築と既存システムの移行",
      points: [
        "インフラ構築自動化",
        "段階的な移行実施",
        "無停止移行の実現"
      ]
    },
    {
      icon: MonitorDot,
      title: "運用・最適化",
      description: "24時間365日の安定運用と継続的な改善",
      points: [
        "運用自動化",
        "パフォーマンス監視",
        "コスト最適化"
      ]
    }
  ];

  return (
    <div>
      <TechnologyHero 
        icon={Cloud}
        title="クラウドインフラ"
        subtitle="Cloud Infrastructure"
        description="柔軟で信頼性の高いクラウドインフラストラクチャの設計・構築"
        color="text-indigo-400"
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
                      <Check className="w-5 h-5 text-indigo-500" />
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
            <p className="text-gray-600">最新のクラウド技術とツールを活用したインフラ構築</p>
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
                        <span className="text-indigo-600">{item.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-indigo-600 rounded-full"
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
            <h2 className="text-3xl font-bold mb-4">構築プロセス</h2>
            <p className="text-gray-600">確実な移行と安定運用を実現する体系的なプロセス</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-[calc(50%+1rem)] -translate-y-1/2 text-indigo-300 z-10">
                      <ArrowRight className="w-8 h-8" />
                    </div>
                  )}
                  <div className="bg-white p-8 rounded-2xl shadow-lg h-full relative z-0">
                    <div className="w-16 h-16 rounded-xl bg-indigo-100 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-600 mb-6">{step.description}</p>
                    <ul className="space-y-3">
                      {step.points.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                          <Check className="w-5 h-5 text-indigo-500" />
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
            <p className="text-gray-600">クラウド移行・構築の実績をご紹介します</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
                <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                <p className="text-gray-600 mb-6">{study.description}</p>
                <div className="space-y-4">
                  {study.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-indigo-600">
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
          <h2 className="text-3xl font-bold mb-6">クラウドインフラに関するご相談</h2>
          <p className="text-gray-600 mb-8">
            クラウド移行やインフラ構築について、お気軽にご相談ください
          </p>
          <a 
            href="/#contact" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            お問い合わせ
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CloudInfrastructure;