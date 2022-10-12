<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p La producción agrícola es la práctica por la cual obtenemos productos de buena calidad, siendo económicamente rentable y siendo amigables con el ambiente, para alcanzar dichos objetivos debemos tener en cuenta variables como las climáticas, biología y composición del suelo, topografía del terreno y la facilidad de obtener el recurso hídrico. Para optimizar el crecimiento y desarrollo del cultivo.
    p Sin lugar a dudas uno de los retos más grandes es vincular tecnología apropiada o técnicas de manejo cultural que permitan realizar un uso y manejo adecuado del agua de riego, de tal manera que suministre el requerimiento hídrico necesario para el cultivo, mediante el sistema de riego apropiado, facilitando el control y aplicación del agua, reducción de costos, y asegurando el correcto desarrollo de la planta.
    p Otro punto a tener en cuenta es el manejo de las plagas ya que constituyen las mayores pérdidas en las plantaciones, los monitores para detectar dichas enfermedades deben ser constantes, el uso de productos químicos para la erradicación debe ser minino casi que nulo, debemos incorporar a nuestros predios el uso de controladores biológicos y de esta manera dar inicio al principio de la agroecología.
    p.mb-5 Así pues, un resumen de lo visto en el presente componente, podrá ser visualizado en el siguiente mapa conceptual.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.jpg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
