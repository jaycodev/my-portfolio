export const languages = {
  es: 'Español',
  en: 'English',
} as const

export type Language = keyof typeof languages

export const defaultLang: Language = 'es'

export const sectionIds = {
  es: {
    experience: 'experiencia',
    projects: 'proyectos',
    about: 'sobre-mi',
  },
  en: {
    experience: 'experience',
    projects: 'projects',
    about: 'about',
  },
} as const

export const ui = {
  es: {
    // Meta
    'meta.title': 'Portafolio de Jason Vila - Desarrollador Full Stack',
    'meta.description':
      'Portafolio de Jason Vila, desarrollador Full Stack. Descubre proyectos, habilidades y contacto para colaboración y aprendizaje.',

    // Hero Section
    'hero.badge': 'Desarrollador Full Stack',
    'hero.title': 'Hey, soy Jason',
    'hero.description.part1': 'Creo soluciones',
    'hero.description.strong1': 'robustas y escalables',
    'hero.description.part2':
      ', enfocadas en la eficiencia, la calidad y la experiencia del usuario, siempre buscando',
    'hero.description.strong2': 'innovar y aprender',
    'hero.cta.contact': 'Contáctame',
    'hero.cta.linkedin': 'LinkedIn',
    'hero.cta.discover': 'Descubre mi trabajo',

    // Experience Section
    'experience.badge': 'Experiencia',
    'experience.title': 'Trayectoria laboral',
    'experience.subtitle': 'Una línea de tiempo de mi crecimiento profesional y logros clave.',
    'experience.job.title': 'Desarrollador Web Fullstack Freelance',
    'experience.job.company': 'Marketing VIP',
    'experience.job.period': 'Octubre 2025 - Presente',
    'experience.job.description':
      'Desarrollo de proyectos web completos para clientes de la agencia, incluyendo landing pages rápidas y optimizadas. Refactorización y mejora de rendimiento en proyectos existentes.',

    // Projects Section
    'projects.badge': 'Proyectos',
    'projects.title': 'Mis trabajos',
    'projects.subtitle': 'Mostrando algunos de mis mejores proyectos y logros técnicos.',
    'projects.cta.demo': 'Demo',
    'projects.cta.code': 'Código',

    // Project BookStudio
    'projects.bookstudio.title': 'BookStudio',
    'projects.bookstudio.description':
      'Plataforma web para la gestión y préstamo de libros en bibliotecas, con panel administrativo.',

    // Project BookStudio API
    'projects.bookstudio-api.title': 'BookStudio API',
    'projects.bookstudio-api.description':
      'API REST para la plataforma web BookStudio, con arquitectura hexagonal y documentación.',

    // Project Areska
    'projects.areska.title': 'Areska',
    'projects.areska.description':
      'E-commerce para la venta de periféricos de gaming y tecnología, con interfaz de administración',

    // Project Areska API
    'projects.areska-api.title': 'Areska API',
    'projects.areska-api.description':
      'Backend del e-commerce Areska, desarrollado con arquitectura en capas y documentación.',

    // Project MediDesk
    'projects.medidesk.title': 'MediDesk',
    'projects.medidesk.description':
      'Aplicación web para la gestión de citas médicas, con programación en calendario y recordatorios automáticos.',

    // Project Mobilnet
    'projects.mobilnet.title': 'Mobilnet',
    'projects.mobilnet.description':
      'Aplicación web para el registro RUC10 en redes GPON, que incorpora visualización de datos mediante gráficos.',

    // About Section
    'about.badge': 'Sobre mí',
    'about.title': 'Desarrollador Full Stack',
    'about.description.part1': 'Me llamo',
    'about.description.strong1': 'Jason Vila',
    'about.description.part2': 'y actualmente estudio',
    'about.description.strong2': 'Computación e Informática',
    'about.description.part3': 'en',
    'about.description.part4': 'Me apasiona la',
    'about.description.strong3': 'programación',
    'about.description.part5':
      'y la creación de aplicaciones bien estructuradas, enfocándome en proyectos',
    'about.description.strong4': 'escalables',
    'about.description.part6': 'con tecnologías modernas y manteniendo un',
    'about.description.strong5': 'código limpio',
    'about.description.part7': 'y buenas prácticas',
    'about.description.part8': 'Me motiva seguir',
    'about.description.strong6': 'aprendiendo',
    'about.description.strong7': 'compartir conocimientos',
    'about.description.part9': 'y construir',
    'about.description.strong8': 'soluciones reales',
    'about.description.part10': 'que dejen un impacto positivo en los proyectos y en la',
    'about.description.strong9': 'comunidad de desarrolladores',
    'about.cta.github': 'Ver Github',
    'about.cta.cv': 'Ver CV',

    // Footer
    'footer.experience': 'Experiencia',
    'footer.projects': 'Proyectos',
    'footer.about': 'Sobre mí',
    'footer.contact': 'Contacto',

    // Accessibility
    'a11y.theme': 'Elige el tema',
    'a11y.language': 'Elige el idioma',
    'a11y.goToProjects': 'Ir a proyectos',
  },
  en: {
    // Meta
    'meta.title': "Jason Vila's Portfolio - Full Stack Developer",
    'meta.description':
      "Jason Vila's portfolio, Full Stack developer. Discover projects, skills, and contact for collaboration and learning.",

    // Hero Section
    'hero.badge': 'Full Stack Developer',
    'hero.title': "Hey, I'm Jason",
    'hero.description.part1': 'I create',
    'hero.description.strong1': 'robust and scalable solutions',
    'hero.description.part2':
      ', focused on efficiency, quality, and user experience, always seeking to',
    'hero.description.strong2': 'innovate and learn',
    'hero.cta.contact': 'Contact me',
    'hero.cta.linkedin': 'LinkedIn',
    'hero.cta.discover': 'Discover my work',

    // Experience Section
    'experience.badge': 'Experience',
    'experience.title': 'Work history',
    'experience.subtitle': 'A timeline of my professional growth and key achievements.',
    'experience.job.title': 'Fullstack Web Developer Freelance',
    'experience.job.company': 'Marketing VIP CO',
    'experience.job.period': 'October 2025 - Present',
    'experience.job.description':
      'Development of complete web projects for agency clients, including fast and optimized landing pages. Refactoring and performance improvement on existing projects.',

    // Projects Section
    'projects.badge': 'Projects',
    'projects.title': 'My work',
    'projects.subtitle': 'Showcasing some of my best projects and technical achievements.',
    'projects.cta.demo': 'Demo',
    'projects.cta.code': 'Code',

    // Project BookStudio
    'projects.bookstudio.title': 'BookStudio',
    'projects.bookstudio.description':
      'Web platform for library book management and lending, with administrative panel.',

    // Project BookStudio API
    'projects.bookstudio-api.title': 'BookStudio API',
    'projects.bookstudio-api.description':
      'REST API for the BookStudio web platform, with hexagonal architecture and documentation.',

    // Project Areska
    'projects.areska.title': 'Areska',
    'projects.areska.description':
      'E-commerce for selling gaming peripherals and technology, with administration interface',

    // Project Areska API
    'projects.areska-api.title': 'Areska API',
    'projects.areska-api.description':
      'Backend for the Areska e-commerce, developed with layered architecture and documentation.',

    // Project MediDesk
    'projects.medidesk.title': 'MediDesk',
    'projects.medidesk.description':
      'Web application for medical appointment management, with calendar scheduling and automatic reminders.',

    // Project Mobilnet
    'projects.mobilnet.title': 'Mobilnet',
    'projects.mobilnet.description':
      'Web application for RUC10 registration in GPON networks, incorporating data visualization through charts.',

    // About Section
    'about.badge': 'About me',
    'about.title': 'Full Stack Developer',
    'about.description.part1': 'My name is',
    'about.description.strong1': 'Jason Vila',
    'about.description.part2': 'and I am currently studying',
    'about.description.strong2': 'Computing and Informatics',
    'about.description.part3': 'at',
    'about.description.part4': 'I am passionate about',
    'about.description.strong3': 'programming',
    'about.description.part5': 'and creating well-structured applications, focusing on',
    'about.description.strong4': 'scalable',
    'about.description.part6': 'projects with modern technologies while maintaining',
    'about.description.strong5': 'clean code',
    'about.description.part7': 'and good practices',
    'about.description.part8': 'I am motivated to keep',
    'about.description.strong6': 'learning',
    'about.description.strong7': 'sharing knowledge',
    'about.description.part9': 'and building',
    'about.description.strong8': 'real solutions',
    'about.description.part10': 'that leave a positive impact on projects and the',
    'about.description.strong9': 'developer community',
    'about.cta.github': 'View Github',
    'about.cta.cv': 'View CV',

    // Footer
    'footer.experience': 'Experience',
    'footer.projects': 'Projects',
    'footer.about': 'About me',
    'footer.contact': 'Contact',

    // Accessibility
    'a11y.theme': 'Choose theme',
    'a11y.language': 'Choose language',
    'a11y.goToProjects': 'Go to projects',
  },
} as const

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/')
  if (lang in ui) return lang as Language
  return defaultLang
}

export function useTranslations(lang: Language = defaultLang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key]
  }
}
