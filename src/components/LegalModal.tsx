import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { Button } from './Button';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | 'accessibility' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  const contentMap = {
    privacy: {
      title: 'LittleSprout Academy · Child Safety & Privacy Policy',
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-[#69717A] leading-relaxed">
          <p>
            At LittleSprout Academy, safeguarding child privacy and personal family information is our utmost priority.
          </p>
          <h4 className="font-display font-bold text-[#102B49] text-base">1. Photographic &amp; Identity Privacy</h4>
          <p>
            No full names or private personal identifiers of enrolled children are ever published publicly. Media consent forms are collected at the start of each learning year, and families may opt out at any time without restriction.
          </p>
          <h4 className="font-display font-bold text-[#102B49] text-base">2. Visit Inquiries &amp; Contact Records</h4>
          <p>
            Information submitted through our Admissions form (including parent names, phone numbers, and child age) is used exclusively for tour scheduling and enrollment communication. We never sell, share, or market personal details to third parties.
          </p>
          <h4 className="font-display font-bold text-[#102B49] text-base">3. Secure Campus Protocols</h4>
          <p>
            Our physical campus at 24 Garden Lane utilizes secure keypad entry systems, background-checked staff, and stringent visitor sign-in logs to protect our learning environment every moment of the day.
          </p>
        </div>
      )
    },
    terms: {
      title: 'LittleSprout Academy · Enrollment Terms & Conditions',
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-[#69717A] leading-relaxed">
          <p>
            Welcome to LittleSprout Academy. These terms outline our family agreement, attendance expectations, and enrollment policies.
          </p>
          <h4 className="font-display font-bold text-[#102B49] text-base">1. Admissions Rhythms</h4>
          <p>
            Enrollment is accepted on a rolling basis subject to classroom capacity and adult-to-child ratio maintenance (1:4 for toddlers up to 1:8 for kindergarten).
          </p>
          <h4 className="font-display font-bold text-[#102B49] text-base">2. Health &amp; Wellness Policy</h4>
          <p>
            To keep all children healthy, we observe a 24-hour fever-free policy before returning to class after any communicable illness.
          </p>
          <h4 className="font-display font-bold text-[#102B49] text-base">3. Tuition &amp; Flexible Schedules</h4>
          <p>
            Tuition schedules are billed monthly. Both full-time and partial-day programs include all healthy organic snacks and Montessori/Reggio classroom materials.
          </p>
        </div>
      )
    },
    accessibility: {
      title: 'LittleSprout Academy · Accessibility Commitment',
      body: (
        <div className="space-y-4 text-xs sm:text-sm text-[#69717A] leading-relaxed">
          <p>
            LittleSprout Academy is deeply committed to ensuring that our educational community and digital platforms are welcoming, accessible, and barrier-free for all families.
          </p>
          <h4 className="font-display font-bold text-[#102B49] text-base">1. Web Accessibility Standards</h4>
          <p>
            Our website conforms to WCAG 2.1 Level AA standards, incorporating legible color contrast, screen reader landmarks, keyboard navigability, and responsive zoom support.
          </p>
          <h4 className="font-display font-bold text-[#102B49] text-base">2. Campus Inclusion</h4>
          <p>
            Our physical facility features ground-level ramp access, wide sensory hallways, accessible family restrooms, and sensory-calm rooms designed to welcome diverse neurodevelopmental needs.
          </p>
          <p>
            Questions or feedback? Please contact our accessibility coordinator at <a href="mailto:hello@littlesproutacademy.com" className="text-[#FF7043] font-bold">hello@littlesproutacademy.com</a>.
          </p>
        </div>
      )
    }
  };

  const current = contentMap[type];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={current.title}
    >
      <div className="fixed inset-0 bg-[#102B49]/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-[#FFF1F3] max-h-[85vh] flex flex-col">
        <div className="flex items-center justify-between pb-4 border-b border-neutral-100 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-[#FFF1F3] text-[#FF7043] flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </span>
            <h3 className="font-display font-bold text-lg sm:text-xl text-[#102B49]">
              {current.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#102B49] hover:bg-[#FFF1F3] hover:text-[#FF7043]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto pr-2">
          {current.body}
        </div>

        <div className="pt-4 border-t border-neutral-100 flex justify-end mt-4">
          <Button size="sm" onClick={onClose}>
            Close Window
          </Button>
        </div>
      </div>
    </div>
  );
};
