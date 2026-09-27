import React from 'react';
import { BlogPost } from '../types';
import { ArrowLeft, Clock, Calendar, CheckCircle2, Share2, Sparkles, BookOpen } from 'lucide-react';
import { Button } from '../components/Button';

interface BlogPostPageProps {
  post: BlogPost;
  onBack: () => void;
  onBookVisit: () => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, onBack, onBookVisit }) => {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Back Link */}
        <div>
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#FF7043] hover:text-[#102B49] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to All Articles</span>
          </button>
        </div>

        {/* Article Header */}
        <header className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#69717A]">
            <span className="text-[#FF7043] font-bold text-sm">{post.category}</span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span>{post.date}</span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#102B49] leading-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-[#69717A] leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author Byline */}
          <div className="pt-2 flex items-center gap-3 border-t border-neutral-100">
            <div className="w-11 h-11 rounded-full bg-[#FF7043] text-white flex items-center justify-center font-bold font-display text-base">
              {post.author.charAt(0)}
            </div>
            <div>
              <div className="font-display font-bold text-sm text-[#102B49]">{post.author}</div>
              <div className="text-xs text-[#69717A]">{post.authorRole} · LittleSprout Academy</div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="rounded-3xl overflow-hidden shadow-soft border-4 border-white aspect-[16/9]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Key Takeaways Box */}
        {post.keyTakeaways && post.keyTakeaways.length > 0 && (
          <div className="bg-[#FFF8E8] rounded-3xl p-6 sm:p-8 border border-[#FFB52E]/30 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF7043]">
              <Sparkles className="w-4 h-4 text-[#FFB52E]" />
              <span>Key Ideas for Parents</span>
            </div>
            <ul className="space-y-2 text-sm text-[#102B49]">
              {post.keyTakeaways.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#72C83E] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Article Prose Content */}
        <div className="prose prose-slate max-w-none text-[#102B49] space-y-5 text-base sm:text-lg leading-relaxed">
          {post.content.map((p, i) => (
            <p key={i} className="text-[#69717A]">
              {p}
            </p>
          ))}
        </div>

        {/* Footer CTA Box */}
        <div className="bg-[#FFF1F3] rounded-3xl p-8 text-center space-y-4 border border-[#FF7043]/15 mt-12">
          <h3 className="font-display font-bold text-2xl text-[#102B49]">
            Want to see these principles in practice?
          </h3>
          <p className="text-sm text-[#69717A] max-w-md mx-auto">
            Book a private morning tour at LittleSprout Academy to observe our child-led learning in real time.
          </p>
          <div className="pt-2">
            <Button size="lg" showArrow onClick={onBookVisit}>
              Schedule a Campus Tour
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
