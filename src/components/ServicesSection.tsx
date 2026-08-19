import React, { useState } from 'react';
import { 
  Building2, 
  Map, 
  Layers, 
  FileCheck, 
  Search, 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  User, 
  Briefcase, 
  Landmark, 
  ChevronRight,
  ShieldCheck,
  Award
} from 'lucide-react';
import { SERVICES_DATA, CLIENT_PROFILES, WORK_METHODOLOGY, PERSONAL_INFO, ServiceItem } from '../data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Map,
  Layers,
  FileCheck,
  Search,
  User,
  Briefcase,
  Landmark
};

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem>(SERVICES_DATA[0]);

  const getWhatsAppLink = (message: string) => {
    return `https://wa.me/${PERSONAL_INFO.phoneClean}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="servicos" className="py-20 md:py-28 bg-[#F8F7F4] border-b border-[#1B1B18]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="font-['Space_Mono'] text-[0.65rem] uppercase tracking-[0.2em] text-[#A68B6E] font-bold block">
            01 // SOLUÇÕES & CONTRATAÇÃO
          </span>
          <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-6xl font-normal text-[#1B1B18] uppercase tracking-[-0.02em]">
            Serviços & Atuação Técnica
          </h2>
          <p className="text-[#1B1B18]/70 text-base sm:text-lg">
            Da concepção arquitetônica fotorrealista ao geoprocessamento estratégico e conformidade regulatória plena.
          </p>
        </div>

        {/* Audience Profiles Segmentation (3 Personas) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-['Space_Mono'] text-[0.65rem] uppercase tracking-[0.18em] text-[#1B1B18]/60 font-bold">
              Como você deseja contratar?
            </span>
            <span className="font-['Space_Mono'] text-[0.6rem] uppercase tracking-wider text-[#A68B6E]">
              Atendimento Personalizado
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {CLIENT_PROFILES.map((profile) => {
              const Icon = iconMap[profile.iconName] || Briefcase;
              return (
                <div 
                  key={profile.id}
                  className="border border-[#1B1B18]/15 bg-white p-6 flex flex-col justify-between hover:border-[#A68B6E] transition-all shadow-sm group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 border border-[#1B1B18]/10 bg-[#F8F7F4] flex items-center justify-center text-[#A68B6E] group-hover:bg-[#1B1B18] group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-['Space_Mono'] text-[0.6rem] uppercase tracking-wider px-2 py-0.5 bg-[#F8F7F4] border border-[#1B1B18]/10 text-[#1B1B18]/70">
                        {profile.badge}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="font-['Cormorant_Garamond'] text-2xl font-bold uppercase text-[#1B1B18]">
                        {profile.title}
                      </h3>
                      <p className="text-xs text-[#1B1B18]/75 leading-relaxed font-['Inter']">
                        {profile.painPoint}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#1B1B18]/10 text-xs text-[#1B1B18]/80 font-['Inter']">
                      <span className="font-semibold text-[#1B1B18] block text-[0.7rem] uppercase font-['Space_Mono'] mb-1">
                        Solução Aplicada:
                      </span>
                      {profile.solution}
                    </div>
                  </div>

                  <div className="pt-6">
                    <a
                      href={getWhatsAppLink(profile.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 border border-[#1B1B18] bg-transparent text-[#1B1B18] group-hover:bg-[#1B1B18] group-hover:text-white transition-all font-['Space_Mono'] text-[0.68rem] uppercase tracking-wider font-semibold flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-600 group-hover:text-emerald-400" />
                      <span>{profile.actionLabel}</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5 Core Pillars Grid with Interactive Selector */}
        <div className="pt-8 border-t border-[#1B1B18]/10 space-y-6">
          <div className="space-y-1">
            <span className="font-['Space_Mono'] text-[0.65rem] uppercase tracking-[0.2em] text-[#A68B6E] font-bold block">
              CATÁLOGO DE ESPECIALIDADES
            </span>
            <h3 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl font-normal text-[#1B1B18] uppercase">
              Selecione a Área de Interesse
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Selector List (5 Cols) */}
            <div className="lg:col-span-5 space-y-2.5">
              {SERVICES_DATA.map((service) => {
                const Icon = iconMap[service.iconName] || Building2;
                const isSelected = selectedService.id === service.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service)}
                    className={`w-full p-4 border text-left transition-all flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'border-[#1B1B18] bg-[#1B1B18] text-[#F8F7F4] shadow-md'
                        : 'border-[#1B1B18]/15 bg-white text-[#1B1B18] hover:border-[#A68B6E]'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`w-9 h-9 border flex items-center justify-center shrink-0 ${
                        isSelected 
                          ? 'border-[#F8F7F4]/20 bg-white/10 text-[#A68B6E]' 
                          : 'border-[#1B1B18]/10 bg-[#F8F7F4] text-[#A68B6E]'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className={`font-['Space_Mono'] text-[0.6rem] uppercase tracking-widest block ${
                          isSelected ? 'text-[#A68B6E]' : 'text-[#1B1B18]/50'
                        }`}>
                          {service.number} // SERVIÇO
                        </span>
                        <span className="font-['Cormorant_Garamond'] text-lg font-bold uppercase leading-snug block">
                          {service.title.split('&')[0]}
                        </span>
                      </div>
                    </div>

                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-[#A68B6E] translate-x-1' : 'text-[#1B1B18]/40'
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Right Detailed Service View (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="border border-[#1B1B18] bg-white p-7 sm:p-9 shadow-lg space-y-6">
                
                {/* Header */}
                <div className="space-y-2 border-b border-[#1B1B18]/10 pb-5">
                  <div className="flex items-center justify-between">
                    <span className="font-['Space_Mono'] text-[0.65rem] uppercase tracking-[0.2em] text-[#A68B6E] font-bold">
                      PILAR {selectedService.number}
                    </span>
                    <span className="font-['Space_Mono'] text-[0.6rem] uppercase px-2.5 py-0.5 bg-[#F8F7F4] border border-[#1B1B18]/10 text-[#1B1B18]/70">
                      RRT / TRT Incluso
                    </span>
                  </div>
                  <h4 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl font-bold uppercase text-[#1B1B18]">
                    {selectedService.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#A68B6E] font-['Space_Mono'] uppercase tracking-wider font-semibold">
                    {selectedService.subtitle}
                  </p>
                  <p className="text-sm text-[#1B1B18]/80 leading-relaxed font-['Inter'] pt-1">
                    {selectedService.description}
                  </p>
                </div>

                {/* Scope Items */}
                <div className="space-y-3">
                  <span className="font-['Space_Mono'] text-[0.65rem] uppercase tracking-[0.18em] text-[#1B1B18]/60 font-bold block">
                    Escopo & Atividades Compreendidas:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedService.items.map((item, idx) => (
                      <div 
                        key={idx}
                        className="p-2.5 bg-[#F8F7F4] border border-[#1B1B18]/10 text-xs text-[#1B1B18] font-['Inter'] flex items-start gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#A68B6E] shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Target Audience Bar */}
                <div className="p-3 bg-[#1B1B18]/5 border border-[#1B1B18]/10 text-xs font-['Space_Mono'] text-[#1B1B18]/80">
                  <strong className="text-[#1B1B18]">Público Indicado:</strong> {selectedService.targetAudience}
                </div>

                {/* Action Button */}
                <div className="pt-2">
                  <a
                    href={getWhatsAppLink(selectedService.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1B1B18] hover:bg-[#A68B6E] text-[#F8F7F4] transition-all font-['Space_Mono'] text-[0.72rem] uppercase tracking-wider font-bold shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>Solicitar Proposta para este Serviço</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Work Methodology (5 Clear Steps) */}
        <div id="metodologia" className="pt-12 border-t border-[#1B1B18]/10 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="font-['Space_Mono'] text-[0.65rem] uppercase tracking-[0.2em] text-[#A68B6E] font-bold block">
              MÉTODO DE TRABALHO
            </span>
            <h3 className="font-['Cormorant_Garamond'] text-3xl sm:text-5xl font-normal text-[#1B1B18] uppercase">
              Do Diagnóstico à Entrega com RRT
            </h3>
            <p className="text-sm text-[#1B1B18]/70">
              Fluxo padronizado que garante segurança jurídica, controle de prazos e excelência executiva.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {WORK_METHODOLOGY.map((step) => (
              <div 
                key={step.step}
                className="border border-[#1B1B18]/15 bg-white p-5 flex flex-col justify-between hover:border-[#A68B6E] transition-colors"
              >
                <div className="space-y-3">
                  <span className="font-['Space_Mono'] text-xl font-bold text-[#A68B6E] block">
                    {step.step}.
                  </span>
                  <div className="space-y-1">
                    <h4 className="font-['Cormorant_Garamond'] text-xl font-bold uppercase text-[#1B1B18] leading-tight">
                      {step.title}
                    </h4>
                    <p className="text-[0.65rem] font-['Space_Mono'] text-[#A68B6E] uppercase tracking-wider font-semibold">
                      {step.subtitle}
                    </p>
                  </div>
                  <p className="text-xs text-[#1B1B18]/75 leading-relaxed font-['Inter']">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#1B1B18]/10 font-['Space_Mono'] text-[0.62rem] text-[#1B1B18]/70">
                  <span className="text-[#1B1B18]/40 block uppercase">Entregável:</span>
                  <span className="font-bold text-[#1B1B18]">{step.output}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
