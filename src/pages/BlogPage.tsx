import React, { useState } from 'react';
import { blogPostsData } from '../data/blog';
import { BlogPost } from '../types';
import { BookOpen, ArrowRight, Sparkles } from 'lucide-react';

interface BlogPageProps {
  onSelectPost: (post: BlogPost) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onSelectPost }) => {
  const [selectedCat, setSelectedCat] = useState<string>('All');

  const categories = ['All', 'Parent Tips', 'Learning', 'Family Life'];

  const filteredPosts =
    selectedCat === 'All'
      ? blogPostsData
      : blogPostsData.filter((p) => p.category === selectedCat);

  return (
    <div className="py-12 sm:py-16 space-y-16 sm:space-y-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF1F3] text-xs font-bold text-[#FF7043] uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" />
          <span>LittleSprout Learning Journal</span>
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#102B49] leading-tight max-w-3xl mx-auto">
          Insights, Stories &amp; Practical Tips for Modern Families
        </h1>
        <p className="text-base sm:text-lg text-[#69717A] max-w-2xl mx-auto leading-relaxed">
          Written by our certified early childhood educators to help you cultivate wonder,
          calm routines, and playful learning at home.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCat(c)}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold font-display transition-all cursor-pointer ${
                selectedCat === c
                  ? 'bg-[#102B49] text-white shadow-sm'
                  : 'bg-white text-[#102B49]/70 hover:bg-[#FFF8E8] border border-[#102B49]/10'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectPost(post)}
              className="bg-white rounded-3xl p-6 shadow-soft hover:shadow-card-hover border border-neutral-100 flex flex-col justify-between cursor-pointer transition-all hover:-translate-y-1 group"
            >
              <div>
                <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-neutral-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
                  />
                </div>

                {/* Clean unboxed metadata */}
                <div className="flex items-center gap-2 text-xs font-semibold text-[#69717A] mb-3">
                  <span className="text-[#FF7043] font-bold">{post.category}</span>
                  <span aria-hidden="true" className="text-neutral-300">·</span>
                  <span>{post.date}</span>
                  <span aria-hidden="true" className="text-neutral-300">·</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="font-display font-bold text-xl text-[#102B49] group-hover:text-[#FF7043] transition-colors leading-snug mb-3">
                  {post.title}
                </h2>

                <p className="text-xs sm:text-sm text-[#69717A] leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-[#102B49] group-hover:text-[#FF7043] transition-colors">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#FFF1F3] text-[#FF7043] flex items-center justify-center font-bold text-[10px]">
                    {post.author.charAt(0)}
                  </span>
                  <span className="text-[#69717A] font-medium">{post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>Read Story</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
