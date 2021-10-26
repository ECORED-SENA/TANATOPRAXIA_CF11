<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Protocolo funerario
  

    p.mb-5 Un protocolo está encaminado en lograr una buena y armoniosa convivencia en un ambiente, puesto que, 
      b ayuda a comprender las necesidades de adaptación e integración, así mismo 
      b(style="color: #008F85;") a conocer las normas de conducta. 
      b-none Cuando se habla de 
      b  protocolo en 
      b(style="color: #B42218;") atención al cliente funerario 
      b se distinguen dos líneas. 

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-secundario.p-5(style='background-color:#EEEEF2 ')
        .row.justify-content-center.mb-4
          .col-5.col-sm-5.col-lg-4
            figure
              img.mx-auto(src='@/assets/curso/tema1/img1.svg', alt='icono que acompaña', style="")
        h3.text-center.mb-5 Etiqueta y protocolo empresarial funerario
        p.mb-4.text-center La etiqueta y el protocolo empresarial funerario que regula el comportamiento de la empresa tanto en su interior como hacia el exterior y con el cual se fijan normas de convivencia entre los empleados. 
        
      .col-md.tarjeta.color-primario.p-5(style='background-color: #A6DAD7')
        .row.justify-content-center.mb-4
          .col-5.col-sm-5.col-lg-4
            figure
              img.mx-auto(src='@/assets/curso/tema1/img2.svg', alt='icono que acompaña', style="")
        h3.text-center.mb-5(style='color: #12263f') Comunicación y atención en los clientes
        p.mb-4.text-center(style='color: #12263f') El segundo protocolo es en el cual se establecen criterios de comunicación y atención en los clientes en la prestación del servicio exequial.
        

    p.mb-5 
      b A continuación, se presentan ambos temas con mayor claridad.


    #t_1_1.titulo-segundo
      h2 1.1 Etiqueta y protocolo empresarial
    

    p.mb-5 ¿Qué es etiqueta empresarial? Es el conjunto de comportamientos y modales para tener un buen ambiente laboral, relacionando las normas de respeto y convivencia al interior de las empresas, donde se resalta el respeto y honestidad hacia el otro. 


    .row.justify-content-center.mb-5
      .col-lg-9
        .container-llamado
          .img-llamado
            figure
              img.mx-auto(src='@/assets/curso/tema1/img3.svg', alt='icono que acompaña', style="")
          .row.justify-content-center
            .col-sm.mb-4.mb-lg-0
              .texto-llamado
                h4.mb-4(style="color: #008F85;") Qué comportamiento debo tener en el trabajo | Cómo mejorar el ambiente laboral
                p.mb-0 Estimado aprendiz, para profundizar sobre el tema puede consultar el siguiente video.
            .col-6.col-sm-auto.align-self-center
              .boton-llamado
                a.boton.color-secundario.texto-blanco(href="https://www.youtube.com/watch?v=nwIqTTRSjKg&list=RDMM&start_radio=1&rv=RN7mbUBzUJw" target="_blank")
                  span Ver Video


    p.mb-5 Los principios que rigen la etiqueta empresarial son: 

    .row.justify-content-center.fondo1.mb-4
      .col-lg-12.px-md-5
        .row.justify-content-center.mb-5
          .col-lg-9
            figure
              img.mx-auto(src='@/assets/curso/tema1/img4.svg', alt='principios equita empresarial', style="")
          
        .row.justify-content-center.mb-4
          p.mb-0
            b ¿Qué es protocolo empresarial? 
            b-none  Son las 
            b(style="color: #008F85;") pautas de conducta: normas de etiqueta y cortesía, comunicación corporativa, organización de visitas o celebración de eventos; 
            b-none diseñadas especialmente para cada empresa y aplicadas dentro de estas con el fin de evitar que las relaciones generen crisis en la imagen y reputación de la empresa. Estos deben ser prácticos, claros, concisos, flexibles y de fácil acceso.









    
    separador
    #t_1_2.titulo-segundo
      h2 1.2 Protocolo funerario en la atención del servicio
    
    
    
    
    separador
    #t_1_3.titulo-segundo
      h2 1.3 Protocolos y comportamientos de asistencia a un funeral



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

<style lang="sass" scoped></style>
