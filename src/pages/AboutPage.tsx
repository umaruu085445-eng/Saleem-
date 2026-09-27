import React from 'react';
import { Heart, ShieldCheck, Sun, Sparkles, BookOpen, Compass, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { StarDoodle, SquiggleDoodle } from '../components/Decorations';
import { teachersData } from '../data/teachers';
import { Teacher } from '../types';

interface AboutPageProps {
  onBookVisit: () => void;
  onExplorePrograms: () => void;
  onSelectTeacher: (teacher: Teacher) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onBookVisit,
  onExplorePrograms,
  onSelectTeacher
}) => {
  return (
    <div className="py-12 sm:py-16 space-y-16 sm:space-y-24">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF1F3] text-xs font-bold text-[#FF7043] uppercase tracking-wider">
          <Sun className="w-3.5 h-3.5 text-[#FFB52E]" />
          <span>Our Story &amp; Philosophy</span>
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#102B49] leading-tight max-w-3xl mx-auto">
          Nurturing Lifelong Wonder Through Compassionate Early Learning
        </h1>
        <p className="text-base sm:text-lg text-[#69717A] max-w-2xl mx-auto leading-relaxed">
          Founded on the conviction that every child is innately creative, capable, and curious,
          LittleSprout Academy creates an environment where joy and educational excellence walk hand-in-hand.
        </p>
      </section>

      {/* Main Story & Classroom Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="p-3 bg-white rounded-[44px] shadow-soft border-4 border-[#FFF1F3] overflow-hidden">
              <img
                src="/src/assets/images/classroom_creative_play_1790505025779.jpg"
                alt="LittleSprout Academy Classroom Environment"
                className="w-full aspect-[4/3] object-cover rounded-[36px]"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-[#72C83E]/20 -z-10" />
            <div className="absolute -top-6 -left-6 text-[#FFB52E]">
              <StarDoodle size={32} />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#102B49]">
              Where Young Minds Are Revered, Not Rushed.
            </h2>
            <p className="text-sm sm:text-base text-[#69717A] leading-relaxed">
              In today's fast-moving world, early childhood is often pushed to accelerate into rigid academic drills.
              At LittleSprout, we know from developmental science that foundational skills—executive function,
              emotional resilience, early literacy, and mathematical thinking—develop most durably through play-based immersion.
            </p>
            <p className="text-sm sm:text-base text-[#69717A] leading-relaxed">
              Our classrooms are calm, sun-drenched ecosystems constructed from natural woods, tactile materials,
              and living plants. Here, questions are celebrated, mistakes are treated as fascinating discoveries,
              and every educator knows each child by heart.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Button size="md" showArrow onClick={onBookVisit}>
                Book a School Tour
              </Button>
              <Button variant="secondary" size="md" onClick={onExplorePrograms}>
                Explore Programs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Core Pillars of LittleSprout */}
      <section className="bg-[#FFF8E8]/50 py-16 sm:py-20 border-y border-[#102B49]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#102B49]">
              Our Educational Pillars
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#69717A]">
              Grounded in the best of Reggio Emilia and child-development inquiry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-3xl shadow-soft border border-[#102B49]/5 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF1F3] text-[#FF7043] flex items-center justify-center font-bold">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#102B49]">Emotional Safety First</h3>
              <p className="text-xs sm:text-sm text-[#69717A] leading-relaxed">
                When a child feels safe and loved, cognitive capacity unlocks naturally. We prioritize emotional regulation and gentle transitions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-soft border border-[#102B49]/5 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#F0F9ED] text-[#72C83E] flex items-center justify-center font-bold">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#102B49]">Play as Deep Work</h3>
              <p className="text-xs sm:text-sm text-[#69717A] leading-relaxed">
                Block engineering, dramatic theater, sensory water play, and finger painting are cognitive exercises that build problem-solving muscle.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-soft border border-[#102B49]/5 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EDF8FD] text-[#55BFEF] flex items-center justify-center font-bold">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#102B49]">Nature &amp; Sensory Life</h3>
              <p className="text-xs sm:text-sm text-[#69717A] leading-relaxed">
                Daily outdoor exploration in our secure botanical garden connects children with seasonal rhythms, living creatures, and active vitality.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-soft border border-[#102B49]/5 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FFF8E8] text-[#FFB52E] flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-[#102B49]">Parent Partnership</h3>
              <p className="text-xs sm:text-sm text-[#69717A] leading-relaxed">
                We view parents as primary partners. Daily visual updates, weekly notes, and open family dialogues keep our community deeply bonded.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers Highlight Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#102B49]">
            Guided by Loving Educators
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#69717A]">
            Every teacher at LittleSprout holds accredited degrees, background security clearances, and continuous childhood education hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teachersData.map((t) => (
            <div
              key={t.id}
              onClick={() => onSelectTeacher(t)}
              className="bg-white rounded-3xl p-6 shadow-soft border border-neutral-100 flex flex-col items-center text-center cursor-pointer hover:shadow-card-hover transition-all"
            >
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-[#FFF1F3] mb-4">
                <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display font-bold text-xl text-[#102B49] mb-1">{t.name}</h3>
              <span className="text-xs font-semibold text-[#FF7043] mb-2">{t.role}</span>
              <p className="text-xs text-[#69717A] line-clamp-3 mb-4">{t.bio}</p>
              <span className="text-xs font-bold text-[#102B49] hover:text-[#FF7043] inline-flex items-center gap-1">
                View Educator Profile <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
