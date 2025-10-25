import React from 'react';

interface AnimatedHeadlineProps {
  text: string[];
}

const AnimatedHeadline: React.FC<AnimatedHeadlineProps> = ({ text }) => {
  return (
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 relative">
      {text.map((line, index) => (
        <span key={index} className="block overflow-hidden">
          <span className="block overflow-hidden mb-1 sm:mb-2">
            <span 
              className="block transform text-white"
              style={{ transitionDelay: `${300 + index * 200}ms` }}
            >
              {line}
            </span>
          </span>
        </span>
      ))}
    </h1>
  );
};

export default AnimatedHeadline;