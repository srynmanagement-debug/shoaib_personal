'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Send,
  AlertCircle,
  MessageCircle,
  Mail,
  MapPin,
  Building2,
  Info,
  ShieldAlert,
} from 'lucide-react';
import { siteConfig, getWhatsAppLink } from '@/data/siteConfig';

const enquiryTypes = [
  'Buying Property',
  'Selling/Land Opportunity',
  'Investment',
  'Development Partnership',
  'Hospitality/Commercial',
  'Other',
] as const;

type EnquiryType = (typeof enquiryTypes)[number];

const isEnquiryType = (val: string): val is EnquiryType =>
  (enquiryTypes as readonly string[]).includes(val);

interface FormData {
  name: string;
  email: string;
  phone: string;
  enquiryType: string;
  propertyLocation: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  enquiryType?: string;
  message?: string;
}

export const ContactClient: React.FC = () => {
  const searchParams = useSearchParams();
  const initialOpportunity = searchParams.get('opportunity') || searchParams.get('projectRef') || searchParams.get('subject') || '';
  const initialType = searchParams.get('inquiryType') || searchParams.get('type') || 'Buying Property';

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    enquiryType: isEnquiryType(initialType) ? initialType : 'Buying Property',
    propertyLocation: '',
    message: initialOpportunity ? `Regarding: ${initialOpportunity}\n\n` : '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [validationCompleted, setValidationCompleted] = useState<boolean>(false);
  const [isValidating, setIsValidating] = useState<boolean>(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone / WhatsApp number is required';
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'Please enter a valid phone number (minimum 8 digits)';
    }

    if (!formData.message.trim() || formData.message.trim().length < 15) {
      newErrors.message = 'Please provide a brief message or project description (minimum 15 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleValidationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setValidationCompleted(false);
      return;
    }

    setIsValidating(true);
    // Verified pre-launch quality behavior: Form endpoint is not connected.
    // Zero data transmitted. Transparent notification rendered.
    setTimeout(() => {
      setIsValidating(false);
      setValidationCompleted(true);
    }, 300);
  };

  const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (validationCompleted) {
      setValidationCompleted(false);
    }
  };

  const activeWhatsAppUrl = getWhatsAppLink(
    `Hello Suheb,\n\nName: ${formData.name || 'Website Visitor'}\nEnquiry Type: ${formData.enquiryType}\nLocation: ${formData.propertyLocation || 'Goa'}\nMessage: ${formData.message || 'I would like to discuss a property opportunity.'}`
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
      {/* Contact Form Column */}
      <div className="lg:col-span-7 bg-ivory p-6 sm:p-10 rounded-sm border border-sand shadow-sm">
        <div className="mb-6 space-y-2">
          <span className="text-xs uppercase tracking-widest text-olive-dark font-medium block">
            Opportunity Enquiry Form
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-charcoal">
            Discuss a Property Opportunity
          </h1>
          <p className="text-sm text-charcoal-muted leading-relaxed">
            Fill out the details below for land evaluations, acquisitions, co-development discussions, or construction project coordination in Goa.
          </p>
        </div>

        {/* Clear Pre-Launch Endpoint Status Notice */}
        <div className="mb-8 p-4 bg-sand-light border border-stone-brand/40 rounded-sm text-xs text-charcoal-muted flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-olive flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="text-charcoal block">Form Endpoint Not Connected (Pre-Launch Staging)</strong>
            <p>
              This website is in pre-launch review. No live backend endpoint or email relay service is connected. You can test form validation below; <strong>no personal data will be transmitted or stored</strong>.
            </p>
          </div>
        </div>

        {validationCompleted && (
          <div className="mb-8 p-5 bg-sand border-l-4 border-olive rounded-sm space-y-2 animate-in fade-in duration-200">
            <div className="flex items-center gap-2 text-charcoal font-semibold text-sm">
              <Info className="w-4 h-4 text-olive" />
              <span>Validation Check Passed (No Data Sent)</span>
            </div>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              All required fields meet validation standards. Because no backend endpoint is configured, your input has <strong>not</strong> been submitted or transmitted over any network. Once an official endpoint is configured by the client, live submissions will be routed securely.
            </p>
          </div>
        )}

        <form onSubmit={handleValidationSubmit} noValidate className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1.5">
              Full Name <span className="text-olive">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleFieldChange}
              placeholder="e.g. Rahul Sharma"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={`w-full px-4 py-3 text-sm bg-sand-light border rounded-sm focus:outline-none focus:ring-2 focus:ring-charcoal transition-all ${
                errors.name ? 'border-red-500 bg-red-50/20' : 'border-sand hover:border-sand-dark'
              }`}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.name}
              </p>
            )}
          </div>

          {/* Email and Phone Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1.5">
                Email Address <span className="text-olive">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleFieldChange}
                placeholder="name@domain.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`w-full px-4 py-3 text-sm bg-sand-light border rounded-sm focus:outline-none focus:ring-2 focus:ring-charcoal transition-all ${
                  errors.email ? 'border-red-500 bg-red-50/20' : 'border-sand hover:border-sand-dark'
                }`}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1.5">
                Phone / WhatsApp <span className="text-olive">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleFieldChange}
                placeholder="+91 00000 00000"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                className={`w-full px-4 py-3 text-sm bg-sand-light border rounded-sm focus:outline-none focus:ring-2 focus:ring-charcoal transition-all ${
                  errors.phone ? 'border-red-500 bg-red-50/20' : 'border-sand hover:border-sand-dark'
                }`}
              />
              {errors.phone && (
                <p id="phone-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.phone}
                </p>
              )}
            </div>
          </div>

          {/* Enquiry Type and Property Location Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="enquiryType" className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1.5">
                Enquiry Type <span className="text-olive">*</span>
              </label>
              <select
                id="enquiryType"
                name="enquiryType"
                value={formData.enquiryType}
                onChange={handleFieldChange}
                className="w-full px-4 py-3 text-sm bg-sand-light border border-sand rounded-sm focus:outline-none focus:ring-2 focus:ring-charcoal transition-all"
              >
                {enquiryTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="propertyLocation" className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1.5">
                Property Location (If applicable)
              </label>
              <input
                id="propertyLocation"
                name="propertyLocation"
                type="text"
                value={formData.propertyLocation}
                onChange={handleFieldChange}
                placeholder="e.g. Assagao, Siolim, Pernem"
                className="w-full px-4 py-3 text-sm bg-sand-light border border-sand rounded-sm focus:outline-none focus:ring-2 focus:ring-charcoal transition-all"
              />
            </div>
          </div>

          {/* Message Area */}
          <div>
            <label htmlFor="message" className="block text-xs uppercase tracking-wider font-semibold text-charcoal mb-1.5">
              Message &amp; Scope Overview <span className="text-olive">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleFieldChange}
              placeholder="Describe your parcel dimensions, zoning status, project objectives, or intended development scope..."
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={`w-full px-4 py-3 text-sm bg-sand-light border rounded-sm focus:outline-none focus:ring-2 focus:ring-charcoal transition-all ${
                errors.message ? 'border-red-500 bg-red-50/20' : 'border-sand hover:border-sand-dark'
              }`}
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.message}
              </p>
            )}
          </div>

          {/* Privacy notice */}
          <div className="text-xs text-stone-brandDark leading-relaxed">
            <span className="font-semibold text-charcoal">Data Integrity Notice:</span> In pre-launch staging, form entries remain in your browser session only. To connect live submissions, configure an official API route or backend webhook.
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isValidating}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs uppercase tracking-widest font-semibold bg-charcoal text-ivory hover:bg-charcoal-light transition-all rounded-sm shadow-md disabled:opacity-50"
            >
              {isValidating ? 'Validating Fields...' : 'Test Form Validation (Offline Mode)'}
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>

      {/* Direct Contact & Details Column */}
      <div className="lg:col-span-5 space-y-8">
        {/* Direct Channels */}
        <div className="p-8 bg-charcoal text-ivory rounded-sm border border-charcoal-light space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-olive-muted font-medium block">
              Direct Inquiries
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-ivory mt-1">
              Direct Contact Details
            </h3>
            <p className="text-xs text-stone-brand mt-2 leading-relaxed">
              Official direct contact channels for land site visits and acquisition evaluations in Goa.
            </p>
          </div>

          <div className="space-y-5 pt-2 border-t border-charcoal-light">
            {/* WhatsApp channel */}
            <div className="flex items-start gap-3">
              <MessageCircle className="w-5 h-5 text-olive flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] uppercase tracking-wider text-sand-light block">
                  WhatsApp Direct
                </span>
                {siteConfig.contact.isWhatsappConfigured && activeWhatsAppUrl ? (
                  <a
                    href={activeWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:text-sand transition-colors block mt-0.5 underline"
                  >
                    {siteConfig.contact.whatsappDisplay}
                  </a>
                ) : (
                  <div className="mt-1 space-y-1">
                    <span className="text-xs text-stone-brand block">
                      {siteConfig.contact.whatsappDisplay}
                    </span>
                    <span className="inline-block px-2 py-0.5 text-[10px] uppercase tracking-wider bg-charcoal-deep text-stone-brand border border-charcoal-light rounded">
                      Channel Unavailable Pending Setup
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Email channel */}
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-olive flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] uppercase tracking-wider text-sand-light block">
                  Direct Email
                </span>
                {siteConfig.contact.isEmailConfigured && siteConfig.contact.email ? (
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-sm font-medium hover:text-sand transition-colors block mt-0.5 underline"
                  >
                    {siteConfig.contact.emailDisplay}
                  </a>
                ) : (
                  <div className="mt-1 space-y-1">
                    <span className="text-xs text-stone-brand block">
                      {siteConfig.contact.emailDisplay}
                    </span>
                    <span className="inline-block px-2 py-0.5 text-[10px] uppercase tracking-wider bg-charcoal-deep text-stone-brand border border-charcoal-light rounded">
                      Inbox Unavailable Pending Setup
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-olive flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] uppercase tracking-wider text-sand-light block">
                  Operational Presence
                </span>
                <span className="text-sm font-medium block mt-0.5">
                  {siteConfig.contact.location}
                </span>
                <span className="text-xs text-stone-brand block mt-0.5">
                  Active across North Goa (Bardez, Pernem) &amp; South Goa (Salcete, Verna).
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Development Brand Note */}
        <div className="p-8 bg-sand-light border border-sand rounded-sm space-y-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-olive-dark font-medium">
            <Building2 className="w-4 h-4 text-olive" />
            <span>Development Advisory Entity</span>
          </div>

          <h4 className="font-serif text-2xl text-charcoal">
            {siteConfig.companyName}
          </h4>

          <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
            {siteConfig.memaarTagline}
          </p>

          <p className="text-xs text-stone-brandDark leading-relaxed border-t border-sand pt-3">
            Whether evaluating greenfield acreage or structuring joint development agreements, ground-truth technical analysis precedes capital commitments.
          </p>
        </div>
      </div>
    </div>
  );
};
