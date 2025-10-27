// src/constants/menuItems.ts
import { LucideIcon, Briefcase, Cpu, BadgeJapaneseYen, Building2, Mail, Globe, Smartphone, Palette, Monitor, Server, Cloud, Brain, Cpu as IoTIcon, Shield, Building, Newspaper, Users, BookOpen } from 'lucide-react';

export interface MenuItem {
  href: string;
  label: string;
  icon?: LucideIcon;
  children?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    href: 'services',
    label: 'サービス',
    icon: Briefcase,
    children: [
      { href: 'services/web-development', label: 'Webアプリケーション開発', icon: Globe },
      { href: 'services/mobile-development', label: 'モバイルアプリ開発', icon: Smartphone },
      { href: 'services/design', label: 'UI/UXデザイン', icon: Palette },
    ]
  },
  {
    href: 'technology',
    label: '技術力',
    icon: Cpu,
    children: [
      { href: 'technology/frontend', label: 'フロントエンド', icon: Monitor },
      { href: 'technology/backend', label: 'バックエンド', icon: Server },
      { href: 'technology/cloud', label: 'クラウド', icon: Cloud },
      { href: 'technology/ai', label: 'AI/機械学習', icon: Brain },
      { href: 'technology/iot', label: 'IoT', icon: IoTIcon },
      { href: 'technology/security', label: 'セキュリティ', icon: Shield },
    ]
  },
  { href: 'pricing', label: '料金', icon: BadgeJapaneseYen },
  {
    href: 'company',
    label: '会社情報',
    icon: Building2,
    children: [
      { href: 'company/about', label: '企業概要', icon: Building },
      { href: 'company/news', label: 'ニュース', icon: Newspaper },
      { href: 'careers', label: '採用情報', icon: Users },
      { href: 'books', label: '出版書籍', icon: BookOpen },
    ]
  },
  { href: 'contact', label: 'お問い合わせ', icon: Mail }
];