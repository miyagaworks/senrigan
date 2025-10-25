import React from 'react';
import { Code2, Smartphone, Layout, Check } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { LucideIcon } from 'lucide-react';
import Section from './Section';

// 型定義
type ColorType = 'blue' | 'purple' | 'yellow';
type ColorMapType = {
  [key in ColorType]: {
    bg: string;
    text: string;
  }
};

interface ServiceHeroProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  color: string;
}

interface ServiceFeature {
  title: string;
  description: string;
  items: string[];
}

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  color: ColorType;
  href: string;
}

// メインのServicesコンポーネント
const Services: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services: ServiceCardProps[] = [
    {
      icon: Code2,
      title: 'Webシステム開発',
      description: '業務効率化から売上向上まで、お客様のビジネスに最適なWebシステムを開発します。',
      features: ['要件定義', 'UI/UX設計', 'フロント/バックエンド開発', '保守運用'],
      color: 'blue',
      href: '/services/web-development'
    },
    {
      icon: Smartphone,
      title: 'モバイルアプリ開発',
      description: 'iOS/Androidに対応したネイティブアプリやクロスプラットフォームアプリを開発します。',
      features: ['iOS/Android対応', 'ハイブリッドアプリ', 'PWA開発', 'アプリ保守'],
      color: 'purple',
      href: '/services/mobile-development'
    },
    {
      icon: Layout,
      title: 'UI/UXデザイン',
      description: 'ユーザー体験を重視した、使いやすく美しいインターフェースをデザインします。',
      features: ['ワイヤーフレーム作成', 'プロトタイプ設計', 'ビジュアルデザイン', 'ユーザビリティテスト'],
      color: 'yellow',
      href: '/services/design'
    }
  ];

  const getColorClass = (color: ColorType, type: 'bg' | 'text') => {
    const colorMap: ColorMapType = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600' },
      yellow: { bg: 'bg-yellow-100', text: 'text-yellow-600' }
    };
    return colorMap[color][type];
  };

  return (
    <Section 
      id="services" 
      className="py-24 bg-gray-200"
      ref={ref}
    >
      <div className={`container mx-auto px-4 transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="min-h-[600px]">
          {/* ヘッダー部分 */}
          <div className="flex items-center justify-center gap-2 mb-10">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm">
              <img 
                src="/images/logo2.svg" 
                alt="Senriganロゴ" 
                className="w-5 h-5"
              />
              <span className="text-blue-600 font-medium">Our Services</span>
            </div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            <span className="block mb-3">高品質な</span>
            <span className="text-gradient">システム開発</span>
          </h2>

          {/* サービスカードグリッド */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <a
                  key={index}
                  href={service.href}
                  className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-14 h-14 rounded-xl ${getColorClass(service.color, 'bg')} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${getColorClass(service.color, 'text')}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 p-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                        <div className={`w-1.5 h-1.5 rounded-full ${getColorClass(service.color, 'bg')}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};

// ServiceHeroコンポーネント
const ServiceHero: React.FC<ServiceHeroProps> = ({
  icon: Icon,
  title,
  subtitle,
  description,
  color
}) => {
  return (
    <div className="relative py-32 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-8 border border-white/20">
            <Icon className={`w-5 h-5 ${color}`} />
            <span className={`font-medium ${color}`}>{subtitle}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-lg text-white/80 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

// Webシステム開発のコンポーネント
const WebDevelopmentComponent: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features: ServiceFeature[] = [
    {
      title: "要件定義・設計",
      description: "お客様のビジネスゴールを理解し、最適なシステム設計を提案",
      items: [
        "業務フロー分析",
        "システム要件定義",
        "データベース設計",
        "UI/UX設計"
      ]
    },
    {
      title: "フロントエンド開発",
      description: "最新技術を活用した高パフォーマンスなユーザーインターフェース開発",
      items: [
        "モダンなフレームワーク活用",
        "レスポンシブデザイン",
        "パフォーマンス最適化",
        "クロスブラウザ対応"
      ]
    },
    {
      title: "バックエンド開発",
      description: "セキュアで拡張性の高いバックエンドシステムの構築",
      items: [
        "APIの設計と実装",
        "データベース最適化",
        "セキュリティ対策",
        "パフォーマンスチューニング"
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
      
      <div ref={ref} className="py-24 bg-white">
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
    </div>
  );
};

// モバイルアプリ開発のコンポーネント
const MobileAppDevelopmentComponent: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features: ServiceFeature[] = [
    {
      title: "iOS/Androidアプリ開発",
      description: "ネイティブアプリケーションの開発からメンテナンスまで",
      items: [
        "Swift/Kotlinによる開発",
        "アプリストア審査対応",
        "パフォーマンス最適化",
        "プッシュ通知実装"
      ]
    },
    {
      title: "クロスプラットフォーム開発",
      description: "効率的なマルチプラットフォーム対応アプリの開発",
      items: [
        "React Native開発",
        "Flutter開発",
        "ハイブリッドアプリ開発",
        "PWA開発"
      ]
    },
    {
      title: "保守・運用",
      description: "継続的な品質維持とアップデート対応",
      items: [
        "バグ修正・機能改善",
        "OS更新対応",
        "セキュリティ強化",
        "パフォーマンス監視"
      ]
    }
  ];

  return (
    <div>
      <ServiceHero 
        icon={Smartphone}
        title="モバイルアプリ開発"
        subtitle="Mobile App Development"
        description="使いやすく、高品質なモバイルアプリケーションを開発します。"
        color="text-purple-400"
      />

      <div ref={ref} className="py-24 bg-white">
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
    </div>
  );
};

// UI/UXデザインのコンポーネント
const UIUXDesignComponent: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features: ServiceFeature[] = [
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

  return (
    <div>
      <ServiceHero 
        icon={Layout}
        title="UI/UXデザイン"
        subtitle="UI/UX Design"
        description="ユーザー体験を最優先に考えた、魅力的なデザインを提供します。"
        color="text-yellow-400"
      />

      <div ref={ref} className="py-24 bg-white">
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
    </div>
  );
};

export const WebDevelopment = WebDevelopmentComponent;
export const MobileAppDevelopment = MobileAppDevelopmentComponent;
export const UIUXDesign = UIUXDesignComponent;
export default Services;