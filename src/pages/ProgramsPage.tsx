import React, { useState } from 'react';
import { programsData } from '../data/programs';
import { Program } from '../types';
import { Button } from '../components/Button';
import { Clock, Users, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { StarDoodle } from '../components/Decorations';

interface ProgramsPageProps {
  onSelectProgram: (prog: Program) => void;
  onBookVisit: () => void;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({ onSelectProgram, onBookVisit }) => {
  const [selectedAgeTab, setSelectedAgeTab] = useState<string>('all');

  const filteredPrograms =
    selectedAgeTab === 'all'
      ? programsData
      : programsData.filter((p) => p.id === selectedAgeTab);

  return (
    <div className="py-12 sm:py-16 space-y-16 sm:space-y-24">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8E8] text-xs font-bold text-[#FFB52E] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curriculum &amp; Classrooms</span>
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#102B49] leading-tight max-w-3xl mx-auto">
          Thoughtfully Designed for Every Developmental Leap
        </h1>
        <p className="text-base sm:text-lg text-[#69717A] max-w-2xl mx-auto leading-relaxed">
          From the first steps into our cozy Toddler room to kindergarten graduation,
          our low-ratio learning cohorts give children the individualized support they deserve.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          <button
            onClick={() => setSelectedAgeTab('all')}
            className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold font-display transition-all cursor-pointer ${
              selectedAgeTab === 'all'
                ? 'bg-[#102B49] text-white shadow-sm'
                : 'bg-white text-[#102B49]/70 hover:bg-[#FFF8E8] border border-[#102B49]/10'
            }`}
          >
            All Programs (Ages 2–6)
          </button>
          {programsData.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedAgeTab(p.id)}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold font-display transition-all cursor-pointer ${
                selectedAgeTab === p.id
                  ? 'bg-[#FF7043] text-white shadow-sm'
                  : 'bg-white text-[#102B49]/70 hover:bg-[#FFF1F3] border border-[#102B49]/10'
              }`}
            >
              {p.title} ({p.ageRange})
            </button>
          ))}
        </div>
      </section>

      {/* Program Cards Detailed List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {filteredPrograms.map((prog, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={prog.id}
                className="bg-white rounded-[40px] p-6 sm:p-10 shadow-soft border border-[#102B49]/5 overflow-hidden transition-all hover:shadow-card-hover"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image side */}
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-neutral-100 shadow-sm group">
                      <img
                        src={prog.image}
                        alt={prog.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div
                        className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full text-xs font-bold text-white shadow-sm"
                        style={{ backgroundColor: prog.accentColor }}
                      >
                        {prog.ageRange}
                      </div>
                    </div>
                  </div>

                  {/* Content side */}
                  <div className={`lg:col-span-7 space-y-5 ${isReversed ? 'lg:order-1' : ''}`}>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#FF7043]">
                        Classroom Profile
                      </span>
                      <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#102B49] mt-1">
                        {prog.title}
                      </h2>
                    </div>

                    <p className="text-sm sm:text-base text-[#69717A] leading-relaxed">
                      {prog.description}
                    </p>

                    {/* Schedule & Ratio Pills */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div className="flex items-center gap-2.5 bg-[#FFF8E8] p-3 rounded-2xl">
                        <Clock className="w-5 h-5 text-[#FFB52E] shrink-0" />
                        <div>
                          <span className="text-[11px] font-bold text-[#102B49] block">Daily Schedule</span>
                          <span className="text-xs text-[#69717A]">{prog.schedule}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2.5 bg-[#FFF1F3] p-3 rounded-2xl">
                        <Users className="w-5 h-5 text-[#FF7043] shrink-0" />
                        <div>
                          <span className="text-[11px] font-bold text-[#102B49] block">Teacher Ratio</span>
                          <span className="text-xs text-[#69717A]">{prog.teacherRatio}</span>
                        </div>
                      </div>
                    </div>

                    {/* Features list */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#102B49] mb-2">
                        Core Learning Milestones
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {prog.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#102B49]/80">
                            <CheckCircle2 className="w-4 h-4 text-[#72C83E] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <Button
                        size="md"
                        showArrow
                        onClick={() => onSelectProgram(prog)}
                      >
                        Program Details &amp; Highlights
                      </Button>
                      <Button
                        variant="secondary"
                        size="md"
                        onClick={onBookVisit}
                      >
                        Book a Visit for This Cohort
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Curriculum Comparison Table */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFF1F3]/60 rounded-3xl p-6 sm:p-10 border border-[#FF7043]/15">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="font-display font-bold text-2xl text-[#102B49]">
              Cohort Comparison At-a-Glance
            </h3>
            <p className="text-xs sm:text-sm text-[#69717A] mt-1">
              All programs include organic fruit snacks, art atelier supplies, and secure family communications.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#102B49]/10 text-[#102B49]">
                  <th className="py-3 px-4 font-bold font-display">Program</th>
                  <th className="py-3 px-4 font-bold font-display">Target Ages</th>
                  <th className="py-3 px-4 font-bold font-display">Educator Ratio</th>
                  <th className="py-3 px-4 font-bold font-display">Class Hours</th>
                  <th className="py-3 px-4 font-bold font-display">Signature Focus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#102B49]/5 text-[#69717A]">
                {programsData.map((p) => (
                  <tr key={p.id} className="hover:bg-white/80 transition-colors">
                    <td className="py-3 px-4 font-bold text-[#102B49]">{p.title}</td>
                    <td className="py-3 px-4">{p.ageRange}</td>
                    <td className="py-3 px-4 font-semibold text-[#FF7043]">{p.teacherRatio.split(' ')[0]}</td>
                    <td className="py-3 px-4">{p.schedule.split('·')[0]}</td>
                    <td className="py-3 px-4">{p.features[0]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
