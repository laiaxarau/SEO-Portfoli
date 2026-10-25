// Central translations file.
// All visible text strings, organised by component / section.
// Tool names and project titles are brand names and intentionally kept in the original language.

export const defaultLang = 'ca' as const;
export type Lang = 'ca' | 'es' | 'en';

export const ui = {
  ca: {
    // ── Site metadata ──────────────────────────────────────────────────────────
    meta: {
      title: 'Laia Xarau | Consultora SEO Tècnic',
      description:
        'Consultora SEO especialitzada en SEO tècnic, amb perspectiva de desenvolupadora i orientació estratègica.',
      jobTitle: 'Consultora SEO',
      lang: 'ca',
    },

    // ── Header ─────────────────────────────────────────────────────────────────
    header: {
      tagline: 'SEO · TECNOLOGIA · ESTRATÈGIA',
      nav: {
        services: 'Serveis',
        work: 'Projectes',
        approach: 'Enfocament',
        toolkit: 'Eines',
        about: 'Sobre mi',
      },
      cta: 'Contacta',
      langLabel: 'Canvia d\'idioma',
    },

    // ── Hero ───────────────────────────────────────────────────────────────────
    hero: {
      eyebrow: 'Pensament independent. Comprensió tècnica.',
      role: 'Consultora SEO — SEO Tècnic & Estratègia',
      claimLine1: 'La cerca és complexa.',
      claimAccent: 'Entendre-la és la meva feina.',
      intro:
        'Combino SEO tècnic, anàlisi de dades i la perspectiva d\'una desenvolupadora per ajudar llocs web a millorar la seva visibilitat orgànica i connectar amb el públic adequat.',
      ctaPrimary: 'Veure els meus projectes',
      ctaSecondary: 'Contacta\'m',
      previewBar: 'PREVISUALITZACIÓ SERP',
    },

    // ── Services ───────────────────────────────────────────────────────────────
    services: {
      eyebrow: 'Com puc ajudar',
      title: 'Consultoria SEO tècnica: com puc ajudar',
      intro:
        'Treballo en projectes SEO que combinen fonaments tècnics, estratègia de continguts i anàlisi de dades per millorar la visibilitat orgànica i donar suport als objectius de negoci. Aquests són els problemes que ajudo a resoldre més sovint.',
      cta: 'Explica\'m el teu projecte',
      items: [
        {
          title: 'Google no troba ni indexa les teves pàgines',
          text: 'Faig auditories tècniques i anàlisi de rastreig i indexació per trobar el que impedeix als motors de cerca accedir i entendre el teu lloc, i converto les troballes en un pla clar per solucionar-ho.',
          areas: ['Auditories tècniques', 'Rastreig i indexació', 'Arquitectura web', 'Dades estructurades'],
        },
        {
          title: 'S\'acosta una migració o un redisseny',
          text: 'Ajudo a planificar i fer el seguiment de migracions web perquè el teu contingut i els seus senyals de cerca es mantinguin, i la teva visibilitat orgànica quedi protegida abans, durant i després del llançament.',
          areas: ['Migracions web', 'Seguiment del rendiment'],
        },
        {
          title: 'Les recomanacions SEO s\'encallen amb els developers',
          text: 'La meva experiència en desenvolupament web em permet anar més enllà de la superfície d\'un lloc, entendre les restriccions tècniques i comunicar les recomanacions SEO d\'una manera que el teu equip pot implementar de debò.',
          areas: ['Formació en desenvolupament web', 'Recomanacions llestes per implementar'],
        },
        {
          title: 'Tens dades, però no tens prioritats clares',
          text: 'Faig servir Google Search Console, GA4 i Data Studio per investigar el rendiment, identificar oportunitats tècniques, de continguts i d\'intenció de cerca, i convertir-les en prioritats basades en dades.',
          areas: ['Recerca d\'intenció de cerca', 'Optimització de continguts', 'Anàlisi de rendiment'],
        },
      ],
    },

    // ── Selected work ──────────────────────────────────────────────────────────
    work: {
      eyebrow: 'Projectes seleccionats',
      title: 'Projectes SEO i web seleccionats',
      featured: {
        meta: 'SEO tècnic · Estratègia · Creixement orgànic',
        title: 'Consultoria SEO',
        text: 'La meva feina professional combina investigació tècnica, estratègia de continguts i anàlisi de rendiment. Em centro a entendre les raons darrere del rendiment en cerca i a identificar oportunitats pràctiques per millorar-lo.',
        note: 'Experiència professional en una agència SEO.',
      },
      terminalResult: 'oportunitats identificades · llestes per implementar',
      auditSteps: [
        { name: 'rastreig', note: 'com els bots descobreixen el lloc' },
        { name: 'indexació', note: 'el que els cercadors conserven' },
        { name: 'arquitectura', note: 'com es connecten les pàgines' },
        { name: 'dades estructurades', note: 'el que les màquines entenen' },
        { name: 'intenció de cerca', note: 'el que la gent busca' },
        { name: 'continguts', note: 'el que el lloc ofereix' },
        { name: 'mesurament', note: 'GSC · GA4 · Data Studio' },
      ],
      projects: [
        {
          meta: 'Projecte propi · SEO per a dones',
          title: 'SEO amb Talons',
          text: 'Una iniciativa independent orientada a ajudar dones a millorar la seva visibilitat en línia a través d\'un enfocament tècnic, estratègic i feminista del SEO. SEO amb Talons aplica el meu coneixement professional en un projecte amb identitat, audiència i propòsit propis.',
          linkLabel: 'Visitar SEO amb Talons',
          alt: 'Pàgina d\'inici de SEO amb Talons: "Posiciona el teu negoci sense perdre el teu estil", SEO per a dones emprenedores',
        },
        {
          meta: 'Projecte personal · Astro · HTML · CSS · JavaScript',
          title: 'Madrid: una guia de viatge convertida en joc',
          text: 'Una guia de viatge interactiva i lúdica creada com a sorpresa per a un viatge de quatre dies a Madrid. Construïda amb tecnologies web i desenvolupament assistit per IA, el projecte converteix la planificació del viatge en una experiència més personal. Reuneix creativitat, experiència d\'usuari i el meu interès per crear productes digitals útils.',
          linkLabel: 'Explorar Madrid',
          alt: 'Portada del joc de Madrid: "Tria la teva aventura", 5–8 novembre, amb el skyline de Madrid',
        },
        {
          meta: 'Projecte personal · Astro · Tailwind CSS · JavaScript',
          title: 'Portfolio frontend',
          text: 'El meu primer portfolio com a desenvolupadora frontend. Aplega els projectes que van iniciar el meu camí al codi, des d\'un lloc WordPress per a una ONG fins a un lloc Astro alimentat per l\'API de SpaceX. El contingut es carrega des d\'un fitxer JSON, de manera que el lloc és fàcil d\'actualitzar.',
          linkLabel: 'Visitar el portfolio',
          alt: 'Pàgina d\'inici del portfolio frontend amb el logo LAIA XARAU i previsualitzacions de projectes',
        },
      ],
    },

    // ── Approach ───────────────────────────────────────────────────────────────
    approach: {
      eyebrow: 'El meu enfocament',
      title: 'El meu enfocament al SEO tècnic',
      leadLine1: 'Abordo el SEO des de dues perspectives complementàries:',
      leadAccent: 'continguts i tecnologia.',
      body: 'La meva feina combina SEO tècnic, recerca d\'intenció de cerca, optimització de continguts i anàlisi de dades per entendre com rendeixen els llocs web en cerca i on hi ha marge de millora.',
      perspective1Label: 'Perspectiva',
      perspective1Title: 'Continguts',
      perspective1Text: 'El que la gent cerca, i el que un lloc web els ofereix.',
      perspective1Chips: ['Recerca d\'intenció de cerca', 'Optimització de continguts'],
      perspective2Label: 'Perspectiva',
      perspective2Title: 'Tecnologia',
      perspective2Text: 'Com de bé poden els motors de cerca descobrir-lo i entendre\'l.',
      perspective2Chips: ['Auditories tècniques', 'Rastreig i indexació', 'Arquitectura web', 'Dades estructurades', 'Migracions', 'Seguiment del rendiment'],
      close1: 'En una agència SEO, poso en pràctica aquest enfocament cada dia, fent servir eines com Google Search Console, GA4 i Data Studio per convertir les dades en accions concretes.',
      close2: 'El meu objectiu és connectar el que la gent cerca, el que un lloc web ofereix i com de bé els motors de cerca poden descobrir-lo i entendre\'l.',
    },

    // ── Toolkit ────────────────────────────────────────────────────────────────
    toolkit: {
      eyebrow: 'Eines',
      title: 'Les eines de SEO tècnic darrere l\'anàlisi',
      body: 'Les faig servir per investigar el rendiment, identificar oportunitats i donar suport a decisions basades en dades.',
      groups: [
        { num: '01', label: 'Cerca i analítica', title: 'Entendre el rendiment en cerca' },
        { num: '02', label: 'SEO tècnic', title: 'Mirar sota el capó' },
        { num: '03', label: 'Recerca i estratègia SEO', title: 'Trobar oportunitats' },
      ],
    },

    // ── About ──────────────────────────────────────────────────────────────────
    about: {
      eyebrow: 'Sobre mi',
      title: 'Una mentalitat tècnica, aplicada al SEO',
      p1: 'Com a consultora SEO, vaig descobrir l\'interès de fer els llocs web més visibles, accessibles i efectius. Aquesta curiositat em va portar a explorar el SEO més en profunditat.',
      p2: 'Vaig descobrir que el coneixement tècnic pot ser un avantatge poderós a l\'hora d\'investigar problemes de rastreig i indexació, entendre l\'arquitectura d\'un lloc o convertir troballes complexes en recomanacions pràctiques.',
      p3: 'Avui treballo combinant anàlisi tècnica, estratègia de continguts i dades de rendiment per abordar la cerca orgànica des d\'una perspectiva tant tècnica com de negoci.',
      quote: 'Crec que un bon SEO comença per fer les preguntes correctes, entendre el context i centrar-se en els canvis que fan una diferència real.',
    },

    // ── Journey ────────────────────────────────────────────────────────────────
    journey: {
      eyebrow: 'Trajectòria',
      title: 'Dels continguts al codi, i cap al SEO',
      steps: [
        {
          num: '01', label: 'Continguts',
          title: 'Va començar amb l\'escriptura',
          text: 'El meu camí al màrqueting digital va començar amb l\'escriptura, i un interès creixent per com el contingut podia ajudar els llocs web a arribar al públic adequat.',
        },
        {
          num: '02', label: 'Codi',
          title: 'Després vaig aprendre a construir',
          text: 'Volia entendre el codi i els fonaments tècnics dels llocs web, i com afecten la visibilitat orgànica. Així que vaig aprendre desenvolupament web.',
        },
        {
          num: '03', label: 'SEO',
          title: 'Ara connecto tots dos',
          text: 'Connecto els punts entre el que la gent busca, el que un lloc web ofereix i com de bé els motors de cerca poden accedir-hi i interpretar-ho.',
        },
      ],
    },

    // ── Beyond ─────────────────────────────────────────────────────────────────
    beyond: {
      eyebrow: 'Més enllà',
      title: 'Més enllà del títol professional',
      p: 'Sento curiositat per la intersecció entre cerca, tecnologia i la manera com les persones fan servir el web. M\'agrada entendre com funcionen les coses, provar idees i construir projectes que convereixin un pensament en quelcom tangible.',
      quote: 'Per a mi, aprendre no és separable de fer. És part de com abordo tant els reptes professionals com els projectes personals.',
    },

    // ── Contact ────────────────────────────────────────────────────────────────
    contact: {
      eyebrow: 'Contacte',
      title: 'Parlem',
      text: 'T\'interessa el SEO, els reptes tècnics o un projecte digital que necessita un enfocament reflexiu? Estic sempre oberta a converses interessants i col·laboracions amb sentit.',
      linkedin: 'Connecta amb mi a LinkedIn',
      email: 'Escriu-me un correu',
    },

    // ── Footer ─────────────────────────────────────────────────────────────────
    footer: {
      role: 'Consultora SEO',
    },

    // ── Accessibility ──────────────────────────────────────────────────────────
    a11y: {
      skipToContent: 'Anar al contingut principal',
      logoBack: 'Laia Xarau, tornar a l\'inici',
      heroPreviewAlt: 'Com apareix aquesta pàgina als resultats de cerca i a les dades estructurades',
      terminalAlt: 'Una auditoria SEO mostrada com un registre de terminal: rastreig, indexació, arquitectura, dades estructurades, intenció de cerca, continguts i mesurament',
    },
  },

  // ────────────────────────────────────────────────────────────────────────────
  es: {
    meta: {
      title: 'Laia Xarau | Consultora SEO Técnico',
      description:
        'Consultora SEO especializada en SEO técnico, con perspectiva de desarrolladora y orientación estratégica.',
      jobTitle: 'Consultora SEO',
      lang: 'es',
    },
    header: {
      tagline: 'SEO · TECNOLOGÍA · ESTRATEGIA',
      nav: {
        services: 'Servicios',
        work: 'Proyectos',
        approach: 'Enfoque',
        toolkit: 'Herramientas',
        about: 'Sobre mí',
      },
      cta: 'Contactar',
      langLabel: 'Cambiar idioma',
    },
    hero: {
      eyebrow: 'Pensamiento independiente. Comprensión técnica.',
      role: 'Consultora SEO — SEO Técnico & Estrategia',
      claimLine1: 'La búsqueda es compleja.',
      claimAccent: 'Entenderla es mi trabajo.',
      intro:
        'Combino SEO técnico, análisis de datos y la perspectiva de una desarrolladora para ayudar a sitios web a mejorar su visibilidad orgánica y conectar con el público adecuado.',
      ctaPrimary: 'Ver mis proyectos',
      ctaSecondary: 'Contactar',
      previewBar: 'VISTA PREVIA SERP',
    },
    services: {
      eyebrow: 'Cómo puedo ayudar',
      title: 'Consultoría SEO técnica: cómo puedo ayudar',
      intro:
        'Trabajo en proyectos SEO que combinan fundamentos técnicos, estrategia de contenidos y análisis de datos para mejorar la visibilidad orgánica y apoyar los objetivos de negocio. Estos son los problemas que ayudo a resolver con más frecuencia.',
      cta: 'Cuéntame tu proyecto',
      items: [
        {
          title: 'Google no encuentra ni indexa tus páginas',
          text: 'Realizo auditorías técnicas y análisis de rastreo e indexación para encontrar lo que impide a los motores de búsqueda acceder y entender tu sitio, y convierto los hallazgos en un plan claro para solucionarlo.',
          areas: ['Auditorías técnicas', 'Rastreo e indexación', 'Arquitectura web', 'Datos estructurados'],
        },
        {
          title: 'Se acerca una migración o un rediseño',
          text: 'Ayudo a planificar y hacer el seguimiento de migraciones web para que tu contenido y sus señales de búsqueda se mantengan, y tu visibilidad orgánica quede protegida antes, durante y después del lanzamiento.',
          areas: ['Migraciones web', 'Seguimiento del rendimiento'],
        },
        {
          title: 'Las recomendaciones SEO se atascan con los developers',
          text: 'Mi experiencia en desarrollo web me permite ir más allá de la superficie de un sitio, entender las restricciones técnicas y comunicar las recomendaciones SEO de una forma que tu equipo puede implementar de verdad.',
          areas: ['Formación en desarrollo web', 'Recomendaciones listas para implementar'],
        },
        {
          title: 'Tienes datos, pero no tienes prioridades claras',
          text: 'Uso Google Search Console, GA4 y Data Studio para investigar el rendimiento, identificar oportunidades técnicas, de contenidos y de intención de búsqueda, y convertirlas en prioridades basadas en datos.',
          areas: ['Investigación de intención de búsqueda', 'Optimización de contenidos', 'Análisis de rendimiento'],
        },
      ],
    },
    work: {
      eyebrow: 'Proyectos seleccionados',
      title: 'Proyectos SEO y web seleccionados',
      featured: {
        meta: 'SEO técnico · Estrategia · Crecimiento orgánico',
        title: 'Consultoría SEO',
        text: 'Mi trabajo profesional combina investigación técnica, estrategia de contenidos y análisis de rendimiento. Me centro en entender las razones detrás del rendimiento en búsqueda y en identificar oportunidades prácticas para mejorarlo.',
        note: 'Experiencia profesional en una agencia SEO.',
      },
      terminalResult: 'oportunidades identificadas · listas para implementar',
      auditSteps: [
        { name: 'rastreo', note: 'cómo los bots descubren el sitio' },
        { name: 'indexación', note: 'lo que los buscadores conservan' },
        { name: 'arquitectura', note: 'cómo se conectan las páginas' },
        { name: 'datos estructurados', note: 'lo que las máquinas entienden' },
        { name: 'intención de búsqueda', note: 'lo que la gente busca' },
        { name: 'contenidos', note: 'lo que el sitio ofrece' },
        { name: 'medición', note: 'GSC · GA4 · Data Studio' },
      ],
      projects: [
        {
          meta: 'Proyecto propio · SEO para mujeres',
          title: 'SEO amb Talons',
          text: 'Una iniciativa independiente orientada a ayudar a mujeres a mejorar su visibilidad en línea a través de un enfoque técnico, estratégico y feminista del SEO. SEO amb Talons aplica mi conocimiento profesional en un proyecto con identidad, audiencia y propósito propios.',
          linkLabel: 'Visitar SEO amb Talons',
          alt: 'Página de inicio de SEO amb Talons: "Posiciona el teu negoci sense perdre el teu estil", SEO para mujeres emprendedoras',
        },
        {
          meta: 'Proyecto personal · Astro · HTML · CSS · JavaScript',
          title: 'Madrid: una guía de viaje convertida en juego',
          text: 'Una guía de viaje interactiva y lúdica creada como sorpresa para un viaje de cuatro días a Madrid. Construida con tecnologías web y desarrollo asistido por IA, el proyecto convierte la planificación del viaje en una experiencia más personal. Reúne creatividad, experiencia de usuario y mi interés por crear productos digitales útiles.',
          linkLabel: 'Explorar Madrid',
          alt: 'Portada del juego de Madrid: "Tria la teva aventura", 5–8 novembre, con el skyline de Madrid',
        },
        {
          meta: 'Proyecto personal · Astro · Tailwind CSS · JavaScript',
          title: 'Portfolio frontend',
          text: 'Mi primer portfolio como desarrolladora frontend. Reúne los proyectos que iniciaron mi camino en el código, desde un sitio WordPress para una ONG hasta un sitio Astro alimentado por la API de SpaceX. El contenido se carga desde un archivo JSON, por lo que el sitio es fácil de actualizar.',
          linkLabel: 'Visitar el portfolio',
          alt: 'Página de inicio del portfolio frontend con el logo LAIA XARAU y vistas previas de proyectos',
        },
      ],
    },
    approach: {
      eyebrow: 'Mi enfoque',
      title: 'Mi enfoque del SEO técnico',
      leadLine1: 'Abordo el SEO desde dos perspectivas complementarias:',
      leadAccent: 'contenidos y tecnología.',
      body: 'Mi trabajo combina SEO técnico, investigación de intención de búsqueda, optimización de contenidos y análisis de datos para entender cómo rinden los sitios web en búsqueda y dónde hay margen de mejora.',
      perspective1Label: 'Perspectiva',
      perspective1Title: 'Contenidos',
      perspective1Text: 'Lo que la gente busca, y lo que un sitio web les ofrece.',
      perspective1Chips: ['Investigación de intención de búsqueda', 'Optimización de contenidos'],
      perspective2Label: 'Perspectiva',
      perspective2Title: 'Tecnología',
      perspective2Text: 'Con qué eficacia pueden los motores de búsqueda descubrirlo y entenderlo.',
      perspective2Chips: ['Auditorías técnicas', 'Rastreo e indexación', 'Arquitectura web', 'Datos estructurados', 'Migraciones', 'Seguimiento del rendimiento'],
      close1: 'En una agencia SEO, pongo en práctica este enfoque cada día, usando herramientas como Google Search Console, GA4 y Data Studio para convertir los datos en acciones concretas.',
      close2: 'Mi objetivo es conectar lo que la gente busca, lo que un sitio web ofrece y con qué eficacia los motores de búsqueda pueden descubrirlo y entenderlo.',
    },
    toolkit: {
      eyebrow: 'Herramientas',
      title: 'Las herramientas de SEO técnico detrás del análisis',
      body: 'Las uso para investigar el rendimiento, identificar oportunidades y apoyar decisiones basadas en datos.',
      groups: [
        { num: '01', label: 'Búsqueda y analítica', title: 'Entender el rendimiento en búsqueda' },
        { num: '02', label: 'SEO técnico', title: 'Mirar bajo el capó' },
        { num: '03', label: 'Investigación y estrategia SEO', title: 'Encontrar oportunidades' },
      ],
    },
    about: {
      eyebrow: 'Sobre mí',
      title: 'Una mentalidad técnica, aplicada al SEO',
      p1: 'Como consultora SEO, descubrí el interés de hacer los sitios web más visibles, accesibles y efectivos. Esa curiosidad me llevó a explorar el SEO más en profundidad.',
      p2: 'Descubrí que el conocimiento técnico puede ser una ventaja poderosa a la hora de investigar problemas de rastreo e indexación, entender la arquitectura de un sitio o convertir hallazgos complejos en recomendaciones prácticas.',
      p3: 'Hoy trabajo combinando análisis técnico, estrategia de contenidos y datos de rendimiento para abordar la búsqueda orgánica desde una perspectiva tanto técnica como de negocio.',
      quote: 'Creo que un buen SEO empieza por hacer las preguntas correctas, entender el contexto y centrarse en los cambios que marcan una diferencia real.',
    },
    journey: {
      eyebrow: 'Trayectoria',
      title: 'De los contenidos al código, y al SEO',
      steps: [
        {
          num: '01', label: 'Contenidos',
          title: 'Empezó con la escritura',
          text: 'Mi camino en el marketing digital empezó con la escritura, y un interés creciente por cómo el contenido podía ayudar a los sitios web a llegar al público adecuado.',
        },
        {
          num: '02', label: 'Código',
          title: 'Después aprendí a construir',
          text: 'Quería entender el código y los fundamentos técnicos de los sitios web, y cómo afectan a la visibilidad orgánica. Así que aprendí desarrollo web.',
        },
        {
          num: '03', label: 'SEO',
          title: 'Ahora conecto ambos',
          text: 'Conecto los puntos entre lo que la gente busca, lo que un sitio web ofrece y con qué eficacia los motores de búsqueda pueden acceder e interpretarlo.',
        },
      ],
    },
    beyond: {
      eyebrow: 'Más allá',
      title: 'Más allá del título profesional',
      p: 'Siento curiosidad por la intersección entre búsqueda, tecnología y la manera en que las personas usan la web. Me gusta entender cómo funcionan las cosas, probar ideas y construir proyectos que conviertan un pensamiento en algo tangible.',
      quote: 'Para mí, aprender no es separable de hacer. Es parte de cómo abordo tanto los retos profesionales como los proyectos personales.',
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Hablemos',
      text: '¿Te interesa el SEO, los retos técnicos o un proyecto digital que necesita un enfoque reflexivo? Siempre estoy abierta a conversaciones interesantes y colaboraciones con sentido.',
      linkedin: 'Conectar en LinkedIn',
      email: 'Enviarme un correo',
    },
    footer: {
      role: 'Consultora SEO',
    },
    a11y: {
      skipToContent: 'Ir al contenido principal',
      logoBack: 'Laia Xarau, volver al inicio',
      heroPreviewAlt: 'Cómo aparece esta página en los resultados de búsqueda y en los datos estructurados',
      terminalAlt: 'Una auditoría SEO mostrada como un registro de terminal: rastreo, indexación, arquitectura, datos estructurados, intención de búsqueda, contenidos y medición',
    },
  },

  // ────────────────────────────────────────────────────────────────────────────
  en: {
    meta: {
      title: 'Laia Xarau | SEO Consultant & Technical SEO',
      description:
        'SEO consultant with a technical background, a strategic mindset and a curiosity for how the web works.',
      jobTitle: 'SEO Consultant',
      lang: 'en',
    },
    header: {
      tagline: 'SEO · TECHNOLOGY · STRATEGY',
      nav: {
        services: 'Services',
        work: 'Work',
        approach: 'Approach',
        toolkit: 'Toolkit',
        about: 'About',
      },
      cta: 'Get in touch',
      langLabel: 'Change language',
    },
    hero: {
      eyebrow: 'Independent thinking. Technical understanding.',
      role: 'SEO Consultant — Technical SEO & Strategy',
      claimLine1: 'Search is complex.',
      claimAccent: 'Understanding it is my job.',
      intro:
        'I combine technical SEO, data analysis and a developer\'s perspective to help websites improve their organic visibility and connect with the right audiences.',
      ctaPrimary: 'Explore my work',
      ctaSecondary: 'Get in touch',
      previewBar: 'SEARCH RESULT PREVIEW',
    },
    services: {
      eyebrow: 'How I can help',
      title: 'Technical SEO consulting: how I can help',
      intro:
        'I work on SEO projects that combine technical foundations, content strategy and data analysis to improve organic visibility and support business objectives. These are the problems I help solve most often.',
      cta: 'Tell me about your project',
      items: [
        {
          title: "Google isn't finding or indexing your pages",
          text: "I run technical audits and crawling and indexing analysis to find what's stopping search engines from accessing and understanding your site, and turn the findings into a clear plan to fix it.",
          areas: ['Technical audits', 'Crawling & indexing', 'Website architecture', 'Structured data'],
        },
        {
          title: 'A migration or redesign is coming',
          text: 'I help plan and follow website migrations so your content and its search signals carry over, and your organic visibility is protected before, during and after the launch.',
          areas: ['Website migrations', 'Performance monitoring'],
        },
        {
          title: 'SEO recommendations get stuck with developers',
          text: 'My background in software development helps me look beyond the surface of a website, understand technical constraints and communicate SEO recommendations in a way your team can actually implement.',
          areas: ['Web development background', 'Implementation-ready recommendations'],
        },
        {
          title: 'You have data, but no clear priorities',
          text: 'I use Google Search Console, GA4 and Data Studio to investigate performance, identify technical, content and search intent opportunities, and turn them into data-informed priorities.',
          areas: ['Search intent research', 'Content optimization', 'Performance analysis'],
        },
      ],
    },
    work: {
      eyebrow: 'Selected work',
      title: 'Selected SEO and web projects',
      featured: {
        meta: 'Technical SEO · Strategy · Organic growth',
        title: 'SEO consulting',
        text: 'My professional work brings together technical investigation, content strategy and performance analysis. I focus on understanding the reasons behind search performance and identifying practical opportunities to improve it.',
        note: 'Professional experience at an SEO agency.',
      },
      terminalResult: 'opportunities identified · ready to implement',
      auditSteps: [
        { name: 'crawling', note: 'how bots discover the site' },
        { name: 'indexing', note: 'what search engines keep' },
        { name: 'architecture', note: 'how pages connect' },
        { name: 'structured data', note: 'what machines understand' },
        { name: 'search intent', note: 'what people look for' },
        { name: 'content', note: 'what the site offers' },
        { name: 'measurement', note: 'GSC · GA4 · Data Studio' },
      ],
      projects: [
        {
          meta: 'Independent project · SEO for women',
          title: 'SEO amb Talons',
          text: 'An independent initiative focused on helping women improve their online visibility through a technical, strategic and feminist approach to SEO. SEO amb Talons brings my professional knowledge into a project with its own identity, audience and purpose.',
          linkLabel: 'Visit SEO amb Talons',
          alt: 'SEO amb Talons homepage: "Posiciona el teu negoci sense perdre el teu estil", SEO for women entrepreneurs',
        },
        {
          meta: 'Personal project · Astro · HTML · CSS · JavaScript',
          title: 'Madrid: a city guide turned into a game',
          text: 'A playful, interactive travel guide created as a surprise for a four-day trip to Madrid. Built with web technologies and AI-assisted development, the project turns trip planning into a more personal experience. It brings together creativity, user experience and my interest in building useful digital products.',
          linkLabel: 'Explore Madrid',
          alt: 'Madrid travel game cover: "Tria la teva aventura", 5–8 November, with the Madrid skyline',
        },
        {
          meta: 'Personal project · Astro · Tailwind CSS · JavaScript',
          title: 'Front-end portfolio',
          text: 'My first portfolio as a front-end developer. It gathers the projects that started my path into code, from a WordPress site for a non-profit organization to an Astro site powered by the SpaceX API. The content is loaded from a JSON file, so the site is easy to update.',
          linkLabel: 'Visit the portfolio',
          alt: 'Front-end portfolio homepage with the LAIA XARAU logo and project previews',
        },
      ],
    },
    approach: {
      eyebrow: 'My approach',
      title: 'My approach to technical SEO',
      leadLine1: 'I approach SEO from two complementary perspectives:',
      leadAccent: 'content and technology.',
      body: 'My work combines technical SEO, search intent research, content optimization and data analysis to understand how websites perform in search and where there is room for improvement.',
      perspective1Label: 'Perspective',
      perspective1Title: 'Content',
      perspective1Text: 'What people search for, and what a website offers them.',
      perspective1Chips: ['Search intent research', 'Content optimization'],
      perspective2Label: 'Perspective',
      perspective2Title: 'Technology',
      perspective2Text: 'How effectively search engines can discover and understand it.',
      perspective2Chips: ['Technical audits', 'Crawling & indexing', 'Website architecture', 'Structured data', 'Migrations', 'Performance monitoring'],
      close1: 'At an SEO agency, I put this approach into practice every day, using tools such as Google Search Console, GA4 and Data Studio to turn data into actionable insights.',
      close2: 'My goal is to connect what people search for, what a website offers and how effectively search engines can discover and understand it.',
    },
    toolkit: {
      eyebrow: 'Toolkit',
      title: 'The technical SEO tools behind the analysis',
      body: 'I use them to investigate performance, identify opportunities and support data-informed decisions.',
      groups: [
        { num: '01', label: 'Search & analytics', title: 'Understanding search performance' },
        { num: '02', label: 'Technical SEO', title: 'Looking under the hood' },
        { num: '03', label: 'SEO research & strategy', title: 'Finding opportunities' },
      ],
    },
    about: {
      eyebrow: 'About',
      title: 'A technical mindset, applied to SEO',
      p1: 'As an SEO consultant, I became interested in how websites could be made more visible, accessible and effective. That curiosity led me to explore SEO more deeply.',
      p2: 'I discovered that technical knowledge could be a powerful advantage when investigating crawling and indexing issues, understanding website architecture or turning complex findings into practical recommendations.',
      p3: 'Today, I work combining technical analysis, content strategy and performance data to approach organic search from both a technical and a business perspective.',
      quote: 'I believe good SEO starts with asking the right questions, understanding the context and focusing on changes that make a meaningful difference.',
    },
    journey: {
      eyebrow: 'Journey',
      title: 'From content to code, and into SEO',
      steps: [
        {
          num: '01', label: 'Content',
          title: 'It started with writing',
          text: 'My journey into digital marketing started with writing, and a growing interest in how content could help websites reach the right audiences.',
        },
        {
          num: '02', label: 'Code',
          title: 'Then I learned to build',
          text: 'I wanted to understand the code and the technical foundations of websites, and how they affect organic visibility. So I learned web development.',
        },
        {
          num: '03', label: 'SEO',
          title: 'Now I connect both',
          text: 'Connecting the dots between what people are looking for, what a website offers and how effectively search engines can access and interpret it.',
        },
      ],
    },
    beyond: {
      eyebrow: 'Beyond',
      title: 'Beyond the job title',
      p: "I'm curious about the intersection of search, technology and the way people use the web. I enjoy understanding how things work, testing ideas and building projects that turn a thought into something tangible.",
      quote: "For me, learning is not separate from doing. It's part of how I approach both professional challenges and personal projects.",
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's talk",
      text: "Interested in SEO, technical challenges or a digital project that needs a thoughtful approach? I'm always open to meaningful conversations and interesting collaborations.",
      linkedin: 'Connect with me on LinkedIn',
      email: 'Email me',
    },
    footer: {
      role: 'SEO Consultant',
    },
    a11y: {
      skipToContent: 'Skip to content',
      logoBack: 'Laia Xarau, back to top',
      heroPreviewAlt: 'How this page presents itself in search results and structured data',
      terminalAlt: 'An SEO audit shown as a terminal log: crawling, indexing, architecture, structured data, search intent, content and measurement',
    },
  },
} as const;
