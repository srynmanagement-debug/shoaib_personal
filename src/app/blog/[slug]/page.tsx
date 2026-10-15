import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  CheckCircle2,
  MessageCircle,
} from 'lucide-react';
import { blogPosts } from '@/data/blogData';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { VerificationBadge } from '@/components/VerificationBadge';
import { getWhatsAppLink } from '@/data/siteConfig';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) {
    return { title: 'Article Not Found' };
  }

  return {
    title: `${post.title} — Property Insights`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      images: [{ url: post.heroImage }],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => post.relatedSlugs.includes(p.slug));

  const breadcrumbItems = [
    { label: 'Property Insights', href: '/blog' },
    { label: post.title },
  ];

  return (
    <article className="flex flex-col">
      {/* Breadcrumb Header Bar */}
      <div className="bg-sand-light border-b border-sand py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Breadcrumbs items={breadcrumbItems} />
          <VerificationBadge label="Draft Article — Client Review" />
        </div>
      </div>

      {/* Article Header & Hero */}
      <header className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-ivory">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-olive-dark hover:text-charcoal"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              All Insights
            </Link>
            <span className="text-stone-brand">•</span>
            <span className="px-2.5 py-0.5 text-xs bg-sand text-charcoal rounded-sm font-medium">
              {post.category}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-charcoal font-normal leading-[1.12]">
            {post.title}
          </h1>

          <p className="text-base sm:text-xl text-charcoal-muted font-serif italic leading-relaxed">
            {post.excerpt}
          </p>

          <div className="pt-4 border-t border-sand flex flex-wrap items-center justify-between gap-4 text-xs text-stone-brandDark">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-sand-dark flex items-center justify-center font-serif text-sm text-charcoal font-semibold">
                SN
              </div>
              <div>
                <span className="font-semibold text-charcoal block">By {post.author.name}</span>
                <span>{post.author.role}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-olive" />
                {post.readTime}
              </span>
              <span className="px-2 py-0.5 bg-sand text-charcoal rounded text-[11px] font-medium">
                {post.status}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Visual Asset */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-sm overflow-hidden bg-sand-dark border border-sand shadow-lg">
          <Image
            src={post.heroImage}
            alt={post.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>
        <div className="mt-2 text-right">
          <span className="text-[10px] text-stone-brandDark italic">
            * Representative architectural visual for editorial draft context.
          </span>
        </div>
      </div>

      {/* Article Body Content */}
      <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-ivory">
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Key Takeaways Callout */}
          <div className="p-6 sm:p-8 bg-sand-light border-l-4 border-olive rounded-sm space-y-3">
            <span className="text-xs uppercase tracking-widest text-olive-dark font-bold block">
              Core Principles &amp; Takeaways
            </span>
            <ul className="space-y-2">
              {post.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-olive flex-shrink-0 mt-1" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Structured Paragraphs and Pull Quotes */}
          {post.contentSections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-charcoal font-normal pt-4">
                {section.heading}
              </h2>
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-base sm:text-lg text-charcoal/90 leading-relaxed font-sans">
                  {p}
                </p>
              ))}
              {section.pullQuote && (
                <figure className="my-8 p-6 sm:p-8 bg-sand-light border-y border-sand text-center">
                  <blockquote className="font-serif text-xl sm:text-2xl text-charcoal font-light italic leading-relaxed">
                    {section.pullQuote}
                  </blockquote>
                </figure>
              )}
            </section>
          ))}

          {/* Author Box */}
          <div className="mt-12 p-6 sm:p-8 bg-sand-light border border-sand rounded-sm flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="w-16 h-16 rounded-full bg-sand-dark flex items-center justify-center font-serif text-xl text-charcoal font-semibold flex-shrink-0">
              SN
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-[11px] uppercase tracking-wider text-olive-dark font-medium block">
                About the Author
              </span>
              <h3 className="font-serif text-2xl text-charcoal">{post.author.name}</h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                {post.author.bio}
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-olive-dark transition-colors inline-flex items-center gap-1"
                >
                  View Full Biography
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Discussion CTA */}
          <div className="mt-10 p-8 bg-charcoal text-ivory rounded-sm text-center space-y-4">
            <h3 className="font-serif text-2xl sm:text-3xl font-light">
              Discuss this perspective on your land or project
            </h3>
            <p className="text-sm text-stone-brand max-w-lg mx-auto">
              If you have questions about Goan land feasibility, statutory planning, or construction execution, reach out directly.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href={`/contact?subject=${encodeURIComponent(post.title)}`}
                className="w-full sm:w-auto px-6 py-3 text-xs uppercase tracking-widest font-semibold bg-ivory text-charcoal hover:bg-sand rounded-sm"
              >
                Inquire With Suheb
              </Link>
              {getWhatsAppLink(`Hello Suheb, I read your article "${post.title}" and would like to discuss it.`) ? (
                <a
                  href={getWhatsAppLink(`Hello Suheb, I read your article "${post.title}" and would like to discuss it.`)!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 text-xs uppercase tracking-widest font-semibold text-ivory border border-stone-brand/40 hover:bg-charcoal-light rounded-sm flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-olive" />
                  Discuss via WhatsApp
                </a>
              ) : (
                <Link
                  href={`/contact?subject=${encodeURIComponent(post.title)}`}
                  className="w-full sm:w-auto px-6 py-3 text-xs uppercase tracking-widest font-semibold text-ivory border border-stone-brand/40 hover:bg-charcoal-light rounded-sm flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-stone-brand" />
                  Discuss (Draft Portal)
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles Section */}
      {relatedPosts.length > 0 && (
        <aside aria-label="Related Insights" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-sand-light border-t border-sand">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <span className="text-xs uppercase tracking-widest text-olive-dark font-medium block">
                Further Reading
              </span>
              <h2 className="font-serif text-3xl text-charcoal">Related Insights</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rel) => (
                <div
                  key={rel.id}
                  className="p-6 bg-ivory rounded-sm border border-sand flex flex-col justify-between space-y-4 hover:border-charcoal transition-colors group"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-olive-dark">
                      {rel.category}
                    </span>
                    <h3 className="font-serif text-xl text-charcoal group-hover:text-olive-dark transition-colors">
                      <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
                    </h3>
                    <p className="text-xs text-charcoal-muted line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </div>
                  <Link
                    href={`/blog/${rel.slug}`}
                    className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-charcoal group-hover:text-olive-dark"
                  >
                    Read Essay
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </aside>
      )}
    </article>
  );
}
