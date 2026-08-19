import React, { useState } from 'react';
import { ArrowRight, Check, Copy, FileText, MapPin, Shield, Compass, Landmark, Layers, Award } from 'lucide-react';
import { PERSONAL_INFO, HIGHLIGHTS_METRICS } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.emailPrimary);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const coreStack = [
    'Autodesk Revit BIM',
    'AutoCAD 2D/3D',
    'QGIS & SIG Espacial',
    'Radar SAR Bandas X/P',
    'Neuroarquitetura',
    'Nova Lei 14.133'
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#F8F7F4] border-b border-[#1B1B18]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Meta Line */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-[#1B1B18]/10 font-['Space_Mono'] text-[0.65rem] uppercase tracking-[0.15em] text-[#1B1B18]/60">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#A68B6E] rounded-full"></span>
            <span>Disponível para Pareceres, Projetos & Perícias</span>
          </div>
          <div className="flex items-center gap-2 text-[#A68B6E] font-semibold">
            <Shield className="w-3 h-3" />
            <span>3º Sargento EB • CRO/11 • Brasília / DF</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Main Typography Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-4">
              <span className="font-['Space_Mono'] text-[0.7rem] uppercase tracking-[0.2em] text-[#A68B6E] font-bold block">
                Especialista em Neuroarquitetura & Geoprocessamento
              </span>
              
              <h1 className="font-['Cormorant_Garamond'] text-5xl sm:text-7xl xl:text-8xl font-normal leading-[0.92] text-[#1B1B18] uppercase tracking-[-0.02em]">
                Arquitetura<br />
                <span className="italic font-light text-[#A68B6E]">com Precisão.</span>
              </h1>
            </div>

            {/* Narrative Editorial Quote */}
            <p className="text-[#1B1B18]/80 text-base sm:text-lg leading-relaxed max-w-xl border-l-2 border-[#A68B6E] pl-6 py-1 font-['Inter']">
              Portfólio profissional de <strong>Patrike Mayko Renner Reis de Abreu</strong>. Mais de 15 anos integrando desenho arquitetônico fotorrealista, planejamento territorial em órgãos públicos (NOVACAP, DER-DF, Adm. Vicente Pires), inteligência de radar no Exército e rigor na Lei de Licitações.
            </p>

            {/* Core Stack Badges */}
            <div className="space-y-2.5">
              <span className="font-['Space_Mono'] text-[0.62rem] uppercase tracking-[0.2em] text-[#1B1B18]/50 block font-bold">
                Domínio Técnico Principal
              </span>
              <div className="flex flex-wrap gap-2">
                {coreStack.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 font-['Space_Mono'] text-[0.65rem] uppercase tracking-wider border border-[#1B1B18]/15 bg-white text-[#1B1B18]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Official Credentials Row */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-2">
              <div className="sm:col-span-8 p-3 border border-[#1B1B18]/15 bg-white text-xs">
                <span className="font-['Space_Mono'] text-[0.6rem] uppercase tracking-widest text-[#1B1B18]/50 block">CONSELHOS PROFISSIONAIS</span>
                <span className="font-bold text-[#1B1B18] font-['Space_Mono'] text-[0.7rem] uppercase tracking-wide">
                  REGISTROS ATIVOS JUNTO AO CAU/BR E CFT/BR
                </span>
              </div>
              <div className="sm:col-span-4 p-3 border border-[#1B1B18]/15 bg-white text-xs">
                <span className="font-['Space_Mono'] text-[0.6rem] uppercase tracking-widest text-[#1B1B18]/50 block">LOCALIZAÇÃO</span>
                <span className="font-semibold text-[#1B1B18] font-['Space_Mono'] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#A68B6E]" /> Brasília - DF
                </span>
              </div>
            </div>

            {/* Action Buttons with Editorial Hover Invert */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projetos"
                className="px-6 py-3.5 border border-[#1B1B18] bg-[#1B1B18] text-[#F8F7F4] hover:bg-[#A68B6E] hover:border-[#A68B6E] transition-all font-['Space_Mono'] text-[0.7rem] uppercase tracking-[0.15em] font-bold flex items-center gap-2 shadow-sm"
              >
                <span>Visualizar Portfólio</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={handleCopyEmail}
                className="px-5 py-3.5 border border-[#1B1B18] bg-transparent text-[#1B1B18] hover:bg-[#1B1B18] hover:text-[#F8F7F4] transition-all font-['Space_Mono'] text-[0.7rem] uppercase tracking-[0.15em] flex items-center gap-2 cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>E-mail Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 opacity-60" />
                    <span>Copiar E-mail</span>
                  </>
                )}
              </button>
              <a
                href={PERSONAL_INFO.lattes}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3.5 text-[#1B1B18]/70 hover:text-[#1B1B18] font-['Space_Mono'] text-[0.65rem] uppercase tracking-wider transition-colors flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5 text-[#A68B6E]" />
                <span>Currículo Lattes</span>
              </a>
            </div>

          </div>

          {/* Right Column: Architectural Technical Plaque / Atelier Spec (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative border border-[#1B1B18] p-6 sm:p-8 bg-white shadow-xl space-y-6">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-[#1B1B18]/10 pb-4">
                <div className="space-y-0.5">
                  <span className="font-['Space_Mono'] text-[0.6rem] uppercase tracking-[0.2em] text-[#A68B6E] font-bold block">
                    CADERNO TÉCNICO PROFISSIONAL
                  </span>
                  <div className="font-['Cormorant_Garamond'] text-2xl font-bold uppercase text-[#1B1B18]">
                    Patrike Renner
                  </div>
                </div>
                <div className="w-10 h-10 border border-[#1B1B18]/20 bg-[#F8F7F4] flex items-center justify-center text-[#A68B6E]">
                  <Landmark className="w-5 h-5" />
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="space-y-3 font-['Space_Mono'] text-xs text-[#1B1B18]">
                <div className="p-3 bg-[#F8F7F4] border border-[#1B1B18]/10 space-y-1">
                  <div className="flex items-center justify-between text-[0.6rem] text-[#1B1B18]/50 uppercase tracking-widest">
                    <span>FORMAÇÃO BASE</span>
                    <span className="text-[#A68B6E] font-bold">4.469 HORAS</span>
                  </div>
                  <div className="font-semibold text-xs text-[#1B1B18]">
                    Bacharelado em Arquitetura e Urbanismo (UNIEURO)
                  </div>
                </div>

                <div className="p-3 bg-[#F8F7F4] border border-[#1B1B18]/10 space-y-1">
                  <div className="flex items-center justify-between text-[0.6rem] text-[#1B1B18]/50 uppercase tracking-widest">
                    <span>ENGENHARIA MILITAR</span>
                    <span className="text-[#A68B6E] font-bold">EXÉRCITO BRASILEIRO</span>
                  </div>
                  <div className="font-semibold text-xs text-[#1B1B18]">
                    3º Sargento Técnico • Seção Técnica CRO/11 (QGEx)
                  </div>
                </div>

                <div className="p-3 bg-[#F8F7F4] border border-[#1B1B18]/10 space-y-1">
                  <div className="flex items-center justify-between text-[0.6rem] text-[#1B1B18]/50 uppercase tracking-widest">
                    <span>ESPECIALIZAÇÕES PÓS-GRAD</span>
                    <span className="text-[#A68B6E] font-bold">04 TÍTULOS</span>
                  </div>
                  <div className="text-[0.7rem] text-[#1B1B18]/80 leading-relaxed">
                    Neuroarquitetura • Licenciamento Ambiental • Direito Urbanístico • Perícia Forense
                  </div>
                </div>
              </div>

              {/* Badges footer */}
              <div className="pt-2 border-t border-[#1B1B18]/10 flex items-center justify-between font-['Space_Mono'] text-[0.62rem] text-[#1B1B18]/60 uppercase">
                <span className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#A68B6E]" />
                  Patente Registrada CAU-BR
                </span>
                <span className="font-bold text-[#1B1B18]">Brasília / DF</span>
              </div>

            </div>
          </div>

        </div>

        {/* Metrics Grid */}
        <div className="mt-16 pt-10 border-t border-[#1B1B18]/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {HIGHLIGHTS_METRICS.map((metric, idx) => (
            <div key={idx} className="p-5 border border-[#1B1B18]/10 bg-white hover:border-[#A68B6E] transition-colors">
              <div className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl font-bold text-[#1B1B18]">
                {metric.value}
              </div>
              <div className="font-['Space_Mono'] text-[0.65rem] uppercase tracking-widest text-[#A68B6E] font-bold mt-1">
                {metric.label}
              </div>
              <div className="text-xs text-[#1B1B18]/60 mt-0.5">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
