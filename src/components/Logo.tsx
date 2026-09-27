import React from 'react';

interface LogoProps {
  variant?: 'default' | 'footer' | 'compact';
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'default', className = '', onClick }) => {
  const isFooter = variant === 'footer';

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 cursor-pointer select-none group transition-transform duration-200 active:scale-95 ${className}`}
      role="button"
      tabIndex={0}
      aria-label="LittleSprout Academy Home"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      {/* Brand Icon SVG: Sprout + Warm Sun + Book Arc */}
      <div className="relative w-10 h-10 shrink-0">
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform group-hover:rotate-6 transition-transform duration-300"
        >
          {/* Warm Sun/Orange Base Blob */}
          <circle cx="32" cy="32" r="30" fill="#FFF1F3" />
          <path
            d="M12 44C12 36 20 30 32 30C44 30 52 36 52 44C52 49 46 54 32 54C18 54 12 49 12 44Z"
            fill="#FFB52E"
            opacity="0.3"
          />

          {/* Child-friendly Open Book base curve */}
          <path
            d="M18 42C24 38 30 39 32 43C34 39 40 38 46 42"
            stroke="#102B49"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Sprout Stem */}
          <path
            d="M32 43V23"
            stroke="#72C83E"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Left Leaf (Friendly Heart/Teardrop shape) */}
          <path
            d="M32 32C24 30 18 22 23 16C29 16 32 24 32 32Z"
            fill="#72C83E"
          />

          {/* Right Leaf */}
          <path
            d="M32 27C38 23 44 14 38 10C32 12 32 20 32 27Z"
            fill="#FF7043"
          />

          {/* Little Yellow Blossom / Discovery Dot */}
          <circle cx="32" cy="14" r="3.5" fill="#FFB52E" />
        </svg>
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col justify-center leading-none">
        <span
          className={`font-display font-bold text-xl tracking-tight transition-colors ${
            isFooter ? 'text-white group-hover:text-[#FFB52E]' : 'text-[#102B49] group-hover:text-[#FF7043]'
          }`}
        >
          LittleSprout
        </span>
        <span
          className={`text-[11px] font-semibold tracking-wider uppercase ${
            isFooter ? 'text-[#FFB52E]' : 'text-[#FF7043]'
          }`}
        >
          Academy
        </span>
      </div>
    </div>
  );
};
