import { Link } from 'react-router-dom';
import { ArrowRight, Target, MessageSquare, Handshake, Cpu, BarChart3, Cloud, Layers, Smartphone, Lightbulb } from 'lucide-react';

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

  const values = [
    {
      icon: Target,
      title: 'Outcome-Focused',
      description: 'We deliver solutions that solve real business problems—improving workflows, reducing costs, and enabling growth.'
    },
    {
      icon: MessageSquare,
      title: 'Clear Communication',
      description: 'Transparent processes and honest timelines. We speak your language, not just technical jargon.'
    },
    {
      icon: Handshake,
      title: 'Strategic Partnership',
      description: 'From initial strategy to ongoing support, we align technology decisions with your business objectives.'
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
            <h1 className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Technology that drives <span className="text-transparent bg-clip-text bg-gradient-accent font-medium italic">results</span>, not complexity.
            </h1>
            <p className="text-xl md:text-2xl text-text-muted mb-10 max-w-2xl animate-fade-up" style={{ animationDelay: '0.4s' }}>
              We help visionary leaders navigate digital transformation with clarity, confidence, and purpose.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.6s' }}>
              <Link to="/contact" className="btn btn-primary group">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services" className="btn btn-secondary group">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="section bg-surface relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group p-6 animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 text-accent rounded-2xl mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-glow group-hover:-translate-y-1">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-medium mb-3 text-text-main group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section relative">
        {/* Decorative background shape */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -z-10"></div>

        <div className="container-custom">
          <div className="mb-16 md:mb-24">
            <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">Our Expertise</span>
            <h2 className="max-w-2xl">
              Comprehensive technology solutions for modern business
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.href}
                className="card group h-full flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center text-primary mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-medium mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                <span className="inline-flex items-center text-sm font-medium text-primary group-hover:translate-x-1 transition-transform">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/services" className="btn btn-secondary group">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof Estimate */}
      <section className="py-24 bg-surface/50 border-y border-border overflow-hidden">
        <div className="container-custom text-center">
          <p className="text-lg text-text-muted mb-12 max-w-2xl mx-auto font-light">
            Trusted by forward-thinking companies to drive innovation and efficiency
          </p>

          <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Placeholder Logos with Editorial Style */}
             {[1, 2, 3, 4].map((item) => (
               <div key={item} className="h-8 md:h-10 w-32 bg-text-main/10 rounded mix-blend-multiply"></div>
             ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section pb-32">
        <div className="container-custom">
          <div className="bg-primary-dark rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden text-center shadow-card">
            {/* Abstract shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-white text-3xl md:text-5xl font-light mb-6">
                Ready to elevate your strategy?
              </h2>
              <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
                Let's discuss how we can help your business improve efficiency, scale operations, and stay competitive.
              </p>
              <Link to="/contact" className="btn bg-white text-primary-dark hover:bg-surface hover:scale-105 shadow-lg">
                Start the Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
