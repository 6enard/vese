import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Impact', href: '#impact' },
    { name: 'Team', href: '#team' },
    { name: 'Merch', href: '#merch' },
    { name: 'News', href: '#news' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img
                src="/logo2.png"
                alt="VESE Foundation Logo"
                className="h-12 w-auto object-contain rounded-lg shadow-md border border-gray-200/50 bg-white"
              />
            </div>
            <div>
              <span className="text-2xl font-bold text-charcoal font-playfair">VESE</span>
              <div className="text-xs text-sage font-lato font-medium">Foundation</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-charcoal hover:text-sage transition-colors duration-200 font-lato font-medium text-sm tracking-wide"
              >
                {item.name}
              </a>
            ))}
            <button className="bg-sage hover:bg-sage/90 text-white px-6 py-3 rounded-full font-lato font-semibold text-sm transition-all duration-200 transform hover:scale-105">
              Support Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-charcoal hover:text-sage transition-colors duration-200 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-6 space-y-1 bg-white border-t border-light">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-charcoal hover:text-sage hover:bg-light rounded-lg transition-colors duration-200 font-lato"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full mt-4 bg-sage hover:bg-sage/90 text-white px-6 py-3 rounded-full font-lato font-semibold transition-colors duration-200">
                Support Us
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}