import React from 'react';
import { Sparkles, Calendar, BookOpen, Heart, Shield, Smile } from 'lucide-react';
import { Button } from '../components/Button';
import { StarDoodle, CurvedArcDoodle, SquiggleDoodle } from '../components/Decorations';

interface HeroSectionProps {
  onBookVisit: () => void;
  onExplorePrograms: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onBookVisit, onExplorePrograms }) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:pt-10 lg:pb-24 bg-[#FFFCF9]">
      {/* Background Soft Organic Blobs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#FFF8E8] rounded-full blur-3xl opacity-70 pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-80 h-80 bg-[#FFF1F3] rounded-full blur-3xl opacity-75 pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#EDF8FD] rounded-full blur-2xl opacity-60 pointer-events-none -z-10" />

      {/* Decorative Doodles & Circles */}
      <div className="hidden lg:block absolute top-12 left-8 text-[#FFB52E] animate-subtle-float">
        <StarDoodle size={32} color="#FFB52E" />
      </div>
      <div className="hidden lg:block absolute bottom-20 left-1/3 text-[#72C83E] animate-subtle-float-delayed">
        <SquiggleDoodle stroke="#72C83E" className="w-24" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Supporting copy, CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left z-10">
            {/* Supporting Micro-Badge / Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF1F3] border border-[#FF7043]/20 shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF7043] animate-pulse" />
              <span className="text-xs sm:text-sm font-bold text-[#FF7043] tracking-wide font-display">
                Play-Based Learning · Caring Teachers · Safe Spaces
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[62px] xl:text-[70px] text-[#102B49] leading-[1.12] tracking-tight">
              Where Little Minds{' '}
              <span className="relative inline-block text-[#FF7043]">
                Grow Big Dreams.
                {/* Hand-drawn underline arc */}
                <CurvedArcDoodle
                  stroke="#FFB52E"
                  className="absolute -bottom-4 left-0 w-full h-4 sm:h-6"
                />
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-[#69717A] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              A joyful early-learning environment where children explore, create,
              play, and build the confidence they need for every next step.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                showArrow
                onClick={onBookVisit}
                className="w-full sm:w-auto shadow-md shadow-[#FF7043]/25"
              >
                <Calendar className="w-5 h-5 mr-1" />
                Book a School Visit
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={onExplorePrograms}
                className="w-full sm:w-auto"
              >
                <BookOpen className="w-5 h-5 mr-1 text-[#102B49]" />
                Explore Our Programs
              </Button>
            </div>

            {/* Quick Trust Signals */}
            <div className="pt-4 border-t border-[#102B49]/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm font-semibold text-[#102B49]/80">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#EAF7E3] text-[#72C83E] flex items-center justify-center">
                  <Shield className="w-3.5 h-3.5" />
                </span>
                <span>Licensed &amp; CPR Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#FFF1F3] text-[#FF7043] flex items-center justify-center">
                  <Heart className="w-3.5 h-3.5" />
                </span>
                <span>Low 1:6 Average Ratio</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#FFF8E8] text-[#FFB52E] flex items-center justify-center">
                  <Smile className="w-3.5 h-3.5" />
                </span>
                <span>Ages 2 to 6 Years</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image Treatment with Organic Layered Shapes */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[440px] sm:max-w-[480px]">
              {/* Layer 1: Giant Warm Yellow Circle Behind */}
              <div className="absolute -top-6 -left-6 w-36 h-36 sm:w-48 sm:h-48 rounded-full bg-[#FFB52E]/30 -z-10 animate-subtle-float" />

              {/* Layer 2: Fresh Green Accent Circle Behind */}
              <div className="absolute -bottom-8 -right-6 w-40 h-40 sm:w-52 sm:h-52 rounded-full bg-[#72C83E]/20 -z-10" />

              {/* Layer 3: Sky Blue Floating Bubble */}
              <div className="absolute top-1/2 -right-10 w-24 h-24 rounded-full bg-[#55BFEF]/25 -z-10" />

              {/* Layer 4: Orange Accent Dot */}
              <div className="absolute top-4 -right-2 w-8 h-8 rounded-full bg-[#FF7043] -z-10 shadow-sm" />

              {/* Layer 5: Hero Image with Organic Rounded Mask & Colored Outline */}
              <div className="relative p-3 bg-white rounded-[42px] sm:rounded-[52px] shadow-soft border-4 border-[#FFF1F3] overflow-hidden group">
                <img
                  src="/src/assets/images/hero_child_learning_1790505014485.jpg"
                  alt="LittleSprout Academy joyful child discovering through hands-on learning"
                  className="w-full aspect-square object-cover rounded-[34px] sm:rounded-[44px] transition-transform duration-500 group-hover:scale-103"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Floating Interactive Badge over image */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-neutral-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FFF1F3] flex items-center justify-center text-[#FF7043] shrink-0 font-bold">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#102B49] font-display">
                      Curiosity-Led Learning
                    </div>
                    <div className="text-[11px] text-[#69717A]">
                      Inspiring joyful discovery every single morning
                    </div>
                  </div>
                </div>
              </div>

              {/* Little Floating Star Accent */}
              <div className="absolute -bottom-4 left-10 text-[#FFB52E]">
                <StarDoodle size={28} color="#FFB52E" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
