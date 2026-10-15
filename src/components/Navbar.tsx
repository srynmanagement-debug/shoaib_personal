'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/data/siteConfig';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change or Escape key
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Property Insights', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const whatsAppUrl = getWhatsAppLink("Hello Suheb, I would like to discuss a property opportunity in Goa.");

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-ivory/95 backdrop-blur-md border-b border-sand shadow-sm py-3'
            : 'bg-ivory border-b border-sand/60 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal rounded-sm"
              aria-label="Suheb Naik — Home"
            >
              <span className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-charcoal group-hover:text-olive-dark transition-colors">
                SUHEB NAIK
              </span>
              <span className="text-[10px] tracking-widest uppercase text-stone-brandDark font-sans -mt-0.5">
                Real Estate • Development • Investment
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-xs uppercase tracking-widest font-medium transition-colors py-1 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal rounded-sm ${
                      isActive
                        ? 'text-charcoal font-semibold'
                        : 'text-charcoal-muted hover:text-charcoal'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-olive" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              {whatsAppUrl ? (
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium tracking-wider uppercase text-charcoal hover:text-olive-dark border border-sand-dark/70 hover:border-charcoal rounded-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
                  title="Direct WhatsApp Inquiry"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-olive" />
                  WhatsApp
                </a>
              ) : (
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium tracking-wider uppercase text-charcoal-muted hover:text-charcoal border border-sand-dark/70 hover:border-charcoal rounded-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
                  title="WhatsApp channel pending client setup"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-stone-brandDark" />
                  Inquire
                </Link>
              )}
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium tracking-wider uppercase text-ivory bg-charcoal hover:bg-charcoal-light rounded-sm transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
              >
                Discuss Opportunity
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                href="/contact"
                className="px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-ivory bg-charcoal rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
              >
                Inquire
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-charcoal hover:text-olive focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal rounded-sm"
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close main navigation menu" : "Open main navigation menu"}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden bg-ivory border-b border-sand px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-2 pt-2" aria-label="Mobile Navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 text-sm uppercase tracking-widest rounded-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-sand text-charcoal font-semibold'
                        : 'text-charcoal-muted hover:bg-sand/50 hover:text-charcoal'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
            <div className="pt-4 border-t border-sand/80 flex flex-col gap-2">
              {whatsAppUrl ? (
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs uppercase tracking-wider font-medium text-charcoal border border-charcoal/30 rounded-sm"
                >
                  <MessageCircle className="w-4 h-4 text-olive" />
                  Inquire via WhatsApp
                </a>
              ) : (
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs uppercase tracking-wider font-medium text-charcoal border border-sand-dark rounded-sm"
                >
                  <MessageCircle className="w-4 h-4 text-stone-brand" />
                  Direct Consultation (Contact Page)
                </Link>
              )}
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs uppercase tracking-wider font-medium text-ivory bg-charcoal rounded-sm"
              >
                Discuss a Property Opportunity
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
