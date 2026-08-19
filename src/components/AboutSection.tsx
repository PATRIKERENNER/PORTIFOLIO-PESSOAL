import React from 'react';
import { Brain, Compass, Shield, CheckCircle2, Landmark } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      num: '01',
      icon: Brain,
      title: 'Neuroarquitetura & Saúde',
      description: 'Especialização pela Unyleya com ênfase no impacto dos estímulos espaciais no sistema nervoso, iluminação circadiana, biofilia e conforto psicológico para hospitais, clínicas e ambientes institucionais.'
    },
    {
      num: '02',
      icon: Compass,
      title: 'Geoprocessamento & SIG',
      description: 'Expertise com Sistemas de Informações Geográficas (QGIS/ArcGIS), sensoriamento remoto de precisão com radar SAR (bandas X e P) pelo CIGEX/Exército e modelagem analítica no DER-DF (Painel PARE).'
    },
    {
      num: '03',
      icon: Shield,
      title: 'Governança & Licitações',
      description: 'Rigor técnico com base na Nova Lei de Licitações (Lei 14.133/2021), elaboração de Termos de Referência, Projetos Básicos/Executivos, SIAFI, SEI!, apuração de dano ao erário e fiscalização de obras públicas.'
    }
  ];

  const highlights = [
    'Bacharel em Arquitetura e Urbanismo (UNIEURO) com 4.469 horas de formação',
    'Graduado em História (ETEP) e Graduando em Gestão Pública (UNIBF)',
    '4 Pós-Graduações: Neuroarquitetura, Licenciamento Ambiental, Direito Urbanístico e Forense',
    'Técnico em Edificações (IETAAM) e Desenhista Técnico Pleno da CRO/11',
    'Ex-Gerente de Adequação Viária (DER-DF) e Ex-Diretor de Licenciamento (Vicente Pires)',
    'Capítulos de livros publicados (Editora Dialética) e Patente de Modelo no CAU-BR'
  ];

  return (
    <section id="sobre" className="py-20 md:py-28 bg-[#F8F7F4] border-b border-[#1B1B18]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16">
          <span className="font-['Space_Mono'] text-[0.65rem] uppercase tracking-[0.2em] text-[#A68B6E] font-bold block">
            01 // SOBRE O PROFISSIONAL
          </span>
          <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-6xl font-normal text-[#1B1B18] uppercase tracking-[-0.02em]">
            Precisão Técnica e Legislação Aplicada
          </h2>
          <p className="text-[#1B1B18]/70 text-base sm:text-lg">
            A convergência entre a criação arquitetônica, a análise territorial por satélite e a conformidade legal.
          </p>
        </div>

        {/* Top Split: Bio & Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-7 space-y-6 text-[#1B1B18]/80 leading-relaxed">
            <p className="text-base sm:text-lg border-l-2 border-[#A68B6E] pl-5">
              Com formação de base em <strong>Arquitetura e Urbanismo pela UNIEURO</strong> e <strong>História pelo Centro Universitário ETEP</strong>, consolidei uma carreira que une desenho técnico fotorrealista com governança pública e inteligência territorial.
            </p>
            <p className="text-sm sm:text-base">
              No Governo do Distrito Federal, atuei na gestão e aprovação de projetos urbanos e viários como <strong>Diretor de Licenciamento na Administração Regional de Vicente Pires</strong>, <strong>Gerente de Adequação Viária no DER-DF</strong> (co-criador do Painel PARE/DF) e analista de geoinformação ambiental no <strong>IBRAM</strong>.
            </p>
            <p className="text-sm sm:text-base">
              No âmbito das Forças Armadas, participei do sensoriamento remoto e mapeamento da Amazônia com radares de abertura sintética (SAR) no <strong>CIGEX</strong> e atuo atualmente na Seção Técnica da <strong>Comissão Regional de Obras da 11ª Região Militar (CRO/11)</strong> como 3º Sargento Técnico.
            </p>

            {/* Checklist of credentials */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#1B1B18]">
                  <CheckCircle2 className="w-4 h-4 text-[#A68B6E] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card: Objective Manifesto */}
          <div className="lg:col-span-5 border border-[#1B1B18]/15 bg-white p-6 sm:p-8 space-y-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-[#A68B6E] bg-[#A68B6E]/10 flex items-center justify-center text-[#A68B6E]">
                <Landmark className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-['Cormorant_Garamond'] text-xl font-bold uppercase text-[#1B1B18]">
                  Diretriz Técnica
                </h3>
                <span className="font-['Space_Mono'] text-[0.6rem] uppercase tracking-widest text-[#1B1B18]/50 block">Compromisso Ético</span>
              </div>
            </div>

            <p className="text-[#1B1B18]/80 text-sm leading-relaxed italic border-l-2 border-[#A68B6E] pl-4 py-1">
              &ldquo;{PERSONAL_INFO.objective}&rdquo;
            </p>

            <div className="space-y-2.5 pt-3 text-xs border-t border-[#1B1B18]/10 font-['Space_Mono']">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1.5 border-b border-[#1B1B18]/5 gap-1">
                <span className="text-[#1B1B18]/50 uppercase text-[0.65rem]">CONSELHOS PROFISSIONAIS:</span>
                <span className="font-bold text-[#1B1B18] text-[0.7rem] uppercase tracking-wide">
                  REGISTROS ATIVOS JUNTO AO CAU/BR E CFT/BR
                </span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#1B1B18]/50">LATTES CNPQ:</span>
                <a
                  href={PERSONAL_INFO.lattes}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#A68B6E] hover:underline"
                >
                  ID 7539135599201548
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Numbered Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="border border-[#1B1B18]/15 bg-white p-7 flex flex-col justify-between hover:border-[#A68B6E] transition-colors relative group"
              >
                <div className="font-['Space_Mono'] text-[0.65rem] uppercase tracking-[0.2em] text-[#A68B6E] font-bold mb-4">
                  {pillar.num} // PILAR
                </div>

                <div className="space-y-3">
                  <div className="w-10 h-10 border border-[#1B1B18]/15 bg-[#F8F7F4] flex items-center justify-center text-[#A68B6E]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-['Cormorant_Garamond'] text-2xl font-bold uppercase text-[#1B1B18]">
                    {pillar.title}
                  </h3>
                  <p className="text-[#1B1B18]/70 text-xs sm:text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
