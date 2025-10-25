// src/constants/menuItems.ts
export interface MenuItem {
  href: string;
  label: string;
  children?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    href: 'services',
    label: 'サービス',
    children: [
      { href: 'services/web-development', label: 'Webアプリケーション開発' },
      { href: 'services/mobile-development', label: 'モバイルアプリ開発' },
      { href: 'services/design', label: 'UI/UXデザイン' },
    ]
  },
  {
    href: 'technology',
    label: '技術力',
    children: [
      { href: 'technology/frontend', label: 'フロントエンド' },
      { href: 'technology/backend', label: 'バックエンド' },
      { href: 'technology/cloud', label: 'クラウド' },
      { href: 'technology/ai', label: 'AI/機械学習' },
      { href: 'technology/iot', label: 'IoT' },
      { href: 'technology/security', label: 'セキュリティ' },
    ]
  },
  { href: 'pricing', label: '料金' },
  { 
    href: 'company',
    label: '会社情報',
    children: [
      { href: 'company/about', label: '企業概要' },
      { href: 'company/news', label: 'ニュース' },
      { href: 'careers', label: '採用情報' },
    ]
  },
  { href: 'contact', label: 'お問い合わせ' }
];