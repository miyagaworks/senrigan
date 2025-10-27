import React from 'react';
import { useLocation } from 'react-router-dom';
import { useScroll } from '../../hooks/useScroll';
import { MenuItem, menuItems } from '../../constants/menuItems';

interface NavigationProps {
  isScrolled: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ isScrolled }) => {
  const location = useLocation();
  const isTopPage = location.pathname === '/';
  const { handleNavigation } = useScroll();

  const renderSubmenu = (children: MenuItem[]) => (
    <div className="absolute top-full left-0 w-64 py-2 mt-1 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
      {children.map((child) => {
        const isHashLink = child.href === 'books';
        const href = isHashLink ? (isTopPage ? `#${child.href}` : `/#${child.href}`) : `/${child.href}`;
        const Icon = child.icon;

        return (
          <a
            key={child.href}
            href={href}
            onClick={(e) => {
              if (isHashLink) {
                handleNavigation(e, child.href, isTopPage);
              }
            }}
            className="flex items-center gap-3 px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-blue-600"
          >
            {Icon && <Icon size={18} className="flex-shrink-0" />}
            <span>{child.label}</span>
          </a>
        );
      })}
    </div>
  );

  return (
    <nav className={`hidden lg:flex items-center gap-8 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
      {menuItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <div key={item.href} className="relative group">
            <a
              href={item.children ? '#' : (isTopPage ? `#${item.href}` : `/#${item.href}`)}
              onClick={(e) => {
                if (item.children) {
                  e.preventDefault();
                } else {
                  handleNavigation(e, item.href, isTopPage);
                }
              }}
              className={`flex items-center gap-2 transition-colors ${
                index === menuItems.length - 1
                  ? isScrolled
                    ? 'px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700'
                    : 'px-6 py-2 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-sm'
                  : isScrolled
                    ? 'hover:text-blue-600'
                    : 'hover:text-blue-300'
              }`}
            >
              {Icon && <Icon size={18} />}
              <span>{item.label}</span>
            </a>
            {item.children && renderSubmenu(item.children)}
          </div>
        );
      })}
    </nav>
  );
};

export default Navigation;