import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

const Loading = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 1.5秒後にフェードアウト
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-300">
      {/* Ambient background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-blue-600/20 via-transparent to-transparent animate-pulse-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(59,130,246,0.1),transparent)]" />
      </div>

      <div className="relative z-10">
        {/* Status badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/40 backdrop-blur-sm border-2 border-blue-400/50 shadow-lg shadow-blue-500/20">
            <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
            <span className="text-sm font-medium text-white">システムを準備しています</span>
          </div>
        </div>

        {/* Main loading animation */}
        <div className="relative flex flex-col items-center mt-8">
          {/* Outer rotating rings */}
          <div className="absolute w-32 h-32 rounded-full border-2 border-blue-400/20 animate-spin-slow" />
          <div className="absolute w-32 h-32 rounded-full border-2 border-blue-400/10 animate-spin-slow [animation-direction:reverse]" style={{ animationDuration: '15s' }} />
          
          {/* Loading text */}
          <div className="text-white/80 text-sm mt-12">
            Loading
            <span className="inline-block animate-bounce">.</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: '0.2s' }}>.</span>
            <span className="inline-block animate-bounce" style={{ animationDelay: "0.4s" }}>.</span>
          </div>

          {/* Floating particles */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
              style={{
                top: `${Math.random() * 200}px`,
                left: `${Math.random() * 200 - 100}px`,
                animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;