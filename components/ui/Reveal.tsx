// -----------------------------------------------------------------------------
// File: components/ui/Reveal.tsx
// Purpose: Reusable viewport reveal animation wrapper component.
// PHD: P. Heiniger Design — Practical creative solutions from Andermatt. (design@pascalheiniger.ch)
// -----------------------------------------------------------------------------

import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number; // seconds
}

/**
 * Reveals wrapped content once it enters the viewport.
 * @param delay Optional delay in seconds before transition starts.
 */
export const Reveal: React.FC<RevealProps> = ({ children, width = '100%', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} style={{ width }} className={`relative overflow-hidden`}>
      <div
        className={`transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
        style={{ transitionDelay: `${delay}s` }}
      >
        {children}
      </div>
    </div>
  );
};
