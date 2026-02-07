import { Users, Target, Shield, Clock } from 'lucide-react';

export function AboutPage() {
  const stats = [
    { label: 'Years Experience', value: '15+' },
    { label: 'Enterprise Projects', value: '200+' },
    { label: 'Client Retention', value: '98%' },
    { label: 'Certified Experts', value: '50+' },
  ];

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="pt-32 pb-20 border-b border-border bg-gradient-to-b from-surface-highlight to-background">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-primary mb-8">
              We bridge the gap between <span className="text-accent">strategy</span> and <span className="text-accent">execution</span>.
            </h1>
            <p className="text-xl text-text-muted leading-relaxed">
              Tec Elevate is a technology consultancy built for the modern era. We reject the bloated, slow processes of traditional firms in favor of agility, precision, and measurable impact.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-display font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-text-muted font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                Our Philosophy
              </h2>
              <div className="space-y-6 text-lg text-text-muted">
                <p>
                  Technology should enable business, not restrict it. Too often, we see companies trapped by legacy systems or paralyzed by over-engineered solutions.
                </p>
                <p>
                  We believe in <strong>Pragmatic Innovation</strong>. This means we choose boring technology when it works, and cutting-edge solutions when they offer a genuine competitive advantage.
                </p>
                <p>
                  Our team is composed of senior engineers and strategists who have "been there, done that." We don't send juniors to learn on your dime.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
               <div className="space-y-6 mt-8">
                  <div className="bg-surface-highlight p-6 rounded-xl border border-border">
                    <Target className="w-8 h-8 text-accent mb-4" />
                    <h3 className="font-bold text-primary mb-2">Outcome Focused</h3>
                    <p className="text-sm text-text-muted">We measure success by business KPIs, not lines of code.</p>
                  </div>
                  <div className="bg-surface-highlight p-6 rounded-xl border border-border">
                    <Shield className="w-8 h-8 text-accent mb-4" />
                    <h3 className="font-bold text-primary mb-2">Security First</h3>
                    <p className="text-sm text-text-muted">Enterprise-grade security is baked into everything we build.</p>
                  </div>
               </div>
               <div className="space-y-6">
                  <div className="bg-surface-highlight p-6 rounded-xl border border-border">
                    <Users className="w-8 h-8 text-accent mb-4" />
                    <h3 className="font-bold text-primary mb-2">Senior Team</h3>
                    <p className="text-sm text-text-muted">Direct access to experts, no middlemen.</p>
                  </div>
                  <div className="bg-surface-highlight p-6 rounded-xl border border-border">
                    <Clock className="w-8 h-8 text-accent mb-4" />
                    <h3 className="font-bold text-primary mb-2">Rapid Delivery</h3>
                    <p className="text-sm text-text-muted">We ship fast and iterate based on real feedback.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Culture */}
      <section className="py-24 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Built by Engineers, for Engineers</h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-10">
            We foster a culture of technical excellence, continuous learning, and radical transparency.
          </p>
          <a href="/contact" className="btn bg-white text-primary border-none hover:bg-white/90">
            Join Our Team
          </a>
        </div>
      </section>
    </div>
  );
}
