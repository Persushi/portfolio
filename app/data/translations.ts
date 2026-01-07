export const translations = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      skills: "Habilidades",
      projects: "Experiencia",
      contact: "Contacto"
    },
    hero: {
      greeting: "Hola, soy",
      name: "Mateo Persich",
      title: "Backend Developer",
      subtitle: "Programador Node.js",
      description: "Tengo 26 años y programo desde hace más de 5 años, con experiencia en distintos proyectos y tecnologías. Me encanta viajar, practicar inglés y aprender cosas nuevas constantemente. En mi tiempo libre suelo participar en cursos de todo tipo; actualmente estoy muy metido en la música y la mezcla. Comparto mis días con mi gata Mandarina, que siempre anda cerca mientras trabajo.",
      viewProjects: "Ver Experiencia",
      contactMe: "Contáctame"
    },
about: {
  title: "Sobre Mí",
  paragraph1: "Desarrollador backend con más de 5 años de experiencia profesional. La programación cambió mi vida durante la cuarentena y, desde entonces, estoy profundamente enganchado con la tecnología, especialmente con la inteligencia artificial.",
  paragraph2: "He participado en una amplia variedad de proyectos, desde startups hasta sistemas productivos de alta demanda y escalabilidad, trabajando principalmente con TypeScript y servicios de AWS.",
  paragraph3: "Al final del día me gusta desconectar y probar recetas nuevas, aunque no es raro que se prenda el foquito y me den ganas de codear en horarios poco convencionales, cuando me siento más productivo. Me interesa conocer nuevas ciudades, por lo que prefiero el trabajo remoto o con posibilidad de relocalización.",
  location: "Córdoba, Argentina",
  status: "Buscando oportunidades remotas o con relocalización"
},

    clients: {
      title: "Clientes"
    },
    skills: {
      title: "Habilidades & Tecnologías",
      description: "Experiencia en metodologías ágiles, diseño de arquitectura, documentación técnica, API REST, GraphQL, microservicios, arquitectura hexagonal y buenas prácticas de desarrollo.",
      categories: {
        languages: "Lenguajes & Frameworks",
        databases: "Bases de Datos & ORM",
        devops: "DevOps & Cloud",
        tools: "Herramientas & Monitoreo"
      },
      items: {
        languages: ["JavaScript", "TypeScript", "Python", "Node.js", "Express", "NestJS", "React", "Next.js", "Serverless"],
        databases: ["PostgreSQL", "MongoDB", "MySQL", "DynamoDB", "TypeORM", "Mongoose", "Redis"],
        devops: ["AWS", "Google Cloud", "Azure DevOps", "Docker", "GitHub", "GitHub Actions", "GitLab", "CI/CD", "Backstage"],
        tools: ["Jest", "DataDog", "CloudWatch", "WebSockets", "VS Code", "IntelliJ IDEA", "Cursor", "Claude.ai", "ChatGPT"]
      }
    },
    experience: {
      title: "Experiencia Laboral",
      jobs: [
        {
          company: "AVENGA LATAM",
          position: "Software Developer",
          period: "JUN 2023 - PRESENTE",
          linkedIn: "https://www.linkedin.com/company/avenga",
          industry: "Transporte & Registros Médicos",
          description: [
            "Desarrollo de servicios serverless para un sistema de traslados hospitalarios de alta escalabilidad, trabajando con TypeScript y arquitectura AWS.",
            "Mantenimiento y evolución de una aplicación de gestión de importaciones para clientes en Polonia.",
            "Desarrollo de interfaz de monitoreo para vehículos eléctricos integrando scripts Python con dispositivos Raspberry Pi.",
            "Colaboración directa con producto y gerencia de tecnología en decisiones de arquitectura y diseño."
          ],
          tags: ["TypeScript", "AWS", "Serverless", "Azure DevOps", "Python", "CI/CD"]
        },
        {
          company: "CHUBUT IT",
          position: "Software Developer",
          period: "SEP 2023 - SEP 2024",
          linkedIn: "https://www.linkedin.com/company/chubutit",
          industry: "DevOps & Gestión de Permisos",
          description: [
            "Desarrollo de una Internal Development Platform (IDP) utilizando Backstage para NaranjaX.",
            "Implementación de integraciones cloud para gestión de repositorios, permisos y servicios internos.",
            "Trabajo con arquitectura serverless usando AWS Lambda y Google Cloud.",
            "Gestión de despliegues y pipelines CI/CD con GitLab."
          ],
          tags: ["Backstage", "AWS Lambda", "Google Cloud", "GitLab", "Serverless"]
        },
        {
          company: "PERSONAL PAY",
          position: "Backend Developer",
          period: "JUL 2022 - ABR 2023",
          linkedIn: "https://www.linkedin.com/company/personal-pay",
          industry: "Fintech",
          description: [
            "Desarrollo de microservicios para una billetera virtual fintech que alcanzó más de 1 millón de usuarios activos.",
            "Responsable del módulo de login, autenticación y seguridad de la plataforma.",
            "Implementación de testing automatizado y tests de integración.",
            "Monitorización y análisis de datos con DataDog, participación activa en brainstorming y mejora continua."
          ],
          tags: ["NestJS", "Node.js", "Microservices", "DataDog", "GitLab", "Testing"]
        },
        {
          company: "ACCELEANATION",
          position: "Full Stack Developer",
          period: "NOV 2021 - NOV 2022",
          linkedIn: "https://www.linkedin.com/company/acceleanation",
          industry: "Acelerador de Ventas",
          description: [
            "Desarrollo de una herramienta interna para generación dinámica de documentos financieros y fiscales para importadores en Uruguay.",
            "Construcción del MVP con trato directo con clientes y ciclos de feedback intensivos.",
            "Stack completo con Express y JavaScript en backend, React en frontend."
          ],
          tags: ["Express", "JavaScript", "React", "REST API", "GitHub"]
        },
        {
          company: "CTRADING",
          position: "Backend Developer",
          period: "OCT 2021 - ABR 2022",
          linkedIn: "https://www.linkedin.com/company/ctradingio",
          industry: "Exchanges & Criptomonedas",
          description: [
            "Desarrollo de plataforma de arbitraje de criptomonedas con integración de múltiples exchanges.",
            "Implementación de capas de caché y scripts de migración SQL con TypeORM.",
            "Desarrollo de web scraping para obtención de datos de mercado y WebSockets para notificaciones en tiempo real."
          ],
          tags: ["NestJS", "TypeScript", "TypeORM", "WebSockets", "GitHub"]
        },
        {
          company: "INTERMEDIA IT",
          position: "Backend Developer",
          period: "JUN 2021 - SEP 2021",
          linkedIn: "https://www.linkedin.com/company/intermedia-interactive-labs",
          industry: "Mobile & Streaming",
          description: [
            "Creación y mantenimiento de contenedores Docker para servicios de la plataforma.",
            "Resolución de errores críticos en Cablevisión Flow para la versión iOS."
          ],
          tags: ["Docker", "iOS", "Debugging", "GitHub"]
        },
        {
          company: "REPLACE IT",
          position: "Full Stack Developer",
          period: "DIC 2020 - MAY 2021",
          linkedIn: "https://www.linkedin.com/company/replaceit",
          industry: "Casino & Gaming",
          description: [
            "Primera experiencia laboral formal, desarrollando una plataforma de apuestas presencial con sistema de monedas virtuales.",
            "Trabajo colaborativo en equipo integrando juegos de casino con ReactJS, Phaser.io y backend en Node.js.",
            "Desarrollo de habilidades blandas: comunicación con diseñadores externos y participación en reuniones con clientes."
          ],
          tags: ["React", "Node.js", "Phaser.io", "GitHub", "SQL"]
        }
      ]
    },
    contact: {
      title: "Contacto",
      description: "¿Interesado en colaborar? No dudes en contactarme para discutir oportunidades o simplemente charlar sobre tecnología.",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      phone: "Teléfono",
      location: "Ubicación"
    },
    footer: {
      rights: "Todos los derechos reservados."
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Experience",
      contact: "Contact"
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Mateo Persich",
      title: "Backend Developer",
      subtitle: "Node.js Programmer",
      description: "I’m 26 years old and I’ve been working as a programmer for over 5 years, with experience across different projects and technologies. I enjoy traveling, practicing English, and constantly learning new things. In my free time, I like taking all kinds of courses—currently focused on music and mixing. I also share my day-to-day life with my cat, Mandarina, who often keeps me company while I work",
      viewProjects: "View Experience",
      contactMe: "Contact Me"
    },
