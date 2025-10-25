import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`
        fixed w-full z-30 transition-all duration-300
        ${isScrolled ? 'bg-white/90 shadow-sm backdrop-blur-sm' : 'bg-transparent'}
      `}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center h-20">
          <div className="flex-shrink-0">
            <a href="/" className="h-8 md:h-10 block">
              <img 
                src="/images/logo_name.svg" 
                alt="株式会社Senrigan" 
                className={`h-full w-auto transition-all duration-300 ${
                  isScrolled ? '' : 'brightness-0 invert'
                }`}
              />
            </a>
          </div>
          <div className="flex-grow" />
          <div className="flex items-center">
            <Navigation isScrolled={isScrolled} />
            <MobileMenu 
              isScrolled={isScrolled}
              isOpen={isMenuOpen}
              onToggle={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;