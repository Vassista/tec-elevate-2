import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
    { name: 'About Us', href: '/about' },
    { name: 'Why Tec Elevate', href: '/why-tec-elevate' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/80 backdrop-blur-md shadow-soft py-4' : 'bg-transparent py-6'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl md:text-3xl font-serif font-bold text-primary tracking-tight hover:opacity-80 transition-opacity"
          >
            Tec Elevate
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="nav-link text-sm font-medium tracking-wide"
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact" className="btn btn-primary px-6 py-2 text-sm shadow-lg shadow-primary/20">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-text-main hover:bg-surface rounded-full transition-colors z-50"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu overlay */}
        <div
          className={`fixed inset-0 bg-background/95 backdrop-blur-xl z-40 md:hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'opacity-100 pointer-events-auto translate-x-0' : 'opacity-0 pointer-events-none translate-x-full'
          }`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-3xl font-serif font-light text-text-main hover:text-primary transition-colors"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn btn-primary text-lg w-full max-w-xs mt-8"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
