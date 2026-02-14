
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2 glass shadow-lg' : 'py-6 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-tr from-rose-500 to-amber-500 rounded-xl flex items-center justify-center text-white shadow-lg">
            <i className="fas fa-camera text-xl"></i>
          </div>
          <span className={`text-2xl font-extrabold tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
            M3<span className="text-rose-600">FOTO</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {['About', 'Services', 'Portfolio', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-slate-600 hover:text-rose-600 font-semibold transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="#book"
            className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-rose-200 transition-all hover:scale-105"
          >
            Book Session
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-900 text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass shadow-2xl py-6 flex flex-col items-center space-y-6 animate-fadeIn">
          {['About', 'Services', 'Portfolio', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-bold text-slate-800"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#book"
            className="bg-rose-600 text-white px-10 py-3 rounded-full font-bold"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
