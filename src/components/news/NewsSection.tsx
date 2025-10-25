import React from 'react';
import { ArrowRight } from 'lucide-react';

interface NewsSectionProps {
  icon: React.ElementType;
  title: string;
  description: string;
  link: string;
}

const NewsSection: React.FC<NewsSectionProps> = ({
  icon: Icon,
  title,
  description,
  link,
}) => {
  return (
    <div className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={link}
        className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 transition-colors"
      >
        一覧を見る
        <ArrowRight size={16} />
      </a>
    </div>
  );
};

export default NewsSection;