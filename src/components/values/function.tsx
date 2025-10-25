import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Cpu, Code, Shield, Settings } from 'lucide-react';
import Breadcrumb from '../common/Breadcrumb';

const FunctionValuePage: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // パンくずリストの項目を定義
  const breadcrumbItems = [
    { label: '企業理念', path: '/#values' },
    { label: '機能' }
  ];

  const sections = [
    {
      icon: Code,
      title: 'システム開発アプローチ',
      description: '最新の開発手法とベストプラクティスの採用',
      details: [
        'アジャイル開発手法の活用',
        'テスト駆動開発（TDD）の実践',
        '継続的インテグレーション/デリバリー（CI/CD）'
      ]
    },
    {
      icon: Cpu,
      title: '技術スタック',
      description: '信頼性の高い最新技術の採用',
      details: [
        'モダンなフロントエンド技術（React, Next.js）',
        'スケーラブルなバックエンド（Node.js, Go）',
        'クラウドネイティブアーキテクチャ'
      ]
    },
    {
      icon: Shield,
      title: 'セキュリティ対策',
      description: '堅牢なセキュリティ体制の確立',
      details: [
        'セキュリティバイデザインの実践',
        '定期的な脆弱性診断の実施',
        'データ暗号化とアクセス制御'
      ]
    },
    {
      icon: Settings,
      title: '保守運用体制',
      description: '安定したシステム運用のための体制',
      details: [
        '24時間365日のモニタリング体制',
        'インシデント対応プロセスの整備',
        '定期的なメンテナンスと改善'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-purple-500/10" />
        <div className="relative container mx-auto px-4">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-full bg-black/40 backdrop-blur-sm mb-6 md:mb-10 border-2 border-purple-400/50 shadow-lg shadow-purple-500/20">
              <img 
                src="/images/logo_purple.svg" 
                alt="Senriganロゴ" 
                className="w-4 md:w-4 lg:w-5 h-4 md:h-4 lg:h-5"
              />
              <span className="text-sm md:text-sm lg:text-base font-medium text-purple-400">Function Value</span>
            </div>
          </div>

          <h1 className="mb-6 md:mb-10 leading-tight sm:leading-normal">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white">
              確かな技術力で支える
              <span className="block mt-3 md:mt-4 bg-gradient-to-r from-purple-300 to-purple-700 text-transparent bg-clip-text">
                ビジネスの成長
              </span>
            </div>
          </h1>

          <p className="text-sm md:text-lg lg:text-lg text-white/90 leading-relaxed sm:max-w-lg sm:mx-auto px-4 md:px-0 text-justify">
            <span className="sm:hidden">
              最新の技術と開発手法を活用し、セキュアで安定したシステムを提供します。お客様のビジネスの成長を技術の側面から強力にサポートします。
            </span>
            <span className="hidden sm:inline text-left">
              最新の技術と開発手法を活用し、セキュアで安定したシステムを提供します。
              お客様のビジネスの成長を技術の側面から強力にサポートします。
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
                    <div className="w-16 h-16 rounded-xl bg-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-8 h-8 text-purple-600" />
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                      {section.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {section.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {section.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center gap-3 text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
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

export default FunctionValuePage;