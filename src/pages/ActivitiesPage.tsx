import React, { useState } from 'react';
import { galleryData } from '../data/gallery';
import { GalleryItem } from '../types';
import { Lightbox } from '../components/Lightbox';
import { Camera, Sparkles, Paintbrush, Trees, Compass } from 'lucide-react';
import { Button } from '../components/Button';

interface ActivitiesPageProps {
  onBookVisit: () => void;
}

export const ActivitiesPage: React.FC<ActivitiesPageProps> = ({ onBookVisit }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const categories = ['All', 'Classroom', 'Outdoor Play', 'Art', 'Learning', 'Events'];

  const filteredItems =
    activeCategory === 'All'
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  const activeItem = selectedIdx !== null ? filteredItems[selectedIdx] : null;

  const handleNext = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (selectedIdx !== null) {
      setSelectedIdx(selectedIdx === 0 ? filteredItems.length - 1 : selectedIdx - 1);
    }
  };

  return (
    <div className="py-12 sm:py-16 space-y-16 sm:space-y-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDF8FD] text-xs font-bold text-[#55BFEF] uppercase tracking-wider">
          <Camera className="w-3.5 h-3.5" />
          <span>Campus Life &amp; Activities</span>
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#102B49] leading-tight max-w-3xl mx-auto">
          Every Day is an Adventure of Hands-On Discovery
        </h1>
        <p className="text-base sm:text-lg text-[#69717A] max-w-2xl mx-auto leading-relaxed">
          From tactile watercolor studios to outdoor vegetable beds and collaborative engineering,
          take a look into our vibrant daily rhythm.
        </p>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => {
                setActiveCategory(c);
                setSelectedIdx(null);
              }}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold font-display transition-all cursor-pointer ${
                activeCategory === c
                  ? 'bg-[#102B49] text-white shadow-sm'
                  : 'bg-white text-[#102B49]/70 hover:bg-[#FFF8E8] border border-[#102B49]/10'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedIdx(idx)}
              className="group bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-card-hover border-4 border-white cursor-pointer transition-all hover:-translate-y-1.5"
            >
              <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-[#FF7043] uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-[11px] text-[#69717A] font-medium">Click to zoom</span>
                </div>
                <h3 className="font-display font-bold text-lg text-[#102B49] group-hover:text-[#FF7043] transition-colors mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#69717A] line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Signature Daily Studios / Activities */}
      <section className="bg-[#FFF1F3]/40 py-16 border-y border-[#FF7043]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="font-display font-bold text-3xl text-[#102B49]">
              Signature Learning Studios
            </h2>
            <p className="text-sm text-[#69717A] mt-2">
              Four specialized discovery environments open to every enrolled child.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-5 rounded-3xl shadow-xs border border-[#102B49]/5 space-y-2 text-center">
              <div className="w-12 h-12 rounded-full bg-[#FFF1F3] text-[#FF7043] flex items-center justify-center mx-auto">
                <Paintbrush className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-base text-[#102B49]">The Creative Atelier</h4>
              <p className="text-xs text-[#69717A]">
                Easel pastels, pottery clay, kinetic sand, and mixed-media collage stations.
              </p>
            </div>

            <div className="bg-white p-5 rounded-3xl shadow-xs border border-[#102B49]/5 space-y-2 text-center">
              <div className="w-12 h-12 rounded-full bg-[#F0F9ED] text-[#72C83E] flex items-center justify-center mx-auto">
                <Trees className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-base text-[#102B49]">Botanical Garden</h4>
              <p className="text-xs text-[#69717A]">
                Raised herb beds, organic seed planting, magnifying glasses, and sensory mulch walks.
              </p>
            </div>

            <div className="bg-white p-5 rounded-3xl shadow-xs border border-[#102B49]/5 space-y-2 text-center">
              <div className="w-12 h-12 rounded-full bg-[#EDF8FD] text-[#55BFEF] flex items-center justify-center mx-auto">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-base text-[#102B49]">STEAM Lab</h4>
              <p className="text-xs text-[#69717A]">
                Fractions with natural wooden fruit, balancing scales, ramp physics, and gears.
              </p>
            </div>

            <div className="bg-white p-5 rounded-3xl shadow-xs border border-[#102B49]/5 space-y-2 text-center">
              <div className="w-12 h-12 rounded-full bg-[#FFF8E8] text-[#FFB52E] flex items-center justify-center mx-auto">
                <Compass className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-base text-[#102B49]">Storytelling Nook</h4>
              <p className="text-xs text-[#69717A]">
                Plush reading teepees, multicultural picture books, and daily acoustic finger-plays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Component */}
      <Lightbox
        isOpen={selectedIdx !== null}
        item={activeItem}
        onClose={() => setSelectedIdx(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};
