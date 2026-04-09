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
    printBtn: 'Baixar / Imprimir PDF',
    availability: 'Disponível para vagas presenciais, híbridas e remotas',
    skillApi: 'Consumo de APIs REST',
    skillIntegration: 'Integração Front-end / Back-end',
    contactTitle: 'Contato',
    phoneLabel: 'Telefone:',
    locationLabel: 'Localização:',
    englishLabel: 'Inglês:',
    englishLevel: 'Intermediário B1 (leitura técnica e compreensão auditiva)',
    portfolioLink: 'Portfólio',
    resumoTitle: 'Histórico Profissional',
    expTitle: 'Experiência Profissional',
    projectsTitle: 'Projetos em Destaque',
    techLabel: 'Tecnologias:',
    highlightLabel: 'Destaques:',
    repoLink: 'Repositório no GitHub',
    accessProject: 'Acessar projeto',
    accessPortfolio: 'Acessar portfólio',
    eduTitle: 'Formação',
    coursesTitle: 'Cursos',
    courseOngoing: 'Desenvolvimento Full-Stack — INDT (350 hrs)',
    courseCetam: 'Informática Básica e Avançada — CETAM',
    footerText: 'Currículo — Paulo Victor Rezende Virginio',
    job1Title: 'Desenvolvedor Full Stack — Delta Solutions',
    job1Date: 'Março/2025 – Atual',
    job1List: `
      <li>A operação não possuía visibilidade centralizada sobre produção e atividades; desenvolvi e mantive aplicações web integrando Node.js, React e bancos relacionais; isso aumentou a confiabilidade das informações e melhorou o acompanhamento operacional em tempo real.</li>
      <li>Havia retrabalho e baixa integração entre sistemas; implementei APIs REST para comunicação entre serviços e automação de processos internos, reduzindo etapas manuais e melhorando a eficiência operacional.</li>
      <li>A camada de dados precisava de mais organização e manutenção; utilizei Prisma ORM para modelagem e manipulação padronizada de dados, melhorando legibilidade, produtividade e manutenção do código.</li>
      <li>O ambiente exigia disponibilidade e escalabilidade; administrei infraestrutura em AWS (EC2, RDS e S3), garantindo continuidade dos serviços e melhor suporte ao crescimento das aplicações.</li>
      <li>O processo de deploy e execução precisava de maior estabilidade; configurei Nginx, SSL/Certbot e PM2, aumentando segurança, disponibilidade e previsibilidade do ambiente.</li>
      <li>Havia custo elevado na infraestrutura cloud; analisei uso de recursos e otimizei instâncias, reduzindo os custos operacionais em mais de 70% sem comprometer a estabilidade do sistema.</li>
      <li>As aplicações precisavam evoluir com segurança; atuei continuamente em estabilidade, segurança e melhoria de aplicações e bancos de dados, aumentando confiabilidade e sustentação do ambiente.</li>
    `
  },

  en: {
    printBtn: 'Download / Print PDF',
    availability: 'Available for on-site, hybrid, and remote positions',
    skillApi: 'REST API Consumption',
    skillIntegration: 'Front-end / Back-end Integration',
    contactTitle: 'Contact',
    phoneLabel: 'Phone:',
    locationLabel: 'Location:',
    englishLabel: 'English:',
    englishLevel: 'Intermediate B1 (technical reading and listening)',
    portfolioLink: 'Portfolio',
    resumoTitle: 'Professional History',
    expTitle: 'Professional Experience',
    projectsTitle: 'Featured Projects',
    techLabel: 'Technologies:',
    highlightLabel: 'Highlights:',
    repoLink: 'GitHub Repository',
    accessProject: 'Access Project',
    accessPortfolio: 'Access Portfolio',
    eduTitle: 'Education',
    coursesTitle: 'Courses',
    courseOngoing: 'Full-Stack Development — INDT (350 hrs)',
    courseCetam: 'Basic and Advanced IT — CETAM',
    footerText: 'Resume — Paulo Victor Rezende Virginio',
    job1Title: 'Full Stack Developer — Delta Solutions',
    job1Date: 'March/2025 – Present',
    job1List: `
      <li>I worked in a scenario where operational information needed to be centralized; I developed and maintained web applications integrating Node.js, React, and relational databases, increasing the reliability of the operational data flow.</li>
      <li>There was rework and weak system integration; I implemented REST APIs for communication between services and internal process automation, reducing manual steps and improving operational efficiency.</li>
      <li>The data layer needed better organization and maintainability; I used Prisma ORM for standardized data modeling and manipulation, improving code readability, productivity, and maintainability.</li>
      <li>The environment required availability and scalability; I managed AWS infrastructure (EC2, RDS, and S3), ensuring service continuity and better support for application growth.</li>
      <li>The deployment and execution process needed more stability; I configured Nginx, SSL/Certbot, and PM2, increasing security, availability, and environment reliability.</li>
      <li>Cloud infrastructure costs were too high; I analyzed resource usage and optimized instances, reducing operating costs by more than 70% without compromising system stability.</li>
      <li>The applications needed to evolve safely; I continuously worked on application and database stability, security, and improvements, increasing reliability and long-term maintainability.</li>
    `
  }
};

