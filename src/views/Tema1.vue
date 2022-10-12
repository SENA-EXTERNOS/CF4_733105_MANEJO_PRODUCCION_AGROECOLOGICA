<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Potencial hídrico
    p El éxito de la producción agrícola está reflejado en el desarrollo de productos de excelente calidad para la comercialización. Sin embargo, hay que realizar un seguimiento detallado de los recursos que intervienen en el proceso, esta vez hablaremos del agua como factor importante para garantizar alcanzar los rendimientos y resultados esperados. 
    p.mb-4 Por cierto, sabemos que el agua está involucrada en distintos sectores, es usada en diversas tareas, debemos entender que es un recurso limitado y por lo tanto debemos darle un uso eficiente. La agricultura es el sector donde más consumo hay, por lo que se ha optado por introducir la tecnología para generar alternativas de riego, uso controlado del drenaje, supervisión de las etapas de la planta y dar uso adecuado del agua en el proceso, tratado de afectar minimamente su ciclo.


    .row.py-5.justify-content-center.align-items-center
      .col-lg-5.d-none.d-lg-block
        figure(style="margin-top:-36px")
          img(src='@/assets/curso/temas/t1/agua.svg', alt="")
      
      .col-lg-6
        .titulo-segundo.color-secundario
          h2 Agua 
        p.mb-4 El agua es una sustancia líquida que no contiene olor, sabor ni color, y además es una molécula que está compuesta por dos átomos de hidrógeno y una de oxígeno las cuales están unidas mediante enlaces covalentes y en la superficie de la tierra la podemos encontrar en distintos estados, (sólido, líquido y gaseoso). 
        p.mb-4 Los estudios indican que aproximadamente el 71% de la superficie terrestre es agua, y principalmente está concentrada en los océanos siendo allí donde se concentra la mayoría de su totalidad, por otro lado, encontramos los glaciares polares que constituyen el 1.74%, las reservas subterráneas, lagos, humedad del suelo, atmósfera, embalses, ríos y seres vivos completan el porcentaje para convertirlo en el recurso más abundante del planeta tierra. 
        p.mb-4 Sin duda alguna el agua juega un papel importante para el ser humano, los animales y los sistemas de producción agrícola y pecuaria siendo necesario hacer un uso racional y un manejo sostenible de ella, dado que su escasez produce problemas de salud, perdida de las cosechas lo que genera inseguridad alimentaria y problemática social. 

    .titulo
          h2 Cuenca hidrográfica
    p.mb-4 Es un área establecida naturalmente que cuenta con una depresión de terreno y está rodeada por partes más altas por donde circula el líquido proveniente de la descongelación del hielo para desembocar en el mar. Está estrechamente involucrada en el desarrollo de las actividades humanas y son las encargadas de regular el flujo de agua evitando riesgos naturales como inundaciones, regulan la calidad del agua y visualmente son una belleza paisajística. 

    ImagenInfografica.color-acento-botones
        template(v-slot:imagen)
            .row.justify-content-center.align-items-center
              .col-lg-6
                img(src='@/assets/curso/temas/t1/cuenca.svg')

        .tarjeta.color.p-3(x="25%" y="50%" numero="1")
          p.color-azul Cuando hablamos de cuenca hidrográfica nos referimos al drenaje natural del agua, es un área establecida naturalmente que cuenta con una depresión de terreno y rodeada por partes más altas por donde circula el líquido proveniente de la descongelación del hielo para desembocar en el mar. 

        .tarjeta.color.p-3(x="75%" y="50%" numero="2")
          p.color-azul Las cuencas hidrográficas a nivel ecosistema tienen una importancia y está estrechamente involucradas en el desarrollo de las actividades humanas. Son las encargadas de regular el flujo de agua evitando riesgos naturales como inundaciones, regulan la calidad del agua y visualmente son una belleza paisajística.

        .tarjeta.color.p-3(x="50%" y="99%" numero="3")
          p.color-azul Proceso que involucra diversos procesos ecológicos y sociales, que demandan actividades de planeación, implementación y manejo, teniendo en cuenta todos los actores involucrados. Dentro del proceso de monitoreo de la cuenca hidrográfica, es importante entender la dinámica hidrológica y el funcionamiento eco sistémico, cultural, social e institucional de la misma, con finesa realizar un manejo integral de la misma.
    br
    br
    .titulo
          h2 Elementos y partes geográficas de una cuenca hidrográfica.
    .row.py-5.justify-content-center.align-items-center
      .col-lg-8
        ImagenInfograficaB.color-primario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/t1/cuenca2.svg', alt='Texto que describa la imagen')

          div(x="20%" y="20%" tooltip="tooltip de max 35 caracteres" numero="1")
            h5 titulo
            p Lorem ipsum dolor Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
            p Lorem ipsum dolor Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
            p Lorem ipsum dolor Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
    .titulo
          h2 1.1  Uso eficiente y ahorro
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
