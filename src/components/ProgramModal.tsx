import React from 'react';
import { X, Calendar, Clock, Users, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { Program } from '../types';
import { Button } from './Button';

interface ProgramModalProps {
  program: Program | null;
  onClose: () => void;
  onBookVisit: () => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({
  program,
  onClose,
  onBookVisit
}) => {
  if (!program) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={program.title}
    >
      <div className="fixed inset-0 bg-[#102B49]/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-white max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200">
        {/* Header with image */}
        <div className="relative h-48 sm:h-64 overflow-hidden bg-neutral-100">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#102B49] flex items-center justify-center transition-colors shadow-md"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-2"
              style={{ backgroundColor: program.accentColor }}
            >
              {program.ageRange}
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
              {program.title}
            </h3>
          </div>
        </div>

        {/* Scrollable details */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          <p className="text-sm sm:text-base text-[#69717A] leading-relaxed">
            {program.description}
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-3.5 rounded-2xl bg-[#FFF8E8] flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#FFB52E] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-[#102B49] block">Class Schedule</span>
                <span className="text-xs text-[#69717A]">{program.schedule}</span>
              </div>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#FFF1F3] flex items-start gap-3">
              <Users className="w-5 h-5 text-[#FF7043] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-[#102B49] block">Student-to-Teacher Ratio</span>
                <span className="text-xs text-[#69717A]">{program.teacherRatio}</span>
              </div>
            </div>
          </div>

          {/* Key Developmental Competencies */}
          <div>
            <h4 className="font-display font-bold text-base text-[#102B49] mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#72C83E]" />
              Core Competencies &amp; Daily Routine
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {program.features.map((f, i) => (
                <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#102B49]/80 bg-[#FFFCF9] p-2.5 rounded-xl border border-[#102B49]/5">
                  <CheckCircle2 className="w-4 h-4 text-[#72C83E] shrink-0 mt-0.5" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="font-display font-bold text-base text-[#102B49] mb-2">
              Classroom Signature Highlights
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#69717A]">
              {program.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF7043] mt-2 shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Action Bar */}
        <div className="p-4 sm:p-6 bg-[#FFFCF9] border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[#69717A]">
            Limited to 12 children per cohort to ensure warm, personalized care.
          </span>
          <Button
            size="md"
            showArrow
            onClick={() => {
              onClose();
              onBookVisit();
            }}
          >
            <Calendar className="w-4 h-4 mr-1" />
            Book a Classroom Visit
          </Button>
        </div>
      </div>
    </div>
  );
};
