
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActiveRoute = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname === href;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-portfolio-dark/90 backdrop-blur-md shadow-2xl border-b border-portfolio-teal/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <Link to="/" className="text-3xl font-bold text-portfolio-cream hover:text-portfolio-teal transition-all duration-300 hover-lift">
            <span className="gradient-text">Portfolio</span>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-portfolio-cream transition-all duration-300 relative group text-lg font-medium ${
                  isActiveRoute(item.href) 
                    ? 'text-portfolio-teal' 
                    : 'hover:text-portfolio-teal'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-portfolio-teal to-portfolio-cream rounded-full transition-all duration-300 ${
                  isActiveRoute(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Enhanced Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-portfolio-cream hover:text-portfolio-teal transition-all duration-300 p-2 rounded-lg hover:bg-portfolio-teal/10"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-portfolio-dark/95 backdrop-blur-md rounded-2xl mt-4 p-6 animate-fade-in border-2 border-portfolio-teal/20 shadow-2xl">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block w-full text-left py-4 px-4 rounded-xl transition-all duration-300 text-lg font-medium ${
                  isActiveRoute(item.href)
                    ? 'text-portfolio-teal bg-portfolio-teal/10 font-bold'
                    : 'text-portfolio-cream hover:text-portfolio-teal hover:bg-portfolio-teal/5'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
