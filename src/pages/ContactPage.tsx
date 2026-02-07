import { useState, type FormEvent } from 'react';
import { Send, Mail, Clock, ArrowRight } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    jobTitle: '',
    phone: '',
    service: '',
    message: '',
    contactMethod: 'email',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      console.log('Form submitted:', formData);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-background min-h-[80vh] flex items-center justify-center">
        <div className="container-custom max-w-2xl text-center">
          <div className="w-24 h-24 bg-surface border border-border rounded-full flex items-center justify-center mx-auto mb-8 shadow-soft animate-float">
            <Send className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-text-main mb-6">
            Thank you for reaching out!
          </h1>
          <p className="text-xl text-text-muted mb-10 leading-relaxed">
            We've received your inquiry and will get back to you within 24 hours.
          </p>
          <a href="/" className="btn btn-primary">
            Return to Homepage
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      {/* Header */}
      <section className="pt-32 pb-16 relative bg-surface/50">
        <div className="container-custom text-center">
          <span className="text-accent font-medium tracking-widest uppercase text-sm mb-6 block animate-fade-in">Get in Touch</span>
          <h1 className="text-5xl md:text-7xl font-serif text-text-main mb-8 animate-fade-up">
            Let's talk about your <br/><span className="italic text-primary">technology needs</span>
          </h1>
          <p className="text-xl text-text-muted max-w-3xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Whether you're exploring AI implementation, optimizing Salesforce, or planning a digital transformation initiative, we're here to help.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div className="lg:col-span-8">
              <div className="bg-surface p-8 md:p-12 rounded-[2rem] border border-white shadow-soft">
                <h2 className="text-3xl font-serif text-text-main mb-8">
                  Send us a message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Your Information */}
                  <div>
                    <h3 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-6 border-b border-border pb-2">Your Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="fullName" className="block text-sm font-medium text-text-main">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                          placeholder="Jane Doe"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-text-main">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                          placeholder="jane@company.com"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="company" className="block text-sm font-medium text-text-main">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="jobTitle" className="block text-sm font-medium text-text-main">
                          Job Title *
                        </label>
                        <input
                          type="text"
                          id="jobTitle"
                          name="jobTitle"
                          required
                          value={formData.jobTitle}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                        />
                      </div>

                      <div className="md:col-span-2 space-y-2">
                        <label htmlFor="phone" className="block text-sm font-medium text-text-main">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Your Inquiry */}
                  <div>
                    <h3 className="text-sm font-bold text-text-muted uppercase tracking-wider mb-6 border-b border-border pb-2">Your Inquiry</h3>

                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label htmlFor="service" className="block text-sm font-medium text-text-main">
                          What brings you to Tec Elevate? *
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                        >
                          <option value="">Select a service...</option>
                          <option value="ai-transformation">AI Transformation</option>
                          <option value="salesforce-crm">Salesforce CRM</option>
                          <option value="digital-transformation">Digital Transformation</option>
                          <option value="it-project-management">IT Project Management</option>
                          <option value="app-development">App Development</option>
                          <option value="strategic-consulting">Strategic Consulting</option>
                          <option value="not-sure">Not sure / Multiple services</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="block text-sm font-medium text-text-main">
                          Tell us about your needs *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Briefly describe your current challenges or what you're trying to achieve"
                          className="w-full px-4 py-3 bg-white border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-none"
                        />
                      </div>

                      <div className="space-y-3">
                        <label className="block text-sm font-medium text-text-main">
                          Preferred contact method
                        </label>
                        <div className="flex gap-6">
                          {['email', 'phone', 'video'].map((method) => (
                            <label key={method} className="flex items-center cursor-pointer group">
                              <input
                                type="radio"
                                name="contactMethod"
                                value={method}
                                checked={formData.contactMethod === method}
                                onChange={handleChange}
                                className="w-4 h-4 text-primary border-border focus:ring-primary"
                              />
                              <span className="ml-2 text-text-muted capitalize group-hover:text-primary transition-colors">
                                {method === 'video' ? 'Video consultation' : method === 'phone' ? 'Phone call' : 'Email'}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="timeline" className="block text-sm font-medium text-text-main">
                          Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                        >
                          <option value="">Select a timeline...</option>
                          <option value="immediate">Immediate (within 1 month)</option>
                          <option value="near-term">Near-term (1-3 months)</option>
                          <option value="planning">Planning ahead (3-6 months)</option>
                          <option value="exploratory">Exploratory conversation</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary w-full text-lg disabled:opacity-50 disabled:cursor-not-allowed group flex items-center justify-center"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                       {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                    </button>
                    <p className="text-xs text-text-muted mt-4 text-center">
                      We respect your privacy. Your information will only be used to respond to your inquiry.
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-4 space-y-8">
               <div className="sticky top-32">
                  <div className="bg-primary-dark p-8 rounded-[2rem] text-white shadow-card relative overflow-hidden mb-8">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                     <h3 className="text-2xl font-serif mb-6 relative z-10">Direct Contact</h3>

                     <div className="space-y-6 relative z-10">
                        <div className="flex items-start">
                           <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                              <Mail className="w-5 h-5" />
                           </div>
                           <div className="ml-4">
                              <p className="text-white/60 text-sm mb-1">Email Us</p>
                              <a href="mailto:hello@tecelevate.com" className="text-lg font-medium hover:text-highlight transition-colors">
                                 hello@tecelevate.com
                              </a>
                           </div>
                        </div>

                        <div className="flex items-start">
                           <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                              <Clock className="w-5 h-5" />
                           </div>
                           <div className="ml-4">
                              <p className="text-white/60 text-sm mb-1">Office Hours</p>
                              <p className="font-medium">Mon - Fri, 9am - 6pm EST</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="bg-surface rounded-[2rem] p-8 border border-border shadow-soft">
                     <h3 className="text-xl font-serif text-text-main mb-3">
                        Not ready to reach out?
                     </h3>
                     <p className="text-text-muted mb-6">
                        Explore our services to better understand how we can help your business grow.
                     </p>
                     <a href="/services" className="text-primary font-medium hover:text-primary-dark transition-colors inline-flex items-center">
                        View Our Services
                        <ArrowRight className="w-4 h-4 ml-2" />
                     </a>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
