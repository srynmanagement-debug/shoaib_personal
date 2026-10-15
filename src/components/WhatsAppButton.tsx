'use client';

import React from 'react';
import Link from 'next/link';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { getWhatsAppLink } from '@/data/siteConfig';

export const WhatsAppFloatingButton: React.FC = () => {
  const whatsAppUrl = getWhatsAppLink(
    "Hello Suheb, I would like to inquire about a Goa real estate / development opportunity."
  );

  return (
    <aside
      aria-label="Direct Consultation Trigger"
      className="fixed bottom-6 right-6 z-40 group"
    >
      {whatsAppUrl ? (
        <a
          href={whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp with Suheb Naik"
          className="flex items-center gap-2.5 bg-charcoal text-ivory px-4 py-3 rounded-full shadow-lg border border-sand hover:bg-charcoal-light hover:border-ivory transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ivory"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-olive opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-olive"></span>
          </span>
          <MessageCircle className="w-5 h-5 text-sand" />
          <span className="text-xs uppercase tracking-wider font-medium hidden sm:inline-block">
            Direct WhatsApp
          </span>
        </a>
      ) : (
        <Link
          href="/contact"
          aria-label="Direct Opportunity Inquiry with Suheb Naik"
          className="flex items-center gap-2.5 bg-charcoal text-ivory px-4 py-3 rounded-full shadow-lg border border-sand hover:bg-charcoal-light hover:border-ivory transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ivory"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-olive"></span>
          </span>
          <MessageCircle className="w-4 h-4 text-sand" />
          <span className="text-xs uppercase tracking-wider font-medium hidden sm:inline-block">
            Inquire (Draft Staging)
          </span>
          <ArrowUpRight className="w-3.5 h-3.5 text-stone-brand" />
        </Link>
      )}
    </aside>
  );
};
