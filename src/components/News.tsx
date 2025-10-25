import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import NewsCategories from './news/NewsCategories';
import NewsCard from './news/NewsCard';
import { newsItems } from './news/newsData';
import Section from './Section';
import { NewsCategoryId } from './news/constants';

interface NewsProps {
  standalone?: boolean;
}

const News: React.FC<NewsProps> = ({ standalone = false }) => {
  const [selectedCategory, setSelectedCategory] = useState<NewsCategoryId>('all');
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredNews = selectedCategory === 'all'
    ? newsItems
    : newsItems.filter(item => item.category === selectedCategory);

  const containerClass = standalone
    ? 'min-h-screen py-32'
    : 'py-24';

  return (
    <Section id="news" className={`${containerClass} bg-gray-200`}>
      <div className="container mx-auto px-4">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* ヘッダー部分 */}
          <div className="flex items-center justify-center gap-2 mb-10">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm">
              <img 
                src="/images/logo2.svg" 
                alt="Senriganロゴ" 
                className="w-5 h-5"
              />
              <span className="text-blue-600 font-medium">Our News</span>
            </div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            <span className="block mb-3">最新情報</span>
            <span className="text-gradient">ニュース＆トピックス</span>
          </h2>

          <NewsCategories
            selectedCategory={selectedCategory}
            onCategoryChange={(category: NewsCategoryId) => setSelectedCategory(category)}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item) => (
              <div key={item.id} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <NewsCard key={item.id} item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default News;