import { Brain, CheckCircle2, Users, Layers, Lock, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ApproachPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section - Standardized */}
      {/* Hero - Modern Enterprise Style */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        {/* Background Grid */}
        {/* Background Grid with Fade Out */ }
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"></div>

        <div className="container-custom text-center relative z-10">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-600 mb-8 tracking-wide uppercase">
             <div className="w-1.5 h-1.5 rounded-full bg-slate-500 animate-pulse"></div>
             Built by Engineers
           </div>

           <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 mb-8 tracking-tight leading-[1.1]">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">New Standard.</span>
           </h1>

           <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
             Traditional agencies sell hours. We sell outcomes. Experience the difference of working with a principal-only engineering team.
           </p>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="section bg-surface-highlight/30">
        <div className="container-custom">
           {/* Header removed as requested */}

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
              {/* Card 1: Large - Talent */}
              <div className="md:col-span-2 bg-white rounded-3xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Users className="w-32 h-32 text-indigo-500" />
                 </div>
                 <div className="relative z-10">
                   <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6">
                     <Users className="w-6 h-6" />
                   </div>
                   <h3 className="text-2xl font-display font-bold text-primary mb-3">Top 1% Talent Network</h3>
                   <p className="text-text-muted leading-relaxed max-w-md">
                     We don't hire juniors. Every engineer on your project is a senior or principal level expert with at least 7 years of experience shipping production code at scale.
                   </p>
                 </div>
              </div>

              {/* Card 2: Tall - AI-Native */}
              <div className="md:row-span-2 bg-primary rounded-3xl p-8 border border-primary shadow-sm text-white relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent opacity-50"></div>
                 <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-accent-light mb-6 backdrop-blur-sm">
                        <Brain className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-display font-bold text-white mb-3">AI-Native</h3>
                      <p className="text-white/70 leading-relaxed">
                        We don't just bolt on AI. We build intelligence into the core of your infrastructure for predictive scaling and automated operations.
                      </p>
                    </div>
                    <div className="mt-8 pt-8 border-t border-white/10">
                       <div className="text-4xl font-bold text-white mb-1">10x</div>
                       <div className="text-sm text-white/50 uppercase tracking-widest">Efficiency Gain</div>
                    </div>
                 </div>
              </div>

              {/* Card 3: Small - Security */}
              <div className="bg-white rounded-3xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow group">
                 <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6">
                    <Lock className="w-6 h-6" />
                 </div>
                 <h3 className="text-xl font-display font-bold text-primary mb-2">Security First</h3>
                 <p className="text-text-muted text-sm">Enterprise-grade compliance (SOC2) baked into every line of code.</p>
              </div>

              {/* Card 4: Small - Architecture */}
              <div className="bg-white rounded-3xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow group">
                 <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 mb-6">
                    <Layers className="w-6 h-6" />
                 </div>
                 <h3 className="text-xl font-display font-bold text-primary mb-2">Scalable Arch</h3>
                 <p className="text-text-muted text-sm">Systems designed to handle millions of users from day one.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Modern vs Traditional Comparison */}
      <section className="py-24 bg-white border-y border-border">
         <div className="container-custom">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-display font-bold text-primary">The Choice is Clear</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
               {/* Traditional Agency */}
               <div className="p-8 rounded-3xl border border-dashed border-border bg-surface-highlight/30 opacity-70 hover:opacity-100 transition-opacity">
                  <h3 className="text-xl font-bold text-text-muted mb-6 flex items-center">
                    <XCircle className="w-6 h-6 mr-3 text-text-muted" />
                    Traditional Agencies
                  </h3>
                  <ul className="space-y-4">
                     {[
                       "Junior devs learning on your dime",
                       "Billable hours incentive (slower is better)",
                       "Opaque communication layers",
                       "Spaghetti code & technical debt",
                       "Weeks to onboard"
                     ].map((item) => (
                       <li key={item} className="flex items-start text-text-muted">
                         <XCircle className="w-5 h-5 mr-3 text-red-300 shrink-0 mt-0.5" />
                         {item}
                       </li>
                     ))}
                  </ul>
               </div>

               {/* Tec Elevate */}
               <div className="p-8 rounded-3xl border border-accent/20 bg-accent/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                  <h3 className="text-xl font-bold text-primary mb-6 flex items-center">
                    <CheckCircle2 className="w-6 h-6 mr-3 text-accent" />
                    Tec Elevate
                  </h3>
                  <ul className="space-y-4">
                     {[
                       "Senior & Principal Engineers only",
                       "Outcome-based pricing (results matter)",
                       "Direct access to your engineering team",
                       "Clean, tested, scalable code",
                       "Day 1 Impact"
                     ].map((item) => (
                       <li key={item} className="flex items-start text-primary font-medium">
                         <CheckCircle2 className="w-5 h-5 mr-3 text-accent shrink-0 mt-0.5" />
                         {item}
                       </li>
                     ))}
                  </ul>
               </div>
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
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 tracking-tight text-slate-900">
                Ready to upgrade?
              </h2>
              <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-8 font-light leading-relaxed">
                Join the forward-thinking companies building their future with Tec Elevate.
              </p>
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white transition-all duration-200 bg-slate-900 rounded-full hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 shadow-md">
                Start Your Transformation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