const roleOptions = {
  pt: {
    backend: 'Back-end',
    frontend: 'Front-end',
    fullstack: 'Full Stack',
    mobile: 'Mobile'
  },
  en: {
    backend: 'Back-end',
    frontend: 'Front-end',
    fullstack: 'Full Stack',
    mobile: 'Mobile'
  }
};

const roleProfiles = {
  pt: {
    backend: {
      headline: 'Desenvolvedor Back-end | Node.js | APIs REST | Prisma | MySQL | PostgreSQL | AWS',
      summary: 'Desenvolvedor Back-end com experiência em integração de sistemas, modelagem de dados e construção de serviços voltados para eficiência operacional.',
      resumoContent: `
        Havia falta de padronização no acesso e processamento de dados entre sistemas internos; projetei e desenvolvi APIs REST para centralizar, processar e distribuir informações em tempo real; isso reduziu inconsistências, aumentou a confiabilidade dos dados e melhorou a comunicação entre sistemas; utilizando Node.js, TypeScript, Express, MySQL e PostgreSQL.
        <br><br>
        Processos operacionais dependiam de etapas manuais sujeitas a erro; implementei integrações e automações no back-end; isso reduziu retrabalho, aumentou a eficiência operacional e melhorou a confiabilidade dos dados; utilizando Node.js, APIs REST e integrações entre serviços.
        <br><br>
        O banco de dados apresentava gargalos de organização e performance em consultas; reestruturei modelagem, padronizei acesso a dados e otimizei operações de leitura e escrita; isso melhorou a performance das consultas, facilitou manutenção e aumentou a escalabilidade da aplicação; utilizando Prisma ORM com MySQL e PostgreSQL.
        <br><br>
        A infraestrutura em nuvem tinha custo elevado e uso ineficiente de recursos; analisei consumo, reconfigurei instâncias e otimizei a utilização dos serviços; isso reduziu os custos operacionais em mais de 70% sem comprometer estabilidade e desempenho; utilizando AWS, EC2, RDS, S3, Nginx e PM2.
      `,
      footerSub: 'Disponível para oportunidades em Desenvolvimento Back-end',
      fileName: 'Paulo-Rezende-Curriculo-Backend',
      tags: [
        'Node.js',
        'TypeScript',
        'JavaScript',
        'APIs REST',
        'Express.js',
        'Prisma ORM',
        'MySQL',
        'PostgreSQL',
        'AWS',
        'EC2',
        'RDS',
        'S3',
        'Clean Architecture',
        'Integração de Sistemas',
        'Nginx',
        'PM2',
        'Python',
        'OpenCV',
        'YOLO',
        'Docker'
      ],
      projects: [
        {
          title: 'Dashboard de Produção',
          description: 'Sistema com backend integrado a banco de dados e operação em tempo real.',
          technologies: 'Node.js, MySQL, AWS',
          highlights: 'APIs, banco de dados, integração e suporte operacional',
          link: 'http://98.84.113.180:3000/',
          linkLabel: 'Dashboard'
        },
        {
          title: 'Arcon',
          description: 'Sistema com arquitetura limpa, integração entre serviços e persistência de dados.',
          technologies: 'Node.js, PostgreSQL, Prisma',
          highlights: 'APIs REST, backend estruturado e organização de dados',
          link: 'https://github.com/pvrezende/Arcon.git',
          linkLabel: 'GitHub'
        },
        {
          title: 'TuboVision — Sistema de Inspeção Industrial com IA',
          description: 'Projeto de visão computacional voltado para inspeção de capilares em ambiente industrial.',
          technologies: 'Python, OpenCV, YOLO, Docker e API REST',
          highlights: 'integração técnica, análise visual e fluxo de inspeção',
          link: 'https://github.com/pvrezende/TuboVision',
          linkLabel: 'GitHub'
        }
      ]
    },

    frontend: {
      headline: 'Desenvolvedor Front-end | React | TypeScript | JavaScript | APIs REST | Interfaces Responsivas',
      summary: 'Desenvolvedor Front-end com experiência em visualização de dados, interfaces responsivas e integração com APIs para apoiar a operação.',
      resumoContent: `
        Havia baixa visibilidade sobre produção, atividades e andamento de processos internos; desenvolvi dashboards e interfaces web com atualização em tempo real para centralizar essas informações; isso melhorou a leitura operacional e apoiou a tomada de decisão baseada em dados; utilizando React, TypeScript, JavaScript, HTML, CSS e consumo de APIs REST.
        <br><br>
        Usuários tinham dificuldade para entender carga de trabalho e distribuição de tarefas; criei interfaces para controle e visualização de atividades com navegação clara e leitura rápida; isso facilitou o acompanhamento das equipes e melhorou a experiência de uso dos sistemas; utilizando React, componentização e integração com back-end.
        <br><br>
        O front-end precisava evoluir com organização e facilidade de manutenção; estruturei aplicações em componentes reutilizáveis e organizei a comunicação com APIs; isso aumentou a escalabilidade do código, melhorou performance e reduziu esforço de manutenção; utilizando React, TypeScript, JavaScript e APIs REST.
        <br><br>
        Havia necessidade de interfaces mais estáveis e responsivas para uso contínuo na operação; trabalhei na estrutura visual, responsividade e separação de responsabilidades no front-end; isso elevou usabilidade, consistência e previsibilidade do sistema para os usuários; utilizando HTML5, CSS3, React e boas práticas de arquitetura limpa.
      `,
      footerSub: 'Disponível para oportunidades em Desenvolvimento Front-end',
      fileName: 'Paulo-Rezende-Curriculo-Frontend',
      tags: [
        'React',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3',
        'APIs REST',
        'Componentização',
        'Responsividade',
        'Integração com Back-end',
        'UI',
        'UX',
        'Clean Architecture',
        'Boas práticas',
        'Git & GitHub'
      ],
      projects: [
        {
          title: 'Portfólio Profissional',
          description: 'Website pessoal com foco em layout responsivo, apresentação visual e organização de conteúdo.',
          technologies: 'HTML, CSS, JavaScript',
          highlights: 'responsividade, UI e estrutura de interface',
          link: 'https://portfolio-paulo-rezendes-projects.vercel.app/',
          linkLabel: 'Acessar'
        },
        {
          title: 'Dashboard de Produção Industrial',
          description: 'Interface interativa com visualização de dados em tempo real e acompanhamento operacional.',
          technologies: 'JavaScript, HTML, CSS, Chart.js',
          highlights: 'visualização de dados, integração com APIs e UX',
          link: 'http://98.84.113.180:3000/',
          linkLabel: 'Dashboard'
        },
        {
          title: 'Controle de Gastos',
          description: 'Aplicação com foco em experiência do usuário, componentização e integração com serviços.',
          technologies: 'React, JavaScript',
          highlights: 'componentização, navegação e consumo de APIs',
          link: 'https://controle-de-gastos-app.vercel.app/',
          linkLabel: 'Projeto'
        }
      ]
    },

    fullstack: {
      headline: 'Desenvolvedor Full Stack | Node.js | React | TypeScript | APIs REST | MySQL | PostgreSQL | Prisma | AWS',
      summary: 'Desenvolvedor Full Stack focado em resolver problemas operacionais através de sistemas integrados, automação de processos e uso estratégico de dados em tempo real.',
      resumoContent: `
        Havia falta de controle e visibilidade sobre produção, atividades e andamento de projetos; desenvolvi sistemas integrando front-end, back-end e banco de dados para centralizar informações operacionais; isso aumentou a visibilidade da operação e apoiou decisões mais rápidas e assertivas; utilizando Node.js, React, TypeScript, MySQL e PostgreSQL.
        <br><br>
        Processos internos dependiam de comunicação fragmentada entre sistemas e equipes; projetei APIs REST e integrações entre serviços para processar e disponibilizar dados em tempo real; isso reduziu retrabalho, melhorou a organização das operações e aumentou a eficiência do fluxo de trabalho; utilizando Node.js, Express, Prisma e integrações entre sistemas.
        <br><br>
        A operação precisava de dashboards e controles internos mais claros para acompanhamento diário; construí interfaces e rotinas de processamento de dados voltadas para monitoramento em tempo real; isso melhorou a produtividade, a leitura operacional e a confiabilidade das informações utilizadas pela equipe; utilizando React, JavaScript, TypeScript e Chart.js.
        <br><br>
        O ambiente de infraestrutura apresentava custo alto e oportunidade de otimização; revisei consumo, reconfigurei recursos e ajustei a infraestrutura cloud; isso reduziu os custos operacionais em mais de 70% mantendo estabilidade e desempenho das aplicações; utilizando AWS, EC2, RDS, S3, Nginx e PM2.
      `,
      footerSub: 'Disponível para oportunidades em Desenvolvimento Full Stack',
      fileName: 'Paulo-Rezende-Curriculo-Fullstack',
      tags: [
        'JavaScript',
        'TypeScript',
        'Node.js',
        'React',
        'Express.js',
        'APIs REST',
        'Prisma ORM',
        'MySQL',
        'PostgreSQL',
        'AWS',
        'Git & GitHub',
        'Clean Architecture',
        'Integração de Sistemas',
        'Deploy',
        'Nginx',
        'PM2',
        'Python',
        'OpenCV',
        'YOLO',
        'Docker'
      ],
      projects: [
        {
          title: 'Arcon — Sistema Full Stack',
          description: 'Projeto com integração completa entre front-end e back-end, arquitetura limpa e persistência de dados.',
          technologies: 'Node.js, PostgreSQL, JavaScript, Prisma',
          highlights: 'APIs REST, arquitetura e integração',
          link: 'https://github.com/pvrezende/Arcon.git',
          linkLabel: 'GitHub'
        },
        {
          title: 'Dashboard de Produção',
          description: 'Sistema web com dados em tempo real e suporte à operação industrial.',
          technologies: 'Node.js, MySQL, AWS',
          highlights: 'integração de dados, backend, frontend e visualização operacional',
          link: 'http://98.84.113.180:3000/',
          linkLabel: 'Dashboard'
        },
        {
          title: 'Controle de Gastos',
          description: 'Aplicação web + mobile com consumo de APIs e foco em experiência do usuário.',
          technologies: 'React, Node.js, JavaScript',
          highlights: 'full stack, APIs e integração',
          link: 'https://controle-de-gastos-app.vercel.app/',
          linkLabel: 'Projeto'
        },
        {
          title: 'TuboVision — Sistema de Inspeção Industrial com IA',
          description: 'Projeto de visão computacional voltado para inspeção de capilares em ambiente industrial.',
          technologies: 'Python, OpenCV, YOLO, Docker e API REST',
          highlights: 'visão computacional, integração técnica e fluxo de inspeção',
          link: 'https://github.com/pvrezende/TuboVision',
          linkLabel: 'GitHub'
        }
      ]
    },

    mobile: {
      headline: 'Desenvolvedor Mobile | React Native | Expo | JavaScript | APIs REST',
      summary: 'Desenvolvedor Mobile com experiência em aplicações integradas a APIs, organização de dados e experiência do usuário.',
      resumoContent: `
        Usuários precisavam acompanhar e organizar informações de forma prática em dispositivos móveis; desenvolvi aplicações focadas em controle de dados, navegação simples e leitura clara das informações; isso melhorou a usabilidade e facilitou o gerenciamento de dados no dia a dia; utilizando React Native, Expo e JavaScript.
        <br><br>
        Havia necessidade de sincronizar informações entre app e sistemas internos; implementei integração com APIs REST para envio e consumo de dados em tempo real; isso garantiu consistência das informações e melhor comunicação entre aplicação mobile e backend; utilizando React Native, APIs REST e serviços back-end.
        <br><br>
        A aplicação precisava crescer com código organizado e fácil manutenção; estruturei componentes, navegação e responsabilidades do app de forma modular; isso melhorou performance, manutenção e evolução do projeto; utilizando React Native, Expo, componentização e boas práticas de organização.
        <br><br>
        Os usuários precisavam de uma experiência mais fluida para uso recorrente; trabalhei na organização de telas e no fluxo de navegação para reduzir fricção no uso do app; isso aumentou clareza, praticidade e eficiência na interação com o sistema; utilizando React Native, Expo e JavaScript.
      `,
      footerSub: 'Disponível para oportunidades em Desenvolvimento Mobile',
      fileName: 'Paulo-Rezende-Curriculo-Mobile',
      tags: [
        'React Native',
        'Expo',
        'JavaScript',
        'APIs REST',
        'Navegação',
        'Componentização',
        'Integração com Serviços',
        'Git',
        'Aplicações Mobile',
        'UX Mobile',
        'Clean Architecture'
      ],
      projects: [
        {
          title: 'Controle de Gastos',
          description: 'Aplicação mobile para gestão financeira com foco em navegação e integração com serviços.',
          technologies: 'React Native, Expo',
          highlights: 'mobile, APIs e navegação',
          link: 'https://controle-de-gastos-app.vercel.app/',
          linkLabel: 'Projeto'
        },
        {
          title: 'Dashboard de Produção Industrial',
          description: 'Integração com backend e APIs para consumo e visualização de dados.',
          technologies: 'Node.js, MySQL',
          highlights: 'consumo de dados e integração',
          link: 'http://98.84.113.180:3000/',
          linkLabel: 'Dashboard'
        },
        {
          title: 'Arcon — Sistema Web Full Stack',
          description: 'Projeto com integração entre front-end e back-end, consumo de APIs e organização em camadas.',
          technologies: 'Node.js, JavaScript, PostgreSQL, Prisma',
          highlights: 'integração de serviços, APIs REST e arquitetura',
          link: 'https://github.com/pvrezende/Arcon.git',
          linkLabel: 'GitHub'
        }
      ]
    }
  },

  en: {
    backend: {
      headline: 'Back-end Developer | Node.js | REST APIs | Prisma | MySQL | PostgreSQL | AWS',
      summary: 'Back-end Developer with experience in system integration, data modeling, and service development focused on operational efficiency.',
      resumoContent: `
        There was no standardized way to access and process data across internal systems; I designed and developed REST APIs to centralize, process, and distribute information in real time; this reduced inconsistencies, improved data reliability, and strengthened communication between systems; using Node.js, TypeScript, Express, MySQL, and PostgreSQL.
        <br><br>
        Operational processes depended on manual steps prone to errors and rework; I implemented system integrations and automated backend data flows; this increased operational efficiency, reduced manual tasks, and improved data consistency; using Node.js, REST APIs, and service integrations.
        <br><br>
        The database layer had organization and query performance bottlenecks; I restructured data modeling and standardized data access and write operations; this improved query performance, maintainability, and application scalability; using Prisma ORM with MySQL and PostgreSQL.
        <br><br>
        Cloud infrastructure had high costs and inefficient resource usage; I analyzed consumption, reconfigured instances, and optimized service utilization; this reduced operating costs by more than 70% without compromising system stability and performance; using AWS, EC2, RDS, S3, Nginx, and PM2.
      `,
      footerSub: 'Available for Back-end opportunities',
      fileName: 'Paulo-Rezende-Resume-Backend',
      tags: [
        'Node.js',
        'TypeScript',
        'JavaScript',
        'REST APIs',
        'Express.js',
        'Prisma ORM',
        'MySQL',
        'PostgreSQL',
        'AWS',
        'EC2',
        'RDS',
        'S3',
        'Layered Architecture',
        'Systems Integration',
        'Nginx',
        'PM2',
        'Python',
        'OpenCV',
        'YOLO',
        'Docker'
      ],
      projects: [
        {
          title: 'Production Dashboard',
          description: 'System with a backend integrated to a database and real-time operation.',
          technologies: 'Node.js, MySQL, AWS',
          highlights: 'APIs, database, integration, and operational support',
          link: 'http://98.84.113.180:3000/',
          linkLabel: 'Dashboard'
        },
        {
          title: 'Arcon',
          description: 'System with layered architecture, service integration, and data persistence.',
          technologies: 'Node.js, PostgreSQL, Prisma',
          highlights: 'REST APIs, structured backend, and data organization',
          link: 'https://github.com/pvrezende/Arcon.git',
          linkLabel: 'GitHub'
        },
        {
          title: 'TuboVision — Industrial Inspection System with AI',
          description: 'Computer vision project focused on industrial capillary inspection.',
          technologies: 'Python, OpenCV, YOLO, Docker and REST API',
          highlights: 'technical integration, visual analysis, and inspection workflow',
          link: 'https://github.com/pvrezende/TuboVision',
          linkLabel: 'GitHub'
        }
      ]
    },

    frontend: {
      headline: 'Front-end Developer | React | TypeScript | JavaScript | REST APIs | Responsive Interfaces',
      summary: 'Front-end Developer with experience in data visualization, responsive interfaces, and API integration to support operational workflows.',
      resumoContent: `
        There was low visibility over production, activities, and process status; I developed dashboards and web interfaces with real-time updates to centralize this information; this improved operational awareness and supported data-driven decisions; using React, TypeScript, JavaScript, HTML, CSS, and REST API consumption.
        <br><br>
        Users had difficulty understanding workload and task distribution; I created interfaces for activity control and visualization with clearer navigation and information hierarchy; this improved team monitoring and overall user experience; using React, componentization, and back-end integration.
        <br><br>
        The front-end needed to evolve with better structure and maintainability; I organized applications into reusable components and standardized API communication; this improved scalability, performance, and ease of maintenance; using React, TypeScript, JavaScript, and REST APIs.
        <br><br>
        The operation required more stable and responsive interfaces for daily use; I worked on visual structure, responsiveness, and separation of responsibilities in the front-end; this increased usability, consistency, and reliability for end users; using HTML5, CSS3, React, and layered architecture best practices.
      `,
      footerSub: 'Available for Front-end opportunities',
      fileName: 'Paulo-Rezende-Resume-Frontend',
      tags: [
        'React',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3',
        'REST APIs',
        'Componentization',
        'Responsive Design',
        'Back-end Integration',
        'UI',
        'UX',
        'Layered Architecture',
        'Best Practices',
        'Git & GitHub'
      ],
      projects: [
        {
          title: 'Professional Portfolio',
          description: 'Personal website focused on responsive layout, visual presentation, and content organization.',
          technologies: 'HTML, CSS, JavaScript',
          highlights: 'responsiveness, UI, and interface structure',
          link: 'https://portfolio-paulo-rezendes-projects.vercel.app/',
          linkLabel: 'Access'
        },
        {
          title: 'Industrial Production Dashboard',
          description: 'Interactive interface with real-time data visualization and operational monitoring.',
          technologies: 'JavaScript, HTML, CSS, Chart.js',
          highlights: 'data visualization, API integration, and UX',
          link: 'http://98.84.113.180:3000/',
          linkLabel: 'Dashboard'
        },
        {
          title: 'Expense Tracker',
          description: 'Application focused on user experience, component organization, and service integration.',
          technologies: 'React, JavaScript',
          highlights: 'componentization, navigation, and API consumption',
          link: 'https://controle-de-gastos-app.vercel.app/',
          linkLabel: 'Project'
        }
      ]
    },

    fullstack: {
      headline: 'Full Stack Developer | Node.js | React | TypeScript | REST APIs | MySQL | PostgreSQL | Prisma | AWS',
      summary: 'Full Stack Developer with experience in integrated systems, real-time data, and solutions focused on operational efficiency.',
      resumoContent: `
        There was a lack of control and visibility over production, activities, and project status; I developed systems integrating front-end, back-end, and databases to centralize operational information; this increased operational visibility and supported faster, better decisions; using Node.js, React, TypeScript, MySQL, and PostgreSQL.
        <br><br>
        Internal processes depended on fragmented communication between systems and teams; I designed REST APIs and service integrations to process and distribute data in real time; this reduced rework, improved operational organization, and increased workflow efficiency; using Node.js, Express, Prisma, and system integrations.
        <br><br>
        The operation needed clearer dashboards and internal controls for daily monitoring; I built interfaces and data-processing routines focused on real-time tracking; this improved productivity, operational understanding, and data reliability for the team; using React, JavaScript, TypeScript, and Chart.js.
        <br><br>
        The infrastructure environment had high costs and optimization opportunities; I reviewed resource consumption, reconfigured services, and optimized cloud infrastructure; this reduced operating costs by more than 70% while maintaining application stability and performance; using AWS, EC2, RDS, S3, Nginx, and PM2.
      `,
      footerSub: 'Available for Full Stack opportunities',
      fileName: 'Paulo-Rezende-Resume-Fullstack',
      tags: [
        'JavaScript',
        'TypeScript',
        'Node.js',
        'React',
        'Express.js',
        'REST APIs',
        'Prisma ORM',
        'MySQL',
        'PostgreSQL',
        'AWS',
        'Git & GitHub',
        'Layered Architecture',
        'Systems Integration',
        'Deployment',
        'Nginx',
        'PM2'
      ],
      projects: [
        {
          title: 'Arcon — Full Stack System',
          description: 'Project with complete front-end/back-end integration, layered architecture, and data persistence.',
          technologies: 'Node.js, PostgreSQL, JavaScript, Prisma',
          highlights: 'REST APIs, architecture, and integration',
          link: 'https://github.com/pvrezende/Arcon.git',
          linkLabel: 'GitHub'
        },
        {
          title: 'Production Dashboard',
          description: 'Web system with real-time data and support for industrial operation.',
          technologies: 'Node.js, MySQL, AWS',
          highlights: 'data integration, backend, frontend, and operational visibility',
          link: 'http://98.84.113.180:3000/',
          linkLabel: 'Dashboard'
        },
        {
          title: 'Expense Tracker',
          description: 'Web + mobile application with API consumption and user-focused experience.',
          technologies: 'React, Node.js, JavaScript',
          highlights: 'full stack, APIs, and integration',
          link: 'https://controle-de-gastos-app.vercel.app/',
          linkLabel: 'Project'
        },
        {
          title: 'TuboVision — Industrial Inspection System with AI',
          description: 'Computer vision project focused on industrial capillary inspection.',
          technologies: 'Python, OpenCV, YOLO, Docker and REST API',
          highlights: 'computer vision, technical integration, and inspection workflow',
          link: 'https://github.com/pvrezende/TuboVision',
          linkLabel: 'GitHub'
        }
      ]
    },

    mobile: {
      headline: 'Mobile Developer | React Native | Expo | JavaScript | REST APIs',
      summary: 'Mobile Developer with experience in API-integrated applications, data organization, and user experience.',
      resumoContent: `
        Users needed a practical way to track and organize information on mobile devices; I developed applications focused on data control, simple navigation, and clear information display; this improved usability and made day-to-day data management easier; using React Native, Expo, and JavaScript.
        <br><br>
        There was a need to synchronize information between the app and internal systems; I implemented REST API integration for real-time data exchange and consumption; this ensured data consistency and better communication between the mobile application and backend; using React Native, REST APIs, and back-end services.
        <br><br>
        The application needed organized code and easier long-term maintenance; I structured components, navigation, and responsibilities in a modular way; this improved performance, maintainability, and future evolution of the project; using React Native, Expo, componentization, and code organization best practices.
        <br><br>
        Users needed a smoother and more efficient app experience for recurring use; I improved screen organization and navigation flow to reduce friction; this increased clarity, usability, and interaction efficiency within the application; using React Native, Expo, and JavaScript.
      `,
      footerSub: 'Available for Mobile opportunities',
      fileName: 'Paulo-Rezende-Resume-Mobile',
      tags: [
        'React Native',
        'Expo',
        'JavaScript',
        'REST APIs',
        'Navigation',
        'Componentization',
        'Service Integration',
        'Git',
        'Mobile Applications',
        'Mobile UX'
      ],
      projects: [
        {
          title: 'Expense Tracker',
          description: 'Mobile application for financial management focused on navigation and service integration.',
          technologies: 'React Native, Expo',
          highlights: 'mobile, APIs, and navigation',
          link: 'https://controle-de-gastos-app.vercel.app/',
          linkLabel: 'Project'
        },
        {
          title: 'Industrial Production Dashboard',
          description: 'Integration with backend and APIs for data consumption and visualization.',
          technologies: 'Node.js, MySQL',
          highlights: 'data consumption and integration',
          link: 'http://98.84.113.180:3000/',
          linkLabel: 'Dashboard'
        },
        {
          title: 'Arcon — Full Stack Web System',
          description: 'Project with front-end/back-end integration, API consumption, and layered organization.',
          technologies: 'Node.js, JavaScript, PostgreSQL, Prisma',
          highlights: 'service integration, REST APIs, and architecture',
          link: 'https://github.com/pvrezende/Arcon.git',
          linkLabel: 'GitHub'
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
