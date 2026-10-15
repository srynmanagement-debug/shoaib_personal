import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ShieldAlert, MessageCircle } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { VerificationBadge } from '@/components/VerificationBadge';
import { ProjectsClient } from './ProjectsClient';
import { getWhatsAppLink } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Current Projects & Development Opportunities',
  description:
    'Explore current development opportunities and concept masterplans across Goa in residential, hospitality, and land development.',
};

export default function ProjectsPage() {
  const breadcrumbItems = [{ label: 'Projects' }];

  return (
    <div className="flex flex-col">
      {/* Breadcrumb Header Bar */}
      <div className="bg-sand-light border-b border-sand py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Breadcrumbs items={breadcrumbItems} />
          <VerificationBadge label="Development Feasibility Concepts" />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-olive-dark font-medium">
              <span className="w-8 h-px bg-olive" />
              <span>Development Pipeline</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl text-charcoal font-normal leading-tight">
              Current Opportunities &amp; Masterplans.
            </h1>

            <p className="text-lg sm:text-xl text-charcoal-muted leading-relaxed font-sans">
              Curated development opportunities, masterplan concepts, and zoning feasibility assessments across North and South Goa. Each parcel is evaluated for buildable envelope, ecological sensitivity, and long-term asset value.
            </p>

            <div className="p-4 bg-sand-light border border-sand rounded-sm text-xs text-charcoal-muted flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-olive flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <strong className="text-charcoal block">Compliance &amp; Due Diligence Notice:</strong>
                <p>
                  To adhere strictly to regulatory standards and avoid speculative brokerage, opportunities shown are active feasibility models and concept masterplans. We do not publish speculative pricing or unverified availability. Formal dossiers and site visits are arranged directly under mutual non-disclosure.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Project Directory */}
          <div className="mt-14">
            <ProjectsClient />
          </div>
        </div>
      </section>

      {/* Development Partner Enquiry CTA */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-charcoal text-ivory">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-olive-muted font-medium block">
            Co-Development &amp; Investment
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-ivory font-light leading-tight">
            Interested in partnering on an upcoming development?
          </h2>
          <p className="text-sm sm:text-base text-stone-brand max-w-2xl mx-auto leading-relaxed">
            We collaborate with select landowners, private family offices, and NRI investors looking for verified land assets and execution oversight in Goa.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-xs uppercase tracking-widest font-semibold bg-ivory text-charcoal hover:bg-sand transition-all rounded-sm"
            >
              Discuss an Opportunity
              <ArrowRight className="w-4 h-4" />
            </Link>
            {getWhatsAppLink("Hello Suheb, I would like to discuss a development partnership or land opportunity.") ? (
              <a
                href={getWhatsAppLink("Hello Suheb, I would like to discuss a development partnership or land opportunity.")!}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 text-xs uppercase tracking-widest font-semibold text-ivory border border-stone-brand/40 hover:bg-charcoal-light transition-all rounded-sm"
              >
                <MessageCircle className="w-4 h-4 text-olive" />
                WhatsApp Inquiry
              </a>
            ) : (
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-xs uppercase tracking-widest font-semibold text-ivory border border-stone-brand/40 hover:bg-charcoal-light transition-all rounded-sm"
              >
                <MessageCircle className="w-4 h-4 text-stone-brand" />
                Contact Consultation
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
