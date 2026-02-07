import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-background min-h-screen">
      <section className="pt-32 pb-20 bg-surface-highlight border-b border-border">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-primary mb-6">
            Let's build something <span className="text-accent">great</span>.
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Ready to start your digital transformation journey? Our team is ready to help you navigate the complex technology landscape.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Contact Info */}
            <div className="lg:col-span-4 space-y-8">
              <div>
                <h3 className="text-xl font-display font-bold text-primary mb-4">Contact Information</h3>
                <p className="text-text-muted mb-6">
                  Fill out the form or reach out to us directly. We typically respond within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-surface-highlight rounded-lg flex items-center justify-center text-accent mr-4 border border-border">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">Email</p>
                    <a href="mailto:hello@tecelevate.com" className="text-text-muted hover:text-accent transition-colors">hello@tecelevate.com</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-surface-highlight rounded-lg flex items-center justify-center text-accent mr-4 border border-border">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">Phone</p>
                    <p className="text-text-muted">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-surface-highlight rounded-lg flex items-center justify-center text-accent mr-4 border border-border">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">Office</p>
                    <p className="text-text-muted">
                      123 Innovation Drive<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <h4 className="text-sm font-semibold text-primary mb-4">Office Hours</h4>
                <p className="text-sm text-text-muted">
                  Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                  Weekend: Closed
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-8">
              <div className="bg-white border border-border rounded-2xl p-8 md:p-10 shadow-sm">
                <h2 className="text-2xl font-display font-bold text-primary mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-text-main">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-surface-highlight border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-text-main">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-surface-highlight border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-text-main">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-surface-highlight border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-text-main">How can we help?</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-surface-highlight border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all resize-none"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary w-full md:w-auto">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
