import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Tag } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxProps {
  isOpen: boolean;
  item: GalleryItem | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  item,
  onClose,
  onNext,
  onPrev
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
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
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#102B49]/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Main Container */}
      <div className="relative z-10 max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-white animate-in zoom-in-95 duration-200 flex flex-col">
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-white border-b border-neutral-100">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-xs font-bold text-[#FF7043] bg-[#FFF1F3] px-2.5 py-1 rounded-full">
              <Tag className="w-3 h-3" />
              {item.category}
            </span>
            <h3 className="font-display font-bold text-base sm:text-lg text-[#102B49] truncate">
              {item.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#102B49] hover:bg-[#FFF1F3] hover:text-[#FF7043] transition-colors"
            aria-label="Close image lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Stage with Controls */}
        <div className="relative bg-neutral-950 flex items-center justify-center min-h-[300px] max-h-[70vh] overflow-hidden">
          <img
            src={item.src}
            alt={item.alt}
            className="w-full h-full max-h-[70vh] object-contain select-none"
          />

          {/* Navigation Arrows */}
          <button
            onClick={onPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 text-[#102B49] hover:bg-white hover:text-[#FF7043] hover:scale-105 active:scale-95 shadow-md flex items-center justify-center transition-all cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={onNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 text-[#102B49] hover:bg-white hover:text-[#FF7043] hover:scale-105 active:scale-95 shadow-md flex items-center justify-center transition-all cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Footer info */}
        <div className="px-6 py-4 bg-[#FFFCF9] border-t border-neutral-100 flex items-center justify-between">
          <p className="text-xs sm:text-sm text-[#69717A] font-medium">
            {item.caption}
          </p>
          <span className="text-xs font-semibold text-[#102B49]/40 shrink-0 ml-4">
            LittleSprout Academy Moments
          </span>
        </div>
      </div>
    </div>
  );
};
