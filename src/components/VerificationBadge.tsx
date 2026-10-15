import React from 'react';
import { AlertCircle } from 'lucide-react';

interface VerificationBadgeProps {
  label?: string;
  type?: 'banner' | 'pill';
  className?: string;
}

export const VerificationBadge: React.FC<VerificationBadgeProps> = ({
  label = "Awaiting Final Client Verification",
  type = "pill",
  className = "",
}) => {
  if (type === "banner") {
    return (
      <div className={`bg-stone-brandSubtle/70 border border-stone-brand/40 px-4 py-2.5 rounded-sm flex items-center gap-2.5 text-xs text-charcoal-light ${className}`}>
        <AlertCircle className="w-4 h-4 text-olive flex-shrink-0" />
        <span className="font-sans">
          <strong className="font-medium text-charcoal">Draft & Verification Notice:</strong> {label}
        </span>
      </div>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-sans font-medium tracking-wide uppercase bg-sand-light text-charcoal-muted border border-sand-dark/60 ${className}`}
      title="Content flagged for final client verification"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-olive animate-pulse" />
      {label}
    </span>
  );
};
