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
const careerObjectiveEl = document.getElementById('careerObjective');

const THEME_KEY = 'curriculo_2026_theme';
const LANG_KEY = 'curriculo_2026_lang';
const ROLE_KEY = 'curriculo_2026_role';

const translations = {
  pt: {
    printBtn: 'Baixar / Imprimir PDF',
    availability: 'Disponível para vagas presenciais, híbridas e remotas',
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
    eduTitle: 'Formação',
    coursesTitle: 'Cursos',
    focusTitle: 'Objetivo Profissional',
    courseOngoing: 'Desenvolvimento Full-Stack — INDT (350 hrs)',
    courseCetam: 'Informática Básica e Avançada — CETAM',
    footerText: 'Currículo — Paulo Victor Rezende Virginio',
    job1Title: 'Desenvolvedor Full Stack Jr — Delta Solutions',
    job1Date: 'Março/2025 – Atual',
    job1List: `
      <li>A operação não possuía visibilidade centralizada sobre produção e atividades; desenvolvi e mantive aplicações web integrando front-end, back-end e bancos relacionais; isso aumentou a confiabilidade das informações e melhorou o acompanhamento operacional em tempo real; utilizando Node.js, React, MySQL e PostgreSQL.</li>
      <li>Havia retrabalho e baixa integração entre sistemas; implementei APIs REST para comunicação entre serviços e automação de processos internos; isso reduziu etapas manuais, aumentou a eficiência operacional e melhorou a consistência dos dados; utilizando Node.js, TypeScript e arquitetura de APIs.</li>
      <li>A camada de dados precisava de mais organização e manutenção; padronizei a modelagem e o acesso aos dados com ORM; isso melhorou a legibilidade do código, produtividade da equipe e facilidade de manutenção; utilizando Prisma ORM com MySQL e PostgreSQL.</li>
      <li>O ambiente exigia disponibilidade e escalabilidade; administrei e configurei infraestrutura em cloud; isso garantiu continuidade dos serviços e suporte ao crescimento das aplicações; utilizando AWS (EC2, RDS, S3), Nginx e PM2.</li>
      <li>O processo de deploy e execução precisava de maior estabilidade; estruturei o ambiente de deploy com configuração de proxy, SSL e gerenciamento de processos; isso aumentou segurança, disponibilidade e previsibilidade do ambiente; utilizando Nginx, Certbot e PM2.</li>
      <li>Havia custo elevado na infraestrutura cloud; analisei uso de recursos e reconfigurei instâncias e serviços; isso reduziu os custos operacionais em mais de 70% sem comprometer a estabilidade do sistema; utilizando AWS e otimização de recursos.</li>
      <li>As aplicações precisavam evoluir com segurança e padronização; atuei continuamente na melhoria de código, estrutura e banco de dados; isso aumentou a confiabilidade, escalabilidade e sustentação do ambiente; utilizando boas práticas de arquitetura e versionamento com Git.</li>
      <li>Havia necessidade de evolução tecnológica e alinhamento com padrões corporativos; desenvolvi e estudei aplicações back-end utilizando Java e Spring Boot integradas a APIs e bancos de dados; isso ampliou minha capacidade de atuar em sistemas enterprise e arquiteturas escaláveis; utilizando Java, Spring Boot, APIs REST e integração com MySQL/PostgreSQL.</li>
    `
  },
  en: {
    printBtn: 'Download / Print PDF',
    availability: 'Available for on-site, hybrid, and remote positions',
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
    eduTitle: 'Education',
    coursesTitle: 'Courses',
    focusTitle: 'Professional Objective',
    courseOngoing: 'Full-Stack Development — INDT (350 hrs)',
    courseCetam: 'Basic and Advanced IT — CETAM',
    footerText: 'Resume — Paulo Victor Rezende Virginio',
    job1Title: 'Junior Full Stack Developer — Delta Solutions',
    job1Date: 'March/2025 – Present',
    job1List: `
      <li>The operation lacked centralized visibility over production and activities; I developed and maintained web applications integrating front-end, back-end, and relational databases; this increased information reliability and improved real-time operational monitoring; using Node.js, React, MySQL, and PostgreSQL.</li>
      <li>There was rework and weak integration between systems; I implemented REST APIs for service communication and internal process automation; this reduced manual steps, increased operational efficiency, and improved data consistency; using Node.js, TypeScript, and API architecture.</li>
      <li>The data layer required better organization and maintainability; I standardized data modeling and access with ORM; this improved code readability, team productivity, and long-term maintenance; using Prisma ORM with MySQL and PostgreSQL.</li>
      <li>The environment required availability and scalability; I managed and configured cloud infrastructure; this ensured service continuity and supported application growth; using AWS (EC2, RDS, S3), Nginx, and PM2.</li>
      <li>The deployment and execution process needed more stability; I structured the deployment environment with proxy, SSL, and process management; this increased security, availability, and predictability; using Nginx, Certbot, and PM2.</li>
      <li>Cloud infrastructure costs were high; I analyzed resource usage and reconfigured instances and services; this reduced operating costs by more than 70% without compromising system stability; using AWS and resource optimization.</li>
      <li>Applications needed to evolve with safety and standardization; I continuously improved code, structure, and databases; this increased reliability, scalability, and environment support; using architecture best practices and Git versioning.</li>
      <li>There was a need for technological evolution and alignment with corporate standards; I developed and studied back-end applications using Java and Spring Boot integrated with APIs and databases; this expanded my ability to work with enterprise systems and scalable architectures; using Java, Spring Boot, REST APIs, and MySQL/PostgreSQL integration.</li>
    `
  }
};

const roleOptions = {
  pt: {
    fullstack: 'Full Stack',
    backend_node: 'Back-end Node.js',
    frontend: 'Front-end',
    python_ai: 'Python / IA',
    java_spring: 'Java / Spring Boot',
    mobile: 'Mobile React Native'
  },
  en: {
    fullstack: 'Full Stack',
    backend_node: 'Node.js Back-end',
    frontend: 'Front-end',
    python_ai: 'Python / AI',
    java_spring: 'Java / Spring Boot',
    mobile: 'React Native Mobile'
  }
};

