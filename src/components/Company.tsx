import React from "react";
import { useInView } from "react-intersection-observer";
import {
  Building2,
  Target,
  Award,
  Eye,
  Heart,
  Sparkles,
  Mountain,
} from "lucide-react";

interface CompanyProps {
  mode?: "about" | "inline";
}

const Company: React.FC<CompanyProps> = ({ mode = "inline" }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const companyInfo = [
    { label: "社名", value: "株式会社Senrigan" },
    { label: "設立", value: "2000年8月" },
    { label: "資本金", value: "1000万円" },
    { label: "所在地", value: "広島県広島市安佐南区山本2-3-35" },
    { label: "代表者", value: "宮川 清実" },
    {
      label: "事業内容",
      value: "Webシステム開発、モバイルアプリ開発、UI/UXデザイン",
    },
  ];

  const philosophy = {
    mission: {
      icon: Mountain,
      title: "ミッション",
      subtitle: "千の想いを、ひとつのカタチに。",
      description:
        "私たちは千利休の美学を受け継ぎ、無数のアイデアと想いを、シンプルで美しく、本質的価値を持つデジタルソリューションとして形にします。複雑さの中から真の価値を見極め、使う人の心に響く体験を創造することが私たちの使命です。",
      gradient: "from-purple-600 to-blue-600",
    },
    vision: {
      icon: Eye,
      title: "ビジョン",
      subtitle: "デジタル茶室で世界をつなぐ",
      description:
        "2030年、Senriganは「デジタル時代の千利休」として、世界中の企業や個人のアイデアを美しいデジタル体験に変える存在になります。一期一会の精神で、それぞれのクライアントとの出会いを大切にし、その想いを永続的な価値として世界に届けます。",
      gradient: "from-blue-600 to-teal-600",
    },
  };

  const values = [
    {
      icon: Sparkles,
      title: "侘寂",
      subtitle: "Elegant Simplicity",
      description:
        "無駄を削ぎ落とし、本質だけを残す。複雑な要求をシンプルで美しいソリューションに昇華させる。",
      color: "purple",
    },
    {
      icon: Heart,
      title: "一期一会",
      subtitle: "Treasured Encounters",
      description:
        "すべてのプロジェクト、すべてのクライアントとの出会いを一度きりの貴重な機会として大切にし、全力で向き合う。",
      color: "blue",
    },
    {
      icon: Eye,
      title: "千里眼",
      subtitle: "Visionary Insight",
      description:
        "表面的な課題の奥にある真のニーズを見抜き、未来を見据えた価値あるソリューションを提供する。",
      color: "teal",
    },
    {
      icon: Target,
      title: "創意工夫",
      subtitle: "Creative Innovation",
      description:
        "既成概念にとらわれず、常に新しい視点でアイデアをカタチにし、クライアントに驚きと感動を届ける。",
      color: "indigo",
    },
    {
      icon: Award,
      title: "心を込めて",
      subtitle: "Heartfelt Craftsmanship",
      description:
        "職人のように一つひとつの作品に魂を込め、使う人の心に響くデジタル体験を丁寧に作り上げる。",
      color: "purple",
    },
  ];

  const containerClass = mode === "about" ? "min-h-screen py-32" : "py-24";

  const getColorClasses = (color: string) => {
    const colors = {
      purple: "bg-purple-100 text-purple-700",
      blue: "bg-blue-100 text-blue-700",
      teal: "bg-teal-100 text-teal-700",
      indigo: "bg-indigo-100 text-indigo-700",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="company" className={`${containerClass} bg-gray-200`}>
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* ヘッダー部分 */}
          <div className="flex items-center justify-center gap-2 mb-10">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm">
              <img
                src="/images/logo2.svg"
                alt="Senriganロゴ"
                className="w-5 h-5"
              />
              <span className="text-blue-600 font-medium">Our Company</span>
            </div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 leading-tight">
            <span className="block mb-3">企業理念と</span>
            <span className="text-gradient">会社概要</span>
          </h2>

          {/* ミッション・ビジョンセクション */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {Object.entries(philosophy).map(([key, item]) => {
              const Icon = item.icon;
              return (
                <div
                  key={key}
                  className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  {/* 背景グラデーション */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-5`}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {item.title}
                        </h3>
                        <p
                          className={`text-lg font-medium text-transparent text-justify bg-clip-text bg-gradient-to-r ${item.gradient}`}
                        >
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-justify">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* バリューセクション */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                私たちの価値観
              </span>
            </h3>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              千利休の美学とデジタル技術を融合させ、5つの価値観を軸に活動しています
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl ${getColorClasses(
                          value.color
                        )} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">
                          {value.title}
                        </h4>
                        <p className="text-sm text-gray-500 italic">
                          {value.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-justify">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 会社概要セクション */}
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-white/20 shadow-xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">会社概要</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <dl className="space-y-4">
                {companyInfo.map((info, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-100 pb-3 last:border-b-0"
                  >
                    <dt className="text-gray-500 text-sm font-medium mb-1">
                      {info.label}
                    </dt>
                    <dd className="text-gray-900 font-semibold text-lg">
                      {info.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="relative">
                {/* PC・タブレット表示 (md以上) */}
                <div className="hidden md:block relative aspect-[3/2] rounded-2xl overflow-hidden">
                  <img
                    src="/images/wabisabi.png"
                    alt="茶室の美学"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="text-center text-white">
                      <p className="text-3xl font-medium mb-4">
                        「千の想いを、ひとつのカタチに。」
                      </p>
                      <p className="text-base leading-relaxed">
                        Senriganは、千利休の美学とデジタル技術を融合させ、アイデアに新たな生命を吹き込む存在として、クライアントと共に未来を創造していきます。
                      </p>
                    </div>
                  </div>
                </div>

                {/* スマホ表示 (md未満) */}
                <div className="block md:hidden relative aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="/images/wabisabi.png"
                    alt="茶室の美学"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute inset-0 flex items-center justify-center p-5">
                    <div className="text-center text-white">
                      <p className="text-xl font-medium mb-4">
                        「千の想いを、
                        <br />
                        ひとつのカタチに。」
                      </p>
                      <p className="text-sm leading-relaxed">
                        Senriganは、千利休の美学とデジタル技術を融合させ、アイデアに新たな生命を吹き込む存在として、クライアントと共に未来を創造していきます。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;