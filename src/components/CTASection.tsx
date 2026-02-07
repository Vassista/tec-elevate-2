import React from 'react';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  title: React.ReactNode;
  description: string;
  primaryAction: {
    text: string;
    href: string;
  };
  className?: string;
}

export function CTASection({ title, description, primaryAction, className = '' }: CTASectionProps) {
  return (
    <section className={`py-20 bg-white border-t border-slate-200 ${className}`}>
      <div className="container-custom">
        <div className="relative rounded-[2.5rem] bg-slate-50 overflow-hidden px-6 py-16 text-center border border-slate-100 shadow-sm">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 tracking-tight text-slate-900">
              {title}
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-8 font-light leading-relaxed">
              {description}
            </p>
            <Link
              to={primaryAction.href}
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white transition-all duration-200 bg-slate-900 rounded-full hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 shadow-md"
            >
              {primaryAction.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
