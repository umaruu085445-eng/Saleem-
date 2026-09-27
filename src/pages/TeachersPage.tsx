import React from 'react';
import { teachersData } from '../data/teachers';
import { Teacher } from '../types';
import { Button } from '../components/Button';
import { Award, Heart, Sparkles, BookOpen, ShieldCheck, GraduationCap } from 'lucide-react';
import { StarDoodle } from '../components/Decorations';

interface TeachersPageProps {
  onBookVisit: () => void;
  onSelectTeacher?: (teacher: Teacher) => void;
}

export const TeachersPage: React.FC<TeachersPageProps> = ({ onBookVisit, onSelectTeacher }) => {
  return (
    <div className="py-12 sm:py-16 space-y-16 sm:space-y-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F9ED] text-xs font-bold text-[#72C83E] uppercase tracking-wider">
          <Heart className="w-3.5 h-3.5" />
          <span>Our Teaching Team</span>
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#102B49] leading-tight max-w-3xl mx-auto">
          Passionate Hearts, Experienced Minds
        </h1>
        <p className="text-base sm:text-lg text-[#69717A] max-w-2xl mx-auto leading-relaxed">
          At LittleSprout Academy, our teachers are far more than supervisors—they are keen observers,
          gentle mentors, and joyful guides who treat every child's wonder with deep reverence.
        </p>
      </section>

      {/* Teacher Detailed Profiles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {teachersData.map((t, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={t.id}
                className="bg-white rounded-[40px] p-6 sm:p-10 shadow-soft border border-[#102B49]/5 hover:shadow-card-hover transition-all"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Portrait side */}
                  <div className={`lg:col-span-4 flex flex-col items-center text-center ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="relative mb-4">
                      <div
                        className="w-44 h-44 sm:w-52 sm:h-52 rounded-full p-2.5 shadow-md"
                        style={{ backgroundColor: `${t.accentColor}25` }}
                      >
                        <div className="w-full h-full rounded-full overflow-hidden border-4 border-white">
                          <img
                            src={t.avatar}
                            alt={t.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div
                        className="absolute bottom-2 right-4 px-3 py-1 rounded-full text-white text-xs font-bold shadow-sm"
                        style={{ backgroundColor: t.accentColor }}
                      >
                        {t.experience}
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-2xl text-[#102B49]">
                      {t.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#69717A] mt-0.5">
                      {t.role}
                    </p>
                  </div>

                  {/* Details side */}
                  <div className={`lg:col-span-8 space-y-5 ${isReversed ? 'lg:order-1' : ''}`}>
                    {/* Educator Quote Banner */}
                    <div className="p-4 rounded-2xl bg-[#FFF8E8] border border-[#FFB52E]/20 text-[#102B49] text-sm sm:text-base italic font-medium">
                      “{t.quote}”
                    </div>

                    <p className="text-sm sm:text-base text-[#69717A] leading-relaxed">
                      {t.bio}
                    </p>

                    {/* Qualifications */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#102B49] mb-2 flex items-center gap-1.5">
                        <GraduationCap className="w-4 h-4 text-[#72C83E]" />
                        Professional Qualifications &amp; Credentials
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {t.qualifications.map((q, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FFFCF9] border border-[#102B49]/10 text-xs font-semibold text-[#102B49]"
                          >
                            <ShieldCheck className="w-3.5 h-3.5 text-[#72C83E]" />
                            {q}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Favorite Activity */}
                    <div className="pt-2 flex items-center gap-3 text-xs sm:text-sm text-[#102B49]">
                      <span className="font-bold text-[#FF7043] flex items-center gap-1">
                        <Sparkles className="w-4 h-4" /> Classroom Specialty:
                      </span>
                      <span className="text-[#69717A] font-medium">{t.favoriteActivity}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Safety & Ratios Guarantee */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFF1F3] rounded-3xl p-8 sm:p-12 text-center space-y-4 border border-[#FF7043]/15">
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#102B49]">
            Our Low-Ratio Promise
          </h3>
          <p className="text-sm sm:text-base text-[#69717A] max-w-xl mx-auto leading-relaxed">
            We intentionally cap classroom cohorts to preserve unhurried, loving, and attentive interactions between teachers and little learners.
          </p>
          <div className="pt-2">
            <Button size="lg" showArrow onClick={onBookVisit}>
              Meet Our Educators in Person
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
