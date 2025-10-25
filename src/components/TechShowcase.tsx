import React, { useState, useEffect } from 'react';
import { Network, Cpu, Database, Users2, LineChart } from 'lucide-react';
import Section from './Section';
import { useInView } from 'react-intersection-observer';

interface MetricCardProps {
  icon: React.ElementType;
  title: string;
  value: string;
  percentage: number;
  color: 'blue' | 'purple' | 'yellow';
}

interface UserMetricCardProps {
  icon: React.ElementType;
  title: string;
  value: string;
  color: 'blue' | 'purple' | 'yellow';
}

interface ColorMap {
  blue: { bg: string; text: string };
  purple: { bg: string; text: string };
  yellow: { bg: string; text: string };
}

const TechShowcase: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const colorMap: ColorMap = {
    blue: {
      bg: 'bg-blue-100',
      text: 'text-blue-600'
    },
    purple: {
      bg: 'bg-purple-100',
      text: 'text-purple-600'
    },
    yellow: {
      bg: 'bg-yellow-100',
      text: 'text-yellow-600'
    }
  };

  const getColorClass = (color: keyof ColorMap, type: 'bg' | 'text'): string => {
    return colorMap[color]?.[type] || (type === 'bg' ? 'bg-gray-100' : 'text-gray-600');
  };

  const [metrics, setMetrics] = useState({
    systemPerformance: 95,
    memoryUsage: 75,
    networkLatency: 25,
    activeUsers: 1234,
    transactions: 567890
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        systemPerformance: Math.min(100, Math.max(85, prev.systemPerformance + (Math.random() * 10 - 5))),
        memoryUsage: Math.min(100, Math.max(60, prev.memoryUsage + (Math.random() * 10 - 5))),
        networkLatency: Math.min(100, Math.max(10, prev.networkLatency + (Math.random() * 10 - 5))),
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 100 - 50),
        transactions: prev.transactions + Math.floor(Math.random() * 1000)
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const MetricCard: React.FC<MetricCardProps> = ({ 
    icon: Icon, 
    title, 
    value, 
    percentage,
    color
  }) => (
    <div className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className={`w-14 h-14 rounded-xl ${getColorClass(color, 'bg')} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className={`w-7 h-7 ${getColorClass(color, 'text')}`} />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{title}</h3>
        <p className="text-gray-600 mb-6 text-4xl font-bold">{value}</p>
      </div>
      <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
        <div 
          className={`absolute inset-y-0 left-0 ${getColorClass(color, 'bg')} transition-all duration-300`}
          style={{ width: `${percentage}%` }}
        >
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)`,
              animation: 'shimmer 2s linear infinite'
            }}
          />
        </div>
      </div>
    </div>
  );

  const UserMetricCard: React.FC<UserMetricCardProps> = ({ 
    icon: Icon, 
    title, 
    value,
    color
  }) => (
    <div className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className={`w-14 h-14 rounded-xl ${getColorClass(color, 'bg')} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className={`w-7 h-7 ${getColorClass(color, 'text')}`} />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{title}</h3>
        <p className="text-gray-600 mb-6 text-4xl font-bold">{value}</p>
      </div>
      <div className={`h-24 rounded-lg overflow-hidden ${getColorClass(color, 'bg')} relative`}>
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)`,
            animation: 'wave 3s linear infinite',
            backgroundSize: '200% 100%'
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)`,
            animation: 'wave 2s linear infinite 1s',
            backgroundSize: '200% 100%'
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, transparent, ${getColorClass(color, 'text')}10)`
          }}
        />
      </div>
    </div>
  );

  return (
    <Section id="techShowcase" className="py-24 bg-gray-200">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center gap-2 mb-10">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm">
              <img 
                src="/images/logo2.svg" 
                alt="Senriganロゴ" 
                className="w-5 h-5"
              />
              <span className="text-blue-600 font-medium">System Metrics</span>
            </div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16">
            <span className="block mb-3">リアルタイム</span>
            <span className="text-gradient">システムパフォーマンス</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <MetricCard
              icon={Cpu}
              title="パフォーマンス"
              value={`${Math.round(metrics.systemPerformance)}%`}
              percentage={metrics.systemPerformance}
              color="blue"
            />
            <MetricCard
              icon={Database}
              title="メモリ使用率"
              value={`${Math.round(metrics.memoryUsage)}%`}
              percentage={metrics.memoryUsage}
              color="purple"
            />
            <MetricCard
              icon={Network}
              title="レスポンスタイム"
              value={`${Math.round(metrics.networkLatency)}ms`}
              percentage={metrics.networkLatency}
              color="yellow"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <UserMetricCard
              icon={Users2}
              title="アクティブユーザー"
              value={metrics.activeUsers.toLocaleString()}
              color="blue"
            />
            <UserMetricCard
              icon={LineChart}
              title="トランザクション数"
              value={metrics.transactions.toLocaleString()}
              color="purple"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TechShowcase;