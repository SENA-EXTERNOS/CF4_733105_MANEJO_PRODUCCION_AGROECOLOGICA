<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.mb-5
        p Apreciado aprendiz, bienvenido a este componente formativo, que aborda las prácticas de riego y manejo de poblaciones asociadas para la producción agroecológica; se desarrollarán elementos teóricos fundamentales de los sistemas de riego en cultivos, a partir del uso eficiente de los recursos, desde los planteamientos de la normativa ambiental. Así mismo, se abordarán aspectos importantes relacionados con el control proporcionado de las poblaciones de insectos, hongos y nematodos. 

        p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/LAfX-N3Un7s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
