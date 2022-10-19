<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Sistemas de riego
    p El riego es una técnica que consiste en suministrar agua al suelo para que las plantas realicen su desarrollo dependiendo de la necesidad se puede aplicar en forma de gotas o por aspersión en finas gotas.
    p Los emisores varían según tipo y modelo, desde los tubos perforados, o micro tubos a grandes diseños, por lo cual los sistemas de riego se basan en el tipo de emisor utilizado.
    .row.justify-content-center.align-items-center
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/t2/img1.svg')})`}")
          .bloque-texto-g__texto.p-4
            p.mb-0 Para elegir  los métodos de riego, es necesario tener en cuenta diversas variables como la distribución del agua en el suelo, características topográficas, tipo de cultivo, disponibilidad de agua, costos y tecnología.
    <br>
    <br>
    .row.mb-4
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h1 Métodos superficiales
              p Este método debemos asegurar que  el agua penetre la superficie a intervalos de tiempo, hasta que la lámina de agua alcance un espesor adecuado para su manejo,  permitiendo que el agua entre en el suelo a medida que esta escurre sobre el terreno. 
              p A continuación se explicara los métodos de riego superficiales que más usados en las explotaciones agrícolas:
              p Existen dos tipos de Métodos superficiales para riego que se describen a continuación:
              h4 Por surcos y por Inundación
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t2/t1.jpg')})`}")          
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h1 Método por surcos
              p También es denominado como riego por gravedad y el cual consiste en colocar el agua en la cabecera de las zanjas y lograr que el líquido avance hasta el extremo más bajo. Factores importantes a tener en cuenta son el relieve y la pendiente del terreno. Es ideal para todo tipo de suelos la infiltración sea buena y funciona de manera eficiente en terrenos llanos.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t2/t2.jpg')})`}")
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h1 Método por inundación
              p Denominado también superficial o aniego, sistema tradicional y poco tecnificado y el cual consiste en dejar escurrir el agua desde canales, los cuales se trazan por los sectores más altos. Se humedece el suelo al tiempo que el agua cubre la superficie. Se deben tener en cuenta las características topográficas configuran las variables de trazado y las dimensiones de las melgas.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t2/t3.jpg')})`}")
    .row.mb-4
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h1 Métodos por aspersión
              p Es un sistema de riego a presión que implica la aplicación del agua en forma de lluvia más o menos intensa y uniforme sobre la parcela, con el fin de que el agua se infiltre en el mismo punto donde cae
              p El agua es asperjada, es decir el caudal es suministrado en innumerables gotas pequeñas de agua, las cuales penetran el suelo, al tiempo que se aplica.<br><br><br><br><br><br><br>
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t2/t4.jpg')})`}")
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h1 Método por goteo
              p Simplemente consiste en aplicar el agua en gotas, directamente en el área de cultivo. Funciona de la siguiente manera el agua se infiltra al mismo tiempo que se aplica, de manera continua o a intervalos. Para la efectividad de este es necesaria la aplicación de la tecnología para determinar la frecuencia y precisar la cantidad de agua que se debe aplicar.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t2/t5.jpg')})`}")
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h1 Método por goteo
              p a. Distribución del agua, obras de instalación que transportan el agua desde la captación hasta el cultivo.
              p b. Sistema de aforo, permite controlar con exactitud el caudal del agua, que debemos aplicar por sistema de riego.
              p c. Sistemas de aplicación, que involucra sifones, caños, compuertas, válvulas de alfalfa, tuberías con compuertas, mangueras.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t2/t6.jpg')})`}")
    separador
    .titulo-segundo.color-secundario
      h2 2.1. Métodos y criterios de selección
    p Para seleccionar el método de riego es necesario tener en cuenta del tipo de cultivo, tipo de suelo, la topografía, la economía, el clima, la mano de obra, así como el manejo del riego y parcela. Y tener en cuenta el grado de sistematización del terreno.

    .row.py-5.justify-content-center.align-items-center
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/t2/acor1.svg', alt="")
        .col-lg-8
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
            .row(titulo="Cultivo").py-5.justify-content-center.align-items-center
              .col-md-10
                p Determina el tipo de riego, pues no todos los sistemas de riego funcionan para todos los cultivos.
            .row(titulo="Topografía").py-5.justify-content-center.align-items-center
              .col-md-10
                p Dependiendo si el terreno es plano, inclinado o muy inclinado se debe estar el sistema de riego que optimice el desarrollo de la planta.
            .row(titulo="Suelo").py-5.justify-content-center.align-items-center
              .col-md-10
                p Depende de la profundidad, textura, estructura, drenaje, capacidad de almacenaje de agua y velocidad de penetración del agua.
            .row(titulo="Disponibilidad del agua").py-5.justify-content-center.align-items-center
              .col-md-10
                p Depende del caudal.
            .row(titulo="Costos").py-5.justify-content-center.align-items-center
              .col-md-10
                p Involucra costos de construcción y operación del sistema.   
    separador
    .titulo-segundo.color-secundario
      h2 2.2. Variables y equipos de medición
    p Para realizar el análisis de calidad de una fuente hídrica es necesario tener en cuenta que en ella se desarrollan procesos y actividades que reflejan el uso del recurso y se pueden evidenciar de manera cuantitativa en los siguientes parámetros:
    p Dentro de los equipos de medición y control del sistema de riego, encontramos: 

    .row.py-5.justify-content-between.align-items-start.mb-5
      .col-lg-6
        ol.lista-ol--cuadro.lista-ol--separador
            li 
              .lista-ol--cuadro__vineta
                span 1
              | Filtros, son equipos que se instalan para eliminar impurezas del agua que puedan obstruir la salida del agua a través del emisor. 
            li 
              .lista-ol--cuadro__vineta
                span 2
              | Tuberías, sistema de conducción del agua para riego. 
            li 
              .lista-ol--cuadro__vineta
                span 3
              | Accesorios en PVC, codos, T, adaptador, roscas y uniones.
            li 
              .lista-ol--cuadro__vineta
                span 4
              | Motobombas, equipo de bombeo compuesto por motor. 
            li 
              .lista-ol--cuadro__vineta
                span 5
              | Válvulas de aire, que permiten eliminar el aire del sistema de riego. 
            li 
              .lista-ol--cuadro__vineta
                span 6
              | Válvulas de paso, utilizadas para sectorizar el sistema de riego. 
            li 
              .lista-ol--cuadro__vineta
                span 7
              | Válvulas de alivio, sirve para expulsar la presión para proteger el sistema de rupturas de la tubería o daño de la bomba. 
            li 
              .lista-ol--cuadro__vineta
                span 8
              | Reductor de presión, son instalados en las tuberías secundarias, para reducir presiones altas. 
            li 
              .lista-ol--cuadro__vineta
                span 9
              | Manómetros, aparatos que ayudan a medir la presión en diferentes puntos y así poder controlar el funcionamiento del sistema. 
      .col-lg-4
          figure
            img(src='@/assets/curso/temas/t2/lista1.svg', alt="")
    h3 Variables de medición
    .row.py-5.justify-content-between.align-items-start.mb-5
      .col-lg-4
          figure
            img(src='@/assets/curso/temas/t2/lista2.svg', alt="")
      .col-lg-6
        ol.lista-ol--cuadro.lista-ol--separador
            li 
              .lista-ol--cuadro__vineta
                span 1
              | Caudal, cantidad de agua en litros que proporciona la fuente de abastecimiento en una unidad de tiempo L/s, se calcula mediante aforos, y es la variable que nos permite medir la cantidad de agua que pasa en un tiempo determinado. 
            li 
              .lista-ol--cuadro__vineta
                span 2
              | Humedad, es la cantidad de vapor de agua que se encuentra dentro del aire  
            li 
              .lista-ol--cuadro__vineta
                span 3
              | pH, coeficiente que determina la acides o alcalinidad. 
    separador
    .titulo-segundo.color-secundario
      h2 2.3. Requerimientos de riego
    .bloque-texto.pt-4.px-5.mb-5
      .row.py-5
        .col-lg-4.d-none.d-lg-block
          figure(style="margin-top:-36px")
            img(src='@/assets/curso/temas/t2/img2.svg', alt="")
        .col-lg-7
          p.mb-4 Se define como la cantidad de agua que requiere un cultivo, la cual la suplimos a través de un sistema de riego, con el  fin de garantizar las condiciones óptimas para el desarrollo de la planta. Para esto es necesario saber la demanda hídrica de la plantación y la relación con la pluviometría natural, la idea es establecer el riego complementario, con el objetivo de lograr la máxima productividad y la efectividad de las cosechas.
    separador
    .titulo-segundo.color-secundario
      h2 2.4. Drenaje
    p Sabemos que el suelo está constituido básicamente por distintas fases solida liquida y gaseosa. El equilibrio de estas permite que las semillas germinen, desarrollo óptimo de las plantas y generen buenos resultados en las cosechas. El objetivo del drenaje es disminuir los excesos de agua que se acumulan tanto en la superficie como al interior del suelo, debemos generar las condiciones óptimas de aireación para asegurar el crecimiento y desarrollo de la raíz de la planta.
    TabsC
      .py-5.py-md-4(titulo="Drenaje superficial")
        .row.py-4.justify-content-center.align-items-center
          .col-md-5.mb-4.mb-md-0
            p Consiste en realizar canales o zanjas de poca profundidad con el objetivo de eliminar los excesos de aguas lluvias o de riego de la superficie de la raíz. Para la construcción de este debemos tener en cuenta la intensidad y la duración de las lluvias, tipo de suelo, topografía y la cubierta vegetal
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t2/pest1.svg')
      .py-3.py-md-4(titulo="Drenaje subterráneo")
        .row.py-4.justify-content-center.align-items-center
          .col-md-5
            p Básicamente se usa para remover las aguas estancadas en la parte subterránea. Se usan zanjas abiertas y tubos tubos perforados enterrados.
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/t2/pest2.svg')
      .py-3.py-md-4(titulo="Tipos de drenaje")
        .row.py-4.justify-content-center
          .col-md-5
            ul.lista-ul--color
              li 
                i.fas.fa-snowflake
                | Zanjas abiertas, sirven para remover grandes volúmenes de agua y además drenar suelos arcillosos y pesados, con pendiente plana.
            ul.lista-ul--color
              li 
                i.fas.fa-snowflake
                | Drenes topo, son canales circulares subterráneos no revestidos, son usados para drenaje poco profundo y suelo arcillosos pesados.
            ul.lista-ul--color
              li 
                i.fas.fa-snowflake
                | Drenes de concreto y barro, generalmente son de 30 a 60 centímetro de longitud y de 10 a 25 centímetros de diámetro.
            ul.lista-ul--color
              li 
                i.fas.fa-snowflake
                | Tubería en plástico corrugado, utilizada para drenaje subterráneo.
          .col-md-6.mb-4.mb-md-0
            figure
             img(src='@/assets/curso/temas/t2/pest3.svg')
      .py-5.py-md-4(titulo="Beneficios del drenaje")
        .row.py-4.justify-content-center.align-items-center
          .col-lg-11
            p Básicamente se usa para remover las aguas estancadas en la parte subterránea. Se usan zanjas abiertas y tubos tubos perforados enterrados.
          .col-md-8
            ul.lista-ul--color
              li 
                i.fas.fa-snowflake
                | En suelos saturados, la falta de oxígeno evita la creación de formas utilizables de nitrógeno y azufre, debido al desarrollo limitado de bacterias aérobicas, generando bajos rendimiento en el cultivo.
            ul.lista-ul--color
              li 
                i.fas.fa-snowflake
                | Incremento de la cantidad de oxigeno disponible en el perfil de suelo.    
            ul.lista-ul--color
              li 
                i.fas.fa-snowflake
                | El favorecimiento del intercambio gaseoso 
            ul.lista-ul--color
              li 
                i.fas.fa-snowflake
                | El mejoramiento del desarrollo radicular de la planta (aumento y disponibilidad de agua y nutrientes).
            ul.lista-ul--color
              li 
                i.fas.fa-snowflake
                | Fácil acceso y movilización de la maquinaria para labores de manejo cultural del cultivo.
            ul.lista-ul--color
              li 
                i.fas.fa-snowflake
                | Mejoramiento de condiciones de salubridad del área, evitando acumulación de agua y propagación de vectores y enfermedades.
          .col-md-3.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/t2/pest4.svg')
    br
    br
    h3 Normatividad
    p Dentro de las normas establecidas para el riego de cultivos tenemos:
    p Normatividad relacionada con el riego de cultivos.  
    .row.justify-content-center
      
        .col-lg-3 
         .bloque-texto-g.pt-4.px-5.mb-5
            h4 Niveles del lenguaje
        .col-lg-9  
          table
            tr
              th Decreto 182 de 1968
              td Por el cual se reglamenta el uso de aguas, operación, conservación y mantenimiento de los distritos de riego y avenamiento
            tr
              th Decreto 2314 de 1986
              td Concesión de aguas
            tr
              th Decreto 79 de 1986
              td Conservación y protección del recurso agua
            tr
              th Resolución 000132 de 2021
              td Por la cual se adopta el manual de normas técnicas para sistemas de riego y drenaje a nivel predial
            tr
              th Decreto 3930 del 2020
              td Control y seguimiento ambiental del uso del agua y suelo para fines agropecuarios






</template>

<script>
export default {
  name: 'Tema2',
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
