import { Brain, Cloud, LayoutDashboard, TrendingUp, ShieldCheck, Code, Check, Flame } from 'lucide-react';

export function ServicesPage() {
  const services = [
    {
      id: 'ai-transformation',
      icon: Brain,
      title: 'AI Transformation',
      subtitle: 'Predictive analytics & Automation',
      description: 'Artificial intelligence offers significant opportunities, but implementation requires careful strategy and execution. We help you identify high-impact use cases, select appropriate technologies, and integrate AI solutions that enhance productivity.',
      capabilities: ['Readiness Assessment', 'Model Training', 'Process Automation', 'Change Management'],
      color: 'text-violet-500',
      bgColor: 'bg-violet-500/10 hover:bg-violet-500 hover:text-white',
      borderColor: 'group-hover:border-violet-500/50',
      tag: 'Trending'
    },
    {
      id: 'salesforce-crm',
      icon: LayoutDashboard,
      title: 'Salesforce CRM',
      subtitle: 'Revenue operations optimization',
      description: 'Salesforce is powerful, but only when configured to match your unique business processes. We help you get more value from your CRM through strategic consulting, custom development, and seamless integrations.',
      capabilities: ['Implementation', 'Custom Workflows', 'Integrations', 'User Adoption'],
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10 hover:bg-blue-500 hover:text-white',
      borderColor: 'group-hover:border-blue-500/50'
    },
    {
      id: 'cloud-infrastructure',
      icon: Cloud,
      title: 'Cloud Infrastructure',
      subtitle: 'Scalable & secure architecture',
      description: 'Modernize your infrastructure to support growth. We help you migrate to the cloud, optimize existing environments, and implement DevOps best practices for faster deployment cycles.',
      capabilities: ['Migration Strategy', 'AWS/Azure/GCP', 'DevOps & CI/CD', 'Cost Optimization'],
      color: 'text-sky-500',
      bgColor: 'bg-sky-500/10 hover:bg-sky-500 hover:text-white',
      borderColor: 'group-hover:border-sky-500/50'
    },
    {
      id: 'cybersecurity',
      icon: ShieldCheck,
      title: 'Enterprise Security',
      subtitle: 'Risk management & compliance',
      description: 'Protect your digital assets with a comprehensive security strategy. We conduct audits, implement robust defenses, and ensure compliance with industry regulations.',
      capabilities: ['Security Audits', 'Compliance (SOC2/HIPAA)', 'Identity Management', 'Threat Detection'],
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10 hover:bg-emerald-500 hover:text-white',
      borderColor: 'group-hover:border-emerald-500/50'
    },
    {
      id: 'software-development',
      icon: Code,
      title: 'Custom Software',
      subtitle: 'Web & mobile applications',
      description: 'Build custom applications that solve unique business problems. Our full-stack engineering team delivers robust, scalable software using modern frameworks and architectural patterns.',
      capabilities: ['Web Applications', 'Mobile Development', 'API Design', 'Legacy Modernization'],
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-500/10 hover:bg-indigo-500 hover:text-white',
      borderColor: 'group-hover:border-indigo-500/50'
    },
    {
      id: 'strategic-consulting',
      icon: TrendingUp,
      title: 'Strategic Consulting',
      subtitle: 'Fractional CTO & Roadmapping',
      description: 'Align technology investments with business goals. We provide executive-level guidance to help you navigate complex technology decisions and build a roadmap for long-term success.',
      capabilities: ['Tech Roadmap', 'Vendor Selection', 'Digital Transformation', 'Team Structure'],
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10 hover:bg-amber-500 hover:text-white',
      borderColor: 'group-hover:border-amber-500/50'
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      {/* Hero - Modern Enterprise Style */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        {/* Background Grid */}
        {/* Background Grid with Fade Out */ }
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"></div>

        <div className="container-custom text-center relative z-10">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-600 mb-8 tracking-wide uppercase">
             <div className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-pulse"></div>
             Our Capabilities
           </div>

           <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 mb-8 tracking-tight leading-[1.1]">
            Technical Excellence for<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Modern Enterprise.</span>
           </h1>

           <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
             We deliver end-to-end technology solutions, from strategic planning to implementation and ongoing optimization.
           </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.id} className={`relative p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-all duration-300 group ${service.borderColor} bg-white h-full flex flex-col`}>
                {/* Optional Tag */}
                {service.tag && (
                  <div className="absolute top-6 right-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-50 border border-violet-100 text-violet-600 text-[11px] font-bold uppercase tracking-wider">
                     <Flame className="w-3 h-3 fill-current" />
                     {service.tag}
                  </div>
                )}

                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 mb-6 ${service.bgColor} ${service.color}`}>
                  <service.icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-display font-bold text-primary mb-1">
                  {service.title}
                </h3>
                <p className="text-sm font-medium text-accent mb-4">
                  {service.subtitle}
                </p>
                <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                <div className="space-y-3 pt-6 border-t border-border/50">
                  {service.capabilities.map((cap) => (
                    <div key={cap} className="flex items-center text-sm text-text-muted font-medium">
                      <div className="w-5 h-5 rounded-full bg-functional-success/10 flex items-center justify-center mr-3 shrink-0">
                         <Check className="w-3 h-3 text-functional-success" />
                      </div>
                      {cap}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Floating Card Design */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="container-custom">
          <div className="relative rounded-[2.5rem] bg-slate-50 overflow-hidden px-6 py-16 text-center border border-slate-100 shadow-sm">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 tracking-tight text-slate-900">Build a future-ready foundation</h2>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-8 font-light leading-relaxed">
                Discuss your project with our engineering leaders. No sales pressure, just technical clarity.
              </p>
              <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white transition-all duration-200 bg-slate-900 rounded-full hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 shadow-md">
                Schedule Technical Discovery
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
