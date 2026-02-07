import { Users, Target, Shield, Zap } from 'lucide-react';
import { HeroSection } from '../components/HeroSection';
import { CTASection } from '../components/CTASection';

const stats = [
  { label: 'Years Experience', value: '15+' },
  { label: 'Enterprise Projects', value: '200+' },
  { label: 'Client Retention', value: '98%' },
  { label: 'Certified Experts', value: '50+' },
];

const leaders = [
  {
    name: 'Alex Rivera',
    role: 'Chief Technology Officer',
    bio: 'Ex-Google Principal Engineer with 15 years of experience scaling distributed systems.',
    initials: 'AR'
  },
  {
    name: 'Sarah Chen',
    role: 'VP of Engineering',
    bio: 'Specializes in AI implementation and building high-velocity engineering cultures.',
    initials: 'SC'
  },
  {
    name: 'Marcus Thorne',
    role: 'Head of Product',
    bio: 'Bridge between business strategy and technical execution. Previously at McKinsey Digital.',
    initials: 'MT'
  }
];

export function AboutPage() {

  return (
    <div className="bg-background min-h-screen">
      {/* Hero - Modern Enterprise Style */}
      <HeroSection
        badgeText="Who We Are"
        title={<>We bridge the gap between<br /><span className="text-transparent bg-clip-text bg-gradient-accent">strategy</span> and <span className="text-transparent bg-clip-text bg-gradient-accent">execution.</span></>}
        description="Tec Elevate is a technology consultancy built for the modern era. We reject the bloated, slow processes of traditional firms in favor of agility, precision, and measurable impact."
      />

      {/* Leadership Section */}
      <section className="section bg-white border-y border-gray-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Leadership Team</h2>
              <p className="text-slate-500 text-lg">
                Built by engineers, for engineers. Our leadership team brings decades of experience from top-tier tech companies.
              </p>
            </div>
            <div className="hidden md:block pb-2">
              <a href="/careers" className="text-sm font-medium text-slate-900 border-b border-slate-300 hover:border-slate-900 transition-colors pb-0.5">
                Join our team &rarr;
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((leader) => (
              <div key={leader.name} className="group relative">
                <div className="aspect-[4/5] bg-slate-100 rounded-2xl overflow-hidden relative mb-6">
                   {/* Gradient Placeholder for Image */}
                   <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 flex items-end p-6">
                     <span className="text-9xl font-bold text-white/20 select-none group-hover:scale-110 transition-transform duration-700 origin-bottom-left">
                       {leader.initials}
                     </span>
                   </div>

                   {/* Hover Overlay */}
                   <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-300"></div>
                </div>

                <h3 className="text-xl font-display font-bold text-slate-900 mb-1">{leader.name}</h3>
                <p className="text-sm font-medium text-blue-600 mb-3">{leader.role}</p>
                <p className="text-sm text-slate-500 leading-relaxed border-l-2 border-slate-100 pl-4">
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar - Light Theme */}
      <section className="bg-white py-20 border-y border-slate-100 relative overflow-hidden">
        {/* Subtle Grid on Light */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-left group">
                <div className="text-5xl md:text-6xl font-display font-bold mb-2 tracking-tight text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-violet-600 transition-all duration-300 transform group-hover:-translate-y-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 font-medium uppercase tracking-widest border-t border-slate-100 pt-4 inline-block w-full md:w-auto group-hover:border-blue-600/30 transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy / Values Section - Bento Grid Style */}
      <section className="section bg-slate-50 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-blue-50/50 to-transparent rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="container-custom relative z-10">
          <div className="mb-20 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
              Pragmatic Innovation
            </h2>
            <div className="space-y-4 text-lg text-slate-500 leading-relaxed">
              <p>
                Technology should enable business, not restrict it. Too often, we see companies trapped by legacy systems or paralyzed by over-engineered solutions.
              </p>

            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
             {/* Senior Talent - Wide Card (Span 2) */}
             <div className="md:col-span-2 bg-white rounded-[2rem] p-10 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                    <Users className="w-40 h-40 text-indigo-500" />
                 </div>
                 <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
                   <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-4 md:mb-0 shrink-0">
                     <Users className="w-8 h-8" />
                   </div>
                   <div>
                     <h3 className="text-2xl font-display font-bold text-slate-900 mb-3">Senior Talent Only</h3>
                     <p className="text-slate-500 leading-relaxed text-lg max-w-lg">
                       Our team consists of principal engineers and architects. You get direct access to experts who have solved your problems before, not juniors learning on the job.
                     </p>
                   </div>
                 </div>
             </div>

             {/* Rapid Velocity - Tall Card (Row Span 2) - Styled like Approach Page */}
             <div className="md:row-span-2 bg-primary rounded-3xl p-8 border border-primary shadow-sm text-white relative overflow-hidden group flex flex-col justify-between">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent opacity-50"></div>

                <div className="relative z-10 h-full flex flex-col justify-between">
                   <div>
                     <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-accent-light mb-6 backdrop-blur-sm">
                       <Zap className="w-6 h-6" />
                     </div>
                     <h3 className="text-2xl font-display font-bold text-white mb-3">Velocity</h3>
                     <p className="text-white/70 leading-relaxed">
                       Shipping is the heartbeat of engineering. We use modern CI/CD, automated testing, and trunk-based development to release value daily.
                     </p>
                   </div>

                   <div className="mt-8 pt-8 border-t border-white/10">
                      <div className="text-4xl font-bold text-white mb-1">2x</div>
                      <div className="text-sm text-white/50 uppercase tracking-widest">Faster Delivery</div>
                   </div>
                </div>
             </div>

             {/* Outcome Focused - Standard Card */}
             <div className="bg-white rounded-[2rem] p-10 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-3">Outcome Focused</h3>
                <p className="text-slate-500 leading-relaxed">
                  We don't just ship code; we deliver business results. Every architectural decision is mapped back to ROI.
                </p>
             </div>

             {/* Security First - Standard Card */}
             <div className="bg-white rounded-[2rem] p-10 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 text-emerald-600 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-3">Security First</h3>
                <p className="text-slate-500 leading-relaxed">
                  Security isn't an afterthought. We implement enterprise-grade protection (SOC2, HIPAA) from day one.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Join CTA - Floating Card Design */}
      <CTASection
        title="Want to work with the best?"
        description="We're always looking for exceptional engineering talent. If you obsess over code quality and impact, we want to talk."
        primaryAction={{ text: "Check Open Positions", href: "/contact" }}
      />
    </div>
  );
}
