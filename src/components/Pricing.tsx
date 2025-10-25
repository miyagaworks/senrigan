import React from 'react';
import { Building2, CreditCard, Wallet, LineChart } from 'lucide-react';
import Section from './Section';

interface PricingProps {
  standalone?: boolean;
}

const Pricing: React.FC<PricingProps> = ({ standalone = false }) => {
  const systemTypes = [
    {
      title: '小規模システム開発',
      price: '100-300',
      features: [
        '基本的な業務効率化システム',
        '社内向けツール開発',
        '既存システムの改修'
      ]
    },
    {
      title: '中規模システム開発',
      price: '300~1,000',
      features: [
        '基幹業務システム',
        'ECサイト構築',
        '顧客管理システム'
      ]
    }
  ];

  const fundingOptions = [
    {
      icon: Building2,
      title: '金融機関融資',
      description: '日本政策金融公庫や民間銀行のIT投資向け融資を活用可能です'
    },
    {
      icon: CreditCard,
      title: '分割払い',
      description: 'プロジェクトの規模に応じて柔軟な分割払いに対応いたします'
    },
    {
      icon: Wallet,
      title: 'IT導入補助金',
      description: '補助率最大4/5、補助額最大450万円の補助金が活用可能です'
    }
  ];

  const containerClass = standalone
    ? 'min-h-screen py-32 bg-gray-200'
    : 'py-24 bg-gray-200';

  return (
    <Section id="pricing" className={containerClass}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-10">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm">
            <img 
              src="/images/logo2.svg" 
              alt="Senriganロゴ" 
              className="w-5 h-5"
            />
            <span className="text-blue-600 font-medium">System Development</span>
          </div>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
          <span className="block mb-3">システム開発の</span>
          <span className="text-gradient">費用について</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {systemTypes.map((type, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h3>
              <p className="text-3xl font-bold text-blue-600 mb-6">
                {type.price}<span className="text-lg">万円〜</span>
              </p>
              <ul className="space-y-3">
                {type.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2 p-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-200" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">資金調達方法</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {fundingOptions.map((option, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-6">
                  <option.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{option.title}</h4>
                <p className="text-gray-600 text-base leading-relaxed">{option.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a 
            href={standalone ? '/#contact' : '#contact'} 
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            まずはお問い合わせ下さい
            <LineChart className="w-4 h-4" />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;