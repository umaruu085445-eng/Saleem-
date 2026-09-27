import React, { useState } from 'react';
import { Camera, Maximize2 } from 'lucide-react';
import { galleryData } from '../data/gallery';
import { GalleryItem } from '../types';
import { Lightbox } from '../components/Lightbox';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const categories = ['All', 'Classroom', 'Outdoor Play', 'Art', 'Learning', 'Events'];

  const filteredItems =
    activeCategory === 'All'
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  const activeItem =
    selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  const handleNext = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex(
        selectedItemIndex === 0 ? filteredItems.length - 1 : selectedItemIndex - 1
      );
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FFFCF9] relative overflow-hidden" id="activities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDF8FD] text-xs font-bold text-[#55BFEF] uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Campus Life</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#102B49] leading-tight">
            Little Moments, Big Memories
          </h2>
          <p className="mt-3 text-base text-[#69717A]">
            Snapshots of daily discovery, messy watercolor masterpieces, garden explorations, and joyful milestones.
          </p>
        </div>

        {/* Category Filter Tabs (functional segmented buttons) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedItemIndex(null);
                }}
                className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-display font-bold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#102B49] text-white shadow-sm'
                    : 'bg-white text-[#102B49]/70 hover:bg-[#FFF8E8] hover:text-[#102B49] border border-[#102B49]/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((item, idx) => {
            return (
              <div
                key={item.id}
                onClick={() => setSelectedItemIndex(idx)}
                className="group relative rounded-3xl overflow-hidden bg-white shadow-soft hover:shadow-card-hover border-4 border-white cursor-pointer transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="aspect-square overflow-hidden bg-neutral-100">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Hover overlay with caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#102B49]/90 via-[#102B49]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FFB52E] mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-display font-bold text-sm sm:text-base leading-snug">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-1 text-[11px] text-white/80 mt-2">
                    <Maximize2 className="w-3.5 h-3.5 text-[#72C83E]" />
                    <span>Click to expand</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={selectedItemIndex !== null}
        item={activeItem}
        onClose={() => setSelectedItemIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};
