import React from 'react';
import { MessageSquare, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${PERSONAL_INFO.phoneClean}?text=${encodeURIComponent(
    'Olá, Patrike. Encontrei seu portfólio profissional e gostaria de solicitar um orçamento / consultoria técnica.'
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp com Arquiteto Patrike Renner"
        className="group flex items-center gap-2.5 px-4 py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-['Space_Mono'] text-[0.68rem] uppercase tracking-wider font-bold shadow-xl border border-emerald-600 transition-all duration-300 active:scale-95"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-200"></span>
        </span>
        <MessageSquare className="w-4 h-4" />
        <span className="hidden sm:inline">Atendimento WhatsApp</span>
        <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </a>
    </div>
  );
};
