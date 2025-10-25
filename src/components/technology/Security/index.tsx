// src/components/technology/Security/index.tsx
import React from 'react';
import { 
  Shield, 
  Check, 
  Sparkles,
  ArrowRight,
  SearchCode,
  Bell
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import TechnologyHero from '../TechnologyHero';
import Breadcrumb from '../../common/Breadcrumb';

const Security: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const breadcrumbItems = [
    { label: '技術力', path: '/#technology' },
    { label: 'セキュリティ' }
  ];

  const features = [
    {
      title: "セキュリティ診断",
      description: "包括的なセキュリティ評価と脆弱性診断",
      items: [
        "脆弱性診断・評価",
        "ペネトレーションテスト",
        "セキュリティコード診断",
        "セキュリティ監査対応"
      ]
    },
    {
      title: "セキュリティ実装",
      description: "堅牢なセキュリティ機能の実装",
      items: [
        "認証・認可システム",
        "暗号化実装",
        "セキュアコーディング",
        "WAF/IPS導入"
      ]
    },
    {
      title: "インシデント対応",
      description: "セキュリティインシデントへの迅速な対応",
      items: [
        "24時間監視体制",
        "インシデントレスポンス",
        "フォレンジック調査",
        "改善提案・実装"
      ]
    }
  ];

  const techStacks = [
    {
      category: "脆弱性診断ツール",
      items: [
        { name: "Burp Suite", level: 95 },
        { name: "OWASP ZAP", level: 90 },
        { name: "Nessus", level: 85 },
        { name: "Metasploit", level: 80 }
      ]
    },
    {
      category: "セキュリティ対策",
      items: [
        { name: "WAF/IPS", level: 95 },
        { name: "暗号化技術", level: 90 },
        { name: "アクセス制御", level: 95 },
        { name: "セキュアコーディング", level: 90 }
      ]
    },
    {
      category: "監視・分析",
      items: [
        { name: "SIEM", level: 90 },
        { name: "IDS/IPS", level: 85 },
        { name: "ログ分析", level: 90 },
        { name: "脅威インテリジェンス", level: 85 }
      ]
    }
  ];

  const caseStudies = [
    {
      title: "金融機関のセキュリティ基盤強化",
      description: "最新のセキュリティ対策を導入し、顧客データの保護と不正アクセス対策を強化。24時間365日の監視体制を確立。",
      achievements: [
        "不正アクセス検知率100%達成",
        "セキュリティインシデント90%削減",
        "監視対応時間60%短縮"
      ]
    },
    {
      title: "ECサイトのセキュリティ改善",
      description: "決済システムのセキュリティを強化し、顧客情報の保護とPCI DSS準拠を実現。セキュリティレベルを大幅に向上。",
      achievements: [
        "PCI DSS完全準拠を達成",
        "セキュリティスコア95%向上",
        "脆弱性検出時間75%短縮"
      ]
    }
  ];

  const process = [
    {
      icon: SearchCode,
      title: "セキュリティ評価",
      description: "現状のセキュリティレベルを総合的に評価",
      points: [
        "脆弱性診断実施",
        "リスクアセスメント",
        "セキュリティ監査"
      ]
    },
    {
      icon: Shield,
      title: "対策立案・実装",
      description: "最適なセキュリティ対策の策定と導入",
      points: [
        "セキュリティ設計",
        "対策の実装",
        "運用体制の確立"
      ]
    },
    {
      icon: Bell,
      title: "監視・運用",
      description: "継続的なセキュリティ監視と迅速な対応",
      points: [
        "24時間体制の確立",
        "インシデント対応",
        "定期的な評価改善"
      ]
    }
  ];

  const certifications = [
    {
      title: "国際セキュリティ認証",
      items: [
        "ISO 27001（情報セキュリティマネジメント）",
        "PCI DSS（決済カードセキュリティ）",
        "SOC 2（サービス組織の統制）"
      ]
    },
    {
      title: "専門資格保有者",
      items: [
        "CISSP（情報セキュリティプロフェッショナル）",
        "公認情報システムセキュリティ専門家",
        "CEH（Certified Ethical Hacker）"
      ]
    }
  ];

  return (
    <div>
      <TechnologyHero 
        icon={Shield}
        title="セキュリティ"
        subtitle="Security"
        description="堅牢なセキュリティ対策による安全なシステム運用"
        color="text-green-400"
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
                      <Check className="w-5 h-5 text-green-500" />
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
            <p className="text-gray-600">最新のセキュリティ技術とツールによる包括的な保護</p>
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
                        <span className="text-green-600">{item.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-green-600 rounded-full"
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

      {/* セキュリティ認証セクション */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">認証・資格</h2>
            <p className="text-gray-600">国際基準に準拠した高度なセキュリティ体制</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-6 text-green-600">{cert.title}</h3>
                <ul className="space-y-4">
                  {cert.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* セキュリティプロセスセクション */}
      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">セキュリティプロセス</h2>
            <p className="text-gray-600">包括的なセキュリティ対策の実現プロセス</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-[calc(50%+1rem)] -translate-y-1/2 text-green-300 z-10">
                      <ArrowRight className="w-8 h-8" />
                    </div>
                  )}
                  <div className="bg-white p-8 rounded-2xl shadow-lg h-full relative z-0">
                    <div className="w-16 h-16 rounded-xl bg-green-100 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-600 mb-6">{step.description}</p>
                    <ul className="space-y-3">
                      {step.points.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                          <Check className="w-5 h-5 text-green-500" />
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
            <p className="text-gray-600">セキュリティ対策の実績をご紹介します</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
                <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                <p className="text-gray-600 mb-6">{study.description}</p>
                <div className="space-y-4">
                  {study.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-green-600">
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
          <h2 className="text-3xl font-bold mb-6">セキュリティ対策に関するご相談</h2>
          <p className="text-gray-600 mb-8">
            システムのセキュリティ強化について、お気軽にご相談ください
          </p>
          <a 
            href="/#contact" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            お問い合わせ
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Security;