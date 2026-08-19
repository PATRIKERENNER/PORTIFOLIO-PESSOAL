import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageSquare, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Serviços', href: '#servicos' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Metodologia', href: '#metodologia' },
    { name: 'Trajetória', href: '#trajetoria' },
    { name: 'Publicações', href: '#publicacoes' },
    { name: 'Contato', href: '#contato' }
  ];

  const whatsappUrl = `https://wa.me/${PERSONAL_INFO.phoneClean}?text=${encodeURIComponent(
    'Olá, Patrike. Gostaria de solicitar uma proposta / análise técnica para um projeto.'
  )}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F8F7F4]/95 backdrop-blur-md border-b border-[#1B1B18]/10 shadow-sm py-3.5'
          : 'bg-[#F8F7F4] border-b border-[#1B1B18]/10 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Zone - Cormorant Garamond Display */}
        <a href="#" className="group flex flex-col">
          <span className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#1B1B18] leading-none">
            Patrike Renner
          </span>
          <span className="font-['Space_Mono'] text-[0.65rem] uppercase tracking-[0.15em] text-[#A68B6E] font-semibold mt-1">
            Arquiteto & Urbanista
          </span>
        </a>

        {/* Desktop Nav Zone - Space Mono Uppercase */}
        <nav className="hidden lg:flex items-center gap-7 font-['Space_Mono'] text-[0.7rem] uppercase tracking-[0.15em] text-[#1B1B18]/70">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#1B1B18] hover:border-b hover:border-[#1B1B18] pb-0.5 transition-colors whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Zone */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-[0.7rem] font-['Space_Mono'] uppercase tracking-wider bg-[#1B1B18] text-[#F8F7F4] hover:bg-[#A68B6E] transition-all font-bold flex items-center gap-1.5 whitespace-nowrap shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>Solicitar Proposta</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 border border-[#1B1B18]/20 bg-white text-[#1B1B18] hover:bg-[#1B1B18] hover:text-[#F8F7F4] transition-colors"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F8F7F4] border-b border-[#1B1B18]/10 px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 font-['Space_Mono'] text-xs uppercase tracking-wider text-[#1B1B18]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 border-b border-[#1B1B18]/5 hover:text-[#A68B6E] transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-40" />
              </a>
            ))}
          </nav>
          
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-[0.7rem] font-['Space_Mono'] uppercase tracking-wider bg-[#1B1B18] text-[#F8F7F4] hover:bg-[#A68B6E] transition-all font-bold flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Solicitar Proposta no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
