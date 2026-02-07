import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Cloud,
  Cpu,
  BarChart3,
  Layers,
  Smartphone,
  Lightbulb
} from 'lucide-react';

export function HomePage() {
  const services = [
    {
      title: 'AI Transformation',
      description: 'Implement AI solutions that enhance productivity and decision-making across your organization.',
      icon: Cpu,
      href: '/services#ai-transformation'
    },
    {
      title: 'Salesforce CRM',
      description: 'Optimize your Salesforce platform to improve customer relationships and drive revenue growth.',
      icon: BarChart3,
      href: '/services#salesforce-crm'
    },
    {
      title: 'Digital Transformation',
      description: 'Modernize systems, automate processes, and adopt cloud technologies for operational excellence.',
      icon: Cloud,
      href: '/services#digital-transformation'
    },
    {
      title: 'IT Project Management',
      description: 'Execute technology initiatives on time and on budget with proven governance frameworks.',
      icon: Layers,
      href: '/services#it-project-management'
    },
    {
      title: 'App Development',
      description: 'Build web and mobile applications that solve customer needs and support business goals.',
      icon: Smartphone,
      href: '/services#app-development'
    },
    {
      title: 'Strategic Consulting',
      description: 'Develop technology roadmaps that align IT investments with business strategy.',
      icon: Lightbulb,
      href: '/services#strategic-consulting'
    },
  ];



  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        {/* Background Elements */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-gradient-accent rounded-full blur-[120px] opacity-20 animate-float"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: '-3s' }}></div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-surface-highlight border border-border text-sm font-medium text-text-muted mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-functional-success mr-2"></span>
              Strategic Technology Partners
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary tracking-tight mb-8 animate-slide-up">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-accent">Integrity</span><br />
              into every system.
            </h1>

            <p className="text-xl text-text-muted max-w-2xl leading-relaxed mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              We build scalable, secure, and intelligent technology foundations for high-growth enterprises. No buzzwords, just results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Link to="/contact" className="btn btn-primary">
                Start a Project
              </Link>
              <Link to="/services" className="btn btn-secondary group">
                View Capabilities
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Grid / Bento Section */}
      <section className="section bg-surface-highlight border-y border-border">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-primary">
              Technical Capabilities
            </h2>
            <Link to="/services" className="text-accent hover:text-accent-dark font-medium inline-flex items-center">
              Explore all services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.href}
                className="card group hover:border-accent/50 hover:bg-white"
              >
                <div className="w-12 h-12 rounded-lg bg-surface-highlight border border-border flex items-center justify-center text-primary group-hover:text-accent group-hover:bg-accent/5 transition-colors mb-6">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <p className="text-center text-sm font-semibold text-text-light uppercase tracking-widest mb-12">
            Trusted by modern teams
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Technical looking placeholders - clear geometric shapes */}
             {[1, 2, 3, 4, 5].map((i) => (
               <div key={i} className="h-8 w-32 bg-primary/20 rounded-md"></div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
            Ready to scale your infrastructure?
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10">
            Schedule a technical consultation to discuss your roadmap and architectural needs.
          </p>
          <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100 border-none">
            Book Technical Audit
          </Link>
        </div>
      </section>
    </div>
  );
}
