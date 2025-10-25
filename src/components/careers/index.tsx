// src/components/careers/index.tsx
import React from 'react';
import { Briefcase, Heart, Award, GraduationCap, Code, Layout, LineChart, ArrowRight } from 'lucide-react';
import Section from '../Section';
import Breadcrumb from '../common/Breadcrumb';
import { Link } from 'react-router-dom';

const Careers: React.FC = () => {
  // useInViewが不要なので削除
  const breadcrumbItems = [
    { label: '採用情報' }
  ];

  const positions = [
    {
      icon: Code,
      title: 'エンジニア職',
      description: 'フロントエンド、バックエンド、インフラなど、最新技術を活用した開発に携わります。',
      requirements: [
        'Web開発経験（実務2年以上）',
        'React/Vue.js等のモダンフレームワークの使用経験',
        'チーム開発の経験'
      ]
    },
    {
      icon: Layout,
      title: 'デザイナー職',
      description: 'UI/UXデザインを中心に、ユーザー体験の向上に貢献します。',
      requirements: [
        'UIデザインの実務経験（2年以上）',
        'デザインツールの使用経験（Figma等）',
        'Webサイト/アプリのデザイン経験'
      ]
    },
    {
      icon: LineChart,
      title: 'プロジェクトマネージャー',
      description: 'プロジェクトの進行管理、クライアントとの折衝を担当します。',
      requirements: [
        'IT業界でのPM経験（3年以上）',
        'アジャイル開発の知識・経験',
        'コミュニケーション能力'
      ]
    }
  ];

  const benefits = [
    {
      icon: GraduationCap,
      title: '教育・研修制度',
      items: [
        '新入社員研修プログラム',
        '技術勉強会の定期開催',
        '資格取得支援制度',
        '書籍購入補助'
      ]
    },
    {
      icon: Heart,
      title: '福利厚生',
      items: [
        '完全週休2日制',
        'フレックスタイム制',
        'リモートワーク可',
        '各種社会保険完備'
      ]
    },
    {
      icon: Award,
      title: '評価・報酬',
      items: [
        '年2回の昇給機会',
        '業績連動賞与',
        'スキル手当',
        '報奨金制度'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* ヘッダーセクション */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-blue-500/10" />
        <div className="relative container mx-auto px-4">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/40 backdrop-blur-sm mb-8 border-2 border-blue-400/50 shadow-lg shadow-blue-500/20">
              <Briefcase className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium text-blue-400">Join Our Team</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-6">
            採用情報
          </h1>
          
          <p className="text-lg text-white/90 text-center max-w-2xl mx-auto">
            私たちと共に、テクノロジーの力で社会に新しい価値を創造しませんか？
            チャレンジ精神を持った仲間を募集しています。
          </p>
        </div>
      </section>

      <Breadcrumb items={breadcrumbItems} />

      {/* 募集職種セクション */}
      <Section className="py-24 bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">募集職種</h2>
            <p className="text-gray-600 text-center mb-12">
              経験やスキルに応じて、最適なポジションでの採用を検討いたします
            </p>

            <div className="space-y-8">
              {positions.map((position, index) => {
                const Icon = position.icon;
                return (
                  <div key={index} className="card-base">
                    <div className="card-icon">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{position.title}</h3>
                    <p className="text-gray-600 mb-6">{position.description}</p>
                    <div className="space-y-2">
                      {position.requirements.map((req, idx) => (
                        <div key={idx} className="info-row">
                          <span className="text-gray-700">{req}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6">
                      <a href="#contact" className="flex items-center gap-2 text-blue-600 font-medium hover:translate-x-2 transition-transform">
                      <Link 
                        to="/careers/apply"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        応募する
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      {/* 福利厚生セクション */}
      <Section className="py-24 bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">福利厚生</h2>
            <p className="text-gray-600 text-center mb-12">
              社員一人一人が最大限の力を発揮できる環境を整えています
            </p>

            <div className="space-y-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="card-base">
                    <div className="card-icon">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                    <div className="space-y-2">
                      {benefit.items.map((item, idx) => (
                        <div key={idx} className="info-row">
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      {/* 採用プロセスセクション */}
      <Section className="py-24 bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">採用プロセス</h2>
            <div className="card-base">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">1</div>
                  <div className="flex-1 text-left">
                    <h3 className="font-bold mb-2">書類選考</h3>
                    <p className="text-gray-600">履歴書、職務経歴書をご提出ください</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">2</div>
                  <div className="flex-1 text-left">
                    <h3 className="font-bold mb-2">カジュアル面談</h3>
                    <p className="text-gray-600">オンラインで気軽な雰囲気で面談を行います</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">3</div>
                  <div className="flex-1 text-left">
                    <h3 className="font-bold mb-2">技術面接</h3>
                    <p className="text-gray-600">実務経験やスキルについて詳しくお聞きします</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">4</div>
                  <div className="flex-1 text-left">
                    <h3 className="font-bold mb-2">最終面接</h3>
                    <p className="text-gray-600">経営陣との面接を行います</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Link 
                  to="/careers/apply"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  応募する
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Careers;