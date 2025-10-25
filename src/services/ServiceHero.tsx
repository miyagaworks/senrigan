// src/components/services/ServiceHero.tsx
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceHeroProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  color: string;
}

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

export default ServiceHero;