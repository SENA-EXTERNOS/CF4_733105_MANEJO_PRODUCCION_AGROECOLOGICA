<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Poblaciones asociadas al cultivo
    .bg_img_01.mb-5
      .row.justify-content-center
        .col-xl-8

          .mt-5.pt-5.px-5
            .row
              p.mb-2  Cuando hablamos de agricultura ecológica decimos que es un sistema de producción donde integra un manejo apropiado del suelo, aire y agua y las actividades de explotación agrícola como riego, tratamientos y labores.  
              .cajon.color.p-4.mb-1
                p El control de organismos causantes de enfermedades y plagas es uno de los grandes retos que tienen los productores y la idea es hacer que estas hagan el menor daño económico posible utilizando métodos apropiados para causar el menor impacto al medio ambiente.  
              p.mb-1 Se trata además de incluir dentro de los cultivos,  poblaciones de organismos y microorganismos que ayuden a disminuir la influencia de las enfermedades y plagas, además de algunas plantas que sirven como repelentes. 

               
        .col-xl-4.d-none.d-xl-block
          figure
            img(src='@/assets/curso/temas/t3/personaje.svg', alt="")
    h2 Principales grupos de artrópodos asociados al cultivo

    
    .row.py-5.justify-content-center.align-items-center.mt-3
      .col-lg-8
        .bloque-texto-b.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 Los insectos conforman un componente fundamental en los ecosistemas agrícolas. Algunos se consideran plagas por los perjuicios que causan a los cultivos, y son los que mayor atención reciben. Muchos visitan flores y participan de la polinización, una importantísima contribución que a menudo no valoramos. 
            br
            p <b style="margin-left: 0%;">(Zumbado & Jimenez, 2018)</b>.
            i.fas.fa-quote-right

    .row.py-5.justify-content-center.align-items-center
      p.mb-4 Los insectos benéficos son aquellos que contribuyen con el buen desarrollo y crecimiento de las plantas mejorando los resultados económicos de los productos, son auto reguladores de la naturaleza además contribuyen con el control natural de plagas. El uso del control químico de las plagas es útil y rentable, pero perjudican el medio ambiente.  Algunos de ellos son: 
      
      .col-lg-6
        ImagenInfografica.color-primario
          template(v-slot:imagen)
              .row.justify-content-center.align-items-center
                img(src='@/assets/curso/temas/t3/img1.svg')

          .tarjeta.bgr-info.p-3(x="6%" y="92.6%" numero="+")
            h5 Mariquitas
            p Insectos que poseen colores atractivos, por naturaleza son depredadores de ácaros y pulgas, que causan daños a los cultivos, de esta manera se consideran controladores biológicos.

          .tarjeta.bgr-info.p-3(x="24.5%" y="92.6%" numero="+")
            h5 Las abejas
            p Catalogadas como uno de los insectos con mayor importancia; se dice que sin ellos desaparecería todo ser vivo de la tierra, son los encargados de polinizar haciendo posible la producción de semillas y flores.

          .tarjeta.bgr-info.p-3(x="43.2%" y="92.6%" numero="+")
            h5 Las avispas
            p Son grandiosas controladoras naturales, atacan las plagas desde su inicio, consumen larvas e insectos dañinos.

          .tarjeta.bgr-info.p-3(x="64.5%" y="92.6%" numero="+")
            h5 La mantis religiosa
            p Feroz depredador, actuando sobre cualquier insecto, por esta razón, se debe ser prudente, con el número de estos dentro del cultivo, ya que también ataca a los organismos benéficos.

          .tarjeta.bgr-info.p-3(x="82.8%" y="92.6%" numero="+")
            h5 Las hormigas
            p Algunas especies actúan como buen control biológico, sobre gusanos y saltamontes.

    
    .row.py-5.justify-content-center.align-items-center.mb-4
      .col-lg-8
        h3 Enfermedades de las plantas
        p Es la entrada de organismos patógenos al interior y son causantes de infecciones, el aire también puede transportar toxinas que afectan el funcionamiento, condiciones desfavorables del ambiente y por ultimo las que son provocadas por la   deficiencia de nutrientes que faltantes en el suelo producto de tratamientos de mala calidad, podemos decir que estas afectaciones por lo general son ocasionadas por organismos como virus, hongos y bacterias. 
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            p El mecanismo de transmisión se realiza mediante un insecto plaga que lo llamamos vector estos son portadores de los microrganismos e infectan a la planta cuando perforan la planta para alimentarse de la savia. Dentro de los agentes patógenos encontramos:
      .col-lg-3
        figure(style="margin-top:-36px")
          img(src='@/assets/curso/temas/t3/bacteria.svg', alt="")
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-2
        figure
          img(src='@/assets/curso/temas/t3/hongos.svg' alt='AvatarTop')
      .col-lg-8
        .p-4
          h2 Hongos
          p Son los causales de los problemas agrícolas más típicos, por lo general siempre buscan donde hospedarse para poder sobrevivir atacan las estomas y principalmente las heridas, son fáciles de identificar porque forman manchas de diversos colores formando necrosis y se reproducen por medio de las esporas y con la ayuda de las ráfagas de viento.
          p Los síntomas de una infección fúngica son crecimiento anormal, exfoliación, podredumbre, antracnosis, úlceras, rizos en las hojas y verrugas.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-2
        figure
          img(src='@/assets/curso/temas/t3/bacterias.svg' alt='AvatarTop')
      .col-lg-8
        .p-4
          h2 Bacterias
          p Son incapaces de producir su propia energía y para poderse sostener necesitan de un hospedaje, al igual que los hongos aprovechan las heridas para poder introducirse, las lecciones casi siempre son causadas por insectos que buscan alimentarse de la savia de la planta y el uso de las herramientas agrícolas. Biológicamente estos microorganismos permanecen de maneras inactivas o latentes hasta que se dan las condiciones favorables para poder desarrollarse.
          p Dentro de los síntomas encontramos marchitamiento, necrosis, y malos olores de las zonas afectadas.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-2
        figure
          img(src='@/assets/curso/temas/t3/virus.svg' alt='AvatarTop')
      .col-lg-8
        .p-4
          h2 Virus
          p Son los enemigos más críticos de las plantas al igual que los anteriores necesitan de un organismo hospedador afectan el crecimiento directamente produciendo enanismo, malformaciones y decoloración.
    br
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-2
        figure
          img(src='@/assets/curso/temas/t3/nematodos.svg' alt='AvatarTop')
      .col-lg-8
        .p-4
          h2 Nematodos
          p Son los de mayor tamaño, gusanos redondos parasitarios, viven en el suelo y afectan principalmente la raíz actúan allí impidiendo que la planta tome los nutrientes produciendo desnutrición, las hojas se secan y declive general.           
    
    .row.mt-5
      h3 Identificación y monitoreo
      h4.mt-3 Monitoreo de poblaciones en el cultivo

    .row.justify-content-around.align-items-center 
      .col-lg-8
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            p La finalidad del monitoreo es saber el estado sanitario en que se encuentra el cultivo. Como anteriormente expresamos para poder tomar decisiones acerca del control de plagas y enfermedades es saber el estado sanitario de la plantación. Conocer el número de individuos por unidad de referencia en caso de plaga y en caso de enfermedad la cantidad de plantas con síntomas severos. Cuando son plantaciones grandes se toman pequeñas porciones para hacer el estudio y se recomienda que sea inspección directa. El dato obtenido es estimado al nivel real de dicha plaga.
      .col-lg-4
        figure(style="margin-top:-36px")
          img(src='@/assets/curso/temas/t3/cultivo.svg', alt="")
    .row.py-5.align-items-center.align-items-center
        .bloque-texto-b.p-4
          h3 ¿Por qué hacer el monitoreo?
          .bloque-texto-b__texto
            p La finalidad es detectar a tiempo los problemas para poder resolverlos y evitar que los daños sean graves sobre todos para cultivos de ciclo corto para tomar decisiones oportunas antes que sea demasiado tarde. El monitoreo mal hecho en los cultivos representa pérdidas significativas en las plantaciones. Esta técnica de igual manera nos permitirá un uso eficiente en los productos para combatir plagas teniendo en cuenta que debemos ser amigables con el ambiente al usar dichos artículos. Resulta útil también para los insectos benéficos que actúan como controladores de plagas, es necesario saber qué tipo de población asociada tenemos para realizar prácticas que favorezcan a estos aliados.
        .bloque-texto.p-4.mb-4
          .col-md-8
            h3.mb-4 Herramientas de monitoreo
            ul.lista-ul--color
              li 
                i.fas.fa-snowflake
                | Una lupa para observar insectos pequeños o huevos de insectos.
            ul.lista-ul--color
              li 
                i.fas.fa-snowflake
                | Un frasco o bolsa plástica para recolectar especímenes de insectos para examinarlos después.
            ul.lista-ul--color
              li 
                i.fas.fa-snowflake
                | Cinta indicadora o tiras de tela para marcar las plantas dañadas por insectos.
            ul.lista-ul--color
              li 
                i.fas.fa-snowflake
                | Un lápiz y cuaderno para anotar las observaciones.


    .row.py-5
      .col-lg-8
        p Es necesario recorrer toda la plantación para monitorear una vez por semana, en busca de señales de plagas, teniendo en cuenta en la etapa de desarrollo que se encuentre el cultivo y el periodo de crecimiento. No hay necesidad de revisar cada planta, se escogen áreas al azar la idea es examinar la parte superior e inferior de la planta posiblemente encontraremos más de dos plagas, el número de plantas escogidas para la inspección depende del tipo de cultivo.
      .col-lg-4
        figure(style="margin-top:-36px")
          img(src='@/assets/curso/temas/t3/flores.svg', alt="")
    .row.justify-content-center.align-items-center
      .col-lg-10  
        .bloque-texto-e.color-a.pt-4.px-5.mb-5
          p Importante reconocer si la enfermedad es producida por biótico como insectos, ácaros, entre otras o por un factor abiótico como las condiciones climáticas o deficiencia de nutrientes en el suelo. Se recomienda hacer anotaciones, en un mapa de cultivo marcar donde ocurren los problemas, tomar nota de cada monitoreo como fechas, etapa del cultivo y condiciones climáticas.
          br
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10 
        h3 Pasos para combatir una enfermedad o plaga
    
    .row.justify-content-center.align-items-center.mb-4.mt-3   
      .col-lg-8
        figure(style="margin-top:-36px")
            img(src='@/assets/curso/temas/t3/img1.jpg', alt="")
    p La frecuencia del monitoreo se realiza dependiendo del ciclo de vida y la capacidad reproductiva de la plaga, en general se debe mantener un monitoreo constante, pero si encontramos las siguientes situaciones debemos aumentar la frecuencia. Cuando la plaga afecta el fruto, en periodos de brotación y próximos a la cosecha, temperaturas altas y cuando realizamos prácticas de control para medir la efectividad.
    p A continuación, podrá ver en un video en donde se abordan los aspectos mas importantes de este tema
    
    .row.mt-5
      h3 Manejo ecológico de plagas y enfermedades (MEPE)
      p El manejo ecológico del cultivo, el control biológico, las medidas y las regulaciones que se le aplican a las plagas y enfermedades, son fundamentales para un adecuado proceso. A continuación, podrá ver un video donde se abordan los aspectos más importantes sobre este tema:

    figure.mb-4
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/0eoL8DTl7P8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    h3.mt-3 Biocontroladores  
    p Son organismos vivos, su función es actuar como repelente siendo capaces de impedir el desarrollo de cuerpos que causen el mal funcionamiento de las plantas.  
    TabsC.mb-4
      .py-5.py-md-4(titulo="Tipos de biocontroladores")
          .row.py-4.justify-content-center.align-items-center
            .col-md-5.mb-4.mb-md-0
              p Son clasificados de la siguiente forma:
              ul.lista-ul--color
                li 
                  i.fas.fa-snowflake
                  | Biocontroladores a base de microorganismos entomopatógenos.
                  | Pueden se bacterias, hongos o virus su función es controlar patógenos, para actuar deben ser ingeridos se alojan en el sistema digestivo atacan las células del intestino medio causan desnutrición y posterior muerte del insecto.
              ul.lista-ul--color
                li 
                  i.fas.fa-snowflake
                  p.texto-azul Biocontroladores a base de microorganismos antagónicos. De igual manera las encontramos como bacterias, hongos o virus, son habitantes naturales del suelo resultan muy efectivos en el control de enfermedades pos cosecha, su actuar es causar daños en la anatomía, restringiendo las actividades de los organismos.
            .col-md-3
              figure
                img(src='@/assets/curso/temas/t3/pest1.svg')
      .py-3.py-md-4(titulo="Aplicación de los biocontroladores")
        .row.py-4.justify-content-center.align-items-center
          .col-md-11
            ul.lista-ul--color
              li 
                i.fas.fa-snowflake
                | La dilución debe realizarse en agua limpia y aplicarse directamente al follaje de las plantas que se encuentren afectados.
            ul.lista-ul--color
              li 
                i.fas.fa-snowflake
                | La efectividad del biocontrolador depende de la concentración que este tenga y la cantidad de agua. 
            ul.lista-ul--color
              li 
                i.fas.fa-snowflake
                | Se debe usar una bomba de aspersión la cual debe estar bien limpia sin residuos de otros productos químicos.
            ul.lista-ul--color
              li 
                i.fas.fa-snowflake
                | Para mayor efectividad se deben aplicar en las horas de la mañana o en la tarde para evitar los rayos del sol alteren la efectividad.
            ul.lista-ul--color
              li 
                i.fas.fa-snowflake
                | Para alargar la vida del producto usar adherentes.
            ul.lista-ul--color
              li 
                i.fas.fa-snowflake
                | El ph del agua usado para la disolución debe ser ente 5 y 6.
            ul.lista-ul--color
              li 
                i.fas.fa-snowflake
                | La persona que realiza la aplicación debe tener los medios de protección de boca, ojos oídos y manos.

      .py-3.py-md-4(titulo="Biofertilizantes")
        .row.py-4.justify-content-center
          .col-md-5
            p Son hechos con la mezcla de varios microorganismos benéficos, suministrando nutrientes a las plantas. Dentro de las ventajas al usar este tipo de productos encontramos, bajamos los costos de producción, protección del ambiente y aumento de la biodiversidad en el suelo, se clasifican de la siguiente manera:
            ul.lista-ul--color
              li 
                i.fas.fa-snowflake
                | Fijadores de nitrógeno.    
            ul.lista-ul--color
              li 
                i.fas.fa-snowflake
                | Solubilizadores de fósforo.
            ul.lista-ul--color
              li 
                i.fas.fa-snowflake
                | Captadores de fósforo.
            ul.lista-ul--color
              li 
                i.fas.fa-snowflake
                | Promotores de crecimiento vegetal
          .col-md-3
            figure
              img(src='@/assets/curso/temas/t3/pest3.svg')
    
    .row.mt-5
      h3 Normatividad.
    p Normatividad en producción ecológica
    .row.justify-content-center
        .col-lg-3 
         .bloque-texto-g.pt-4.px-5.mb-5
            h4 NORMA
        .col-lg-9  
          table
            tr
              th Resolución 187 de 2006.
              td Reglamento para la producción Orgánica.
            tr
              th Resolución MADR 148 de 2004.
              td Sello de Alimento Ecológico.

    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-lg-10  
        .bloque-texto-e.color-a.pt-4.px-5.mb-5
          p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.
          br

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
