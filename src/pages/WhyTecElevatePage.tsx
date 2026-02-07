import { CheckCircle, ArrowRight } from 'lucide-react';

export function WhyTecElevatePage() {
  const differentiators = [
    {
      number: '01',
      title: 'Business-First Strategy',
      challenge: 'Many IT firms lead with technology solutions, then try to fit them to your business.',
      approach: "We start with your business objectives and work backward to identify the right technologies. If a solution doesn't drive measurable impact, we won't recommend it.",
      benefit: 'Technology investments that align with strategic goals and deliver ROI.'
    },
    {
      number: '02',
      title: 'Transparent Communication',
      challenge: 'Complex jargon, unclear timelines, and shifting scopes create frustration and mistrust.',
      approach: "We communicate in plain language, provide honest assessments, and set realistic expectations. You'll always understand what's happening and why.",
      benefit: 'Confidence in project progress and no surprises at delivery.'
    },
    {
      number: '03',
      title: 'End-to-End Capability',
      challenge: 'Coordinating multiple vendors for strategy, implementation, and support creates inefficiency.',
      approach: 'We provide comprehensive services—from initial consulting to ongoing optimization—under one roof.',
      benefit: 'Streamlined execution, consistent quality, and a single point of accountability.'
    },
    {
      number: '04',
      title: 'Scalable Solutions',
      challenge: "Quick fixes that don't scale create technical debt and limit future growth.",
      approach: 'We design solutions with scalability in mind, ensuring they can grow with your business and adapt to changing needs.',
      benefit: 'Long-term value and reduced need for costly replacements or rewrites.'
    },
    {
      number: '05',
      title: 'Adoption & Sustainability',
      challenge: 'Technology projects often fail due to poor user adoption or lack of internal capability.',
      approach: 'We prioritize training, documentation, and knowledge transfer. Our goal is to empower your team, not create dependencies.',
      benefit: 'Solutions your team can confidently use, maintain, and enhance over time.'
    },
    {
      number: '06',
      title: 'Cross-Industry Insight',
      challenge: 'Technology patterns vary across industries, but core operational challenges are universal.',
      approach: 'We bring cross-industry experience, applying proven strategies while adapting to your specific context.',
      benefit: 'Fresh perspectives and best practices from multiple sectors.'
    },
  ];

  const clientBenefits = [
    {
      role: 'Founders',
      benefit: 'Strategic technology guidance that supports growth without unnecessary complexity or cost.'
    },
    {
      role: 'CTOs & CIOs',
      benefit: 'Reliable execution partners who understand technical trade-offs and can augment internal teams.'
    },
    {
      role: 'Operations Leaders',
      benefit: 'Process improvements and automation that directly impact efficiency and cost reduction.'
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Header */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-highlight/10 to-transparent opacity-50 blur-3xl -z-10"></div>
        <div className="container-custom text-center">
          <span className="text-primary font-medium tracking-widest uppercase text-sm mb-6 block animate-fade-in">Our Difference</span>
          <h1 className="text-5xl md:text-7xl font-serif text-text-main mb-6 animate-fade-up">
            Why partner with <br/>Tec Elevate?
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Choosing the right technology partner matters. It's not just about code; it's about trust, vision, and execution.
          </p>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20">
        <div className="container-custom">
          {differentiators.map((item, index) => (
            <div
              key={item.number}
              className={`py-16 md:py-20 ${index !== differentiators.length - 1 ? 'border-b border-border' : ''}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                {/* Left Column - Number & Title */}
                <div className="lg:col-span-5 relative">
                  <div className="sticky top-32">
                    <span className="text-9xl font-serif font-bold text-bg-surface absolute -top-16 -left-8 z-[-1] opacity-80"
                          style={{ WebkitTextStroke: '2px var(--color-border)' }}>
                      {item.number}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-text-main mb-6 relative z-10">
                      {item.title}
                    </h2>
                    <div className="w-20 h-1 bg-highlight rounded-full"></div>
                  </div>
                </div>

                {/* Right Column - Content */}
                <div className="lg:col-span-7 space-y-8">
                  <div className="bg-surface p-8 rounded-2xl border border-white shadow-soft hover:shadow-card transition-shadow duration-300">
                    <h3 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-3">
                      The Challenge
                    </h3>
                    <p className="text-lg text-text-main/80 font-serif italic mb-0">
                      "{item.challenge}"
                    </p>
                  </div>

                  <div className="pl-4 border-l-2 border-primary/20">
                    <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                      Our Approach
                    </h3>
                    <p className="text-lg text-text-main leading-relaxed">
                      {item.approach}
                    </p>
                  </div>

                  <div className="bg-highlight/10 p-6 rounded-xl border border-highlight/20 flex items-start">
                     <CheckCircle className="w-6 h-6 text-primary-dark mr-4 flex-shrink-0 mt-1" />
                     <div>
                        <h3 className="text-xs font-bold text-primary-dark uppercase tracking-wider mb-1">
                          Your Benefit
                        </h3>
                        <p className="text-lg text-text-main font-medium">
                          {item.benefit}
                        </p>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Client Benefits */}
      <section className="section bg-surface/50 relative overflow-hidden">
        {/* Decorative elements */}
         <div className="absolute -left-20 top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-text-main mb-4">
              Built for Decision-Makers
            </h2>
            <p className="text-text-muted">Tailored value for every stakeholder</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {clientBenefits.map((item) => (
              <div key={item.role} className="card p-8 group hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-2xl font-serif text-text-main mb-4 group-hover:text-primary transition-colors">
                  {item.role}
                </h3>
                <div className="w-12 h-0.5 bg-border group-hover:bg-primary/50 transition-colors mb-6"></div>
                <p className="text-text-muted leading-relaxed">
                  {item.benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section bg-surface border-t border-border">
        <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-text-main mb-6">
            Experience the Tec Elevate difference
            </h2>
            <p className="text-lg text-text-muted mb-10 max-w-2xl mx-auto">
            Let's discuss your technology challenges and explore how we can help.
            </p>
            <a href="/contact" className="btn btn-primary group">
            Start a Conversation
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
        </div>
      </section>
    </div>
  );
}
