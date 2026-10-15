import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ShieldCheck, Check } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { VerificationBadge } from '@/components/VerificationBadge';
import { SectionHeading } from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: 'About Suheb Naik — Construction & Real Estate Development',
  description:
    'The professional story of Suheb Naik: beginning in interior design in 2017, expanding into civil construction with Workzplus and ASN Associates, and advancing into real estate development with Memaar in Goa.',
};

export default function AboutPage() {
  const breadcrumbItems = [{ label: 'About Suheb' }];

  const projectCategories = [
    { name: 'Interior Design', desc: 'Starting in 2017 with turnkey luxury residential fit-outs, joinery detailing, and tactile materials.' },
    { name: 'Civil Construction', desc: 'Structural engineering coordination, RCC frameworks, foundation casting, and site safety management.' },
    { name: 'Heritage Restoration', desc: 'Adaptive conservation of ancestral Portuguese structures, laterite masonry stabilization, and lime plasters.' },
    { name: 'Industrial Infrastructure', desc: 'Pre-Engineered Buildings (PEB), heavy-load vacuum dewatered industrial slabs, and logistics bays.' },
    { name: 'Commercial Spaces', desc: 'Retail complexes, multi-tier office structures, structural glazing, and municipal services coordination.' },
    { name: 'Land Development', desc: 'Topographical slope grading, stormwater hydrology, access road planning, and Town & Country Planning diligence.' },
  ];

  return (
    <div className="flex flex-col">
      {/* Breadcrumb Header Bar */}
      <div className="bg-sand-light border-b border-sand py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Breadcrumbs items={breadcrumbItems} />
          <VerificationBadge label="Verified Roles & Experience" />
        </div>
      </div>

      {/* 1. Premium Portrait-Led Hero Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden bg-sand-dark shadow-2xl border border-sand">
                <Image
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80"
                  alt="Representative editorial visual placeholder (client studio photography pending upload, not an actual photo of Suheb Naik)"
                  fill
                  priority
                  className="object-cover object-top filter grayscale contrast-115"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-ivory">
                  <span className="text-[10px] uppercase tracking-widest text-olive-muted font-medium block">
                    Goa Real Estate • Development
                  </span>
                  <p className="font-serif text-3xl font-light">Suheb Naik</p>
                  <p className="text-xs text-sand-light mt-1">
                    Building Opportunities. What can this land become?
                  </p>
                </div>
              </div>
              <div className="mt-2 text-right">
                <span className="text-[10px] text-stone-brandDark italic">
                  * Temporary portrait placeholder awaiting final studio photography.
                </span>
              </div>
            </div>

            {/* Introduction and Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-olive-dark font-medium">
                <span className="w-8 h-px bg-olive" />
                <span>Professional Background</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-charcoal font-normal leading-tight">
                A builder&apos;s grounding in the reality of Goa real estate.
              </h1>

              <p className="text-lg sm:text-xl text-charcoal font-serif italic text-balance">
                &ldquo;Before you ask what a property can sell for, you must first understand what the ground can support and what the architecture can endure.&rdquo;
              </p>

              <div className="space-y-4 text-base text-charcoal-muted leading-relaxed font-sans">
                <p>
                  Suheb Naik is a construction and real estate development professional based in Goa. His approach stands in stark contrast to speculative brokerage. Where market intermediaries often treat property as an abstract marketing asset, Suheb evaluates it through the direct physical realities of topography, structural stability, monsoon engineering, and statutory planning permissions.
                </p>
                <p>
                  His work spans residential enclaves, commercial shells, industrial warehousing, sensitive heritage restoration, and raw land development advisory across North and South Goa.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-widest font-semibold bg-charcoal text-ivory hover:bg-charcoal-light transition-all rounded-sm"
                >
                  Discuss a Property Opportunity
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-widest font-semibold text-charcoal border border-charcoal/30 hover:bg-sand transition-all rounded-sm"
                >
                  Inspect Case Studies
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Professional Journey & Timeline */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-sand-light border-y border-sand">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="The Trajectory"
            title="The Professional Journey"
            description="From micro-scale interior precision to macro-scale land development and masterplanning."
          />

          <div className="space-y-12 relative before:absolute before:inset-0 before:left-3.5 sm:before:left-1/2 before:w-px before:bg-sand-dark">
            {/* Stage 1: 2017 Interior Design & Fit-Outs */}
            <div className="relative flex flex-col sm:flex-row items-start group">
              <div className="flex items-center sm:w-1/2 sm:justify-end sm:pr-10 mb-2 sm:mb-0">
                <span className="font-serif text-3xl sm:text-4xl text-charcoal font-medium">
                  2017
                </span>
              </div>
              <div className="absolute left-3.5 sm:left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-ivory border-2 border-olive flex items-center justify-center text-[10px] text-charcoal font-bold z-10">
                01
              </div>
              <div className="pl-10 sm:pl-10 sm:w-1/2 space-y-2">
                <span className="text-xs uppercase tracking-wider text-olive-dark font-semibold block">
                  Interior Design & Precision Fit-Outs
                </span>
                <h3 className="font-serif text-2xl text-charcoal">
                  Workzplus Association
                </h3>
                <p className="text-sm text-charcoal-muted leading-relaxed">
                  Suheb began his professional journey in 2017 focusing on high-end interior architecture and turnkey fit-outs with <strong>Workzplus</strong>. This stage ingrained an uncompromising standard for joinery detailing, millwork, material finishes, and spatial ergonomics. Managing interior execution taught him that the difference between mediocre and enduring spaces is measured in millimetres.
                </p>
                <div className="pt-1">
                  <span className="text-[11px] text-stone-brandDark font-medium">
                    Verified scope: Interior site execution, finishes, vendor coordination.
                  </span>
                </div>
              </div>
            </div>

            {/* Stage 2: Civil Construction & Structural Execution */}
            <div className="relative flex flex-col sm:flex-row items-start group">
              <div className="flex items-center sm:w-1/2 sm:justify-end sm:pr-10 mb-2 sm:mb-0">
                <div className="sm:text-right space-y-1">
                  <span className="text-xs uppercase tracking-wider text-olive-dark font-semibold block sm:block">
                    Structural Execution & Civil Oversight
                  </span>
                  <h3 className="font-serif text-2xl text-charcoal">
                    ASN Associates Association
                  </h3>
                  <p className="text-sm text-charcoal-muted leading-relaxed hidden sm:block">
                    Expanding from interior environments into full-scale structural engineering, reinforced concrete frames, foundation casting, and heavy infrastructure with <strong>ASN Associates</strong>.
                  </p>
                </div>
              </div>
              <div className="absolute left-3.5 sm:left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-ivory border-2 border-olive flex items-center justify-center text-[10px] text-charcoal font-bold z-10">
                02
              </div>
              <div className="pl-10 sm:pl-10 sm:w-1/2 space-y-2 sm:hidden">
                <span className="text-xs uppercase tracking-wider text-olive-dark font-semibold block">
                  Structural Execution & Civil Oversight
                </span>
                <h3 className="font-serif text-2xl text-charcoal">
                  ASN Associates Association
                </h3>
                <p className="text-sm text-charcoal-muted leading-relaxed">
                  Expanding from interior environments into full-scale structural engineering, reinforced concrete frames, foundation casting, and heavy infrastructure with <strong>ASN Associates</strong>.
                </p>
              </div>
              <div className="pl-10 sm:pl-10 sm:w-1/2 hidden sm:block">
                <span className="font-serif text-3xl sm:text-4xl text-charcoal font-medium">
                  Construction Scale
                </span>
                <p className="text-xs text-stone-brandDark mt-1">
                  Supervising on-site teams, structural engineers, and concrete contractors across residential, commercial, and industrial facilities in Goa.
                </p>
              </div>
            </div>

            {/* Stage 3: Real Estate Development & Memaar */}
            <div className="relative flex flex-col sm:flex-row items-start group">
              <div className="flex items-center sm:w-1/2 sm:justify-end sm:pr-10 mb-2 sm:mb-0">
                <span className="font-serif text-3xl sm:text-4xl text-charcoal font-medium">
                  Present & Future
                </span>
              </div>
              <div className="absolute left-3.5 sm:left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-charcoal text-ivory border-2 border-charcoal flex items-center justify-center text-[10px] font-bold z-10">
                03
              </div>
              <div className="pl-10 sm:pl-10 sm:w-1/2 space-y-2">
                <span className="text-xs uppercase tracking-wider text-olive-dark font-semibold block">
                  Development Entrepreneurship
                </span>
                <h3 className="font-serif text-2xl text-charcoal">
                  Memaar — Creating Places. Building Opportunities.
                </h3>
                <p className="text-sm text-charcoal-muted leading-relaxed">
                  Synthesizing interior sensitivity and structural construction acumen into a comprehensive real estate development brand: <strong>Memaar</strong>. Positioning development not as mass speculation, but as thoughtful land stewardship, low-density enclaves, and defensible investment creation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Sectors of Experience */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Sector Breadth"
            title="Disciplines & Project Categories"
            description="Proven exposure across diverse built typologies without inflating claims or titles."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectCategories.map((cat, i) => (
              <div
                key={i}
                className="p-8 bg-sand-light border border-sand rounded-sm space-y-3 hover:border-olive transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-2xl text-charcoal">{cat.name}</span>
                  <Check className="w-4 h-4 text-olive" />
                </div>
                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-4 bg-sand rounded-sm text-xs text-charcoal-muted flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-olive flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Professional Authenticity Pledge:</strong> All role descriptions reflect actual on-ground execution, fit-out coordination, and site supervision with partner firms Workzplus and ASN Associates. No academic titles, honorary memberships, or unverified claims are utilized.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Professional Philosophy & Long-Term Vision */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-charcoal text-ivory">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-olive-muted font-medium block">
              Core Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-ivory leading-tight">
              A philosophy forged in Goa&apos;s climate and terrain.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-stone-brand leading-relaxed text-sm sm:text-base">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-ivory">Respect for the Land</h3>
              <p>
                In Goa, raw topography is not a blank canvas to be bulldozed flat. Cutting indiscriminately into laterite ridges ruins groundwater recharge, causes foundation erosion during heavy monsoons, and destroys the mature tree canopy that gives the land its soul.
              </p>
              <p>
                True development begins by observing where rainwater naturally channels, where natural breezes draft through the trees, and how buildings can touch the earth lightly.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-ivory">Defensible Investment Value</h3>
              <p>
                A high purchase price does not equal real estate quality. Real value is created through unassailable title clarity, legitimate statutory Town & Country Planning (TCP) compliance, and durable materials that withstand coastal humidity.
              </p>
              <p>
                Through Memaar, Suheb’s vision is to build low-density places that appreciate not merely through market inflation, but through irreplaceable architectural and ecological integrity.
              </p>
            </div>
          </div>

          {/* Callout Box */}
          <div className="p-8 bg-charcoal-deep border border-charcoal-light rounded-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-[11px] uppercase tracking-wider text-sand-light block">
                Direct Partnership Inquiry
              </span>
              <p className="font-serif text-2xl text-ivory">
                Looking to evaluate a development site in Goa?
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-widest font-semibold bg-ivory text-charcoal hover:bg-sand transition-all rounded-sm flex-shrink-0"
            >
              Consult with Suheb
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
