import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Building2,
  Trees,
  Layers,
  MessageCircle,
  Clock,
  Sparkles,
} from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '@/data/siteConfig';
import { developmentProjects } from '@/data/projectsData';
import { blogPosts } from '@/data/blogData';
import { SectionHeading } from '@/components/SectionHeading';
import { VerificationBadge } from '@/components/VerificationBadge';

export default function HomePage() {
  const featuredProjects = developmentProjects.slice(0, 3);
  const featuredInsights = blogPosts.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* 1. Large Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-charcoal text-ivory overflow-hidden px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        {/* Subtle Architectural Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
            alt="Representative architectural study of modern tropical villa (stock visual reference, not an actual project)"
            fill
            priority
            className="object-cover object-center opacity-25 filter brightness-75 contrast-125"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/40" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Eyebrow / Name */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-stone-brand/40 bg-charcoal-deep/70 backdrop-blur-sm text-sand text-xs sm:text-sm tracking-widest uppercase mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-olive animate-pulse" />
            <span>{siteConfig.name}</span>
            <span className="text-stone-brand">•</span>
            <span className="text-stone-brandLight">{siteConfig.subTagline}</span>
          </div>

          {/* Primary Tagline */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-ivory leading-[1.08] sm:leading-[1.05] text-balance">
            {siteConfig.tagline}
          </h1>

          {/* Subtitle Positioning */}
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg uppercase tracking-widest text-sand-light font-medium">
            Real Estate. Development. Investment.
          </p>

          {/* Supporting Copy */}
          <p className="mt-6 sm:mt-8 max-w-2xl mx-auto text-base sm:text-xl text-stone-brandLight font-serif italic leading-relaxed text-balance">
            &ldquo;Every property holds a possibility. Understanding what it can become is where the real opportunity begins.&rdquo;
          </p>

          {/* Dual Call to Action */}
          <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs uppercase tracking-widest font-semibold bg-ivory text-charcoal hover:bg-sand transition-all rounded-sm shadow-md"
            >
              Discuss a Property Opportunity
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/portfolio"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs uppercase tracking-widest font-semibold text-ivory border border-stone-brand/60 hover:bg-charcoal-light hover:border-ivory transition-all rounded-sm"
            >
              Explore My Work
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Short Introduction to Suheb */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Portrait / Editorial Asset */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-sand-dark shadow-xl border border-sand">
                <Image
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80"
                  alt="Suheb Naik — Real estate development and construction professional"
                  fill
                  className="object-cover object-top filter grayscale contrast-110"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-ivory">
                  <span className="text-[10px] uppercase tracking-widest text-sand-light block">
                    Professional Profile
                  </span>
                  <p className="font-serif text-2xl font-light">Suheb Naik</p>
                  <p className="text-xs text-stone-brand mt-0.5">
                    Interior Architecture • Civil Construction • Real Estate Development
                  </p>
                </div>
              </div>
              <div className="mt-2 text-right">
                <span className="text-[10px] text-stone-brandDark italic">
                  * Representative visual portrait placeholder awaiting final client photography
                </span>
              </div>
            </div>

            {/* Editorial Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-olive-dark font-medium">
                <span className="w-6 h-px bg-olive" />
                <span>The Builder&apos;s Perspective</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal font-normal leading-tight">
                Not a generic property broker. <br />
                A builder who progressed into real estate development.
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-charcoal-muted leading-relaxed font-sans">
                <p>
                  Suheb Naik’s foundation in Goa real estate was not built in a sales office—it was forged on the ground. Beginning in interior design in 2017, Suheb developed a rigorous discipline for precision, human-scale proportion, and material integrity.
                </p>
                <p>
                  That foundation progressed into civil construction and field execution, supervising structural frameworks, earthworks, and complex services. Today, that direct physical understanding informs every real estate advisory and development undertaking.
                </p>
                <p>
                  Rather than evaluating property through speculative marketing, Suheb assesses land through its buildable physics: topography, natural runoff, statutory Town & Country Planning zoning, and architectural longevity.
                </p>
              </div>

              <div className="pt-4 flex items-center gap-6">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-charcoal hover:text-olive-dark transition-colors group"
                >
                  Read Suheb&apos;s Full Journey
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="text-xs uppercase tracking-widest font-medium text-stone-brandDark hover:text-charcoal transition-colors underline-offset-4 hover:underline"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Credibility Section: Since 2017 & 62+ Projects (With Verification Flags) */}
      <section className="py-16 bg-sand-light border-y border-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-olive-dark font-medium block">
                Track Record & Foundation
              </span>
              <h3 className="font-serif text-2xl text-charcoal">
                Ground Experience Across Sectors
              </h3>
            </div>
            <VerificationBadge label="Metrics from Brand Brief — Client Verification Pending" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-4">
            <div className="p-6 bg-ivory rounded-sm border border-sand">
              <span className="font-serif text-4xl sm:text-5xl text-charcoal block">2017</span>
              <span className="text-xs uppercase tracking-wider text-charcoal font-medium mt-2 block">
                Journey Began
              </span>
              <p className="text-xs text-stone-brandDark mt-1 leading-normal">
                Starting in high-end interior architecture and turnkey fit-outs with Workzplus.
              </p>
            </div>

            <div className="p-6 bg-ivory rounded-sm border border-sand">
              <span className="font-serif text-4xl sm:text-5xl text-charcoal block">62+</span>
              <span className="text-xs uppercase tracking-wider text-charcoal font-medium mt-2 block">
                Projects Involved
              </span>
              <p className="text-xs text-stone-brandDark mt-1 leading-normal">
                Across residential, commercial, industrial, restoration, infrastructure and land.
              </p>
            </div>

            <div className="p-6 bg-ivory rounded-sm border border-sand">
              <span className="font-serif text-4xl sm:text-5xl text-charcoal block">7</span>
              <span className="text-xs uppercase tracking-wider text-charcoal font-medium mt-2 block">
                Project Sectors
              </span>
              <p className="text-xs text-stone-brandDark mt-1 leading-normal">
                Comprehensive exposure from vernacular laterite masonry to industrial PEB works.
              </p>
            </div>

            <div className="p-6 bg-ivory rounded-sm border border-sand">
              <span className="font-serif text-4xl sm:text-5xl text-charcoal block">Goa</span>
              <span className="text-xs uppercase tracking-wider text-charcoal font-medium mt-2 block">
                Regional Focus
              </span>
              <p className="text-xs text-stone-brandDark mt-1 leading-normal">
                Deep on-the-ground knowledge of Bardez, Pernem, Tiswadi, and Salcete micro-markets.
              </p>
            </div>
          </div>

          <p className="mt-6 text-[11px] text-stone-brandDark italic">
            * Note for transparency: The figures above reflect project involvement referenced in the initial brand brief across Workzplus, ASN Associates, and advisory engagements. Exact counts and portfolio itemizations are subject to final client sign-off.
          </p>
        </div>
      </section>

      {/* 4. Signature Philosophy: “What can this land become?” */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-charcoal text-ivory relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-olive-muted mb-4 font-medium">
              <Compass className="w-4 h-4 text-olive" />
              <span>Core Methodology</span>
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ivory font-light leading-tight">
              &ldquo;What can this land become?&rdquo;
            </h2>
            <p className="mt-4 text-stone-brand max-w-2xl mx-auto text-base sm:text-lg">
              Every parcel in Goa speaks of its past, its slope, its vegetation, and its water. Development is the art of answering that question with restraint and vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            <div className="p-8 bg-charcoal-deep border border-charcoal-light/70 rounded-sm">
              <span className="w-8 h-8 rounded-full bg-olive/20 text-olive flex items-center justify-center font-serif text-lg mb-6">
                1
              </span>
              <h3 className="font-serif text-2xl text-ivory mb-3">Topography & Physics</h3>
              <p className="text-sm text-stone-brand leading-relaxed">
                We inspect the contours, seasonal water channels, and natural tree buffers before drawing a single line. In Goa, working with the slope saves millions in retaining walls and prevents future drainage failures.
              </p>
            </div>

            <div className="p-8 bg-charcoal-deep border border-charcoal-light/70 rounded-sm">
              <span className="w-8 h-8 rounded-full bg-olive/20 text-olive flex items-center justify-center font-serif text-lg mb-6">
                2
              </span>
              <h3 className="font-serif text-2xl text-ivory mb-3">Title & Zoning Diligence</h3>
              <p className="text-sm text-stone-brand leading-relaxed">
                Portuguese civil code succession, Form I & XIV revenue verification, Town & Country Planning zoning, and access road width determine the true legal buildable envelope.
              </p>
            </div>

            <div className="p-8 bg-charcoal-deep border border-charcoal-light/70 rounded-sm">
              <span className="w-8 h-8 rounded-full bg-olive/20 text-olive flex items-center justify-center font-serif text-lg mb-6">
                3
              </span>
              <h3 className="font-serif text-2xl text-ivory mb-3">End-User Resonance</h3>
              <p className="text-sm text-stone-brand leading-relaxed">
                Whether a boutique eco-resort or a low-density residential enclave, the built place must protect Goa’s tranquility. Restraint in density yields premium, defensible valuation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Selected Projects / Developments Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeading
              eyebrow="Development Pipeline"
              title="Selected Opportunities & Studies"
              description="Current concept masterplans and development feasibility studies under review."
              className="mb-0"
            />
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-charcoal hover:text-olive-dark transition-colors self-start md:self-end"
            >
              View All Opportunities
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col bg-sand-light border border-sand rounded-sm overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-sand-dark">
                  <Image
                    src={project.imageUrl}
                    alt={project.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold bg-charcoal/90 text-ivory rounded-sm backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-medium bg-ivory/95 text-charcoal rounded-sm shadow-sm">
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-[11px] uppercase tracking-wider text-olive-dark font-medium">
                    {project.location}
                  </span>
                  <h3 className="font-serif text-2xl text-charcoal mt-1 group-hover:text-olive-dark transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-charcoal-muted mt-3 line-clamp-2 leading-relaxed">
                    {project.overview}
                  </p>

                  <div className="mt-6 pt-4 border-t border-sand flex items-center justify-between text-xs">
                    <span className="text-stone-brandDark font-sans">
                      {project.landOrBuiltArea.split('(')[0]}
                    </span>
                    <Link
                      href="/projects"
                      className="inline-flex items-center gap-1 font-semibold text-charcoal group-hover:text-olive-dark uppercase tracking-wider text-[11px]"
                    >
                      Details
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <span className="text-xs text-stone-brandDark italic">
              * Note: Project titles and attributes represent active development advisory models and concept masterplans awaiting final partner clearance.
            </span>
          </div>
        </div>
      </section>

      {/* 6. Audience & Opportunity Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-sand-light border-y border-sand">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Target Audiences"
            title="Who We Partner With"
            description="Tailored real estate, land development, and construction solutions across four distinct stakeholder groups."
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            <div className="p-6 bg-ivory rounded-sm border border-sand space-y-4">
              <div className="w-10 h-10 rounded-sm bg-sand flex items-center justify-center text-charcoal">
                <Building2 className="w-5 h-5 text-olive-dark" />
              </div>
              <h3 className="font-serif text-2xl text-charcoal">
                Buyers & Landowners
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                For landowners seeking to unlock raw parcel value through structured joint developments or private buyers seeking uncompromised Goa estates.
              </p>
              <ul className="text-[11px] text-stone-brandDark space-y-1 pt-2 border-t border-sand">
                <li>• Land Title & TCP Verification</li>
                <li>• Feasibility & Contour Study</li>
                <li>• Off-Market Land Sourcing</li>
              </ul>
            </div>

            <div className="p-6 bg-ivory rounded-sm border border-sand space-y-4">
              <div className="w-10 h-10 rounded-sm bg-sand flex items-center justify-center text-charcoal">
                <Sparkles className="w-5 h-5 text-olive-dark" />
              </div>
              <h3 className="font-serif text-2xl text-charcoal">
                Investors & NRIs
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                For capital allocators seeking secure, grounded Goa real estate assets backed by civil due diligence rather than broker hyperbole.
              </p>
              <ul className="text-[11px] text-stone-brandDark space-y-1 pt-2 border-t border-sand">
                <li>• Construction Cost Audits</li>
                <li>• Value-Add Repositioning</li>
                <li>• Transparent Timeline Staging</li>
              </ul>
            </div>

            <div className="p-6 bg-ivory rounded-sm border border-sand space-y-4">
              <div className="w-10 h-10 rounded-sm bg-sand flex items-center justify-center text-charcoal">
                <Layers className="w-5 h-5 text-olive-dark" />
              </div>
              <h3 className="font-serif text-2xl text-charcoal">
                Development Partners
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                For architects, consortiums, and institutional builders looking for execution heads with proven field leadership in Goa&apos;s climate.
              </p>
              <ul className="text-[11px] text-stone-brandDark space-y-1 pt-2 border-t border-sand">
                <li>• Site Coordination & Execution</li>
                <li>• Contractor & Vendor Vetting</li>
                <li>• Quality Control & Milestones</li>
              </ul>
            </div>

            <div className="p-6 bg-ivory rounded-sm border border-sand space-y-4">
              <div className="w-10 h-10 rounded-sm bg-sand flex items-center justify-center text-charcoal">
                <Trees className="w-5 h-5 text-olive-dark" />
              </div>
              <h3 className="font-serif text-2xl text-charcoal">
                Hospitality & Commercial
              </h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                For boutique hoteliers, restaurateurs, and wellness brands evaluating site feasibility, water reserves, and vernacular restoration.
              </p>
              <ul className="text-[11px] text-stone-brandDark space-y-1 pt-2 border-t border-sand">
                <li>• Eco-Retreat Masterplanning</li>
                <li>• Heritage Home Conservation</li>
                <li>• Acoustic & Ingress Vetting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Memaar Introduction */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-olive-muted font-medium">
                <Compass className="w-4 h-4 text-olive" />
                <span>Corporate Development Brand</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ivory font-light leading-tight">
                MEMAAR
              </h2>

              <p className="font-serif text-2xl text-sand italic">
                &ldquo;{siteConfig.memaarTagline}&rdquo;
              </p>

              <div className="space-y-4 text-base text-stone-brand leading-relaxed">
                <p>
                  Memaar is the corporate expression of Suheb Naik’s development philosophy. While individual advisory serves private buyers and investors, Memaar focuses on conceptualising, curating, and executing complete real estate environments.
                </p>
                <p>
                  Rooted in architectural permanence and sensitive spatial planning, Memaar approaches Goa development not as rapid concrete aggregation, but as the creation of legacy places that mature gracefully with time.
                </p>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-widest font-semibold bg-ivory text-charcoal hover:bg-sand transition-all rounded-sm"
                >
                  Inquire on Memaar Co-Development
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-sand-light hover:text-ivory transition-colors"
                >
                  Learn More About The Brand
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="aspect-square relative rounded-sm overflow-hidden bg-charcoal-deep border border-charcoal-light shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=80"
                  alt="Memaar development philosophy - Architectural harmony"
                  fill
                  className="object-cover opacity-80 filter brightness-90 contrast-110"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] tracking-widest uppercase text-olive-muted block">
                    Development Standard
                  </span>
                  <p className="font-serif text-xl text-ivory font-light">
                    Creating Places. Building Opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Property Insights Section (Editorial Blog Cards) */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeading
              eyebrow="Editorial & Analysis"
              title="Property Insights"
              description="Critical perspectives on Goa land economics, construction realities, and development intelligence."
              className="mb-0"
            />
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-charcoal hover:text-olive-dark transition-colors self-start md:self-end"
            >
              Browse All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredInsights.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col bg-sand-light border border-sand rounded-sm overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-sand-dark">
                  <Image
                    src={post.heroImage}
                    alt={post.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-medium bg-ivory/95 text-charcoal rounded-sm shadow-sm">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-0.5 text-[9px] uppercase tracking-wider font-medium bg-charcoal/80 text-sand rounded-sm">
                      Draft Article
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-[11px] text-stone-brandDark font-sans mb-2">
                    <Clock className="w-3.5 h-3.5 text-olive" />
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="font-serif text-2xl text-charcoal group-hover:text-olive-dark transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-charcoal-muted mt-3 line-clamp-3 leading-relaxed flex-grow">
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
                      Read Article
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Strong Final CTA Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-sand-dark text-charcoal border-t border-sand">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-olive-dark font-medium block">
            Initiate a Conversation
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal font-normal leading-tight">
            Have a land parcel or property opportunity in Goa?
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted max-w-2xl mx-auto leading-relaxed">
            Whether you are assessing acquisition feasibility, planning a residential development, or seeking on-ground construction coordination, let’s discuss the potential.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs uppercase tracking-widest font-semibold bg-charcoal text-ivory hover:bg-charcoal-light transition-all rounded-sm shadow-md"
            >
              Discuss a Property Opportunity
              <ArrowRight className="w-4 h-4" />
            </Link>
            {getWhatsAppLink("Hello Suheb, I have a property opportunity in Goa I would like to discuss.") ? (
              <a
                href={getWhatsAppLink("Hello Suheb, I have a property opportunity in Goa I would like to discuss.")!}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs uppercase tracking-widest font-semibold text-charcoal border border-charcoal/40 hover:bg-sand transition-all rounded-sm"
              >
                <MessageCircle className="w-4 h-4 text-olive" />
                Direct WhatsApp Inquiries
              </a>
            ) : (
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs uppercase tracking-widest font-semibold text-charcoal border border-charcoal/40 hover:bg-sand transition-all rounded-sm"
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
