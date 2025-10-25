import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Palette, Cpu, Layers, ArrowRight } from 'lucide-react';

type ColorType = 'blue' | 'purple' | 'yellow';

const ValueProposition: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const iconColorClasses: Record<ColorType, string> = {
    blue: 'text-blue-400',
    purple: 'text-purple-400',
    yellow: 'text-yellow-400'
  };

  const bgColorClasses: Record<ColorType, string> = {
    blue: 'bg-blue-500/20',
    purple: 'bg-purple-500/20',
    yellow: 'bg-yellow-500/20'
  };

  const values = [
    {
      icon: Palette,
      title: 'デザイン',
      description: 'ユーザー体験を重視した美しいUI/UXデザインで、使いやすく魅力的なWebシステムを実現します。',
      color: 'blue' as ColorType,
      gradient: 'from-blue-500/10 to-blue-600/10',
      link: '/values/design'
    },
    {
      icon: Cpu,
      title: '機能',
      description: 'お客様の業務に最適化された機能を実装し、効率的なワークフローを実現します。',
      color: 'purple' as ColorType,
      gradient: 'from-purple-500/10 to-purple-600/10',
      link: '/values/function'
    },
    {
      icon: Layers,
      title: '拡張性',
      description: '将来の成長を見据えた柔軟なシステム設計で、ビジネスの拡大をサポートします。',
      color: 'yellow' as ColorType,
      gradient: 'from-yellow-500/10 to-yellow-600/10',
      link: '/values/scalability'
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden text-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="relative container mx-auto px-4">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center gap-2 mb-10">
            <img 
              src="/images/logo_blue.svg" 
              alt="Senriganロゴ" 
              className="w-4 md:w-4 lg:w-5 h-4 md:h-4 lg:h-5"
            />
            <span className="text-sm md:text-sm lg:text-base font-medium text-blue-400">Our Values</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12">
            <span className="block mb-2 md:mb-3">私たちが約束する</span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">3つの価値</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-justify">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <a 
                  href={value.link} 
                  key={index}
                  className="group relative bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-xl ${bgColorClasses[value.color]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className={`w-8 h-8 ${iconColorClasses[value.color]}`} />
                    </div>
                    
                    <h3 className="text-xl md:text-xl lg:text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors flex items-center gap-2">
                      {value.title}
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300" />
                    </h3>
                    
                    <p className="text-sm md:text-base lg:text-lg text-white/80 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;