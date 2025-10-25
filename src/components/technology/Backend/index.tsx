import React from 'react';
import { 
  Database, 
  Check, 
  Users, 
  Sparkles,
  ArrowRight,
  Server
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import TechnologyHero from '../TechnologyHero';
import Breadcrumb from '../../common/Breadcrumb';

const BackendDevelopment: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const breadcrumbItems = [
    { label: '技術力', path: '/#technology' },
    { label: 'バックエンド開発' }
  ];

  const features = [
    {
      title: "API開発",
      description: "安全で効率的なAPIの設計・実装",
      items: [
        "RESTful API設計",
        "GraphQL実装",
        "API認証・認可",
        "APIドキュメント作成"
      ]
    },
    {
      title: "データベース設計",
      description: "スケーラブルなデータベース設計と最適化",
      items: [
        "RDBMSの設計・運用",
        "NoSQLデータベース",
        "パフォーマンスチューニング",
        "データマイグレーション"
      ]
    },
    {
      title: "セキュリティ対策",
      description: "堅牢なセキュリティ実装による安全性の確保",
      items: [
        "脆弱性対策",
        "暗号化実装",
        "セキュアコーディング",
        "セキュリティ監査対応"
      ]
    }
  ];

  const techStacks = [
    {
      category: "言語・フレームワーク",
      items: [
        { name: "Node.js", level: 95 },
        { name: "Python/Django", level: 90 },
        { name: "Java/Spring", level: 85 },
        { name: "Go", level: 80 }
      ]
    },
    {
      category: "データベース",
      items: [
        { name: "MySQL/PostgreSQL", level: 95 },
        { name: "MongoDB", level: 90 },
        { name: "Redis", level: 85 },
        { name: "Elasticsearch", level: 80 }
      ]
    },
    {
      category: "インフラ・ツール",
      items: [
        { name: "Docker/Kubernetes", level: 90 },
        { name: "CI/CD", level: 85 },
        { name: "AWS/GCP", level: 90 },
        { name: "Nginx/Apache", level: 85 }
      ]
    }
  ];

  const caseStudies = [
    {
      title: "大規模ECサイトのバックエンド刷新",
      description: "モノリシックなレガシーシステムをマイクロサービスアーキテクチャに刷新。システムの安定性と拡張性を大幅に向上。",
      achievements: [
        "レスポンス時間70%改善",
        "システム稼働率99.99%達成",
        "運用コスト40%削減"
      ]
    },
    {
      title: "金融システムのAPI基盤構築",
      description: "セキュアで高性能なAPI基盤を構築。複数のレガシーシステムを統合し、新しいサービス展開を加速。",
      achievements: [
        "API処理速度200%向上",
        "システム連携時間80%削減",
        "新規サービス開発期間50%短縮"
      ]
    }
  ];

  const process = [
    {
      icon: Users,
      title: "要件分析・設計",
      description: "ビジネス要件を綿密に分析し、最適なアーキテクチャを設計",
      points: [
        "システム要件の分析",
        "データモデリング",
        "アーキテクチャ設計"
      ]
    },
    {
      icon: Database,
      title: "開発・テスト",
      description: "高品質なコード実装とテスト自動化による品質担保",
      points: [
        "API実装",
        "自動テスト構築",
        "セキュリティテスト"
      ]
    },
    {
      icon: Server,
      title: "デプロイ・運用",
      description: "安定したシステム運用と継続的な改善",
      points: [
        "CI/CD構築",
        "監視体制確立",
        "パフォーマンス最適化"
      ]
    }
  ];

  return (
    <div>
      <TechnologyHero 
        icon={Database}
        title="バックエンド開発"
        subtitle="Backend Development"
        description="スケーラブルで安定したバックエンドシステムの構築"
        color="text-purple-400"
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
                      <Check className="w-5 h-5 text-purple-500" />
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
            <p className="text-gray-600">信頼性の高いバックエンド開発を支える技術力</p>
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
                        <span className="text-purple-600">{item.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-purple-600 rounded-full"
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
            <p className="text-gray-600">徹底した品質管理による確実なシステム開発</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-[calc(50%+1rem)] -translate-y-1/2 text-purple-300 z-10">
                      <ArrowRight className="w-8 h-8" />
                    </div>
                  )}
                  <div className="bg-white p-8 rounded-2xl shadow-lg h-full relative z-0">
                    <div className="w-16 h-16 rounded-xl bg-purple-100 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-600 mb-6">{step.description}</p>
                    <ul className="space-y-3">
                      {step.points.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                          <Check className="w-5 h-5 text-purple-500" />
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
            <p className="text-gray-600">バックエンド開発の実績をご紹介します</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
                <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                <p className="text-gray-600 mb-6">{study.description}</p>
                <div className="space-y-4">
                  {study.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-purple-600">
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
          <h2 className="text-3xl font-bold mb-6">バックエンド開発に関するご相談</h2>
          <p className="text-gray-600 mb-8">
            スケーラブルで安定したバックエンドシステムの開発について、お気軽にご相談ください
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

export default BackendDevelopment;