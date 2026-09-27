import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { QuickFeaturesSection } from '../sections/QuickFeaturesSection';
import { AboutSection } from '../sections/AboutSection';
import { TestimonialsSection } from '../sections/TestimonialsSection';
import { VideoTourSection } from '../sections/VideoTourSection';
import { ProgramsSection } from '../sections/ProgramsSection';
import { TeachersSection } from '../sections/TeachersSection';
import { NewsletterSection } from '../sections/NewsletterSection';
import { BlogSection } from '../sections/BlogSection';
import { GallerySection } from '../sections/GallerySection';
import { AdmissionsContactSection } from '../sections/AdmissionsContactSection';
import { Program, BlogPost, Teacher } from '../types';

interface HomePageProps {
  onBookVisit: () => void;
  onExplorePrograms: () => void;
  onLearnMoreAbout: () => void;
  onWatchTour: () => void;
  onSelectProgram: (prog: Program) => void;
  onViewAllPrograms: () => void;
  onSelectTeacher: (teacher: Teacher) => void;
  onSelectPost: (post: BlogPost) => void;
  onViewAllPosts: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onBookVisit,
  onExplorePrograms,
  onLearnMoreAbout,
  onWatchTour,
  onSelectProgram,
  onViewAllPrograms,
  onSelectTeacher,
  onSelectPost,
  onViewAllPosts
}) => {
  return (
    <div className="w-full">
      {/* 3. Hero */}
      <HeroSection
        onBookVisit={onBookVisit}
        onExplorePrograms={onExplorePrograms}
      />

      {/* 4. Four Circular Trust/Value Features */}
      <QuickFeaturesSection
        onLearnMore={() => onLearnMoreAbout()}
      />

      {/* 5. About / School Philosophy */}
      <AboutSection
        onLearnMore={onLearnMoreAbout}
      />

      {/* 6. Parent Testimonial */}
      <TestimonialsSection />

      {/* 7. Video School Tour */}
      <VideoTourSection
        onWatchTour={onWatchTour}
      />

      {/* 8. Programs */}
      <ProgramsSection
        onSelectProgram={onSelectProgram}
        onViewAllPrograms={onViewAllPrograms}
      />

      {/* 9. Teachers */}
      <TeachersSection
        onSelectTeacher={onSelectTeacher}
      />

      {/* 10. Newsletter */}
      <NewsletterSection />

      {/* 11. Latest Articles */}
      <BlogSection
        onSelectPost={onSelectPost}
        onViewAllPosts={onViewAllPosts}
      />

      {/* 12. Gallery / Little Moments */}
      <GallerySection />

      {/* 13. Admissions CTA / Contact */}
      <AdmissionsContactSection />
    </div>
  );
};
