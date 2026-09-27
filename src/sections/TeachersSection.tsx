import React from 'react';
import { teachersData } from '../data/teachers';
import { Teacher } from '../types';
import { Award, Sparkles, Heart } from 'lucide-react';
import { StarDoodle } from '../components/Decorations';

interface TeachersSectionProps {
  onSelectTeacher?: (teacher: Teacher) => void;
}

export const TeachersSection: React.FC<TeachersSectionProps> = ({ onSelectTeacher }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#FFF8E8]/40 relative overflow-hidden" id="teachers">
      {/* Background soft shapes */}
      <div className="absolute top-1/3 left-10 w-72 h-72 rounded-full bg-[#FFF1F3] blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#EDF8FD] blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-xs font-bold text-[#72C83E] uppercase tracking-wider mb-3 shadow-xs">
            <Heart className="w-3.5 h-3.5 text-[#72C83E]" />
            <span>Dedicated Educators</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#102B49] leading-tight">
            Meet the People Who Make Learning Special
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#69717A]">
            Our teachers combine experience, creativity, patience, and genuine care to help every child feel seen and supported.
          </p>
        </div>

        {/* 3 Teacher Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {teachersData.map((t) => {
            return (
              <div
                key={t.id}
                onClick={() => onSelectTeacher?.(t)}
                className="group bg-white rounded-[36px] p-6 sm:p-8 shadow-soft hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 border border-neutral-100 flex flex-col items-center text-center relative cursor-pointer"
              >
                {/* Portrait with organic animated border ring */}
                <div className="relative mb-6">
                  {/* Decorative rotating accent ring */}
                  <div
                    className="absolute -inset-3 rounded-full border-2 border-dashed opacity-40 group-hover:rotate-45 transition-transform duration-700 pointer-events-none"
                    style={{ borderColor: t.accentColor }}
                  />

                  {/* Colored background blob */}
                  <div
                    className="w-36 h-36 sm:w-40 sm:h-40 rounded-full p-2 transition-transform duration-300 group-hover:scale-103"
                    style={{ backgroundColor: `${t.accentColor}18` }}
                  >
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                  {/* Experience badge */}
                  <div
                    className="absolute bottom-0 right-2 px-3 py-1 rounded-full text-white text-[11px] font-bold shadow-sm"
                    style={{ backgroundColor: t.accentColor }}
                  >
                    {t.experience.split(' ')[0]} Exp
                  </div>
                </div>

                {/* Name & Role */}
                <h3 className="font-display font-bold text-2xl text-[#102B49] group-hover:text-[#FF7043] transition-colors mb-1">
                  {t.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#69717A] mb-3">
                  {t.role}
                </p>

                {/* Bio text */}
                <p className="text-xs sm:text-sm text-[#69717A] leading-relaxed mb-5">
                  {t.bio}
                </p>

                {/* Favorite Activity pill */}
                <div className="mt-auto w-full pt-4 border-t border-neutral-100 text-left">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#102B49] mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#FFB52E]" />
                    <span>Favorite Activity</span>
                  </div>
                  <p className="text-xs text-[#69717A] italic">
                    “{t.favoriteActivity}”
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
