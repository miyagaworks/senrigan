import React from 'react';
import { Users, Laptop, LineChart, ArrowRight } from 'lucide-react';
import AnimatedHeadline from './Hero/AnimatedHeadline';
import StatsCard from './Hero/StatsCard';
import VideoBackground from './Hero/VideoBackground';

const Hero: React.FC = () => {
  const headlineText = [
    'あなただけの',
    'Webシステムを',
    'デザインします'
  ];

  const stats = [
    { icon: Users, value: '200+', label: '開発実績', delay: 0 },
    { icon: Laptop, value: '50+', label: '技術資格保有', delay: 200 },
    { icon: LineChart, value: '15年', label: '業界経験', delay: 400 }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <VideoBackground />
      
      <div className="relative container mx-auto px-4 min-h-screen flex justify-center items-center z-20">
        <div className="w-full max-w-2xl text-center">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-full bg-black/40 backdrop-blur-sm mb-4 md:mb-6 border-2 border-blue-400/50 shadow-lg shadow-blue-500/20">
              <img 
                src="/images/logo.svg" 
                alt="Senriganロゴ" 
                className="w-4 md:w-4 lg:w-5 h-4 md:h-4 lg:h-5 animate-pulse"
              />
              <span className="text-sm md:text-sm lg:text-base font-medium text-white">革新的なWebシステム開発</span>
            </div>
          </div>

          <div className="mb-4 md:mb-6 leading-tight sm:leading-normal">
            <AnimatedHeadline text={headlineText} />
          </div>

          <p className="text-sm md:text-lg lg:text-lg text-white/90 mb-6 md:mb-8 leading-relaxed sm:max-w-lg sm:mx-auto text-left px-4 md:px-0">
            <span className="sm:hidden text-justify">
              Senriganは、ユーザー体験を重視した美しいデザインと、確かな技術力で、お客様のビジネスの成長をサポートします。
            </span>
            <span className="hidden sm:inline text-left">
              Senriganは、ユーザー体験を重視した美しいデザインと、<br />
              確かな技術力で、お客様のビジネスの成長をサポートします。
            </span>
          </p>

          <div className="flex justify-center gap-3 md:gap-4 mb-8 md:mb-12">
            <a 
              href="#contact" 
              className="group bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-7 lg:px-8 py-2.5 md:py-2.5 lg:py-3 rounded-lg flex items-center gap-2 transition-all duration-500 text-sm md:text-base"
            >
              お問い合わせ
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          <div className="flex flex-col space-y-3 md:grid md:grid-cols-3 md:gap-4 md:space-y-0 px-4 md:px-0">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;