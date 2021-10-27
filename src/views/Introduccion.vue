<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    
    
    
    .bloque-texto-a.color-primario.p-4.mb-5 
      .row.m-0.align-items-center.justify-content-center
        .col-7.col-lg-3.mb-4.mb-lg-0
          figure
            img.mx-auto(src='@/assets/curso/img1.svg', alt='imagen ambiental', style='width:276px;')
        .col-lg-9
          .bloque-texto-a__texto.p-4
            p.mb-0
              b El protocolo funerario 
              b-none  hace parte de los 
              b(style="color: #008F85;") fundamentos básicos para la atención adecuada de los clientes de servicios funerarios, 
              b-none  brinda la oportunidad de 
              b  atender las necesidades y requerimientos, para garantizar la calidad en la prestación de 
              b(style="color: #B42218;") los servicios funerarios, 
              b-none aprendizajes que serán abordados en el presente componente formativo.
              
    
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
