import React, { useEffect, useRef } from 'react';
import { X, Phone, Calendar, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeNav: string;
  onNavClick: (item: string) => void;
  onBookVisit: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  activeNav,
  onNavClick,
  onBookVisit
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on Escape & trap body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Programs', id: 'programs' },
    { label: 'Admissions', id: 'admissions' },
    { label: 'Teachers', id: 'teachers' },
    { label: 'Activities', id: 'activities' },
    { label: 'Blog', id: 'blog' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#102B49]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        ref={menuRef}
        className="relative z-10 w-full max-h-[92vh] bg-[#FFFCF9] rounded-t-3xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-300 border-t-4 border-[#FF7043]"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#102B49]/10 bg-white">
          <Logo onClick={() => { onNavClick('home'); onClose(); }} />
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#102B49] hover:bg-[#FFF1F3] hover:text-[#FF7043] transition-colors"
            aria-label="Close navigation"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Links list */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-2">
          {navItems.map((item) => {
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavClick(item.id);
                  onClose();
                }}
                className={`w-full text-left px-4 py-3 rounded-2xl text-lg font-bold font-display transition-all flex items-center justify-between ${
                  isActive
                    ? 'bg-[#FFF1F3] text-[#FF7043] shadow-sm pl-6'
                    : 'text-[#102B49] hover:bg-[#FFF8E8] hover:text-[#FF7043]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <ArrowRight className="w-5 h-5 text-[#FF7043]" />}
              </button>
            );
          })}

          {/* Quick Contact & Action Card */}
          <div className="pt-4 border-t border-[#102B49]/10 mt-4 space-y-3">
            <div className="flex items-center gap-3 text-sm text-[#102B49]/80 bg-[#FFF8E8] p-3.5 rounded-2xl">
              <Phone className="w-5 h-5 text-[#FF7043] shrink-0" />
              <div>
                <div className="text-xs text-[#69717A]">Direct Admissions Desk</div>
                <a href="tel:18005550198" className="font-bold text-[#102B49] hover:text-[#FF7043]">
                  +1 (800) 555-0198
                </a>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full justify-center"
              showArrow
              onClick={() => {
                onClose();
                onBookVisit();
              }}
            >
              <Calendar className="w-5 h-5 mr-1" />
              Book a Visit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
