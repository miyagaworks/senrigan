import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { 
  Layout,
  Grid,
  Users,
  Monitor,
  Lightbulb,
  ChevronRight,
  Home
} from 'lucide-react';

const UIDesignApproach = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const principles = [
    {
      icon: Grid,
      title: 'グリッドシステム',
      description: '整然としたレイアウトによる視覚的な秩序と一貫性を実現',
      points: [
        '8ポイントグリッドシステムの採用',
        'レスポンシブデザインの基盤',
        'コンポーネント間の適切な余白設計'
      ]
    },
    {
      icon: Monitor,
      title: 'ビジュアルヒエラルキー',
      description: '情報の重要度に基づいた視覚的な階層構造の構築',
      points: [
        'タイポグラフィスケールの最適化',
        'コントラストと強調表現の使い分け',
        'ユーザーの視線誘導の設計'
      ]
    },
    {
      icon: Users,
      title: 'アクセシビリティ',
      description: 'あらゆるユーザーが使いやすいインターフェースの実現',
      points: [
        'WAI-ARIAガイドラインの遵守',
        'カラーコントラスト比の最適化',
        'キーボード操作のサポート'
      ]
    },
    {
      icon: Lightbulb,
      title: 'インタラクション',
      description: '直感的で心地よい操作感の実現',
      points: [
        'マイクロインタラクションの実装',
        'フィードバックの適切な提示',
        'アニメーションの効果的な活用'
      ]
    }
  ];

  const colors = [
    { name: 'Primary', value: '#3B82F6', usage: 'メインアクション、重要な情報の強調' },
    { name: 'Secondary', value: '#6B7280', usage: 'サブアクション、補足情報' },
    { name: 'Accent', value: '#8B5CF6', usage: '特別な強調、アクセントカラー' },
    { name: 'Success', value: '#10B981', usage: '成功状態、ポジティブなフィードバック' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-blue-500/10" />
        <div className="relative container mx-auto px-4">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/40 backdrop-blur-sm mb-8 border-2 border-blue-400/50 shadow-lg shadow-blue-500/20">
              <Layout className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-400">UI Design</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
            UIデザインの考え方
          </h2>

          <p className="text-sm md:text-lg lg:text-lg text-white/90 leading-relaxed sm:max-w-lg sm:mx-auto px-4 md:px-0 text-justify">
            ユーザーの直感的な操作と視覚的な美しさを追求し、機能性とデザイン性を高次元で両立させたインターフェースを提供します。
          </p>
        </div>
      </section>

      {/* パンくずリスト */}
      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-14 text-sm">
            <ol className="flex items-center space-x-2 text-gray-600">
              <li>
                <Link to="/" className="flex items-center hover:text-blue-600 transition-colors">
                  <Home className="w-4 h-4" />
                </Link>
              </li>
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4" />
                <Link to="/values/design" className="ml-2 hover:text-blue-600 transition-colors">
                  デザイン
                </Link>
              </li>
              <li className="flex items-center">
                <ChevronRight className="w-4 h-4" />
                <span className="ml-2 text-blue-600">UIデザインの考え方</span>
              </li>
            </ol>
          </div>
        </div>
      </nav>

      <section className="relative py-10 md:py-24 bg-gray-200">
        <div ref={ref} className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div
                  key={index}
                  className={`transform transition-all duration-1000 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                    <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {principle.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {principle.description}
                    </p>
                    
                    <ul className="space-y-3">
                      {principle.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-center gap-3 text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-24">
            <h3 className="text-2xl font-bold text-center mb-12">カラーシステム</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {colors.map((color, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div 
                    className="w-full h-24 rounded-lg mb-4"
                    style={{ backgroundColor: color.value }}
                  />
                  <h4 className="font-bold mb-2">{color.name}</h4>
                  <p className="text-sm text-gray-600">{color.value}</p>
                  <p className="text-sm text-gray-500 mt-2">{color.usage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UIDesignApproach;