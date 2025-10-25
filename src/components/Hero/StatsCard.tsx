import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  delay: number;
}

const StatsCard: React.FC<StatsCardProps> = ({ icon: Icon, value, label }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 hover:bg-white/20 transition-colors">
      {/* スマホの場合は横並び、PCとタブレットの場合はアイコンと文字の横並び */}
      <div className="flex items-center justify-between sm:justify-start sm:gap-4">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500/20 rounded-lg flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 md:w-6 md:h-6 text-blue-300" />
        </div>
        {/* スマホの場合は横並び、PCとタブレットの場合は縦並び */}
        <div className="flex items-center gap-4 sm:gap-1 sm:block">
          <div className="text-xl md:text-2xl font-bold text-white text-center sm:text-left">
            {value}
          </div>
          <div className="text-xs sm:text-sm md:text-base text-blue-200 text-center sm:text-left">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;