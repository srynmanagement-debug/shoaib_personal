import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, MessageCircle } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { VerificationBadge } from '@/components/VerificationBadge';
import { PortfolioClient } from './PortfolioClient';
import { getWhatsAppLink } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Work Portfolio & Verified Project Experience',
  description:
    'Documented project experience and case studies of Suheb Naik across residential, commercial, industrial, interior design, restoration, infrastructure, and land development in Goa.',
};

export default function PortfolioPage() {
  const breadcrumbItems = [{ label: 'Portfolio' }];

  return (
    <div className="flex flex-col">
      {/* Breadcrumb Header Bar */}
      <div className="bg-sand-light border-b border-sand py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Breadcrumbs items={breadcrumbItems} />
          <VerificationBadge label="Field Execution & Historical Experience" />
        </div>
      </div>

      {/* Hero / Editorial Introduction */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-olive-dark font-medium">
              <span className="w-8 h-px bg-olive" />
              <span>Documented Track Record</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl text-charcoal font-normal leading-tight">
              Past Work &amp; Execution Case Studies.
            </h1>

            <p className="text-lg sm:text-xl text-charcoal-muted leading-relaxed font-sans">
              A curated record of hands-on project delivery across Goa since 2017. Spanning turnkey interior fit-outs with Workzplus to structural civil engineering supervision with ASN Associates, this portfolio highlights practical problem-solving on the ground.
            </p>

            {/* Credibility & Differentiation Notice */}
            <div className="p-4 bg-sand-light border border-sand rounded-sm text-xs text-charcoal-muted flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-olive flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <strong className="text-charcoal block">Portfolio Integrity Statement:</strong>
                <p>
                  This portfolio showcases verified historical experience and completed work. We explicitly state Suheb Naik’s precise role on every engagement—whether fit-out management, civil structural supervision, or site advisory—without claiming overall firm ownership or unconfirmed executive authority.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Case Studies Grid */}
          <div className="mt-14">
            <PortfolioClient />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-sand-dark text-charcoal border-t border-sand">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-olive-dark font-medium block">
            Construction &amp; Advisory Inquiries
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal font-normal">
            Need an on-ground execution lead or civil advisor for your Goa project?
          </h2>
          <p className="text-sm sm:text-base text-charcoal-muted max-w-xl mx-auto">
            From technical contractor vetting to full civil project supervision, discuss your project requirements directly.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-xs uppercase tracking-widest font-semibold bg-charcoal text-ivory hover:bg-charcoal-light transition-all rounded-sm shadow-md"
            >
              Discuss Project Execution
              <ArrowRight className="w-4 h-4" />
            </Link>
            {getWhatsAppLink("Hello Suheb, I would like to consult with you on construction execution in Goa.") ? (
              <a
                href={getWhatsAppLink("Hello Suheb, I would like to consult with you on construction execution in Goa.")!}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 text-xs uppercase tracking-widest font-semibold text-charcoal border border-charcoal/40 hover:bg-sand transition-all rounded-sm"
              >
                <MessageCircle className="w-4 h-4 text-olive" />
                Direct WhatsApp
              </a>
            ) : (
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-xs uppercase tracking-widest font-semibold text-charcoal border border-charcoal/40 hover:bg-sand transition-all rounded-sm"
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
