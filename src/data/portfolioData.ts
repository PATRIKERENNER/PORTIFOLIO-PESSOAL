export interface Project {
  id: string;
  title: string;
  category: 'urbanismo' | 'arquitetura' | 'sig' | 'militar' | 'consultoria';
  categoryLabel: string;
  year: string;
  location: string;
  role: string;
  registry?: string; // RRT / TRT / RDA / CAT
  evidenceDoc?: string;
  evidenceLink?: string;
  client?: string;
  area?: string;
  summary: string;
  description: string;
  isFeatured?: boolean;
  problem?: string;
  context?: string;
  myRoleDetail?: string;
  solutionMethod?: string;
  resultsAchieved?: string[];
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

export interface ServiceItem {
  id: string;
  iconName: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  targetAudience: string;
  items: string[];
  whatsappMessage: string;
}

export interface ClientProfile {
  id: string;
  iconName: string;
  title: string;
  badge: string;
  painPoint: string;
  solution: string;
  actionLabel: string;
  whatsappMessage: string;
}

export interface MethodologyStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  output: string;
}

export interface TrustFactor {
  title: string;
  value: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'contratacao' | 'tecnico' | 'legislacao';
}

export const PERSONAL_INFO = {
  name: 'Patrike Mayko Renner Reis de Abreu',
  displayName: 'Patrike Renner',
  tagline: 'Arquiteto e Urbanista especializado em projetos, território e inteligência geoespacial.',
  subTagline: 'Arquitetura + Urbanismo + SIG + Gestão Pública + Geoprocessamento',
  bio: `Arquiteto e Urbanista com sólida trajetória multidisciplinar de mais de 15 anos integrando desenho arquitetônico de alta precisão, planejamento urbano, geoprocessamento estratégico (SIG) e gestão pública de infraestrutura. Experiência comprovada em órgãos do Governo do Distrito Federal (NOVACAP, DER-DF, Administração Regional de Vicente Pires e IBRAM), Tribunais (TRE-DF e MPDFT) e ambiente de engenharia militar do Exército Brasileiro (CRO/11).`,
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
  profileImage: '/images/patrike_renner_profile_1787153663807.jpg',
  profileImageWebp: '/images/patrike_renner_profile_1787153663807.webp',
  armyEmblem: '/images/brasao_exercito_brasileiro_1787154145710.jpg'
};

