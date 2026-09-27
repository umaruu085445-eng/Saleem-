import React from 'react';
import { Logo } from '../components/Logo';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, Heart, ExternalLink } from 'lucide-react';
import { galleryData } from '../data/gallery';

interface FooterProps {
  onNavClick: (item: string) => void;
  onBookVisit: () => void;
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
  onOpenAccessibility?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavClick,
  onBookVisit,
  onOpenPrivacy,
  onOpenTerms,
  onOpenAccessibility
}) => {
  const thumbnailImages = galleryData.slice(0, 6);

  return (
    <footer className="relative bg-[#102B49] text-white pt-16 pb-12 overflow-hidden">
      {/* Curved/Wavy Top Edge */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none -translate-y-[99%]">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-8 sm:h-12 block"
        >
          <path
            d="M0,30 C360,60 720,0 1080,35 C1260,50 1380,20 1440,30 L1440,60 L0,60 Z"
            fill="#102B49"
          />
        </svg>
      </div>

      {/* Subtle Background Doodles with very low opacity */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10%" cy="20%" r="30" stroke="white" strokeWidth="2" fill="none" />
          <polygon points="85%,15% 87%,22% 94%,22% 89%,26% 91%,33% 85%,29% 79%,33% 81%,26% 76%,22% 83%,22%" fill="white" />
          <rect x="5%" y="70%" width="40" height="40" rx="8" stroke="white" strokeWidth="2" fill="none" />
          <path d="M75% 75% Q80% 65% 85% 75% T95% 75%" stroke="white" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="footer" onClick={() => onNavClick('home')} />
            
            <p className="text-sm text-white/80 leading-relaxed max-w-sm pt-2">
              <strong className="text-white">“Growing Curious Minds, One Little Step at a Time.”</strong>
            </p>

            <p className="text-xs text-white/60 leading-relaxed">
              A joyful early-learning environment where young children explore, create, play, and build foundational confidence in a safe, nurturing community.
            </p>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="#social"
                aria-label="LittleSprout Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF7043] text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#social"
                aria-label="LittleSprout Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#55BFEF] text-white flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#social"
                aria-label="LittleSprout YouTube"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#FF7043] text-white flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-sm tracking-wider uppercase text-[#FFB52E]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/75">
              <li>
                <button
                  onClick={() => onNavClick('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Our School
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('programs')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Learning Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('admissions')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Admissions &amp; Tuition
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('teachers')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Meet Our Teachers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('activities')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Activities &amp; Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('blog')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Learning Journal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Explore & Resources */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm tracking-wider uppercase text-[#72C83E]">
              Contact Details
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/75">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF7043] shrink-0 mt-0.5" />
                <span>24 Garden Lane, Sunnybrook</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#72C83E] shrink-0" />
                <a href="tel:18005550198" className="hover:text-white">
                  +1 (800) 555-0198
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#55BFEF] shrink-0" />
                <a href="mailto:hello@littlesproutacademy.com" className="hover:text-white">
                  hello@littlesproutacademy.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#FFB52E] shrink-0 mt-0.5" />
                <span>Monday–Friday: 8:00 AM – 5:30 PM</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={onBookVisit}
                className="w-full text-center py-2.5 px-4 rounded-xl bg-[#FF7043] hover:bg-[#F45D2E] text-white text-xs font-bold font-display shadow-sm transition-colors cursor-pointer"
              >
                Schedule Private Campus Visit
              </button>
            </div>
          </div>

          {/* Column 4: Gallery Thumbnail Grid (6 items) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm tracking-wider uppercase text-[#55BFEF]">
              Campus Snaps
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {thumbnailImages.map((img) => (
                <div
                  key={img.id}
                  onClick={() => onNavClick('activities')}
                  className="aspect-square rounded-xl overflow-hidden bg-white/10 border border-white/15 cursor-pointer group"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-115"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
            <p className="text-[11px] text-white/50 italic">
              Real daily moments captured in our creative classrooms.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            © 2026 LittleSprout Academy. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Enrollment
            </button>
            <button
              onClick={onOpenAccessibility}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Accessibility
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
