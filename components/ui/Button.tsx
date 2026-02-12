// -----------------------------------------------------------------------------
// File: components/ui/Button.tsx
// Purpose: Reusable button component with style variants and loading state.
// PHD: P. Heiniger Design — Practical creative solutions from Andermatt. (design@pascalheiniger.ch)
// -----------------------------------------------------------------------------

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

/**
 * Generic button used across the interface.
 * Supports style variants, sizing, and a loading state that disables interactions.
 */
export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  isLoading, 
  className = '', 
  disabled,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-full tracking-wide";
  
  const variants = {
    // Primary: Sage green (calm authority)
    primary: "bg-sage-600 text-white hover:bg-sage-700 dark:bg-sage-200 dark:text-sage-900 dark:hover:bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5",
    // Accent: Rose (warm highlight)
    accent: "bg-rose-400 text-white hover:bg-rose-500 dark:bg-rose-300 dark:text-rose-950 dark:hover:bg-rose-200 shadow-sm hover:shadow-md hover:-translate-y-0.5",
    // Secondary: Soft sand background
    secondary: "bg-sand-200 text-sand-900 hover:bg-sand-300 dark:bg-sage-800 dark:text-sage-100 dark:hover:bg-sage-700",
    // Outline: Delicate borders
    outline: "border border-sage-300 text-sage-800 hover:border-sage-400 hover:bg-sage-50/50 dark:border-sage-700 dark:text-sage-200 dark:hover:bg-sage-900/50",
    // Ghost: Subtle hover
    ghost: "text-sage-700 hover:text-sage-900 hover:bg-sage-100/50 dark:text-sage-300 dark:hover:text-sage-50 dark:hover:bg-sage-800/30"
  };

  const sizes = {
    sm: "text-xs px-5 py-2",
    md: "text-sm px-8 py-3.5",
    lg: "text-base px-10 py-5"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading...
        </span>
      ) : children}
    </button>
  );
};