export const HIGHLIGHTS_METRICS = [
  { value: '15+', label: 'Anos de Atuação', detail: 'Projetos públicos, institucionais e privados' },
  { value: '50k+ m²', label: 'Área Projetada', detail: 'Masterplans rurais, urbanos e complexos' },
  { value: '4', label: 'Especializações Pós-Grad', detail: 'Neuroarquitetura, Ambiental, Urbanismo e Forense' },
  { value: '02', label: 'Livros Publicados', detail: 'Editora Dialética & CBL' }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'arquitetura',
    number: '01',
    iconName: 'Building2',
    title: 'Arquitetura & Compatibilização BIM',
    subtitle: 'Concepção volumétrica, rigor construtivo e conforto humano',
    description: 'Desenvolvimento integral de projetos residenciais, comerciais, rurais e institucionais, unindo metodologia fotorrealista, compatibilização multidisciplinar e diretrizes de Neuroarquitetura.',
    targetAudience: 'Proprietários, incorporadores, construtoras e clínicas de saúde',
    items: [
      'Projetos Arquitetônicos Executivos e de Prefeitura',
      'Modelagem BIM e Detalhamento no Autodesk Revit',
      'Compatibilização de Projetos de Engenharia e Instalações',
      'Neuroarquitetura aplicada a Ambientes de Saúde e Comerciais',
      'Projetos de Acessibilidade Plena (NBR 9050)',
      'Modelagens e Renderizações Fotorrealistas 3D'
    ],
    whatsappMessage: 'Olá, Patrike. Gostaria de solicitar uma proposta para Projeto Arquitetônico / BIM.'
  },
  {
    id: 'urbanismo',
    number: '02',
    iconName: 'Map',
    title: 'Urbanismo & Masterplans Territoriais',
    subtitle: 'Planejamento de uso do solo, loteamentos e infraestrutura viária',
    description: 'Estruturação de grandes glebas rurais e urbanas, estudos de impacto de vizinhança, dimensionamento de circulação e planos diretores setoriais.',
    targetAudience: 'Empreendimentos rurais, condomínios, municípios e órgãos públicos',
    items: [
      'Masterplans Gerais de Grande Porte e Loteamentos',
      'Estudos de Viabilidade de Implantação e Uso do Solo',
      'Estudos de Mobilidade Urbana e Readequação Viária',
      'Regularização Fundiária Urbana e Rural',
      'Projetos de Paisagismo Bioclimático para o Cerrado',
      'Projetos de Espaços Comunitários e Complexos Esportivos'
    ],
    whatsappMessage: 'Olá, Patrike. Gostaria de conversar sobre um Masterplan / Projeto Urbanístico.'
  },
  {
    id: 'sig',
    number: '03',
    iconName: 'Layers',
    title: 'SIG, Geointeligência & Sensoriamento',
    subtitle: 'Análise espacial, mapas temáticos e inteligência de dados',
    description: 'Tratamento de dados geoespaciais com QGIS e ArcGIS, sensoriamento remoto com imagens de satélite e radar SAR (Bandas X e P), e criação de dashboards analíticos.',
    targetAudience: 'Órgãos públicos, gestores de tráfego, agronegócio e consultorias ambientais',
    items: [
      'Mapas Temáticos de Alta Precisão e Cartografia Digital',
      'Análise Espacial de Acidentes e Sinistros Viários (Painéis SIG)',
      'Georreferenciamento de Imóveis Rurais e Urbanos',
      'Diagnósticos Territoriais e Modelagem de Vulnerabilidade',
      'Processamento de Imagens de Radar SAR e Sensoriamento Remoto',
      'Estruturação de Bancos de Dados Espaciais e Geoportais'
    ],
    whatsappMessage: 'Olá, Patrike. Gostaria de solicitar um serviço de SIG / Geoprocessamento.'
  },
  {
    id: 'consultoria',
    number: '04',
    iconName: 'FileCheck',
    title: 'Consultoria Técnica & Governança Pública',
    subtitle: 'Apoio especializado sob a Nova Lei de Licitações (Lei 14.133/2021)',
    description: 'Assessoria a órgãos públicos e empresas licitantes para elaboração e auditoria de documentos técnicos de engenharia e arquitetura, garantindo segurança jurídica.',
    targetAudience: 'Prefeituras, secretarias, órgãos públicos e empresas concorrentes em licitações',
    items: [
      'Elaboração de Termos de Referência (TR) e Projetos Básicos',
      'Análise de Conformidade com a Nova Lei de Licitações (Lei 14.133/2021)',
      'Apoio Técnico em Fiscalização e Acompanhamento de Obras',
      'Auditoria Documental e Análise de Dano ao Erário',
      'Assessoria em Licenciamento Ambiental e Regularização',
      'Padronização de Mapotecas e Acervos Técnicos Digitais'
    ],
    whatsappMessage: 'Olá, Patrike. Gostaria de uma Consultoria Técnica / Apoio em Licitações.'
  },
  {
    id: 'pericias',
    number: '05',
    iconName: 'Search',
    title: 'Perícias, Laudos & Assistência Técnica',
    subtitle: 'Vistorias especializadas, diagnóstico construtivo e pareceres judiciais',
    description: 'Emissão de laudos periciais arquitetônicos fundamentados em normas da ABNT, com inspeção predial, detecção de patologias construtivas e apoio judicial.',
    targetAudience: 'Escritórios de advocacia, condomínios, investidores imobiliários e proprietários',
    items: [
      'Laudos de Inspeção Predial e Diagnóstico de Patologias',
      'Pareceres Técnicos de Avaliação de Imóveis Urbanos',
      'Assistência Técnica Pericial para Processos Judiciais',
      'Vistoria de Recebimento de Obras e Imóveis Novos',
      'Detecção de Vazamentos e Falhas com Métodos de Precisão',
      'Emissão de RRT / TRT para fins legais e comprobatórios'
    ],
    whatsappMessage: 'Olá, Patrike. Preciso de um Laudo Técnico / Parecer Pericial.'
  }
];

