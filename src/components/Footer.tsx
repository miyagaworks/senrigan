import React from "react";
import { ArrowRight, Mail, MapPin, Clock, Phone } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useScroll } from "../hooks/useScroll";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isTopPage = location.pathname === "/";
  const { handleNavigation } = useScroll();

  const services = [
    { name: "Webシステム開発", href: "/services/web-development" },
    { name: "モバイルアプリ開発", href: "/services/mobile-development" },
    { name: "UI/UXデザイン", href: "/services/design" },
  ];

  const companyLinks = [
    { name: "会社概要", href: "company", isAnchor: true },
    { name: "採用情報", href: "/careers", isAnchor: false },
    { name: "ニュース", href: "news", isAnchor: true },
  ];

  const policies = [
    { name: "プライバシーポリシー", href: "/privacy" },
    { name: "情報セキュリティ", href: "/security" },
    { name: "特定商取引法", href: "/specified-commercial-transactions" },
    { name: "サイトマップ", href: "/sitemap" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black to-gray-900 text-gray-300 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(59,130,246,0.1),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_0%_800px,rgba(59,130,246,0.05),transparent)]" />
      </div>

      <div className="relative container mx-auto px-6 md:px-4">
        <div className="flex justify-center pt-16 pb-12">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/40 backdrop-blur-sm border border-blue-400/30 shadow-lg shadow-blue-500/10">
            <img
              src="/images/logo.svg"
              alt="Senriganロゴ"
              className="w-6 h-6 -mt-0.5"
              style={{
                filter: "drop-shadow(0 0 1px rgba(59, 130, 246, 0.5))",
              }}
            />
            <span className="text-gradient-blue-purple font-medium">
              株式会社Senrigan
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-12 py-12">
          <div className="space-y-6 md:w-[340px] lg:w-[280px] lg:ml-auto">
            <h3 className="text-xl font-bold text-white">私たちについて</h3>
            <p className="text-gray-400 leading-relaxed text-justify">
              千利休の「侘寂」を受け継ぎ、使う人が茶室にいるような心地よさを感じられるシステムを設計。
              <br></br>
              複雑さを排除し、直感的で美しく、毎日使いたくなるデジタル体験を創造します。
            </p>
          </div>

          <div className="space-y-6 lg:w-[240px] lg:ml-auto">
            <h4 className="text-lg font-bold text-white">サービス</h4>
            <ul className="space-y-3">
              {services.map(({ name, href }, index) => (
                <li key={index}>
                  <a
                    href={href}
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="w-6 h-6 rounded-full bg-blue-600/10 group-hover:bg-blue-600/20 flex items-center justify-center transition-all duration-300">
                      <ArrowRight size={14} className="text-blue-400" />
                    </span>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 lg:w-[240px] lg:ml-auto">
            <h4 className="text-lg font-bold text-white">会社情報</h4>
            <ul className="space-y-3">
              {companyLinks.map(({ name, href, isAnchor }, index) => (
                <li key={index}>
                  {isAnchor ? (
                    <a
                      href={isTopPage ? `#${href}` : `/#${href}`}
                      onClick={(e) => handleNavigation(e, href, isTopPage)}
                      className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <span className="w-6 h-6 rounded-full bg-blue-600/10 group-hover:bg-blue-600/20 flex items-center justify-center transition-all duration-300">
                        <ArrowRight size={14} className="text-blue-400" />
                      </span>
                      {name}
                    </a>
                  ) : (
                    <a
                      href={href}
                      className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <span className="w-6 h-6 rounded-full bg-blue-600/10 group-hover:bg-blue-600/20 flex items-center justify-center transition-all duration-300">
                        <ArrowRight size={14} className="text-blue-400" />
                      </span>
                      {name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 lg:w-[280px] lg:ml-auto">
            <h4 className="text-lg font-bold text-white">お問い合わせ</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-400 mt-1" />
                <p className="text-gray-400">
                  〒731-0137
                  <br />
                  広島県広島市安佐南区山本2-3-35
                </p>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-blue-400" />
                <a
                  href="tel:082-209-0181"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  082-209-0181
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-blue-400 mt-1" />
                <div className="text-gray-400">
                  <div className="mb-1">
                    <span className="select-all">info</span>
                    <span className="text-gray-500 mx-1">[at]</span>
                    <span className="select-all">senrigan</span>
                    <span className="text-gray-500 mx-1">[dot]</span>
                    <span className="select-all">systems</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    ※ [at]を@に、[dot]を.に置き換え
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={20} className="text-blue-400" />
                <p className="text-gray-400">平日 10:00〜17:00</p>
              </li>
            </ul>
            <a
              href={isTopPage ? "#contact" : "/#contact"}
              onClick={(e) => handleNavigation(e, "contact", isTopPage)}
              className="group inline-flex items-center gap-2 bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white px-6 py-2.5 rounded-lg transition-all duration-300 border border-blue-400/30 hover:border-blue-600"
            >
              お問い合わせ
              <ArrowRight
                size={16}
                className="transform group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>

        <div className="border-t border-blue-400/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400 order-2 md:order-1">
              © {currentYear} Senrigan All rights reserved.
            </div>
            <div className="flex md:flex-row flex-col gap-2 md:gap-6 text-sm order-1 md:order-2">
              {policies.map(({ name, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="text-blue-400 hover:text-blue-600 transition-colors"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;