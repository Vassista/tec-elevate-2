import { Link } from 'react-router-dom';
import { CTASection } from '../components/CTASection';
import {
  ArrowRight,
  Cloud,
  Cpu,
  BarChart3,
  Layers,
  Smartphone,
  Lightbulb,
  ShieldCheck,
  Database,
  Server,
  Box,
  Code2,
  Globe
} from 'lucide-react';

export function HomePage() {
  const services = [
    {
      title: 'AI Transformation',
      description: 'Implement AI solutions that enhance productivity and decision-making across your organization.',
      icon: Cpu,
      href: '/services#ai-transformation',
      color: 'text-violet-500',
      bgColor: 'bg-violet-500/10',
      hoverColor: 'group-hover:text-violet-500 group-hover:bg-violet-500/10'
    },
    {
      title: 'Salesforce CRM',
      description: 'Optimize your Salesforce platform to improve customer relationships and drive revenue growth.',
      icon: BarChart3,
      href: '/services#salesforce-crm',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      hoverColor: 'group-hover:text-blue-500 group-hover:bg-blue-500/10'
    },
    {
      title: 'Digital Transformation',
      description: 'Modernize systems, automate processes, and adopt cloud technologies for operational excellence.',
      icon: Cloud,
      href: '/services#digital-transformation',
      color: 'text-sky-500',
      bgColor: 'bg-sky-500/10',
      hoverColor: 'group-hover:text-sky-500 group-hover:bg-sky-500/10'
    },
    {
      title: 'IT Project Management',
      description: 'Execute technology initiatives on time and on budget with proven governance frameworks.',
      icon: Layers,
      href: '/services#it-project-management',
      color: 'text-rose-500',
      bgColor: 'bg-rose-500/10',
      hoverColor: 'group-hover:text-rose-500 group-hover:bg-rose-500/10'
    },
    {
      title: 'App Development',
      description: 'Build web and mobile applications that solve customer needs and support business goals.',
      icon: Smartphone,
      href: '/services#app-development',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-500/10',
      hoverColor: 'group-hover:text-indigo-500 group-hover:bg-indigo-500/10'
    },
    {
      title: 'Strategic Consulting',
      description: 'Develop technology roadmaps that align IT investments with business strategy.',
      icon: Lightbulb,
      href: '/services#strategic-consulting',
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
      hoverColor: 'group-hover:text-amber-500 group-hover:bg-amber-500/10'
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
              Elevating <span className="text-transparent bg-clip-text bg-gradient-accent">Integrity</span><br />
              in every system.
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
                className="p-8 rounded-3xl border border-border bg-white shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1 block"
              >
                <div className={`w-14 h-14 rounded-2xl border border-border flex items-center justify-center transition-colors mb-6 ${service.bgColor} ${service.color}`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-display font-bold text-primary mb-3">
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

      {/* Engineering Excellence Section - Scrolling Ticker */}
      <section className="py-24 bg-white border-t border-gray-100 overflow-hidden">
        <div className="container-custom mb-16 text-center">
           <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-[0.2em]">
            Engineering DNA
          </h3>
        </div>

        <div className="relative w-full">
          {/* Enhanced Gradients for Vercel-like fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none"></div>

          {/* Row 1: Principles (Left Scroll) */}
          <div className="flex w-max animate-scroll hover:pause group">
            {[...Array(4)].map((_, i) => (
              <div key={`row1-${i}`} className="flex gap-8 shrink-0 pr-8">
                 {/* Cloud Native */}
                 <div className="flex items-center gap-4 px-5 py-3 rounded-lg border border-gray-100 bg-white/50 hover:border-gray-200 hover:bg-gray-50/50 transition-all duration-300">
                   <div className="p-2 rounded-md bg-blue-50 text-blue-600">
                     <Cloud className="w-5 h-5" />
                   </div>
                   <div className="text-left">
                     <div className="font-medium text-gray-900 text-sm">Cloud Native</div>
                     <div className="text-xs text-gray-500">Scalable Infrastructure</div>
                   </div>
                 </div>

                 {/* Modern Stack */}
                 <div className="flex items-center gap-4 px-5 py-3 rounded-lg border border-gray-100 bg-white/50 hover:border-gray-200 hover:bg-gray-50/50 transition-all duration-300">
                   <div className="p-2 rounded-md bg-emerald-50 text-emerald-600">
                     <Cpu className="w-5 h-5" />
                   </div>
                   <div className="text-left">
                     <div className="font-medium text-gray-900 text-sm">Modern Stack</div>
                     <div className="text-xs text-gray-500">Future-proof Code</div>
                   </div>
                 </div>

                 {/* Data Driven */}
                 <div className="flex items-center gap-4 px-5 py-3 rounded-lg border border-gray-100 bg-white/50 hover:border-gray-200 hover:bg-gray-50/50 transition-all duration-300">
                   <div className="p-2 rounded-md bg-violet-50 text-violet-600">
                     <BarChart3 className="w-5 h-5" />
                   </div>
                   <div className="text-left">
                     <div className="font-medium text-gray-900 text-sm">Data Driven</div>
                     <div className="text-xs text-gray-500">Actionable Insights</div>
                   </div>
                 </div>

                 {/* Secure by Design */}
                 <div className="flex items-center gap-4 px-5 py-3 rounded-lg border border-gray-100 bg-white/50 hover:border-gray-200 hover:bg-gray-50/50 transition-all duration-300">
                   <div className="p-2 rounded-md bg-amber-50 text-amber-600">
                     <ShieldCheck className="w-5 h-5" />
                   </div>
                   <div className="text-left">
                     <div className="font-medium text-gray-900 text-sm">Secure Core</div>
                     <div className="text-xs text-gray-500">Best Practices</div>
                   </div>
                 </div>

                 {/* DevOps Culture */}
                 <div className="flex items-center gap-4 px-5 py-3 rounded-lg border border-gray-100 bg-white/50 hover:border-gray-200 hover:bg-gray-50/50 transition-all duration-300">
                   <div className="p-2 rounded-md bg-indigo-50 text-indigo-600">
                     <Layers className="w-5 h-5" />
                   </div>
                   <div className="text-left">
                     <div className="font-medium text-gray-900 text-sm">DevOps Culture</div>
                     <div className="text-xs text-gray-500">CI/CD Pipeline</div>
                   </div>
                 </div>
              </div>
            ))}
          </div>

          <div className="h-8"></div>

          {/* Row 2: Technology Stack (Reverse Scroll) */}
          <div className="flex w-max animate-scroll-reverse hover:pause group">
            {[...Array(4)].map((_, i) => (
              <div key={`row2-${i}`} className="flex gap-8 shrink-0 pr-8">
                 {/* Frontend */}
                 <div className="flex items-center gap-4 px-5 py-3 rounded-lg border border-gray-100 bg-white/50 hover:border-gray-200 hover:bg-gray-50/50 transition-all duration-300">
                   <div className="p-2 rounded-md bg-sky-50 text-sky-600">
                     <Code2 className="w-5 h-5" />
                   </div>
                   <div className="text-left">
                     <div className="font-medium text-gray-900 text-sm">React & TS</div>
                     <div className="text-xs text-gray-500">Frontend</div>
                   </div>
                 </div>

                 {/* Backend */}
                 <div className="flex items-center gap-4 px-5 py-3 rounded-lg border border-gray-100 bg-white/50 hover:border-gray-200 hover:bg-gray-50/50 transition-all duration-300">
                   <div className="p-2 rounded-md bg-emerald-50 text-emerald-600">
                     <Server className="w-5 h-5" />
                   </div>
                   <div className="text-left">
                     <div className="font-medium text-gray-900 text-sm">Node & Python</div>
                     <div className="text-xs text-gray-500">Backend</div>
                   </div>
                 </div>

                 {/* Infrastructure */}
                 <div className="flex items-center gap-4 px-5 py-3 rounded-lg border border-gray-100 bg-white/50 hover:border-gray-200 hover:bg-gray-50/50 transition-all duration-300">
                   <div className="p-2 rounded-md bg-orange-50 text-orange-600">
                     <Box className="w-5 h-5" />
                   </div>
                   <div className="text-left">
                     <div className="font-medium text-gray-900 text-sm">Docker & K8s</div>
                     <div className="text-xs text-gray-500">Infrastructure</div>
                   </div>
                 </div>

                 {/* Database */}
                 <div className="flex items-center gap-4 px-5 py-3 rounded-lg border border-gray-100 bg-white/50 hover:border-gray-200 hover:bg-gray-50/50 transition-all duration-300">
                   <div className="p-2 rounded-md bg-indigo-50 text-indigo-600">
                     <Database className="w-5 h-5" />
                   </div>
                   <div className="text-left">
                     <div className="font-medium text-gray-900 text-sm">PostgreSQL</div>
                     <div className="text-xs text-gray-500">Database</div>
                   </div>
                 </div>

                 {/* Cloud */}
                 <div className="flex items-center gap-4 px-5 py-3 rounded-lg border border-gray-100 bg-white/50 hover:border-gray-200 hover:bg-gray-50/50 transition-all duration-300">
                   <div className="p-2 rounded-md bg-blue-50 text-blue-600">
                     <Globe className="w-5 h-5" />
                   </div>
                   <div className="text-left">
                     <div className="font-medium text-gray-900 text-sm">AWS & Azure</div>
                     <div className="text-xs text-gray-500">Cloud</div>
                   </div>
                 </div>

                  {/* Mobile - React Native */}
                 <div className="flex items-center gap-4 px-5 py-3 rounded-lg border border-gray-100 bg-white/50 hover:border-gray-200 hover:bg-gray-50/50 transition-all duration-300">
                   <div className="p-2 rounded-md bg-pink-50 text-pink-600">
                     <Smartphone className="w-5 h-5" />
                   </div>
                   <div className="text-left">
                     <div className="font-medium text-gray-900 text-sm">React Native</div>
                     <div className="text-xs text-gray-500">Mobile</div>
                   </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Floating Card Design */}
      <CTASection
        title="Ready to scale your infrastructure?"
        description="Join the forward-thinking companies building their future with Tec Elevate."
        primaryAction={{ text: "Start Your Transformation", href: "/contact" }}
      />


    </div>
  );
}
