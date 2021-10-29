export default {
  global: {
    componenteFormativo: 'Seguimiento al servicio funerario',
    descripcionCurso:
      'En el presente componente formativo podrá conocer los fundamentos básicos y protocolos para la atención adecuada de los clientes de servicios funerarios según sus necesidades y requerimientos, encaminados a ofrecer la mejor atención, según las costumbres y ritos de cada deudor.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: ' Protocolo funerario',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Etiqueta y protocolo empresarial',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Protocolo funerario en la atención del servicio',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Protocolos y comportamientos de asistencia a un funeral',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'El duelo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Cadena de custodia',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      /*{
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },*/
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Bellver, E. (2020). ',
      link: 'https://depsicologia.com/la-escucha-activa/',
    },
    {
      referencia: 'Comercio, S. d. (s.f.). ',
      link: 'https://www.sic.gov.co/que-es-la-proteccion-al-consumidor',
    },
    {
      referencia:
        'Conducta en los velorios - Julio Cortázar - Ciudad Seva - Luis López Nieves. (s. f.). ',
      link: 'https://ciudadseva.com/texto/conducta-en-los-velorios/',
    },
    {
      referencia:
        'Corte Suprema de Justicia de Colombia (2013). Cadena de Custodia-Concepto, finalidad conformación y forma de realizar la cadena de custodia. ',
      link:
        'https://cortesuprema.gov.co/corte/wp-content/uploads/relatorias/pe/spa/CONCEPTO.pdf',
    },
    {
      referencia: 'Definicion, C. (3 de febrero de 2021). ',
      link: 'https://conceptodefinicion.de/luto/',
    },
    {
      referencia: 'Doctors, T. (s.f.). ',
      link: 'https://www.topdoctors.es/diccionario-medico/asertividad',
    },
    {
      referencia: 'Equipo editorial, E. (2021). Ritual. ',
      link: 'https://concepto.de/ritual/',
    },
    {
      referencia: 'Equipo editorial, E. (2021). ',
      link: 'https://concepto.de/protocolo/',
    },
    {
      referencia:
        'GCFAprendeLibre. (2019). Qué comportamiento debo tener en el trabajo | Cómo mejorar el ambiente laboral. ',
      link: 'https://www.youtube.com/watch?v=j3PQ0xJ6V4g&t=53s',
    },
    {
      referencia:
        'Guillem, V., Romero, R., & Ramírez, E. (s. f.). Manifestaciones del duelo. Recuperado 2021, de ',
      link:
        'https://seom.org/seomcms/images/stories/recursos/sociosyprofs/documentacion/manuales/duelo/duelo08.pdf',
    },
    {
      referencia:
        'Fiscalía General de la Nación. (2018). Manual del Sistema de Cadena de Custodia. ',
      link:
        'https://www.fiscalia.gov.co/colombia/wp-content/uploads/MANUAL-DEL-SISTEMA-DE-CADENA-DE-CUSTODIA.pdf',
    },
    {
      referencia: 'Imaginario, A. (s.f.). Obtenido de Significados: ',
      link: 'https://www.significados.com/cultura/',
    },
    {
      referencia:
        'KÜBLER, E., & Kessler, D. (2015). Sobre el duelo y el dolor. Recuperado 2021, de  ',
      link:
        'https://www.planetadelibros.com/libros_contenido_extra/32/31277_Sobre_el_duelo_y_el_dolor.pdf',
    },
    {
      referencia:
        'Ley 906 de 2004 [Congreso de Colombia].  "Por la cual se expide el Código de Procedimiento Penal. (Corregida de conformidad con el Decreto 2770 de 2004). ',
      link:
        'https://www.defensoria.gov.co/public/Normograma%202013_html/Normas/Ley_906_2004.pdf',
    },
    {
      referencia:
        'Manual del sistema de cadena de custodia. (2018). Fiscalia General de la Nacion. Obtenido de ',
      link:
        'https://www.fiscalia.gov.co/colombia/wp-content/uploads/MANUAL-DEL-SISTEMA-DE-CADENA-DE-CUSTODIA.pdf',
    },
    {
      referencia: 'Marino, P. (s.f.). Art Social. Obtenido de  ',
      link: 'https://www.artsocial.cat/articulo/la-comunicacion-empatica/',
    },
    {
      referencia: 'Ministerio de Comercio, I. y. (2011). Obtenido de ',
      link:
        'https://www.mincit.gov.co/minindustria/estrategia-transversal/regulacion/proteccion-del-consumidor',
    },
    {
      referencia: 'Pastor, P. (s.f.). Fundacion MCL. Obtenido de ',
      link: 'https://www.fundacionmlc.org/trastornos-fisicos-duelo/',
    },
    {
      referencia: 'Patricio, A. D. (2017). Scielo. Obtenido de ',
      link:
        'https://scielo.isciii.es/scielo.php?script=sci_arttext&pid=S0211-57352017000100008',
    },
    {
      referencia:
        'Posada, S. R. (2005). El manejo del duelo. Bogotá, Colombia.: Grupo editorial Norma. ',
    },
    {
      referencia:
        'Ritos y cultos funerarios relativos a las necesidades mortuorias, Capítulo 7. Gestión de la actividad de Tanatopraxia.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/45224?page=279',
    },
    {
      referencia: 'Significados. (s.f.). Obtenido de ',
      link: 'https://www.significados.com/ritual/',
    },
    {
      referencia: 'Tres, M. p. (s.f.). Obtenido de ',
      link:
        'https://misprimerostres.org/categoria/cuidados-madre/empatia-secreto-comunicacion-asertiva/',
    },
    {
      referencia:
        'Worden, W. (1997). El tratamiento del duelo: asesoramiento psicológico y terapia. Paidos.  ',
    },
  ],
  glosario: [
    {
      termino: 'Duelo',
      significado:
        'Es el proceso psicológico que se afronta luego de sufrir una pérdida.',
    },

    {
      termino: 'Cadena de custodia',
      significado:
        'Se entiende como el conjunto de procedimientos que aseguran y demuestran la autenticidad de los elementos materiales probatorios y evidencia física dentro de un proceso judicial.',
    },

    {
      termino: 'Protocolo',
      significado:
        'Atiende al conjunto de reglas y normas de cortesía que rigen los actos sociales, las cuales han sido establecidas por costumbres.',
    },
    {
      termino: 'Rito',
      significado:
        'Son costumbres o actos que se repiten de forma invariable en las ceremonias religiosas.',
    },
  ],
  complementario: [
    {
      texto:
        'GCFAprendeLibre. (2019). Qué comportamiento debo tener en el trabajo | Cómo mejorar el ambiente laboral [Archivo de vídeo]. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=j3PQ0xJ6V4g&t=53s',
    },
    {
      texto:
        'Conducta en los velorios - Julio Cortázar - Ciudad Seva - Luis López Nieves. (s. f.). Recuperado 28 de septiembre de 2021, de ',
      tipo: 'Texto digital',
      link: 'https://ciudadseva.com/texto/conducta-en-los-velorios/',
    },
    {
      texto:
        'Manifestaciones del duelo. Instituto Valenciano de Oncología. España',
      tipo: 'Texto Digital',
      descarga: '/downloads/duelo08.pdf',
    },
    {
      texto:
        'Fiscalía General de la Nación. (2018). Manual del Sistema de Cadena de Custodia. ',
      tipo: 'Texto digital',
      descarga: '/downloads/MANUAL-DEL-SISTEMA-DE-CADENA-DE-CUSTODIA.pdf',
    },
    {
      texto:
        'Ritos y cultos funerarios relativos a las necesidades mortuorias, Capítulo 7. Gestión de la actividad de Tanatopraxia.',
      tipo: 'Texto digital',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/45224?page=279',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina María Restrepo Zapata',
        cargo: 'Experta temática',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Jhacesiz Mary Hincapié Atehortúa',
        cargo:
          'Instructora (EPC) - Líder desarrollo curricular servicios personales',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Adriana María Bustamante Cataño',
        cargo: 'Profesional de diseño y producción curricular',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Cristian Metaute Medina',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Maryuri Agudelo Franco',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Jesus Antonio Vecino Valero'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nelson Iván Vera Briceño',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Andres Ayala Angarita',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
