import React, { useState } from 'react';
import { 
  ShieldCheck, 
  HelpCircle, 
  ChevronDown, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2, 
  Award,
  Sparkles
} from 'lucide-react';
import { TRUST_FACTORS, FAQ_ITEMS, PERSONAL_INFO } from '../data/portfolioData';

export const TrustFaqSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const whatsappUrl = `https://wa.me/${PERSONAL_INFO.phoneClean}?text=${encodeURIComponent(
    'Olá, Patrike. Gostaria de tirar uma dúvida sobre projetos / consultoria técnica.'
  )}`;

  return (
    <section className="py-20 md:py-28 bg-[#F8F7F4] border-b border-[#1B1B18]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Trust Factors Grid (Por que confiar) */}
        <div className="space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="font-['Space_Mono'] text-[0.65rem] uppercase tracking-[0.2em] text-[#A68B6E] font-bold block">
              03 // SEGURANÇA & CREDIBILIDADE
            </span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-6xl font-normal text-[#1B1B18] uppercase tracking-[-0.02em]">
              Por Que Contratar
            </h2>
            <p className="text-[#1B1B18]/70 text-base sm:text-lg">
              Critérios técnicos e garantias que diferenciam uma atuação com mais de 15 anos de excelência.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRUST_FACTORS.map((factor, idx) => (
              <div 
                key={idx}
                className="border border-[#1B1B18]/15 bg-white p-6 space-y-3 hover:border-[#A68B6E] transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-['Space_Mono'] text-xs font-bold text-[#A68B6E] uppercase tracking-widest">
                    {factor.value}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-[#A68B6E] group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-['Cormorant_Garamond'] text-2xl font-bold uppercase text-[#1B1B18]">
                  {factor.title}
                </h3>
                <p className="text-xs text-[#1B1B18]/75 leading-relaxed font-['Inter']">
                  {factor.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="pt-12 border-t border-[#1B1B18]/10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* FAQ Left Title (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-['Space_Mono'] text-[0.65rem] uppercase tracking-[0.2em] text-[#A68B6E] font-bold block">
              DÚVIDAS FREQUENTES
            </span>
            <h3 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl font-normal text-[#1B1B18] uppercase leading-tight">
              Perguntas & Esclarecimentos
            </h3>
            <p className="text-xs text-[#1B1B18]/70 font-['Inter'] leading-relaxed">
              Respostas diretas sobre prazos, contratação, emissão de RRT e aplicações práticas de Neuroarquitetura e SIG.
            </p>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-['Space_Mono'] uppercase tracking-wider text-[#A68B6E] hover:text-[#1B1B18] font-bold"
              >
                <span>Tem outra dúvida? Fale comigo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* FAQ Accordion List (8 Cols) */}
          <div className="lg:col-span-8 space-y-3">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx}
                  className="border border-[#1B1B18]/15 bg-white transition-all overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F8F7F4] transition-colors"
                  >
                    <span className="font-['Cormorant_Garamond'] text-xl font-bold uppercase text-[#1B1B18] leading-snug">
                      {item.question}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-[#A68B6E] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {isOpen && (
                    <div className="p-5 pt-0 border-t border-[#1B1B18]/5 text-xs text-[#1B1B18]/80 leading-relaxed font-['Inter'] animate-in fade-in duration-200">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* High Conversion Banner */}
        <div className="p-8 md:p-12 border border-[#1B1B18] bg-[#1B1B18] text-[#F8F7F4] flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <span className="font-['Space_Mono'] text-[0.65rem] uppercase tracking-[0.2em] text-[#A68B6E] font-bold block">
              PRÓXIMO PASSO // PROPOSTA SEM COMPROMISSO
            </span>
            <h3 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl font-normal uppercase leading-tight">
              Pronto para iniciar seu projeto com segurança técnica?
            </h3>
            <p className="text-xs sm:text-sm text-[#F8F7F4]/70 font-['Inter']">
              Envie sua demanda e receba um direcionamento técnico assertivo com orçamento detalhado.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#A68B6E] hover:bg-white hover:text-[#1B1B18] text-white transition-all font-['Space_Mono'] text-[0.75rem] uppercase tracking-[0.15em] font-bold flex items-center gap-2.5 shrink-0 shadow-md active:scale-98"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Falar Diretamente no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
