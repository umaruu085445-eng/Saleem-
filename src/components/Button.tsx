import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  showArrow = false,
  children,
  className = '',
  onClick,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-semibold font-display tracking-tight transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group whitespace-nowrap shrink-0 select-none';

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-2 rounded-xl gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-2xl gap-2',
    lg: 'text-base px-6 py-3.5 rounded-2xl gap-2.5'
  };

  const variantClasses = {
    primary:
      'bg-[#FF7043] text-white hover:bg-[#F45D2E] shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0',
    secondary:
      'bg-white text-[#102B49] border-2 border-[#102B49]/15 hover:border-[#102B49] hover:bg-[#FFF8E8] hover:-translate-y-0.5 active:translate-y-0',
    outline:
      'bg-transparent text-[#FF7043] border-2 border-[#FF7043] hover:bg-[#FF7043] hover:text-white hover:-translate-y-0.5 active:translate-y-0',
    text:
      'bg-transparent text-[#FF7043] hover:text-[#F45D2E] p-0 font-bold hover:translate-x-0.5'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
      )}
    </button>
  );
};
