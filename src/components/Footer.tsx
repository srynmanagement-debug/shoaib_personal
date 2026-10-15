import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, MessageCircle, Mail, MapPin, ShieldCheck, Compass } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-ivory border-t border-charcoal-light">
      {/* Top Banner / Philosophy Accent */}
      <div className="border-b border-charcoal-light/70 py-8 px-4 sm:px-6 lg:px-8 bg-charcoal-deep">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-olive-muted block mb-1">
              Signature Philosophy
            </span>
            <p className="font-serif text-2xl sm:text-3xl text-ivory font-light italic">
              &ldquo;{siteConfig.philosophy}&rdquo;
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium uppercase tracking-widest bg-ivory text-charcoal hover:bg-sand transition-all rounded-sm"
          >
            Start a Conversation
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-3xl font-normal tracking-wide text-ivory">
                SUHEB NAIK
              </span>
              <span className="block text-[11px] tracking-widest uppercase text-stone-brand mt-1">
                Real Estate • Development • Investment
              </span>
            </Link>
            <p className="text-sm text-stone-brand leading-relaxed max-w-sm pt-2">
              Positioned at the intersection of practical civil construction, interior architecture, and land development advisory across Goa.
            </p>
            
            {/* Memaar Corporate Identity */}
            <div className="pt-4 border-t border-charcoal-light/60">
              <div className="flex items-center gap-2 text-xs text-sand uppercase tracking-wider font-medium">
                <Compass className="w-3.5 h-3.5 text-olive" />
                <span>Development Brand: <strong>{siteConfig.companyName}</strong></span>
              </div>
              <p className="text-xs text-stone-brandDark italic mt-0.5">
                {siteConfig.memaarTagline}
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-ivory font-semibold">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm text-stone-brand">
              <li>
                <Link href="/" className="hover:text-ivory transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-ivory transition-colors">About Suheb</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-ivory transition-colors">Current Projects</Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-ivory transition-colors">Work Portfolio</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-ivory transition-colors">Property Insights</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-ivory transition-colors">Contact & Advisory</Link>
              </li>
            </ul>
          </div>

          {/* Development Focus */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-ivory font-semibold">
              Advisory Focus
            </h3>
            <ul className="space-y-2 text-xs text-stone-brand leading-relaxed">
              <li>• Land Feasibility & TCP Due Diligence</li>
              <li>• Low-Density Luxury Residential</li>
              <li>• Eco-Retreat & Hospitality Sites</li>
              <li>• Heritage Restoration Planning</li>
              <li>• Private Investor Placements</li>
              <li>• Civil Construction Execution</li>
            </ul>
          </div>

          {/* Configurable Contact Column */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-ivory font-semibold">
              Direct Inquiries
            </h3>
            <div className="space-y-3 text-xs text-stone-brand">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-olive flex-shrink-0 mt-0.5" />
                <span>{siteConfig.contact.location} (Operating in North & South Goa)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-olive flex-shrink-0 mt-0.5" />
                {siteConfig.contact.isEmailConfigured && siteConfig.contact.email ? (
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="hover:text-ivory transition-colors underline-offset-4 hover:underline"
                  >
                    {siteConfig.contact.emailDisplay}
                  </a>
                ) : (
                  <span className="text-stone-brandDark italic">
                    {siteConfig.contact.emailDisplay}
                  </span>
                )}
              </div>
              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-olive flex-shrink-0 mt-0.5" />
                {siteConfig.contact.isWhatsappConfigured && siteConfig.contact.whatsappNumber ? (
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-ivory transition-colors"
                  >
                    WhatsApp: {siteConfig.contact.whatsappDisplay}
                  </a>
                ) : (
                  <span className="text-stone-brandDark italic">
                    WhatsApp: {siteConfig.contact.whatsappDisplay}
                  </span>
                )}
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-[10px] text-stone-brandDark bg-charcoal-deep px-2.5 py-1 rounded border border-charcoal-light">
                <ShieldCheck className="w-3 h-3 text-olive" />
                Independent Development Advisory
              </span>
            </div>
          </div>
        </div>

        {/* Verification Footnote & Copyright */}
        <div className="mt-14 pt-8 border-t border-charcoal-light/70 text-xs text-stone-brandDark space-y-3">
          <p className="leading-relaxed bg-charcoal-deep/60 p-3 rounded border border-charcoal-light/40">
            <strong className="text-stone-brand">Verification Notice:</strong> {siteConfig.claims.verifiedNote} All architectural and site photographs displayed are representative design references and are not claimed as proprietary Memaar or Suheb Naik developments.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <p>
              © {currentYear} {siteConfig.name}. All rights reserved. Memaar — Creating Places. Building Opportunities.
            </p>
            <div className="flex items-center gap-6 text-[11px]">
              <Link href="/contact" className="hover:text-stone-brand">Privacy Policy</Link>
              <Link href="/contact" className="hover:text-stone-brand">Terms of Advisory</Link>
              <Link href="/contact" className="hover:text-stone-brand">Legal Notice</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
