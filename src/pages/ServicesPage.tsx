import { Brain, Cloud, LayoutDashboard, TrendingUp, ShieldCheck, Code, Check } from 'lucide-react';

export function ServicesPage() {
  const services = [
    {
      id: 'ai-transformation',
      icon: Brain,
      title: 'AI Transformation',
      subtitle: 'Predictive analytics & Automation',
      description: 'Artificial intelligence offers significant opportunities, but implementation requires careful strategy and execution. We help you identify high-impact use cases, select appropriate technologies, and integrate AI solutions that enhance productivity.',
      capabilities: ['Readiness Assessment', 'Model Training', 'Process Automation', 'Change Management'],
    },
    {
      id: 'salesforce-crm',
      icon: LayoutDashboard,
      title: 'Salesforce CRM',
      subtitle: 'Revenue operations optimization',
      description: 'Salesforce is powerful, but only when configured to match your unique business processes. We help you get more value from your CRM through strategic consulting, custom development, and seamless integrations.',
      capabilities: ['Implementation', 'Custom Workflows', 'Integrations', 'User Adoption'],
    },
    {
      id: 'cloud-infrastructure',
      icon: Cloud,
      title: 'Cloud Infrastructure',
      subtitle: 'Scalable & secure architecture',
      description: 'Modernize your infrastructure to support growth. We help you migrate to the cloud, optimize existing environments, and implement DevOps best practices for faster deployment cycles.',
      capabilities: ['Migration Strategy', 'AWS/Azure/GCP', 'DevOps & CI/CD', 'Cost Optimization'],
    },
    {
      id: 'cybersecurity',
      icon: ShieldCheck,
      title: 'Enterprise Security',
      subtitle: 'Risk management & compliance',
      description: 'Protect your digital assets with a comprehensive security strategy. We conduct audits, implement robust defenses, and ensure compliance with industry regulations.',
      capabilities: ['Security Audits', 'Compliance (SOC2/HIPAA)', 'Identity Management', 'Threat Detection'],
    },
    {
      id: 'software-development',
      icon: Code,
      title: 'Custom Software',
      subtitle: 'Web & mobile applications',
      description: 'Build custom applications that solve unique business problems. Our full-stack engineering team delivers robust, scalable software using modern frameworks and architectural patterns.',
      capabilities: ['Web Applications', 'Mobile Development', 'API Design', 'Legacy Modernization'],
    },
    {
      id: 'strategic-consulting',
      icon: TrendingUp,
      title: 'Strategic Consulting',
      subtitle: 'Fractional CTO & Roadmapping',
      description: 'Align technology investments with business goals. We provide executive-level guidance to help you navigate complex technology decisions and build a roadmap for long-term success.',
      capabilities: ['Tech Roadmap', 'Vendor Selection', 'Digital Transformation', 'Team Structure'],
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-16 bg-surface-highlight border-b border-border">
        <div className="container-custom text-center">
          <p className="text-sm font-semibold text-accent mb-4 tracking-widest uppercase">Our Capabilities</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
            Technical Excellence for<br />Modern Enterprise
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            We deliver end-to-end technology solutions, from strategic planning to implementation and ongoing optimization.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="card group hover:border-accent">
                <div className="w-12 h-12 bg-surface-highlight rounded-lg flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors mb-6 border border-border">
                  <service.icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-display font-bold text-primary mb-1">
                  {service.title}
                </h3>
                <p className="text-sm font-medium text-accent mb-4">
                  {service.subtitle}
                </p>
                <p className="text-text-muted text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.capabilities.map((cap) => (
                    <div key={cap} className="flex items-center text-sm text-text-light">
                      <Check className="w-4 h-4 text-functional-success mr-2" />
                      {cap}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-display font-bold mb-6">Build a future-ready foundation</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Discuss your project with our engineering leaders. No sales pressure, just technical clarity.
          </p>
          <a href="/contact" className="btn bg-white text-primary hover:bg-white/90">
            Schedule Technical Discovery
          </a>
        </div>
      </section>
    </div>
  );
}
