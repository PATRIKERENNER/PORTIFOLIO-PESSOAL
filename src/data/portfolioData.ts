export interface Project {
  id: string;
  title: string;
  category: 'urbanismo' | 'arquitetura' | 'sig' | 'militar' | 'consultoria';
  categoryLabel: string;
  year: string;
  location: string;
  role: string;
  registry?: string; // RRT / TRT / RDA
  client?: string;
  area?: string;
  summary: string;
  description: string;
  highlights: string[];
  deliverables: string[];
  image: string;
  youtubeUrl?: string;
  tags: string[];
}

export interface Experience {
  period: string;
  role: string;
  institution: string;
  department?: string;
  type: 'publico' | 'militar' | 'voluntario' | 'privado';
  description: string;
  achievements: string[];
}

export interface Education {
  period: string;
  degree: string;
  institution: string;
  title?: string;
  type: 'pos' | 'graduacao' | 'tecnico' | 'complementar';
  hours?: string;
  details?: string;
}

export interface Publication {
  year: string;
  title: string;
  publisher: string;
  isbn?: string;
  doi?: string;
  type: 'livro' | 'patente' | 'tecnico';
  description: string;
  link?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: number; tag?: string }[];
}

export const PERSONAL_INFO = {
  name: 'Patrike Mayko Renner Reis de Abreu',
  displayName: 'Patrike Renner',
  tagline: 'Arquiteto & Urbanista | Especialista em Neuroarquitetura & Geoprocessamento',
  subTagline: '3º Sargento do Exército Brasileiro (CRO-11) • Especialista em Direito Ambiental & Urbanístico',
  bio: `Arquiteto e Urbanista com sólida trajetória multidisciplinar de mais de 15 anos integrando desenho arquitetônico, planejamento urbano, geoprocessamento estratégico (SIG) e gestão pública de infraestrutura. Atualmente militar da ativa do Exército Brasileiro (3º Sargento Técnico na Comissão Regional de Obras da 11ª Região Militar - CRO/11), com passagens expressivas pelo Governo do Distrito Federal (NOVACAP, DER-DF, Administração Regional de Vicente Pires e IBRAM) e órgãos do Poder Judiciário (TRE-DF e MPDFT).`,
  objective: `Promover soluções arquitetônicas, urbanísticas e territoriais de alta precisão que combinem rigor técnico, conformidade legal com a Nova Lei de Licitações (Lei 14.133/2021), eficiência orçamentária, bem-estar humano orientado pela Neuroarquitetura e inovação tecnológica por meio de Geoprocessamento e modelagem BIM.`,
  councilStatus: 'REGISTROS ATIVOS JUNTO AO CAU/BR E CFT/BR',
  cau: 'REGISTRO ATIVO CAU/BR',
  cft: 'REGISTRO ATIVO CFT/BR',
  lattes: 'https://lattes.cnpq.br/7539135599201548',
  lattesId: '7539135599201548',
  emailPrimary: 'arquitetopatrike@gmail.com',
  phone: '(61) 99847-1961',
  phoneClean: '5561998471961',
  location: 'Brasília - DF, Brasil',
  armyUnit: 'Comissão Regional de Obras da 11ª Região Militar (CRO/11 - QGEx)',
  profileImage: '/src/assets/images/patrike_renner_profile_1787153663807.jpg'
};

