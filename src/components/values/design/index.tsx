import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { 
  Palette, 
  Layout, 
  Box, 
  LineChart, 
  ArrowRight
} from 'lucide-react';
import Breadcrumb from '../../common/Breadcrumb';

const DesignValuePage: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // パンくずリストの項目を定義
  const breadcrumbItems = [
    { label: '企業理念', path: '/#values' },
    { label: 'デザイン' }
  ];

  const sections = [
    {
      icon: Layout,
      title: 'UIデザインの考え方',
      description: 'ユーザーの直感的な操作を実現する美しいインターフェースデザイン',
      details: [
        'シンプルで分かりやすいレイアウト設計',
        'アクセシビリティに配慮したデザイン',
        'ブランドイメージを反映したカラーパレット'
      ],
      link: '/values/design/ui-approach'
    },
    {
      icon: LineChart,
      title: 'UXデザインプロセス',
      description: 'ユーザー中心設計による最適な体験の創出',
      details: [
        'ユーザーリサーチとペルソナ設定',
        'ユーザージャーニーマップの作成',
        'プロトタイプ作成とユーザーテスト'
      ]
    },
    {
      icon: Box,
      title: 'デザインシステム',
      description: '一貫性のある体験を提供するためのガイドライン',
      details: [
        'コンポーネントライブラリの整備',
        'デザインガイドラインの策定',
        'アトミックデザインの採用'
      ]
    },
    {
      icon: Palette,
      title: '実績事例',
      description: 'これまでに手がけた主要なプロジェクト',
      details: [
        '大手ECサイトのUI/UXリニューアル',
        '金融系Webアプリケーションの開発',
        'SaaSプロダクトのデザインシステム構築'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-blue-500/10" />
        <div className="relative container mx-auto px-4">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-full bg-black/40 backdrop-blur-sm mb-6 md:mb-10 border-2 border-blue-400/50 shadow-lg shadow-blue-500/20">
              <img 
                src="/images/logo_blue.svg" 
                alt="Senriganロゴ" 
                className="w-4 md:w-4 lg:w-5 h-4 md:h-4 lg:h-5"
              />
              <span className="text-sm md:text-sm lg:text-base font-medium text-blue-400">Design Value</span>
            </div>
          </div>

          <h1 className="mb-6 md:mb-10 leading-tight sm:leading-normal">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white">
              デザインで実現する
              <span className="block mt-3 md:mt-4 bg-gradient-to-r from-blue-300 to-blue-700 text-transparent bg-clip-text">
                ユーザー体験
              </span>
            </div>
          </h1>

          <p className="text-sm md:text-lg lg:text-lg text-white/90 leading-relaxed sm:max-w-lg sm:mx-auto text-justify px-4 md:px-0">
            美しさと使いやすさを兼ね備えたUIデザイン、ユーザー中心のUXデザイン、そして一貫性のあるデザインシステムの構築まで。私たちは最高のユーザー体験を提供するために、デザインのあらゆる側面にこだわります。
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
              const CardContent = () => (
                <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {section.title}
                    </h2>
                    {section.link && (
                      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all text-blue-600" />
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {section.description}
                  </p>
                  
                  <ul className="space-y-2 mb-4">
                    {section.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-3 text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
              
                  {section.link && (
                    <div className="flex items-center gap-2 text-blue-600 font-medium mt-6 group-hover:translate-x-2 transition-transform">
                      詳しく見る
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );

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
                  {section.link ? (
                    <Link to={section.link}>
                      <CardContent />
                    </Link>
                  ) : (
                    <CardContent />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignValuePage;