// src/components/news/NewsCard.tsx
import React from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { NewsItem } from "./types";
import { newsCategories } from "./constants";

interface NewsCardProps {
  item: NewsItem;
}

const getColorClasses = (color: string) => {
  const colors = {
    blue: "bg-blue-50 text-blue-600 border-blue-200",
    purple: "bg-purple-50 text-purple-600 border-purple-200",
    green: "bg-green-50 text-green-600 border-green-200",
    orange: "bg-orange-50 text-orange-600 border-orange-200",
    indigo: "bg-indigo-50 text-indigo-600 border-indigo-200",
    teal: "bg-teal-50 text-teal-600 border-teal-200",
  };
  return colors[color as keyof typeof colors] || colors.blue;
};

const getDetailPath = (item: NewsItem): string => {
  // 外部リンクがある場合はそれを返す
  if (item.link) {
    return item.link;
  }
  // ShareのニュースID 7の場合は専用ページへ
  if (item.id === 7) {
    return "/news/share-release";
  }
  // その他のニュースは汎用的なパスを使用（将来的に実装）
  return `/news/${item.id}`;
};

const isExternalLink = (item: NewsItem): boolean => {
  return !!item.link;
};

const NewsCard: React.FC<NewsCardProps> = ({ item }) => {
  const colorClasses = getColorClasses(item.color);
  const Icon = item.icon;
  const detailPath = getDetailPath(item);

  return (
    <article className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
      <div className="p-8">
        <div className="flex justify-between items-start mb-6">
          <div
            className={`w-14 h-14 rounded-xl ${colorClasses} flex items-center justify-center transition-transform group-hover:scale-110 duration-300`}
          >
            <Icon className="w-7 h-7" />
          </div>
          <span className="inline-block px-4 py-1.5 bg-gray-50 text-gray-700 text-sm rounded-full border border-gray-200">
            {newsCategories.find((cat) => cat.id === item.category)?.label}
          </span>
        </div>

        <div className="flex items-center gap-2 text-gray-500 mb-4">
          <Calendar className="w-4 h-4" />
          <time className="text-sm">{item.date}</time>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {item.title}
        </h3>

        <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed">
          {item.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {item.tags.map((tag, index) => (
            <span
              key={index}
              className={`px-3 py-1 text-sm rounded-full ${colorClasses} bg-opacity-50`}
            >
              {tag}
            </span>
          ))}
        </div>

        {isExternalLink(item) ? (
          <a
            href={detailPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors group"
          >
            詳しく見る
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        ) : item.id === 7 ? (
          <Link
            to={detailPath}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors group"
          >
            詳しく見る
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        ) : (
          <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors group">
            詳しく見る
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        )}
      </div>
    </article>
  );
};

export default NewsCard;