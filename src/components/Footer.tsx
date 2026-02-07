import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-surface-highlight border-t border-border pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-display font-bold text-primary mb-6 block">
              Tec Elevate
            </Link>
            <p className="text-text-muted mb-6 max-w-xs">
              Empowering businesses through intelligent technology solutions and strategic digital transformation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-text-muted hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-text-muted hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-text-muted hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-text-main mb-4">Services</h3>
            <ul className="space-y-3">
              {['AI Transformation', 'Salesforce CRM', 'Digital Strategy', 'App Development'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-text-muted hover:text-accent transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-text-main mb-4">Company</h3>
            <ul className="space-y-3">
              {['About Us', 'Why Tec Elevate', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Contact' ? '/contact' : '/about'} className="text-text-muted hover:text-accent transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-text-main mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-text-muted">
              <li>hello@tecelevate.com</li>
              <li>+1 (555) 123-4567</li>
              <li>New York, NY</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-text-light">
          <p>© {new Date().getFullYear()} Tec Elevate. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-text-main transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-text-main transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
