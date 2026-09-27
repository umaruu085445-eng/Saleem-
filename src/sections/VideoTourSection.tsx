import React from 'react';
import { Play, Sparkles, Compass } from 'lucide-react';
import { Button } from '../components/Button';
import { StarDoodle, PaperPlaneDoodle, SquiggleDoodle } from '../components/Decorations';

interface VideoTourSectionProps {
  onWatchTour: () => void;
}

export const VideoTourSection: React.FC<VideoTourSectionProps> = ({ onWatchTour }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#FF7043] text-white relative overflow-hidden">
      {/* Decorative Background Doodles & Subtle Geometric Elements */}
      <div className="absolute top-8 left-12 opacity-80 text-white/40 animate-subtle-float">
        <PaperPlaneDoodle stroke="rgba(255,255,255,0.4)" className="w-16 h-16" />
      </div>
      <div className="absolute bottom-10 left-1/4 opacity-40 text-white/40">
        <SquiggleDoodle stroke="rgba(255,255,255,0.6)" className="w-24" />
      </div>
      <div className="absolute top-1/2 right-6 text-white/30">
        <StarDoodle size={36} color="rgba(255,255,255,0.4)" />
      </div>

      {/* Abstract warm organic shape blobs */}
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/10 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-[#FFB52E]/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-xs font-bold uppercase tracking-wider text-white">
              <Compass className="w-4 h-4 text-[#FFB52E]" />
              <span>Virtual Campus Experience</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              Come See Where the Magic Happens.
            </h2>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
              Take a peek inside our classrooms, play areas, creative spaces,
              and outdoor learning environment. See how our thoughtfully prepared
              spaces invite curiosity and nurture joyful confidence.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                variant="secondary"
                size="lg"
                onClick={onWatchTour}
                className="bg-white text-[#FF7043] border-white hover:bg-[#FFF8E8] shadow-lg"
              >
                <Play className="w-5 h-5 mr-1 fill-[#FF7043]" />
                Watch Our Tour (2 Min)
              </Button>
            </div>

            {/* Tour Highlights list */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-white/90">
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FFB52E]" /> Nature Discovery Garden
              </span>
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FFB52E]" /> Reggio Atelier Studio
              </span>
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FFB52E]" /> Wooden STEAM Lab
              </span>
            </div>
          </div>

          {/* Right Video Thumbnail with Play Button */}
          <div className="lg:col-span-6 flex justify-center">
            <div
              onClick={onWatchTour}
              className="relative w-full max-w-[500px] cursor-pointer group"
            >
              {/* Outer decorative ring */}
              <div className="absolute -inset-3 rounded-[46px] bg-white/20 transform -rotate-1 group-hover:rotate-0 transition-transform duration-300" />
              
              {/* Yellow accent circle */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-[#FFB52E] -z-0 opacity-90 shadow-md" />

              {/* Main Card */}
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-white bg-neutral-900 aspect-video">
                <img
                  src="/src/assets/images/video_tour_classroom_1790505038613.jpg"
                  alt="LittleSprout Academy Tour Preview"
                  className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Pulsing Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-20 h-20 rounded-full bg-white/40 animate-ping" />
                    <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-white text-[#FF7043] flex items-center justify-center shadow-xl group-hover:scale-110 active:scale-95 transition-transform">
                      <Play className="w-8 h-8 sm:w-9 sm:h-9 ml-1 fill-[#FF7043]" />
                    </div>
                  </div>
                </div>

                {/* Bottom title pill */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-md px-4 py-2.5 rounded-2xl flex items-center justify-between text-white text-xs">
                  <span className="font-bold">Playroom &amp; Outdoor Tour</span>
                  <span className="text-[#FFB52E] font-semibold">Click to Play</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