export const CLIENT_PROFILES: ClientProfile[] = [
  {
    id: 'pf',
    iconName: 'User',
    title: 'Pessoa Física & Famílias',
    badge: 'Projetos Residenciais & Rurais',
    painPoint: 'Precisa construir ou regularizar sua casa ou chácara com segurança técnica, aproveitamento solar e sem desperdício de dinheiro.',
    solution: 'Projetos arquitetônicos completos, maquete fotorrealista 3D, aprovação de prefeitura e emissão de RRT.',
    actionLabel: 'Planejar Meu Projeto',
    whatsappMessage: 'Olá, Patrike. Sou pessoa física e gostaria de planejar um projeto residencial/rural.'
  },
  {
    id: 'empresa',
    iconName: 'Briefcase',
    title: 'Empresas & Construtoras',
    badge: 'BIM, Masterplan & Consultoria',
    painPoint: 'Necessita de compatibilização BIM sem erros em obra, masterplan de grande porte ou apoio técnico em empreendimentos.',
    solution: 'Modelagem paramétrica Revit, estudos de impacto de tráfego, viabilidade urbana e assessoria técnica contínua.',
    actionLabel: 'Contratar Consultoria',
    whatsappMessage: 'Olá, Patrike. Represento uma empresa e gostaria de falar sobre projetos e consultoria técnica.'
  },
  {
    id: 'publico',
    iconName: 'Landmark',
    title: 'Setor Público & Jurídico',
    badge: 'Governança, SIG & Perícias',
    painPoint: 'Exige rigor com a Lei 14.133/2021, termos de referência consistentes, dashboards de SIG ou laudos para instrução processual.',
    solution: 'Pareceres técnicos fundamentados, inteligência geoespacial com QGIS e suporte técnico especializado.',
    actionLabel: 'Solicitar Parecer Técnico',
    whatsappMessage: 'Olá, Patrike. Gostaria de solicitar apoio técnico / parecer para demanda institucional ou jurídica.'
  }
];

export const WORK_METHODOLOGY: MethodologyStep[] = [
  {
    step: '01',
    title: 'Diagnóstico & Alinhamento',
    subtitle: 'Compreensão profunda das necessidades e restrições',
    description: 'Levantamento topográfico, cadastral, ambiental e regulatório do imóvel ou território, definindo diretrizes orçamentárias e programa de necessidades.',
    output: 'Briefing Técnico & Relatório Preliminar de Viabilidade'
  },
  {
    step: '02',
    title: 'Análise Territorial & Normativa',
    subtitle: 'Conformidade legal e estudo de viabilidade',
    description: 'Verificação do plano diretor, zoneamento, impacto de vizinhança e legislação ambiental aplicável para blindar o projeto contra embargos e atrasos.',
    output: 'Matriz de Condicionantes Legais & Ambientais'
  },
  {
    step: '03',
    title: 'Modelagem Paramétrica & SIG',
    subtitle: 'Desenvolvimento em Revit BIM e Geoprocessamento',
    description: 'Elaboração espacial precisa com plantas, cortes, fachadas fotorrealistas e georreferenciamento geoespacial de alta precisão.',
    output: 'Modelo BIM 3D & Pranchas de Projeto'
  },
  {
    step: '04',
    title: 'Compatibilização & Validação',
    subtitle: 'Revisão multidisciplinar e conformidade técnica',
    description: 'Checagem rigorosa de interferências entre arquitetura, estruturas e instalações, aplicando preceitos de Neuroarquitetura e ergonomia.',
    output: 'Projetos Compatibilizados & Memorial Descritivo'
  },
  {
    step: '05',
    title: 'Entrega Técnica & RRT',
    subtitle: 'Documentação executiva pronta para execução',
    description: 'Disponibilização do caderno executivo completo, arquivos digitais, emissão de Registro de Responsabilidade Técnica (RRT) e suporte pós-entrega.',
    output: 'Caderno Executivo & RRT Emitido no Conselho'
  }
];

