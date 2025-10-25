import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Layers, Database, Zap, Compass } from 'lucide-react';
import Breadcrumb from '../common/Breadcrumb';

const ScalabilityValuePage: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // パンくずリストの項目を定義
  const breadcrumbItems = [
    { label: '企業理念', path: '/#values' },
    { label: '拡張性' }
  ];

  const sections = [
    {
      icon: Database,
      title: 'アーキテクチャ設計',
      description: '将来の拡張を見据えた設計思想',
      details: [
        'マイクロサービスアーキテクチャの採用',
        'コンテナ技術を活用した柔軟な構成',
        'クラウドネイティブな設計アプローチ'
      ]
    },
    {
      icon: Zap,
      title: 'パフォーマンス最適化',
      description: '高速で安定したシステムの実現',
      details: [
        'データベース設計の最適化',
        'キャッシュ戦略の実装',
        'CDNの活用によるグローバル展開対応'
      ]
    },
    {
      icon: Layers,
      title: '拡張性への取り組み',
      description: 'ビジネスの成長に合わせた拡張性の確保',
      details: [
        'スケールアウト/スケールアップ対応',
        'モジュール化された設計',
        'APIファーストアプローチ'
      ]
    },
    {
      icon: Compass,
      title: '将来性への対応',
      description: '技術トレンドと市場変化への適応',
      details: [
        '最新技術の研究と導入検討',
        'レガシーシステムのモダナイゼーション',
        '継続的な改善プロセスの確立'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-yellow-500/10" />
        <div className="relative container mx-auto px-4">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-full bg-black/40 backdrop-blur-sm mb-6 md:mb-10 border-2 border-yellow-400/50 shadow-lg shadow-yellow-500/20">
              <img 
                src="/images/logo_yellow.svg" 
                alt="Senriganロゴ" 
                className="w-4 md:w-4 lg:w-5 h-4 md:h-4 lg:h-5 "
              />
              <span className="text-sm md:text-sm lg:text-base font-medium text-yellow-400">Scalability Value</span>
            </div>
          </div>

          <h1 className="mb-6 md:mb-10 leading-tight sm:leading-normal">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white">
              ビジネスの成長を支える
              <span className="block mt-3 md:mt-4 bg-gradient-to-r from-yellow-300 to-yellow-700 text-transparent bg-clip-text">
                拡張性の高い設計
              </span>
            </div>
          </h1>

          <p className="text-sm md:text-lg lg:text-lg text-white/90 leading-relaxed sm:max-w-lg sm:mx-auto px-4 md:px-0 text-justify">
            <span className="sm:hidden">
              お客様のビジネスの成長に合わせて柔軟に拡張できるシステム設計を提供します。将来を見据えたアーキテクチャと最適化された性能で、長期的な成長をサポートします。
            </span>
            <span className="hidden sm:inline text-left">
              お客様のビジネスの成長に合わせて柔軟に拡張できるシステム設計を提供します。
              将来を見据えたアーキテクチャと最適化された性能で、長期的な成長をサポートします。
            </span>
          </p>
        </div>
      </section>

      {/* パンくずリスト */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Content Sections */}
      <section className="relative py-10 md:py-24 bg-gray-200">
        <div className="container mx-auto px-4">
          <div ref={ref} className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div
                  key={index}
                  className={`transform transition-all duration-1000 ${
                    inView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="w-16 h-16 rounded-xl bg-yellow-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-8 h-8 text-yellow-600" />
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">
                      {section.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {section.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {section.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center gap-3 text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScalabilityValuePage;