import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  Calendar, 
  ExternalLink, 
  Layers, 
  FileCheck, 
  Youtube, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Compass,
  Star,
  ShieldCheck,
  ImageIcon
} from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

type FilterType = 'todos' | 'arquitetura' | 'urbanismo' | 'sig' | 'militar';

// Fast Loading Optimized Image
const ProjectImage: React.FC<{
  src: string;
  alt: string;
  isMilitary?: boolean;
  className?: string;
}> = ({ src, alt, isMilitary, className = '' }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full bg-[#EAE8E2] overflow-hidden flex items-center justify-center">
      {!loaded && (
        <div className="absolute inset-0 bg-[#EAE8E2] animate-pulse flex flex-col items-center justify-center text-[#1B1B18]/30 gap-2 pointer-events-none z-0">
          <ImageIcon className="w-5 h-5 opacity-40" />
        </div>
      )}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full transition-opacity duration-300 relative z-10 ${
          loaded ? 'opacity-100' : 'opacity-80'
        } ${
          isMilitary ? 'object-contain p-4 bg-white' : 'object-cover'
        } ${className}`}
      />
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'todos' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const filterTabs: { key: FilterType; label: string }[] = [
    { key: 'todos', label: 'Todos os Projetos' },
    { key: 'arquitetura', label: 'Arquitetura & BIM' },
    { key: 'urbanismo', label: 'Urbanismo & Masterplans' },
    { key: 'sig', label: 'SIG & Geointeligência' },
    { key: 'militar', label: 'Engenharia Militar & Pública' }
  ];

  return (
    <section id="projetos" className="py-20 md:py-28 bg-[#F8F7F4] border-b border-[#1B1B18]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <span className="font-['Space_Mono'] text-[0.65rem] uppercase tracking-[0.2em] text-[#A68B6E] font-bold block">
              02 // ACERVO TÉCNICO & RESULTADOS
            </span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-6xl font-normal text-[#1B1B18] uppercase tracking-[-0.02em]">
              Projetos em Destaque
            </h2>
            <p className="text-[#1B1B18]/70 text-base sm:text-lg">
              Estudos de caso reais com problemas resolvidos, metodologias aplicadas e evidências técnicas verificáveis.
            </p>
          </div>

          {/* Verification Badge */}
          <div className="flex items-center gap-2 p-3 bg-white border border-[#1B1B18]/15 font-['Space_Mono'] text-xs text-[#1B1B18]">
            <ShieldCheck className="w-4 h-4 text-[#A68B6E]" />
            <span className="text-[0.65rem] uppercase tracking-wider font-semibold">
              RRTs & Acervos Registrados
            </span>
          </div>
        </div>

        {/* Filter Navigation Chips */}
        <div className="flex flex-wrap gap-2 pt-2 border-b border-[#1B1B18]/10 pb-4">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`px-4 py-2 font-['Space_Mono'] text-[0.68rem] uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                filter === tab.key
                  ? 'bg-[#1B1B18] text-[#F8F7F4] font-bold border border-[#1B1B18]'
                  : 'bg-white text-[#1B1B18]/70 border border-[#1B1B18]/15 hover:border-[#1B1B18] hover:text-[#1B1B18]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => {
            const projectNumber = String(idx + 1).padStart(2, '0');
            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer border border-[#1B1B18]/15 bg-white hover:border-[#A68B6E] transition-all duration-300 flex flex-col justify-between shadow-sm relative"
              >
                {/* Featured Star Badge */}
                {project.isFeatured && (
                  <div className="absolute top-3 right-3 z-10 bg-[#A68B6E] text-white px-2 py-0.5 font-['Space_Mono'] text-[0.55rem] uppercase tracking-widest font-bold flex items-center gap-1 shadow-sm">
                    <Star className="w-3 h-3 fill-current" />
                    <span>Destaque</span>
                  </div>
                )}

                {/* Project Image Container with WebP & Skeleton */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#F8F7F4] border-b border-[#1B1B18]/10">
                  <ProjectImage
                    src={project.image}
                    alt={project.title}
                    isMilitary={project.category === 'militar'}
                    className="group-hover:scale-105"
                  />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-[#1B1B18] text-[#F8F7F4] px-2.5 py-1 font-['Space_Mono'] text-[0.6rem] uppercase tracking-wider z-10">
                    {project.categoryLabel}
                  </div>

                  <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-xs text-[#1B1B18] bg-white/95 backdrop-blur-sm px-2.5 py-1 border border-[#1B1B18]/10 font-['Space_Mono'] text-[0.6rem] uppercase z-10">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#A68B6E]" />
                      {project.year}
                    </span>
                    <span className="flex items-center gap-1 truncate max-w-[150px]">
                      <MapPin className="w-3 h-3 text-[#A68B6E]" />
                      {project.location.split('/')[0]}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="font-['Space_Mono'] text-[0.62rem] text-[#A68B6E] uppercase tracking-widest font-bold block">
                      {projectNumber} // {project.category.toUpperCase()}
                    </span>
                    <h3 className="font-['Cormorant_Garamond'] text-2xl font-bold uppercase text-[#1B1B18] group-hover:text-[#A68B6E] transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-[#1B1B18]/70 text-xs sm:text-sm line-clamp-3 leading-relaxed font-['Inter']">
                      {project.summary}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 pt-2 border-t border-[#1B1B18]/10 text-xs text-[#1B1B18]/80 font-['Inter']">
                    {project.highlights.slice(0, 2).map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-1.5 line-clamp-1">
                        <CheckCircle2 className="w-3 h-3 text-[#A68B6E] shrink-0 mt-0.5" />
                        <span className="text-[0.72rem] truncate">{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Card Footer */}
                  <div className="pt-3 border-t border-[#1B1B18]/10 flex items-center justify-between font-['Space_Mono'] text-[0.65rem] text-[#1B1B18]">
                    <span className="text-[#A68B6E] font-bold uppercase tracking-wider group-hover:underline flex items-center gap-1">
                      Ver Estudo Completo <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                    {project.youtubeUrl && (
                      <a
                        href={project.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 px-2.5 py-1 bg-red-50 text-red-600 border border-red-200 hover:bg-red-600 hover:text-white transition-colors text-[0.62rem] font-bold uppercase"
                        title="Assistir Vídeo no YouTube"
                      >
                        <Youtube className="w-3.5 h-3.5" /> Vídeo 3D
                      </a>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Detail Modal with Problem -> Solution -> Result Structure */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B1B18]/80 backdrop-blur-sm overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#F8F7F4] border border-[#1B1B18] shadow-2xl p-6 sm:p-9 space-y-7 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 border border-[#1B1B18]/20 bg-white text-[#1B1B18] hover:bg-[#1B1B18] hover:text-white transition-colors cursor-pointer"
              aria-label="Fechar janela"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pr-12">
              <div className="flex flex-wrap gap-2 items-center font-['Space_Mono'] text-[0.65rem] uppercase">
                <span className="px-2.5 py-1 bg-[#1B1B18] text-[#F8F7F4]">
                  {selectedProject.categoryLabel}
                </span>
                <span className="text-[#1B1B18]/60">
                  {selectedProject.year}
                </span>
                {selectedProject.area && (
                  <span className="px-2 py-0.5 border border-[#1B1B18]/20 bg-white text-[#1B1B18]">
                    Área: {selectedProject.area}
                  </span>
                )}
                {selectedProject.isFeatured && (
                  <span className="px-2 py-0.5 bg-[#A68B6E] text-white font-bold">
                    PROJETO ÂNCORA
                  </span>
                )}
              </div>

              <h3 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl font-bold uppercase text-[#1B1B18] leading-tight">
                {selectedProject.title}
              </h3>

              <div className="flex flex-wrap items-center gap-4 text-xs text-[#1B1B18]/70 pt-1 font-['Space_Mono'] text-[0.65rem]">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#A68B6E]" />
                  {selectedProject.location}
                </span>
                {selectedProject.client && (
                  <span>
                    <strong>Contratante:</strong> {selectedProject.client}
                  </span>
                )}
              </div>
            </div>

            {/* Modal Image */}
            <div className="relative aspect-[16/9] border border-[#1B1B18] overflow-hidden bg-white">
              <ProjectImage
                src={selectedProject.image}
                alt={selectedProject.title}
                isMilitary={selectedProject.category === 'militar'}
              />
            </div>

            {/* Verifiable Technical Registration Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {selectedProject.registry && (
                <div className="p-3.5 border border-[#1B1B18]/15 bg-white flex items-start gap-3">
                  <FileCheck className="w-4 h-4 text-[#A68B6E] shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-['Space_Mono'] uppercase text-[#1B1B18]/50 block font-semibold text-[0.6rem] tracking-wider">
                      REGISTRO DE RESPONSABILIDADE
                    </span>
                    <span className="text-[#1B1B18] font-['Space_Mono'] font-bold text-xs">
                      {selectedProject.registry}
                    </span>
                  </div>
                </div>
              )}

              {selectedProject.evidenceDoc && (
                <div className="p-3.5 border border-[#1B1B18]/15 bg-white flex items-start gap-3">
                  <Award className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-['Space_Mono'] uppercase text-[#1B1B18]/50 block font-semibold text-[0.6rem] tracking-wider">
                      EVIDÊNCIA TÉCNICA VERIFICÁVEL
                    </span>
                    <span className="text-[#1B1B18] font-['Space_Mono'] font-bold text-xs">
                      {selectedProject.evidenceDoc}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Problem -> Solution -> Results Block */}
            {selectedProject.problem && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-['Inter']">
                <div className="p-4 bg-amber-500/5 border border-amber-500/20 space-y-1.5">
                  <span className="font-['Space_Mono'] text-[0.62rem] uppercase tracking-widest text-amber-700 font-bold block flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> 01 // O PROBLEMA
                  </span>
                  <p className="text-xs text-[#1B1B18]/80 leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>

                <div className="p-4 bg-blue-500/5 border border-blue-500/20 space-y-1.5">
                  <span className="font-['Space_Mono'] text-[0.62rem] uppercase tracking-widest text-blue-700 font-bold block flex items-center gap-1">
                    <Compass className="w-3 h-3" /> 02 // ATUAÇÃO & METODOLOGIA
                  </span>
                  <p className="text-xs text-[#1B1B18]/80 leading-relaxed">
                    {selectedProject.solutionMethod || selectedProject.myRoleDetail}
                  </p>
                </div>

                <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 space-y-1.5">
                  <span className="font-['Space_Mono'] text-[0.62rem] uppercase tracking-widest text-emerald-700 font-bold block flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> 03 // RESULTADOS REAIS
                  </span>
                  <ul className="text-xs text-[#1B1B18]/80 space-y-1">
                    {selectedProject.resultsAchieved?.map((res, rIdx) => (
                      <li key={rIdx} className="leading-snug flex items-start gap-1">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span>{res}</span>
                      </li>
                    )) || (
                      <li>{selectedProject.highlights[0]}</li>
                    )}
                  </ul>
                </div>
              </div>
            )}

            {/* Full Technical Memorial */}
            <div className="space-y-2">
              <h4 className="font-['Space_Mono'] text-[0.65rem] uppercase tracking-[0.2em] text-[#A68B6E] font-bold">
                Memorial Descritivo Completo
              </h4>
              <p className="text-[#1B1B18]/85 text-sm leading-relaxed font-['Inter']">
                {selectedProject.description}
              </p>
            </div>

            {/* Deliverables & Tags */}
            <div className="space-y-3 pt-2 border-t border-[#1B1B18]/10">
              <div>
                <span className="font-['Space_Mono'] text-[0.62rem] uppercase tracking-widest text-[#1B1B18]/50 block font-semibold mb-2">
                  Entregáveis Técnicos:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.deliverables.map((item, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 font-['Space_Mono'] text-[0.65rem] border border-[#1B1B18]/15 bg-white text-[#1B1B18]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((tag, idx) => (
                    <span key={idx} className="text-[0.6rem] font-['Space_Mono'] text-[#A68B6E] uppercase">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {selectedProject.youtubeUrl && (
                    <a
                      href={selectedProject.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-colors font-['Space_Mono'] text-[0.65rem] uppercase flex items-center gap-1.5"
                    >
                      <Youtube className="w-4 h-4" />
                      <span>Ver Animação 3D</span>
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2 border border-[#1B1B18] bg-[#1B1B18] text-white hover:bg-[#A68B6E] hover:border-[#A68B6E] transition-colors font-['Space_Mono'] text-[0.65rem] uppercase cursor-pointer"
                  >
                    Fechar Detalhes
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
