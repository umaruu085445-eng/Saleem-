import React, { useState, useEffect } from 'react';
import { Menu, Phone, Calendar } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './Button';
import { MobileMenu } from './MobileMenu';

interface HeaderProps {
  activeNav: string;
  onNavClick: (item: string) => void;
  onBookVisit: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeNav, onNavClick, onBookVisit }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 bg-white/95 backdrop-blur-md ${
          isScrolled
            ? 'py-2.5 shadow-sm border-b border-[#102B49]/5'
            : 'py-4 border-b border-[#102B49]/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Zone 1: Brand Logo */}
            <div className="shrink-0">
              <Logo onClick={() => onNavClick('home')} />
            </div>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-semibold font-display">
              {navItems.map((item) => {
                const isActive = activeNav === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onNavClick(item.id)}
                    className={`px-3 py-1.5 rounded-full transition-all relative cursor-pointer ${
                      isActive
                        ? 'text-[#FF7043] font-bold bg-[#FFF1F3]'
                        : 'text-[#102B49]/80 hover:text-[#FF7043] hover:bg-[#FFF8E8]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#FF7043]" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Direct Phone & Action CTA */}
            <div className="flex items-center gap-3">
              <a
                href="tel:18005550198"
                className="hidden xl:flex items-center gap-2 text-sm font-semibold text-[#102B49] hover:text-[#FF7043] px-2 py-1 rounded-xl transition-colors"
                title="Call Admissions"
              >
                <div className="w-8 h-8 rounded-full bg-[#FFF8E8] flex items-center justify-center text-[#FFB52E]">
                  <Phone className="w-4 h-4 text-[#FF7043]" />
                </div>
                <div className="text-left leading-tight">
                  <span className="text-[10px] text-[#69717A] uppercase font-bold block">Admissions</span>
                  <span>+1 (800) 555-0198</span>
                </div>
              </a>

              <Button
                variant="primary"
                size="md"
                showArrow
                onClick={onBookVisit}
                className="hidden sm:inline-flex"
              >
                <Calendar className="w-4 h-4 mr-1 hidden md:inline-block" />
                Book a Visit
              </Button>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-2xl text-[#102B49] hover:bg-[#FFF1F3] hover:text-[#FF7043] focus:outline-none transition-colors cursor-pointer"
                aria-label="Open mobile navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeNav={activeNav}
        onNavClick={onNavClick}
        onBookVisit={onBookVisit}
      />
    </>
  );
};
