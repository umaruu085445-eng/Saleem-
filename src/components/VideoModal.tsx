import React, { useEffect } from 'react';
import { X, Play, Sparkles, Volume2, ShieldCheck } from 'lucide-react';
import { Button } from './Button';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookVisit: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, onBookVisit }) => {
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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="LittleSprout Academy Video School Tour"
    >
      {/* Dark Overlay */}
      <div
        className="fixed inset-0 bg-[#102B49]/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFF1F3] animate-in zoom-in-95 duration-200">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#102B49] text-white">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF7043]" />
            <h3 className="font-display font-bold text-base sm:text-lg text-white">
              LittleSprout Academy · Interactive Campus Tour
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close video player"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas / Player Area */}
        <div className="relative aspect-video bg-neutral-900 overflow-hidden flex items-center justify-center group">
          {/* High-res school atmosphere backdrop */}
          <img
            src="/src/assets/images/video_tour_classroom_1790505038613.jpg"
            alt="LittleSprout Academy Tour Preview"
            className="w-full h-full object-cover opacity-85 group-hover:scale-102 transition-transform duration-700"
          />

          {/* Cinematic Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

          {/* Interactive Play Badge & Tour Highlights */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 text-white">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold tracking-wide uppercase text-white">
                <Sparkles className="w-3.5 h-3.5 text-[#FFB52E]" />
                Guided Virtual Walkthrough
              </span>
              <span className="text-xs text-white/80 flex items-center gap-1">
                <Volume2 className="w-4 h-4 text-[#72C83E]" /> HD 1080p
              </span>
            </div>

            <div className="text-center max-w-xl mx-auto space-y-3">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-[#FF7043] text-white flex items-center justify-center shadow-lg transform hover:scale-110 active:scale-95 transition-transform cursor-pointer">
                <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1 fill-white" />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold font-display drop-shadow">
                Discover Our Joyful Classrooms &amp; Nature Garden
              </h4>
              <p className="text-xs sm:text-sm text-white/90 font-medium max-w-md mx-auto">
                Step inside our wooden atelier, sensory exploration stations, cozy reading nooks, and organic outdoor play area.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between text-xs text-white/75 gap-2 pt-2 border-t border-white/20">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#72C83E]" /> Secure Biometric Campus Entry
              </span>
              <span>Filmed on site at 24 Garden Lane</span>
            </div>
          </div>
        </div>

        {/* Modal Footer with Action */}
        <div className="px-6 py-5 bg-[#FFF8E8] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-[#102B49]">
              Loved what you saw? Experience it in person with your child!
            </p>
            <p className="text-xs text-[#69717A]">
              We host private family tours every Tuesday through Thursday at 9:30 AM &amp; 10:30 AM.
            </p>
          </div>
          <Button
            size="md"
            showArrow
            onClick={() => {
              onClose();
              onBookVisit();
            }}
          >
            Schedule In-Person Visit
          </Button>
        </div>
      </div>
    </div>
  );
};
