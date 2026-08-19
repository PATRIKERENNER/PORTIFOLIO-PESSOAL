import React from 'react';
import { Award, BookOpen, FileCheck, ShieldCheck } from 'lucide-react';
import { PUBLICATIONS, AWARDS } from '../data/portfolioData';

export const PublicationsAwards: React.FC = () => {
  return (
    <section id="publicacoes" className="py-20 md:py-28 bg-[#F8F7F4] border-b border-[#1B1B18]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Col 1: Publicações, Livros & Patentes (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="font-['Space_Mono'] text-[0.65rem] uppercase tracking-[0.2em] text-[#A68B6E] font-bold block">
                04 // PRODUÇÃO TÉCNICA & PESQUISA
              </span>
              <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl font-normal text-[#1B1B18] uppercase tracking-[-0.02em]">
                Pesquisa & Publicações
              </h2>
              <p className="text-[#1B1B18]/70 text-sm">
                Produção bibliográfica registrada com ISBN, DOI e depósito oficial de patente no CAU-BR.
              </p>
            </div>

            <div className="space-y-6">
              {PUBLICATIONS.map((pub, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 bg-white border border-[#1B1B18]/15 hover:border-[#A68B6E] transition-all space-y-3 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-['Space_Mono'] text-[0.62rem] px-2.5 py-0.5 bg-[#1B1B18] text-[#F8F7F4] uppercase font-bold">
                      {pub.type === 'livro' ? 'LIVRO PUBLICADO' : 'PATENTE CAU-BR'} • {pub.year}
                    </span>
                    {pub.isbn && (
                      <span className="font-['Space_Mono'] text-xs text-[#1B1B18]/50">
                        ISBN: {pub.isbn}
                      </span>
                    )}
                  </div>

                  <h3 className="font-['Cormorant_Garamond'] text-2xl font-bold uppercase text-[#1B1B18]">
                    {pub.title}
                  </h3>

                  <div className="font-['Space_Mono'] text-xs text-[#A68B6E] font-semibold">
                    {pub.publisher}
                  </div>

                  <p className="text-[#1B1B18]/80 text-sm leading-relaxed font-['Inter']">
                    {pub.description}
                  </p>

                  {pub.doi && (
                    <div className="pt-2 font-['Space_Mono'] text-xs text-[#1B1B18]/50">
                      DOI: <span className="text-[#1B1B18]">{pub.doi}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Col 2: Condecorações & Elogios Oficiais (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="font-['Space_Mono'] text-[0.65rem] uppercase tracking-[0.2em] text-[#A68B6E] font-bold block">
                MÉRITO INSTITUCIONAL
              </span>
              <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl font-normal text-[#1B1B18] uppercase tracking-[-0.02em]">
                Reconhecimentos
              </h2>
              <p className="text-[#1B1B18]/70 text-sm">
                Condecorações conferidas por órgãos públicos, Judiciário e Engenharia Militar.
              </p>
            </div>

            <div className="space-y-4">
              {AWARDS.map((award, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-white border border-[#1B1B18]/15 hover:border-[#A68B6E] transition-all space-y-2"
                >
                  <div className="flex items-center justify-between text-xs font-['Space_Mono']">
                    <span className="text-[#A68B6E] font-bold">{award.year}</span>
                    <Award className="w-4 h-4 text-[#A68B6E]" />
                  </div>
                  <h4 className="font-['Cormorant_Garamond'] text-xl font-bold uppercase text-[#1B1B18]">
                    {award.title}
                  </h4>
                  <div className="text-xs font-semibold text-[#1B1B18]/70 font-['Space_Mono']">
                    {award.organization}
                  </div>
                  <p className="text-xs text-[#1B1B18]/60 leading-relaxed font-['Inter']">
                    {award.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
