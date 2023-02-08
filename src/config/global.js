export default {
  global: {
    componenteFormativo: 'Prácticas de riego y manejo de poblaciones asociadas',
    descripcionCurso:
      'El diseño e implementación del sistema de riego para cultivos, haciendo uso eficiente de los recursos, teniendo en cuenta la normativa ambiental, temas en la relación del agua-suelo-planta y clima, tipos de sistemas de riego, métodos de riego y drenaje, así como la normatividad requerida para este tipo de procedimientos. Por último, las poblaciones que causan enfermedades a los cultivos, con la finalidad de encontrar el equilibrio económico y ambiental.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
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
        titulo: 'Potencial hídrico',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Sistemas de riego',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Poblaciones asociadas al cultivo',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
  complementario: [
    {
      tema: 'Poblaciones asociadas a cultivos.',
      referencia:
        'Servicio nacional de aprendizaje SENA (2012). Agricultura ecológica: fertilización, suelo y cultivos.',
      tipo: 'otro',
      descarga:
        'file:///C:/Users/Admin/Downloads/Unidad_4_Poblaciones_asociadas_a_los_cul.pdf',
    },
    {
      tema: 'Sistemas de riego',
      referencia:
        'Programa de manejo integrado de plagas en América Central. Carrera de ciencia y producción agropecuaria. Escuela agrícola panamericana, El Zamorano, Honduras. (2012). Manual de Riego y Drenaje.',
      tipo: 'otro',
      descarga:
        'https://www.se.gob.hn/media/files/media/Modulo_5_Manual_de_Riego_y_Drenaje..pdf',
    },
    {
      tema: 'Sistemas de riego',
      referencia:
        'Universidad Nacional Experimental Politécnica de la fuerza Armada Nacional (UNEFA). (2020).  Manual de métodos de sistema de riego, guías, proyectos, investigaciones de fisiología de las plantas.',
      tipo: 'otro',
      descarga:
        'https://fundacionsuna.org/wp-content/uploads/PDF/Jaime-Lamo/MANUAL-M%C3%89TODOS-DE-SISTEMAS-DE-RIEGO.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Agua',
      significado:
        'el término agua, generalmente, se refiere a la sustancia en su estado líquido, pero la misma puede hallarse en su forma sólida llamada hielo, y en forma gaseosa denominada vapor.',
    },
    {
      termino: 'Drenaje',
      significado:
        'Eliminación natural o artificial del agua superficial y del agua subterránea de un área con exceso de agua.',
    },
    {
      termino: 'Enfermedad',
      significado:
        'alteración leve o grave del funcionamiento normal de un organismo o de alguna de sus partes debida a una causa interna o externa.',
    },
    {
      termino: 'Plaga',
      significado:
        'colonia de organismos animales o vegetales que ataca y destruye los cultivos y las plantas.',
    },
    {
      termino: 'Sistema de riego',
      significado: 'permiten suministrar el agua necesaria al cultivo.',
    },
    {
      termino: 'Suelo',
      significado: 'superficie de la corteza terrestre. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Briceño, M. F. Álvarez, U. Barahon (2012). Manual de Riego y Drenaje. Programa de Manejo Integrado de Plagas en América Central. Carrera de Ciencia y Producción Agropecuaria. Escuela Agrícola Panamericana, El Zamorano, Honduras. Consultado de:',
      link:
        'https://www.se.gob.hn/media/files/media/Modulo_5_Manual_de_Riego_y_Drenaje.pdf',
    },
    {
      referencia:
        'Ciancaglini, N. (2010). Guía para la determinación de textura de suelos por método organoléptico., pág. 10. Consultado de: ',
      link:
        'https://www.se.gob.hn/media/files/media/Modulo_5_Manual_de_Riego_y_Drenaje.pdf',
    },
    {
      referencia:
        'Jiménez, J. (2020). <em>Manual de Métodos de Sistema de Riego</em>. Universidad Nacional Experimental Politécnica de la fuerza Armada Nacional (UNEFA).',
      link:
        'https://fundacionsuna.org/wp-content/uploads/PDF/Jaime-Lamo/MANUAL-M%C3%89TODOS-DE-SISTEMAS-DE-RIEGO.pdf',
    },
    {
      referencia:
        'Ripa S., Renato y Larral D., Pilar (eds.) (2008). Manejo de plagas en paltos y cítricos [en línea]. Quillota, Chile: Versión Producciones Graficas Ltda.. Colección Libros INIA - Instituto de Investigaciones Agropecuarias. no. 23. Consultado de: ',
      link: 'https://hdl.handle.net/20.500.14001/3509.',
    },
    {
      referencia:
        'Zumbado, M., & Jiménez, D. (2018). <em>Insectos de importancia agrícola.</em>',
      link: 'http://www.mag.go.cr/bibliotecavirtual/H10-10951.pdf',
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
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
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
