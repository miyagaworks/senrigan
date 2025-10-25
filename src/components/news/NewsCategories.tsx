import React from 'react';
import { NewsCategoryId, newsCategories } from './constants';

interface NewsCategoriesProps {
  selectedCategory: NewsCategoryId;
  onCategoryChange: (category: NewsCategoryId) => void;
}

const NewsCategories: React.FC<NewsCategoriesProps> = ({
  selectedCategory = 'all',
  onCategoryChange
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {newsCategories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`
            px-6 py-2 rounded-full transition-all duration-300
            ${selectedCategory === category.id
              ? 'bg-blue-600 text-white'
              : 'bg-white hover:bg-blue-50 text-gray-700 hover:text-blue-600'
            }
            border ${selectedCategory === category.id
              ? 'border-transparent'
              : 'border-blue-200'
            }
          `}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default NewsCategories;