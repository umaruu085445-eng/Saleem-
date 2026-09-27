import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface AnnouncementBarProps {
  onScheduleClick: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onScheduleClick }) => {
  return (
    <div className="bg-[#102B49] text-white text-xs sm:text-sm py-2 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start gap-2 mx-auto sm:mx-0 w-full sm:w-auto">
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#FF7043]/20 text-[#FFB52E] shrink-0">
            <Sparkles className="w-3.5 h-3.5" />
          </span>
          <span className="font-medium text-white/90">
            <strong className="text-white font-semibold">Admissions Open</strong> for the 2026–27 Learning Year
          </span>
          <button
            onClick={onScheduleClick}
            className="hidden md:inline-flex items-center gap-1 text-[#FFB52E] hover:text-white font-semibold ml-2 underline underline-offset-4 decoration-[#FFB52E]/40 hover:decoration-white transition-all cursor-pointer"
          >
            <span>Schedule a Visit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-4 text-xs text-white/70">
          <span>Call: <strong className="text-white font-medium">+1 (800) 555-0198</strong></span>
          <span className="text-white/30">|</span>
          <span>Mon–Fri: 8:00 AM – 5:30 PM</span>
        </div>
      </div>
    </div>
  );
};
