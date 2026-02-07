import { Award, Users, Lightbulb, MessageCircle, ArrowRight } from 'lucide-react';

export function AboutPage() {
  const expertise = [
    {
      icon: Award,
      title: 'Technical Excellence',
      description: 'Hands-on experience with AI platforms, Salesforce ecosystems, cloud infrastructure, and modern development frameworks.'
    },
    {
      icon: Users,
      title: 'Business Perspective',
      description: 'We understand P&L impact and stakeholder dynamics. Technology decisions are always evaluated through a business lens.'
    },
    {
      icon: Lightbulb,
      title: 'Practical Implementation',
      description: 'We prioritize solutions that can be deployed, adopted, and maintained. Sustainability matters as much as innovation.'
    },
    {
      icon: MessageCircle,
      title: 'Transparent Communication',
      description: "Honest timelines, clear trade-offs, and regular progress updates. You'll always know exactly where things stand."
    },
  ];

  const approach = [
    {
      number: '01',
      title: 'Discovery & Assessment',
      description: 'We start by understanding your business context, current challenges, and objectives. This informs every recommendation we make.'
    },
    {
      number: '02',
      title: 'Strategic Planning',
      description: 'Together, we develop a clear roadmap with defined milestones, deliverables, and success metrics aligned to your goals.'
    },
    {
      number: '03',
      title: 'Collaborative Execution',
      description: 'We work alongside your team, maintaining open communication and adapting as needs evolve during the project.'
    },
    {
      number: '04',
      title: 'Sustainable Outcomes',
      description: 'Our goal is to deliver solutions you can maintain and build upon—not create dependencies or technical debt.'
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Header */}
      <section className="pt-32 pb-20 relative bg-surface">
         <div className="container-custom text-center relative z-10">
           {/* Decorative organic shape */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[100px] -z-10"></div>

           <h1 className="text-5xl md:text-7xl font-serif text-text-main mb-8 animate-fade-up">
             Technology partners <br/>focused on your <span className="text-primary italic">success</span>
           </h1>
           <p className="text-xl text-text-muted max-w-3xl mx-auto font-light leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
             We help visionary leaders navigate digital transformation with clarity and confidence. Practical, outcome-focused solutions for complex challenges.
           </p>
         </div>
      </section>

      {/* Mission */}
      <section className="section py-20 relative">
        <div className="container-custom">
          <div className="bg-primary-dark rounded-[2rem] p-8 md:p-16 relative overflow-hidden shadow-card">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4"></div>
            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <span className="text-highlight font-medium tracking-widest uppercase text-sm mb-6 block">Our Mission</span>
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
                To make modern technology accessible and impactful for businesses of all sizes.
              </h2>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light">
                We believe technology should drive measurable results—not create unnecessary complexity. We achieve this by combining deep technical expertise with clear communication, transparent processes, and a commitment to understanding your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section py-20 bg-surface/50">
        <div className="container-custom">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-serif text-text-main mb-4">What We Bring</h2>
             <p className="text-text-muted">Technical depth combined with business acumen</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {expertise.map((item) => (
              <div key={item.title} className="card group hover:bg-surface">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-surface border border-border rounded-xl flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-7 h-7" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-serif font-medium text-text-main mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section py-24">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-border pb-8">
            <div>
              <span className="text-secondary font-medium tracking-widest uppercase text-sm mb-2 block">Our Process</span>
              <h2 className="text-4xl md:text-5xl font-serif text-text-main">
                How We Work
              </h2>
            </div>
            <p className="text-text-muted mt-4 md:mt-0 max-w-md">
              A collaborative, transparent process designed to deliver value at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((step) => (
              <div key={step.number} className="relative group">
                <div className="text-7xl font-serif font-bold text-border/50 mb-6 group-hover:text-primary/20 transition-colors">
                  {step.number}
                </div>
                <h3 className="text-xl font-serif font-medium text-text-main mb-3">
                  {step.title}
                </h3>
                <p className="text-text-muted leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement & CTA */}
      <section className="section bg-surface border-t border-border">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-serif text-text-main mb-8 leading-snug">
              Technology transformation doesn't have to be overwhelming. With the right partner, it becomes a competitive advantage.
            </p>
            <a href="/contact" className="btn btn-primary group">
              Schedule a Conversation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
