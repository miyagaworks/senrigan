// FloatingIcons.tsx
import React from 'react';
import { Code2, Layout, Server, Database, LineChart } from 'lucide-react';

const icons = [Code2, Layout, Server, Database, LineChart];

const getRandomPosition = () => {
  const positions = [
    'top-1/4 left-1/4',
    'top-1/3 right-1/4',
    'bottom-1/4 left-1/3',
    'top-2/3 right-1/3',
    'bottom-1/3 right-1/4'
  ];
  return positions[Math.floor(Math.random() * positions.length)];
};

const getRandomAnimation = () => {
  const animations = ['slow', 'slower', ''];
  return animations[Math.floor(Math.random() * animations.length)];
};

const FloatingIcons: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((Icon, index) => (
        <div
          key={index}
          className={`absolute ${getRandomPosition()} animate-float-${getRandomAnimation()}`}
          style={{ 
            animationDelay: `${index * 0.5}s`,
            transform: `rotate(${Math.random() * 20 - 10}deg)`
          }}
        >
          <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center transform hover:scale-110 transition-all duration-500 hover:rotate-0">
            <Icon className="w-8 h-8 text-primary-600" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;