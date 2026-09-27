import React from 'react';
import { Button } from '../components/Button';
import { StarDoodle, SquiggleDoodle } from '../components/Decorations';
import { Sparkles, Sun, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  onLearnMore: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#FFF1F3]/50 relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-10 right-1/4 w-80 h-80 bg-[#FFF8E8] rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#EDF8FD] rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story Content */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7 text-center lg:text-left">
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF7043] bg-white px-3.5 py-1.5 rounded-full shadow-xs">
              <Sun className="w-3.5 h-3.5 text-[#FFB52E]" />
              <span>About LittleSprout</span>
            </div>

            {/* Heading */}
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#102B49] leading-tight">
              A Place Where{' '}
              <span className="text-[#72C83E] relative inline-block">
                Childhood
                <SquiggleDoodle stroke="#FF7043" className="absolute -bottom-2.5 left-0 w-full" />
              </span>{' '}
              Comes First.
            </h2>

            {/* Main Paragraph */}
            <p className="text-base sm:text-lg text-[#69717A] leading-relaxed">
              At LittleSprout Academy, we believe young children learn best when they feel safe,
              supported, curious, and free to explore. Our classrooms combine play, creativity,
              movement, stories, and meaningful relationships to help every child discover the joy of learning.
            </p>

            {/* Core Values / Bullet points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-left">
              <div className="flex items-start gap-2.5 bg-white/80 p-3 rounded-2xl border border-[#102B49]/5">
                <CheckCircle2 className="w-5 h-5 text-[#72C83E] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[#102B49]">
                  Emergent, child-led inquiry curriculum
                </span>
              </div>
              <div className="flex items-start gap-2.5 bg-white/80 p-3 rounded-2xl border border-[#102B49]/5">
                <CheckCircle2 className="w-5 h-5 text-[#FF7043] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[#102B49]">
                  Gentle socio-emotional guidance
                </span>
              </div>
              <div className="flex items-start gap-2.5 bg-white/80 p-3 rounded-2xl border border-[#102B49]/5">
                <CheckCircle2 className="w-5 h-5 text-[#55BFEF] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[#102B49]">
                  Organic daily outdoor nature discovery
                </span>
              </div>
              <div className="flex items-start gap-2.5 bg-white/80 p-3 rounded-2xl border border-[#102B49]/5">
                <CheckCircle2 className="w-5 h-5 text-[#FFB52E] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-[#102B49]">
                  Active parent partnership &amp; communication
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Button
                variant="primary"
                size="lg"
                showArrow
                onClick={onLearnMore}
              >
                Learn More About Us
              </Button>
            </div>
          </div>

          {/* Right Column: Editorial Overlapping Image Composition */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-[480px]">
              {/* Green curved stroke behind */}
              <svg
                viewBox="0 0 200 200"
                className="absolute -top-10 -right-8 w-44 h-44 text-[#72C83E] -z-10 opacity-70 animate-subtle-float"
              >
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeDasharray="16 12"
                />
              </svg>

              {/* Orange circle accent */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-[#FF7043]/20 -z-10" />

              {/* Small blue dot */}
              <div className="absolute top-1/4 -left-4 w-6 h-6 rounded-full bg-[#55BFEF] shadow-sm" />

              {/* Small yellow dot */}
              <div className="absolute -bottom-2 right-12 w-8 h-8 rounded-full bg-[#FFB52E] shadow-sm" />

              {/* Little Star */}
              <div className="absolute -top-4 left-6 text-[#FFB52E]">
                <StarDoodle size={30} color="#FFB52E" />
              </div>

              {/* Organic Image Card */}
              <div className="p-3 bg-white rounded-[44px] shadow-soft border-4 border-white overflow-hidden group">
                <img
                  src="/src/assets/images/classroom_creative_play_1790505025779.jpg"
                  alt="Children learning happily in bright modern classroom"
                  className="w-full aspect-[4/3] object-cover rounded-[36px] transition-transform duration-500 group-hover:scale-104"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Overlaid experience pill */}
                <div className="mt-3 px-4 py-3 bg-[#FFF8E8] rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#FF7043]" />
                    <span className="text-xs font-bold text-[#102B49]">
                      Reggio &amp; Play-Informed Philosophy
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#72C83E]">
                    Est. 2018
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
