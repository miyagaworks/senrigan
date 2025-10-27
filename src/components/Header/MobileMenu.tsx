import React, { useState } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useScroll } from '../../hooks/useScroll';
import { MenuItem, menuItems } from '../../constants/menuItems';

interface MobileMenuProps {
  isScrolled: boolean;
  isOpen: boolean;
  onToggle: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isScrolled, isOpen, onToggle }) => {
  const location = useLocation();
  const isTopPage = location.pathname === '/';
  const { handleNavigation } = useScroll();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (href: string) => {
    setExpandedItems(prev =>
      prev.includes(href)
        ? prev.filter(item => item !== href)
        : [...prev, href]
    );
  };

  const renderMenuItem = (item: MenuItem) => {
    const isExpanded = expandedItems.includes(item.href);
    const Icon = item.icon;

    return (
      <div key={item.href} className="border-b border-gray-200 last:border-0">
        <div className="flex items-center justify-between">
          <a
            href={item.children ? undefined : (isTopPage ? `#${item.href}` : `/#${item.href}`)}
            onClick={(e) => {
              if (!item.children) {
                handleNavigation(e, item.href, isTopPage, onToggle);
              }
            }}
            className="flex items-center gap-3 flex-grow py-3 text-gray-900 hover:text-blue-600 transition-colors"
          >
            {Icon && <Icon size={20} className="flex-shrink-0" />}
            <span>{item.label}</span>
          </a>
          {item.children && (
            <button
              onClick={() => toggleExpanded(item.href)}
              className="p-3 text-gray-500 hover:text-blue-600"
            >
              {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          )}
        </div>
        {item.children && isExpanded && (
          <div className="pl-4 pb-2 space-y-2">
            {item.children.map(child => {
              const isHashLink = child.href === 'books';
              const href = isHashLink ? (isTopPage ? `#${child.href}` : `/#${child.href}`) : `/${child.href}`;
              const ChildIcon = child.icon;

              return (
                <a
                  key={child.href}
                  href={href}
                  onClick={(e) => {
                    if (isHashLink) {
                      handleNavigation(e, child.href, isTopPage, onToggle);
                    } else {
                      e.preventDefault();
                      window.location.href = `/${child.href}`;
                      onToggle();
                    }
                  }}
                  className="flex items-center gap-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {ChildIcon && <ChildIcon size={18} className="flex-shrink-0" />}
                  <span>{child.label}</span>
                </a>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <button
        className={`lg:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
        onClick={onToggle}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="container mx-auto px-4 py-2 divide-y divide-gray-100">
            {menuItems.map(renderMenuItem)}
          </nav>
        </div>
      )}
    </>
  );
};

export default MobileMenu;