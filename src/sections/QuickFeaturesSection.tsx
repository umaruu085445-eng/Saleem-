import React from 'react';
import { ShieldCheck, Sparkles, HeartHandshake, Users } from 'lucide-react';

interface QuickFeaturesProps {
  onLearnMore?: (featureId: string) => void;
}

export const QuickFeaturesSection: React.FC<QuickFeaturesProps> = ({ onLearnMore }) => {
  const features = [
    {
      id: 'safe-caring',
      title: 'Safe & Caring',
      tagline: 'A secure, nurturing environment.',
      description: 'Clean air-filtered classrooms, biometric entry, and gentle educators who make every child feel secure.',
      image: '/src/assets/images/program_toddler_1790505086561.jpg',
      icon: ShieldCheck,
      color: '#FF7043',
      bgLight: '#FFF1F3',
      dotColor: '#FFB52E'
    },
    {
      id: 'learning-play',
      title: 'Learning Through Play',
      tagline: 'Children discover through hands-on activities.',
      description: 'Open-ended wooden blocks, water/sand laboratories, and emergent art that unlock creative problem solving.',
      image: '/src/assets/images/classroom_creative_play_1790505025779.jpg',
      icon: Sparkles,
      color: '#72C83E',
      bgLight: '#F0F9ED',
      dotColor: '#55BFEF'
    },
    {
      id: 'wonderful-teachers',
      title: 'Wonderful Teachers',
      tagline: 'Experienced educators who care deeply.',
      description: 'Early childhood specialists with accredited degrees, boundless warmth, and genuine dedication to small milestones.',
      image: '/src/assets/images/teacher_lead_emma_1790505047479.jpg',
      icon: HeartHandshake,
      color: '#55BFEF',
      bgLight: '#EDF8FD',
      dotColor: '#FF7043'
    },
    {
      id: 'happy-friendships',
      title: 'Happy Friendships',
      tagline: 'Building confidence through positive social experiences.',
      description: 'Encouraging kindness, cooperative group sharing, and empathetic communication every day.',
      image: '/src/assets/images/program_preschool_1790505098153.jpg',
      icon: Users,
      color: '#FFB52E',
      bgLight: '#FFF8E8',
      dotColor: '#72C83E'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-y border-[#102B49]/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => onLearnMore?.(item.id)}
                className="group flex flex-col items-center text-center p-4 sm:p-5 rounded-3xl transition-all duration-300 hover:bg-[#FFFCF9] hover:shadow-soft cursor-pointer"
              >
                {/* Circular image mask with colored ring & decorative dots */}
                <div className="relative mb-5">
                  {/* Decorative dot 1 */}
                  <span
                    className="absolute -top-1 -right-1 w-4 h-4 rounded-full z-10 ring-2 ring-white"
                    style={{ backgroundColor: item.dotColor }}
                  />
                  {/* Decorative dot 2 */}
                  <span
                    className="absolute -bottom-1 -left-1 w-3 h-3 rounded-full z-10 ring-2 ring-white"
                    style={{ backgroundColor: item.color }}
                  />

                  {/* Circular Image Container */}
                  <div
                    className="w-28 h-28 sm:w-36 sm:h-36 rounded-full p-1.5 transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundColor: item.bgLight }}
                  >
                    <div className="w-full h-full rounded-full overflow-hidden border-2 border-white shadow-sm">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                  {/* Icon badge below circle */}
                  <div
                    className="absolute -bottom-2 right-1/2 translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white shadow-md transition-transform duration-200 group-hover:scale-110"
                    style={{ backgroundColor: item.color }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg sm:text-xl text-[#102B49] group-hover:text-[#FF7043] transition-colors mb-1.5">
                  {item.title}
                </h3>

                {/* Short Tagline */}
                <p className="text-xs sm:text-sm font-semibold text-[#102B49]/80 mb-2">
                  {item.tagline}
                </p>

                {/* Compact Description */}
                <p className="text-xs text-[#69717A] leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
