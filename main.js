const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');
const printResume = document.getElementById('printResume');

const THEME_KEY = 'curriculo_theme';
const LANG_KEY = 'curriculo_lang';

// --- Traduções ---
const translations = {
  pt: {
    printBtn: "Baixar / Imprimir PDF",
    availability: "Disponível para vagas presenciais, híbridas e remotas",
    headline: "Desenvolvedor Mobile e Front-end com experiência Full Stack | React Native | JavaScript | APIs REST | Node.js",
    summary: "Desenvolvedor com experiência em aplicações Mobile, Front-end e Full Stack, atuando com React Native, JavaScript, Node.js e integração com APIs e bancos de dados.",
    skillApi: "Consumo de APIs REST",
    skillIntegration: "Integração Front-end / Back-end",
    contactTitle: "Contato",
    phoneLabel: "Telefone:",
    locationLabel: "Localização:",
    englishLabel: "Inglês:",
    englishLevel: "Intermediário (leitura técnica e compreensão auditiva)",
    portfolioLink: "Portfólio",
    resumoTitle: "Resumo Profissional",
    resumoContent: "Desenvolvedor com foco em aplicações Mobile e Front-end, com experiência em React Native, JavaScript e consumo de APIs REST. Atuação em projetos Full Stack utilizando Node.js, bancos de dados relacionais e organização de arquitetura de aplicações. Experiência no desenvolvimento de aplicações web e mobile, versionamento com Git e deploy em ambiente cloud (AWS). Possuo vivência com projetos reais, incluindo desafios técnicos profissionais e aplicações com integração de IA. <br><br> Busco oportunidade como Desenvolvedor Mobile Júnior ou Full Stack, contribuindo na criação de aplicações escaláveis, performáticas e centradas no usuário.",
    objetivoTitle: "Objetivo",
    objetivoContent: "Atuar como Desenvolvedor Mobile Júnior ou Desenvolvedor Front-end, com foco em aplicações React Native, interfaces modernas e integração com APIs, contribuindo também em projetos Full Stack.",
    expTitle: "Experiência Profissional",
    job1Title: "Desenvolvedor Full Stack Jr — Delta Solutions",
    job1Date: "Agosto/2025 – Atual",
    job1List: `
      <li>Desenvolvimento e manutenção de aplicações web com JavaScript, Node.js e bancos relacionais.</li>
      <li>Implementação de APIs REST para integração entre sistemas e consumo de dados.</li>
      <li>Administração de infraestrutura em AWS, incluindo EC2, RDS e S3.</li>
      <li>Configuração de Nginx, SSL/Certbot e gerenciamento de processos com PM2.</li>
      <li>Automação de rotinas para redução de custos operacionais em ambiente cloud.</li>
      <li>Suporte à estabilidade, segurança e disponibilidade de aplicações e bancos de dados.</li>
    `,
    job2Title: "Estagiário de Desenvolvimento de Software — Delta Solutions",
    job2Date: "Março/2025 – Agosto/2025",
    job2List: `
      <li>Criação e manutenção de interfaces web responsivas com HTML, CSS e JavaScript.</li>
      <li>Suporte ao desenvolvimento de back-end com Node.js.</li>
      <li>Manipulação de dados e consultas em MySQL e PostgreSQL.</li>
      <li>Colaboração com equipe técnica na evolução de funcionalidades e correção de bugs.</li>
    `,
    job3Title: "Jovem Aprendiz / Auxiliar de Assistência Técnica — Techlog",
    job3Date: "Maio/2018 – Maio/2019",
    job3List: `
      <li>Suporte a rotinas técnicas, atendimento e organização de processos internos.</li>
      <li>Vivência inicial com suporte, manutenção e operação em ambiente corporativo.</li>
    `,
    projectsTitle: "Projetos em Destaque",
    proj1Sub: "Sistema de Inspeção Industrial com IA",
    proj1Desc: "Projeto de visão computacional voltado para inspeção de capilares em ambiente industrial, com detecção automática de peças e apoio na validação de modelos por imagem.",
    techLabel: "Tecnologias:",
    highlightLabel: "Destaques:",
    proj1Highlights: "processamento de imagem, detecção de peças, análise visual e integração com fluxo de inspeção",
    repoLink: "Repositório no GitHub",
    proj2Title: "Dashboard de Produção Industrial",
    proj2Desc: "Dashboard web para monitoramento de produção industrial com visualização de dados em tempo real e interface interativa para acompanhamento de indicadores.",
    proj2Highlights: "produção hora a hora, relatórios, gestão de etapas e eficiência operacional",
    proj3Sub: "Sistema Web Full Stack (Desafio Técnico)",
    proj3Desc: "Aplicação desenvolvida como desafio técnico profissional, com foco na construção de arquitetura full stack, integração entre front-end e back-end e consumo de APIs REST.",
    proj3Highlights: "integração de APIs REST, organização em camadas, versionamento com Git e boas práticas",
    proj4Title: "Controle de Gastos (Web + Mobile)",
    proj4Desc: "Aplicação multiplataforma para gestão financeira pessoal, desenvolvida com foco em experiência mobile, organização de dados e consumo de serviços.",
    proj4Highlights: "aplicação mobile com React Native, consumo de APIs REST, gerenciamento de estado e navegação",
    accessProject: "Acessar projeto",
    proj5Title: "Portfólio Profissional",
    proj5Desc: "Website pessoal para apresentação de projetos, habilidades técnicas e experiência profissional.",
    accessPortfolio: "Acessar portfólio",
    skillsTitle: "Habilidades Técnicas",
    skillMobile: "Desenvolvimento Mobile (React Native)",
    skillApiConsumption: "Consumo de APIs",
    skillMvc: "Arquitetura MVC",
    skillMod: "Modularização de código",
    eduTitle: "Formação",
    courseName: "Engenharia de Software",
    period: "4° período",
    graduation: "Previsão de conclusão: 2029",
    coursesTitle: "Cursos",
    courseOngoing: "Desenvolvimento Full-Stack — INDT (em andamento)",
    courseCetam: "Informática Básica e Avançada — CETAM",
    footerText: "Currículo — Paulo Victor Rezende Virginio",
    footerSub: "Disponível para oportunidades em Mobile, Front-end e Full Stack"
  },
  en: {
    printBtn: "Download / Print PDF",
    availability: "Available for on-site, hybrid, and remote positions",
    headline: "Mobile and Front-end Developer with Full Stack experience | React Native | JavaScript | REST APIs | Node.js",
    summary: "Developer with experience in Mobile, Front-end, and Full Stack applications, working with React Native, JavaScript, Node.js, and integration with APIs and databases.",
    skillApi: "REST API Consumption",
    skillIntegration: "Front-end / Back-end Integration",
    contactTitle: "Contact",
    phoneLabel: "Phone:",
    locationLabel: "Location:",
    englishLabel: "English:",
    englishLevel: "Intermediate (technical reading and listening)",
    portfolioLink: "Portfolio",
    resumoTitle: "Professional Summary",
    resumoContent: "Developer focused on Mobile and Front-end applications, with experience in React Native, JavaScript, and REST API consumption. Experience in Full Stack projects using Node.js, relational databases, and application architecture. <br><br> Experienced in web and mobile development, Git versioning, and cloud deployment (AWS). Proven track record with real-world projects, including professional technical challenges and AI-integrated applications. Seeking opportunities as a Junior Mobile or Full Stack Developer.",
    objetivoTitle: "Objective",
    objetivoContent: "Seeking a position as a Junior Mobile Developer or Front-end Developer, focusing on React Native, modern interfaces, and API integration, while also contributing to Full Stack projects.",
    expTitle: "Professional Experience",
    job1Title: "Full Stack Developer Jr — Delta Solutions",
    job1Date: "August/2025 – Present",
    job1List: `
      <li>Development and maintenance of web applications with JavaScript, Node.js, and relational databases.</li>
      <li>REST API implementation for system integration and data consumption.</li>
      <li>AWS infrastructure management, including EC2, RDS, and S3.</li>
      <li>Nginx configuration, SSL/Certbot, and process management with PM2.</li>
      <li>Automation of routines to reduce operational costs in cloud environments.</li>
      <li>Support for application and database stability, security, and availability.</li>
    `,
    job2Title: "Software Development Intern — Delta Solutions",
    job2Date: "March/2025 – August/2025",
    job2List: `
      <li>Creation and maintenance of responsive web interfaces with HTML, CSS, and JavaScript.</li>
      <li>Support for back-end development with Node.js.</li>
      <li>Data manipulation and queries in MySQL and PostgreSQL.</li>
      <li>Collaboration with the technical team on feature evolution and bug fixing.</li>
    `,
    job3Title: "Technical Assistant Apprentice — Techlog",
    job3Date: "May/2018 – May/2019",
    job3List: `
      <li>Support for technical routines, customer service, and organization of internal processes.</li>
      <li>Initial experience with support, maintenance, and operation in a corporate environment.</li>
    `,
    projectsTitle: "Featured Projects",
    proj1Sub: "Industrial Inspection System with AI",
    proj1Desc: "Computer vision project for industrial capillary inspection, featuring automatic part detection and support for image-based model validation.",
    techLabel: "Technologies:",
    highlightLabel: "Highlights:",
    proj1Highlights: "image processing, part detection, visual analysis, and inspection flow integration",
    repoLink: "GitHub Repository",
    proj2Title: "Industrial Production Dashboard",
    proj2Desc: "Web dashboard for monitoring industrial production with real-time data visualization and an interactive interface for tracking indicators.",
    proj2Highlights: "hourly production, reports, stage management, and operational efficiency",
    proj3Sub: "Full Stack Web System (Technical Challenge)",
    proj3Desc: "Application developed as a professional technical challenge, focusing on building a full-stack architecture and REST API consumption.",
    proj3Highlights: "REST API integration, layered organization, Git versioning, and development best practices",
    proj4Title: "Expense Tracker (Web + Mobile)",
    proj4Desc: "Multiplatform application for personal financial management, developed with a focus on mobile experience and data organization.",
    proj4Highlights: "mobile app with React Native, REST API consumption, state management, and navigation",
    accessProject: "Access Project",
    proj5Title: "Professional Portfolio",
    proj5Desc: "Personal website for presenting projects, technical skills, and professional experience.",
    accessPortfolio: "Access portfolio",
    skillsTitle: "Technical Skills",
    skillMobile: "Mobile Development (React Native)",
    skillApiConsumption: "API Consumption",
    skillMvc: "MVC Architecture",
    skillMod: "Code Modularization",
    eduTitle: "Education",
    courseName: "Software Engineering",
    period: "4th semester",
    graduation: "Expected graduation: 2029",
    coursesTitle: "Courses",
    courseOngoing: "Full-Stack Development — INDT (in progress)",
    courseCetam: "Basic and Advanced IT — CETAM",
    footerText: "Resume — Paulo Victor Rezende Virginio",
    footerSub: "Available for Mobile, Front-end, and Full Stack opportunities"
  }
};

// --- Funções de Tema ---
function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  if (themeToggle) {
    themeToggle.textContent = theme === 'dark' ? 'Tema claro' : 'Tema escuro';
  }
}

function getSavedTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === 'dark' || saved === 'light') return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// --- Funções de Idioma ---
function applyLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
  langToggle.textContent = lang === 'pt' ? 'EN / PT' : 'PT / EN';
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
}

function getSavedLang() {
  return localStorage.getItem(LANG_KEY) || 'pt';
}

// --- Inicialização ---
applyTheme(getSavedTheme());
applyLanguage(getSavedLang());

// --- Listeners ---
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    localStorage.setItem(THEME_KEY, nextTheme);
    applyTheme(nextTheme);
  });
}

if (langToggle) {
  langToggle.addEventListener('click', () => {
    const nextLang = getSavedLang() === 'pt' ? 'en' : 'pt';
    localStorage.setItem(LANG_KEY, nextLang);
    applyLanguage(nextLang);
  });
}

if (printResume) {
  printResume.addEventListener('click', () => {
    window.print();
  });
}