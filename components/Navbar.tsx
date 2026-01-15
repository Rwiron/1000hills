
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate?: (view: 'home' | 'project' | 'team', sectionId?: string) => void;
  isSubPage?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, isSubPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (e: React.MouseEvent, target: 'home' | 'team', sectionId?: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(target, sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed w-full z-[60] transition-all duration-300 ${isScrolled || isMenuOpen || isSubPage ? 'bg-white py-4 border-b border-black/5 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="/" onClick={(e) => handleNavClick(e, 'home', 'hero')} className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-[#f69110] flex items-center justify-center font-bold text-black text-lg transition-transform group-hover:rotate-90">H</div>
            <span className="font-extrabold text-xl tracking-tighter text-black">1000 HILLS</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 items-center">
            {['about', 'services', 'projects'].map((item) => (
              <a 
                key={item}
                href={`#${item}`} 
                onClick={(e) => handleNavClick(e, 'home', item)}
                className={`text-xs font-bold uppercase tracking-widest transition-colors relative group text-black hover:text-[#f69110]`}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#f69110] transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="/team" 
              onClick={(e) => handleNavClick(e, 'team')}
              className={`text-xs font-bold uppercase tracking-widest transition-colors relative group text-black hover:text-[#f69110]`}
            >
              Team
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#f69110] transition-all group-hover:w-full"></span>
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'home', 'contact')}
              className="px-5 py-2 border-2 border-black text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all text-black"
            >
              Contact
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 items-end justify-center w-8 h-8 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span className={`h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'w-8 rotate-45 translate-y-2' : 'w-8'}`}></span>
            <span className={`h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-6'}`}></span>
            <span className={`h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-4'}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[55] bg-white transition-transform duration-500 ease-in-out transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="h-full flex flex-col justify-center px-10 gap-8">
          {['about', 'services', 'projects', 'contact'].map((item) => (
            <a 
              key={item}
              href={`#${item}`} 
              onClick={(e) => handleNavClick(e, 'home', item)}
              className="text-4xl font-black uppercase tracking-tighter hover:text-[#f69110] transition-colors"
            >
              {item}
            </a>
          ))}
          <a 
            href="/team" 
            onClick={(e) => handleNavClick(e, 'team')}
            className="text-4xl font-black uppercase tracking-tighter hover:text-[#f69110] transition-colors"
          >
            Team
          </a>
          <div className="mt-12 pt-8 border-t border-black/10">
            <p className="text-[10px] font-black uppercase tracking-widest text-black/40 mb-4">Regional HQ / Kigali</p>
            <p className="text-lg font-bold">+250 788 340 478</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
