import React from 'react';
import { ArrowRight, Clock, Users } from 'lucide-react';
import { programsData } from '../data/programs';
import { Program } from '../types';

interface ProgramsSectionProps {
  onSelectProgram: (program: Program) => void;
  onViewAllPrograms: () => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  onSelectProgram,
  onViewAllPrograms
}) => {
  return (
    <section className="py-16 sm:py-24 bg-[#FFFCF9] relative overflow-hidden" id="programs">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-[#FFF8E8] rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FFF1F3] rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8E8] text-xs font-bold text-[#FFB52E] uppercase tracking-wider mb-3">
            <span>Our Curriculum</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#102B49] leading-tight">
            Learning at Every Little Stage
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#69717A]">
            Age-appropriate programs designed around curiosity, confidence, and discovery.
          </p>
        </div>

        {/* 4 Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {programsData.map((prog) => {
            return (
              <div
                key={prog.id}
                onClick={() => onSelectProgram(prog)}
                className="group relative rounded-3xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover border border-[#102B49]/5 flex flex-col justify-between cursor-pointer"
                style={{ backgroundColor: prog.themeBg }}
              >
                {/* Tiny decorative shape at top right */}
                <div
                  className="absolute top-4 right-4 w-3.5 h-3.5 rounded-full opacity-60"
                  style={{ backgroundColor: prog.accentColor }}
                />

                <div>
                  {/* Rounded Image Container */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-white/60 shadow-xs">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />

                    {/* Age Range Badge */}
                    <div
                      className="absolute bottom-2.5 left-2.5 px-3 py-1 rounded-full text-xs font-bold text-white shadow-xs font-display"
                      style={{ backgroundColor: prog.accentColor }}
                    >
                      {prog.ageRange}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl text-[#102B49] group-hover:text-[#FF7043] transition-colors mb-2">
                    {prog.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-[#69717A] leading-relaxed mb-4">
                    {prog.description}
                  </p>

                  {/* Key Features Bullet List */}
                  <div className="space-y-1.5 mb-5 border-t border-[#102B49]/10 pt-3">
                    {prog.features.slice(0, 3).map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#102B49]/80 font-medium">
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: prog.accentColor }}
                        />
                        <span className="truncate">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Meta & Arrow */}
                <div className="pt-3 border-t border-[#102B49]/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-[#69717A] font-semibold">
                    <Users className="w-3.5 h-3.5" />
                    <span>{prog.teacherRatio.split(' ')[0]} Ratio</span>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-bold text-[#102B49] group-hover:text-[#FF7043] transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Programs Action */}
        <div className="text-center mt-12">
          <button
            onClick={onViewAllPrograms}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border-2 border-[#102B49]/10 text-sm font-bold text-[#102B49] hover:border-[#FF7043] hover:text-[#FF7043] hover:bg-[#FFF8E8] transition-all cursor-pointer shadow-xs"
          >
            <span>Compare Full Curriculums &amp; Schedules</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
