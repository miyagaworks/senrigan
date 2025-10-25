import React, { forwardRef, MutableRefObject } from 'react';
import { useInViewOnce } from '../hooks/useInViewOnce';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  id?: string;
}

type InViewRef = MutableRefObject<HTMLElement | null>;

const Section = forwardRef<HTMLElement, SectionProps>(function Section({
  children,
  className = '',
  threshold,
  rootMargin,
  ...props
}, ref) {
  const { ref: inViewRef, isVisible } = useInViewOnce({ threshold, rootMargin });

  return (
    <section
      ref={(element) => {
        // 外部から渡されたrefの処理
        if (typeof ref === 'function') {
          ref(element);
        } else if (ref) {
          ref.current = element;
        }
        // IntersectionObserver用のrefの処理
        if (element && inViewRef && 'current' in inViewRef) {
          (inViewRef as InViewRef).current = element;
        }
      }}
      className={`${className} ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      } transition-all duration-1000`}
      {...props}
    >
      {isVisible && children}
    </section>
  );
});

Section.displayName = 'Section';

export default Section;