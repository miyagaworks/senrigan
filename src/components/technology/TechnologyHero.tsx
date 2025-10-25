import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TechnologyHeroProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  color: string;
}

const TechnologyHero: React.FC<TechnologyHeroProps> = ({
  icon: Icon,
  title,
  subtitle,
  description,
  color
}) => {
  return (
    <div className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(59,130,246,0.1),transparent)]" />
      
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

export default TechnologyHero;