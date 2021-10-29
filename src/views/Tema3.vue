<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Cadena de custodia


    .row.justify-content-center.mb-5
      .col-5.col-lg-3.mb-4.mb-lg-0
          figure
            img.mx-auto(src="@/assets/curso/tema3/img1.svg", alt="El duelo y los sentimientos", style="width: 258px;")
      .col-lg-9
        p.mb-4
          b(style="color: #008F85;") Según la Corte Suprema de Colombia (2013): 
          b-none  definen la cadena de custodia como 
          b “el conjunto de procedimientos encaminados a asegurar y demostrar la autenticidad de los elementos materiales probatorios y evidencia física” . 
          
        p.mb-4 Este procedimiento es organizado y continuo en el que el servidor público o privado debe de garantizar su correcta manipulación, informando cuándo, cómo y 
          b(style="color: #008F85;")  quiénes tuvieron acercamiento o relación los elementos materiales material probatorios hasta que la autoridad correspondiente determine su disposición final.
        .cajon.color-secundario.p-4
          p.mb-0 Existen una serie de requisitos que se deben de conservar y realizar para 
            b(style="color: #D93328;") preservar la autenticidad y capacidad probatoria, 
            b-none ¿cuáles son?
            b  En el siguiente recurso educativo se identifican cada uno de ellos.


    .row.justify-content-center.fondo-gradiente.mb-4(style='background: linear-gradient(180deg,#ffffff,#71C6C1,#008F85, #ffffff);')
      .col-lg-12.px-md-5
        .row.mb-4
          .col-auto
            figure
              img.mx-auto(src="@/assets/curso/tema3/img2.svg", alt="imagen ambiental", style="width: 350px;")

        .row.justify-content-center.mb-5
          .col-lg-8
            figure.mb-5
              img.mx-auto(src="@/assets/curso/tema3/img3.svg", alt="imagen ambiental", style="width: 778px;")
                
                
            LineaTiempoD.color-acento-contenido.mb-5
              p(numero="1" titulo="Autenticidad") Es la correspondencia entre el elemento material probatorio recolectado, embalado, transportado y almacenado que sea analizado para determinar su capacidad probatoria del hecho punible.
              p(numero="2" titulo="Almacenamiento") Es la aplicación de instrumentos administrativos para resguardar los elementos materiales, con el fin de evitar su pérdida o daño.
              p(numero="3" titulo="Capacidad demostrativa") Cualidad de un elemento material probatorio que mediante diferentes análisis (técnico o científico), puede aportar información con capacidad probatoria.
              p(numero="4" titulo="Continuidad") La forma cronológica ininterrumpida en la cadena de custodia de los elementos materiales probatorios.
              p(numero="5" titulo="Identidad") Es una descripción detallada de los elementos materiales probatorios recolectados, embalados, almacenados o transportados que registre su estado físico, locación y apariencia.
              p(numero="6" titulo="Integridad") Consiste en garantizar que los elementos materiales probatorios no han sufrido ninguna alteración en su composición desde el momento del hallazgo.
              p(numero="7" titulo="Preservación") Es la aplicación de técnicas para evitar el daño o contaminación del elemento material probatorio.
              p(numero="8" titulo="Registro") Es la documentación física o virtual que se lleva de los elementos materiales probatorios con el fin de verificar quienes tuvieron contacto.
              p(numero="9" titulo="Seguridad") Consiste en minimizar los riesgos de daño o contaminación durante los procedimientos realizados durante las diferentes etapas del manejo del elemento material probatorio.
    
    p.mb-5 
      b Según la Ley 906 (2004) establece en su artículo 255,  
      b-none <i> la responsabilidad de la cadena de custodia de los servidores públicos que entren en contacto con los elementos materiales probatorios y evidencia física. </i>
      b-none Es decir, que 
      b todos aquellos que entren en contacto con elementos materiales probatorios y evidencia física, son responsables por su recolección, preservación y entrega a la autoridad correspondiente. 
      
    .row.justify-content-center.mb-5
      .col-lg-8.mb-4.mb-lg-0.align-self-center
        p.mb-4 En consideración con lo anterior, 
          b los funcionarios o personal designado para un traslado de un fallecido, deben custodiar el cadáver y sus pertenencias en el momento de la entrega de posibles elementos probatorios. 
          b-none Para esto 
          b(style="color: #008F85;") el cadáver deberá ser debidamente identificado, 
          b-none  preferiblemente haciendo uso de una manilla de identificación, también se tendrá que llevar un registro claro y oportuno sobre las condiciones del cadáver y sus pertenencias. Con el fin de documentar todos los procesos y procedimientos que se realizarán hasta su disposición final. 
          b(style="color: #008F85;") Cada empresa podrá implementar sus formatos con el fin de llevar dichos registros. 
        
        p.mb-0
          b Estos formatos deben de contar con datos básicos como:
        
      .col-lg-4.align-self-center
        figure.mb-5
          img.mx-auto(src="@/assets/curso/tema3/img4.svg", alt="imagen ambiental", style="width: 290px;")

    

    .row.justify-content-center.mb-4
      .col-lg-10
        .tabla-a.color-primario.mb-5 
          table
            thead
              tr
                td(colspan='2' style='background-color: #1D272B; ') 
                  h3.mb-0.text-white NÚMERO DEL CONTRATO O FACTURA.
                td(colspan='2')
            tbody
              tr
                td Nombre del fallecido
                td
                td Número de identificación del fallecido
                td
              tr
                td Nombre del responsable del servicio
                td(colspan='3')
              tr
                td Condiciones del cad&aacute;ver
                td(colspan='3')
              tr
                td Observaciones de la familia
                td(colspan='3')
              tr
                td(style='background-color: #1D272B; ') 
                  h4.mb-0.text-white Firma del responsable
                td(colspan='3')


    .bloque-texto-a.color-primario.p-4.py-5.mb-5 
      .row.m-0.align-items-center.justify-content-around
        .col-7.col-lg-3.mb-4.mb-lg-0
          figure
            img.mx-auto(src='@/assets/curso/tema3/img5.svg', alt='imagen ambiental', style='width:216px;')
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-0
              b La aplicación de los procedimientos de la cadena de custodia
              b-none   en el proceso de traslado asegurará que el cadáver y sus pertenencias siempre serán tratadas conforme lo solicitan las autoridades, garantizando así la preservación del cadáver y sus bienes materiales. Por ello 
              b(style="color: #B42218;")  es importantísimo 
              b-none  que la cadena no se rompa y siempre esté documentado cada procedimiento realizado, 
              b(style="color: #008F85;")  cumpliendo así con su objetivo de integridad y autenticidad.  
              
              


    .row.justify-content-center.mb-2
      .col-lg-9.mb-4
        .container-llamado
          .img-llamado
            figure
              img.mx-auto(src='@/assets/curso/tema2/img20.svg', alt='icono que acompaña', style="")
          .row.justify-content-center
            .col-sm.mb-4.mb-lg-0
              .texto-llamado
                //h4.mb-3(style="color: #008F85;") Rituales funerarios
                p.mb-4 Hasta aquí se ha hecho una aproximación a la cadena de custodia. En el contexto colombiano existen diferentes que explican el proceso a seguir en la cadena de custodia. Con la intención que usted desarrolle conocimiento para que explique elementos que debe considerar cuando entra en contacto con elementos probatorios le invitamos a leer el texto “Manual del Sistema de Cadena de Custodia” (2018). 
                p.mb-0 Usted debe revisar las páginas 10, 11, y 15. 
            .col-auto.col-sm-auto.align-self-center
              .boton-llamado
                a.boton.color-secundario.texto-blanco(href="https://www.fiscalia.gov.co/colombia/wp-content/uploads/MANUAL-DEL-SISTEMA-DE-CADENA-DE-CUSTODIA.pdf" target="_blank")
                  span Consultar







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

<style lang="sass" scoped></style>
