import React from 'react';
import { ArrowUpRight, Building2, FileCheck2, Map, Ruler, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: Ruler,
    number: '01',
    title: 'Arquitetura & BIM',
    description: 'Projetos arquitetônicos, estudos de implantação, documentação técnica, compatibilização e fluxos BIM/Revit.'
  },
  {
    icon: Map,
    number: '02',
    title: 'Urbanismo & SIG',
    description: 'Análise territorial, geoprocessamento, mapas temáticos, diagnóstico urbano e inteligência espacial para decisão.'
  },
  {
    icon: FileCheck2,
    number: '03',
    title: 'Consultoria Técnica',
    description: 'Apoio técnico em planejamento, licenciamento, regularização, documentação e demandas de natureza pública ou privada.'
  },
  {
    icon: Building2,
    number: '04',
    title: 'Vistorias & Perícias',
    description: 'Inspeções, diagnósticos, laudos e análises técnicas com abordagem objetiva e documentação organizada.'
  },
  {
    icon: ShieldCheck,
    number: '05',
    title: 'Gestão & Obras Públicas',
    description: 'Experiência aplicada a ambientes institucionais, planejamento, fiscalização e leitura técnica de processos.'
  }
];

export const ServicesSection: React.FC = () => (
  <section id="servicos" className="py-20 md:py-28 bg-[#1B1B18] text-[#F8F7F4] border-b border-[#F8F7F4]/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-14">
        <div className="lg:col-span-8 space-y-4">
          <span className="font-['Space_Mono'] text-[0.65rem] uppercase tracking-[0.2em] text-[#C7AA88] font-bold block">02 // SERVIÇOS & SOLUÇÕES</span>
          <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-6xl font-normal uppercase tracking-[-0.02em]">O que posso resolver</h2>
          <p className="max-w-2xl text-[#F8F7F4]/70 text-sm sm:text-base leading-relaxed">
            Uma atuação técnica que conecta arquitetura, território, dados espaciais e experiência institucional — do diagnóstico à entrega.
          </p>
        </div>
        <div className="lg:col-span-4 lg:text-right">
          <a href="#contato" className="inline-flex items-center gap-2 px-5 py-3 border border-[#F8F7F4]/30 hover:border-[#C7AA88] hover:bg-[#C7AA88] hover:text-[#1B1B18] transition-all font-['Space_Mono'] text-[0.65rem] uppercase tracking-widest">
            Solicitar análise <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#F8F7F4]/15 border border-[#F8F7F4]/15">
        {services.map(({ icon: Icon, number, title, description }) => (
          <article key={number} className="group bg-[#1B1B18] p-7 sm:p-8 min-h-[250px] flex flex-col justify-between hover:bg-[#24241f] transition-colors">
            <div className="flex items-start justify-between">
              <span className="font-['Space_Mono'] text-[0.65rem] text-[#C7AA88]">{number}</span>
              <Icon className="w-5 h-5 text-[#C7AA88]" strokeWidth={1.5} />
            </div>
            <div className="space-y-3 mt-10">
              <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold uppercase">{title}</h3>
              <p className="text-sm leading-relaxed text-[#F8F7F4]/65">{description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
