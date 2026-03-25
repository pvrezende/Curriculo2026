const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');
const printResume = document.getElementById('printResume');
const resumeRole = document.getElementById('resumeRole');

const headlineEl = document.getElementById('headline');
const summaryEl = document.getElementById('summary');
const heroTagsEl = document.getElementById('heroTags');
const resumoContentEl = document.getElementById('resumoContent');
const footerSubEl = document.getElementById('footerSub');
const projectsContainerEl = document.getElementById('projectsContainer');

const THEME_KEY = 'curriculo_2026_theme';
const LANG_KEY = 'curriculo_2026_lang';
const ROLE_KEY = 'curriculo_2026_role';

const translations = {
  pt: {
    printBtn: "Baixar / Imprimir PDF",
    availability: "Disponível para vagas presenciais, híbridas e remotas",
    skillApi: "Consumo de APIs REST",
    skillIntegration: "Integração Front-end / Back-end",
    contactTitle: "Contato",
    phoneLabel: "Telefone:",
    locationLabel: "Localização:",
    englishLabel: "Inglês:",
    englishLevel: "Intermediário B1 (leitura técnica e compreensão auditiva)",
    portfolioLink: "Portfólio",
    resumoTitle: "Resumo Profissional",
    expTitle: "Experiência Profissional",
    projectsTitle: "Projetos em Destaque",
    techLabel: "Tecnologias:",
    highlightLabel: "Destaques:",
    repoLink: "Repositório no GitHub",
    accessProject: "Acessar projeto",
    accessPortfolio: "Acessar portfólio",
    eduTitle: "Formação",
    coursesTitle: "Cursos",
    courseOngoing: "Desenvolvimento Full-Stack — INDT (350 hrs)",
    courseCetam: "Informática Básica e Avançada — CETAM",
    footerText: "Currículo — Paulo Victor Rezende Virginio",

    job1Title: "Desenvolvedor Full Stack Jr — Delta Solutions",
    job1Date: "Agosto/2025 – Atual",
    job1List: `
      <li>Desenvolvimento e manutenção de aplicações web com Node.js, React e bancos relacionais (MySQL e PostgreSQL).</li>
      <li>Implementação de APIs REST para integração entre sistemas e automação de processos internos.</li>
      <li>Utilização de ORM Prisma para modelagem e manipulação eficiente de dados.</li>
      <li>Administração de infraestrutura em AWS (EC2, RDS e S3), garantindo disponibilidade e escalabilidade das aplicações.</li>
      <li>Configuração de ambiente com Nginx, SSL/Certbot e gerenciamento de processos com PM2.</li>
      <li>Automação de rotinas que contribuíram para redução de custos operacionais em ambiente cloud.</li>
      <li>Atuação na estabilidade, segurança e melhoria contínua de aplicações e bancos de dados.</li>
    `,
    job2Title: "Estagiário de Desenvolvimento de Software — Delta Solutions",
    job2Date: "Março/2025 – Agosto/2025",
    job2List: `
      <li>Criação e manutenção de interfaces web responsivas com HTML, CSS e JavaScript.</li>
      <li>Suporte ao desenvolvimento de back-end com Node.js.</li>
      <li>Manipulação de dados e consultas em MySQL e PostgreSQL.</li>
      <li>Colaboração com equipe técnica na evolução de funcionalidades e correção de bugs.</li>
    `
  },

  en: {
    printBtn: "Download / Print PDF",
    availability: "Available for on-site, hybrid, and remote positions",
    skillApi: "REST API Consumption",
    skillIntegration: "Front-end / Back-end Integration",
    contactTitle: "Contact",
    phoneLabel: "Phone:",
    locationLabel: "Location:",
    englishLabel: "English:",
    englishLevel: "Intermediate B1 (technical reading and listening)",
    portfolioLink: "Portfolio",
    resumoTitle: "Professional Summary",
    expTitle: "Professional Experience",
    projectsTitle: "Featured Projects",
    techLabel: "Technologies:",
    highlightLabel: "Highlights:",
    repoLink: "GitHub Repository",
    accessProject: "Access Project",
    accessPortfolio: "Access Portfolio",
    eduTitle: "Education",
    coursesTitle: "Courses",
    courseOngoing: "Full-Stack Development — INDT (350 hrs)",
    courseCetam: "Basic and Advanced IT — CETAM",
    footerText: "Resume — Paulo Victor Rezende Virginio",

    job1Title: "Full Stack Developer Jr — Delta Solutions",
    job1Date: "August/2025 – Present",
    job1List: `
      <li>Development and maintenance of web applications with Node.js, React, and relational databases (MySQL and PostgreSQL).</li>
      <li>Implementation of REST APIs for system integration and internal process automation.</li>
      <li>Use of Prisma ORM for efficient data modeling and manipulation.</li>
      <li>AWS infrastructure management (EC2, RDS, and S3), ensuring application availability and scalability.</li>
      <li>Environment configuration with Nginx, SSL/Certbot, and process management with PM2.</li>
      <li>Automation routines that contributed to reducing cloud operational costs.</li>
      <li>Work focused on the stability, security, and continuous improvement of applications and databases.</li>
    `,
    job2Title: "Software Development Intern — Delta Solutions",
    job2Date: "March/2025 – August/2025",
    job2List: `
      <li>Creation and maintenance of responsive web interfaces with HTML, CSS, and JavaScript.</li>
      <li>Support for back-end development with Node.js.</li>
      <li>Data manipulation and queries in MySQL and PostgreSQL.</li>
      <li>Collaboration with the technical team on feature improvements and bug fixes.</li>
    `
  }
};

