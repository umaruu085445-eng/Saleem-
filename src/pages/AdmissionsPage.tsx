import React from 'react';
import { faqsData } from '../data/faqs';
import { FAQAccordion } from '../components/FAQAccordion';
import { AdmissionsContactSection } from '../sections/AdmissionsContactSection';
import { Calendar, CheckCircle2, ShieldCheck, Heart, Sparkles, FileText, UserCheck } from 'lucide-react';
import { StarDoodle } from '../components/Decorations';

export const AdmissionsPage: React.FC = () => {
  const enrollmentSteps = [
    {
      step: '01',
      title: 'Schedule a Private Tour',
      desc: 'Come visit our sunlit classrooms, meet our teaching team, and observe our peaceful learning rhythms in action.',
      icon: Calendar,
      color: '#FF7043',
      bgColor: '#FFF1F3'
    },
    {
      step: '02',
      title: 'Classroom Discovery Visit',
      desc: 'Your child joins a 45-minute exploratory play session in their prospective room while parents talk with the lead educator.',
      icon: Sparkles,
      color: '#72C83E',
      bgColor: '#F0F9ED'
    },
    {
      step: '03',
      title: 'Application & Family Profile',
      desc: 'Complete our simple family intake form detailing your child’s preferences, sensory joys, and developmental rhythms.',
      icon: FileText,
      color: '#55BFEF',
      bgColor: '#EDF8FD'
    },
    {
      step: '04',
      title: 'Gentle Transition & Welcome',
      desc: 'A gradual 3-day phase-in schedule designed to ensure your little one feels secure, confident, and eager from day one.',
      icon: UserCheck,
      color: '#FFB52E',
      bgColor: '#FFF8E8'
    }
  ];

  return (
    <div className="py-12 sm:py-16 space-y-16 sm:space-y-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF1F3] text-xs font-bold text-[#FF7043] uppercase tracking-wider">
          <Calendar className="w-3.5 h-3.5" />
          <span>Admissions 2026–27</span>
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#102B49] leading-tight max-w-3xl mx-auto">
          Joining the LittleSprout Academy Family
        </h1>
        <p className="text-base sm:text-lg text-[#69717A] max-w-2xl mx-auto leading-relaxed">
          We accept rolling admissions throughout the year based on cohort availability.
          Our low ratios mean spaces fill thoughtfully, so we encourage planning early.
        </p>
      </section>

      {/* 4 Step Enrollment Roadmap */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#102B49]">
            The 4-Step Enrollment Journey
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#69717A]">
            Designed to be relaxed, transparent, and completely child-centered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {enrollmentSteps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="bg-white rounded-3xl p-6 shadow-soft border border-[#102B49]/5 flex flex-col justify-between relative group hover:shadow-card-hover hover:-translate-y-1 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-xs font-bold font-display px-2.5 py-1 rounded-full text-white"
                      style={{ backgroundColor: s.color }}
                    >
                      Step {s.step}
                    </span>
                    <div
                      className="w-10 h-10 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: s.bgColor, color: s.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#102B49] mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#69717A] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FF7043] bg-[#FFF1F3] px-3 py-1 rounded-full">
            Answers for Families
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#102B49] mt-2">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#69717A] mt-2">
            Everything you need to know about our daily routines, visit policies, and curriculum.
          </p>
        </div>

        <FAQAccordion items={faqsData} />
      </section>

      {/* Interactive Visit Form */}
      <AdmissionsContactSection />
    </div>
  );
};
