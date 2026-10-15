'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Filter,
  CheckCircle2,
  Calendar,
  UserCheck,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from 'lucide-react';
import { portfolioItems, portfolioCategories } from '@/data/portfolioData';

export const PortfolioClient: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredItems = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
      {/* Category Filter Toolbar */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-sand">
        <div className="flex items-center gap-2 mr-3 text-xs uppercase tracking-wider text-stone-brandDark font-medium">
          <Filter className="w-3.5 h-3.5 text-olive" />
          <span>Sector Filter:</span>
        </div>
        {portfolioCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3.5 py-1.5 text-xs uppercase tracking-wider font-medium rounded-sm transition-all ${
              selectedCategory === category
                ? 'bg-charcoal text-ivory shadow-sm'
                : 'bg-sand-light text-charcoal hover:bg-sand'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Case Study Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {filteredItems.map((item) => {
          const isExpanded = expandedId === item.id;
          return (
            <article
              key={item.id}
              className="bg-sand-light border border-sand rounded-sm overflow-hidden flex flex-col group hover:shadow-xl transition-all duration-300"
            >
              {/* Image Banner */}
              <div className="relative aspect-[16/10] overflow-hidden bg-sand-dark">
                <Image
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold bg-charcoal/90 text-ivory rounded-sm backdrop-blur-sm">
                    {item.category}
                  </span>
                  <span className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-medium bg-ivory/95 text-charcoal rounded-sm shadow-sm">
                    {item.associatedFirm}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-medium bg-charcoal/85 text-sand rounded-sm shadow-sm">
                    Draft Case Study
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow space-y-4">
                <div className="flex items-center justify-between text-xs text-stone-brandDark font-sans">
                  <span>{item.location}</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-olive" />
                    {item.timeframe}
                  </span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl text-charcoal leading-snug">
                  {item.title}
                </h2>

                {/* Actual Role Pill - Transparent Positioning */}
                <div className="p-3 bg-ivory rounded-sm border border-sand space-y-1">
                  <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-olive-dark font-bold">
                    <UserCheck className="w-3.5 h-3.5 text-olive" />
                    <span>Suheb&apos;s Actual Role:</span>
                  </div>
                  <p className="text-xs font-semibold text-charcoal">
                    {item.actualRole}
                  </p>
                </div>

                <p className="text-sm text-charcoal-muted leading-relaxed line-clamp-3">
                  {item.overview}
                </p>

                {/* Expandable Section */}
                {isExpanded && (
                  <div className="pt-4 border-t border-sand space-y-4 animate-in fade-in duration-200">
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-bold text-charcoal mb-1">
                        Scope Description
                      </h4>
                      <p className="text-xs text-charcoal-muted leading-relaxed">
                        {item.scopeDescription}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-bold text-charcoal mb-2">
                        Key Executed Deliverables
                      </h4>
                      <ul className="space-y-1.5">
                        {item.deliverables.map((del, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-charcoal-muted">
                            <CheckCircle2 className="w-3.5 h-3.5 text-olive flex-shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="text-[11px] text-stone-brandDark italic pt-1">
                      {item.representativeNotice}
                    </p>
                  </div>
                )}

                {/* Footer Buttons */}
                <div className="pt-4 border-t border-sand flex items-center justify-between mt-auto">
                  <button
                    type="button"
                    onClick={() => toggleExpand(item.id)}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-charcoal hover:text-olive-dark transition-colors"
                  >
                    {isExpanded ? (
                      <>
                        Hide Case Details
                        <ChevronUp className="w-4 h-4 text-olive" />
                      </>
                    ) : (
                      <>
                        Inspect Role &amp; Scope
                        <ChevronDown className="w-4 h-4 text-olive" />
                      </>
                    )}
                  </button>

                  <Link
                    href={`/contact?inquiryType=Development+Partnership&projectRef=${encodeURIComponent(item.title)}`}
                    className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider font-medium text-stone-brandDark hover:text-charcoal"
                  >
                    Inquire on Scope
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
};