const roleOptions = {
  pt: {
    backend: "Back-end",
    frontend: "Front-end",
    fullstack: "Full Stack",
    mobile: "Mobile"
  },
  en: {
    backend: "Back-end",
    frontend: "Front-end",
    fullstack: "Full Stack",
    mobile: "Mobile"
  }
};

const roleProfiles = {
  pt: {
    backend: {
      headline: "Desenvolvedor Back-end | Node.js | APIs REST | Prisma | MySQL | PostgreSQL | AWS",
      summary: "Desenvolvedor Back-end com experiência em APIs REST, integração de sistemas, manipulação de dados e suporte a aplicações em ambiente cloud.",
      resumoContent: `
        Desenvolvedor Back-end com experiência em desenvolvimento de APIs REST utilizando Node.js, integração entre sistemas e manipulação de dados com bancos relacionais.
        <br><br>
        Atuo com MySQL e PostgreSQL utilizando ORM Prisma para modelagem, consultas e organização de dados, garantindo eficiência, escalabilidade e manutenção do código.
        <br><br>
        Tenho experiência com integração de serviços, estruturação de aplicações em arquitetura em camadas e suporte à infraestrutura em AWS (EC2, RDS e S3), incluindo deploy e configuração de ambientes.
        <br><br>
        Participei de projetos reais com foco em automação de processos, integração de sistemas e estabilidade de aplicações.
        <br><br>
        Busco atuar no desenvolvimento backend com foco em construção de APIs robustas, escaláveis e alinhadas a boas práticas de arquitetura e engenharia de software.
      `,
      footerSub: "Disponível para oportunidades em Desenvolvimento Back-end",
      fileName: "Paulo-Rezende-Curriculo-Backend",
      tags: [
        "Node.js",
        "JavaScript",
        "APIs REST",
        "Express.js",
        "Prisma ORM",
        "MySQL",
        "PostgreSQL",
        "AWS",
        "EC2",
        "RDS",
        "S3",
        "Arquitetura em Camadas",
        "Integração de Sistemas",
        "Git",
        "Nginx",
        "PM2"
      ],
      projects: [
        {
          title: "Dashboard de Produção",
          description: "Sistema com backend integrado a banco de dados e operação em tempo real.",
          technologies: "Node.js, MySQL, AWS",
          highlights: "APIs, banco de dados, integração e suporte operacional",
          link: "http://98.84.113.180:3000/",
          linkLabel: "Dashboard"
        },
        {
          title: "Arcon",
          description: "Sistema com arquitetura em camadas, integração entre serviços e persistência de dados.",
          technologies: "Node.js, PostgreSQL, Prisma",
          highlights: "APIs REST, backend estruturado e organização de dados",
          link: "https://github.com/pvrezende/Arcon.git",
          linkLabel: "GitHub"
        },
        {
          title: "TuboVision — Sistema de Inspeção Industrial com IA",
          description: "Projeto de visão computacional voltado para inspeção de capilares em ambiente industrial.",
          technologies: "Python, OpenCV, YOLO, Docker e API REST",
          highlights: "integração técnica, análise visual e fluxo de inspeção",
          link: "https://github.com/pvrezende/TuboVision",
          linkLabel: "GitHub"
        }
      ]
    },

    frontend: {
      headline: "Desenvolvedor Front-end | React | TypeScript | JavaScript | APIs REST | Interfaces Responsivas",
      summary: "Desenvolvedor Front-end com experiência em React, TypeScript e integração com APIs REST, atuando na construção de interfaces modernas, responsivas e organizadas em componentes.",
      resumoContent: `
        Desenvolvedor Front-end com experiência em criação e evolução de interfaces web utilizando React, JavaScript e TypeScript, com foco em componentização, performance e integração com APIs REST.
        <br><br>
        Tenho vivência na construção de aplicações com organização em componentes reutilizáveis, consumo de serviços back-end e aplicação de boas práticas como separação de responsabilidades e arquitetura em camadas.
        <br><br>
        Atuei em projetos reais com foco em dashboards interativos, visualização de dados e experiência do usuário, garantindo interfaces responsivas, performáticas e de fácil manutenção.
        <br><br>
        Busco oportunidade para atuar no desenvolvimento de interfaces modernas, escaláveis e alinhadas a padrões de arquitetura e boas práticas de front-end.
      `,
      footerSub: "Disponível para oportunidades em Desenvolvimento Front-end",
      fileName: "Paulo-Rezende-Curriculo-Frontend",
      tags: [
        "React",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "APIs REST",
        "Componentização",
        "Responsividade",
        "Integração com Back-end",
        "UI",
        "UX",
        "Arquitetura em Camadas",
        "Boas práticas",
        "Git & GitHub"
      ],
      projects: [
        {
          title: "Portfólio Profissional",
          description: "Website pessoal com foco em layout responsivo, apresentação visual e organização de conteúdo.",
          technologies: "HTML, CSS, JavaScript",
          highlights: "responsividade, UI e estrutura de interface",
          link: "https://portfolio-paulo-rezendes-projects.vercel.app/",
          linkLabel: "Acessar"
        },
        {
          title: "Dashboard de Produção Industrial",
          description: "Interface interativa com visualização de dados em tempo real e acompanhamento operacional.",
          technologies: "JavaScript, HTML, CSS, Chart.js",
          highlights: "visualização de dados, integração com APIs e UX",
          link: "http://98.84.113.180:3000/",
          linkLabel: "Dashboard"
        },
        {
          title: "Controle de Gastos",
          description: "Aplicação com foco em experiência do usuário, componentização e integração com serviços.",
          technologies: "React, JavaScript",
          highlights: "componentização, navegação e consumo de APIs",
          link: "https://controle-de-gastos-app.vercel.app/",
          linkLabel: "Projeto"
        }
      ]
    },

    fullstack: {
      headline: "Desenvolvedor Full Stack | Node.js | React | TypeScript | APIs REST | MySQL | PostgreSQL | Prisma | AWS",
      summary: "Desenvolvedor Full Stack com experiência em construção de aplicações web completas utilizando Node.js, React, TypeScript e APIs REST, atuando na integração entre sistemas, bancos de dados e infraestrutura em cloud.",
      resumoContent: `
        Desenvolvedor Full Stack com experiência em desenvolvimento e manutenção de aplicações web, construção de APIs REST e integração entre front-end, back-end e bancos de dados.
        <br><br>
        Atuo com JavaScript, Node.js, React e TypeScript, além de bancos MySQL e PostgreSQL com uso de ORM Prisma. Tenho experiência na organização de aplicações em arquitetura em camadas, consumo e criação de APIs e integração entre serviços.
        <br><br>
        Também possuo vivência com infraestrutura em AWS (EC2, RDS, S3), deploy de aplicações, configuração de ambientes com Nginx e gerenciamento com PM2.
        <br><br>
        Participei de projetos reais com foco em automação de processos, visualização de dados e integração de sistemas, contribuindo para melhoria operacional e estabilidade das aplicações.
        <br><br>
        Busco oportunidade para atuar com desenvolvimento full stack, evolução de produtos e construção de soluções escaláveis com boas práticas de arquitetura, código e performance.
      `,
      footerSub: "Disponível para oportunidades em Desenvolvimento Full Stack",
      fileName: "Paulo-Rezende-Curriculo-Fullstack",
      tags: [
        "JavaScript",
        "TypeScript",
        "Node.js",
        "React",
        "Express.js",
        "APIs REST",
        "Prisma ORM",
        "MySQL",
        "PostgreSQL",
        "AWS",
        "Git & GitHub",
        "Arquitetura em Camadas",
        "Integração de Sistemas",
        "Deploy",
        "Nginx",
        "PM2"
      ],
      projects: [
        {
          title: "Arcon — Sistema Full Stack",
          description: "Projeto com integração completa entre front-end e back-end, arquitetura em camadas e persistência de dados.",
          technologies: "Node.js, PostgreSQL, JavaScript, Prisma",
          highlights: "APIs REST, arquitetura e integração",
          link: "https://github.com/pvrezende/Arcon.git",
          linkLabel: "GitHub"
        },
        {
          title: "Dashboard de Produção",
          description: "Sistema web com dados em tempo real e suporte à operação industrial.",
          technologies: "Node.js, MySQL, AWS",
          highlights: "integração de dados, backend, frontend e visualização operacional",
          link: "http://98.84.113.180:3000/",
          linkLabel: "Dashboard"
        },
        {
          title: "Controle de Gastos",
          description: "Aplicação web + mobile com consumo de APIs e foco em experiência do usuário.",
          technologies: "React, Node.js, JavaScript",
          highlights: "full stack, APIs e integração",
          link: "https://controle-de-gastos-app.vercel.app/",
          linkLabel: "Projeto"
        },
        {
          title: "TuboVision — Sistema de Inspeção Industrial com IA",
          description: "Projeto de visão computacional voltado para inspeção de capilares em ambiente industrial.",
          technologies: "Python, OpenCV, YOLO, Docker e API REST",
          highlights: "visão computacional, integração técnica e fluxo de inspeção",
          link: "https://github.com/pvrezende/TuboVision",
          linkLabel: "GitHub"
        }
      ]
    },

    mobile: {
      headline: "Desenvolvedor Mobile | React Native | Expo | JavaScript | APIs REST",
      summary: "Desenvolvedor com experiência em aplicações mobile multiplataforma, integração com APIs e construção de interfaces funcionais e performáticas.",
      resumoContent: `
        Desenvolvedor Mobile com experiência em aplicações utilizando React Native, Expo e JavaScript, com foco em consumo de APIs REST, navegação e organização de componentes.
        <br><br>
        Possuo vivência com integração entre aplicações mobile e back-end, incluindo sincronização de dados e comunicação com APIs.
        <br><br>
        Também tenho experiência com desenvolvimento web e backend, o que fortalece a integração entre camadas e visão de produto.
        <br><br>
        Busco oportunidade para atuar no desenvolvimento mobile com foco em performance, organização de código e boas práticas.
      `,
      footerSub: "Disponível para oportunidades em Desenvolvimento Mobile",
      fileName: "Paulo-Rezende-Curriculo-Mobile",
      tags: [
        "React Native",
        "Expo",
        "JavaScript",
        "APIs REST",
        "Navegação",
        "Componentização",
        "Integração com Serviços",
        "Git",
        "Aplicações Mobile",
        "UX Mobile"
      ],
      projects: [
        {
          title: "Controle de Gastos",
          description: "Aplicação mobile para gestão financeira com foco em navegação e integração com serviços.",
          technologies: "React Native, Expo",
          highlights: "mobile, APIs e navegação",
          link: "https://controle-de-gastos-app.vercel.app/",
          linkLabel: "Projeto"
        },
        {
          title: "Dashboard de Produção Industrial",
          description: "Integração com backend e APIs para consumo e visualização de dados.",
          technologies: "Node.js, MySQL",
          highlights: "consumo de dados e integração",
          link: "http://98.84.113.180:3000/",
          linkLabel: "Dashboard"
        },
        {
          title: "Arcon — Sistema Web Full Stack",
          description: "Projeto com integração entre front-end e back-end, consumo de APIs e organização em camadas.",
          technologies: "Node.js, JavaScript, PostgreSQL, Prisma",
          highlights: "integração de serviços, APIs REST e arquitetura",
          link: "https://github.com/pvrezende/Arcon.git",
          linkLabel: "GitHub"
        }
      ]
    }
  },

  en: {
    backend: {
      headline: "Back-end Developer | Node.js | REST APIs | Prisma | MySQL | PostgreSQL | AWS",
      summary: "Back-end Developer with experience in REST APIs, systems integration, data handling, and cloud-supported applications.",
      resumoContent: `
        Back-end Developer with experience building REST APIs using Node.js, systems integration, and data handling with relational databases.
        <br><br>
        I work with MySQL and PostgreSQL using Prisma ORM for data modeling, querying, and organization, ensuring efficiency, scalability, and code maintainability.
        <br><br>
        I also have experience with service integration, structuring applications with layered architecture, and AWS infrastructure support (EC2, RDS, and S3), including deployment and environment configuration.
        <br><br>
        I have participated in real-world projects focused on process automation, systems integration, and application stability.
        <br><br>
        I am seeking an opportunity to work on backend development focused on building robust, scalable APIs aligned with architecture and software engineering best practices.
      `,
      footerSub: "Available for Back-end opportunities",
      fileName: "Paulo-Rezende-Resume-Backend",
      tags: [
        "Node.js",
        "JavaScript",
        "REST APIs",
        "Express.js",
        "Prisma ORM",
        "MySQL",
        "PostgreSQL",
        "AWS",
        "EC2",
        "RDS",
        "S3",
        "Layered Architecture",
        "Systems Integration",
        "Git",
        "Nginx",
        "PM2"
      ],
      projects: [
        {
          title: "Production Dashboard",
          description: "System with a backend integrated to a database and real-time operation.",
          technologies: "Node.js, MySQL, AWS",
          highlights: "APIs, database, integration, and operational support",
          link: "http://98.84.113.180:3000/",
          linkLabel: "Dashboard"
        },
        {
          title: "Arcon",
          description: "System with layered architecture, service integration, and data persistence.",
          technologies: "Node.js, PostgreSQL, Prisma",
          highlights: "REST APIs, structured backend, and data organization",
          link: "https://github.com/pvrezende/Arcon.git",
          linkLabel: "GitHub"
        },
        {
          title: "TuboVision — Industrial Inspection System with AI",
          description: "Computer vision project focused on industrial capillary inspection.",
          technologies: "Python, OpenCV, YOLO, Docker and REST API",
          highlights: "technical integration, visual analysis, and inspection workflow",
          link: "https://github.com/pvrezende/TuboVision",
          linkLabel: "GitHub"
        }
      ]
    },

    frontend: {
      headline: "Front-end Developer | React | TypeScript | JavaScript | REST APIs | Responsive Interfaces",
      summary: "Front-end Developer with experience in React, TypeScript, and REST API integration, focused on building modern, responsive, component-based interfaces.",
      resumoContent: `
        Front-end Developer with experience creating and evolving web interfaces using React, JavaScript, and TypeScript, focused on componentization, performance, and REST API integration.
        <br><br>
        I have experience building applications with reusable components, consuming back-end services, and applying best practices such as separation of responsibilities and layered architecture.
        <br><br>
        I have worked on real-world projects focused on interactive dashboards, data visualization, and user experience, ensuring responsive, high-performance, and maintainable interfaces.
        <br><br>
        I am seeking an opportunity to work on modern, scalable interfaces aligned with architecture patterns and front-end best practices.
      `,
      footerSub: "Available for Front-end opportunities",
      fileName: "Paulo-Rezende-Resume-Frontend",
      tags: [
        "React",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "REST APIs",
        "Componentization",
        "Responsive Design",
        "Back-end Integration",
        "UI",
        "UX",
        "Layered Architecture",
        "Best Practices",
        "Git & GitHub"
      ],
      projects: [
        {
          title: "Professional Portfolio",
          description: "Personal website focused on responsive layout, visual presentation, and content organization.",
          technologies: "HTML, CSS, JavaScript",
          highlights: "responsiveness, UI, and interface structure",
          link: "https://portfolio-paulo-rezendes-projects.vercel.app/",
          linkLabel: "Access"
        },
        {
          title: "Industrial Production Dashboard",
          description: "Interactive interface with real-time data visualization and operational monitoring.",
          technologies: "JavaScript, HTML, CSS, Chart.js",
          highlights: "data visualization, API integration, and UX",
          link: "http://98.84.113.180:3000/",
          linkLabel: "Dashboard"
        },
        {
          title: "Expense Tracker",
          description: "Application focused on user experience, component organization, and service integration.",
          technologies: "React, JavaScript",
          highlights: "componentization, navigation, and API consumption",
          link: "https://controle-de-gastos-app.vercel.app/",
          linkLabel: "Project"
        }
      ]
    },

    fullstack: {
      headline: "Full Stack Developer | Node.js | React | TypeScript | REST APIs | MySQL | PostgreSQL | Prisma | AWS",
      summary: "Full Stack Developer with experience building complete web applications using Node.js, React, TypeScript, and REST APIs, integrating systems, databases, and cloud infrastructure.",
      resumoContent: `
        Full Stack Developer with experience in developing and maintaining web applications, building REST APIs, and integrating front-end, back-end, and databases.
        <br><br>
        I work with JavaScript, Node.js, React, and TypeScript, along with MySQL and PostgreSQL using Prisma ORM. I have experience organizing applications with layered architecture, building and consuming APIs, and integrating services.
        <br><br>
        I also have hands-on experience with AWS infrastructure (EC2, RDS, S3), application deployment, environment configuration with Nginx, and process management with PM2.
        <br><br>
        I have participated in real-world projects focused on process automation, data visualization, and systems integration, contributing to operational improvement and application stability.
        <br><br>
        I am seeking an opportunity to work in full stack development, product evolution, and scalable solutions built with strong architecture, code quality, and performance practices.
      `,
      footerSub: "Available for Full Stack opportunities",
      fileName: "Paulo-Rezende-Resume-Fullstack",
      tags: [
        "JavaScript",
        "TypeScript",
        "Node.js",
        "React",
        "Express.js",
        "REST APIs",
        "Prisma ORM",
        "MySQL",
        "PostgreSQL",
        "AWS",
        "Git & GitHub",
        "Layered Architecture",
        "Systems Integration",
        "Deployment",
        "Nginx",
        "PM2"
      ],
      projects: [
        {
          title: "Arcon — Full Stack System",
          description: "Project with complete front-end/back-end integration, layered architecture, and data persistence.",
          technologies: "Node.js, PostgreSQL, JavaScript, Prisma",
          highlights: "REST APIs, architecture, and integration",
          link: "https://github.com/pvrezende/Arcon.git",
          linkLabel: "GitHub"
        },
        {
          title: "Production Dashboard",
          description: "Web system with real-time data and support for industrial operation.",
          technologies: "Node.js, MySQL, AWS",
          highlights: "data integration, backend, frontend, and operational visibility",
          link: "http://98.84.113.180:3000/",
          linkLabel: "Dashboard"
        },
        {
          title: "Expense Tracker",
          description: "Web + mobile application with API consumption and user-focused experience.",
          technologies: "React, Node.js, JavaScript",
          highlights: "full stack, APIs, and integration",
          link: "https://controle-de-gastos-app.vercel.app/",
          linkLabel: "Project"
        },
        {
          title: "TuboVision — Industrial Inspection System with AI",
          description: "Computer vision project focused on industrial capillary inspection.",
          technologies: "Python, OpenCV, YOLO, Docker and REST API",
          highlights: "computer vision, technical integration, and inspection workflow",
          link: "https://github.com/pvrezende/TuboVision",
          linkLabel: "GitHub"
        }
      ]
    },

    mobile: {
      headline: "Mobile Developer | React Native | Expo | JavaScript | REST APIs",
      summary: "Developer with experience in cross-platform mobile applications, API integration, and building functional, high-performing interfaces.",
      resumoContent: `
        Mobile Developer with experience building applications using React Native, Expo, and JavaScript, focused on REST API consumption, navigation, and component organization.
        <br><br>
        I have experience integrating mobile applications with back-end services, including data synchronization and API communication.
        <br><br>
        I also have experience with web and backend development, which strengthens cross-layer integration and product understanding.
        <br><br>
        I am seeking an opportunity to work in mobile development with a focus on performance, code organization, and engineering best practices.
      `,
      footerSub: "Available for Mobile opportunities",
      fileName: "Paulo-Rezende-Resume-Mobile",
      tags: [
        "React Native",
        "Expo",
        "JavaScript",
        "REST APIs",
        "Navigation",
        "Componentization",
        "Service Integration",
        "Git",
        "Mobile Applications",
        "Mobile UX"
      ],
      projects: [
        {
          title: "Expense Tracker",
          description: "Mobile application for financial management focused on navigation and service integration.",
          technologies: "React Native, Expo",
          highlights: "mobile, APIs, and navigation",
          link: "https://controle-de-gastos-app.vercel.app/",
          linkLabel: "Project"
        },
        {
          title: "Industrial Production Dashboard",
          description: "Integration with backend and APIs for data consumption and visualization.",
          technologies: "Node.js, MySQL",
          highlights: "data consumption and integration",
          link: "http://98.84.113.180:3000/",
          linkLabel: "Dashboard"
        },
        {
          title: "Arcon — Full Stack Web System",
          description: "Project with front-end/back-end integration, API consumption, and layered organization.",
          technologies: "Node.js, JavaScript, PostgreSQL, Prisma",
          highlights: "service integration, REST APIs, and architecture",
          link: "https://github.com/pvrezende/Arcon.git",
          linkLabel: "GitHub"
        }
      ]
    }
  }
};

function getSavedTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === 'dark' || saved === 'light') return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getSavedLang() {
  return localStorage.getItem(LANG_KEY) || 'pt';
}

function getSavedRole() {
  const saved = localStorage.getItem(ROLE_KEY);
  return ['backend', 'frontend', 'fullstack', 'mobile'].includes(saved) ? saved : 'fullstack';
}

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);

  if (themeToggle) {
    const lang = getSavedLang();
    themeToggle.textContent =
      lang === 'pt'
        ? (theme === 'dark' ? 'Tema claro' : 'Tema escuro')
        : (theme === 'dark' ? 'Light theme' : 'Dark theme');
  }
}

function applyLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  if (langToggle) {
    langToggle.textContent = lang === 'pt' ? 'EN / PT' : 'PT / EN';
  }

  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

  updateRoleOptions(lang);
  applyTheme(getSavedTheme());
}

function updateRoleOptions(lang) {
  if (!resumeRole) return;

  const currentRole = getSavedRole();
  const options = resumeRole.querySelectorAll('option');

  options.forEach((option) => {
    option.textContent = roleOptions[lang][option.value] || option.textContent;
  });

  resumeRole.value = currentRole;
}

function renderTags(tags) {
  if (!heroTagsEl) return;
  heroTagsEl.innerHTML = tags.map((tag) => `<span>${tag}</span>`).join('');
}

