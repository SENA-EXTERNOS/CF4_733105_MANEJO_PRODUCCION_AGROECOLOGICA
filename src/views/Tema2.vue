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

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t2/img1.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para elegir  los métodos de riego, es necesario tener en cuenta diversas variables como la distribución del agua en el suelo, características topográficas, tipo de cultivo, disponibilidad de agua, costos y tecnología.
          


















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
