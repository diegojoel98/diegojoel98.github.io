/* ==========================================================================
   diegojoel98.github.io — behaviour
   The page ships in English inside the markup, so it works with JS disabled.
   This file adds: Spanish translations, theme, nav, scroll spy, reveal.
   ========================================================================== */
(function () {
  'use strict';

  /* ══════════════════════════════════════════════════════════════════════
     1. Spanish dictionary.  Keys match [data-i18n] in index.html.
        English lives in the HTML and is cached on first switch.
     ══════════════════════════════════════════════════════════════════════ */
  var ES = {
    'skip': 'Ir al contenido',

    'nav.about': 'Perfil',
    'nav.experience': 'Experiencia',
    'nav.skills': 'Aptitudes',
    'nav.writing': 'Artículos',
    'nav.projects': 'Proyectos',
    'nav.education': 'Formación',
    'nav.contact': 'Contacto',

    'hero.available': 'Mérida, Yucatán · México',
    'hero.role': 'Frontend Tech Lead',
    'hero.role2': 'Tech Writer',
    'hero.lede': 'Desarrollo y modernizo aplicaciones web empresariales con <b>Vue</b>, <b>Angular</b> y ' +
      '<b>TypeScript</b>. Perfil hands-on especializado en arquitectura frontend, microfrontends, ' +
      'aplicaciones administrativas, autenticación y observabilidad. Lidero decisiones técnicas, ' +
      'planifico entregas, reviso código y coordino con Producto, Backend, QA y DevOps.',
    'hero.cta1': 'Ver mi experiencia',
    'hero.cta2': 'Contáctame',

    'stats.1t': 'Años de experiencia',
    'stats.2t': 'Lidero el frontend en',
    'stats.3t': 'Artículos publicados',
    'stats.4t': 'Certificación',

    'k.about': '01 — Perfil',
    'about.h2': 'Líder hands-on, no espectador',
    'about.p1': 'Soy Frontend Tech Lead con <b>6 años</b> desarrollando y modernizando ' +
      'aplicaciones web empresariales. Mi perfil es deliberadamente hands-on: escribo el código que ' +
      'después pido revisar, y soy responsable de la factibilidad técnica y de la calidad de lo que se entrega.',
    'about.p2': 'En el día a día eso significa guiar las decisiones de arquitectura, diseño y ' +
      'herramientas del producto, participar activamente en el Discovery para definir posibles ' +
      'soluciones, y acompañar el crecimiento técnico del equipo con code review y estándares altos ' +
      'más que con proceso por el proceso mismo.',
    'about.p3': 'También escribo. Publico artículos técnicos bilingües en Medium — <i>JavaScript in ' +
      'Plain English</i> y <i>AWS in Plain English</i> — sobre microfrontends, flujo de trabajo en ' +
      'equipo y fundamentos de cloud. Explicar algo bien es como compruebo si de verdad lo entiendo.',

    'focus.1t': 'Arquitectura frontend',
    'focus.1d': 'Estructura que sobrevive a más de un equipo tocándola.',
    'focus.2t': 'Microfrontends',
    'focus.2d': 'Despliegues independientes y modularidad real — sin caos.',
    'focus.3t': 'Aplicaciones administrativas',
    'focus.3d': 'Herramientas internas densas y con mucho dato, de uso diario.',
    'focus.4t': 'Autenticación y observabilidad',
    'focus.4d': 'Saber quién hizo qué, y qué se rompió, antes de que lo reporten.',

    'k.exp': '02 — Experiencia',
    'exp.h2': 'Dónde he trabajado',
    'loc.mid': 'Mérida, Yucatán, México',
    'loc.mx': 'México',
    'badge.now': 'Actual',
    'label.stack': 'Stack',

    'exp.palace.tenure': 'Desde mar. 2024',
    'exp.palace.r1.title': 'Frontend Tech Lead',
    'exp.palace.r1.date': 'dic. 2025 — Actualidad',
    'exp.palace.r1.b1': 'Guiar la implementación y tomar decisiones sobre arquitectura del producto, diseño y herramientas.',
    'exp.palace.r1.b2': 'Liderar la toma de decisiones técnicas y de arquitectura del frontend.',
    'exp.palace.r1.b3': 'Participar activamente en el Discovery y en la definición de posibles soluciones.',
    'exp.palace.r1.b4': 'Responsable de la factibilidad técnica y de la calidad aplicada en el producto entregado.',
    'exp.palace.r1.b5': 'Acompañar el crecimiento técnico de los ingenieros y fomentar estándares de código de alto nivel.',

    'exp.palace.r2.title': 'Desarrollador Front End',
    'exp.palace.r2.date': 'mar. 2024 — dic. 2025 · 1 año 10 meses',
    'exp.palace.r2.b1': 'Desarrollo de soluciones web usables, intuitivas y responsivas, acorde a los dispositivos para los que fueron diseñadas.',
    'exp.palace.r2.b2': 'Implementación y mantenimiento de microfrontends para mejorar la escalabilidad y modularidad de las aplicaciones.',
    'exp.palace.r2.b3': 'Creación de aplicaciones de alto rendimiento escribiendo código comprobable, reutilizable y eficiente.',
    'exp.palace.r2.b4': 'Análisis de requisitos y diseño de interfaz; implementación de componentes UI receptivos.',
    'exp.palace.r2.b5': 'Pruebas unitarias, ergonomía y diseño responsivo.',
    'exp.palace.r2.b6': 'Metodologías ágiles y procesos de mejora continua.',

    'exp.enacment.title': 'Software Developer',
    'exp.enacment.date': 'ago. 2023 — abr. 2024 · 9 meses',
    'exp.enacment.b1': 'Desarrollo de aplicaciones web de alto rendimiento a la medida.',
    'exp.enacment.b2': 'Creación de aplicaciones híbridas usando Ionic y Capacitor.',
    'exp.enacment.b3': 'Transformación de requisitos funcionales en módulos de aplicaciones.',
    'exp.enacment.b4': 'Gestión y mantenimiento de aplicaciones productivas.',
    'exp.enacment.b5': 'Procesos backend con Google Cloud Functions, AWS Lambda y bases de datos relacionales y no relacionales.',
    'exp.enacment.b6': 'Generación de reportes (Looker Studio, Power BI) y paneles de administración.',

    'exp.cnj.title': 'Technical Writer',
    'exp.cnj.date': 'feb. 2022 — mar. 2024 · 2 años 2 meses',
    'exp.cnj.b1': 'Redactor de contenido tecnológico para el blog de la plataforma Code &amp; Jobs.',

    'exp.ffw.title': 'Desarrollador Web Full Stack Jr',
    'exp.ffw.date': 'abr. 2021 — nov. 2021 · 8 meses',
    'exp.ffw.b1': 'Planificación y estimación del desarrollo de la página a realizar.',
    'exp.ffw.b2': 'Traducción del diseño de la página web a componentes web.',
    'exp.ffw.b3': 'Análisis, diseño e implementación de un sistema de base de datos donde es posible consultar más de 200 productos.',

    'exp.uady.co': 'Facultad de Matemáticas — UADY',
    'exp.uady.title': 'Desarrollador de Front-end Jr',
    'exp.uady.date': 'ago. 2019 — feb. 2020 · 7 meses',
    'exp.uady.b1': 'Administración del sitio web y redes sociales del cuerpo académico de Modelado y Simulación de Sistemas Inteligentes de la Facultad de Matemáticas.',
    'exp.uady.b2': 'Diseñar y actualizar el sitio web del cuerpo académico apoyándose en el CMS Joomla.',

    'k.skills': '03 — Aptitudes',
    'skills.h2': 'Con qué trabajo',
    'skills.g1': 'Frontend',
    'skills.g2': 'Arquitectura',
    'skills.g3': 'Backend y datos',
    'skills.g4': 'Cloud y reporting',
    'skills.g5': 'Calidad y proceso',
    'skills.g6': 'Liderazgo',
    'tag.mfe': 'Microfrontends',
    'tag.ds': 'Design systems',
    'tag.comp': 'Componentes reutilizables',
    'tag.auth': 'Autenticación',
    'tag.obs': 'Observabilidad',
    'tag.unit': 'Pruebas unitarias',
    'tag.cr': 'Code review',
    'tag.lead': 'Liderazgo técnico',
    'tag.disc': 'Discovery',
    'tag.mentor': 'Mentoría',
    'tag.plan': 'Planificación de entregas',
    'tag.cross': 'Coordinación entre equipos',

    'k.writing': '04 — Artículos',
    'writing.h2': 'Lo que he publicado',
    'writing.note': 'Escribo en inglés y en español. Cada artículo enlaza a sus dos versiones.',
    'writing.all': 'Todos los artículos en Medium ↗',
    'post.1.date': 'feb. 2026',
    'post.1.t': 'Draft PRs + Review Bots: un flujo simple para reducir ruido y retrabajo',
    'post.1.d': 'Un flujo de revisión ligero que evita que los pull requests a medias se coman la atención del equipo.',
    'post.2.date': 'dic. 2025',
    'post.2.t': 'Microfrontends sin caos: 5 reglas que sí funcionan en equipos reales',
    'post.2.d': 'Las reglas que querría tener antes de partir un frontend entre varios equipos — aprendidas a la mala.',
    'post.3.date': 'sep. 2025',
    'post.3.t': 'Guía de estudio para la certificación AWS Certified Cloud Practitioner',
    'post.3.d': 'El plan de estudio con el que aprobé el examen, escrito cuando todavía lo tenía fresco.',
    'post.4.date': 'mar. 2025',
    'post.4.t': 'Cómo instalar WordPress localmente y crear sitios en tu propia máquina',
    'post.4.d': 'Un setup local práctico para construir y romper sitios WordPress sin riesgo.',
    'post.5.date': 'dic. 2024',
    'post.5.t': '¿Qué es un microfrontend y por qué debes conocerlo?',
    'post.5.d': 'La introducción a microfrontends que me hubiera gustado leer primero.',

    'k.projects': '05 — Proyectos',
    'projects.h2': 'Lo que he construido en abierto',
    'projects.note': 'Mi trabajo profesional vive en repositorios privados. Estos son proyectos personales y académicos.',
    'projects.all': 'Todos los repositorios en GitHub ↗',
    'proj.visit': 'Ver sitio ↗',
    'proj.code': 'Ver código ↗',
    'proj.front': 'Frontend ↗',
    'proj.back': 'Backend ↗',
    'proj.1t': 'Sitio del CLIR Lab',
    'proj.1d': 'Sitio del grupo Computational Learning and Imaging Research, construido y mantenido sobre Joomla. En producción.',
    'proj.2t': 'FitFunWear',
    'proj.2d': 'E-commerce full-stack desarrollado en equipo de tres: catálogo de más de 200 productos sobre un esquema relacional, vistas renderizadas en servidor y panel de administración.',
    'proj.3t': 'Manage Clients',
    'proj.3d': 'Aplicación CRUD de gestión de clientes hecha para recorrer la Composition API de Vue 3 de punta a punta.',
    'proj.4t': 'Marvel App',
    'proj.4d': 'Explorador de personajes de Marvel con su propia capa de API en Node.js frente a la API pública de Marvel.',
    'proj.5t': 'App de datos COVID-19',
    'proj.5d': 'Dashboard que consume un dataset público de la pandemia y lo grafica por país.',
    'proj.6t': 'Blog: Angular + API en Node',
    'proj.6d': 'Frontend en Angular contra una API RESTful en Node.js — un ejercicio temprano de separar bien las dos capas.',

    'k.edu': '06 — Formación',
    'edu.h2': 'Formación, certificaciones e idiomas',
    'edu.formal': 'Formación académica',
    'edu.certs': 'Certificaciones',
    'edu.langs': 'Idiomas',
    'edu.1t': 'Licenciatura en Ciencias de la Computación',
    'edu.2t': 'Desarrollo Web Full Stack',
    'edu.2w': 'abr. 2021 — oct. 2021',
    'edu.3t': 'Lengua y literatura inglesa',
    'edu.3w': 'oct. 2022 — ago. 2024',
    'lang.es': 'Español',
    'lang.es.lvl': 'Nativo',
    'lang.en': 'Inglés',
    'lang.en.lvl': 'Competencia profesional',
    'lang.en.cert': 'certificado CIL UADY ↗',
    'cert.link': 'certificado ↗',
    'cert.letter': 'carta ↗',
    'cert.part1': 'certificado I ↗',
    'cert.part2': 'certificado II ↗',
    'badge.link': 'insignia ↗',
    'cert.credly': 'Verificar en Credly ↗',
    'credly.profile': 'Todas mis insignias en Credly ↗',
    'cert.aws.date': 'Emitido jul. 2025 · vigente a jul. 2028',
    'cert.py.date': 'Emitido ago. 2022',
    'cert.ensa.date': 'Emitido feb. 2022',
    'cert.iot.date': 'Emitido ago. 2020',
    'cert.net.date': 'Emitido jul. 2020',
    'cert.cyber.date': 'Emitido jun. 2020',
    'cert.web': 'Introducción al Desarrollo Web I y II',
    'cert.soft': 'Habilidades y competencias clave para el mundo profesional',
    'cert.soft.org': 'Santander Universia · ANUIES · Fundación Educación Superior-Empresa',
    'edu.more': 'Voluntariado, talleres y certificados anteriores',
    'misc.1t': 'Tallerista — Festival Matemático',
    'misc.2t': 'Tallerista — Feria de Ciencia y Tecnología',
    'misc.3t': 'Instructor de taller de matemáticas',
    'misc.3o': 'Consulado de EE. UU. y Ayuntamiento de Mérida · ' +
      '<a href="./img/others/ConsulUSA.pdf" target="_blank" rel="noopener">certificado ↗</a>',
    'misc.4t': 'Consejero alumno, Consejo Académico',
    'misc.5t': 'Networking Academy Learn-A-Thon 2020',
    'misc.6t': 'Prácticas profesionales',
    'misc.7t': 'Fundamentos de Git y GitHub · Bootstrap · HTML y CSS · Cómo crear páginas web',
    'misc.7l': 'páginas web ↗',

    'k.contact': '07 — Contacto',
    'contact.h2': 'Hablemos',
    'contact.lede': 'Abierto a conversar sobre arquitectura frontend, liderazgo técnico o algún ' +
      'problema interesante en el que estés atorado. La vía más rápida es el correo.',

    'foot.loc': 'Mérida, Yucatán, México',
    'foot.print': 'Guardar como PDF',
    'foot.src': 'Código fuente'
  };

  var PAGE_TITLE = {
    en: 'Diego Gongora — Frontend Tech Lead',
    es: 'Diego Gongora — Frontend Tech Lead'
  };

  /* Accessible names for controls that have no visible text. These are not in
     the data-i18n dictionary because they live in attributes, not content —
     without them a Spanish screen-reader user hears English labels on a
     document declared as lang="es-MX". */
  var A11Y = {
    en: {
      nav: 'Sections',
      menu: 'Menu',
      lang: 'Switch to Spanish',
      toDark: 'Switch to dark theme',
      toLight: 'Switch to light theme'
    },
    es: {
      nav: 'Secciones',
      menu: 'Menú',
      lang: 'Cambiar a inglés',
      toDark: 'Cambiar a tema oscuro',
      toLight: 'Cambiar a tema claro'
    }
  };

  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private mode */ } }
  };

  /* ══════════════════════════════════════════════════════════════════════
     2. Language
     ══════════════════════════════════════════════════════════════════════ */
  /* Looked up before applyLang runs — it labels all of them. */
  var langBtn  = $('#langToggle');
  var themeBtn = $('#themeToggle');
  var burger   = $('#burger');
  var links    = $('#navLinks');

  var nodes = $$('[data-i18n]');
  var EN = {};                                   // cache of the shipped English

  nodes.forEach(function (el) {
    EN[el.getAttribute('data-i18n')] = el.innerHTML;
  });

  function currentLang() {
    return document.documentElement.lang.indexOf('es') === 0 ? 'es' : 'en';
  }

  function currentTheme() {
    var set = document.documentElement.getAttribute('data-theme');
    if (set) { return set; }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  /* The theme button's label depends on both the language and which way the
     toggle will go, so it is derived rather than set in one place. */
  function labelTheme() {
    var l = A11Y[currentLang()];
    themeBtn.setAttribute('aria-label', currentTheme() === 'dark' ? l.toLight : l.toDark);
  }

  function applyLang(lang) {
    var dict = lang === 'es' ? ES : EN;
    nodes.forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      var v = dict[k];
      if (v === undefined && lang === 'es') { v = EN[k]; }   // fall back, never blank
      if (v !== undefined) { el.innerHTML = v; }
    });

    document.documentElement.lang = lang === 'es' ? 'es-MX' : 'en';
    document.title = PAGE_TITLE[lang];

    var opts = $$('.tgl__opt', langBtn);
    if (opts.length === 2) {
      opts[0].classList.toggle('is-on', lang === 'en');
      opts[1].classList.toggle('is-on', lang === 'es');
    }

    var l = A11Y[lang];
    langBtn.setAttribute('aria-label', l.lang);
    links.setAttribute('aria-label', l.nav);
    burger.setAttribute('aria-label', l.menu);
    labelTheme();

    store.set('lang', lang);
  }

  var initialLang = store.get('lang');
  if (!initialLang) {
    initialLang = /^es\b/i.test(navigator.language || '') ? 'es' : 'en';
  }

  /* ══════════════════════════════════════════════════════════════════════
     3. Theme
     ══════════════════════════════════════════════════════════════════════ */
  var savedTheme = store.get('theme');
  if (savedTheme === 'dark' || savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  applyLang(initialLang);          // after the theme, so labelTheme() is right

  langBtn.addEventListener('click', function () {
    applyLang(currentLang() === 'es' ? 'en' : 'es');
  });

  themeBtn.addEventListener('click', function () {
    document.documentElement.setAttribute('data-theme', currentTheme() === 'dark' ? 'light' : 'dark');
    store.set('theme', currentTheme());
    labelTheme();
  });

  /* ══════════════════════════════════════════════════════════════════════
     4. Mobile nav
     ══════════════════════════════════════════════════════════════════════ */

  /* Opening the nav lives in the inline block in index.html, so that the
     collapsed state and its toggle can never ship apart. What is left here is
     purely additive: if this file never loads, the nav still opens and closes,
     it just does not auto-close. */
  function closeNav() {
    links.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  }

  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { closeNav(); }
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeNav(); }
  });

  /* ══════════════════════════════════════════════════════════════════════
     5. Sticky border, read progress, scroll spy
     ══════════════════════════════════════════════════════════════════════ */
  var nav      = $('#siteNav');
  var progress = $('#progress');
  var sections = $$('main section[id]');
  var navMap   = {};
  $$('#navLinks a').forEach(function (a) { navMap[a.getAttribute('href').slice(1)] = a; });

  var ticking = false;
  function onScroll() {
    if (ticking) { return; }
    ticking = true;
    requestAnimationFrame(function () {
      var y = window.scrollY || window.pageYOffset;

      nav.classList.toggle('is-stuck', y > 8);

      var max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.setProperty('--p', (max > 0 ? (y / max) * 100 : 0) + '%');

      var mid = y + window.innerHeight * 0.32;
      var active = null;
      sections.forEach(function (s) {
        if (s.offsetTop <= mid) { active = s.id; }
      });
      for (var id in navMap) {
        if (Object.prototype.hasOwnProperty.call(navMap, id)) {
          navMap[id].classList.toggle('is-active', id === active);
        }
      }

      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  /* ══════════════════════════════════════════════════════════════════════
     6. Reveal on scroll
     ══════════════════════════════════════════════════════════════════════ */
  var revealables = $$('.sec__kicker, .sec__h2, .sec__note, .focus, .about__main, .tl__co, .skl, .post, .proj, .edu__col, .contact__lede, .mailto');
  if ('IntersectionObserver' in window) {
    revealables.forEach(function (el) { el.setAttribute('data-reveal', ''); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    revealables.forEach(function (el) { io.observe(el); });
  }

  /* ══════════════════════════════════════════════════════════════════════
     7. Odds and ends
     ══════════════════════════════════════════════════════════════════════ */
  $('#year').textContent = String(new Date().getFullYear());

  $('#printBtn').addEventListener('click', function () { window.print(); });
}());
