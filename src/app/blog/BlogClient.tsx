'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Filter, Clock, ArrowRight } from 'lucide-react';
import { blogPosts, blogCategories } from '@/data/blogData';

export const BlogClient: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-sand">
        <div className="flex items-center gap-2 mr-3 text-xs uppercase tracking-wider text-stone-brandDark font-medium">
          <Filter className="w-3.5 h-3.5 text-olive" />
          <span>Category:</span>
        </div>
        {blogCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 text-xs uppercase tracking-wider font-medium rounded-sm transition-all ${
              selectedCategory === cat
                ? 'bg-charcoal text-ivory shadow-sm'
                : 'bg-sand-light text-charcoal hover:bg-sand'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            className="group flex flex-col bg-sand-light border border-sand rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-sand-dark">
              <Image
                src={post.heroImage}
                alt={post.imageAlt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold bg-ivory text-charcoal rounded-sm shadow-sm">
                  {post.category}
                </span>
              </div>
              <div className="absolute top-3 right-3">
                <span className="px-2 py-0.5 text-[9px] uppercase tracking-wider font-medium bg-charcoal/85 text-sand rounded-sm">
                  Draft Article
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-7 flex flex-col flex-grow">
              <div className="flex items-center gap-2 text-[11px] text-stone-brandDark font-sans mb-3">
                <Clock className="w-3.5 h-3.5 text-olive" />
                <span>{post.readTime}</span>
                <span>•</span>
                <span>Draft Pending Client Approval</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-2xl text-charcoal group-hover:text-olive-dark transition-colors leading-snug">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>

              <p className="text-xs sm:text-sm text-charcoal-muted mt-3 line-clamp-3 leading-relaxed flex-grow">
                {post.excerpt}
              </p>

              <div className="mt-6 pt-4 border-t border-sand flex items-center justify-between">
                <span className="text-[11px] text-stone-brandDark">
                  By {post.author.name}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 font-semibold text-charcoal group-hover:text-olive-dark uppercase tracking-wider text-[11px]"
                >
                  Read Draft
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};
