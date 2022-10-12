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
        p Querido aprendiz bienvenido al componente formativo “Prácticas de riego y manejo de poblaciones asociadas”. En este se desarrollarán elementos teóricos fundamentales en de los sistemas de riego en cultivos a partir del uso eficiente de los recursos desde los planteamientos de la normativa ambiental. Así mismo se abordarán aspectos importantes relacionados con el control proporcionado de las poblaciones de (insectos, hongos y nematodos). Lo invitamos a ver el siguiente video, en el que se expondrán brevemente los aspectos mas importantes de estos temas.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
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