export const HIGHLIGHTS_METRICS = [
  { value: '15+', label: 'Anos de Experiência', detail: 'Projetos públicos, militares e privados' },
  { value: '50k+ m²', label: 'Área Planejada', detail: 'Masterplans rurais, urbanos e institucionais' },
  { value: '4', label: 'Especializações Pós-Grad', detail: 'Neuroarquitetura, Ambiental, Urbanismo e Forense' },
  { value: '02', label: 'Livros Publicados', detail: 'Editora Dialética & CBL' }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Arquitetura, BIM & Visualização',
    icon: 'Building2',
    skills: [
      { name: 'Autodesk Revit Architecture (BIM)', level: 95, tag: 'BIM' },
      { name: 'AutoCAD 2D / 3D Avançado', level: 98, tag: 'CAD' },
      { name: 'Google SketchUp & Renderização 3D', level: 92, tag: '3D' },
      { name: 'Maquetes Eletrônicas Fotorrealistas', level: 90, tag: 'Visual' },
      { name: 'Detalhamento Executivo e Cortes/Fachadas', level: 96, tag: 'Projeto' },
      { name: 'Projetos de Acessibilidade (NBR 9050 / NBR 16537)', level: 95, tag: 'Normas' },
      { name: 'Neuroarquitetura & Espaços Hospitalares', level: 90, tag: 'Especialidade' },
      { name: 'Domótica, Iluminação e Paisagismo Bioclimático', level: 88, tag: 'Sustentável' }
    ]
  },
  {
    title: 'Geoprocessamento, SIG & Cartografia',
    icon: 'MapPin',
    skills: [
      { name: 'Sistemas de Informações Geográficas (SIG / GIS)', level: 94, tag: 'SIG' },
      { name: 'Mapeamento e Sensoriamento Remoto (Radar SAR Bandas X/P)', level: 90, tag: 'Satélite' },
      { name: 'Geração de Modelos Digitais DTM e DSM', level: 88, tag: 'Topografia' },
      { name: 'Geoinformação Ambiental de Parques & Nascentes', level: 92, tag: 'Ambiental' },
      { name: 'Operação de Drones e Levantamento Cadastral Planialtimétrico', level: 86, tag: 'VANT' },
      { name: 'Análise Espacial de Tráfego e Redes Rodoviárias', level: 92, tag: 'Mobilidade' }
    ]
  },
  {
    title: 'Gestão Pública, Licitações & Obras',
    icon: 'ShieldCheck',
    skills: [
      { name: 'Nova Lei de Licitações e Contratos (Lei 14.133/2021)', level: 92, tag: 'Legislação' },
      { name: 'Elaboração de Termos de Referência e Projetos Básicos', level: 95, tag: 'Gestão' },
      { name: 'Fiscalização e Acompanhamento de Obras de Engenharia', level: 94, tag: 'Campo' },
      { name: 'Sistema Eletrônico de Informações (SEI!) & SIAFI Básico', level: 90, tag: 'Sistemas' },
      { name: 'Avaliação de Imóveis Urbanos & Perícias Técnicas', level: 88, tag: 'Perícia' },
      { name: 'Licenciamento Ambiental Federal de Transportes', level: 90, tag: 'Licenciamento' },
      { name: 'Gestão do Patrimônio Imobiliário da União', level: 88, tag: 'Patrimônio' }
    ]
  },
  {
    title: 'Competências Interpessoais & Liderança',
    icon: 'Users',
    skills: [
      { name: 'Liderança de Equipes Multidisciplinares de Engenharia', level: 95 },
      { name: 'Comunicação Assertiva, Palestras e Instrução Técnica', level: 92 },
      { name: 'Mediação de Conflitos e Articulação Interinstitucional', level: 90 },
      { name: 'Rigor Ético, Transparência e Controle de Danos ao Erário', level: 98 },
      { name: 'Gestão Comunitária, Voluntariado e Coordenação Social', level: 96 },
      { name: 'Atuação em Segurança e Brigada de Emergência', level: 90 }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'painel-pare-der',
    title: 'Painel PARE/DF — Sistema Analítico de Acidentes Rodoviários',
    category: 'sig',
    categoryLabel: 'Geoprocessamento & SIG',
    year: '2020 - 2021',
    location: 'DER-DF / Brasília - DF',
    role: 'Desenvolvedor & Analista de Geoprocessamento (GEGEO/COPLAN)',
    client: 'Departamento de Estradas de Rodagem do DF (DER-DF)',
    summary: 'Plataforma analítica e interativa baseada em SIG para espacialização, mapeamento de calor e diagnóstico preditivo de acidentes de trânsito em toda a malha rodoviária do Distrito Federal.',
    description: 'Solução tecnológica institucional que integrou bases de dados de acidentes com georreferenciamento de precisão. O painel fornece suporte a tomadas de decisão para investimentos em engenharia de tráfego, duplicações de rodovias, passarelas de pedestres, fiscalização eletrônica (pardais) e campanhas educativas da SUTRAN.',
    highlights: [
      'Espacialização completa de ocorrências rodoviárias em toda a malha do DF',
      'Mapeamento dinâmico de pontos críticos de sinistros viários',
      'Suporte direto a obras estruturais de mitigação de acidentes e segurança coletiva',
      'Integração multi-institucional entre GEGEO, COPLAN e SUTRAN'
    ],
    deliverables: ['Dashboard Interativo SIG', 'Bases de Dados Georreferenciadas', 'Relatórios Técnicos para Obras de Engenharia'],
    image: '/src/assets/images/painel_pare_sig_1787152318283.jpg',
    tags: ['SIG / GIS', 'Mobilidade Urbana', 'DER-DF', 'Georreferenciamento', 'Segurança Viária']
  },
  {
    id: 'arena-adeb-patente',
    title: 'Complexo Multiuso Arena ADEB (Patente RDA Nº 2734)',
    category: 'urbanismo',
    categoryLabel: 'Urbanismo & Masterplan',
    year: '2023',
    location: 'Taguatinga Sul - DF (Área Especial Sandu Sul)',
    role: 'Arquiteto Autor & Consultor Projetual Titular',
    registry: 'Registro de Patente RDA Nº 2734 CAU-BR / CAU-DF | RRT 13029248',
    client: 'Igreja Evangélica Assembleia de Deus de Brasília (ADEB)',
    area: '33.612 m²',
    summary: 'Masterplan arquitetônico e urbanístico de grande porte para centro cultural e esportivo comunitário com patente de modelo de utilidade registrada no CAU-BR.',
    description: 'Projeto completo de planejamento de uso do solo e viabilidade espacial contemplando: Centro Cultural Multidisciplinar, Sede Administrativa, Alojamentos e Apartamentos de Trânsito, Pavilhão Infantil UCADEB, Edifício de Múltiplo Uso, Estacionamento para 1.200 veículos, Heliponto, Terminal de Cargas e Passageiros sobre Pilotis, Praça da Juventude e Praça de Alimentação.',
    highlights: [
      'Patente de Modelo de Utilidade depositada no Conselho de Arquitetura e Urbanismo (CAU-BR)',
      'Planejamento de fluxos para grandes concentrações de público com segurança e acessibilidade plena',
      'Estudo de tráfego, impacto de vizinhança e integração com a malha viária urbana de Taguatinga',
      'Levantamento cadastral de 33.612 m² e memorial descritivo completo'
    ],
    deliverables: ['Masterplan Geral', 'Memorial Descritivo e Cadastral', 'Estudo de Viabilidade de Localização', 'Maquetes Eletrônicas 3D'],
    image: '/src/assets/images/arena_adeb_complex_1787152339254.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=ox1f0-qgYCY',
    tags: ['Masterplan', 'Patente CAU-BR', 'Grande Porte', '33.612 m²', 'BIM']
  },
  {
    id: 'sitio-maranata',
    title: 'Masterplan & Projeto Arquitetônico Sítio Maranata',
    category: 'arquitetura',
    categoryLabel: 'Arquitetura Sustentável & Rural',
    year: '2023',
    location: 'Samambaia Rural Oeste - DF (BR-060 Km 11)',
    role: 'Arquiteto Responsável Técnico',
    registry: 'RRT 12966403 - CAU/DF (Certidão de Acervo Técnico Nº 831049/2023)',
    client: 'Propriedade Privada',
    area: '51.403,79 m²',
    summary: 'Projeto arquitetônico e urbanístico integral para empreendimento rural multifuncional com chalés ecológicos, restaurante, centro de eventos e quadras poliesportivas.',
    description: 'Desenvolvimento de projeto básico e executivo com plantas baixas, cortes, fachadas, perspectivas isométricas e implantação topográfica de 51.403 m²: Edifício Sede Administrativa, Restaurante Panorâmico, Casa do Caseiro, Conjunto de Chalés Familiares, Salão de Eventos Multiuso, Vestiários Coletivos, Casa de Campo, Pórtico de Entrada, Estacionamentos e Paisagismo Nativo do Cerrado.',
    highlights: [
      'Integração paisagística e arquitetura bioclimática respeitando a topografia natural',
      'Geolocalização das edificações e preservação de vegetação nativa do bioma Cerrado',
      'Projetos de infraestrutura de lazer e hospitalidade com acessibilidade'
    ],
    deliverables: ['Plantas Baixas e Cortes', 'Projeto Urbanístico de Loteamento Interno', 'Maquete Fotorrealista 3D'],
    image: '/src/assets/images/rural_maranata_1787152366610.jpg',
    tags: ['Arquitetura Rural', 'Masterplan 51k m²', 'RRT Registrado', 'Sustentabilidade']
  },
  {
    id: 'natalandia-acesso',
    title: 'Readequação do Acesso Principal & Urbanização de Natalândia - MG',
    category: 'urbanismo',
    categoryLabel: 'Planejamento Urbano',
    year: '2019',
    location: 'Natalândia - MG',
    role: 'Consultor de Planejamento Urbano e Paisagismo',
    summary: 'Consultoria de análise projetual, requalificação viária, drenagem, acessibilidade e intervenção paisagística na entrada cênica do município de Natalândia.',
    description: 'Estudo para requalificação da mobilidade na entrada da cidade, incluindo passeios acessíveis, canteiros centrais com espécies nativas, rotatórias para ordenação do tráfego rodoviário e pórtico de boas-vindas com sinalização turística.',
    highlights: [
      'Proposta integrada de paisagismo e ordenamento de circulação viária',
      'Resolução de gargalos de conversão e segurança para pedestres e ciclistas'
    ],
    deliverables: ['Estudo de Readequação Viária', 'Proposta Paisagística em Vídeo e 3D', 'Relatório de Mobilidade'],
    image: '/src/assets/images/natalandia_urban_1787152391817.jpg',
    youtubeUrl: 'https://www.youtube.com/watch?v=ZfMd52BU09w',
    tags: ['Urbanismo', 'Mobilidade Urbana', 'Paisagismo', 'Consultoria Municipal']
  },
  {
    id: 'rancho-buriti-dourado',
    title: 'Sede & Paisagismo do Rancho Buriti Dourado',
    category: 'arquitetura',
    categoryLabel: 'Arquitetura Rural & Paisagismo',
    year: '2023',
    location: 'Núcleo Rural de Taguatinga - DF',
    role: 'Arquiteto Responsável Técnico',
    registry: 'RRT 13029248 - CAU/DF (Certidão de Acervo Nº 831049/2023)',
    area: '1.600 m²',
    summary: 'Projeto arquitetônico de residência rural contemporânea com piscina de borda infinita, cocheiras, galinheiro ecológico e paisagismo com espécies do Cerrado.',
    description: 'Projeto unindo conforto e funcionalidade rural: sede da chácara, área gourmet integrada, piscina, delimitação de áreas de plantio orgânico e confinamento zootécnico com soluções de drenagem sustentável.',
    highlights: [
      'Uso exclusivo de flora adaptada ao Cerrado com baixo consumo hídrico',
      'Levantamento cadastral e projeto de regularização fundiária da gleba'
    ],
    deliverables: ['Projeto Arquitetônico Completo', 'Levantamento Paisagístico', 'Regularização Fundiária'],
    image: '/src/assets/images/rural_maranata_1787152366610.jpg',
    tags: ['Arquitetura Residencial Rural', 'Paisagismo Cerrado', 'RRT Ativo']
  },
  {
    id: 'cro11-obras-militares',
    title: 'Atuação Técnica na CRO/11 & Mapoteca Digital do Exército',
    category: 'militar',
    categoryLabel: 'Engenharia Militar & Obras Públicas',
    year: '2023 - Atual',
    location: 'Quartel-General do Exército (QGEx) / Brasília - DF',
    role: '3º Sargento Técnico de Edificações / Auxiliar da Seção Técnica',
    registry: 'TRT CFT2302539881 & TRT CFT2504487791',
    client: 'Comissão Regional de Obras da 11ª Região Militar (CRO/11 - EB)',
    summary: 'Supervisão técnica, elaboração de desenhos arquitetônicos, levantamentos cadastrais e organização da Mapoteca Digital militar.',
    description: 'Atuação na Seção Técnica da CRO/11 em projetos de reformas de infraestruturas militares em todo o Distrito Federal, Goiás e Tocantins. Realização de vistorias com geofone para detecção de vazamentos hídricos subterrâneos (2ª Cia / 11º DSUP), projetos de acessibilidade e seminários técnicos sobre fiscalização e correção estrutural sob a Lei 14.133/2021.',
    highlights: [
      'Condecoração com Referência Elogiosa da Comissão Regional de Obras (2015)',
      'Organização e padronização da Mapoteca Digital militar com rigor cartográfico',
      'Apoio técnico a vistorias, laudos de patologias e fiscalização de contratos'
    ],
    deliverables: ['Plantas Executivas e As-Built', 'Laudos de Inspeção Predial', 'Mapoteca Digital'],
    image: '/src/assets/images/brasao_exercito_brasileiro_1787154145710.jpg',
    tags: ['Exército Brasileiro', 'CRO-11', 'Obras Militares', 'Fiscalização']
  }
];

