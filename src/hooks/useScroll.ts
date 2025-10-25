import { useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const HEADER_HEIGHT = 80;

export const useScroll = () => {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const rect = element.getBoundingClientRect();
      const elementPosition = rect.top + window.scrollY;
      const viewportOffset = window.innerWidth <= 768 ? 0 : HEADER_HEIGHT;
      window.scrollTo(0, elementPosition - viewportOffset);
    }
  }, []);

  const handleNavigation = useCallback((
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
    isTopPage: boolean,
    onComplete?: () => void
  ) => {
    e.preventDefault();
    
    if (isTopPage) {
      // トップページ内での移動（即時実行）
      navigate(`/#${targetId}`, { replace: true });
      requestAnimationFrame(() => {
        scrollToSection(targetId);
        onComplete?.();
      });
    } else {
      // 下層ページからの移動
      navigate(`/#${targetId}`);

      // まずページトップへ
      window.scrollTo(0, 0);

      // 要素が見つかるまで繰り返し試行
      const maxAttempts = 10;
      let attempts = 0;

      const tryScroll = () => {
        const element = document.getElementById(targetId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementPosition = rect.top + window.scrollY;
          const viewportOffset = window.innerWidth <= 768 ? 0 : HEADER_HEIGHT;
          window.scrollTo(0, elementPosition - viewportOffset);
          onComplete?.();
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(tryScroll, 100);
        }
      };

      // 初回試行を開始
      setTimeout(tryScroll, 100);
    }
  }, [navigate, scrollToSection]);

  useEffect(() => {
    if (hash && pathname === '/') {
      const id = hash.replace('#', '');
      
      // 要素が見つかるまで繰り返し試行
      const maxAttempts = 10;
      let attempts = 0;

      const tryScroll = () => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementPosition = rect.top + window.scrollY;
          const viewportOffset = window.innerWidth <= 768 ? 0 : HEADER_HEIGHT;
          window.scrollTo(0, elementPosition - viewportOffset);
        } else if (attempts < maxAttempts) {
          attempts++;
          setTimeout(tryScroll, 100);
        }
      };

      setTimeout(tryScroll, 100);
    } else if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return { scrollToSection, handleNavigation };
};