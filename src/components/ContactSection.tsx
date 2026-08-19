import React, { useState } from 'react';
import { MessageSquare, Check, Copy, Shield, Send, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Projeto Arquitetônico / BIM',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const generateWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Olá, Patrike! Meu nome é ${formData.name || 'Visitante'}.\nE-mail: ${formData.email}\nTelefone: ${formData.phone || 'Não informado'}\nÁrea de Interesse: ${formData.subject}\n\nDetalhes da Demanda:\n${formData.message}`
    );
    return `https://wa.me/${PERSONAL_INFO.phoneClean}?text=${text}`;
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-[#F8F7F4] border-b border-[#1B1B18]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-16">
          <span className="font-['Space_Mono'] text-[0.65rem] uppercase tracking-[0.2em] text-[#A68B6E] font-bold block">
            06 // CANAIS DIRETOS & ATENDIMENTO
          </span>
          <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-6xl font-normal text-[#1B1B18] uppercase tracking-[-0.02em]">
            Contato & Propostas
          </h2>
          <p className="text-[#1B1B18]/70 text-sm sm:text-base">
            Disponível para consultorias técnicas, elaboração de projetos arquitetônicos, masterplans territoriais, vistorias e pareceres periciais.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Col 1: Direct Contact Information (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Actions Card */}
            <div className="p-6 sm:p-7 bg-white border border-[#1B1B18]/15 space-y-4 shadow-sm">
              <h3 className="font-['Cormorant_Garamond'] text-2xl font-bold uppercase text-[#1B1B18]">
                Canais de Atendimento
              </h3>

              {/* Primary Email */}
              <div className="p-4 bg-[#F8F7F4] border border-[#1B1B18]/10 flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="font-['Space_Mono'] text-[0.6rem] uppercase tracking-widest text-[#1B1B18]/50 block">E-MAIL PROFISSIONAL</span>
                  <a href={`mailto:${PERSONAL_INFO.emailPrimary}`} className="text-xs sm:text-sm font-semibold text-[#1B1B18] hover:text-[#A68B6E] transition-colors font-['Space_Mono']">
                    {PERSONAL_INFO.emailPrimary}
                  </a>
                </div>
                <button
                  onClick={() => handleCopy(PERSONAL_INFO.emailPrimary, 'email')}
                  className="p-2 border border-[#1B1B18]/15 bg-white text-[#1B1B18] hover:bg-[#1B1B18] hover:text-white transition-colors cursor-pointer"
                  title="Copiar e-mail"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone / WhatsApp */}
              <div className="p-4 bg-[#F8F7F4] border border-[#1B1B18]/10 flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="font-['Space_Mono'] text-[0.6rem] uppercase tracking-widest text-[#1B1B18]/50 block">TELEFONE / WHATSAPP</span>
                  <a href={`tel:${PERSONAL_INFO.phoneClean}`} className="text-xs sm:text-sm font-semibold text-[#1B1B18] hover:text-[#A68B6E] transition-colors font-['Space_Mono']">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                    className="p-2 border border-[#1B1B18]/15 bg-white text-[#1B1B18] hover:bg-[#1B1B18] hover:text-white transition-colors cursor-pointer"
                    title="Copiar telefone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={`https://wa.me/${PERSONAL_INFO.phoneClean}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-[#1B1B18] text-[#F8F7F4] hover:bg-[#A68B6E] transition-colors"
                    title="Abrir WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

            {/* Official Institutional Badge Card */}
            <div className="p-6 sm:p-7 bg-white border border-[#1B1B18]/15 space-y-4 shadow-sm">
              <h3 className="font-['Cormorant_Garamond'] text-xl font-bold uppercase text-[#1B1B18]">
                Sede & Base Institucional
              </h3>

              <div className="space-y-3 text-xs text-[#1B1B18]">
                <div className="flex items-start gap-3">
                  <Shield className="w-4 h-4 text-[#A68B6E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-['Space_Mono'] text-[0.65rem] uppercase block">ATUAÇÃO PROFISSIONAL</strong>
                    <span>CRO/11 — Quartel-General do Exército (QGEx)</span><br />
                    <span className="font-['Space_Mono'] text-[#1B1B18]/60 text-[0.65rem]">Setor Militar Urbano, Brasília - DF</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Col 2: Structured Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 bg-white border border-[#1B1B18]/15 shadow-sm">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 border border-[#1B1B18] bg-[#F8F7F4] text-[#1B1B18] flex items-center justify-center mx-auto">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="font-['Cormorant_Garamond'] text-3xl font-bold uppercase text-[#1B1B18]">
                    Mensagem Preparada com Sucesso
                  </h3>
                  <p className="text-[#1B1B18]/80 text-sm max-w-md mx-auto font-['Inter']">
                    Obrigado, <strong>{formData.name}</strong>. Para envio imediato com resposta rápida, clique no botão abaixo para encaminhar sua solicitação no WhatsApp.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 pt-4">
                    <a
                      href={generateWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-[#F8F7F4] font-['Space_Mono'] text-[0.7rem] uppercase tracking-wider font-bold transition-colors flex items-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Abrir no WhatsApp</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', subject: 'Projeto Arquitetônico / BIM', message: '' });
                      }}
                      className="px-5 py-3.5 border border-[#1B1B18]/20 bg-white text-[#1B1B18] font-['Space_Mono'] text-[0.65rem] uppercase tracking-wider font-semibold cursor-pointer"
                    >
                      Nova Mensagem
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-['Cormorant_Garamond'] text-3xl font-bold uppercase text-[#1B1B18]">
                    Solicitar Proposta ou Parecer
                  </h3>
                  <p className="font-['Space_Mono'] text-[0.65rem] text-[#1B1B18]/60 uppercase">
                    Preencha os campos para receber uma análise técnica preliminar sem compromisso.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="space-y-1">
                      <label className="font-['Space_Mono'] text-[0.62rem] uppercase tracking-widest text-[#1B1B18]/60 font-bold">Nome Completo *</label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Roberto Almeida"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 bg-[#F8F7F4] border border-[#1B1B18]/15 text-sm text-[#1B1B18] placeholder-[#1B1B18]/40 focus:outline-none focus:border-[#1B1B18] transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-['Space_Mono'] text-[0.62rem] uppercase tracking-widest text-[#1B1B18]/60 font-bold">E-mail *</label>
                      <input
                        type="email"
                        required
                        placeholder="nome@empresa.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 bg-[#F8F7F4] border border-[#1B1B18]/15 text-sm text-[#1B1B18] placeholder-[#1B1B18]/40 focus:outline-none focus:border-[#1B1B18] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="font-['Space_Mono'] text-[0.62rem] uppercase tracking-widest text-[#1B1B18]/60 font-bold">Telefone / WhatsApp</label>
                      <input
                        type="tel"
                        placeholder="(61) 90000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 bg-[#F8F7F4] border border-[#1B1B18]/15 text-sm text-[#1B1B18] placeholder-[#1B1B18]/40 focus:outline-none focus:border-[#1B1B18] transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-['Space_Mono'] text-[0.62rem] uppercase tracking-widest text-[#1B1B18]/60 font-bold">Tipo de Serviço</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-2.5 bg-[#F8F7F4] border border-[#1B1B18]/15 text-sm text-[#1B1B18] focus:outline-none focus:border-[#1B1B18] transition-colors"
                      >
                        <option value="Projeto Arquitetônico / BIM">Projeto Arquitetônico / BIM</option>
                        <option value="Urbanismo, Masterplan & Glebas">Urbanismo, Masterplan & Glebas</option>
                        <option value="Geoprocessamento / SIG & Mapas">Geoprocessamento / SIG & Mapas</option>
                        <option value="Consultoria em Licitações (Lei 14.133)">Consultoria em Licitações (Lei 14.133)</option>
                        <option value="Perícia, Vistoria & Parecer Técnico">Perícia, Vistoria & Parecer Técnico</option>
                        <option value="Neuroarquitetura & Saúde">Neuroarquitetura & Saúde</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-['Space_Mono'] text-[0.62rem] uppercase tracking-widest text-[#1B1B18]/60 font-bold">Detalhes da Demanda *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Descreva detalhes do projeto, metragem estimada ou localização do imóvel..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#F8F7F4] border border-[#1B1B18]/15 text-sm text-[#1B1B18] placeholder-[#1B1B18]/40 focus:outline-none focus:border-[#1B1B18] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 border border-[#1B1B18] bg-[#1B1B18] text-[#F8F7F4] hover:bg-[#A68B6E] hover:border-[#A68B6E] font-['Space_Mono'] font-bold text-[0.7rem] uppercase tracking-[0.15em] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Preparar Solicitação</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
