// src/components/Technology.tsx
import React from 'react';
import Section from './Section';
import { 
  Code2, 
  Database, 
  Cloud, 
  Shield, 
  Cpu, 
  Network
} from 'lucide-react';
import { useInViewOnce } from '../hooks/useInViewOnce';

interface ColorMap {
  blue: { bg: string; text: string };
  purple: { bg: string; text: string };
  indigo: { bg: string; text: string };
  green: { bg: string; text: string };
  red: { bg: string; text: string };
  orange: { bg: string; text: string };
}

interface TechnologyItem {
  icon: React.ElementType;
  title: string;
  description: string;
  skills: string[];
  color: keyof ColorMap;
  path?: string;
}

const Technology: React.FC = () => {
  const { ref } = useInViewOnce({ threshold: 0.1 });

  const colorMap: ColorMap = {
    blue: {
      bg: 'bg-blue-100',
      text: 'text-blue-600'
    },
    purple: {
      bg: 'bg-purple-100',
      text: 'text-purple-600'
    },
    indigo: {
      bg: 'bg-indigo-100',
      text: 'text-indigo-600'
    },
    green: {
      bg: 'bg-green-100',
      text: 'text-green-600'
    },
    red: {
      bg: 'bg-red-100',
      text: 'text-red-600'
    },
    orange: {
      bg: 'bg-orange-100',
      text: 'text-orange-600'
    }
  };

  const getColorClass = (color: keyof ColorMap, type: 'bg' | 'text'): string => {
    return colorMap[color]?.[type] || (type === 'bg' ? 'bg-gray-100' : 'text-gray-600');
  };

  const technologies: TechnologyItem[] = [
    {
      icon: Code2,
      title: 'フロントエンド開発',
      description: '最新のフレームワークを活用した、高パフォーマンスなWebアプリケーション開発',
      skills: ['React', 'Vue.js', 'Next.js', 'TypeScript'],
      color: 'blue',
      path: 'frontend'
    },
    {
      icon: Database,
      title: 'バックエンド開発',
      description: 'スケーラブルで安定したバックエンドシステムの構築',
      skills: ['Node.js', 'Python', 'Java', 'Go'],
      color: 'purple',
      path: 'backend'
    },
    {
      icon: Cloud,
      title: 'クラウドインフラ',
      description: '柔軟で信頼性の高いクラウドインフラストラクチャの設計・構築',
      skills: ['AWS', 'GCP', 'Azure', 'Kubernetes'],
      color: 'indigo',
      path: 'cloud'
    },
    {
      icon: Shield,
      title: 'セキュリティ',
      description: '堅牢なセキュリティ対策による安全なシステム運用',
      skills: ['脆弱性診断', '認証基盤', '暗号化', 'セキュアコーディング'],
      color: 'green',
      path: 'security'
    },
    {
      icon: Cpu,
      title: 'AI・機械学習',
      description: '最新のAI技術を活用したビジネスソリューションの提供',
      skills: ['機械学習', 'データ分析', '自然言語処理', '画像認識'],
      color: 'red',
      path: 'ai'
    },
    {
      icon: Network,
      title: 'IoT・組込み開発',
      description: 'センサーデータの収集から分析まで、IoTソリューションの構築',
      skills: ['センサー連携', 'リアルタイム処理', 'エッジコンピューティング', 'デバイス制御'],
      color: 'orange',
      path: 'iot'
    }
  ];

  const renderTechnologyCard = (tech: TechnologyItem, index: number) => {
    const Icon = tech.icon;
    const Component = tech.path ? 'a' : 'div';
    const props = tech.path ? { href: `/technology/${tech.path}` } : {};

    return (
      <Component
        key={index}
        {...props}
        className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
      >
        <div className={`w-14 h-14 rounded-xl ${getColorClass(tech.color, 'bg')} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className={`w-7 h-7 ${getColorClass(tech.color, 'text')}`} />
        </div>
        
        <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
          {tech.title}
        </h3>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          {tech.description}
        </p>

        <ul className="space-y-3">
          {tech.skills.map((skill, sIndex) => (
            <li key={sIndex} className="flex items-center gap-2 p-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
              <div className={`w-1.5 h-1.5 rounded-full ${getColorClass(tech.color, 'bg')}`} />
              {skill}
            </li>
          ))}
        </ul>
      </Component>
    );
  };

  return (
    <Section 
      id="technology" 
      className="py-24 bg-gray-200"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <div className="min-h-[600px]">
          <div className="flex items-center justify-center gap-2 mb-10">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm">
              <img 
                src="/images/logo2.svg" 
                alt="Senriganロゴ" 
                className="w-5 h-5"
              />
              <span className="text-blue-600 font-medium">Our Technology</span>
            </div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            <span className="block mb-3">技術力が導く</span>
            <span className="text-gradient">成功への道</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map(renderTechnologyCard)}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Technology;