const sharedProjects = {
  pt: {
    tubovision: {
      title: 'TuboVision Capilar — Inspeção Industrial com IA',
      description: 'Sistema de visão computacional para inspeção automatizada de capilares em ambiente industrial, com processamento de imagens, classificação de peças e integração software + hardware.',
      technologies: 'Python, OpenCV, FastAPI, SQLite, WebSocket',
      highlights: 'inspeção visual, IA aplicada à indústria, processamento em tempo real, integração com câmeras industriais e dashboards operacionais',
      link: 'https://github.com/pvrezende/TuboVision',
      linkLabel: 'GitHub'
    },
    dashboard: {
      title: 'Dashboard de Produção Industrial',
      description: 'Sistema Full Stack para monitoramento de produção, indicadores operacionais, OEE e acompanhamento de dados em tempo real.',
      technologies: 'Node.js, JavaScript, MySQL, AWS, APIs REST, Chart.js',
      highlights: 'dashboards corporativos, indicadores de produção, deploy em AWS, APIs REST e evolução contínua da aplicação',
      link: 'http://98.84.113.180:3000/',
      linkLabel: 'Dashboard'
    },
    controle: {
      title: 'Controle de Gastos — Web + Mobile',
      description: 'Aplicação para controle financeiro pessoal, gestão de receitas e despesas, com experiência mobile e integração com back-end.',
      technologies: 'React Native, Expo, Expo Go, Node.js, JWT, APIs REST, JavaScript',
      highlights: 'aplicação mobile multiplataforma, autenticação JWT, consumo de APIs, controle financeiro e integração Full Stack',
      link: 'https://controle-de-gastos-app.vercel.app/',
      linkLabel: 'Projeto'
    },
    smartpet: {
      title: 'Smart Pet — Sistema Full Stack para Pet Shop',
      description: 'Sistema de gestão para pet shop com dashboard gerencial, produtos, clientes e módulo de vendas, desenvolvido como projeto Java/Spring Boot + Angular.',
      technologies: 'Java, Spring Boot, Angular, TypeScript, MySQL, APIs REST',
      highlights: 'CRUD, dashboard, controle de estoque, arquitetura back-end, integração front-end/back-end e evolução de funcionalidades',
      link: 'https://github.com/pvrezende/Smart-Pet',
      linkLabel: 'GitHub'
    }
  },
  en: {
    tubovision: {
      title: 'TuboVision Capilar — Industrial Inspection with AI',
      description: 'Computer vision system for automated capillary inspection in an industrial environment, with image processing, part classification, and software + hardware integration.',
      technologies: 'Python, OpenCV, FastAPI, SQLite, WebSocket',
      highlights: 'visual inspection, industrial AI, real-time processing, industrial camera integration, and operational dashboards',
      link: 'https://github.com/pvrezende/TuboVision',
      linkLabel: 'GitHub'
    },
    dashboard: {
      title: 'Industrial Production Dashboard',
      description: 'Full Stack system for production monitoring, operational indicators, OEE, and real-time data tracking.',
      technologies: 'Node.js, JavaScript, MySQL, AWS, REST APIs, Chart.js',
      highlights: 'corporate dashboards, production indicators, AWS deployment, REST APIs, and continuous application evolution',
      link: 'http://98.84.113.180:3000/',
      linkLabel: 'Dashboard'
    },
    controle: {
      title: 'Expense Tracker — Web + Mobile',
      description: 'Application for personal financial control, income and expense management, with mobile experience and back-end integration.',
      technologies: 'React Native, Expo, Expo Go, Node.js, JWT, REST APIs, JavaScript',
      highlights: 'cross-platform mobile app, JWT authentication, API consumption, financial control, and Full Stack integration',
      link: 'https://controle-de-gastos-app.vercel.app/',
      linkLabel: 'Project'
    },
    smartpet: {
      title: 'Smart Pet — Full Stack Pet Shop System',
      description: 'Pet shop management system with business dashboard, products, customers, and sales module, developed as a Java/Spring Boot + Angular project.',
      technologies: 'Java, Spring Boot, Angular, TypeScript, MySQL, REST APIs',
      highlights: 'CRUD, dashboard, inventory control, back-end architecture, front-end/back-end integration, and feature evolution',
      link: 'https://github.com/pvrezende/Smart-Pet',
      linkLabel: 'GitHub'
    }
  }
};

