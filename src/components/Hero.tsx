import React, { useState } from 'react';
import { ArrowRight, Check, Copy, FileText, MapPin, Shield, MessageSquare, Landmark, Award, ChevronRight, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, HIGHLIGHTS_METRICS } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.emailPrimary);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const whatsappUrl = `https://wa.me/${PERSONAL_INFO.phoneClean}?text=${encodeURIComponent(
    'Olá, Patrike. Encontrei seu portfólio profissional e gostaria de solicitar uma análise técnica / proposta para um projeto.'
  )}`;

  return (
    <section className="relative pt-32 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#F8F7F4] border-b border-[#1B1B18]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Status Ticker */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-3 border-b border-[#1B1B18]/10 font-['Space_Mono'] text-[0.65rem] uppercase tracking-[0.15em] text-[#1B1B18]/60">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></span>
            <span className="font-semibold text-[#1B1B18]">Disponível para Projetos, Consultorias & Pareceres</span>
          </div>
          <div className="flex items-center gap-2 text-[#A68B6E] font-semibold">
            <Shield className="w-3 h-3" />
            <span>Brasília - DF • Atendimento Nacional</span>
          </div>
        </div>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Main Typography & Commercial Conversion (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#1B1B18] text-[#F8F7F4] font-['Space_Mono'] text-[0.65rem] uppercase tracking-[0.18em]">
                Arquitetura • Urbanismo • SIG & Geointeligência
              </span>
              
              <h1 className="font-['Cormorant_Garamond'] text-4xl sm:text-6xl xl:text-7xl font-normal leading-[0.95] text-[#1B1B18] uppercase tracking-[-0.02em]">
                Arquitetura<br />
                <span className="italic font-light text-[#A68B6E]">com Precisão.</span>
              </h1>
            </div>

            {/* Clear 3-Pillar Positioning Statement */}
            <p className="text-[#1B1B18]/85 text-base sm:text-lg leading-relaxed border-l-2 border-[#A68B6E] pl-5 py-1 font-['Inter']">
              <strong>Arquiteto e Urbanista</strong> especializado em projetos de alta complexidade, planejamento territorial, modelagem paramétrica BIM e inteligência geoespacial (SIG). Mais de 15 anos unindo rigor técnico, governança pública e bem-estar espacial.
            </p>

            {/* Differentials Pill Matrix */}
            <div className="flex flex-wrap gap-2 pt-1 font-['Space_Mono'] text-[0.65rem] uppercase tracking-wider text-[#1B1B18]/70">
              <span className="px-2.5 py-1 bg-white border border-[#1B1B18]/15 flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-[#A68B6E]" /> Projetos Executivos BIM
              </span>
              <span className="px-2.5 py-1 bg-white border border-[#1B1B18]/15 flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-[#A68B6E]" /> Masterplans Urbanos & Rurais
              </span>
              <span className="px-2.5 py-1 bg-white border border-[#1B1B18]/15 flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-[#A68B6E]" /> Geoprocessamento SIG / QGIS
              </span>
              <span className="px-2.5 py-1 bg-white border border-[#1B1B18]/15 flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-[#A68B6E]" /> Lei 14.133 / Licitações
              </span>
            </div>

            {/* Commercial Action Zone */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              {/* Primary Commercial CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 border border-[#1B1B18] bg-[#1B1B18] text-[#F8F7F4] hover:bg-[#A68B6E] hover:border-[#A68B6E] transition-all font-['Space_Mono'] text-[0.72rem] uppercase tracking-[0.15em] font-bold flex items-center gap-2.5 shadow-sm active:scale-98"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Solicitar Análise Técnica</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#projetos"
                className="px-5 py-3.5 border border-[#1B1B18]/30 bg-white text-[#1B1B18] hover:bg-[#1B1B18] hover:text-[#F8F7F4] hover:border-[#1B1B18] transition-all font-['Space_Mono'] text-[0.7rem] uppercase tracking-[0.15em] flex items-center gap-1.5"
              >
                <span>Ver Projetos em Destaque</span>
              </a>

              {/* Tertiary Actions */}
              <div className="flex items-center gap-2 pl-1">
                <button
                  onClick={handleCopyEmail}
                  className="p-3 text-[#1B1B18]/60 hover:text-[#1B1B18] border border-[#1B1B18]/15 hover:border-[#1B1B18]/40 bg-transparent transition-colors font-['Space_Mono'] text-[0.65rem] uppercase flex items-center gap-1.5"
                  title="Copiar e-mail"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copiado' : 'E-mail'}</span>
                </button>
                <a
                  href={PERSONAL_INFO.lattes}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-[#1B1B18]/60 hover:text-[#1B1B18] border border-[#1B1B18]/15 hover:border-[#1B1B18]/40 bg-transparent transition-colors font-['Space_Mono'] text-[0.65rem] uppercase flex items-center gap-1.5"
                  title="Acessar Lattes"
                >
                  <FileText className="w-3.5 h-3.5 text-[#A68B6E]" />
                  <span>Lattes</span>
                </a>
              </div>
            </div>

            {/* Official Registration Tag */}
            <div className="pt-2 flex items-center gap-3 text-xs font-['Space_Mono'] text-[#1B1B18]/60">
              <span className="w-1.5 h-1.5 bg-[#A68B6E] rounded-full"></span>
              <span className="text-[0.65rem] uppercase tracking-wider font-semibold text-[#1B1B18]">
                {PERSONAL_INFO.councilStatus}
              </span>
            </div>

          </div>

          {/* Right Column: Architectural Technical Plaque & Fast Service Selector (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative border border-[#1B1B18] p-6 sm:p-7 bg-white shadow-xl space-y-5">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#1B1B18]/10 pb-4">
                <div>
                  <span className="font-['Space_Mono'] text-[0.6rem] uppercase tracking-[0.2em] text-[#A68B6E] font-bold block">
                    ATENDIMENTO TÉCNICO DIRETO
                  </span>
                  <div className="font-['Cormorant_Garamond'] text-2xl font-bold uppercase text-[#1B1B18]">
                    Como Posso Ajudar?
                  </div>
                </div>
                <div className="w-10 h-10 border border-[#1B1B18]/20 bg-[#F8F7F4] flex items-center justify-center text-[#A68B6E]">
                  <Landmark className="w-5 h-5" />
                </div>
              </div>

              {/* Fast Demand Navigation */}
              <div className="space-y-2.5 font-['Space_Mono'] text-xs text-[#1B1B18]">
                <a
                  href="#servicos"
                  className="p-3 bg-[#F8F7F4] hover:bg-[#A68B6E]/10 border border-[#1B1B18]/10 flex items-center justify-between transition-colors group"
                >
                  <div>
                    <span className="text-[0.6rem] text-[#1B1B18]/50 uppercase tracking-widest block">01 // ARQUITETURA</span>
                    <span className="font-semibold text-xs text-[#1B1B18]">Projetos Executivos & Modelagem BIM</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#A68B6E] group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#servicos"
                  className="p-3 bg-[#F8F7F4] hover:bg-[#A68B6E]/10 border border-[#1B1B18]/10 flex items-center justify-between transition-colors group"
                >
                  <div>
                    <span className="text-[0.6rem] text-[#1B1B18]/50 uppercase tracking-widest block">02 // URBANISMO & RURAL</span>
                    <span className="font-semibold text-xs text-[#1B1B18]">Masterplans, Loteamentos & Glebas</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#A68B6E] group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#servicos"
                  className="p-3 bg-[#F8F7F4] hover:bg-[#A68B6E]/10 border border-[#1B1B18]/10 flex items-center justify-between transition-colors group"
                >
                  <div>
                    <span className="text-[0.6rem] text-[#1B1B18]/50 uppercase tracking-widest block">03 // GEOINTELIGÊNCIA</span>
                    <span className="font-semibold text-xs text-[#1B1B18]">SIG, Mapas Espaciais & Sensoriamento</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#A68B6E] group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#servicos"
                  className="p-3 bg-[#F8F7F4] hover:bg-[#A68B6E]/10 border border-[#1B1B18]/10 flex items-center justify-between transition-colors group"
                >
                  <div>
                    <span className="text-[0.6rem] text-[#1B1B18]/50 uppercase tracking-widest block">04 // PARECERES & LAUDOS</span>
                    <span className="font-semibold text-xs text-[#1B1B18]">Consultoria em Licitações (Lei 14.133) & Perícias</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#A68B6E] group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Fast Direct WhatsApp Trigger */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-['Space_Mono'] text-[0.68rem] uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Conversar pelo WhatsApp</span>
              </a>

            </div>
          </div>

        </div>

        {/* Compact Highlights Metrics */}
        <div className="mt-12 pt-8 border-t border-[#1B1B18]/10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {HIGHLIGHTS_METRICS.map((metric, idx) => (
            <div key={idx} className="p-4 border border-[#1B1B18]/10 bg-white hover:border-[#A68B6E] transition-colors">
              <div className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl font-bold text-[#1B1B18]">
                {metric.value}
              </div>
              <div className="font-['Space_Mono'] text-[0.62rem] uppercase tracking-widest text-[#A68B6E] font-bold mt-0.5">
                {metric.label}
              </div>
              <div className="text-[0.7rem] text-[#1B1B18]/60 mt-0.5 font-['Inter']">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
