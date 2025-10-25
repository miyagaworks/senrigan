// src/components/technology/IoT/index.tsx
import React from 'react';
import { 
  Network, 
  Check, 
  Users, 
  Sparkles,
  ArrowRight,
  Cpu,
  Wrench,
  Cloud
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import TechnologyHero from '../TechnologyHero';
import Breadcrumb from '../../common/Breadcrumb';

const IoT: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const breadcrumbItems = [
    { label: '技術力', path: '/#technology' },
    { label: 'IoT・組込み開発' }
  ];

  const features = [
    {
      title: "IoTソリューション",
      description: "センサーデータの収集から分析までの統合ソリューション",
      items: [
        "センサーネットワーク構築",
        "データ収集システム",
        "リアルタイム監視",
        "遠隔制御システム"
      ]
    },
    {
      title: "組込みシステム開発",
      description: "ハードウェアと連携した組込みソフトウェアの開発",
      items: [
        "マイコン制御",
        "組込みLinux開発",
        "ファームウェア開発",
        "デバイスドライバ開発"
      ]
    },
    {
      title: "エッジコンピューティング",
      description: "エッジデバイスでの高度な処理の実現",
      items: [
        "エッジAI実装",
        "リアルタイム処理",
        "省電力化対策",
        "セキュリティ対策"
      ]
    }
  ];

  const techStacks = [
    {
      category: "組込み開発",
      items: [
        { name: "C/C++", level: 95 },
        { name: "ARM/RISC-V", level: 90 },
        { name: "RTOS", level: 85 },
        { name: "組込みLinux", level: 90 }
      ]
    },
    {
      category: "IoTプラットフォーム",
      items: [
        { name: "AWS IoT", level: 90 },
        { name: "Azure IoT", level: 85 },
        { name: "Google Cloud IoT", level: 85 },
        { name: "MQTT/CoAP", level: 90 }
      ]
    },
    {
      category: "通信・プロトコル",
      items: [
        { name: "Bluetooth/BLE", level: 95 },
        { name: "Wi-Fi/LPWAN", level: 90 },
        { name: "Zigbee/Z-Wave", level: 85 },
        { name: "5G/LTE", level: 80 }
      ]
    }
  ];

  const caseStudies = [
    {
      title: "スマートファクトリー構築",
      description: "製造ラインの各種センサーデータをリアルタイムに収集・分析し、生産効率を最適化。予知保全システムも導入し、設備の稼働率を向上。",
      achievements: [
        "生産効率25%向上",
        "設備稼働率15%改善",
        "メンテナンスコスト40%削減"
      ]
    },
    {
      title: "農業IoTシステム開発",
      description: "各種環境センサーとAIを組み合わせた自動制御システムを開発。気象条件に応じた最適な栽培環境を自動制御し、収穫量を増加。",
      achievements: [
        "収穫量30%増加",
        "水使用量40%削減",
        "人件費25%削減"
      ]
    }
  ];

  const process = [
    {
      icon: Users,
      title: "要件定義・設計",
      description: "ハードウェア要件とソフトウェア要件の統合的な設計",
      points: [
        "システム要件定義",
        "ハードウェア選定",
        "アーキテクチャ設計"
      ]
    },
    {
      icon: Wrench,
      title: "開発・実装",
      description: "効率的なIoTシステムの開発と実装",
      points: [
        "デバイス開発",
        "ソフトウェア実装",
        "通信プロトコル実装"
      ]
    },
    {
      icon: Cloud,
      title: "クラウド連携・運用",
      description: "クラウドとの連携とシステム運用",
      points: [
        "クラウド連携実装",
        "監視システム構築",
        "保守運用体制確立"
      ]
    }
  ];

  const certifications = [
    {
      title: "IoT関連認定資格",
      items: [
        "AWS IoT Specialty",
        "Azure IoT Developer Specialty",
        "MCSE: IoT"
      ]
    },
    {
      title: "組込み開発資格",
      items: [
        "組込みシステムスペシャリスト",
        "ETロボコン認定資格",
        "RTOS設計技術者"
      ]
    }
  ];

  return (
    <div>
      <TechnologyHero 
        icon={Network}
        title="IoT・組込み開発"
        subtitle="IoT & Embedded"
        description="センサーデータの収集から分析まで、IoTソリューションの構築"
        color="text-orange-400"
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
                      <Check className="w-5 h-5 text-orange-500" />
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
            <p className="text-gray-600">最新のIoT技術と組込み開発技術</p>
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
                        <span className="text-orange-600">{item.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-orange-600 rounded-full"
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
            <p className="text-gray-600">IoTと組込み開発の専門性を証明する資格</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-6 text-orange-600">{cert.title}</h3>
                <ul className="space-y-4">
                  {cert.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Cpu className="w-5 h-5 text-orange-500" />
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
            <p className="text-gray-600">効率的なIoTソリューション開発のアプローチ</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-[calc(50%+1rem)] -translate-y-1/2 text-orange-300 z-10">
                      <ArrowRight className="w-8 h-8" />
                    </div>
                  )}
                  <div className="bg-white p-8 rounded-2xl shadow-lg h-full relative z-0">
                    <div className="w-16 h-16 rounded-xl bg-orange-100 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-600 mb-6">{step.description}</p>
                    <ul className="space-y-3">
                      {step.points.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                          <Check className="w-5 h-5 text-orange-500" />
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
            <p className="text-gray-600">IoT・組込みシステムの活用実績をご紹介します</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
                <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                <p className="text-gray-600 mb-6">{study.description}</p>
                <div className="space-y-4">
                  {study.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-orange-600">
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
          <h2 className="text-3xl font-bold mb-6">IoT・組込み開発に関するご相談</h2>
          <p className="text-gray-600 mb-8">
            IoTソリューションや組込みシステムの開発について、お気軽にご相談ください
          </p>
          <a 
            href="/#contact" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
            お問い合わせ
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default IoT;