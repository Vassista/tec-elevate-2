import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-900 overflow-hidden relative">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="container-custom relative z-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          {/* Brand - Spans 4 columns */}
          <div className="lg:col-span-4">
            <Link to="/" className="text-2xl font-display font-bold text-white mb-6 block tracking-tight">
              Tec Elevate
            </Link>
            <p className="text-slate-400 mb-8 max-w-sm leading-relaxed">
              Building the digital infrastructure for tomorrow's market leaders. Secure, scalable, and engineered for growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Spacer - 1 column */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Services - 2.5 columns */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-4">
              {['AI Transformation', 'Salesforce CRM', 'Digital Strategy', 'App Development'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-slate-400 hover:text-white transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company - 2.5 columns */}
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-4">
              {['About Us', 'Approach', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Contact' ? '/contact' : item === 'Approach' ? '/approach' : '/about'} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - 2.5 columns */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold text-white mb-6">Get in Touch</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start">
                <span className="block text-white mb-1 mr-2">Email:</span>
                <a href="mailto:hello@tecelevate.com" className="hover:text-white transition-colors">hello@tecelevate.com</a>
              </li>
              <li className="flex items-start">
                <span className="block text-white mb-1 mr-2">Phone:</span>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <span className="block text-white mb-1 mr-2">Office:</span>
                <span>123 Innovation Dr,<br/>New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Tec Elevate. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
