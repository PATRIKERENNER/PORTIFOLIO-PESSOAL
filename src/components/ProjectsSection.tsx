import React, { useState } from 'react';
import { MapPin, Calendar, Check, X, Youtube, FileCheck, ArrowUpRight } from 'lucide-react';
import { Project, PROJECTS } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos os Trabalhos' },
    { id: 'sig', label: 'SIG & Geoprocessamento' },
    { id: 'urbanismo', label: 'Urbanismo & Masterplans' },
    { id: 'arquitetura', label: 'Arquitetura & Rural' },
    { id: 'militar', label: 'Engenharia Militar & Obras' }
  ];

  const filteredProjects = activeCategory === 'todos'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projetos" className="py-20 md:py-28 bg-[#F8F7F4] border-b border-[#1B1B18]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <span className="font-['Space_Mono'] text-[0.65rem] uppercase tracking-[0.2em] text-[#A68B6E] font-bold block">
              02 // PORTFÓLIO & ACERVO TÉCNICO
            </span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-6xl font-normal text-[#1B1B18] uppercase tracking-[-0.02em]">
              Projetos & Obras
            </h2>
            <p className="text-[#1B1B18]/70 text-sm sm:text-base">
              Seleção de projetos com registro de Responsabilidade Técnica (RRT/TRT), patentes no CAU-BR e soluções territoriais.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 font-['Space_Mono'] text-[0.65rem] uppercase tracking-wider transition-all whitespace-nowrap border ${
                  activeCategory === cat.id
                    ? 'bg-[#1B1B18] text-[#F8F7F4] border-[#1B1B18]'
                    : 'bg-white text-[#1B1B18] border-[#1B1B18]/15 hover:border-[#1B1B18]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => {
            const projectNumber = String(idx + 1).padStart(2, '0');
            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer border border-[#1B1B18]/15 bg-white hover:border-[#A68B6E] transition-all duration-300 flex flex-col justify-between shadow-sm"
              >
                {/* Project Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#F8F7F4] border-b border-[#1B1B18]/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className={`w-full h-full ${project.category === 'militar' ? 'object-contain p-4 bg-white' : 'object-cover'} group-hover:scale-105 transition-transform duration-500`}
                  />
                  
                  {/* Space Mono Tag */}
                  <div className="absolute top-3 left-3 bg-[#1B1B18] text-[#F8F7F4] px-2.5 py-1 font-['Space_Mono'] text-[0.6rem] uppercase tracking-wider">
                    {project.categoryLabel}
                  </div>

                  <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-xs text-[#1B1B18] bg-white/95 backdrop-blur-sm px-2.5 py-1 border border-[#1B1B18]/10 font-['Space_Mono'] text-[0.6rem] uppercase">
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

                  <div className="pt-4 border-t border-[#1B1B18]/10 flex items-center justify-between font-['Space_Mono'] text-[0.65rem]">
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 2).map((t, tIdx) => (
                        <span key={tIdx} className="px-2 py-0.5 border border-[#1B1B18]/10 text-[#1B1B18]/70 uppercase">
                          {t}
                        </span>
                      ))}
                    </div>

                    <span className="font-bold text-[#1B1B18] group-hover:text-[#A68B6E] flex items-center gap-1 uppercase tracking-wider">
                      Ver <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B1B18]/80 backdrop-blur-sm overflow-y-auto">
          <div 
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#F8F7F4] border border-[#1B1B18] shadow-2xl p-6 sm:p-8 space-y-6 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 border border-[#1B1B18]/20 bg-white text-[#1B1B18] hover:bg-[#1B1B18] hover:text-white transition-colors"
              aria-label="Fechar janela"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pr-10">
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
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                referrerPolicy="no-referrer"
                className={`w-full h-full ${selectedProject.category === 'militar' ? 'object-contain p-6' : 'object-cover'}`}
              />
            </div>

            {/* Technical Registration Badge */}
            {selectedProject.registry && (
              <div className="p-4 border border-[#1B1B18]/15 bg-white flex items-start gap-3.5">
                <FileCheck className="w-5 h-5 text-[#A68B6E] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-['Space_Mono'] uppercase text-[#1B1B18]/50 block font-semibold text-[0.6rem] tracking-wider">REGISTRO DE RESPONSABILIDADE TÉCNICA</span>
                  <span className="text-[#1B1B18] font-['Space_Mono'] font-bold text-xs">{selectedProject.registry}</span>
                </div>
              </div>
            )}

            {/* Full Description */}
            <div className="space-y-2">
              <h4 className="font-['Space_Mono'] text-[0.65rem] uppercase tracking-[0.2em] text-[#A68B6E] font-bold">
                Memorial & Descrição Técnica
              </h4>
              <p className="text-[#1B1B18]/80 text-sm leading-relaxed font-['Inter']">
                {selectedProject.description}
              </p>
            </div>

            {/* Highlights list */}
            {selectedProject.highlights.length > 0 && (
              <div className="space-y-2.5">
                <h4 className="font-['Space_Mono'] text-[0.65rem] uppercase tracking-[0.2em] text-[#A68B6E] font-bold">
                  Destaques Projetuais & Resultados
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#1B1B18]/80">
                      <Check className="w-4 h-4 text-[#A68B6E] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Deliverables */}
            {selectedProject.deliverables.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-['Space_Mono'] text-[0.6rem] uppercase tracking-widest text-[#1B1B18]/50">
                  Entregas Técnicas Realizadas
                </h4>
                <div className="flex flex-wrap gap-2 font-['Space_Mono'] text-[0.65rem]">
                  {selectedProject.deliverables.map((d, i) => (
                    <span key={i} className="px-3 py-1 bg-white border border-[#1B1B18]/15 text-[#1B1B18]">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* External / Video Links */}
            <div className="pt-4 border-t border-[#1B1B18]/10 flex flex-wrap items-center justify-between gap-3">
              {selectedProject.youtubeUrl ? (
                <a
                  href={selectedProject.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-red-50 border border-red-200 text-red-800 font-['Space_Mono'] text-[0.65rem] uppercase tracking-wider font-bold transition-colors flex items-center gap-2"
                >
                  <Youtube className="w-4 h-4 text-red-600" />
                  <span>Assistir Conceito 3D no YouTube</span>
                </a>
              ) : <div />}

              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 border border-[#1B1B18] bg-[#1B1B18] text-[#F8F7F4] hover:bg-[#A68B6E] hover:border-[#A68B6E] font-['Space_Mono'] text-[0.65rem] uppercase tracking-wider font-bold transition-colors cursor-pointer"
              >
                Fechar
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
