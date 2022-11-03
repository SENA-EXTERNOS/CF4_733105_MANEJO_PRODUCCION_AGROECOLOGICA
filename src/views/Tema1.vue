<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Potencial hídrico
    p El éxito de la producción agrícola está reflejado en el desarrollo de productos de excelente calidad para la comercialización. Sin embargo, hay que realizar un seguimiento detallado de los recursos que intervienen en el proceso, esta vez hablaremos del agua como factor importante para garantizar alcanzar los rendimientos y resultados esperados. 
    p.mb-4 Por cierto, sabemos que el agua está involucrada en distintos sectores, es usada en diversas tareas, debemos entender que es un recurso limitado y por lo tanto debemos darle un uso eficiente. La agricultura es el sector donde más consumo hay, por lo que se ha optado por introducir la tecnología para generar alternativas de riego, uso controlado del drenaje, supervisión de las etapas de la planta y dar uso adecuado del agua en el proceso, tratado de afectar mínimamente su ciclo.


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
    p.mb-4 Estas cuencas hidrográficas a nivel ecosistema, son importantes y está estrechamente involucradas en el desarrollo de las actividades humanas, ya queson las encargadas de regular el flujo de agua evitando riesgos naturales como inundaciones, además regulan la calidad del agua y visualmente aportan belleza paisajística.

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

          div(x="64%" y="35%" tooltip="Divisoria de aguas" numero="1")
            h5 Divisoria de aguas
            p O también denominada parteaguas, por lo general está ubicada en la parte más alta de las montañas donde está el límite natural y resulta ser una línea imaginaria que limita las vertientes hidrográficas, y la separa de otras cuencas.
          div(x="82%" y="49%" tooltip="Rio principal" numero="2")
            h5 Rio principal
            p Se define como el curso con mayor caudal y longitud, el cual cuenta con una parte alta o superior, una parte media y una parte baja o inferior.
          div(x="80%" y="62%" tooltip="Cauce" numero="3")
            h5 Cauce
            p Canal natural por el cual corre una corriente de agua.
          div(x="74%" y="25%" tooltip="Vertientes" numero="4")
            h5 Vertientes
            p Son áreas con topografía inclinada. Tienen la función de recibir el agua, y se ubican a lado y lado del cauce principal.
          div(x="73%" y="55%" tooltip="Afluente" numero="5")
            h5 Afluente
            p Son ríos secundarios que vierten sus aguas al río principal.
          div(x="86%" y="65%" tooltip="Efluente" numero="6")
            h5 Efluente
            p O también denominado emisarios, son derivaciones del río principal.
          div(x="75%" y="78%" tooltip="Zona de recarga" numero="7")
            h5 Zona de recarga
            p O también denomina cabecera o zona de captación o cuenca alta, es el lugar donde se encuentran los nacimientos de las corrientes de agua, corresponde a ecosistemas de páramo.
          div(x="43%" y="78%" tooltip="Zona de almacenamiento" numero="8")
            h5 Zona de almacenamiento
            p O también denominada cuenca media, allí fluyen y se almacenan la mayor cantidad de aguas provenientes de la cuenca alta.
          div(x="14%" y="67%" tooltip="Zona de descarga" numero="9")
            h5 Zona de descarga
            p O también denominada cuenca baja, en donde se descargan las aguas a una corriente con mayor caudal (río mayor, mar o lago). Es el curso con mayor caudal de agua y longitud.
    separador
    .titulo-segundo.color-secundario
      h2 1.1 Uso eficiente y ahorro
    
    p.mb-4 El cambio climático aumenta de manera desmesurada probablemente las inundaciones y sequias aumenten en el planeta, la preocupación es grande por lo que es necesario generar estrategias de uso eficiente y ahorro de agua, de igual forma se debe tener en cuenta la contaminación de las fuentes hídricas las cuales deben ser protegidas y recuperadas en el contexto global es prioridad la conservación y la adecuada gestión de este recurso.
    .bloque-texto-f.pt-4.px-5.mb-5
      .row.py-5.justify-content-center.align-items-center
        .col-lg-6
          p.mb-4 Colombia por su ubicación geográfica se ve favorecida por la cantidad de fuentes hídricas, gracias a esto el uso de este recurso es constante dada a la cantidad, la industria, agricultura, minería y generación de energía son los sectores que más demanda del recurso hídrico requieren. La realidad es que el agua se está acabando su ciclo se transformó completamente y por lo tanto debemos ser responsables y usar de forma racional este recurso.
        .col-lg-4.d-none.d-lg-block
          figure(style="margin-top:-36px")
            img(src='@/assets/curso/temas/t1/imgcasa.png', alt="")

    h3 Uso eficiente y ahorro
    .bloque-texto-a.p-4.p-md-5.mb-5 
      .row.py-5.justify-content-center.align-items-center
        .col-lg-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t1/imgpais.svg', alt="")
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-4 El cambio climático aumenta de manera desmesurada la probabilidad de las inundaciones y sequias, la preocupación es grande por lo que es necesario generar estrategias de uso eficiente y ahorro de agua.  
            p.mb-4 Colombia por su ubicación geográfica se ve favorecida por la cantidad de fuentes hídricas, gracias a esto el uso de este recurso es constante dada a la cantidad, la industria, agricultura, minería y generación de energía son los sectores que más demanda del agua requieren. La realidad es que este líquido vital se está acabando; su ciclo se transformó completamente y por lo tanto debemos ser responsables y usar de forma racional este recurso. 
    
    h3 Captación de agua
    p.mb-4 Las aguas superficiales son tomadas desde los ríos embalses y lagos. El mecanismo que se usa generalmente es el bombeo y generalmente se usa cuando la fuente está por debajo del nivel donde va a ser usada; también se emplea la estrategia de la gravedad cuando la fuente está por encima del usuario, con el fin de garantizar el suministro del agua. 
    .row.py-5.justify-content-center.align-items-center
      .col-lg-8
        .bloque-texto-e.p-4
            p.mb-4 En este sentido, se define la captación de agua como un proceso en el cual se recolecta y almacena el recurso hídrico de las distintas fuentes para darle uso. En Colombia rigen varias normas y permisos para el desarrollo de obras que requieren de este proceso las cuales deben cumplir con requisitos para realizar un manejo adecuado de la fuente de abastecimiento.  
            p.mb-4 Uno de los principales requisitos mencionados es el diseño, dentro del cual se debe tener en cuenta el caudal y que la construcción este dentro de los parámetros, es decir que el caudal extraído debe ser el adecuado según lo que requiere la fuente de abastecimiento, también es necesario evaluar los efectos destructivos, para lo que es necesario calcular el volumen y la frecuencia de las crecidas. Debe contar con medios de limpieza y control de caudales y tener controladores de materiales extraños.
      .col-lg-4.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/t1/montaña.svg', alt="")
    h3 Tipos
    p.mb-4 El recurso hídrico lo podemos encontrar de forma superficial, subsuperficial y subterránea, de acuerdo con lo cual se pueden desarrollar diferentes tipos de procesos de captación. Tales como:  
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Desvío").py-5.justify-content-center.align-items-center
        .col-md-5
          figure
            img(src='@/assets/curso/temas/t1/acor1.svg', alt='Texto que describa la imagen')
        .col-md-5.mb-4.mb-md-0
          p Por lo general este tipo de obra es usada para regar cultivos que se encuentren cerca al rio y consiste en realizar una abertura en al cauce natural y dirigiendo el agua por medio de un sistema de conducción, que la mayoría de veces suele ser un canal.
      .row(titulo="Solera").py-5.justify-content-center.align-items-center
        .col-md-5.mb-4.mb-md-0
          p El éxito de esta toma radica en lograr la captación de la parte inferior de un escurrimiento  donde las condiciones naturales de flujo se alteran mediante una cámara transversal de captación.
          p.mb-4 Esta obra se emplaza a manera de travesaño de fondo, sobre la cámara de captación se emplaza una rejilla, con el fin de que habilite el ingreso de caudal de captación y limite el ingreso de sedimentos.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/t1/acor2.svg', alt='Texto que describa la imagen')
      .row(titulo="Caudal de una fuente y dotación").py-5.justify-content-center.align-items-center
        .col-md-5
          figure
            img(src='@/assets/curso/temas/t1/acor3.svg', alt='Texto que describa la imagen')
        .col-md-5.mb-4.mb-md-0
          p Al hablar de caudal nos referimos a la cantidad de agua que suministra una fuente hídrica durante una unidad de tiempo y la determinamos a través de aforos, es una técnica que consiste en medir la cantidad de agua que circula en un tiempo determinado y su unidad de medida es litros por segundos (l/seg.).
          p.mb-4 La dotación es simplemente la cantidad de agua que una persona tiene derecho para realizar sus actividades diarias. La capacidad de una fuente hídrica  para suministrar agua a una comunidad la podemos estimar de  la siguiente  forma, calculando la dotación y multiplicando por el número de personas que residen ahí.
          ul.lista-ul--color
            li 
              i.fas.fa-snowflake
              | Fuentes de agua.
          p.mb-4 Es principalmente el sitio que abastece el sistema que ejecutará el riego del cultivo, de esto depende el cálculo del área máxima que podemos regar. Cuando el agua proviene de partes altas debemos calcular el caudal por medio de aforo, mientras que si lo hacemos directamente del rio con motobomba debemos tener en cuenta las especificaciones del equipo que vamos a usar.     
      .row(titulo="Cosecha de agua").py-5.justify-content-center.align-items-center
        .col-md-5.mb-4.mb-md-0
          p En zonas donde no existan fuentes de agua, es imprescindible tener acceso al recurso para lo cual se busca a construir pequeñas lagunas para captar aguas lluvias, y utilizarla en temporada de menos lluvias. Dicha estructura debe ser construida en un punto más alto a donde se encuentran las parcelas a regar, en la zona de recarga debe llevar un vaso natural y debe tener un talud. Los suelos óptimos para realizar construcción son los arcillosos sino usar geomenbrana, plástico o cemento.
        .col-md-5
          figure
            img(src='@/assets/curso/temas/t1/acor4.svg', alt='Texto que describa la imagen')
      .row(titulo="Aforo").py-5.justify-content-center.align-items-center
        .col-md-10.mb-4.mb-md-0
          p.mb-4 El aforo es la actividad con la cual medimos el volumen del agua que tiene una fuente el método para medirlo es el siguiente.
          ul.lista-ul--color
            li 
              i.fas.fa-snowflake
              | Método volumétrico.
          p.mb-2 Es una práctica fácil que se basa en medir el tiempo que tarda en llenarse un recipiente con volumen conocido. Al dividir la capacidad del balde (litros) por el tiempo de llenado (segundo), obteniéndose el caudal en L/s.
          .row.py-5.justify-content-center.align-items-center
            .col-6.mb-4 
              figure(style="text-align:center;")
                img(src='@/assets/curso/temas/t1/acor5.svg', alt='Texto que describa la imagen')
          p.mb-2 Una vez calculado el caudal de la fuente abastecedora, procedemos a tomar la decisión sobre cual diseño de captación realizar, cuanta área podemos regar, cuantas horas de riego y el número de turnos de riego para la parcela. Por ello la importancia de saber la capacidad de la fuente abastecedora.

    separador
    .titulo-segundo.color-secundario
      h2 1.2. Propiedades del suelo y agua
    p El suelo es un recurso natural de vital importancia ya que es no renovable, su composición mayormente es por sustancias solidadas, dentro de las encontramos la materia orgánica, organismos y minerales además de agua y aire, la cantidad de estos componentes son los que conceden las propiedades físicas, químicas y biológicas
    .bloque-texto-f.pt-4.px-5.mb-5
      .row.py-5.justify-content-center.align-items-center
        .col-lg-7
          p.mb-4 Que el suelo sea productivo no solo depende de la disponibilidad de nutrientes, sino que también debe reunir ciertas características físicas, pues el crecimiento de las partes aéreas depende en gran medida del desarrollo de la raíz además del balance de humedad, y aireación del suelo.
          p.mb-4 Por lo anterior concluimos que las propiedades físicas del suelo son el resultado de la interacción del (suelo, agua y aire) y la cantidad en que se encuentran cada una de ellas.  la condición física del suelo determina la capacidad de sostenimiento, habilidad para penetrar las raíces, circulación de aire, almacenamiento de agua, drenaje, retención de nutrientes (macro y micro nutrientes).
        .col-lg-4.d-none.d-lg-block
          figure(style="margin-top:-36px")
            img(src='@/assets/curso/temas/t1/suelo.svg', alt="")
    h3 Textura y estructura
    p.mb-4 Todos los suelos están compuestos por fracciones y partículas minerales de diferentes tamaños. Las más gruesas se denominan arenas, las medianas son los limos y las más pequeñas son las arcillas. (Ciancaglini, 2010).
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Clasificación de las partículas del suelo por su tamaño").py-5.justify-content-center.align-items-center
        .col-md-5
          .row.py-5.justify-content-center.align-items-center
              figure
                img(src='@/assets/curso/temas/t1/tabla1.svg', alt='Texto que describa la imagen')
          p Existen diferentes métodos para determinar la textura del suelo, entre las que encontramos:
          ul.lista-ul--color
              li 
                i.fas.fa-snowflake
                | Triángulo textural, el cual clasifica la textura del suelo en doce clases dependiendo su porcentaje de arena, limo y arcilla.  
          p.mb-4 El cual clasifica la textura del suelo en doce clases dependiendo su porcentaje de arena, limo y arcilla.
        .col-1
        .col-md-5
          figure
            img(src='@/assets/curso/temas/t1/acor6.svg', alt='Texto que describa la imagen')
      .row(titulo="Determinación de la textura de forma manual").py-5.justify-content-center.align-items-center
        .col-md-5
          p Para determinar la textura de forma manual, hay que hacer una modificación al triángulo textural, el cual queda constituido por suelos con textura arcillosa, franco-arcillosa y franca.
          p.mb-4 Para realizar el proceso se debe tomar una porción de suelo y formar una pelota, humedeciéndola hasta llegar al punto pegajoso, el cual se logra cuando la pelota de suelo no esta tan húmeda y se quiebra pegada en la mano, pero tampoco tan seca que no se sienta pegajosa. Cuando el suelo está en su punto, se debe presionar entre el dedo pulgar y el índice y se forme una plasta, lo más larga posible.
          p.mb-4 Al igual que el pH, es recomendable medirla “in situ”, para mantener el valor reportado durante su transporte y posterior análisis.
        .col-1
        .col-md-5
          figure
            img(src='@/assets/curso/temas/t1/acor7.svg', alt='Texto que describa la imagen') 
      .row(titulo="Estructura").py-5.justify-content-center.align-items-center
        .col-md-5
          p La estructura simplemente es la manera que las partículas se agrupan entre sí para formar agregados del suelo.
          
        .col-1
        .col-md-5
          figure
            img(src='@/assets/curso/temas/t1/acor8.jpg', alt='Texto que describa la imagen')
    h3 Agua en el suelo y estados de humedad
    p.mb-4 Para el suelo es importante la humedad, en el encontramos diferentes tipos de agua, las cuales el papel es fundamental para el desarrollo de la planta, dentro de las que encontramos.
    .row.justify-content-center
        .col-sm-10.col-xl-4.col-md-6.my-3
          .tarjeta.tarjeta-slide.abajo(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img.text-center
                figure
                    img(src='@/assets/curso/temas/t1/fondotarjeta.svg', alt="")
              .tarjeta-slide__contenido.p-4.p-xl-5
                h3 Agua gravitacional
                p Es la fracción de agua que encontramos en los macro poros. Esta parte de agua en el suelo es la que se mueve con ayuda de la fuerza de gravedad, por lo cual tiende a desplazarse hacia abajo. Dicha porción de agua favorecer el crecimiento de las plantas cuando se encuentra en el estrato radicular.<br><br><br><br><br>
        .col-sm-10.col-xl-4.col-md-6.my-3
          .tarjeta.tarjeta-slide.abajo(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img.text-center
                figure
                    img(src='@/assets/curso/temas/t1/fondotarjeta.svg', alt="")
              .tarjeta-slide__contenido.p-4.p-xl-5
                h3 Agua capilar
                p Es la porción de agua que encontramos en los microporos y que se conserva en el suelo por ayuda de las fuerzas procedentes de la tensión superficial (adhesión y cohesión).
                p Cuando se habla de fuerzas de adhesión, se hace referencia a la fuerza que permite la unión entre una partícula y una superficie, mientras que la fuerza de cohesión es la que permite la unión entre partículas iguales.
        .col-xl-4.col-md-6.my-3
          .tarjeta.tarjeta-slide.abajo(@mouseover="indicadorTarjetaSlide = false")
            .tarjeta-slide__contenedor
              .tarjeta-slide__img.text-center
                figure
                    img(src='@/assets/curso/temas/t1/fondotarjeta.svg', alt="")
              .tarjeta-slide__contenido.p-4.p-xl-5
                h3 Agua higroscópica
                p Este tipo de agua no está disponible para las plantas, debido a su profundidad y es difícil que la raíz rompa las partículas del suelo y las paredes del poro.<br><br><br><br><br><br><br><br><br>
    separador
    .titulo-segundo.color-secundario
      h2 1.3. Relación agua-suelo-planta y clima
    p.mb-4 La porción de agua que se absorbe por la planta solo es una fracción la que suministra el hidrógeno que necesita la planta, y la otra es usada en el proceso de transpiración. Las estomas de la planta son los encargados de realizar este intercambio gaseoso, los cuales están abiertos a la presencia de agua y se cierran cuando hay escasez como forma de defensa, etapa en la cual se genera el estrés hídrico y se marchita la planta reduciendo la productividad y la muerte.
    .row.justify-content-center  
      .col-10
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/t1/plantas.svg', alt='Texto que describa la imagen')

          .tarjeta.color.p-3(x="72%" y="34%" numero="1")
            .h5.mb-2 Precipitación 
            p Es el proceso por el cual el líquido que cae de la lluvia y entra a las plantas en forma de rocío en las mañanas o gotas de agua proveniente de las nubes.
          .tarjeta.color.p-3(x="64%" y="62%" numero="2")
            .h5.mb-2 Transpiración  
            p Al hablar de transpiración, se hace referencia a la vaporización del agua líquida contenida en el tejido vegetal y a su vez la remoción de este vapor a la atmósfera. En los cultivos este vapor de agua se pierde a través  de los estomas, pues la planta toma el agua y los nutrientes a través de las raíces, y la vaporización ocurre en las hojas, en donde los estomas regulan el intercambio gaseoso, por lo cual la mayoría del agua que ingresa a la planta es transportada y otra pequeña parte utilizada por la planta.
          .tarjeta.color.p-3(x="38%" y="70%" numero="3")
            .h5.mb-2 Evaporación 
            p Es el proceso por el cual un líquido se convierte en vapor de agua para posteriormente ser removido a la superficie. El proceso sucede en las aguas superficiales con ayuda de la energía solar quienes ayuda al cambiar de estado líquidos a estado gaseoso las moléculas de agua. En dicho proceso interviene la radiación solar, la temperatura del aire, la humedad relativa u la velocidad del viento.
          .tarjeta.color.p-3(x="20%" y="73%" numero="4")
            .h5.mb-2 Evapotranspiración 
            p La evapotranspiración es la perdida de humedad de una superficie, generada por evaporación directa, junto con la perdida de agua por transpiración. Los procesos de evaporación y transpiración ocurren de manera sincronizada, de esta manera  la evaporación del suelo al momento del establecimiento de cultivo depende de la radicación solar sobre la superficie, la cual disminuye a medida que el cultivo va desarrollando follaje, el cual sombrea la superficie del suelo.
    h3 Influencia del clima
    p La influencia del clima está dada por variables como:

    .row.mb-5
      .col-xl-4.col-md-6.my-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/temperatura.svg' alt='AvatarTop')
          .tarjeta.color
            .p-4
              h3.text-center <br> Temperatura
              p La temperatura influye en gran parte en el crecimiento y el metabolismo de las plantas, por lo tanto debe ser óptima para asegurar el buen desarrollo y crecimiento de los cultivos.
      .col-xl-4.col-md-6.my-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/humedad.svg' alt='AvatarTop')
          .tarjeta.color
            .p-4
              h3.text-center <br> Humedad relativa
              p Cuando se habla de humedad relativa, nos referimos  la cantidad de vapor de agua presente en el aire. En el cultivo cuando la humedad relativa es alta, la planta pierde agua a un ritmo menor a diferencia de cuando esta baja.
      .col-xl-4.col-md-6.my-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t1/viento.svg' alt='AvatarTop')
          .tarjeta.color
            .p-4
              h3.text-center <br> Viento
              p A la hora de realizar el riego esta variable toma un papel importante, los fuertes vientos hacen que los suelos se sequen mas rápido y por lo tanto el cultivo pierde más agua.

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
