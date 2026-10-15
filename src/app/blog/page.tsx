import React from 'react';
import type { Metadata } from 'next';
import { AlertCircle } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { VerificationBadge } from '@/components/VerificationBadge';
import { BlogClient } from './BlogClient';

export const metadata: Metadata = {
  title: 'Property Insights & Goa Real Estate Intelligence',
  description:
    'Critical editorial perspectives, land evaluation frameworks, and construction intelligence from Suheb Naik on the Goa property market.',
};

export default function BlogListingPage() {
  const breadcrumbItems = [{ label: 'Property Insights' }];

  return (
    <div className="flex flex-col">
      {/* Breadcrumb Header Bar */}
      <div className="bg-sand-light border-b border-sand py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Breadcrumbs items={breadcrumbItems} />
          <VerificationBadge label="Editorial Draft Series — Client Review Pending" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-olive-dark font-medium">
              <span className="w-8 h-px bg-olive" />
              <span>Editorial Series</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl text-charcoal font-normal leading-tight">
              Property Insights &amp; Perspectives.
            </h1>

            <p className="text-lg sm:text-xl text-charcoal-muted leading-relaxed font-sans">
              Practical frameworks for evaluating land, understanding Portuguese civil law nuances, managing Goan monsoon hydrology, and making defensible real estate investments.
            </p>

            <div className="p-4 bg-sand-light border border-sand rounded-sm text-xs text-charcoal-muted flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-olive flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-charcoal block">Draft Publication Notice:</strong>
                <p>
                  These six prepared essays reflect Suheb Naik’s operational frameworks and site methodologies. In compliance with content integrity standards, all articles are marked as pre-publication drafts pending final client sign-off.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Blog Listing */}
          <div className="mt-14">
            <BlogClient />
          </div>
        </div>
      </section>
    </div>
  );
}
