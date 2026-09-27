import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { blogPostsData } from '../data/blog';
import { BlogPost } from '../types';

interface BlogSectionProps {
  onSelectPost: (post: BlogPost) => void;
  onViewAllPosts: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectPost, onViewAllPosts }) => {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF1F3] text-xs font-bold text-[#FF7043] uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Learning Journal</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#102B49] leading-tight">
              From Our Learning Journal
            </h2>
            <p className="mt-3 text-base text-[#69717A]">
              Ideas, activities, and insights for helping children learn, play, and grow.
            </p>
          </div>

          <button
            onClick={onViewAllPosts}
            className="inline-flex items-center gap-2 font-display font-bold text-sm text-[#FF7043] hover:text-[#102B49] transition-colors cursor-pointer group"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 3 Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPostsData.map((post) => {
            return (
              <article
                key={post.id}
                onClick={() => onSelectPost(post)}
                className="group bg-[#FFFCF9] rounded-3xl p-5 sm:p-6 border border-[#102B49]/5 shadow-soft hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Rounded Image with zoom on hover */}
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-neutral-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Clean unboxed metadata (anti-slop rule) */}
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#69717A] mb-3">
                    <span className="text-[#FF7043] font-bold">{post.category}</span>
                    <span aria-hidden="true" className="text-neutral-300">·</span>
                    <span>{post.date}</span>
                    <span aria-hidden="true" className="text-neutral-300">·</span>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl text-[#102B49] group-hover:text-[#FF7043] transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-[#69717A] leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Read More link */}
                <div className="pt-4 border-t border-[#102B49]/5 flex items-center justify-between text-xs font-bold text-[#102B49] group-hover:text-[#FF7043] transition-colors">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
