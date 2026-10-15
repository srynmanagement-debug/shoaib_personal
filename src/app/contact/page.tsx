import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { VerificationBadge } from '@/components/VerificationBadge';
import { ContactClient } from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Suheb Naik — Discuss a Goa Property Opportunity',
  description:
    'Initiate a confidential inquiry regarding Goa real estate, land feasibility, development partnerships, or construction execution with Suheb Naik.',
};

export default function ContactPage() {
  const breadcrumbItems = [{ label: 'Contact' }];

  return (
    <div className="flex flex-col">
      {/* Breadcrumb Header Bar */}
      <div className="bg-sand-light border-b border-sand py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Breadcrumbs items={breadcrumbItems} />
          <VerificationBadge label="Direct Advisory Inquiries" />
        </div>
      </div>

      {/* Main Content Area */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <Suspense fallback={<div className="p-8 text-center text-stone-brand">Loading enquiry portal...</div>}>
            <ContactClient />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
