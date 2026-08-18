import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Trigger initial slide down animation
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 50) {
          setShow(false);
        } else {
          setShow(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const navLinks = ['Home', 'About', 'Service', 'Project', 'Contact'];

  return (
    <>
      <nav
        aria-label="Main Navigation"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out ${
          show ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        } ${isMenuOpen ? 'bg-black/95 backdrop-blur-md' : 'bg-transparent'}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4 sm:px-8 md:px-12 md:py-6 w-full">
          {/* Logo */}
          <a
            href="#home"
            className="text-white font-black text-lg sm:text-xl md:text-2xl tracking-widest uppercase cursor-pointer relative z-50 hover:text-[#ccff00] transition-colors"
          >
            Sankeerth
          </a>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 text-xs lg:text-sm hover:text-[#ccff00] transition-colors uppercase tracking-wider font-medium py-1 px-2"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMenuOpen}
            className="md:hidden text-white hover:text-[#ccff00] transition-colors relative z-50 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ccff00]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#0a0a0a]/98 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center gap-6 sm:gap-8 px-4 w-full max-w-sm">
          {navLinks.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-white text-2xl sm:text-3xl font-black uppercase tracking-widest hover:text-[#ccff00] transition-all duration-500 py-3 px-6 w-full text-center rounded-lg hover:bg-white/5 active:scale-95 ${
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
