import React, { useState } from 'react';
import { Briefcase, GraduationCap, CheckCircle2, ChevronRight, BookCheck } from 'lucide-react';
import { EXPERIENCES, EDUCATION_LIST, CERTIFICATIONS_ENAP } from '../data/portfolioData';

export const TimelineSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experiencia' | 'formacao' | 'cursos'>('experiencia');

  return (
    <section id="trajetoria" className="py-20 md:py-28 bg-[#F8F7F4] border-b border-[#1B1B18]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <span className="font-['Space_Mono'] text-[0.65rem] uppercase tracking-[0.2em] text-[#A68B6E] font-bold block">
              04 // CARREIRA & TITULAÇÕES
            </span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-6xl font-normal text-[#1B1B18] uppercase tracking-[-0.02em]">
              Trajetória Cronológica
            </h2>
            <p className="text-[#1B1B18]/70 text-sm sm:text-base">
              Histórico funcional e acadêmico registrado na Plataforma Lattes do CNPq.
            </p>
          </div>

          {/* Timeline Switch Tabs */}
          <div className="flex p-1 bg-white border border-[#1B1B18]/15 self-start md:self-auto font-['Space_Mono'] text-[0.65rem] uppercase tracking-wider">
            <button
              onClick={() => setActiveTab('experiencia')}
              className={`px-4 py-2 font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'experiencia'
                  ? 'bg-[#1B1B18] text-[#F8F7F4]'
                  : 'text-[#1B1B18]/60 hover:text-[#1B1B18]'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Experiência</span>
            </button>
            <button
              onClick={() => setActiveTab('formacao')}
              className={`px-4 py-2 font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'formacao'
                  ? 'bg-[#1B1B18] text-[#F8F7F4]'
                  : 'text-[#1B1B18]/60 hover:text-[#1B1B18]'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Formação & Pós</span>
            </button>
            <button
              onClick={() => setActiveTab('cursos')}
              className={`px-4 py-2 font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'cursos'
                  ? 'bg-[#1B1B18] text-[#F8F7F4]'
                  : 'text-[#1B1B18]/60 hover:text-[#1B1B18]'
              }`}
            >
              <BookCheck className="w-3.5 h-3.5" />
              <span>Cursos ENAP</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Experiência Profissional */}
        {activeTab === 'experiencia' && (
          <div className="relative border-l-2 border-[#1B1B18]/15 ml-4 md:ml-6 space-y-8 pl-6 md:pl-8">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] md:-left-[39px] top-2 w-3.5 h-3.5 bg-white border-2 border-[#1B1B18] group-hover:bg-[#A68B6E] group-hover:border-[#A68B6E] transition-colors" />

                <div className="bg-white border border-[#1B1B18]/15 p-6 sm:p-7 hover:border-[#A68B6E] transition-all space-y-4 shadow-sm">
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1B1B18]/10 pb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-['Space_Mono'] text-[0.62rem] px-2.5 py-0.5 bg-[#F8F7F4] text-[#A68B6E] font-bold border border-[#1B1B18]/10">
                          {exp.period}
                        </span>
                        <span className="font-['Space_Mono'] text-[0.6rem] text-[#1B1B18]/50 uppercase tracking-widest">
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="font-['Cormorant_Garamond'] text-2xl font-bold uppercase text-[#1B1B18] mt-1.5">
                        {exp.role}
                      </h3>
                      <div className="font-['Space_Mono'] text-xs text-[#A68B6E] font-semibold">
                        {exp.institution} {exp.department && `• ${exp.department}`}
                      </div>
                    </div>
                  </div>

                  <p className="text-[#1B1B18]/80 text-sm leading-relaxed font-['Inter']">
                    {exp.description}
                  </p>

                  {exp.achievements.length > 0 && (
                    <div className="space-y-2 pt-2 border-t border-[#1B1B18]/10">
                      <span className="font-['Space_Mono'] text-[0.62rem] uppercase text-[#1B1B18]/50 font-bold tracking-wider">
                        Principais Atividades & Entregas
                      </span>
                      <div className="space-y-1.5">
                        {exp.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2 text-xs text-[#1B1B18]/80">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#A68B6E] shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Formação Acadêmica & Pós */}
        {activeTab === 'formacao' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION_LIST.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 bg-white border border-[#1B1B18]/15 hover:border-[#A68B6E] transition-all flex flex-col justify-between space-y-4 shadow-sm"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-['Space_Mono'] text-[0.62rem] px-2.5 py-0.5 bg-[#F8F7F4] text-[#A68B6E] font-bold border border-[#1B1B18]/10">
                      {edu.period}
                    </span>
                    {edu.hours && (
                      <span className="font-['Space_Mono'] text-xs text-[#1B1B18]/50">
                        {edu.hours}
                      </span>
                    )}
                  </div>
                  <h3 className="font-['Cormorant_Garamond'] text-2xl font-bold uppercase text-[#1B1B18]">
                    {edu.degree}
                  </h3>
                  <div className="font-['Space_Mono'] text-xs text-[#1B1B18]/60">
                    {edu.institution}
                  </div>
                </div>

                {edu.title && (
                  <div className="p-3.5 bg-[#F8F7F4] border border-[#1B1B18]/10 text-xs text-[#1B1B18]">
                    <span className="font-['Space_Mono'] text-[0.6rem] uppercase text-[#1B1B18]/50 block mb-1">TCC / PESQUISA</span>
                    <span className="italic font-serif">&ldquo;{edu.title}&rdquo;</span>
                  </div>
                )}

                {edu.details && (
                  <div className="font-['Space_Mono'] text-xs text-[#1B1B18]/50">
                    {edu.details}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Cursos ENAP */}
        {activeTab === 'cursos' && (
          <div className="p-6 sm:p-8 bg-white border border-[#1B1B18]/15 space-y-6 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-[#1B1B18]/10">
              <div>
                <h3 className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl font-bold uppercase text-[#1B1B18]">
                  Certificações ENAP, SENAI & Órgãos Federais
                </h3>
                <p className="text-xs text-[#1B1B18]/60 mt-1">
                  Capacitações com foco em licitações públicas, engenharia, patrimônio da União e meio ambiente.
                </p>
              </div>
              <span className="font-['Space_Mono'] text-xs text-[#A68B6E] font-bold px-3 py-1 bg-[#F8F7F4] border border-[#1B1B18]/10">
                {CERTIFICATIONS_ENAP.length} Cursos
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {CERTIFICATIONS_ENAP.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-3.5 bg-[#F8F7F4] border border-[#1B1B18]/10 hover:border-[#A68B6E] flex items-start gap-2.5 text-xs text-[#1B1B18] transition-colors"
                >
                  <ChevronRight className="w-4 h-4 text-[#A68B6E] shrink-0 mt-0.5" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
