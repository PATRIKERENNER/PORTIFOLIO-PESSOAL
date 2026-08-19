import React, { useState } from 'react';
import { Building2, MapPin, ShieldCheck, Users, Search, Wrench } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const iconMap: Record<string, React.ElementType> = {
    Building2,
    MapPin,
    ShieldCheck,
    Users
  };

  const allSkills = SKILL_CATEGORIES.flatMap(cat => 
    cat.skills.map(skill => ({ ...skill, categoryTitle: cat.title }))
  );

  const filteredSkills = searchTerm.trim()
    ? allSkills.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()) || (s.tag && s.tag.toLowerCase().includes(searchTerm.toLowerCase())))
    : null;

  return (
    <section id="habilidades" className="py-20 md:py-28 bg-[#F8F7F4] border-b border-[#1B1B18]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <span className="font-['Space_Mono'] text-[0.65rem] uppercase tracking-[0.2em] text-[#A68B6E] font-bold block">
              03 // COMPETÊNCIAS & FERRAMENTAS
            </span>
            <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-6xl font-normal text-[#1B1B18] uppercase tracking-[-0.02em]">
              Habilidades Técnicas
            </h2>
            <p className="text-[#1B1B18]/70 text-sm sm:text-base">
              Softwares de modelagem espacial, sistemas cartográficos e governança normativa.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#1B1B18]/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar software ou competência..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#1B1B18]/15 text-xs text-[#1B1B18] placeholder-[#1B1B18]/40 focus:outline-none focus:border-[#1B1B18] transition-colors font-['Space_Mono']"
            />
          </div>
        </div>

        {/* Filtered Search Results */}
        {filteredSkills ? (
          <div className="space-y-4">
            <div className="font-['Space_Mono'] text-[0.65rem] text-[#1B1B18]/60 uppercase tracking-widest">
              Resultados encontrados ({filteredSkills.length})
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredSkills.map((skill, idx) => (
                <div key={idx} className="p-4 bg-white border border-[#1B1B18]/15 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#1B1B18]">{skill.name}</span>
                    {skill.tag && (
                      <span className="font-['Space_Mono'] text-[0.6rem] px-2 py-0.5 border border-[#1B1B18]/15 bg-[#F8F7F4] text-[#A68B6E] font-bold">
                        {skill.tag}
                      </span>
                    )}
                  </div>
                  <div className="w-full bg-[#F8F7F4] h-1.5 overflow-hidden border border-[#1B1B18]/10">
                    <div className="bg-[#1B1B18] h-full" style={{ width: `${skill.level}%` }} />
                  </div>
                  <div className="font-['Space_Mono'] text-[0.6rem] text-[#1B1B18]/50">
                    {skill.categoryTitle}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Normal Tabbed View */
          <div className="space-y-8">
            
            {/* Category Tabs */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
              {SKILL_CATEGORIES.map((cat, idx) => {
                const IconComponent = iconMap[cat.icon] || Wrench;
                const isActive = activeCategory === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveCategory(idx)}
                    className={`p-4 text-left transition-all border flex items-center gap-3.5 ${
                      isActive
                        ? 'bg-[#1B1B18] text-[#F8F7F4] border-[#1B1B18] shadow-sm'
                        : 'bg-white border-[#1B1B18]/15 hover:border-[#1B1B18] text-[#1B1B18]'
                    }`}
                  >
                    <div className={`w-9 h-9 flex items-center justify-center shrink-0 border ${
                      isActive ? 'bg-[#A68B6E] text-[#F8F7F4] border-[#A68B6E]' : 'bg-[#F8F7F4] text-[#1B1B18] border-[#1B1B18]/10'
                    }`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <div className={`text-xs font-bold leading-tight font-['Space_Mono'] uppercase tracking-wider ${
                        isActive ? 'text-[#F8F7F4]' : 'text-[#1B1B18]'
                      }`}>
                        {cat.title}
                      </div>
                      <div className="font-['Space_Mono'] text-[0.6rem] text-[#A68B6E] mt-0.5 uppercase tracking-wider">
                        {cat.skills.length} itens
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Category Skills Grid */}
            <div className="p-6 sm:p-8 bg-white border border-[#1B1B18]/15 shadow-sm">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#1B1B18]/10">
                <h3 className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl font-bold uppercase text-[#1B1B18]">
                  {SKILL_CATEGORIES[activeCategory].title}
                </h3>
                <span className="font-['Space_Mono'] text-[0.65rem] uppercase tracking-widest text-[#A68B6E] font-bold">
                  Nível de Proficiência
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {SKILL_CATEGORIES[activeCategory].skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-[#1B1B18]">
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-2">
                        {skill.tag && (
                          <span className="font-['Space_Mono'] text-[0.6rem] px-2 py-0.5 border border-[#1B1B18]/10 bg-[#F8F7F4] text-[#A68B6E] font-bold">
                            {skill.tag}
                          </span>
                        )}
                        <span className="font-['Space_Mono'] text-xs text-[#1B1B18]/60 font-bold">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-[#F8F7F4] h-2 overflow-hidden border border-[#1B1B18]/10">
                      <div
                        className="bg-[#1B1B18] h-full transition-all duration-700 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