function renderProjects(projects, lang) {
  if (!projectsContainerEl) return;

  const labels = translations[lang];

  projectsContainerEl.innerHTML = projects.map((project) => `
    <article class="project">
      <div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      </div>
      <ul>
        <li><strong>${labels.techLabel}</strong> ${project.technologies}</li>
        <li><strong>${labels.highlightLabel}</strong> ${project.highlights}</li>
        <li><strong>Link:</strong> <a target="_blank" rel="noreferrer" href="${project.link}">${project.linkLabel}</a></li>
      </ul>
    </article>
  `).join('');
}

function applyRole(role) {
  const lang = getSavedLang();
  const profile = roleProfiles[lang]?.[role];

  if (!profile) return;

  if (headlineEl) headlineEl.innerHTML = profile.headline;
  if (summaryEl) summaryEl.innerHTML = profile.summary;
  if (resumoContentEl) resumoContentEl.innerHTML = profile.resumoContent;
  if (footerSubEl) footerSubEl.innerHTML = profile.footerSub;

  renderTags(profile.tags);
  renderProjects(profile.projects, lang);

  document.title = profile.fileName;
  localStorage.setItem(ROLE_KEY, role);

  if (resumeRole) {
    resumeRole.value = role;
  }
}

applyTheme(getSavedTheme());
applyLanguage(getSavedLang());
applyRole(getSavedRole());

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
    applyRole(getSavedRole());
  });
}

if (resumeRole) {
  resumeRole.addEventListener('change', (event) => {
    applyRole(event.target.value);
  });
}

if (printResume) {
  printResume.addEventListener('click', () => {
    window.print();
  });
}