export const TRUST_FACTORS: TrustFactor[] = [
  {
    title: 'Experiência Multidisciplinar',
    value: '15+ Anos',
    description: 'Atuação consolidada integrando projetos civis, gestão pública distrital e engenharia militar.'
  },
  {
    title: 'Responsabilidade Registrada',
    value: 'RRT / TRT',
    description: 'Registros ativos junto ao CAU/BR e CFT/BR, com Certidões de Acervo Técnico (CAT) disponíveis.'
  },
  {
    title: 'Governança & Rigor Legal',
    value: 'Lei 14.133',
    description: 'Domínio da Nova Lei de Licitações, termos de referência, SIAFI e processos de controle.'
  },
  {
    title: 'Tecnologia de Ponta',
    value: 'BIM & SIG',
    description: 'Especialista em Autodesk Revit, QGIS, modelagem de dados espaciais e sensoriamento por satélite/radar.'
  },
  {
    title: 'Base Acadêmica Sólida',
    value: '4 Pós-Graduações',
    description: 'Títulos em Neuroarquitetura, Licenciamento Ambiental, Direito Urbanístico e Psicologia Forense.'
  },
  {
    title: 'Atendimento Nacional',
    value: 'Brasília & Remoto',
    description: 'Sede em Brasília/DF com capacidade operacional para consultorias e projetos em todo o Brasil.'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: 'contratacao',
    question: 'Como funciona a contratação de um projeto ou consultoria?',
    answer: 'O primeiro passo é uma conversa inicial (via WhatsApp ou videoconferência) para entender o escopo. Em seguida, elaboramos uma Proposta Técnica e Comercial detalhada com cronograma, entregáveis e condições de pagamento. Após a aprovação e assinatura do contrato, é emitido o RRT e iniciamos os levantamentos.'
  },
  {
    category: 'tecnico',
    question: 'Qual a diferença que a Neuroarquitetura faz no projeto?',
    answer: 'A Neuroarquitetura estuda como a luz, acústica, biofilia, proporções e fluxos influenciam diretamente as emoções e o estresse dos usuários. Em hospitais e clínicas, melhora a recuperação; em escritórios e residências, potencializa a concentração, bem-estar e qualidade de vida.'
  },
  {
    category: 'tecnico',
    question: 'Como o Geoprocessamento (SIG) pode ajudar meu empreendimento rural ou urbano?',
    answer: 'O SIG permite mapear com precisão declividades, áreas de preservação permanente (APPs), bacias hidrográficas, insolação e vias de acesso antes de gastar com obras. Isso evita intervenções em áreas proibidas, reduz custos de terraplanagem e otimiza a implantação de construções.'
  },
  {
    category: 'legislacao',
    question: 'Você emite RRT e laudos válidos judicialmente?',
    answer: 'Sim. Todos os projetos, laudos e consultorias contam com emissão de Registro de Responsabilidade Técnica (RRT) junto ao CAU/BR ou TRT junto ao CFT/BR, possuindo plena validade jurídica para aprovação em órgãos municipais, estaduais e processos judiciais.'
  },
  {
    category: 'legislacao',
    question: 'Você atende órgãos públicos e assessora licitações?',
    answer: 'Sim. Com ampla experiência no setor público (DER-DF, NOVACAP, Administrações Regionais e CRO/11), presto assessoria na elaboração de Termos de Referência, Projetos Básicos, orçamentos e fiscalização de obras em estrita conformidade com a Lei 14.133/2021.'
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
    isFeatured: true,
    problem: 'Falta de espacialização georreferenciada e dados unificados dos sinistros de trânsito na malha rodoviária do DF, dificultando a tomada de decisão para obras de contenção de mortes.',
    context: 'Gerência de Geoinformação (GEGEO) e Coordenação de Planejamento (COPLAN) do DER-DF.',
    myRoleDetail: 'Co-criador e desenvolvedor do modelo de banco de dados geográfico e mapas temáticos dinâmicos do Painel PARE.',
    solutionMethod: 'Integração de bases de dados do DER, PMDF, SAMU e Detran em ambiente SIG (QGIS/PostGIS), criando camadas de calor e densidade de acidentes.',
    resultsAchieved: [
      'Mapeamento dinâmico de 100% dos pontos críticos de sinistros no DF',
      'Direcionamento assertivo de investimentos em passarelas, radares e duplicações',
      'Redução comprovada de tempo de resposta em relatórios de engenharia de tráfego'
    ],
    evidenceDoc: 'Portaria DER-DF & Sistema Institucional PARE',
    evidenceLink: 'https://www.der.df.gov.br',
    summary: 'Plataforma analítica e interativa baseada em SIG para espacialização, mapeamento de calor e diagnóstico preditivo de acidentes de trânsito em toda a malha rodoviária do Distrito Federal.',
    description: 'Solução tecnológica institucional que integrou bases de dados de acidentes com georreferenciamento de precisão. O painel fornece suporte a tomadas de decisão para investimentos em engenharia de tráfego, duplicações de rodovias, passarelas de pedestres, fiscalização eletrônica (pardais) e campanhas educativas da SUTRAN.',
    highlights: [
      'Espacialização completa de ocorrências rodoviárias em toda a malha do DF',
      'Mapeamento dinâmico de pontos críticos de sinistros viários',
      'Suporte direto a obras estruturais de mitigação de acidentes e segurança coletiva',
      'Integração multi-institucional entre GEGEO, COPLAN e SUTRAN'
    ],
    deliverables: ['Dashboard Interativo SIG', 'Bases de Dados Georreferenciadas', 'Relatórios Técnicos para Obras de Engenharia'],
    image: '/images/painel_pare_sig_1787152318283.jpg',
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
    registry: 'Patente RDA Nº 2734 CAU-BR | RRT 13029248',
    evidenceDoc: 'Registro de Patente de Modelo RDA Nº 2734 no CAU-BR',
    client: 'Igreja Evangélica Assembleia de Deus de Brasília (ADEB)',
    area: '33.612 m²',
    isFeatured: true,
    problem: 'Necessidade de implantar um complexo comunitário para milhares de pessoas em área urbana consolidada com desafios severos de mobilidade, acessibilidade e flexibilidade programática.',
    context: 'Área Especial Sandu Sul em Taguatinga - DF.',
    myRoleDetail: 'Arquiteto titular, autor do masterplan urbanístico, estudos de tráfego e responsável técnico depositante da patente.',
    solutionMethod: 'Setorização em pilotis, terminal multimodal integrado, heliponto, praças bioclimáticas e modulação estrutural para grandes vãos.',
    resultsAchieved: [
      'Patente de Modelo de Utilidade formalmente registrada no Conselho de Arquitetura (CAU-BR)',
      'Capacidade de circulação segura para mais de 10.000 pessoas simultâneas',
      'Acessibilidade universal integrada com 1.200 vagas de estacionamento'
    ],
    summary: 'Masterplan arquitetônico e urbanístico de grande porte para centro cultural e esportivo comunitário com patente de modelo de utilidade registrada no CAU-BR.',
    description: 'Projeto completo de planejamento de uso do solo e viabilidade espacial contemplando: Centro Cultural Multidisciplinar, Sede Administrativa, Alojamentos e Apartamentos de Trânsito, Pavilhão Infantil UCADEB, Edifício de Múltiplo Uso, Estacionamento para 1.200 veículos, Heliponto, Terminal de Cargas e Passageiros sobre Pilotis, Praça da Juventude e Praça de Alimentação.',
    highlights: [
      'Patente de Modelo de Utilidade depositada no Conselho de Arquitetura e Urbanismo (CAU-BR)',
      'Planejamento de fluxos para grandes concentrações de público com segurança e acessibilidade plena',
      'Estudo de tráfego, impacto de vizinhança e integração com a malha viária urbana de Taguatinga',
      'Levantamento cadastral de 33.612 m² e memorial descritivo completo'
    ],
    deliverables: ['Masterplan Geral', 'Memorial Descritivo e Cadastral', 'Estudo de Viabilidade de Localização', 'Maquetes Eletrônicas 3D'],
    image: '/images/arena_adeb_complex_1787152339254.jpg',
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
    evidenceDoc: 'Certidão de Acervo Técnico (CAT) Nº 831049/2023 - CAU/DF',
    client: 'Propriedade Privada',
    area: '51.403,79 m²',
    isFeatured: true,
    problem: 'Gleba rural de 5,1 hectares com topografia acentuada e necessidade de implantação de infraestrutura turística sem degradar a vegetação nativa do Cerrado.',
    context: 'Área rural de Samambaia DF, às margens da rodovia BR-060.',
    myRoleDetail: 'Responsável técnico pelo projeto executivo geral, implantação topográfica, chalés e edificações de hospitalidade.',
    solutionMethod: 'Arquitetura bioclimática, preservação de maciços arbóreos, sistema de drenagem sustentável e posicionamento de chalés aproveitando os ventos dominantes.',
    resultsAchieved: [
      'Aprovação integral do plano de uso do solo com Certidão de Acervo Técnico emitida',
      '9 chalés ecológicos, restaurante panorâmico e centro de eventos integrados',
      'Zero impacto em áreas de preservação ambiental com uso de flora nativa'
    ],
    summary: 'Projeto arquitetônico e urbanístico integral para empreendimento rural multifuncional com chalés ecológicos, restaurante, centro de eventos e quadras poliesportivas.',
    description: 'Desenvolvimento de projeto básico e executivo com plantas baixas, cortes, fachadas, perspectivas isométricas e implantação topográfica de 51.403 m²: Edifício Sede Administrativa, Restaurante Panorâmico, Casa do Caseiro, Conjunto de Chalés Familiares, Salão de Eventos Multiuso, Vestiários Coletivos, Casa de Campo, Pórtico de Entrada, Estacionamentos e Paisagismo Nativo do Cerrado.',
    highlights: [
      'Integração paisagística e arquitetura bioclimática respeitando a topografia natural',
      'Geolocalização das edificações e preservação de vegetação nativa do bioma Cerrado',
      'Projetos de infraestrutura de lazer e hospitalidade com acessibilidade'
    ],
    deliverables: ['Plantas Baixas e Cortes', 'Projeto Urbanístico de Loteamento Interno', 'Maquete Fotorrealista 3D'],
    image: '/images/rural_maranata_1787152366610.jpg',
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
    image: '/images/natalandia_urban_1787152391817.jpg',
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
    image: '/images/rural_maranata_1787152366610.jpg',
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
    image: '/images/brasao_exercito_brasileiro_1787154145710.jpg',
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
    institution: 'Consórcio TC DUPLICAÇÃO BR-080',
    department: 'Engenharia de Projetos Viários',
    type: 'privado',
    description: 'Desenvolvimento e revisão de projetos executivos da duplicação da rodovia BR-080/DF, geometria viária, terraplanagem, drenagem, sinalização e desapropriações.',
    achievements: [
      'Detalhamento de interferências complexas e plantas as-built da rodovia'
    ]
  },
  {
    period: '2020 — 2021',
    role: 'Gerente de Adequação Viária & Analista de Geoprocessamento',
    institution: 'DER-DF — Departamento de Estradas de Rodagem do DF',
    department: 'Coordenação de Planejamento e Gerência de Geoinformação (COPLAN / GEGEO)',
    type: 'publico',
    description: 'Gestão de estudos técnicos para adequação de tráfego, modelagem de acidentes rodoviários no DF, espacialização em SIG e suporte técnico à Superintendência de Trânsito.',
    achievements: [
      'Co-desenvolvimento do Painel PARE/DF para análise de manchas de acidentes',
      'Elaboração de estudos de viabilidade técnica para travessias e intervenções viárias no DF'
    ]
  },
  {
    period: '2019 — 2020',
    role: 'Diretor de Licenciamento de Obras e Desenvolvimento Urbano',
    institution: 'Governo do Distrito Federal — Administração Regional de Vicente Pires',
    department: 'Diretoria de Obras e Licenciamento (DIROL)',
    type: 'publico',
    description: 'Gestão da análise e aprovação de projetos arquitetônicos, emissão de alvarás de construção, habite-se, fiscalização e regularização urbanística no setor habitacional de Vicente Pires.',
    achievements: [
      'Condução de processos técnicos complexos de regularização de edificações',
      'Articulação direta com a SEDUH, NOVACAP e órgãos de controle urbano'
    ]
  },
  {
    period: '2018 — 2019',
    role: 'Assessor Técnico de Gabinete',
    institution: 'Governo do Distrito Federal — Administração Regional de Vicente Pires',
    department: 'Gabinete da Administração',
    type: 'publico',
    description: 'Apoio técnico e estratégico em matérias de infraestrutura urbana, drenagem pluvial, pavimentação e interlocução comunitária.',
    achievements: [
      'Acompanhamento de obras emergenciais de infraestrutura urbana no DF'
    ]
  },
  {
    period: '2016 — 2018',
    role: 'Consultor de Arquitetura e Engenharia',
    institution: 'Atuação Autônoma / Escritório Próprio',
    type: 'privado',
    description: 'Elaboração de projetos residenciais, comerciais, interiores, modelagem 3D e assessoria técnica em aprovação de projetos legais.',
    achievements: [
      'Dezenas de projetos aprovados com emissão de RRT nos conselhos de classe'
    ]
  },
  {
    period: '2015 — 2016',
    role: 'Desenhista Técnico de Engenharia',
    institution: 'Ministério da Defesa — Exército Brasileiro (CRO/11)',
    department: 'Comissão Regional de Obras da 11ª Região Militar',
    type: 'militar',
    description: 'Desenvolvimento de projetos arquitetônicos e executivos para quartéis, vilas militares e instalações da 11ª Região Militar.',
    achievements: [
      'Condecoração com Referência Elogiosa pelo comando da CRO/11 (2015)'
    ]
  },
  {
    period: '2012 — 2014',
    role: 'Auxiliar Técnico de Engenharia e Arquitetura',
    institution: 'Tribunal Regional Eleitoral do DF (TRE-DF)',
    department: 'Seção de Engenharia e Arquitetura (SEENG)',
    type: 'publico',
    description: 'Apoio no acompanhamento de contratos de manutenção predial, projetos de reforma dos Cartórios Eleitorais do DF e acessibilidade.',
    achievements: [
      'Levantamentos in loco e elaboração de plantas executivas de acessibilidade NBR 9050'
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

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Arquitetura & Modelagem BIM',
    icon: 'Building2',
    skills: [
      { name: 'Autodesk Revit BIM', level: 95, tag: 'Modelagem Paramétrica' },
      { name: 'AutoCAD 2D & 3D', level: 98, tag: 'Plantas Executivas' },
      { name: 'Compatibilização de Projetos', level: 92, tag: 'Interferências Construtivas' },
      { name: 'Neuroarquitetura & Saúde', level: 90, tag: 'Unyleya' },
      { name: 'Acessibilidade NBR 9050', level: 95, tag: 'Conformidade Legal' },
      { name: 'Renderização Fotorrealista 3D', level: 88, tag: 'Perspectivas' }
    ]
  },
  {
    title: 'Geoprocessamento & SIG',
    icon: 'Map',
    skills: [
      { name: 'QGIS Desktop & Plugins', level: 94, tag: 'Análise Espacial' },
      { name: 'ArcGIS / ArcMap', level: 88, tag: 'Mapeamento Temático' },
      { name: 'Sensoriamento Remoto & Radar SAR', level: 86, tag: 'Bandas X e P' },
      { name: 'Georreferenciamento de Imóveis', level: 92, tag: 'Glebas Urbanas/Rurais' },
      { name: 'Topografia e Planialtimetria', level: 90, tag: 'MEC / Pronatec' },
      { name: 'Dashboards Geográficos (Painel PARE)', level: 92, tag: 'DER-DF' }
    ]
  },
  {
    title: 'Governança & Licitações',
    icon: 'Shield',
    skills: [
      { name: 'Nova Lei de Licitações (Lei 14.133/2021)', level: 92, tag: 'IEFEX / ENAP' },
      { name: 'Termos de Referência & Projetos Básicos', level: 95, tag: 'Engenharia Pública' },
      { name: 'Fiscalização de Contratos de Obras', level: 94, tag: 'TCU / CRO-11' },
      { name: 'SIAFI & Sistema SEI!', level: 88, tag: 'Administração Federal' },
      { name: 'Apuração de Dano ao Erário', level: 85, tag: 'Auditoria Técnica' },
      { name: 'Licenciamento Ambiental (EIA/RIMA)', level: 90, tag: 'Pós-Graduação' }
    ]
  },
  {
    title: 'Perícias & Avaliações',
    icon: 'Search',
    skills: [
      { name: 'Inspeção Predial & Patologias', level: 92, tag: 'Laudos Forenses' },
      { name: 'Avaliação de Imóveis Urbanos', level: 88, tag: 'Método Comparativo' },
      { name: 'Detecção Hídrica com Geofone', level: 86, tag: 'Subsolo' },
      { name: 'Assistência Técnica Judicial', level: 90, tag: 'Tribunais' },
      { name: 'Direito Urbanístico e Regularização', level: 92, tag: 'Pós-Graduação' }
    ]
  }
];
