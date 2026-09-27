import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQItem } from '../types';

interface FAQAccordionProps {
  items: FAQItem[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || '']);

  const toggle = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-3.5">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className={`rounded-2xl transition-all duration-200 border ${
              isOpen
                ? 'bg-white border-[#FF7043]/30 shadow-soft'
                : 'bg-white/70 hover:bg-white border-[#102B49]/10'
            }`}
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7043]"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen
                      ? 'bg-[#FF7043] text-white'
                      : 'bg-[#FFF1F3] text-[#FF7043]'
                  }`}
                >
                  <HelpCircle className="w-4 h-4" />
                </span>
                <span className="font-display font-bold text-base sm:text-lg text-[#102B49]">
                  {item.question}
                </span>
              </div>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                  isOpen
                    ? 'rotate-180 bg-[#FFF1F3] text-[#FF7043]'
                    : 'bg-neutral-100 text-[#102B49]/60'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-[#69717A] leading-relaxed border-t border-neutral-100">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
