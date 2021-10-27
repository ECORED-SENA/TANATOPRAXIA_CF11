<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.mb-0
      .titulo-principal__numero
        span 2
      h1 El duelo
    
    .row.justify-content-center.fondo2.mb-4
      .col-lg-12.px-md-5.mt-5
        .row.justify-content-center.mb-5
          .col-6.col-lg-4.mb-4.mb-lg-0
            figure
              img.mx-auto(src="@/assets/curso/tema2/img1.png", alt="El duelo y los sentimientos", style="width: 350px;")
          .col-lg-8
            p.mb-4
              b El duelo y los sentimientos 
              b-none que se asocian a este son un factor que se deben de tener en cuenta en el momento de la 
              b(style="color: #008F85;")  prestación del servicio del funerario,
              b-none aunque 
              b  los trabajadores funerarios no sean los especialistas en el manejo del duelo si se debe conocer sus manifestaciones básicas para brindar y otorgar la ayuda necesaria al cliente. 
              b-none Se preguntará ¿qué es el duelo?
            p.mb-0 
              b Según Posada (2005):



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

<style lang="sass" scoped></style>
