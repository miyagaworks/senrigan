import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  color: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  color
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img 
          src={`${image}?w=600&q=80`} // 画像サイズとクオリティの最適化
          alt={title}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`
            w-full h-full object-cover transform group-hover:scale-110 transition-all duration-500
            ${imageLoaded ? 'opacity-100' : 'opacity-0'}
          `}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* ローディングプレースホルダー */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className={`px-3 py-1 text-sm rounded-full bg-${color}-100 text-${color}-600`}
            >
              {tag}
            </span>
          ))}
        </div>

        <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 transition-colors">
          詳しく見る
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;