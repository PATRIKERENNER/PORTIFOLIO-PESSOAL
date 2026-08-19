import React from 'react';
import { ArrowUp, Award, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F8F7F4] border-t border-[#1B1B18]/10 py-14 text-[#1B1B18]/70 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end justify-between">
          <div className="md:col-span-6 space-y-2">
            <div className="font-['Cormorant_Garamond'] font-bold text-2xl uppercase tracking-tight text-[#1B1B18]">
              Patrike Renner
            </div>
            <p className="text-[#1B1B18]/60 text-xs max-w-md font-['Inter']">
              Arquiteto e Urbanista • 3º Sargento do Exército Brasileiro (CRO-11) • Especialista em Neuroarquitetura & Geoprocessamento.
            </p>
          </div>

          <div className="md:col-span-6 flex flex-wrap items-center md:justify-end gap-6 font-['Space_Mono'] text-xs">
            <div className="flex items-center gap-2 text-[#1B1B18]">
              <span className="w-2 h-2 bg-[#A68B6E] rounded-full"></span>
              <span className="text-[0.65rem] uppercase tracking-widest">Brasília - DF</span>
            </div>
            <a
              href={PERSONAL_INFO.lattes}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1B1B18] hover:text-[#A68B6E] flex items-center gap-1.5"
            >
              <Award className="w-3.5 h-3.5 text-[#A68B6E]" />
              <span className="text-[0.65rem] uppercase tracking-wider">Lattes ID: {PERSONAL_INFO.lattesId}</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 border border-[#1B1B18]/20 bg-white text-[#1B1B18] hover:bg-[#1B1B18] hover:text-[#F8F7F4] transition-colors flex items-center gap-1 cursor-pointer"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[0.65rem] uppercase font-['Space_Mono'] tracking-wider">Topo</span>
            </button>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-[#1B1B18]/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-['Space_Mono'] text-[0.65rem] text-[#1B1B18]/50 uppercase tracking-wider">
          <div>
            © {new Date().getFullYear()} PATRIKE MAYKO RENNER REIS DE ABREU — REGISTROS ATIVOS JUNTO AO CAU/BR E CFT/BR
          </div>
          <div>
            ARQUITETURA COM PRECISÃO
          </div>
        </div>

      </div>
    </footer>
  );
};