about: {
  title: "About Me",
  paragraph1: "Backend developer with over 5 years of professional experience. Programming changed my life during the lockdown, and since then I’ve been deeply engaged with technology, especially artificial intelligence.",
  paragraph2: "I’ve worked on a wide range of projects, from startups to high-demand, highly scalable production systems, mainly using TypeScript and AWS services.",
  paragraph3: "At the end of the day, I enjoy disconnecting and trying new recipes, although it’s quite common for a spark to hit and make me want to code at unusual hours, when I feel most productive. I’m especially interested in discovering new cities, which is why I prefer remote work or relocation opportunities.",
  location: "Córdoba, Argentina",
  status: "Open to remote or relocation opportunities"
},
    clients: {
      title: "Clients"
    },
    skills: {
      title: "Skills & Technologies",
      description: "Experience in agile methodologies, architecture design, technical documentation, REST APIs, GraphQL, microservices, hexagonal architecture, and best development practices.",
      categories: {
        languages: "Languages & Frameworks",
        databases: "Databases & ORM",
        devops: "DevOps & Cloud",
        tools: "Tools & Monitoring"
      },
      items: {
        languages: ["JavaScript", "TypeScript", "Python", "Node.js", "Express", "NestJS", "React", "Next.js", "Serverless"],
        databases: ["PostgreSQL", "MongoDB", "MySQL", "DynamoDB", "TypeORM", "Mongoose", "Redis"],
        devops: ["AWS", "Google Cloud", "Azure DevOps", "Docker", "GitHub", "GitHub Actions", "GitLab", "CI/CD", "Backstage"],
        tools: ["Jest", "DataDog", "CloudWatch", "WebSockets", "VS Code", "IntelliJ IDEA", "Cursor", "Claude.ai", "ChatGPT"]
      }
    },
    experience: {
      title: "Work Experience",
      jobs: [
        {
          company: "AVENGA LATAM",
          position: "Software Developer",
          period: "JUN 2023 - PRESENT",
          linkedIn: "https://www.linkedin.com/company/avenga",
          industry: "Transport & Medical Records",
          description: [
            "Development of serverless services for a highly scalable hospital transport system, working with TypeScript and AWS architecture.",
            "Maintenance and evolution of an import management application for clients in Poland.",
            "Development of monitoring interface for electric vehicles integrating Python scripts with Raspberry Pi devices.",
            "Direct collaboration with product and technology management on architecture and design decisions."
          ],
          tags: ["TypeScript", "AWS", "Serverless", "Azure DevOps", "Python", "CI/CD"]
        },
        {
          company: "CHUBUT IT",
          position: "Software Developer",
          period: "SEP 2023 - SEP 2024",
          linkedIn: "https://www.linkedin.com/company/chubutit",
          industry: "DevOps & Permissions Management",
          description: [
            "Development of an Internal Development Platform (IDP) using Backstage for NaranjaX.",
            "Implementation of cloud integrations for repository management, permissions, and internal services.",
            "Work with serverless architecture using AWS Lambda and Google Cloud.",
            "Deployment management and CI/CD pipelines with GitLab."
          ],
          tags: ["Backstage", "AWS Lambda", "Google Cloud", "GitLab", "Serverless"]
        },
        {
          company: "PERSONAL PAY",
          position: "Backend Developer",
          period: "JUL 2022 - APR 2023",
          linkedIn: "https://www.linkedin.com/company/personal-pay",
          industry: "Fintech",
          description: [
            "Development of microservices for a fintech digital wallet that reached over 1 million active users.",
            "Responsible for the login, authentication, and security module of the platform.",
            "Implementation of automated testing and integration tests.",
            "Monitoring and data analysis with DataDog, active participation in brainstorming and continuous improvement."
          ],
          tags: ["NestJS", "Node.js", "Microservices", "DataDog", "GitLab", "Testing"]
        },
        {
          company: "ACCELEANATION",
          position: "Full Stack Developer",
          period: "NOV 2021 - NOV 2022",
          linkedIn: "https://www.linkedin.com/company/acceleanation",
          industry: "Sales Accelerator",
          description: [
            "Development of an internal tool for dynamic generation of financial and tax documents for importers in Uruguay.",
            "MVP construction with direct client interaction and intensive feedback cycles.",
            "Full stack with Express and JavaScript on backend, React on frontend."
          ],
          tags: ["Express", "JavaScript", "React", "REST API", "GitHub"]
        },
        {
          company: "CTRADING",
          position: "Backend Developer",
          period: "OCT 2021 - APR 2022",
          linkedIn: "https://www.linkedin.com/company/ctradingio",
          industry: "Exchanges & Cryptocurrency",
          description: [
            "Development of cryptocurrency arbitrage platform with multiple exchange integration.",
            "Implementation of caching layers and SQL migration scripts with TypeORM.",
            "Development of web scraping for market data retrieval and WebSockets for real-time notifications."
          ],
          tags: ["NestJS", "TypeScript", "TypeORM", "WebSockets", "GitHub"]
        },
        {
          company: "INTERMEDIA IT",
          position: "Backend Developer",
          period: "JUN 2021 - SEP 2021",
          linkedIn: "https://www.linkedin.com/company/intermedia-interactive-labs",
          industry: "Mobile & Streaming",
          description: [
            "Creation and maintenance of Docker containers for platform services.",
            "Resolution of critical bugs in Cablevisión Flow for the iOS version."
          ],
          tags: ["Docker", "iOS", "Debugging", "GitHub"]
        },
        {
          company: "REPLACE IT",
          position: "Full Stack Developer",
          period: "DEC 2020 - MAY 2021",
          linkedIn: "https://www.linkedin.com/company/replaceit",
          industry: "Casino & Gaming",
          description: [
            "First formal work experience, developing an on-site betting platform with virtual currency system.",
            "Collaborative teamwork integrating casino games with ReactJS, Phaser.io, and Node.js backend.",
            "Soft skills development: communication with external designers and participation in client meetings."
          ],
          tags: ["React", "Node.js", "Phaser.io", "GitHub", "SQL"]
        }
      ]
    },
    contact: {
      title: "Get In Touch",
      description: "Interested in collaborating? Feel free to reach out to discuss opportunities or simply chat about technology.",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      phone: "Phone",
      location: "Location"
    },
    footer: {
      rights: "All rights reserved."
    }
  }
};

export type Language = 'es' | 'en';
export type TranslationKeys = typeof translations.es;
