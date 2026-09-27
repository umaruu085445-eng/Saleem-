import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, Heart } from 'lucide-react';
import { testimonialsData } from '../data/testimonials';
import { StarDoodle } from '../components/Decorations';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto advance every 6 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Soft pink organic cloud / blob shape container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Decorative cloud background container */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative bg-[#FFF1F3] rounded-[48px] p-8 sm:p-12 lg:p-16 shadow-soft border-2 border-[#FFF1F3] overflow-hidden"
        >
          {/* Subtle Decorative Floating Elements */}
          <div className="absolute top-6 right-8 text-[#FFB52E]">
            <StarDoodle size={32} color="#FFB52E" />
          </div>
          <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full bg-[#FFF8E8] -z-0 opacity-80" />
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-[#EDF8FD] -z-0 opacity-70" />

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 relative z-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF7043] bg-white px-3 py-1 rounded-full mb-3 shadow-xs">
              <Heart className="w-3.5 h-3.5 text-[#FF7043] fill-[#FF7043]" />
              <span>Parent Voices</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#102B49] leading-tight">
              Parents' Words Mean the World to Us
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#69717A]">
              Families choose LittleSprout because they want their children to feel confident,
              cared for, and excited to learn every day.
            </p>
          </div>

          {/* Testimonial Active Card */}
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-neutral-100/80 transition-all duration-300">
              {/* Quote Mark & Star Rating */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#FFF1F3] text-[#FF7043] flex items-center justify-center">
                  <Quote className="w-6 h-6 fill-[#FF7043]" />
                </div>
                <div className="flex items-center gap-1 text-[#FFB52E]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFB52E]" />
                  ))}
                </div>
              </div>

              {/* Quote text */}
              <blockquote className="text-lg sm:text-xl lg:text-2xl text-[#102B49] font-medium leading-relaxed mb-8 italic">
                “{current.quote}”
              </blockquote>

              {/* Author Row */}
              <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-neutral-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#FF7043] text-white flex items-center justify-center font-display font-bold text-base shadow-sm ring-4 ring-[#FFF1F3]">
                    {current.avatar}
                  </div>
                  <div>
                    <div className="font-display font-bold text-base sm:text-lg text-[#102B49]">
                      {current.author}
                    </div>
                    <div className="text-xs text-[#69717A] font-medium">
                      {current.role} · <span className="text-[#FF7043]">{current.childProgram}</span>
                    </div>
                  </div>
                </div>

                {/* Carousel Navigation Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full bg-[#FFF8E8] text-[#102B49] hover:bg-[#FFB52E] hover:text-white transition-colors flex items-center justify-center cursor-pointer"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full bg-[#FFF8E8] text-[#102B49] hover:bg-[#FFB52E] hover:text-white transition-colors flex items-center justify-center cursor-pointer"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Pagination Indicators */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {testimonialsData.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx
                      ? 'w-8 bg-[#FF7043]'
                      : 'w-2.5 bg-[#FF7043]/30 hover:bg-[#FF7043]/60'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
