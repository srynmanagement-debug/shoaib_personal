import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  alignment?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  alignment = 'left',
  light = false,
  className = "",
}) => {
  const isCenter = alignment === 'center';

  return (
    <div className={`mb-10 sm:mb-14 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'} ${className}`}>
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-3.5 ${isCenter ? 'justify-center' : 'justify-start'}`}>
          <span className="w-8 h-px bg-olive/60" />
          <span className={`text-[11px] sm:text-xs tracking-widest uppercase font-medium ${light ? 'text-sand' : 'text-olive-dark'}`}>
            {eyebrow}
          </span>
          {isCenter && <span className="w-8 h-px bg-olive/60" />}
        </div>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.15] tracking-tight ${
          light ? 'text-ivory' : 'text-charcoal'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            light ? 'text-stone-brandLight' : 'text-charcoal-muted'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
