import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUp, FileDown, Sparkles } from 'lucide-react';
import { NAV_ITEMS, PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-3 shadow-lg border-b border-cyan-500/15'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg p-1"
            aria-label="Potluri Harish Portfolio Home"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center text-slate-950 font-extrabold text-lg shadow-neon-blue group-hover:scale-105 transition-transform">
              H
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                Potluri Harish
              </span>
              <span className="text-[10px] font-mono text-cyan-400/80 tracking-wider">
                CSE &bull; 2027
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-950/60 border border-cyan-500/40 shadow-neon-blue'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Quick Actions (Resume download + Mobile Menu Button) */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.resumePath}
              download="Potluri_Harish_Resume.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500/20 to-violet-500/20 hover:from-cyan-500/30 hover:to-violet-500/30 text-cyan-200 border border-cyan-500/40 text-xs font-semibold tracking-wide transition shadow-neon-blue focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <FileDown className="w-3.5 h-3.5 text-cyan-400" />
              Resume
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-slate-900/80 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden glass-panel mt-3 mx-4 rounded-2xl border border-slate-700/80 p-5 shadow-2xl animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const sectionId = item.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                      isActive
                        ? 'text-cyan-300 bg-cyan-950/70 border border-cyan-500/50 shadow-neon-blue'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="pt-3 border-t border-slate-800 mt-2">
                <a
                  href={PERSONAL_INFO.resumePath}
                  download="Potluri_Harish_Resume.pdf"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-slate-950 font-bold text-sm shadow-neon-blue"
                >
                  <FileDown className="w-4 h-4" />
                  Download Resume PDF
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-slate-900/90 text-cyan-400 hover:text-white border border-cyan-500/50 hover:bg-cyan-500 hover:text-slate-950 shadow-neon-blue backdrop-blur-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 hover:scale-110"
          aria-label="Scroll back to top of page"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
};
