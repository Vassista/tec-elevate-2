import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navigation = [
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Approach', href: '/approach' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md border-b border-border py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-display font-bold text-primary tracking-tight transition-colors"
          >
            Tec Elevate
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-text-muted hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact" className="btn btn-primary px-5 py-2 text-sm rounded-lg">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-text-main hover:bg-surface-highlight rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu overlay */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-border p-6 shadow-xl md:hidden animate-slide-up origin-top">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-lg font-medium text-text-main hover:text-accent py-2 border-b border-border/50 last:border-0"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="btn btn-primary w-full justify-center mt-4"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