export const EXPERIENCES: Experience[] = [
  {
    period: '2023 — Presente',
    role: '3º Sargento — Técnico em Desenho da Construção Civil & Auxiliar Técnico',
    institution: 'Exército Brasileiro — CRO/11',
    department: 'Comissão Regional de Obras da 11ª Região Militar / QGEx',
    type: 'militar',
    description: 'Elaboração e detalhamento de projetos arquitetônicos, levantamentos cadastrais planialtimétricos, fiscalização e acompanhamento de obras militares, vistorias técnicas e organização da mapoteca digital.',
    achievements: [
      'Auxiliar direto da Seção Técnica da CRO/11 em demandas operacionais e normativas',
      'Vistoria e detecção de vazamentos hídricos com geofone de precisão no 11º DSUP',
      'Apoio na organização do Seminário de Obras Militares e fiscalização conforme Lei 14.133/2021'
    ]
  },
  {
    period: '2021 — 2023',
    role: 'Desenhista Pleno — Projetos e Engenharia',
    institution: 'Exército Brasileiro — DEC',
    department: 'Departamento de Engenharia e Construção',
    type: 'militar',
    description: 'Elaboração e interpretação de esboços, croquis e plantas de arquitetura, instalações hidrossanitárias e infraestrutura civil utilizando Revit, AutoCAD e SketchUp.',
    achievements: [
      'Compatibilização de projetos multidisciplinares para unidades de engenharia militar',
      'Elaboração de memoriais descritivos e especificações de materiais de construção'
    ]
  },
  {
    period: '2020 — 2021',
    role: 'Gerente da Gerência de Adequação Viária',
    institution: 'DER-DF — Departamento de Estradas de Rodagem do DF',
    department: 'Diretoria de Engenharia / GEEAV',
    type: 'publico',
    description: 'Desenvolvimento e aprovação de projetos viários para adequação de vias públicas no DF: faixas de pedestres, lombadas físicas e eletrônicas, radares e sinalização viária.',
    achievements: [
      'Co-criador e articulador técnico do Painel PARE/DF (Sistemas de Informações Geográficas)',
      'Membro da comissão interinstitucional de implantação do Plano de Interligação da Rede Cicloviária do DF (OS nº 61/2021)'
    ]
  },
  {
    period: '2018 — 2018',
    role: 'Diretor da Diretoria de Aprovação e Licenciamento (DIALIC)',
    institution: 'Governo do Distrito Federal — RA Vicente Pires',
    department: 'Administração Regional de Vicente Pires',
    type: 'publico',
    description: 'Coordenação e emissão de pareceres em análise de projetos arquitetônicos, licenças de funcionamento e observância de normativos urbanísticos distritais.',
    achievements: [
      'Gestão de processos de licenciamento edilício em área de intensa regularização fundiária',
      'Comissão de verificação de processos de licitação de iluminação pública e obras'
    ]
  },
  {
    period: '2017 — 2018',
    role: 'Gerente da Gerência de Elaboração e Aprovação de Projetos (GEEAP)',
    institution: 'Governo do Distrito Federal — RA Vicente Pires',
    department: 'Administração Regional de Vicente Pires',
    type: 'publico',
    description: 'Análise projetual de obras públicas e privadas, vistorias em campo e organização de acervo técnico.',
    achievements: [
      'Modernização do arquivo técnico e celeridade na análise de plantas residenciais e comerciais'
    ]
  },
  {
    period: '2020',
    role: 'Analista Voluntário de Geoinformação Ambiental',
    institution: 'IBRAM — Instituto Brasília Ambiental / GDF',
    department: 'Gestão de Geoinformação Ambiental',
    type: 'voluntario',
    description: 'Análise espacial, geoprocessamento e mapeamento dos parques ecológicos e unidades de conservação do Distrito Federal (120 horas certificadas).',
    achievements: [
      'Certificação oficial "Voluntário em Ação - Geoinformação Ambiental" pelo GDF/IBRAM'
    ]
  },
  {
    period: '2011 — 2015',
    role: 'Técnico em Cartografia 2 — Mapeamento da Amazônia',
    institution: 'CIGEX — Centro de Imagens e Informações Geográficas do Exército',
    department: 'Divisão de Sensoriamento Remoto',
    type: 'militar',
    description: 'Interpretação e processamento de imagens de satélite radar SAR (Bandas X e P) e ópticas RGB no âmbito do Programa de Sensoriamento Remoto da Amazônia.',
    achievements: [
      'Geração de Modelos Digitais de Terreno (DTM) e Superfície (DSM), UPHA e coerência interferométrica'
    ]
  },
  {
    period: '2009 — 2011',
    role: 'Estagiário Superior de Arquitetura e Urbanismo',
    institution: 'NOVACAP — Companhia Urbanizadora da Nova Capital',
    department: 'Divisão de Projetos Arquitetônicos',
    type: 'publico',
    description: 'Acompanhamento de estudos, pesquisas e projetos arquitetônicos de edifícios públicos, monumentos e urbanismo em Brasília.',
    achievements: [
      'Desenvolvimento de cronogramas, plantas executivas, orçamentos e croquis para a capital federal'
    ]
  },
  {
    period: '2006 — 2007',
    role: 'Estagiário de Nível Médio com Menção Honrosa',
    institution: 'MPDFT — Ministério Público do Distrito Federal e Territórios',
    department: 'Promotorias de Justiça',
    type: 'publico',
    description: 'Apoio direto a promotores na instrução e tramitação de processos judiciais e documentação técnica.',
    achievements: [
      'Condecoração "Estagiário Destaque — Menção Honrosa" pelo MPDFT (2007)'
    ]
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    period: '2023 — 2024',
    degree: 'Pós-Graduação / Especialização em Neuroarquitetura',
    institution: 'Faculdade Unyleya (UE, Brasil)',
    title: 'Neuroarquitetura aplicada em espaços de Hospitais',
    type: 'pos',
    details: 'Estudo do impacto do ambiente construído na neurofisiologia, redução de estresse e humanização espacial.'
  },
  {
    period: '2023 — 2024',
    degree: 'Pós-Graduação / Especialização em Licenciamento Ambiental',
    institution: 'Faculdade Unyleya (UE, Brasil)',
    type: 'pos',
    details: 'Estudos de Impacto Ambiental (EIA/RIMA), compensação e conformidade de empreendimentos.'
  },
  {
    period: '2020 — 2021',
    degree: 'Pós-Graduação / Especialização em Direito Ambiental e Urbanístico',
    institution: 'Faculdade União das Américas (UNIAMERICA)',
    title: 'Desorganize - Vicente Pires, um exemplo que não deve ser esquecido',
    type: 'pos',
    hours: '360h'
  },
  {
    period: '2020 — 2021',
    degree: 'Pós-Graduação / Especialização em Investigação Criminal e Psicologia Forense',
    institution: 'Faculdade União das Américas (UNIAMERICA)',
    title: 'O Desastre do Desarmamento - O poder na mão do submundo',
    type: 'pos',
    hours: '360h'
  },
  {
    period: '2008 — 2014',
    degree: 'Graduação (Bacharelado) em Arquitetura e Urbanismo',
    institution: 'UNIEURO — Instituto Euro-Americano de Educação, Ciência e Tecnologia',
    title: 'Recuperação do Parque Ecológico Três Meninas - Samambaia DF',
    type: 'graduacao',
    hours: '4.469h'
  },
  {
    period: '2022 — 2023',
    degree: 'Graduação em Licenciatura em História',
    institution: 'Centro Universitário ETEP',
    type: 'graduacao',
    hours: '960h'
  },
  {
    period: '2026',
    degree: 'Graduação em Gestão Pública',
    institution: 'União Brasileira de Faculdades (UNIBF)',
    type: 'graduacao',
    details: 'Em andamento'
  },
  {
    period: '2022',
    degree: 'Curso Técnico Profissionalizante em Técnico em Edificações',
    institution: 'IETAAM — Instituto de Educação Tecnológica Avançada da Amazônia',
    type: 'tecnico',
    hours: '1.500h'
  }
];

