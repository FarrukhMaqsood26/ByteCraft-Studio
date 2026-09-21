'use client';

import React, { useEffect, useState, useRef } from 'react';

interface StaggerRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'scale';
  className?: string;
}

export default function StaggerReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: StaggerRevealProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const baseStyle: React.CSSProperties = {
    transitionDelay: `${delay}ms`,
    transitionDuration: '800ms',
    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    transitionProperty: 'opacity, transform',
    willChange: 'opacity, transform',
  };

  const hiddenStyle: React.CSSProperties = {
    opacity: 0,
    transform:
      direction === 'up'
        ? 'translateY(30px)'
        : direction === 'left'
        ? 'translateX(-30px)'
        : direction === 'right'
        ? 'translateX(30px)'
        : 'scale(0.94)',
  };

  const visibleStyle: React.CSSProperties = {
    opacity: 1,
    transform: 'none',
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...baseStyle, ...(visible ? visibleStyle : hiddenStyle) }}
    >
      {children}
    </div>
  );
}