const roleProfiles = {
  pt: {
    fullstack: {
      headline: 'Desenvolvedor Full Stack | Node.js | React | Angular | TypeScript | AWS | IA Industrial',
      summary: 'Desenvolvedor Full Stack com experiência em sistemas corporativos, cloud, mobile, APIs REST, bancos de dados e soluções com IA aplicada à indústria.',
      resumoContent: `
        Empresas precisavam de maior visibilidade sobre produção, atividades e entregas; desenvolvi sistemas completos integrando front-end, back-end, banco de dados e dashboards; isso centralizou informações operacionais, reduziu retrabalho e apoiou decisões em tempo real; utilizando Node.js, React, TypeScript, MySQL, PostgreSQL e Chart.js.
        <br><br>
        Processos internos dependiam de integrações manuais e comunicação fragmentada; criei APIs REST e fluxos de integração entre sistemas; isso aumentou a eficiência operacional, melhorou a confiabilidade dos dados e tornou as entregas mais previsíveis; utilizando Node.js, Express, Prisma, APIs REST e AWS.
        <br><br>
        Projetos exigiam soluções além do desenvolvimento web tradicional; participei da construção de sistemas com mobile, visão computacional e automação industrial; isso ampliou o impacto tecnológico das soluções e aproximou software, hardware e operação; utilizando React Native, Python, OpenCV, FastAPI e WebSocket.
        <br><br>
        A infraestrutura em nuvem apresentava custo elevado; analisei consumo, reconfigurei recursos e ajustei serviços; isso reduziu os custos operacionais em mais de 70% mantendo estabilidade e desempenho; utilizando AWS EC2, RDS, S3, Nginx e PM2.
      `,
      careerObjective: 'Construir soluções completas que resolvam problemas reais de negócio, unindo desenvolvimento front-end, back-end, dados, cloud e automação para gerar impacto operacional e apoiar decisões estratégicas.',
      footerSub: 'Disponível para oportunidades em Desenvolvimento Full Stack',
      fileName: 'Paulo-Rezende-Curriculo-Fullstack',
      tags: ['React', 'Angular', 'TypeScript', 'Node.js', 'Express.js', 'APIs REST', 'Prisma ORM', 'MySQL', 'PostgreSQL', 'AWS', 'Docker', 'React Native', 'Python', 'OpenCV', 'Git & GitHub'],
      projects: ['tubovision', 'dashboard', 'controle', 'smartpet'],
      jobList: `
        <li>Havia baixa visibilidade sobre produção, atividades e entregas; desenvolvi aplicações completas integrando front-end, back-end, banco de dados e dashboards; isso centralizou informações operacionais e melhorou a tomada de decisão em tempo real; utilizando Node.js, React, TypeScript, MySQL e PostgreSQL.</li>
        <li>Processos internos dependiam de controles manuais e comunicação fragmentada; criei APIs REST e fluxos de integração entre sistemas; isso reduziu retrabalho, aumentou a confiabilidade dos dados e tornou as rotinas mais eficientes; utilizando Node.js, Express, Prisma e APIs REST.</li>
        <li>A operação precisava de interfaces claras para acompanhamento diário; desenvolvi telas e dashboards para visualização de indicadores, atividades e status de processos; isso melhorou produtividade, leitura operacional e experiência dos usuários; utilizando React, JavaScript, TypeScript e Chart.js.</li>
        <li>A infraestrutura em cloud apresentava custos elevados; analisei consumo, reconfigurei recursos e otimizei serviços; isso reduziu custos operacionais em mais de 70% mantendo estabilidade e desempenho; utilizando AWS EC2, RDS, S3, Nginx e PM2.</li>
        <li>Projetos exigiam evolução técnica além do web tradicional; participei de soluções com mobile, visão computacional e integração software + hardware; isso ampliou o impacto das entregas e aproximou tecnologia da operação industrial; utilizando React Native, Python, OpenCV, FastAPI e WebSocket.</li>
      `
    },
    backend_node: {
      headline: 'Desenvolvedor Back-end Node.js | APIs REST | Express | NestJS | Prisma | AWS',
      summary: 'Desenvolvedor Back-end com foco em APIs REST, integração de sistemas, bancos relacionais, automação de processos e infraestrutura cloud.',
      resumoContent: `
        Sistemas internos possuíam baixa padronização no acesso e processamento de dados; desenvolvi APIs REST para centralizar, processar e disponibilizar informações; isso reduziu inconsistências e aumentou a confiabilidade das integrações; utilizando Node.js, Express, TypeScript, MySQL e PostgreSQL.
        <br><br>
        Processos operacionais dependiam de etapas manuais sujeitas a erro; implementei integrações e automações no back-end; isso reduziu retrabalho, aumentou a eficiência operacional e melhorou a consistência dos dados; utilizando Node.js, APIs REST, JWT e integrações entre serviços.
        <br><br>
        A camada de dados precisava ser mais organizada e escalável; padronizei modelagem, acesso e manipulação de dados; isso melhorou manutenção, produtividade e performance das consultas; utilizando Prisma ORM, MySQL, PostgreSQL e TypeORM.
        <br><br>
        O ambiente de produção exigia estabilidade e controle de recursos; configurei deploy, processos e servidores; isso melhorou disponibilidade e reduziu custos operacionais em mais de 70%; utilizando AWS EC2, RDS, S3, Docker, Nginx e PM2.
      `,
      careerObjective: 'Atuar no desenvolvimento de serviços back-end escaláveis, APIs bem estruturadas e integrações que melhorem eficiência operacional, confiabilidade de dados e sustentação de sistemas em produção.',
      footerSub: 'Disponível para oportunidades em Back-end Node.js',
      fileName: 'Paulo-Rezende-Curriculo-Backend-Node',
      tags: ['Node.js', 'Express.js', 'NestJS', 'TypeScript', 'APIs REST', 'JWT', 'Prisma ORM', 'TypeORM', 'MySQL', 'PostgreSQL', 'Docker', 'AWS', 'Nginx', 'PM2', 'Git'],
      projects: ['dashboard', 'controle', 'smartpet'],
      jobList: `
        <li>Sistemas internos possuíam baixa padronização no acesso e processamento de dados; desenvolvi APIs REST para centralizar, processar e disponibilizar informações; isso reduziu inconsistências e aumentou a confiabilidade das integrações; utilizando Node.js, Express, TypeScript, MySQL e PostgreSQL.</li>
        <li>Processos operacionais dependiam de etapas manuais sujeitas a erro; implementei integrações e automações no back-end; isso reduziu retrabalho, aumentou eficiência operacional e melhorou consistência dos dados; utilizando Node.js, APIs REST, JWT e integrações entre serviços.</li>
        <li>A camada de dados precisava ser mais organizada e escalável; padronizei modelagem, acesso e manipulação de dados; isso melhorou manutenção, produtividade e performance de consultas; utilizando Prisma ORM, MySQL, PostgreSQL e TypeORM.</li>
        <li>O ambiente de produção exigia estabilidade e controle de recursos; configurei deploy, servidores e gerenciamento de processos; isso aumentou disponibilidade e reduziu custos operacionais em mais de 70%; utilizando AWS EC2, RDS, S3, Docker, Nginx e PM2.</li>
        <li>As aplicações precisavam evoluir com segurança e previsibilidade; atuei na melhoria contínua de APIs, estrutura de código e versionamento; isso aumentou confiabilidade, manutenção e sustentação dos sistemas; utilizando Git, boas práticas REST e arquitetura em camadas.</li>
      `
    },

    frontend: {
      headline: 'Desenvolvedor Front-end | React | Angular | TypeScript | JavaScript | APIs REST',
      summary: 'Desenvolvedor Front-end com experiência em interfaces responsivas, dashboards operacionais, visualização de dados e integração com APIs REST.',
      resumoContent: `
        Usuários precisavam acompanhar produção, atividades e indicadores de forma clara; desenvolvi interfaces web e dashboards para centralizar informações operacionais em tempo real; isso melhorou a leitura dos processos, apoiou decisões rápidas e reduziu dependência de controles manuais; utilizando React, TypeScript, JavaScript, HTML, CSS e Chart.js.
        <br><br>
        Sistemas internos exigiam melhor experiência de uso e organização visual; estruturei telas com foco em responsividade, hierarquia de informação e navegação objetiva; isso aumentou a usabilidade, facilitou o acompanhamento das atividades e tornou as rotinas mais práticas para os usuários; utilizando HTML5, CSS3, React e boas práticas de UI/UX.
        <br><br>
        As interfaces precisavam consumir dados de diferentes serviços com confiabilidade; integrei o front-end a APIs REST e organizei a comunicação com o back-end; isso garantiu dados mais consistentes, atualização das informações e melhor integração entre camadas; utilizando APIs REST, JavaScript, TypeScript e integração front-end/back-end.
        <br><br>
        Também evoluí conhecimentos em aplicações corporativas com Angular; desenvolvi telas e integrações em projetos Full Stack para reforçar domínio em frameworks front-end utilizados no mercado; isso ampliou minha aderência a vagas React e Angular; utilizando Angular, TypeScript, APIs REST e componentização.
      `,
      careerObjective: 'Atuar no desenvolvimento de interfaces modernas, responsivas e orientadas ao usuário, criando experiências que facilitem operações, visualização de dados e integração eficiente com serviços back-end.',
      footerSub: 'Disponível para oportunidades em Desenvolvimento Front-end',
      fileName: 'Paulo-Rezende-Curriculo-Frontend',
      tags: ['React', 'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'APIs REST', 'Chart.js', 'Responsividade', 'Componentização', 'UI/UX', 'Integração com Back-end', 'Git & GitHub'],
      projects: ['dashboard', 'controle', 'smartpet'],
      jobList: `
        <li>Usuários precisavam acompanhar produção, atividades e indicadores de forma clara; desenvolvi interfaces web e dashboards para centralizar informações operacionais em tempo real; isso melhorou a leitura dos processos e apoiou decisões rápidas; utilizando React, TypeScript, JavaScript, HTML, CSS e Chart.js.</li>
        <li>Sistemas internos exigiam melhor experiência de uso e organização visual; estruturei telas com foco em responsividade, hierarquia de informação e navegação objetiva; isso aumentou usabilidade e tornou as rotinas mais práticas para os usuários; utilizando HTML5, CSS3, React e boas práticas de UI/UX.</li>
        <li>As interfaces precisavam consumir dados de diferentes serviços com confiabilidade; integrei o front-end a APIs REST e organizei a comunicação com o back-end; isso garantiu informações mais consistentes e melhor integração entre camadas; utilizando APIs REST, JavaScript e TypeScript.</li>
        <li>A operação precisava acompanhar status de projetos, atividades e disponibilidade de recursos; desenvolvi telas para consulta e visualização de dados operacionais; isso facilitou acompanhamento das equipes e melhorou controle das entregas; utilizando React, componentização e integração com APIs.</li>
        <li>Também evoluí conhecimentos em aplicações corporativas com Angular; desenvolvi telas e integrações em projetos Full Stack; isso ampliou minha aderência a vagas React e Angular; utilizando Angular, TypeScript, APIs REST e componentização.</li>
      `
    },

    python_ai: {
      headline: 'Desenvolvedor Python | IA | Visão Computacional | OpenCV | FastAPI',
      summary: 'Desenvolvedor com experiência em visão computacional aplicada à indústria, processamento digital de imagens, automação industrial e integração software + hardware.',
      resumoContent: `
        A inspeção industrial dependia de análise manual e baixa rastreabilidade visual; desenvolvi algoritmos de inspeção visual para classificar peças e apoiar decisões de aprovação ou reprovação; isso aumentou o controle do processo e possibilitou validação automatizada; utilizando Python, OpenCV e processamento digital de imagens.
        <br><br>
        A operação precisava integrar visão computacional com sistemas de acompanhamento e automação; desenvolvi APIs e comunicação em tempo real para conectar inspeção, dashboards e fluxo operacional; isso aproximou software, hardware e processo produtivo; utilizando FastAPI, WebSocket, SQLite e integração com câmeras industriais.
        <br><br>
        O sistema precisava evoluir conforme testes reais em ambiente industrial; participei da arquitetura, ajustes de parâmetros, validação de modelos e melhorias contínuas; isso tornou a solução mais estável, rastreável e aderente ao uso em produção; utilizando Python, OpenCV, FastAPI e técnicas de visão computacional.
        <br><br>
        Havia necessidade de transformar imagens em dados úteis para operação; implementei processamento em tempo real e geração de evidências visuais; isso permitiu análise técnica, histórico de inspeções e melhor tomada de decisão; utilizando OpenCV, SQLite, WebSocket e dashboards.
      `,
      careerObjective: 'Atuar no desenvolvimento de soluções com Python, IA e visão computacional aplicadas à indústria, conectando processamento de imagens, automação e sistemas em tempo real para gerar eficiência operacional.',
      footerSub: 'Disponível para oportunidades em Python, IA e Visão Computacional',
      fileName: 'Paulo-Rezende-Curriculo-Python-IA-Visao-Computacional',
      tags: ['Python', 'FastAPI', 'OpenCV', 'Visão Computacional', 'Processamento de Imagens', 'IA Industrial', 'WebSocket', 'SQLite', 'Automação Industrial', 'Integração Hardware + Software', 'Câmeras Industriais', 'Tempo Real'],
      projects: ['tubovision'],
      jobList: `
        <li>A inspeção industrial dependia de análise manual e baixa rastreabilidade visual; desenvolvi algoritmos de inspeção para classificar peças e apoiar decisões de aprovação ou reprovação; isso aumentou controle do processo e possibilitou validação automatizada; utilizando Python, OpenCV e processamento de imagens.</li>
        <li>A operação precisava integrar visão computacional com sistemas de acompanhamento e automação; desenvolvi APIs e comunicação em tempo real para conectar inspeção, dashboard e fluxo operacional; isso aproximou software, hardware e processo produtivo; utilizando FastAPI, WebSocket, SQLite e câmeras industriais.</li>
        <li>O sistema precisava evoluir com testes reais em ambiente industrial; participei da arquitetura, ajustes de parâmetros, validação de modelos e melhoria contínua da solução; isso tornou o sistema mais estável, rastreável e aderente ao uso em produção; utilizando Python, OpenCV e técnicas de visão computacional.</li>
        <li>Havia necessidade de transformar imagens em dados úteis para operação; implementei processamento em tempo real e geração de evidências visuais; isso permitiu análise técnica, histórico de inspeções e melhor tomada de decisão; utilizando OpenCV, SQLite, WebSocket e dashboards.</li>
        <li>A solução exigia integração entre software e automação industrial; participei da comunicação entre sistema, câmera e fluxo físico de inspeção; isso fortaleceu a confiabilidade do processo e a conexão entre tecnologia e operação; utilizando Python, FastAPI, WebSocket e integração hardware + software.</li>
      `
    },
    java_spring: {
      headline: 'Desenvolvedor Java | Spring Boot | APIs REST | Angular | TypeScript | MySQL',
      summary: 'Desenvolvedor com foco em aplicações Java, Spring Boot, APIs REST, arquitetura back-end e integração com interfaces Angular.',
      resumoContent: `
        O projeto precisava estruturar uma aplicação corporativa para gestão de pet shop, com cadastro de produtos, clientes, vendas e visão gerencial; desenvolvi funcionalidades back-end com Java e Spring Boot, conectadas a uma interface Angular; isso organizou o fluxo da aplicação e consolidou uma base escalável para evolução do sistema; utilizando Java, Spring Boot, Angular, TypeScript, MySQL e APIs REST.
        <br><br>
        A aplicação precisava separar responsabilidades entre regras de negócio, persistência de dados e comunicação com a interface; organizei a arquitetura em camadas e implementei endpoints REST para operações de cadastro, consulta e atualização; isso melhorou manutenção, clareza técnica e evolução de funcionalidades; utilizando Spring Boot, MySQL, APIs REST e boas práticas de arquitetura.
        <br><br>
        O front-end precisava consumir dados de forma consistente e integrada ao back-end; implementei comunicação entre Angular e APIs Java para permitir navegação e uso das funcionalidades do sistema; isso fortaleceu minha visão Full Stack em tecnologias corporativas e aumentou aderência a vagas Java/Spring com Angular; utilizando Angular, TypeScript, Spring Boot e APIs REST.
      `,
      jobList: `
        <li>O sistema precisava organizar informações de produtos, clientes e vendas; desenvolvi funcionalidades back-end com cadastro, consulta e regras de negócio; isso estruturou a base operacional da aplicação e facilitou a evolução do projeto; utilizando Java, Spring Boot, MySQL e APIs REST.</li>
        <li>A aplicação precisava separar responsabilidades entre controller, service, repository e banco de dados; apliquei arquitetura em camadas para organizar o fluxo do sistema; isso melhorou clareza técnica, manutenção e escalabilidade do código; utilizando Spring Boot, boas práticas REST, Git e MySQL.</li>
        <li>O front-end precisava consumir dados do back-end com consistência; implementei comunicação entre APIs Java e telas web; isso integrou as camadas da aplicação e melhorou a experiência de uso; utilizando Spring Boot, Angular, TypeScript e APIs REST.</li>
        <li>O projeto exigia evolução contínua de funcionalidades; trabalhei na construção e ajuste de recursos do Smart Pet para atender fluxos de gestão; isso consolidou prática com stack corporativa e visão Full Stack; utilizando Java, Spring Boot, Angular e MySQL.</li>
        <li>Havia necessidade de fortalecer minha atuação em tecnologias enterprise; desenvolvi e estudei aplicações Java/Spring integradas a banco de dados e interface web; isso ampliou minha capacidade de atuar em sistemas corporativos escaláveis; utilizando Java, Spring Boot, MySQL, Angular e Git.</li>
      `,
      careerObjective: 'Atuar no desenvolvimento de aplicações Java com Spring Boot, APIs REST e arquitetura back-end, contribuindo para sistemas corporativos escaláveis, organizados e integrados.',
      footerSub: 'Disponível para oportunidades em Java / Spring Boot',
      fileName: 'Paulo-Rezende-Curriculo-Java-Spring-Boot',
      tags: ['Java', 'Spring Boot', 'APIs REST', 'MySQL', 'Angular', 'TypeScript', 'Arquitetura em Camadas', 'Back-end', 'Git', 'Boas práticas'],
      projects: ['smartpet'],
      jobList: `
        <li>Havia necessidade de evoluir para arquiteturas corporativas amplamente utilizadas no mercado; desenvolvi aplicações back-end com Java e Spring Boot; isso ampliou minha capacidade de atuar em sistemas enterprise e aplicações robustas; utilizando Java, Spring Boot e APIs REST.</li>
        <li>Sistemas demandavam integração eficiente entre front-end e back-end; implementei comunicação entre APIs Java e interfaces web; isso melhorou minha compreensão do fluxo completo de dados e da integração entre camadas; utilizando Spring Boot, Angular, TypeScript e APIs REST.</li>
        <li>A aplicação precisava organizar dados de produtos, clientes e vendas; estruturei funcionalidades com cadastro, consulta e regras de negócio; isso fortaleceu a base operacional do sistema e facilitou evolução de funcionalidades; utilizando Java, Spring Boot, MySQL e arquitetura em camadas.</li>
        <li>O projeto exigia organização de código e separação de responsabilidades; apliquei estrutura em camadas para facilitar manutenção e evolução; isso aumentou clareza técnica e sustentação do sistema; utilizando Spring Boot, boas práticas REST, Git e MySQL.</li>
        <li>Também apliquei Angular na camada web para integração com o back-end; isso reforçou visão Full Stack em tecnologias corporativas e ampliou aderência a vagas Java/Spring com front-end Angular; utilizando Angular, TypeScript e APIs REST.</li>
      `
    },
    mobile: {
      headline: 'Desenvolvedor Mobile React Native | Expo | APIs REST | JWT | Node.js',
      summary: 'Desenvolvedor Mobile com experiência em aplicações React Native, integração com APIs REST, autenticação JWT e visão Full Stack para produtos mobile.',
      resumoContent: `
        Usuários precisavam organizar informações financeiras de forma simples e acessível; desenvolvi aplicação mobile para controle de receitas, despesas e planejamento financeiro; isso facilitou o acompanhamento financeiro e melhorou a experiência de uso; utilizando React Native, Expo e JavaScript.
        <br><br>
        A aplicação precisava sincronizar informações com o back-end; implementei consumo de APIs REST e autenticação; isso garantiu comunicação consistente entre app e servidor, além de melhor segurança no acesso; utilizando React Native, Node.js, APIs REST e JWT.
        <br><br>
        O app precisava evoluir com código organizado e manutenível; estruturei navegação, componentes e responsabilidades da aplicação; isso melhorou performance, usabilidade e facilidade de evolução; utilizando Expo Go, componentização e boas práticas mobile.
        <br><br>
        O produto exigia visão completa entre mobile e back-end; participei do desenvolvimento Full Stack do fluxo da aplicação; isso fortaleceu a integração entre interface, regra de negócio e dados; utilizando React Native, Node.js, JavaScript e APIs REST.
      `,
      careerObjective: 'Atuar no desenvolvimento de aplicações mobile multiplataforma com React Native, conectadas a APIs e focadas em experiência do usuário, organização de dados e entrega de valor real.',
      footerSub: 'Disponível para oportunidades em Mobile React Native',
      fileName: 'Paulo-Rezende-Curriculo-Mobile-React-Native',
      tags: ['React Native', 'Expo', 'Expo Go', 'JavaScript', 'APIs REST', 'JWT', 'Node.js', 'Navegação', 'Consumo de APIs', 'Mobile Full Stack', 'Git'],
      projects: ['controle'],
      jobList: `
        <li>Usuários precisavam organizar informações financeiras de forma simples e acessível; desenvolvi aplicação mobile para controle de receitas, despesas e planejamento financeiro; isso facilitou acompanhamento financeiro e melhorou a experiência de uso; utilizando React Native, Expo e JavaScript.</li>
        <li>A aplicação precisava sincronizar informações com o back-end; implementei consumo de APIs REST e autenticação; isso garantiu comunicação consistente entre app e servidor e melhor segurança no acesso; utilizando React Native, Node.js, APIs REST e JWT.</li>
        <li>O app precisava evoluir com código organizado e manutenível; estruturei navegação, componentes e responsabilidades da aplicação; isso melhorou performance, usabilidade e facilidade de evolução; utilizando Expo Go, componentização e boas práticas mobile.</li>
        <li>O produto exigia visão completa entre mobile e back-end; participei do desenvolvimento Full Stack do fluxo da aplicação; isso fortaleceu integração entre interface, regra de negócio e dados; utilizando React Native, Node.js, JavaScript e APIs REST.</li>
        <li>Também atuei em integrações web e back-end que dão suporte a aplicações mobile; isso ampliou minha visão de produto e melhorou a capacidade de construir soluções mobile conectadas a serviços; utilizando APIs REST, Git e arquitetura em camadas.</li>
      `
    }
  },
  en: {
    fullstack: {
      headline: 'Full Stack Developer | Node.js | React | Angular | TypeScript | AWS | Industrial AI',
      summary: 'Full Stack Developer with experience in corporate systems, cloud, mobile, REST APIs, databases, and industrial AI solutions.',
      resumoContent: `
        Companies needed greater visibility over production, activities, and deliveries; I developed complete systems integrating front-end, back-end, databases, and dashboards; this centralized operational information, reduced rework, and supported real-time decisions; using Node.js, React, TypeScript, MySQL, PostgreSQL, and Chart.js.
        <br><br>
        Internal processes depended on manual integrations and fragmented communication; I created REST APIs and integration flows between systems; this increased operational efficiency, improved data reliability, and made deliveries more predictable; using Node.js, Express, Prisma, REST APIs, and AWS.
        <br><br>
        Projects required solutions beyond traditional web development; I participated in systems involving mobile, computer vision, and industrial automation; this expanded the technological impact of the solutions and connected software, hardware, and operations; using React Native, Python, OpenCV, FastAPI, and WebSocket.
        <br><br>
        Cloud infrastructure had high costs; I analyzed consumption, reconfigured resources, and adjusted services; this reduced operating costs by more than 70% while maintaining stability and performance; using AWS EC2, RDS, S3, Nginx, and PM2.
      `,
      careerObjective: 'Build complete solutions that solve real business problems by combining front-end, back-end, data, cloud, and automation to generate operational impact and support strategic decisions.',
      footerSub: 'Available for Full Stack opportunities',
      fileName: 'Paulo-Rezende-Resume-Fullstack',
      tags: ['React', 'Angular', 'TypeScript', 'Node.js', 'Express.js', 'REST APIs', 'Prisma ORM', 'MySQL', 'PostgreSQL', 'AWS', 'Docker', 'React Native', 'Python', 'OpenCV', 'Git & GitHub'],
      projects: ['tubovision', 'dashboard', 'controle', 'smartpet'],
      jobList: `
        <li>There was low visibility over production, activities, and deliveries; I developed complete applications integrating front-end, back-end, databases, and dashboards; this centralized operational information and improved real-time decision-making; using Node.js, React, TypeScript, MySQL, and PostgreSQL.</li>
        <li>Internal processes depended on manual controls and fragmented communication; I created REST APIs and integration flows between systems; this reduced rework, increased data reliability, and made routines more efficient; using Node.js, Express, Prisma, and REST APIs.</li>
        <li>The operation needed clear interfaces for daily monitoring; I developed screens and dashboards for indicators, activities, and process status; this improved productivity, operational visibility, and user experience; using React, JavaScript, TypeScript, and Chart.js.</li>
        <li>Cloud infrastructure had high costs; I analyzed consumption, reconfigured resources, and optimized services; this reduced operating costs by more than 70% while maintaining stability and performance; using AWS EC2, RDS, S3, Nginx, and PM2.</li>
        <li>Projects required technical evolution beyond traditional web development; I participated in solutions involving mobile, computer vision, and software + hardware integration; this expanded delivery impact and connected technology with industrial operations; using React Native, Python, OpenCV, FastAPI, and WebSocket.</li>
      `
    },
    backend_node: {
      headline: 'Node.js Back-end Developer | REST APIs | Express | NestJS | Prisma | AWS',
      summary: 'Back-end Developer focused on REST APIs, system integration, relational databases, process automation, and cloud infrastructure.',
      resumoContent: `
        Internal systems lacked standardization in data access and processing; I developed REST APIs to centralize, process, and expose information; this reduced inconsistencies and increased integration reliability; using Node.js, Express, TypeScript, MySQL, and PostgreSQL.
        <br><br>
        Operational processes depended on manual steps prone to errors; I implemented back-end integrations and automation; this reduced rework, increased operational efficiency, and improved data consistency; using Node.js, REST APIs, JWT, and service integrations.
        <br><br>
        The data layer needed to be more organized and scalable; I standardized data modeling, access, and manipulation; this improved maintainability, productivity, and query performance; using Prisma ORM, MySQL, PostgreSQL, and TypeORM.
        <br><br>
        The production environment required stability and resource control; I configured deployment, processes, and servers; this improved availability and reduced operating costs by more than 70%; using AWS EC2, RDS, S3, Docker, Nginx, and PM2.
      `,
      careerObjective: 'Work on scalable back-end services, well-structured APIs, and integrations that improve operational efficiency, data reliability, and production system support.',
      footerSub: 'Available for Node.js Back-end opportunities',
      fileName: 'Paulo-Rezende-Resume-Backend-Node',
      tags: ['Node.js', 'Express.js', 'NestJS', 'TypeScript', 'REST APIs', 'JWT', 'Prisma ORM', 'TypeORM', 'MySQL', 'PostgreSQL', 'Docker', 'AWS', 'Nginx', 'PM2', 'Git'],
      projects: ['dashboard', 'controle', 'smartpet'],
      jobList: `
        <li>Internal systems lacked standardization in data access and processing; I developed REST APIs to centralize, process, and expose information; this reduced inconsistencies and increased integration reliability; using Node.js, Express, TypeScript, MySQL, and PostgreSQL.</li>
        <li>Operational processes depended on manual steps prone to errors; I implemented back-end integrations and automation; this reduced rework, increased operational efficiency, and improved data consistency; using Node.js, REST APIs, JWT, and service integrations.</li>
        <li>The data layer needed to be more organized and scalable; I standardized data modeling, access, and manipulation; this improved maintainability, productivity, and query performance; using Prisma ORM, MySQL, PostgreSQL, and TypeORM.</li>
        <li>The production environment required stability and resource control; I configured deployment, servers, and process management; this increased availability and reduced operating costs by more than 70%; using AWS EC2, RDS, S3, Docker, Nginx, and PM2.</li>
        <li>Applications needed to evolve with security and predictability; I continuously improved APIs, code structure, and versioning; this increased reliability, maintainability, and long-term system support; using Git, REST best practices, and layered architecture.</li>
      `
    },

    frontend: {
      headline: 'Front-end Developer | React | Angular | TypeScript | JavaScript | REST APIs',
      summary: 'Front-end Developer with experience in responsive interfaces, operational dashboards, data visualization, and REST API integration.',
      resumoContent: `
        Users needed to track production, activities, and indicators clearly; I developed web interfaces and dashboards to centralize operational information in real time; this improved process visibility, supported faster decisions, and reduced dependency on manual controls; using React, TypeScript, JavaScript, HTML, CSS, and Chart.js.
        <br><br>
        Internal systems required better user experience and visual organization; I structured screens focused on responsiveness, information hierarchy, and objective navigation; this increased usability, made activity tracking easier, and improved day-to-day routines for users; using HTML5, CSS3, React, and UI/UX best practices.
        <br><br>
        Interfaces needed to consume data from different services reliably; I integrated front-end applications with REST APIs and organized communication with the back-end; this ensured more consistent data, updated information, and stronger layer integration; using REST APIs, JavaScript, TypeScript, and front-end/back-end integration.
        <br><br>
        I also evolved knowledge in corporate applications with Angular; I developed screens and integrations in Full Stack projects to strengthen proficiency in front-end frameworks used in the market; this expanded my fit for both React and Angular opportunities; using Angular, TypeScript, REST APIs, and componentization.
      `,
      careerObjective: 'Work on modern, responsive, user-oriented interfaces that improve operations, data visualization, and efficient integration with back-end services.',
      footerSub: 'Available for Front-end opportunities',
      fileName: 'Paulo-Rezende-Resume-Frontend',
      tags: ['React', 'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'Chart.js', 'Responsive Design', 'Componentization', 'UI/UX', 'Back-end Integration', 'Git & GitHub'],
      projects: ['dashboard', 'controle', 'smartpet'],
      jobList: `
        <li>Users needed to track production, activities, and indicators clearly; I developed web interfaces and dashboards to centralize operational information in real time; this improved process visibility and supported faster decisions; using React, TypeScript, JavaScript, HTML, CSS, and Chart.js.</li>
        <li>Internal systems required better user experience and visual organization; I structured screens focused on responsiveness, information hierarchy, and objective navigation; this increased usability and made routines more practical for users; using HTML5, CSS3, React, and UI/UX best practices.</li>
        <li>Interfaces needed to consume data from different services reliably; I integrated front-end applications with REST APIs and organized communication with the back-end; this ensured more consistent information and stronger layer integration; using REST APIs, JavaScript, and TypeScript.</li>
        <li>The operation needed to monitor project status, activities, and resource availability; I developed screens for operational data querying and visualization; this made team monitoring easier and improved delivery control; using React, componentization, and API integration.</li>
        <li>I also evolved knowledge in corporate applications with Angular; I developed screens and integrations in Full Stack projects; this expanded my fit for both React and Angular opportunities; using Angular, TypeScript, REST APIs, and componentization.</li>
      `
    },
    python_ai: {
      headline: 'Python Developer | AI | Computer Vision | OpenCV | FastAPI',
      summary: 'Developer with experience in industrial computer vision, digital image processing, industrial automation, and software + hardware integration.',
      resumoContent: `
        Industrial inspection relied on manual analysis and low visual traceability; I developed visual inspection algorithms to classify parts and support approval/rejection decisions; this increased process control and enabled automated validation; using Python, OpenCV, and digital image processing.
        <br><br>
        The operation needed to integrate computer vision with monitoring systems and automation; I developed APIs and real-time communication to connect inspection, dashboards, and operational workflows; this connected software, hardware, and production processes; using FastAPI, WebSocket, SQLite, and industrial camera integration.
        <br><br>
        The system needed to evolve through real industrial testing; I participated in architecture, parameter adjustments, model validation, and continuous improvements; this made the solution more stable, traceable, and production-oriented; using Python, OpenCV, FastAPI, and computer vision techniques.
        <br><br>
        There was a need to turn images into useful operational data; I implemented real-time processing and visual evidence generation; this enabled technical analysis, inspection history, and better decision-making; using OpenCV, SQLite, WebSocket, and dashboards.
      `,
      careerObjective: 'Work on Python, AI, and computer vision solutions applied to industry, connecting image processing, automation, and real-time systems to generate operational efficiency.',
      footerSub: 'Available for Python, AI, and Computer Vision opportunities',
      fileName: 'Paulo-Rezende-Resume-Python-AI-Computer-Vision',
      tags: ['Python', 'FastAPI', 'OpenCV', 'Computer Vision', 'Image Processing', 'Industrial AI', 'WebSocket', 'SQLite', 'Industrial Automation', 'Hardware + Software Integration', 'Industrial Cameras', 'Real Time'],
      projects: ['tubovision'],
      jobList: `
        <li>Industrial inspection relied on manual analysis and low visual traceability; I developed visual inspection algorithms to classify parts and support approval/rejection decisions; this increased process control and enabled automated validation; using Python, OpenCV, and image processing.</li>
        <li>The operation needed to integrate computer vision with monitoring systems and automation; I developed APIs and real-time communication to connect inspection, dashboards, and operational workflows; this connected software, hardware, and production processes; using FastAPI, WebSocket, SQLite, and industrial cameras.</li>
        <li>The system needed to evolve through real industrial testing; I participated in architecture, parameter adjustments, model validation, and continuous improvements; this made the solution more stable, traceable, and production-oriented; using Python, OpenCV, and computer vision techniques.</li>
        <li>There was a need to turn images into useful operational data; I implemented real-time processing and visual evidence generation; this enabled technical analysis, inspection history, and better decision-making; using OpenCV, SQLite, WebSocket, and dashboards.</li>
        <li>The solution required integration between software and industrial automation; I worked on communication between the system, camera, and physical inspection flow; this strengthened process reliability and the connection between technology and operations; using Python, FastAPI, WebSocket, and hardware + software integration.</li>
      `
    },
    java_spring: {
      headline: 'Java Developer | Spring Boot | REST APIs | Angular | MySQL',
      summary: 'Developer focused on Java applications, Spring Boot, REST APIs, back-end architecture, and Angular interface integration.',
      resumoContent: `
        The project needed to structure a corporate-style application for pet shop management, including products, customers, sales, and business visibility; I developed back-end features with Java and Spring Boot connected to an Angular interface; this organized the application flow and created a scalable base for system evolution; using Java, Spring Boot, Angular, TypeScript, MySQL, and REST APIs.
        <br><br>
        The application needed to separate responsibilities between business rules, data persistence, and interface communication; I organized the architecture in layers and implemented REST endpoints for create, query, and update operations; this improved maintainability, technical clarity, and feature evolution; using Spring Boot, MySQL, REST APIs, and architecture best practices.
        <br><br>
        The front-end needed to consume data consistently from the back-end; I implemented communication between Angular and Java APIs to support navigation and application features; this strengthened my Full Stack view in corporate technologies and increased my fit for Java/Spring roles with Angular; using Angular, TypeScript, Spring Boot, and REST APIs.
      `,
      jobList: `
        <li>The system needed to organize product, customer, and sales information; I developed back-end features with registration, queries, and business rules; this structured the operational base of the application and made project evolution easier; using Java, Spring Boot, MySQL, and REST APIs.</li>
        <li>The application needed to separate responsibilities between controller, service, repository, and database; I applied layered architecture to organize the system flow; this improved technical clarity, maintainability, and code scalability; using Spring Boot, REST best practices, Git, and MySQL.</li>
        <li>The front-end needed to consume back-end data consistently; I implemented communication between Java APIs and web screens; this integrated the application layers and improved the user experience; using Spring Boot, Angular, TypeScript, and REST APIs.</li>
        <li>The project required continuous feature evolution; I worked on building and adjusting Smart Pet resources to support management flows; this consolidated practice with a corporate stack and Full Stack vision; using Java, Spring Boot, Angular, and MySQL.</li>
        <li>There was a need to strengthen my work with enterprise technologies; I developed and studied Java/Spring applications integrated with databases and web interfaces; this expanded my ability to work with scalable corporate systems; using Java, Spring Boot, MySQL, Angular, and Git.</li>
      `,
      careerObjective: 'Work on Java applications with Spring Boot, REST APIs, and back-end architecture, contributing to scalable, organized, and integrated corporate systems.',
      footerSub: 'Available for Java / Spring Boot opportunities',
      fileName: 'Paulo-Rezende-Resume-Java-Spring-Boot',
      tags: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'Angular', 'TypeScript', 'Layered Architecture', 'Back-end', 'Git', 'Best Practices'],
      projects: ['smartpet'],
      jobList: `
        <li>There was a need to evolve into enterprise architectures widely used in the market; I developed back-end applications with Java and Spring Boot; this expanded my ability to work with enterprise systems and robust applications; using Java, Spring Boot, and REST APIs.</li>
        <li>Systems required efficient integration between front-end and back-end; I implemented communication between Java APIs and web interfaces; this improved my understanding of complete data flow and layer integration; using Spring Boot, Angular, TypeScript, and REST APIs.</li>
        <li>The application needed to organize product, customer, and sales data; I structured features with registration, queries, and business rules; this strengthened the operational foundation of the system and made feature evolution easier; using Java, Spring Boot, MySQL, and layered architecture.</li>
        <li>The project required code organization and separation of responsibilities; I applied layered structure to support maintenance and evolution; this increased technical clarity and system sustainability; using Spring Boot, REST best practices, Git, and MySQL.</li>
        <li>I also applied Angular in the web layer for back-end integration; this reinforced a Full Stack view in corporate technologies and expanded my fit for Java/Spring roles with Angular front-end; using Angular, TypeScript, and REST APIs.</li>
      `
    },
    mobile: {
      headline: 'React Native Mobile Developer | Expo | REST APIs | JWT | Node.js',
      summary: 'Mobile Developer with experience in React Native applications, REST API integration, JWT authentication, and Full Stack vision for mobile products.',
      resumoContent: `
        Users needed to organize financial information in a simple and accessible way; I developed a mobile application for income, expense, and financial planning control; this made financial tracking easier and improved user experience; using React Native, Expo, and JavaScript.
        <br><br>
        The application needed to synchronize information with the back-end; I implemented REST API consumption and authentication; this ensured consistent communication between app and server and improved access security; using React Native, Node.js, REST APIs, and JWT.
        <br><br>
        The app needed to evolve with organized and maintainable code; I structured navigation, components, and application responsibilities; this improved performance, usability, and feature evolution; using Expo Go, componentization, and mobile best practices.
        <br><br>
        The product required a complete view between mobile and back-end; I participated in Full Stack development of the app flow; this strengthened integration between interface, business logic, and data; using React Native, Node.js, JavaScript, and REST APIs.
      `,
      careerObjective: 'Work on cross-platform mobile applications with React Native, connected to APIs and focused on user experience, data organization, and real value delivery.',
      footerSub: 'Available for React Native Mobile opportunities',
      fileName: 'Paulo-Rezende-Resume-Mobile-React-Native',
      tags: ['React Native', 'Expo', 'Expo Go', 'JavaScript', 'REST APIs', 'JWT', 'Node.js', 'Navigation', 'API Consumption', 'Mobile Full Stack', 'Git'],
      projects: ['controle'],
      jobList: `
        <li>Users needed to organize financial information in a simple and accessible way; I developed a mobile application for income, expense, and financial planning control; this made financial tracking easier and improved user experience; using React Native, Expo, and JavaScript.</li>
        <li>The application needed to synchronize information with the back-end; I implemented REST API consumption and authentication; this ensured consistent communication between app and server and improved access security; using React Native, Node.js, REST APIs, and JWT.</li>
        <li>The app needed to evolve with organized and maintainable code; I structured navigation, components, and application responsibilities; this improved performance, usability, and feature evolution; using Expo Go, componentization, and mobile best practices.</li>
        <li>The product required a complete view between mobile and back-end; I participated in Full Stack development of the application flow; this strengthened integration between interface, business logic, and data; using React Native, Node.js, JavaScript, and REST APIs.</li>
        <li>I also worked on web and back-end integrations that support mobile applications; this expanded my product vision and improved my ability to build mobile solutions connected to services; using REST APIs, Git, and layered architecture.</li>
      `
    }
  }
};

function normalizeRole(role) {
  const aliases = {
    backend: 'backend_node',
    backend_java: 'java_spring'
  };
  return aliases[role] || role;
}

function getSavedTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === 'dark' || saved === 'light') return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getSavedLang() {
  return localStorage.getItem(LANG_KEY) || 'pt';
}

