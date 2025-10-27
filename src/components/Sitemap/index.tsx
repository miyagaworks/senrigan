import { 
  LayoutGrid,
  BookOpen,
  Building2,
  Briefcase,
  MessagesSquare,
  Shield,
  Monitor,
  Palette
} from 'lucide-react';

const Sitemap = () => {
  const sitemapGroups = [
    {
      icon: BookOpen,
      title: 'サービス',
      links: [
        { name: 'サービス一覧', path: '/#services' },
        { name: 'Webシステム開発', path: '/services/web-development' },
        { name: 'モバイルアプリ開発', path: '/services/mobile-development' },
        { name: 'UI/UXデザイン', path: '/services/design' }
      ]
    },
    {
      icon: Monitor,
      title: '技術力',
      links: [
        { name: 'フロントエンド開発', path: '/technology/frontend' },
        { name: 'バックエンド開発', path: '/technology/backend' },
        { name: 'クラウドインフラ', path: '/technology/cloud' },
        { name: 'セキュリティ', path: '/technology/security' },
        { name: 'AI・機械学習', path: '/technology/ai' },
        { name: 'IoT・組込み開発', path: '/technology/iot' }
      ]
    },
    {
      icon: Palette,
      title: '企業理念',
      links: [
        { name: 'デザイン', path: '/values/design' },
        { name: 'デザインアプローチ', path: '/values/design/ui-approach' },
        { name: '機能', path: '/values/function' },
        { name: '拡張性', path: '/values/scalability' }
      ]
    },
    {
      icon: Building2,
      title: '会社情報',
      links: [
        { name: '会社概要', path: '/#company' },
        { name: 'ニュース', path: '/company/news' },
        { name: '採用情報', path: '/careers' },
        { name: '出版書籍', path: '/#books' }
      ]
    },
    {
      icon: Briefcase,
      title: '採用情報',
      links: [
        { name: '採用トップ', path: '/careers' },
        { name: '募集職種', path: '/careers#positions' },
        { name: '福利厚生', path: '/careers#benefits' },
        { name: '応募フォーム', path: '/careers/apply' }
      ]
    },
    {
      icon: MessagesSquare,
      title: 'お問い合わせ',
      links: [
        { name: 'お問い合わせフォーム', path: '/#contact' }
      ]
    },
    {
      icon: Shield,
      title: 'コンプライアンス',
      links: [
        { name: 'プライバシーポリシー', path: '/privacy' },
        { name: '情報セキュリティ', path: '/security' },
        { name: 'サイトマップ', path: '/sitemap' }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative pt-40 pb-24 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-yellow-500/10" />
        <div className="relative container mx-auto px-4">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 md:px-5 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-full bg-black/40 backdrop-blur-sm mb-6 md:mb-10 border-2 border-yellow-400/50 shadow-lg shadow-yellow-500/20">
              <LayoutGrid className="w-4 md:w-4 lg:w-5 h-4 md:h-4 lg:h-5 text-yellow-400" />
              <span className="text-sm md:text-sm lg:text-base font-medium text-yellow-400">Site Map</span>
            </div>
          </div>

          <h1 className="mb-6 md:mb-10 leading-tight sm:leading-normal">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white">
              サイトマップ
              <span className="block mt-3 md:mt-4 bg-gradient-to-r from-yellow-300 to-yellow-700 text-transparent bg-clip-text">
                各種ページのご案内
              </span>
            </div>
          </h1>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sitemapGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-xl bg-yellow-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-8 h-8 text-yellow-600" />
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-yellow-600 transition-colors">
                    {group.title}
                  </h2>
                  
                  <ul className="space-y-4">
                    {group.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a 
                          href={link.path}
                          className="flex items-center gap-3 text-gray-600 hover:text-yellow-600 transition-colors"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                          <span>{link.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sitemap;