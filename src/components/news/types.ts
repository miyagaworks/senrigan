import { LucideIcon } from 'lucide-react';

export interface NewsItem {
  id: number;
  category: string;
  title: string;
  date: string;
  icon: LucideIcon;
  color: string;
  excerpt: string;
  tags: string[];
  link?: string;
}