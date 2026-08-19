import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, MessageSquare, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Trajetória', href: '#trajetoria' },
    { name: 'Publicações', href: '#publicacoes' },
    { name: 'Contato', href: '#contato' }
  ];

  const whatsappHref = `https://wa.me/${PERSONAL_INFO.phoneClean}?text=${encodeURIComponent('Olá Patrike, gostaria de conversar sobre um projeto.')}`;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#F8F7F4]/95 backdrop-blur-md border-b border-[#1B1B18]/10 shadow-sm py-3.5' : 'bg-[#F8F7F4] border-b border-[#1B1B18]/10 py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="group flex flex-col">
          <span className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#1B1B18] leading-none">Patrike Renner</span>
          <span className="font-['Space_Mono'] text-[0.65rem] uppercase tracking-[0.15em] text-[#A68B6E] font-semibold mt-1">Arquiteto & Urbanista</span>
        </a>

        <nav className="hidden xl:flex items-center gap-6 font-['Space_Mono'] text-[0.65rem] uppercase tracking-[0.12em] text-[#1B1B18]/70">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-[#1B1B18] hover:border-b hover:border-[#1B1B18] pb-0.5 transition-colors whitespace-nowrap">{link.name}</a>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-3">
          <a href={PERSONAL_INFO.lattes} target="_blank" rel="noopener noreferrer" className="px-3.5 py-2 text-[0.65rem] font-['Space_Mono'] uppercase tracking-wider border border-[#1B1B18]/20 bg-transparent text-[#1B1B18] hover:bg-[#1B1B18] hover:text-[#F8F7F4] transition-all flex items-center gap-1.5 whitespace-nowrap">
            <Award className="w-3.5 h-3.5 text-[#A68B6E]" /><span>Lattes</span><ExternalLink className="w-3 h-3 opacity-60" />
          </a>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-[0.68rem] font-['Space_Mono'] uppercase tracking-wider font-bold bg-[#1B1B18] text-[#F8F7F4] hover:bg-[#A68B6E] transition-all flex items-center gap-1.5 whitespace-nowrap shadow-sm">
            <MessageSquare className="w-3.5 h-3.5" /><span>Contato</span>
          </a>
        </div>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-[#1B1B18] hover:bg-[#1B1B18]/5 border border-[#1B1B18]/20 rounded-none xl:hidden" aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'} aria-expanded={mobileMenuOpen}>
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#F8F7F4] border-b border-[#1B1B18]/10 px-5 pt-3 pb-6 space-y-4">
          <div className="flex flex-col space-y-2 font-['Space_Mono'] text-[0.75rem] uppercase tracking-wider">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 text-[#1B1B18] hover:bg-[#1B1B18]/5 transition-colors">{link.name}</a>
            ))}
          </div>
          <div className="pt-3 border-t border-[#1B1B18]/10 flex flex-col gap-2">
            <a href={PERSONAL_INFO.lattes} target="_blank" rel="noopener noreferrer" className="w-full justify-center px-4 py-2.5 text-[0.7rem] font-['Space_Mono'] uppercase tracking-wider border border-[#1B1B18]/20 text-[#1B1B18] flex items-center gap-2"><Award className="w-4 h-4 text-[#A68B6E]" /><span>Currículo Lattes CNPq</span></a>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="w-full justify-center px-4 py-2.5 text-[0.7rem] font-['Space_Mono'] uppercase tracking-wider font-bold bg-[#1B1B18] text-[#F8F7F4] flex items-center gap-2"><MessageSquare className="w-4 h-4" /><span>Conversar no WhatsApp</span></a>
          </div>
        </div>
      )}
    </header>
  );
};
