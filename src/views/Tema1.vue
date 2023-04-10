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


    .row.py-5.justify-content-center.align-items-center.bgr1-tema1
      .col-lg-5.d-none.d-lg-block
        figure(style="margin-top:-36px")
          img(src='@/assets/curso/temas/t1/agua.svg', alt="")
      
      .col-lg-6
        .titulo-segundo.color-secundario
          h2 Agua
        
        p.mb-4 Cuando se habla del agua, se dice que es una sustancia líquida que no contiene olor, ni sabor, ni color, pero también se puede decir que es una molécula compuesta por dos átomos de hidrógeno y uno de oxígeno, los cuales están unidos mediante enlaces covalentes y en la superficie de la tierra se puede encontrar en distintos estados (sólido, líquido y gaseoso).

        p.mb-4 Los estudios indican que aproximadamente el 71 % de la superficie terrestre es agua, y principalmente está concentrada en los océanos, por otro lado, se encuentran los glaciares polares que constituyen el 1.74 %, las reservas subterráneas. Los lagos, la humedad del suelo, la atmósfera, los embalses, los ríos y los seres vivos, completan el porcentaje para convertirlo en el recurso más abundante del planeta tierra.

        p.mb-4 Sin duda alguna el agua juega un papel importante para el ser humano, los animales y los sistemas de producción agrícola y pecuaria siendo necesario hacer un uso racional y un manejo sostenible de ella, dado que su escasez produce problemas de salud, perdida de las cosechas lo que genera inseguridad alimentaria y problemática social. 
    
    .titulo.mt-5
          h2 Cuenca hidrográfica

    .row.justify-content-center.align-items-center
      .col-lg-8
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto.align-bloque-texto
            p Cuando se habla de cuenca hidrográfica se hace referencia al drenaje natural del agua. Es un área establecida naturalmente que cuenta con una depresión de terreno y rodeada por partes más altas por las cuales circula el líquido proveniente de la descongelación del hielo para desembocar en el mar. 

        p Es el proceso que involucra diversos entornos ecológicos y sociales, que demandan actividades de planeación, implementación y manejo, teniendo en cuenta todos los actores involucrados. Dentro del proceso de monitoreo de la cuenca hidrográfica, es importante entender la dinámica hidrológica y el funcionamiento ecosistémico, cultural, social e institucional de la misma, con fines a realizar un manejo integral de la misma.

        p Estas cuencas hidrográficas a nivel ecosistema, son importantes y están estrechamente involucradas en el desarrollo de las actividades humanas, ya que son las encargadas de regular el flujo de agua evitando riesgos naturales como inundaciones, además regulan la calidad del agua y visualmente aportan belleza paisajística.
      
      .col-lg-4
          img(src='@/assets/curso/temas/t1/cuenca.svg')

    .row.mt-5
      p Conozcamos los elementos y partes geográficas de una cuenca hidrográfica:   
    
    .titulo.mt-5
      h3 Elementos y partes geográficas de una cuenca hidrográfica

    .row.py-5.justify-content-center.align-items-center
      .col-lg-8
        ImagenInfografica.color-primario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/t1/cuenca2.svg', alt='Texto que describa la imagen')

          .tarjeta.bgr-info.p-3(x="64%" y="35%" tooltip="Divisoria de aguas" numero="1")
            h5 Divisoria de aguas
            p O también denominada parteaguas, por lo general está ubicada en la parte más alta de las montañas donde está el límite natural y resulta ser una línea imaginaria que limita las vertientes hidrográficas, y la separa de otras cuencas.
          .tarjeta.bgr-info.p-3(x="82%" y="49%" tooltip="Rio principal" numero="2")
            h5 Rio principal
            p Se define como el curso con mayor caudal y longitud, el cual cuenta con una parte alta o superior, una parte media y una parte baja o inferior.
          .tarjeta.bgr-info.p-3(x="80%" y="62%" tooltip="Cauce" numero="3")
            h5 Cauce
            p Canal natural por el cual corre una corriente de agua.
          .tarjeta.bgr-info.p-3(x="74%" y="25%" tooltip="Vertientes" numero="4")
            h5 Vertientes
            p Son áreas con topografía inclinada. Tienen la función de recibir el agua, y se ubican a lado y lado del cauce principal.
          .tarjeta.bgr-info.p-3(x="73%" y="55%" tooltip="Afluente" numero="5")
            h5 Afluente
            p Son ríos secundarios que vierten sus aguas al río principal.
          .tarjeta.bgr-info.p-3(x="86%" y="65%" tooltip="Efluente" numero="6")
            h5 Efluente
            p O también denominado emisarios, son derivaciones del río principal.
          .tarjeta.bgr-info.p-3(x="75%" y="78%" tooltip="Zona de recarga" numero="7")
            h5 Zona de recarga
            p O también denomina cabecera o zona de captación o cuenca alta, es el lugar donde se encuentran los nacimientos de las corrientes de agua, corresponde a ecosistemas de páramo.
          .tarjeta.bgr-info.p-3(x="43%" y="78%" tooltip="Zona de almacenamiento" numero="8")
            h5 Zona de almacenamiento
            p O también denominada cuenca media, allí fluyen y se almacenan la mayor cantidad de aguas provenientes de la cuenca alta.
          .tarjeta.bgr-info.p-3(x="14%" y="67%" tooltip="Zona de descarga" numero="9")
            h5 Zona de descarga
            p O también denominada cuenca baja, en donde se descargan las aguas a una corriente con mayor caudal (río mayor, mar o lago). Es el curso con mayor caudal de agua y longitud.
    
    .row.py-5.justify-content-center.align-items-center
      .col-lg-8
        .bloque-texto-e.p-4
            p.mb-4 Ya conociendo la importancia y funcionamiento que tienen las cuencas hidrográficas, se debe conocer y comprender el ciclo del agua. Entendiendo que es el proceso de transformación y circulación del agua en la tierra. 

    .row.mt-5
      h3 Uso eficiente y ahorro
    
    p.mb-4 El cambio climático aumenta de manera desmesurada, logrando que probablemente las inundaciones y sequías aumenten en el planeta. La preocupación es grande, por lo que es necesario generar estrategias de uso eficiente y ahorro de agua, de igual forma, se debe tener en cuenta la contaminación de las fuentes hídricas, las cuales deben ser protegidas y recuperadas en el contexto global. Es prioridad la conservación y la adecuada gestión de este recurso.

    .bloque-texto-f.pt-4.px-5.mb-5
      .row.py-5.justify-content-center.align-items-center
        .col-lg-6
          p.mb-4 Colombia, por su ubicación geográfica, se ve favorecida por la cantidad de fuentes hídricas, gracias a esto el uso de este recurso es constante dada la cantidad. La industria, agricultura, minería y generación de energía, son los sectores que más demanda del recurso hídrico requieren. La realidad es que el agua se está acabando, su ciclo se transformó completamente y por lo tanto se debe ser responsable usando de forma racional este recurso.

        .col-lg-4.d-none.d-lg-block
          figure(style="margin-top:-36px")
            img(src='@/assets/curso/temas/t1/imgcasa.png', alt="")

    
    h3 Captación de agua

    p.mb-4 La captación de aguas superficiales, son tomadas desde los ríos, embalses y lagos y es un proceso que se hace para aprovechar las fuentes hídricas. Los mecanismos que se usan son por bombeo y generalmente se utilizan cuando la fuente está por debajo del nivel en el cual va a ser usada y, por gravedad, cuando la fuente está por encima de la ubicación del usuario, con el fin de garantizar el suministro del agua.

    .row.py-5.justify-content-center.align-items-center
      .col-lg-8
        .bloque-texto-e.p-4
            p.mb-4 Con respecto a lo anterior, se define la captación de agua como un proceso mediante el cual se recolecta y almacena el recurso hídrico de las distintas fuentes para darle uso. El agua es usada para muchos procesos de la vida, es algo vital, por lo cual es indispensable cuidarla, hacer uso y manejo controlado.

            h4.mb-4 Requisitos generales de las obras de captación.

            p.mb-4 En Colombia rigen varias normas y permisos para realizar obras de captación de agua, estas deben cumplir con ciertos requisitos que permiten realizar un manejo adecuado de la fuente de abastecimiento, dentro de las que se tienen. Cuando se habla de diseño se debe tener en cuenta que el caudal y la construcción esté dentro de los parámetros. Es decir, que el caudal extraído debe ser el adecuado según lo que requiere la fuente de abastecimiento. También es necesario evaluar los efectos destructivos, para lo cual se debe calcular el volumen y la frecuencia de las crecidas, para así planificar el diseño adecuado. Debe contar con medios de limpieza, control de caudales y tener controladores de materiales extraños. 


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
          p En zonas donde no existan fuentes de agua, es imprescindible tener acceso al recurso, para lo cual se busca construir pequeñas lagunas para captar aguas lluvias, y utilizarlas en temporada de menos lluvias. Dicha estructura debe ser construida en un punto más alto respecto a donde se encuentran las parcelas a regar. En la zona de recarga debe llevar un vaso natural y debe tener un talud. Los suelos óptimos para realizar construcción son los arcillosos, de no tener esta característica, es necesario usar geo membrana, plástico o cemento.

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
          p.mb-2 Una vez calculado el caudal de la fuente abastecedora, se procede a tomar la decisión sobre cuál diseño de captación realizar, cuanta área se puede regar, cuantas horas de riego y el número de turnos de riego para la parcela. Por ello la importancia de saber la capacidad de la fuente abastecedora.

    .row.mt-5
      h3 Propiedades del suelo y agua

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

    p.mb-4 Todos los suelos están compuestos por fracciones y partículas minerales de diferentes tamaños. Las más gruesas se denominan arenas, las medianas limos y las más pequeñas arcillas. Veamos la clasificación de las partículas del suelo, por su tamaño:

    
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Clasificación de las partículas del suelo por su tamaño").py-5.justify-content-center.align-items-center
        .col-md-5
          .titulo-sexto.color-acento-contenido
              h5 Tabla 1
              p <em>Clasificación de las partículas del suelo por su tamaño</em>
          .row.py-5.justify-content-center.align-items-center         
              figure
                img(src='@/assets/curso/temas/t1/tabla1.svg', alt='Texto que describa la imagen')
                figcaption Nota. Tomado del suelo y la producción vegetal. Apuntes de agronomía.   <a href="http://prepa.chapingo.mx/wpcontent/uploads/2019/01/ANTOLOGIA-IIII2.pdf" target="_blank">http://prepa.chapingo.mx/wpcontent/uploads/2019/01/ANTOLOGIA-IIII2.pdf</a>

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
            figcaption Nota. Tomado y adaptado de Guía para la determinación de textura de suelos por método organoléptico (2010). 

      .row(titulo="Determinación de la textura de forma manual").py-5.justify-content-center.align-items-center
        .col-md-5
          p Para determinar la textura de forma manual, hay que hacer una modificación al triángulo textural, el cual queda constituido por suelos con textura arcillosa, franco-arcillosa y franca.
          p.mb-4 Para realizar el proceso se debe tomar una porción de suelo y formar una pelota, humedeciéndola hasta llegar al punto pegajoso, el cual se logra cuando la pelota de suelo no esta tan húmeda y se quiebra pegada en la mano, pero tampoco tan seca que no se sienta pegajosa. Cuando el suelo está en su punto, se debe presionar entre el dedo pulgar y el índice y se forme una plasta, lo más larga posible.
          p.mb-4 Al igual que el pH, es recomendable medirla “in situ”, para mantener el valor reportado durante su transporte y posterior análisis.
        .col-1
        .col-md-5
          figure
            img(src='@/assets/curso/temas/t1/acor7.svg', alt='Texto que describa la imagen') 
            figcaption Fuente: <a href="https://fundacionsuna.org/wp-content/uploads/PDF/Jaime-Lamo/MANUAL-M%C3%89TODOS-DE-SISTEMAS-DE-RIEGO.pdf" target="_blank">https://fundacionsuna.org/wp-content/uploads/PDF/Jaime-Lamo/MANUAL-M%C3%89TODOS-DE-SISTEMAS-DE-RIEGO.pdf</a>
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
    
    .row.mt-5
      h3 Relación agua-suelo-planta y clima

    p.mb-4 De la porción de agua que es absorbida por la planta, solo una fracción de esta, es la que suministra el hidrógeno que necesita, mientras que la otra, es usada en el proceso de transpiración. Los estomas de la planta, son los encargados de realizar este intercambio gaseoso; ellos se abren ante la presencia de agua y se cierran cuando hay escasez, como una forma de defensa; en esta etapa, es en la que se genera el estrés hídrico y se marchita la planta, reduciendo la productividad y generando la muerte. A continuación, se describe el proceso de cómo las plantas obtienen su alimento:

    .row.justify-content-center  
      .col-10
        .titulo-sexto.color-acento-contenido.mb-0
          h5 Imagen:
          p.mb-0 #[i Como se alimentan las Plantas]
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/t1/plantas.svg', alt='Texto que describa la imagen')

          .tarjeta.bgr-info.p-3(x="72%" y="34%" numero="1")
            .h5.mb-2 Precipitación 
            p Es el proceso por el cual el líquido que cae de la lluvia y entra a las plantas en forma de rocío en las mañanas o gotas de agua proveniente de las nubes.
          .tarjeta.bgr-info.p-3(x="64%" y="62%" numero="2")
            .h5.mb-2 Transpiración  
            p Al hablar de transpiración, se hace referencia a la vaporización del agua líquida contenida en el tejido vegetal y a su vez la remoción de este vapor a la atmósfera. En los cultivos este vapor de agua se pierde a través  de los estomas, pues la planta toma el agua y los nutrientes a través de las raíces, y la vaporización ocurre en las hojas, en donde los estomas regulan el intercambio gaseoso, por lo cual la mayoría del agua que ingresa a la planta es transportada y otra pequeña parte utilizada por la planta.
          .tarjeta.bgr-info.p-3(x="38%" y="70%" numero="3")
            .h5.mb-2 Evaporación 
            p Es el proceso por el cual un líquido se convierte en vapor de agua para posteriormente ser removido a la superficie. El proceso sucede en las aguas superficiales con ayuda de la energía solar quienes ayuda al cambiar de estado líquidos a estado gaseoso las moléculas de agua. En dicho proceso interviene la radiación solar, la temperatura del aire, la humedad relativa u la velocidad del viento.
          .tarjeta.bgr-info.p-3(x="20%" y="73%" numero="4")
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
