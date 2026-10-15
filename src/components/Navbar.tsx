import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Research', href: '#research' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="top"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#fbf7f0]/95 backdrop-blur-md shadow-sm border-b border-[#684a37]/15 py-3'
          : 'bg-[#fbf7f0]/85 backdrop-blur-sm border-b border-transparent py-4'
      }`}
    >
      <nav className="max-w-[1120px] mx-auto px-5 flex items-center justify-between" aria-label="Main navigation">
        <a
          href="#top"
          className="text-xl font-black tracking-tight text-[#35271f] hover:text-[#684a37] transition-colors"
        >
          MAHEEN<span className="text-[#684a37]">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`text-[0.88rem] font-medium transition-colors relative py-1 ${
                  isActive ? 'text-[#35271f] font-semibold' : 'text-[#79695d] hover:text-[#35271f]'
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 bottom-0 w-full h-[2px] bg-[#684a37] transition-transform duration-300 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden inline-flex items-center gap-2 border border-[#684a37]/20 bg-[#fffdf9] rounded-xl px-3 py-2 text-[#35271f] hover:bg-[#eee2d2] transition-colors focus:outline-none focus:ring-2 focus:ring-[#684a37]/40"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          <span className="text-xs font-semibold uppercase tracking-wider">
            {mobileMenuOpen ? 'Close' : 'Menu'}
          </span>
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-5 pt-3 pb-6 bg-[#fffdf9] border-b border-[#684a37]/20 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  className={`px-3 py-2.5 rounded-lg text-base transition-colors ${
                    isActive
                      ? 'bg-[#eee2d2] text-[#35271f] font-semibold'
                      : 'text-[#79695d] hover:bg-[#fbf7f0] hover:text-[#35271f]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