export const CERTIFICATIONS_ENAP: string[] = [
  'Desenvolvimento Urbano Integrado em Áreas Centrais (ENAP, 30h, 2026)',
  'Eletricista de Sistemas Fotovoltaicos - Energia Solar (SENAI/DF, 160h, 2025)',
  'Criação de Reservas Particulares do Patrimônio Natural - RPPN (ENAP, 20h, 2024)',
  'Fiscalização na Gestão do Patrimônio da União (ENAP, 45h, 2024)',
  'Licenciamento Ambiental Federal de Infraestruturas de Transportes (ENAP, 25h, 2023)',
  'Formação de Brigadista em parceria com QGEx (CBMDF, 40h, 2023)',
  'Estágio Setorial de Aquisições, Licitações e Contratos - Lei 14.133 (IEFEX, 40h, 2023)',
  'SIAFI Básico (ENAP, 35h, 2023)',
  'Apuração e Acompanhamento de Dano ao Erário (IEFEX, 40h, 2023)',
  'Avaliação de Perícias e Imóveis Urbanos (10h, 2022)',
  'Revit Architecture 2020 (PROKAD, 80h, 2021)',
  'Fundamentos da LGPD no Setor Público (ENAP, 15h, 2021)',
  'Geoinformação na SPU — Conceitos e Fundamentos (ENAP, 80h, 2020)',
  'Obras Públicas de Edificação e Saneamento Básico (TCU / ISC, 40h, 2020)',
  'Análises de Risco da Construção Civil (UnB, 40h, 2018)',
  'Reabilitação Urbana com Foco em Áreas Centrais (Ministério das Cidades, 28h, 2018)',
  'Pronatec Desenhista de Topografia (MEC, 160h, 2017)',
  'Sistema Eletrônico de Informações - SEI! Usar (ENAP, 20h, 2017)'
];

