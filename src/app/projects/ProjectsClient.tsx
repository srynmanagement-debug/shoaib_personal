'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Filter,
  CheckCircle2,
  X,
  Info,
  MessageCircle,
} from 'lucide-react';
import { developmentProjects, DevelopmentProject } from '@/data/projectsData';
import { getWhatsAppLink } from '@/data/siteConfig';

const categories = [
  'All Opportunities',
  'Residential',
  'Hospitality',
  'Land Development',
  'Specialised Developments',
] as const;

export const ProjectsClient: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Opportunities');
  const [activeProject, setActiveProject] = useState<DevelopmentProject | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeProject) {
        setActiveProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProject]);

  const filteredProjects = selectedCategory === 'All Opportunities'
    ? developmentProjects
    : developmentProjects.filter((p) => p.category === selectedCategory);

  const modalWhatsAppUrl = activeProject
    ? getWhatsAppLink(`Hello Suheb, I would like to inquire about the ${activeProject.title} opportunity.`)
    : null;

  return (
    <>
      {/* Category Filter Toolbar */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-sand">
        <div className="flex items-center gap-2 mr-3 text-xs uppercase tracking-wider text-stone-brandDark font-medium">
          <Filter className="w-3.5 h-3.5 text-olive" />
          <span>Category:</span>
        </div>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 text-xs uppercase tracking-wider font-medium rounded-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal ${
              selectedCategory === cat
                ? 'bg-charcoal text-ivory shadow-sm'
                : 'bg-sand-light text-charcoal hover:bg-sand'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col bg-sand-light border border-sand rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            {/* Project Image */}
            <div className="relative aspect-[16/10] overflow-hidden bg-sand-dark">
              <Image
                src={project.imageUrl}
                alt={project.imageAlt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-[11px] uppercase tracking-wider font-medium bg-charcoal/90 text-ivory rounded-sm backdrop-blur-sm shadow-sm">
                  {project.category}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 text-[11px] uppercase tracking-wider font-medium bg-ivory text-charcoal rounded-sm shadow-sm border border-sand">
                  {project.status}
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-8 flex flex-col flex-grow space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-olive-dark font-medium">
                  {project.location}
                </span>
                <span className="text-[11px] text-stone-brandDark font-sans">
                  {project.region}
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl text-charcoal group-hover:text-olive-dark transition-colors">
                {project.title}
              </h2>

              <p className="text-sm font-serif italic text-charcoal/80">
                &ldquo;{project.tagline}&rdquo;
              </p>

              <p className="text-sm text-charcoal-muted leading-relaxed line-clamp-3">
                {project.overview}
              </p>

              {/* Key Highlights */}
              <div className="pt-2 border-t border-sand space-y-2">
                <div className="text-[11px] text-stone-brandDark uppercase tracking-wider font-medium">
                  Envelope Scope:
                </div>
                <div className="text-xs font-medium text-charcoal">
                  {project.landOrBuiltArea}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-sand flex items-center justify-between gap-3 mt-auto">
                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-charcoal hover:text-olive-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal rounded-sm"
                >
                  <Info className="w-3.5 h-3.5 text-olive" />
                  View Thesis (Draft)
                </button>
                <Link
                  href={`/contact?opportunity=${encodeURIComponent(project.title)}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs uppercase tracking-widest font-semibold bg-charcoal text-ivory hover:bg-charcoal-light transition-all rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
                >
                  Inquire
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div className="bg-ivory max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-sm border border-sand shadow-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-start justify-between gap-4 border-b border-sand pb-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-olive-dark font-medium block">
                  {activeProject.category} • {activeProject.location}
                </span>
                <h3 id="modal-project-title" className="font-serif text-3xl text-charcoal mt-1">
                  {activeProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="p-2 text-charcoal hover:text-olive transition-colors rounded-sm hover:bg-sand focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
                aria-label="Close dialog (Escape)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-[16/9] rounded-sm overflow-hidden bg-sand-dark">
              <Image
                src={activeProject.imageUrl}
                alt={activeProject.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 650px"
              />
              <div className="absolute bottom-3 left-3 bg-charcoal/90 text-ivory px-3 py-1 rounded text-xs">
                Status: {activeProject.status}
              </div>
            </div>

            <div className="space-y-4 text-sm text-charcoal-muted leading-relaxed">
              <div>
                <h4 className="font-serif text-xl text-charcoal mb-1">Development Thesis</h4>
                <p>{activeProject.developmentThesis}</p>
              </div>

              <div>
                <h4 className="font-serif text-xl text-charcoal mb-1">Spatial & Land Context</h4>
                <p>{activeProject.landOrBuiltArea}</p>
              </div>

              <div>
                <h4 className="font-serif text-xl text-charcoal mb-2">Suitable Stakeholders</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.suitableFor.map((stk, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs bg-sand text-charcoal rounded-sm font-medium"
                    >
                      {stk}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-serif text-xl text-charcoal mb-2">Key Engineering & Site Attributes</h4>
                <ul className="space-y-1.5">
                  {activeProject.keyAttributes.map((attr, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-olive flex-shrink-0 mt-0.5" />
                      <span>{attr}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-sand rounded-sm text-xs text-stone-brandDark italic">
                * Note: All attributes reflect preliminary feasibility assessments. No prices, returns, or public solicitations are made. Confidential site walkthroughs are arranged subject to NDA.
              </div>
            </div>

            <div className="pt-4 border-t border-sand flex flex-col sm:flex-row items-center justify-between gap-3">
              {modalWhatsAppUrl ? (
                <a
                  href={modalWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-charcoal border border-charcoal/30 hover:bg-sand rounded-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
                >
                  <MessageCircle className="w-4 h-4 text-olive" />
                  WhatsApp Discussion
                </a>
              ) : (
                <span className="text-xs text-stone-brandDark italic">
                  WhatsApp Direct: Channel Pending Client Setup
                </span>
              )}
              <Link
                href={`/contact?opportunity=${encodeURIComponent(activeProject.title)}`}
                onClick={() => setActiveProject(null)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs uppercase tracking-wider font-semibold bg-charcoal text-ivory hover:bg-charcoal-light rounded-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
              >
                Submit Opportunity Inquiry (Draft Mode)
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
