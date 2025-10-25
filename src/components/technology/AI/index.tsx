// src/components/technology/AI/index.tsx
import React from 'react';
import { 
  Cpu, 
  Check,
  Sparkles,
  ArrowRight,
  Database,
  Brain,
  LineChart
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import TechnologyHero from '../TechnologyHero';
import Breadcrumb from '../../common/Breadcrumb';

const AI: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const breadcrumbItems = [
    { label: '技術力', path: '/#technology' },
    { label: 'AI・機械学習' }
  ];

  const features = [
    {
      title: "機械学習開発",
      description: "データの収集から分析、モデル開発まで一貫したソリューション",
      items: [
        "教師あり学習モデル開発",
        "教師なし学習モデル開発",
        "深層学習モデル実装",
        "強化学習システム"
      ]
    },
    {
      title: "データ分析・可視化",
      description: "高度なデータ分析による意思決定支援",
      items: [
        "予測分析",
        "異常検知",
        "パターン認識",
        "データ可視化"
      ]
    },
    {
      title: "AI実装・運用",
      description: "本番環境でのAIシステムの実装と継続的な改善",
      items: [
        "モデルのデプロイ",
        "パフォーマンス監視",
        "継続的な改善",
        "MLOps構築"
      ]
    }
  ];

  const techStacks = [
    {
      category: "機械学習フレームワーク",
      items: [
        { name: "TensorFlow", level: 95 },
        { name: "PyTorch", level: 90 },
        { name: "scikit-learn", level: 95 },
        { name: "Keras", level: 85 }
      ]
    },
    {
      category: "データ処理・分析",
      items: [
        { name: "Python/NumPy/Pandas", level: 95 },
        { name: "Apache Spark", level: 85 },
        { name: "Jupyter", level: 90 },
        { name: "R", level: 80 }
      ]
    },
    {
      category: "MLOps/デプロイ",
      items: [
        { name: "Docker/Kubernetes", level: 90 },
        { name: "MLflow", level: 85 },
        { name: "Kubeflow", level: 80 },
        { name: "TensorFlow Serving", level: 85 }
      ]
    }
  ];

  const caseStudies = [
    {
      title: "製造業向け予知保全システム",
      description: "IoTセンサーデータと機械学習を組み合わせた予知保全システムを開発。設備の故障を事前に予測し、メンテナンスコストを大幅に削減。",
      achievements: [
        "設備故障の予測精度95%達成",
        "メンテナンスコスト40%削減",
        "計画外停止時間80%削減"
      ]
    },
    {
      title: "小売業向け需要予測システム",
      description: "過去の販売データと外部要因を考慮した高精度な需要予測システムを開発。在庫の最適化と売上向上を実現。",
      achievements: [
        "在庫コスト30%削減",
        "欠品率70%削減",
        "売上高15%向上"
      ]
    }
  ];

  const process = [
    {
      icon: Database,
      title: "データ収集・前処理",
      description: "高品質なデータセットの構築",
      points: [
        "データクレンジング",
        "特徴量エンジニアリング",
        "データ拡張"
      ]
    },
    {
      icon: Brain,
      title: "モデル開発・検証",
      description: "最適なAIモデルの開発と評価",
      points: [
        "アルゴリズム選定",
        "ハイパーパラメータ調整",
        "性能評価"
      ]
    },
    {
      icon: LineChart,
      title: "デプロイ・運用",
      description: "本番環境での継続的な改善",
      points: [
        "モデルデプロイ",
        "パフォーマンス監視",
        "継続的な改善"
      ]
    }
  ];

  const certifications = [
    {
      title: "AI・機械学習認定資格",
      items: [
        "Google Cloud Professional Machine Learning Engineer",
        "AWS Certified Machine Learning",
        "TensorFlow Developer Certificate"
      ]
    },
    {
      title: "データサイエンス資格",
      items: [
        "データサイエンティスト検定",
        "統計検定準1級",
        "Python Data Science Certificate"
      ]
    }
  ];

  return (
    <div>
      <TechnologyHero 
        icon={Cpu}
        title="AI・機械学習"
        subtitle="AI & Machine Learning"
        description="最新のAI技術を活用したビジネスソリューションの提供"
        color="text-red-400"
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
                      <Check className="w-5 h-5 text-red-500" />
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
            <p className="text-gray-600">最新のAI・機械学習技術とツールによる開発</p>
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
                        <span className="text-red-600">{item.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-red-600 rounded-full"
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

      {/* 認証・資格セクション */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">認証・資格</h2>
            <p className="text-gray-600">AI・機械学習分野における専門性の証明</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-6 text-red-600">{cert.title}</h3>
                <ul className="space-y-4">
                  {cert.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Cpu className="w-5 h-5 text-red-500" />
                      <span className="text-gray-700">{item}</span>
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
            <p className="text-gray-600">効率的なAI開発のための体系的なアプローチ</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-[calc(50%+1rem)] -translate-y-1/2 text-red-300 z-10">
                      <ArrowRight className="w-8 h-8" />
                    </div>
                  )}
                  <div className="bg-white p-8 rounded-2xl shadow-lg h-full relative z-0">
                    <div className="w-16 h-16 rounded-xl bg-red-100 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-600 mb-6">{step.description}</p>
                    <ul className="space-y-3">
                      {step.points.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                          <Check className="w-5 h-5 text-red-500" />
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
            <p className="text-gray-600">AI・機械学習の活用実績をご紹介します</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
                <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                <p className="text-gray-600 mb-6">{study.description}</p>
                <div className="space-y-4">
                  {study.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-red-600">
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
          <h2 className="text-3xl font-bold mb-6">AI・機械学習に関するご相談</h2>
          <p className="text-gray-600 mb-8">
            AI技術の活用やシステム開発について、お気軽にご相談ください
          </p>
          <a 
            href="/#contact" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            お問い合わせ
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AI;