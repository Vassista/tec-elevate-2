import { BarChart, Check, Zap, Target } from 'lucide-react';

export function WhyTecElevatePage() {
  return (
    <div className="bg-background">
      <section className="pt-32 pb-20 bg-primary text-white">
        <div className="container-custom text-center">
          <p className="text-sm font-bold text-accent-light tracking-widest uppercase mb-4">Our Methodology</p>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-8">
            Why leading companies<br />choose Tec Elevate.
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            We don't just deliver code; we deliver certainty. Our proven methodology ensures that every project is delivered on time, on budget, and on spec.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          {/* Comparison / Differentiators */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-surface border border-border p-8 rounded-xl shadow-sm hover:shadow-card transition-shadow">
              <div className="w-12 h-12 bg-functional-success/10 rounded-lg flex items-center justify-center text-functional-success mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-3">Precision Engineering</h3>
              <p className="text-text-muted leading-relaxed">
                We plan twice and code once. Our rigorous architecture phase eliminates technical debt before it starts.
              </p>
            </div>
             <div className="bg-surface border border-border p-8 rounded-xl shadow-sm hover:shadow-card transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-3">Velocity & Quality</h3>
              <p className="text-text-muted leading-relaxed">
                Automated testing, CI/CD pipelines, and modern dev tooling mean we ship features faster without breaking things.
              </p>
            </div>
             <div className="bg-surface border border-border p-8 rounded-xl shadow-sm hover:shadow-card transition-shadow">
              <div className="w-12 h-12 bg-functional-warning/10 rounded-lg flex items-center justify-center text-functional-warning mb-6">
                <BarChart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-3">Transparent ROI</h3>
              <p className="text-text-muted leading-relaxed">
                We track every hour and every commit. You'll always know exactly where your investment is going and what it's returning.
              </p>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-surface-highlight rounded-2xl p-8 md:p-12 border border-border">
             <div className="text-center mb-12">
               <h2 className="text-3xl font-display font-bold text-primary mb-4">The Tec Elevate Standard</h2>
               <p className="text-text-muted">How we compare to traditional agencies and freelancers.</p>
             </div>

             <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse">
                 <thead>
                   <tr className="border-b-2 border-border">
                     <th className="py-4 px-6 text-sm font-bold text-text-muted uppercase tracking-wider w-1/3">Feature</th>
                     <th className="py-4 px-6 text-sm font-bold text-primary uppercase tracking-wider w-1/3 bg-white border-t border-l border-r border-border rounded-t-lg">Tec Elevate</th>
                     <th className="py-4 px-6 text-sm font-bold text-text-muted uppercase tracking-wider w-1/3">Typical Agency</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-border">
                   <tr>
                     <td className="py-4 px-6 font-medium text-text-main">Technical Strategy</td>
                     <td className="py-4 px-6 bg-white border-l border-r border-border font-medium text-functional-success">Holistic & Long-term</td>
                     <td className="py-4 px-6 text-text-muted">Project-based & Short-term</td>
                   </tr>
                   <tr>
                     <td className="py-4 px-6 font-medium text-text-main">Code Quality</td>
                     <td className="py-4 px-6 bg-white border-l border-r border-border font-medium text-functional-success">Enterprise Grade</td>
                     <td className="py-4 px-6 text-text-muted">MVP Quality</td>
                   </tr>
                   <tr>
                     <td className="py-4 px-6 font-medium text-text-main">Communication</td>
                     <td className="py-4 px-6 bg-white border-l border-r border-border font-medium text-functional-success">Direct w/ Engineers</td>
                     <td className="py-4 px-6 text-text-muted">Through Project Managers</td>
                   </tr>
                   <tr>
                     <td className="py-4 px-6 font-medium text-text-main">Pricing Model</td>
                     <td className="py-4 px-6 bg-white border-l border-r border-border font-medium text-functional-success">Transparent & Predictable</td>
                     <td className="py-4 px-6 text-text-muted">Hidden Fees & Change Orders</td>
                   </tr>
                 </tbody>
               </table>
             </div>
          </div>
        </div>
      </section>

      {/* Trust Badges / Certifications */}
      <section className="py-16 bg-white border-t border-border">
         <div className="container-custom text-center">
            <p className="text-sm font-semibold text-text-muted uppercase tracking-widest mb-8">Our Certifications & Standards</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
               <div className="flex items-center space-x-2 text-text-main font-semibold">
                  <Check className="w-5 h-5 text-accent" />
                  <span>SOC2 Compliant</span>
               </div>
               <div className="flex items-center space-x-2 text-text-main font-semibold">
                  <Check className="w-5 h-5 text-accent" />
                  <span>AWS Certified</span>
               </div>
               <div className="flex items-center space-x-2 text-text-main font-semibold">
                  <Check className="w-5 h-5 text-accent" />
                  <span>Salesforce Partners</span>
               </div>
               <div className="flex items-center space-x-2 text-text-main font-semibold">
                  <Check className="w-5 h-5 text-accent" />
                  <span>Agile Methodology</span>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
