import React from 'react';

interface HeroSectionProps {
  badgeText: string;
  title: React.ReactNode;
  description: string;
  className?: string;
}

export const HeroSection = React.memo(function HeroSection({ badgeText, title, description, className = '' }: HeroSectionProps) {
  return (
    <section className={`pt-32 pb-24 relative overflow-hidden ${className}`}>
      {/* Background Grid with Fade Out */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"></div>

      <div className="container-custom text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-600 mb-8 tracking-wide uppercase">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-pulse"></div>
          {badgeText}
        </div>

        <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 mb-8 tracking-tight leading-[1.1]">
          {title}
        </h1>

        <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
          {description}
        </p>
      </div>
    </section>
  );
});