function getSavedRole() {
  const saved = normalizeRole(localStorage.getItem(ROLE_KEY));
  return ['fullstack', 'backend_node', 'frontend', 'python_ai', 'java_spring', 'mobile'].includes(saved) ? saved : 'fullstack';
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

function renderProjects(projectKeys, lang) {
  if (!projectsContainerEl) return;

  const labels = translations[lang];
  const projects = projectKeys.map((key) => sharedProjects[lang][key]).filter(Boolean);

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
  const normalizedRole = normalizeRole(role);
  const lang = getSavedLang();
  const profile = roleProfiles[lang]?.[normalizedRole];

  if (!profile) return;

  if (headlineEl) headlineEl.innerHTML = profile.headline;
  if (summaryEl) summaryEl.innerHTML = profile.summary;
  if (resumoContentEl) resumoContentEl.innerHTML = profile.resumoContent;
  if (footerSubEl) footerSubEl.innerHTML = profile.footerSub;
  if (careerObjectiveEl) careerObjectiveEl.innerHTML = profile.careerObjective;

  const jobListEl = document.querySelector('[data-i18n="job1List"]');
  if (jobListEl && profile.jobList) {
    jobListEl.innerHTML = profile.jobList;
  }

  renderTags(profile.tags);
  renderProjects(profile.projects, lang);

  document.title = profile.fileName;
  localStorage.setItem(ROLE_KEY, normalizedRole);

  if (resumeRole) {
    resumeRole.value = normalizedRole;
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
