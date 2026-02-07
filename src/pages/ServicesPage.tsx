import { Brain, Cloud, Wrench, Smartphone, LayoutDashboard, TrendingUp, ArrowRight, Check } from 'lucide-react';

export function ServicesPage() {
  const services = [
    {
      id: 'ai-transformation',
      icon: Brain,
      title: 'AI Transformation',
      tagline: 'Turn AI potential into practical business results',
      description: 'Artificial intelligence offers significant opportunities, but implementation requires careful strategy and execution. We help you identify high-impact use cases, select appropriate technologies, and integrate AI solutions that enhance productivity.',
      deliverables: [
        'AI readiness assessment and strategy',
        'Use case identification and ROI modeling',
        'Implementation of AI tools',
        'Model training and optimization',
        'Change management and training',
        'Ongoing optimization'
      ],
      impact: 'Reduce manual workload, accelerate decision-making, and unlock insights from your data.'
    },
    {
      id: 'salesforce-crm',
      icon: LayoutDashboard,
      title: 'Salesforce CRM',
      tagline: 'Maximize your Salesforce investment',
      description: 'Salesforce is powerful, but only when configured to match your unique business processes. We help you get more value from your CRM through strategic consulting, custom development, seamless integrations, and ongoing support.',
      deliverables: [
        'Implementation and migration',
        'Custom configuration & automation',
        'Integration with existing tools',
        'Data management & dashboards',
        'User training and adoption',
        'Ongoing administration'
      ],
      impact: 'Improve pipeline visibility, enhance customer relationships, and streamline operations.'
    },
    {
      id: 'digital-transformation',
      icon: Cloud,
      title: 'Digital Transformation',
      tagline: 'Modernize operations for sustainable growth',
      description: 'Digital transformation is about more than technology—it\'s about reimagining how your business operates. We help you automate manual processes, migrate to cloud platforms, and modernize legacy systems.',
      deliverables: [
        'Process automation & workflow optimization',
        'Cloud migration & modernization',
        'Legacy system replacement',
        'Data architecture management',
        'Security and compliance',
        'Digital capability assessments'
      ],
      impact: 'Reduce operational costs, improve efficiency, and create a foundation for innovation.'
    },
    {
      id: 'it-project-management',
      icon: TrendingUp,
      title: 'IT Project Management',
      tagline: 'Execute technology initiatives with confidence',
      description: 'Technology projects require careful planning and rigorous execution. Our project management expertise ensures your IT initiatives are delivered on time, within budget, and aligned with business objectives.',
      deliverables: [
        'Project planning & scope definition',
        'Resource & timeline management',
        'Risk identification & mitigation',
        'Stakeholder communication',
        'Quality assurance coordination',
        'Post-implementation support'
      ],
      impact: 'Minimize delays, control costs, reduce risk, and ensure successful adoption.'
    },
    {
      id: 'app-development',
      icon: Smartphone,
      title: 'App Development',
      tagline: 'Custom applications that solve real problems',
      description: 'Whether you need a customer-facing mobile app or an internal web platform, we build applications that are reliable, scalable, and designed around user needs with sustainable architecture.',
      deliverables: [
        'Requirements & technical planning',
        'UI/UX design focused on usability',
        'Web & mobile development',
        'API development & integration',
        'Testing & performance optimization',
        'Maintenance & enhancements'
      ],
      impact: 'Improve engagement, streamline operations, and create new revenue streams.'
    },
    {
      id: 'strategic-consulting',
      icon: Wrench,
      title: 'Strategic Consulting',
      tagline: 'Align technology with business strategy',
      description: 'Technology decisions have long-term implications. We help leadership teams develop clear technology roadmaps, evaluate investment priorities, and ensure IT initiatives support broader business goals.',
      deliverables: [
        'Technology strategy & roadmap',
        'IT assessment & gap analysis',
        'Vendor evaluation & selection',
        'Business-IT alignment',
        'Digital maturity assessments',
        'Executive advisory'
      ],
      impact: 'Make informed investments, avoid costly missteps, and build a scalable foundation.'
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Page Header */}
      <section className="pt-32 pb-20 relative">
         <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-accent opacity-5 blur-3xl -z-10"></div>
         <div className="container-custom text-center">
          <span className="text-secondary font-medium tracking-widest uppercase text-sm mb-6 block animate-fade-in">Our Services</span>
          <h1 className="text-5xl md:text-7xl font-serif text-text-main mb-8 animate-fade-up">
            Solutions designed for <br/><span className="italic text-primary">impact</span>
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Comprehensive IT services that address the real challenges facing modern businesses. From AI implementation to strategic planning.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="pb-24">
        <div className="container-custom">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`py-16 md:py-24 ${index !== services.length - 1 ? 'border-b border-border' : ''}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                {/* Left Column - Icon & Title */}
                <div className="lg:col-span-5 sticky top-32">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-surface border border-border rounded-2xl mb-8 shadow-soft text-primary">
                    <service.icon className="w-10 h-10" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif text-text-main mb-4">
                    {service.title}
                  </h2>
                  <p className="text-xl text-primary-light font-medium mb-6 font-serif italic">
                    {service.tagline}
                  </p>
                  <div className="hidden lg:block w-16 h-1 bg-primary rounded-full mt-8"></div>
                </div>

                {/* Right Column - Content */}
                <div className="lg:col-span-7 space-y-10">
                  <p className="text-lg md:text-xl text-text-muted leading-relaxed">
                    {service.description}
                  </p>

                  <div className="bg-surface rounded-3xl p-8 md:p-10 border border-white shadow-soft">
                    <h3 className="text-xl font-serif text-text-main mb-6">
                      What We Deliver
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.deliverables.map((item) => (
                        <div key={item} className="flex items-start group">
                          <span className="bg-primary/10 text-primary rounded-full p-1 mr-3 mt-0.5 group-hover:bg-primary group-hover:text-white transition-colors">
                            <Check className="w-3 h-3" strokeWidth={3} />
                          </span>
                          <span className="text-text-muted text-sm md:text-base">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-l-4 border-highlight pl-6 py-2">
                    <h3 className="text-sm font-bold text-highlight uppercase tracking-wider mb-2">
                      Business Impact
                    </h3>
                    <p className="text-text-main font-medium italic text-lg">
                      "{service.impact}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section bg-surface/50 border-t border-border">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-text-main mb-6">
            Not sure which service fits?
          </h2>
          <p className="text-lg text-text-muted mb-10 max-w-2xl mx-auto">
            Schedule a consultation and we'll help you identify the right approach for your business.
          </p>
          <a href="/contact" className="btn btn-primary group">
            Talk to Our Team
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
}