export const PUBLICATIONS: Publication[] = [
  {
    year: '2024',
    title: 'Desorganize — Vicente Pires: Exemplo Que Não Deve Ser Esquecido',
    publisher: 'Editora Dialética (São Paulo)',
    isbn: '978-65-270-2076-9',
    doi: '10.48021/978-65-270-2076-9',
    type: 'livro',
    description: 'Capítulo na coletânea científica "Construindo Pontes: Diálogos entre Ciências Humanas e Sociais - Volume 3". Análise aprofundada dos impactos urbanísticos, ambientais e jurídicos da ocupação desordenada e regularização em Vicente Pires - DF.'
  },
  {
    year: '2024',
    title: 'O Desastre do Desarmamento — O Poder na Mão do Submundo',
    publisher: 'Câmara Brasileira de Livros (CBL)',
    isbn: '978-65-00-93789-3',
    type: 'livro',
    description: 'Estudo analítico e estatístico sobre segurança pública, impactos do Estatuto do Desarmamento e dinâmicas da criminalidade no Brasil.'
  },
  {
    year: '2023',
    title: 'Patente RDA Nº 2734 — Complexo Arena ADEB',
    publisher: 'Conselho de Arquitetura e Urbanismo do Brasil (CAU-BR / CAU-DF)',
    type: 'patente',
    description: 'Patente de modelo de utilidade e consultoria projetual para espaço integrado de múltiplas atividades comunitárias, esportivas e culturais de grande capacidade.'
  }
];

export const AWARDS = [
  {
    year: '2020',
    title: 'Certificação Voluntário em Ação — Geoinformação Ambiental',
    organization: 'Governo do Distrito Federal / IBRAM',
    description: 'Reconhecimento oficial pela dedicação técnica e análise espacial de parques ecológicos do DF.'
  },
  {
    year: '2016',
    title: 'Certificação em Jurado — Conselho de Sentença',
    organization: 'TJDFT — Tribunal de Justiça do DF e Territórios',
    description: 'Participação cidadã no Tribunal do Júri da Circunscrição Judiciária de Samambaia.'
  },
  {
    year: '2015',
    title: 'Referência Elogiosa',
    organization: 'Ministério da Defesa — Exército Brasileiro (CRO/11)',
    description: 'Elogio por excepcional desempenho técnico e dedicação nos serviços da Comissão Regional de Obras da 11ª Região Militar.'
  },
  {
    year: '2007',
    title: 'Estagiário Destaque — Menção Honrosa',
    organization: 'Ministério Público do Distrito Federal e Territórios (MPDFT)',
    description: 'Premiação de mérito funcional por excelência operacional nas Promotorias de Justiça.'
  }
];
