import React, { useState, useEffect } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { Footer } from './sections/Footer';
import { VideoModal } from './components/VideoModal';
import { ProgramModal } from './components/ProgramModal';
import { LegalModal } from './components/LegalModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { TeachersPage } from './pages/TeachersPage';
import { ActivitiesPage } from './pages/ActivitiesPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { ContactPage } from './pages/ContactPage';
import { Program, BlogPost, Teacher } from './types';
import { ChevronUp } from 'lucide-react';

export function App() {
  const [currentNav, setCurrentNav] = useState<string>('home');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'accessibility' | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen to hash change for browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      if (hash.startsWith('blog/')) {
        // Find post by slug if possible
        setCurrentNav('blog');
      } else {
        setCurrentNav(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (navId: string) => {
    setCurrentNav(navId);
    setSelectedPost(null);
    window.location.hash = navId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookVisit = () => {
    if (currentNav === 'home') {
      const el = document.getElementById('admissions');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    navigateTo('admissions');
  };

  const handleSelectPost = (post: BlogPost) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFCF9] text-[#102B49] relative selection:bg-[#FF7043]/20 selection:text-[#FF7043]">
      {/* 1. Announcement Bar */}
      <AnnouncementBar onScheduleClick={handleBookVisit} />

      {/* 2. Sticky Header */}
      <Header
        activeNav={currentNav}
        onNavClick={navigateTo}
        onBookVisit={handleBookVisit}
      />

      {/* Main Page Area */}
      <main className="flex-1 w-full">
        {selectedPost ? (
          <BlogPostPage
            post={selectedPost}
            onBack={() => setSelectedPost(null)}
            onBookVisit={handleBookVisit}
          />
        ) : (
          <>
            {currentNav === 'home' && (
              <HomePage
                onBookVisit={handleBookVisit}
                onExplorePrograms={() => navigateTo('programs')}
                onLearnMoreAbout={() => navigateTo('about')}
                onWatchTour={() => setIsVideoModalOpen(true)}
                onSelectProgram={(p) => setSelectedProgram(p)}
                onViewAllPrograms={() => navigateTo('programs')}
                onSelectTeacher={() => navigateTo('teachers')}
                onSelectPost={handleSelectPost}
                onViewAllPosts={() => navigateTo('blog')}
              />
            )}

            {currentNav === 'about' && (
              <AboutPage
                onBookVisit={handleBookVisit}
                onExplorePrograms={() => navigateTo('programs')}
                onSelectTeacher={() => navigateTo('teachers')}
              />
            )}

            {currentNav === 'programs' && (
              <ProgramsPage
                onSelectProgram={(p) => setSelectedProgram(p)}
                onBookVisit={handleBookVisit}
              />
            )}

            {currentNav === 'admissions' && <AdmissionsPage />}

            {currentNav === 'teachers' && (
              <TeachersPage onBookVisit={handleBookVisit} />
            )}

            {currentNav === 'activities' && (
              <ActivitiesPage onBookVisit={handleBookVisit} />
            )}

            {currentNav === 'blog' && (
              <BlogPage onSelectPost={handleSelectPost} />
            )}

            {currentNav === 'contact' && <ContactPage />}
          </>
        )}
      </main>

      {/* 14. Premium Dark Navy Footer */}
      <Footer
        onNavClick={navigateTo}
        onBookVisit={handleBookVisit}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenAccessibility={() => setLegalModalType('accessibility')}
      />

      {/* Interactive Video Tour Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onBookVisit={handleBookVisit}
      />

      {/* Interactive Program Details Modal */}
      <ProgramModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onBookVisit={handleBookVisit}
      />

      {/* Child Privacy & Legal Policies Modal */}
      <LegalModal
        isOpen={legalModalType !== null}
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Floating Scroll to Top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-30 w-11 h-11 rounded-full bg-[#102B49] text-white hover:bg-[#FF7043] shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Scroll to top of page"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

export default App;
