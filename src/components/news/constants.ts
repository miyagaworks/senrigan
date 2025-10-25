// src/components/news/constants.ts
export type NewsCategoryId = 'all' | 'press' | 'blog' | 'event';

export type NewsCategory = {
  id: NewsCategoryId;
  label: string;
};

export const newsCategories: NewsCategory[] = [
  { id: 'all', label: 'すべて' },
  { id: 'press', label: 'プレスリリース' },
  { id: 'blog', label: '技術ブログ' },
  { id: 'event', label: 'イベント' }
];