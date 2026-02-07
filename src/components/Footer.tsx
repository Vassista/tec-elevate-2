import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = {
    services: [
      { name: 'AI Transformation', href: '/services#ai-transformation' },
      { name: 'Salesforce CRM', href: '/services#salesforce-crm' },
      { name: 'Digital Transformation', href: '/services#digital-transformation' },
      { name: 'IT Project Management', href: '/services#it-project-management' },
      { name: 'App Development', href: '/services#app-development' },
      { name: 'Strategic Consulting', href: '/services#strategic-consulting' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Why Tec Elevate', href: '/why-tec-elevate' },
      { name: 'Contact', href: '/contact' },
    ],
  };

  return (
    <footer className="bg-primary-dark text-white relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

      {/* Organic divider */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-background clip-organic-1 rotate-180 translate-y-[-1px]"></div>

      <div className="container-custom pt-32 pb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16">
          {/* Brand */}
          <div className="md:col-span-1 space-y-6">
            <Link to="/" className="text-3xl font-serif font-bold text-white tracking-tight">
              Tec Elevate
            </Link>
            <p className="text-white/80 leading-relaxed font-light">
              Technology that drives results, not complexity. Partnering with visionary leaders to build the future.
            </p>
            <div className="flex space-x-4">
              {/* Social icons would go here - using placeholders with hover effects */}
              {[1, 2, 3].map((i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary-dark transition-all duration-300">
                  <span className="sr-only">Social Link</span>
                  <div className="w-4 h-4 bg-current rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-serif font-medium text-highlight mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-white/70 hover:text-white transition-colors text-sm tracking-wide"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-serif font-medium text-highlight mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-white/70 hover:text-white transition-colors text-sm tracking-wide"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-serif font-medium text-highlight mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="mailto:hello@tecelevate.com"
                  className="text-2xl font-serif hover:text-highlight transition-colors block mb-2"
                >
                  hello@tecelevate.com
                </a>
                <span className="text-white/60">Reply within 24 hours</span>
              </li>
              <li className="text-white/80 pt-4 border-t border-white/10">
                <span className="block font-medium mb-1">Office Hours</span>
                Monday - Friday<br />
                9:00 AM - 6:00 PM EST
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
          <p>© {currentYear} Tec Elevate. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
