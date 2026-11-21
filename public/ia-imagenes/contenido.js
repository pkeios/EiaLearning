// Temario del curso "Crear imágenes con IA, con responsabilidad". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js ia-imagenes y node tools/metodologia.js ia-imagenes
window.TEMARIO = [
{
  id: "como-funciona",
  icono: "🧠",
  titulo: "Cómo una IA crea imágenes",
  nivel: "Básico",
  objetivos: [
    "Explicar con tus palabras cómo un modelo genera una imagen a partir de un texto",
    "Anticipar los errores típicos: manos, texto, cantidades y detalles finos",
    "Reconocer sesgos en las imágenes que genera la IA",
  ],
  lecciones: [
    { titulo: "De un texto a una imagen", video: {"id":"ZMnKFCp5wzQ","t":"Cómo funciona la IA que genera imágenes: modelos de difusión · El Hub De Giorgio (7:40)"}, html: `
      <p class="idea">Un generador de imágenes con IA <strong>no busca fotos en internet</strong>: crea una imagen nueva a partir de tu descripción, usando lo que aprendió de millones de imágenes con sus textos.</p>
      <p>En todo el curso acompañamos a <strong>Diego</strong>, que da talleres de dibujo para chicos en un club de barrio de Mar del Plata. Necesita flyers, carteles e ilustraciones, no tiene presupuesto para un diseñador y quiere usar la IA sin meterse en problemas.</p>
      <table>
        <tr><th>Palabra</th><th>Qué quiere decir</th></tr>
        <tr><td>IA generativa</td><td>Inteligencia artificial que crea contenido nuevo: texto, imágenes, audio</td></tr>
        <tr><td>Modelo</td><td>El programa entrenado que hace el trabajo</td></tr>
        <tr><td>Entrenamiento</td><td>La etapa en que el modelo aprende mirando muchísimos ejemplos</td></tr>
        <tr><td>Prompt</td><td>La instrucción que le escribís: "un gato naranja leyendo un libro"</td></tr>
      </table>
      <pre><code>Cómo trabaja un modelo de difusión (la técnica más común):
1. Empieza con una imagen de puro ruido, como la nieve de un televisor viejo.
2. Paso a paso, le va sacando ruido.
3. En cada paso se guía por tu prompt: "¿esto se parece más a un gato leyendo?"
4. Después de muchos pasos, queda una imagen nítida.</code></pre>
      <p><strong>Por eso cada vez sale distinto:</strong> el ruido del comienzo es al azar. El mismo prompt da imágenes diferentes, y podés pedir varias para elegir.</p>
      <p><strong>No entiende como una persona:</strong> aprendió qué formas y colores suelen ir con qué palabras. No sabe qué es un gato; sabe cómo suelen verse las imágenes que dicen "gato".</p>
      <p>Por ejemplo, Diego pidió "un chico dibujando en un club de barrio" y le salieron 4 imágenes distintas. Ninguna era una foto real: todas eran nuevas.</p>` },
    { titulo: "Lo que la IA hace mal", html: `
      <p class="idea">Las imágenes con IA impresionan, pero fallan en cosas que una persona no fallaría. Conocer esos errores te ayuda a <strong>revisar antes de usar</strong> una imagen.</p>
      <table>
        <tr><th>Falla típica</th><th>Ejemplo</th><th>Qué hacés</th></tr>
        <tr><td>Manos y dedos</td><td>Seis dedos, dedos fundidos</td><td>Mirá cada mano; regenerá o recortá</td></tr>
        <tr><td>Texto dentro de la imagen</td><td>"Tallr de dibjo"</td><td>Pedí la imagen sin texto y agregalo después en un editor</td></tr>
        <tr><td>Cantidades</td><td>Pediste 3 chicos y salen 5</td><td>Contá; si importa, regenerá</td></tr>
        <tr><td>Detalles lógicos</td><td>Una silla con tres patas en el aire, sombras al revés</td><td>Mirá con zoom antes de publicar</td></tr>
        <tr><td>Datos reales</td><td>Un mapa de tu barrio inventado</td><td>Nunca la uses para información real</td></tr>
      </table>
      <p><strong>Con el tiempo mejoran:</strong> las herramientas nuevas escriben texto mejor que las de hace un año, pero igual conviene revisar letra por letra.</p>
      <p><strong>La IA no sabe qué es verdad:</strong> si le pedís "el edificio de la municipalidad de mi ciudad", va a inventar uno creíble. Para mostrar algo real, usá una foto real.</p>
      <pre><code>Revisión antes de usar una imagen (1 minuto):
[ ] Manos y caras sin deformaciones
[ ] Texto bien escrito (o sin texto)
[ ] Cantidades correctas
[ ] Nada raro en el fondo
[ ] No muestra como real algo que es inventado</code></pre>
      <p>Por ejemplo, Diego casi imprime 50 flyers con una nena que tenía seis dedos en la mano del lápiz. Lo vio al hacer la revisión con zoom y regeneró la imagen.</p>` },
    { titulo: "Sesgos: lo que la IA da por sentado", html: `
      <p class="idea">La IA aprende de imágenes que ya existen, con sus prejuicios. Por eso tiende a repetir <strong>estereotipos</strong>: si no aclarás, elige por vos.</p>
      <p>Un <strong>sesgo</strong> es una tendencia a mostrar las cosas siempre de una manera, aunque la realidad sea más variada. Un <strong>estereotipo</strong> es una idea simplificada sobre un grupo de personas.</p>
      <table>
        <tr><th>Si pedís...</th><th>Suele mostrar...</th><th>La realidad</th></tr>
        <tr><td>"Un médico"</td><td>Casi siempre un varón</td><td>En Argentina hay muchas médicas</td></tr>
        <tr><td>"Una familia"</td><td>Papá, mamá y dos hijos</td><td>Hay familias de todo tipo</td></tr>
        <tr><td>"Una ciudad de Latinoamérica"</td><td>Calles de tierra y casas pobres</td><td>Hay de todo, también grandes ciudades</td></tr>
        <tr><td>"Una persona exitosa"</td><td>Traje, oficina, piel clara</td><td>El éxito no tiene una sola cara</td></tr>
      </table>
      <p><strong>Cómo corregirlo:</strong> describí lo que querés mostrar. "Una médica de unos 50 años atendiendo en una salita de barrio" da otra imagen que "un médico".</p>
      <p><strong>Por qué importa:</strong> las imágenes que publicás le dicen a la gente quién "encaja" en un lugar. Si tus carteles del taller muestran solo un tipo de chico, otros pueden sentir que no es para ellos.</p>
      <p><strong>Revisá el conjunto:</strong> una imagen sola puede estar bien, pero si en 10 imágenes todas las personas son iguales, hay un sesgo.</p>
      <p>Por ejemplo, Diego pidió "chicos en un taller de dibujo" y en las 8 imágenes había solo varones. Cambió a "chicas y chicos de distintas edades" y el flyer representó mejor a su grupo.</p>` },
  ],
  practica: [
    "Escribí el mismo prompt 3 veces en una herramienta y anotá en qué cambian las imágenes.",
    "Generá 4 imágenes con personas usando las manos y anotá cuántas tienen errores en los dedos.",
    "Pedí \"un científico\" y después \"una científica argentina de 30 años en un laboratorio\". Anotá 3 diferencias entre los resultados.",
  ],
  recursos: [
    { t: "Microsoft Learn: fundamentos de la IA generativa (curso gratis en castellano)", url: "https://learn.microsoft.com/es-es/training/modules/explore-generative-ai/" },
    { t: "Bing Image Creator (Microsoft): crear imágenes gratis con una cuenta", url: "https://www.bing.com/images/create" },
    { t: "Curso de este sitio: Prompts desde cero", url: "https://pkeios.github.io/EiaLearning/prompts/" },
  ],
  quiz: [
    { q: "Si escribís un prompt, ¿qué hace el generador de imágenes?", opciones: ["Busca una foto en internet","Te muestra una foto de un banco de imágenes","Crea una imagen nueva a partir de lo que aprendió","Copia la primera imagen de Google"], correcta: 2, explicacion: "Genera algo nuevo. \"Busca en internet\" tienta porque el resultado parece una foto, pero no existía antes." },
    { q: "Tu mismo prompt da imágenes distintas cada vez. ¿Por qué?", opciones: ["Porque el modelo arranca de un ruido al azar","Porque está roto","Porque cambia tu prompt","Porque copia de sitios distintos"], correcta: 0, explicacion: "Cada imagen empieza de un ruido diferente. \"Está roto\" tienta, pero es parte de cómo funciona." },
    { q: "Le pedís a la IA \"un gato\" y te da uno. ¿Qué sabe la IA sobre los gatos?", opciones: ["Todo lo que sabe un veterinario","Que maúllan y comen","Nada, adivina al azar","Cómo suelen verse las imágenes que dicen \"gato\""], correcta: 3, explicacion: "Aprendió formas y colores asociados a palabras. \"Adivina al azar\" tienta, pero sí aprendió patrones." },
    { q: "Tu flyer generado tiene una persona con seis dedos. ¿Qué hacés?", opciones: ["Lo imprimís igual, nadie mira","Regenerás o recortás antes de usarlo","Lo publicás y avisás después","Borrás la herramienta"], correcta: 1, explicacion: "Las manos son una falla típica. \"Nadie mira\" tienta, pero se nota y quita seriedad." },
    { q: "Querés un cartel que diga \"Taller de dibujo\". ¿Qué conviene?", opciones: ["Confiar en que la IA lo escriba bien","Escribirlo a mano encima de la pantalla","Generar la imagen sin texto y agregarlo en un editor","No poner texto nunca"], correcta: 2, explicacion: "La IA suele escribir mal. Confiar tienta porque a veces sale, pero conviene revisar o agregarlo vos." },
    { q: "Si necesitás mostrar cómo es la plaza de tu barrio, ¿qué usás?", opciones: ["Una foto real de la plaza","Una imagen con IA de \"la plaza de mi barrio\"","Cualquier plaza de IA","Un dibujo inventado como si fuera la plaza"], correcta: 0, explicacion: "La IA inventa una plaza creíble. Usarla tienta por rápido, pero mostraría algo que no existe." },
    { q: "Pediste 3 chicos y salieron 5. ¿Qué te enseña?", opciones: ["Que siempre da 5","Que no entiende números en castellano","Nada","Que hay que contar: la IA falla con las cantidades"], correcta: 3, explicacion: "Las cantidades son una falla típica. \"Siempre da 5\" tienta, pero varía cada vez." },
    { q: "Le pedís \"un médico\" y en las 8 imágenes salen varones. ¿Qué pasa?", opciones: ["Que no existen médicas","Un sesgo: la IA repite el estereotipo de lo que aprendió","Que la herramienta es machista a propósito","Que es casualidad"], correcta: 1, explicacion: "Repite lo que más vio. \"Es casualidad\" tienta con una imagen, pero con 8 iguales es un sesgo." },
    { q: "Querés mostrar una médica de barrio. ¿Qué escribís?", opciones: ["\"Un médico\"","\"Medicina\"","\"Una médica de unos 50 años atendiendo en una salita de barrio\"","\"Una persona\""], correcta: 2, explicacion: "Describir evita que la IA elija por vos. \"Un médico\" tienta por corto, pero cae en el estereotipo." },
    { q: "Tu flyer muestra solo un tipo de chico. ¿Por qué importa?", opciones: ["Otros pueden sentir que el taller no es para ellos","No importa, es solo una imagen","Porque la IA cobra más","Porque es ilegal"], correcta: 0, explicacion: "Las imágenes dicen quién encaja. \"Solo una imagen\" tienta, pero comunica a quién invitás." },
    { q: "Generaste 10 imágenes para tus redes. ¿Cómo revisás si hay sesgo?", opciones: ["Mirás solo la primera","No se puede revisar","Contás los colores","Mirás el conjunto: si todas las personas son iguales, hay sesgo"], correcta: 3, explicacion: "El sesgo se ve en el conjunto. Mirar una tienta por rápido, pero una sola puede estar bien." },
    { q: "Antes de imprimir 50 flyers con una imagen de IA, ¿qué hacés?", opciones: ["Imprimís uno de prueba sin mirar","La revisión de un minuto: manos, texto, cantidades y fondo","Nada, la IA no se equivoca","Pedís otra igual"], correcta: 1, explicacion: "Revisar evita gastar en un error. \"La IA no se equivoca\" tienta por lo prolija que se ve, pero falla." },
  ],
},
{
  id: "herramientas",
  icono: "🧰",
  titulo: "Herramientas gratis y cómo empezar",
  nivel: "Básico",
  objetivos: [
    "Elegir una herramienta gratuita según lo que necesitás hacer",
    "Crear tu primera imagen y descargarla",
    "Cuidar tus datos y los de otras personas al usar estas herramientas",
  ],
  lecciones: [
    { titulo: "Qué herramientas hay", video: {"id":"u0RI2kYa5D0","t":"Te enseñamos Bing Image Creator · Marketing4eCommerce (0:52)"}, html: `
      <p class="idea">Hay varias herramientas para crear imágenes con IA <strong>gratis o con un uso gratis limitado</strong>. Casi todas funcionan en el navegador o en el celular y piden una cuenta.</p>
      <table>
        <tr><th>Herramienta</th><th>De quién es</th><th>Bueno para</th><th>Ojo</th></tr>
        <tr><td>Bing Image Creator</td><td>Microsoft</td><td>Empezar: escribís y listo</td><td>Pide cuenta de Microsoft</td></tr>
        <tr><td>Microsoft Designer</td><td>Microsoft</td><td>Flyers y publicaciones con texto y diseño</td><td>Pide cuenta de Microsoft</td></tr>
        <tr><td>Adobe Firefly</td><td>Adobe</td><td>Imágenes y editar partes de una foto</td><td>Créditos gratis por mes, después se paga</td></tr>
        <tr><td>Gemini y ChatGPT</td><td>Google y OpenAI</td><td>Pedir y corregir conversando</td><td>Límite de imágenes por día en la versión gratis</td></tr>
        <tr><td>Canva</td><td>Canva</td><td>Diseños completos con plantillas</td><td>Algunas funciones son pagas</td></tr>
      </table>
      <p>Un <strong>crédito</strong> es una unidad de uso: cada imagen gasta uno o más. Cuando se terminan los gratis del mes, hay que esperar o pagar.</p>
      <p><strong>Las condiciones cambian seguido:</strong> nombres, límites y precios se actualizan cada pocos meses. Antes de depender de una herramienta, mirá qué ofrece hoy.</p>
      <p><strong>No hace falta la mejor:</strong> para un flyer de barrio alcanza cualquiera de estas. Elegí una y aprendé a usarla bien antes de saltar a otra.</p>
      <p>Por ejemplo, Diego ya tenía una cuenta de Microsoft por el correo de Outlook. Entró a Bing Image Creator con esa cuenta y en 2 minutos tenía sus primeras 4 imágenes.</p>` },
    { titulo: "Tu primera imagen, paso a paso", video: {"id":"l-lL2xJQbpM","t":"Adobe Firefly: guía completa en español · PHOTOLARIUM (8:03)"}, html: `
      <p class="idea">El recorrido es casi igual en todas las herramientas: <strong>escribís, generás, elegís, ajustás y descargás</strong>.</p>
      <pre><code>1. Entrá a la herramienta e iniciá sesión con tu cuenta.
2. Escribí el prompt en la caja de texto.
   Ej.: "Ilustración de colores de chicas y chicos dibujando
         en una mesa larga de un club de barrio, estilo acuarela"
3. Apretá "Generar" (o "Crear") y esperá unos segundos.
4. Mirá las opciones (suelen salir 2 a 4).
5. Si ninguna sirve, cambiá el prompt y volvé a generar.
6. Elegí la mejor y descargala (botón de flecha o "Descargar").
7. Guardala con un nombre que diga qué es: flyer-taller-marzo.png</code></pre>
      <table>
        <tr><th>Opción común</th><th>Para qué sirve</th></tr>
        <tr><td>Proporción (1:1, 16:9, 9:16)</td><td>La forma: cuadrada para publicaciones, vertical para historias</td></tr>
        <tr><td>Estilo</td><td>Foto, ilustración, acuarela, 3D...</td></tr>
        <tr><td>Variaciones</td><td>Más opciones parecidas a una que te gustó</td></tr>
      </table>
      <p><strong>Proporción</strong> es la relación entre el ancho y el alto. 9:16 es la de la pantalla del celular parado.</p>
      <p><strong>Anotá el prompt que funcionó:</strong> en un documento o en una nota del celular. Después vas a querer imágenes parecidas y no te vas a acordar de qué escribiste.</p>
      <p>Por ejemplo, Diego generó 3 rondas hasta tener la imagen que quería. Copió el prompt ganador en una nota del celular con la fecha, y el mes siguiente lo reusó cambiando solo la estación del año.</p>` },
    { titulo: "Tus datos y los de los demás", html: `
      <p class="idea">Lo que escribís y las fotos que subís a una herramienta de IA <strong>quedan en los servidores de una empresa</strong>. Cuidá tus datos y, sobre todo, los de otras personas.</p>
      <table>
        <tr><th>Sí</th><th>No</th></tr>
        <tr><td>Describir con palabras lo que querés</td><td>Subir fotos de otras personas sin su permiso</td></tr>
        <tr><td>Usar fotos tuyas o de tus productos</td><td>Subir fotos de chicos (ni siquiera de tus hijos o alumnos)</td></tr>
        <tr><td>Inventar nombres para los ejemplos</td><td>Escribir nombres, direcciones o DNI reales</td></tr>
        <tr><td>Leer qué dice la herramienta sobre privacidad</td><td>Aceptar todo sin mirar</td></tr>
      </table>
      <p><strong>Datos personales</strong> son los que identifican a una persona: nombre, cara, DNI, dirección, teléfono. En Argentina los protege la Ley 25.326, y la Agencia de Acceso a la Información Pública (AAIP) recibe consultas y reclamos.</p>
      <p><strong>Fotos de chicos, nunca:</strong> aunque sea para algo lindo, una foto de un chico subida a una herramienta deja de estar bajo tu control. Para el taller, Diego usa ilustraciones inventadas, no fotos de sus alumnos.</p>
      <p><strong>Configuración:</strong> algunas herramientas permiten que tus imágenes y textos no se usen para entrenar. Buscá en la configuración de privacidad opciones como "mejorar el modelo" o "entrenamiento".</p>
      <p>Por ejemplo, una mamá le pidió a Diego que "convirtiera en dibujito animado" la foto de su hija para un cumpleaños. Él le explicó por qué no subía fotos de chicos y le ofreció crear un personaje inventado parecido a lo que la nena quería.</p>` },
  ],
  practica: [
    "Elegí una herramienta de la tabla, creá tu cuenta y generá 4 imágenes. Anotá cuánto tardó y si te pidió algún dato.",
    "Generá la misma imagen en proporción 1:1 y 9:16 y anotá para qué red usarías cada una.",
    "Buscá en la configuración de privacidad de la herramienta si podés evitar que usen tus datos para entrenar. Anotá qué encontraste.",
  ],
  recursos: [
    { t: "Bing Image Creator (Microsoft): crear imágenes gratis con una cuenta", url: "https://www.bing.com/images/create" },
    { t: "Microsoft Designer: imágenes y diseños con IA", url: "https://designer.microsoft.com/" },
    { t: "Adobe Firefly: generador de imágenes de Adobe", url: "https://firefly.adobe.com/" },
  ],
  quiz: [
    { q: "Tenés cuenta de Outlook y querés empezar ya. ¿Qué herramienta es la más directa?", opciones: ["Adobe Firefly, sin cuenta","Ninguna: todas son pagas","Bing Image Creator, con tu cuenta de Microsoft","Un programa que hay que instalar"], correcta: 2, explicacion: "Ya tenés la cuenta que pide. \"Todas son pagas\" tienta, pero hay usos gratis." },
    { q: "Se te terminaron los créditos gratis del mes en Firefly. ¿Qué significa?", opciones: ["Que para seguir tenés que esperar al mes siguiente o pagar","Que te bloquearon","Que borraron tus imágenes","Que la herramienta cerró"], correcta: 0, explicacion: "Los créditos son el uso gratis limitado. \"Te bloquearon\" tienta, pero es el límite normal." },
    { q: "Leíste en un video de hace dos años qué límite gratis tenía una herramienta. ¿Qué hacés?", opciones: ["Confiás en el video","Pagás por las dudas","Dejás de usarla","Mirás qué ofrece hoy: las condiciones cambian seguido"], correcta: 3, explicacion: "Nombres y límites cambian. Confiar en el video tienta, pero puede estar desactualizado." },
    { q: "Querés hacer un flyer con texto y diseño, no solo una imagen. ¿Qué te conviene?", opciones: ["Solo un generador de imágenes sueltas","Microsoft Designer o Canva, que arman diseños completos","Escribir el texto en el prompt y esperar","Ninguna"], correcta: 1, explicacion: "Esas combinan imagen, texto y diseño. Pedir el texto en el prompt tienta, pero suele salir mal escrito." },
    { q: "Ninguna de las 4 imágenes te sirve. ¿Qué hacés?", opciones: ["Usás la menos mala","Te rendís","Cambiás el prompt y volvés a generar","Cambiás de herramienta sin tocar el prompt"], correcta: 2, explicacion: "Ajustar el prompt es parte del proceso. Cambiar de herramienta tienta, pero el problema suele ser el prompt." },
    { q: "Vas a publicar una historia de Instagram. ¿Qué proporción elegís?", opciones: ["9:16, vertical","16:9, horizontal","1:1 siempre","La que salga"], correcta: 0, explicacion: "9:16 es la pantalla del celular parado. 16:9 tienta porque tiene los mismos números, pero es horizontal." },
    { q: "Un prompt te dio justo la imagen que querías. ¿Qué hacés?", opciones: ["Lo borrás, ya está","Te lo acordás de memoria","Lo publicás en la imagen","Lo anotás con la fecha para reusarlo"], correcta: 3, explicacion: "Anotarlo te ahorra trabajo la próxima. \"De memoria\" tienta, pero en un mes no te vas a acordar." },
    { q: "Guardás la imagen descargada. ¿Qué nombre conviene?", opciones: ["El que viene: image123456.png","Uno que diga qué es, como flyer-taller-marzo.png","asdf.png","Sin nombre"], correcta: 1, explicacion: "Un nombre claro la hace fácil de encontrar. El que viene tienta por cómodo, pero no dice nada." },
    { q: "Una mamá te pide que conviertas en dibujito la foto de su hija. ¿Qué hacés?", opciones: ["La subís porque la mamá autoriza","La subís y la borrás después","No subís la foto y ofrecés un personaje inventado","La subís a varias herramientas para comparar"], correcta: 2, explicacion: "La foto de un chico deja de estar bajo tu control. \"La mamá autoriza\" tienta, pero la regla del curso es no subir fotos de chicos." },
    { q: "Querés un ejemplo con datos de una persona en tu prompt. ¿Qué escribís?", opciones: ["Un nombre inventado, sin DNI ni dirección","Los datos reales de un vecino","Tu DNI para que sea realista","El teléfono del club"], correcta: 0, explicacion: "Los datos reales quedan en servidores ajenos. Datos reales tientan por realismo, pero no hacen falta." },
    { q: "Tenés una duda o un reclamo sobre el uso de tus datos personales en Argentina. ¿Qué organismo se ocupa?", opciones: ["La empresa de IA, y nadie más","El club de barrio","Nadie: no hay ley","La Agencia de Acceso a la Información Pública (AAIP)"], correcta: 3, explicacion: "La AAIP aplica la Ley 25.326. \"No hay ley\" tienta, pero sí la hay." },
    { q: "Querés que tus imágenes no se usen para entrenar el modelo. ¿Dónde buscás?", opciones: ["En el prompt, escribiendo \"no me entrenes\"","En la configuración de privacidad de la herramienta","En el nombre del archivo","No se puede en ninguna"], correcta: 1, explicacion: "Si existe la opción, está en privacidad. Escribirlo en el prompt tienta, pero el prompt no cambia la configuración." },
  ],
},
{
  id: "prompts",
  icono: "✍️",
  titulo: "Escribir prompts para imágenes",
  nivel: "Intermedio",
  objetivos: [
    "Armar un prompt con sujeto, acción, lugar, estilo, luz y encuadre",
    "Mejorar una imagen cambiando una sola cosa por vez",
    "Editar una parte de la imagen sin rehacer todo",
  ],
  lecciones: [
    { titulo: "Las partes de un buen prompt", html: `
      <p class="idea">Un buen prompt de imagen describe <strong>qué se ve, dónde, cómo y con qué estilo</strong>. Cuanto más claro, menos decide la IA por vos.</p>
      <table>
        <tr><th>Parte</th><th>Pregunta</th><th>Ejemplo</th></tr>
        <tr><td>Sujeto</td><td>¿Quién o qué?</td><td>Una nena de 8 años con trenzas</td></tr>
        <tr><td>Acción</td><td>¿Qué hace?</td><td>pintando un árbol con témperas</td></tr>
        <tr><td>Lugar</td><td>¿Dónde?</td><td>en una mesa de madera de un club de barrio</td></tr>
        <tr><td>Estilo</td><td>¿Foto, dibujo, qué técnica?</td><td>ilustración estilo acuarela, colores cálidos</td></tr>
        <tr><td>Luz</td><td>¿Cómo está iluminado?</td><td>luz de tarde entrando por la ventana</td></tr>
        <tr><td>Encuadre</td><td>¿Desde dónde se mira?</td><td>plano medio, vista de costado</td></tr>
      </table>
      <pre><code>Prompt flojo:
  "chica pintando"

Prompt completo:
  "Ilustración estilo acuarela de una nena de 8 años con trenzas
   pintando un árbol con témperas en una mesa de madera de un club
   de barrio, luz de tarde entrando por la ventana, colores cálidos,
   plano medio, vista de costado"</code></pre>
      <p><strong>Encuadre</strong> es cuánto se ve: plano general (todo el lugar), plano medio (de la cintura para arriba), primer plano (la cara o un detalle).</p>
      <p><strong>En castellano funciona:</strong> las herramientas actuales entienden bien el castellano. Si una no te entiende, probá el mismo prompt en inglés.</p>
      <p>Esto es lo mismo que viste en el curso de prompts de este sitio: contexto, detalle y formato, pero aplicado a una imagen.</p>
      <p>Por ejemplo, Diego pasó de "chicos dibujando" a un prompt de 6 partes y por primera vez la imagen se pareció a su taller de verdad.</p>` },
    { titulo: "Mejorar de a una cosa", html: `
      <p class="idea">Cuando una imagen no sale como querés, <strong>cambiá una sola cosa del prompt por vez</strong>. Así sabés qué cambio hizo la diferencia.</p>
      <pre><code>Intento 1: "...estilo acuarela..."           → muy apagada
Intento 2: "...estilo acuarela, colores vivos..."  → mejor, pero lejos
Intento 3: "...colores vivos, primer plano..."     → ¡esta!
(se cambió una cosa en cada intento y se anotó el resultado)</code></pre>
      <table>
        <tr><th>Si la imagen...</th><th>Probá agregar o cambiar...</th></tr>
        <tr><td>Está muy cargada</td><td>"fondo simple", "fondo liso", "minimalista"</td></tr>
        <tr><td>No tiene el estilo que querías</td><td>Nombrá la técnica: "dibujo con lápices de colores", "foto", "recortes de papel"</td></tr>
        <tr><td>Se ve fría</td><td>"colores cálidos", "luz de atardecer"</td></tr>
        <tr><td>Falta algo</td><td>Ponelo al principio del prompt: lo primero pesa más</td></tr>
        <tr><td>Aparece algo que no querés</td><td>"sin texto", "sin personas" (algunas herramientas tienen un campo aparte para eso)</td></tr>
      </table>
      <p><strong>Estilos de artistas:</strong> no escribas "al estilo de" un artista vivo con nombre y apellido. Además de ser injusto con su trabajo, lo vas a ver en el módulo de derechos. Describí la técnica: "trazos gruesos, colores planos".</p>
      <p><strong>Ojo con las imágenes falsas:</strong> mejorar una imagen está bien; hacer que algo inventado parezca una foto real de una persona o un hecho, no. Eso tiene nombre (deepfake) y lo vas a ver a fondo en su propio módulo.</p>
      <p>Por ejemplo, Diego cambiaba todo el prompt cada vez y no sabía qué funcionaba. Cuando empezó a cambiar de a una cosa, en 3 intentos llegó a la imagen.</p>` },
    { titulo: "Editar una parte de la imagen", html: `
      <p class="idea">Muchas herramientas permiten <strong>cambiar solo una zona</strong> de la imagen: pintás encima lo que querés cambiar y escribís qué poner. Se llama relleno generativo o edición por zona.</p>
      <pre><code>Edición por zona:
1. Abrí la imagen en la herramienta (Firefly, Designer, Gemini, ChatGPT...).
2. Elegí "editar", "relleno generativo" o un pincel.
3. Pintá la zona a cambiar: por ejemplo, la mano con seis dedos.
4. Escribí qué querés ahí: "mano sosteniendo un lápiz".
5. Generá y elegí la mejor opción.</code></pre>
      <table>
        <tr><th>Sirve para</th><th>Ejemplo</th></tr>
        <tr><td>Arreglar una falla</td><td>Una mano deforme, un objeto raro en el fondo</td></tr>
        <tr><td>Agregar algo</td><td>Una planta en la mesa vacía</td></tr>
        <tr><td>Quitar algo</td><td>Un cartel con letras sin sentido</td></tr>
        <tr><td>Ampliar</td><td>Extender el fondo para pasar de cuadrada a vertical</td></tr>
      </table>
      <p><strong>Las herramientas de chat</strong> (Gemini, ChatGPT) también editan conversando: "sacale el gorro" o "hacé el fondo azul". Funciona mejor con pedidos cortos y de a uno.</p>
      <p><strong>Con fotos reales, cuidado:</strong> editar una foto tuya de un producto para sacar un cable del fondo está bien. Cambiar el producto para que se vea mejor de lo que es engaña al cliente (lo viste en el curso de fotos de producto).</p>
      <p>Por ejemplo, a Diego le encantaba una imagen salvo por un cartel con letras sin sentido en la pared. Pintó el cartel, escribió "pared lisa con dibujos de chicos colgados" y la imagen quedó lista.</p>` },
  ],
  practica: [
    "Escribí un prompt con las 6 partes de la tabla, generá la imagen y anotá qué parte del prompt se respetó menos.",
    "Hacé 3 intentos cambiando una sola cosa por vez y anotá en una tabla qué cambiaste y qué pasó.",
    "Usá la edición por zona para arreglar o quitar un detalle de una imagen y anotá cuántos intentos te llevó.",
  ],
  recursos: [
    { t: "Curso de este sitio: Prompts desde cero", url: "https://pkeios.github.io/EiaLearning/prompts/" },
    { t: "Adobe Firefly: generador de imágenes de Adobe", url: "https://firefly.adobe.com/" },
    { t: "Microsoft Designer: imágenes y diseños con IA", url: "https://designer.microsoft.com/" },
  ],
  quiz: [
    { q: "Si tu prompt dice solo \"chica pintando\", ¿qué pasa?", opciones: ["Sale exactamente lo que imaginabas","Da error por corto","La IA decide por vos el estilo, el lugar, la luz y todo lo demás","Sale una foto de una chica real"], correcta: 2, explicacion: "Lo que no decís, lo decide la IA. \"Sale lo que imaginabas\" tienta, pero ella no sabe qué imaginaste." },
    { q: "En \"luz de tarde entrando por la ventana\", ¿qué parte del prompt es?", opciones: ["La luz","El sujeto","El encuadre","La acción"], correcta: 0, explicacion: "Describe cómo está iluminada la escena. El lugar tienta por la ventana, pero lo que se define es la luz." },
    { q: "Querés que se vea solo la cara y las manos de la nena. ¿Qué encuadre pedís?", opciones: ["Plano general","Vista aérea de la ciudad","Ninguno","Primer plano"], correcta: 3, explicacion: "Primer plano muestra de cerca. Plano general tienta, pero muestra todo el lugar." },
    { q: "Una herramienta no entiende tu prompt en castellano. ¿Qué probás?", opciones: ["Abandonar","El mismo prompt en inglés","Escribirlo con faltas","Ponerlo todo en mayúsculas"], correcta: 1, explicacion: "La mayoría entiende castellano, pero si una no, el inglés suele funcionar. Mayúsculas tienta, pero no cambia nada." },
    { q: "Cambiaste todo el prompt y la imagen mejoró. ¿Qué no sabés?", opciones: ["Si la imagen mejoró","Qué herramienta usaste","Cuál de los cambios hizo la diferencia","Nada, ya sabés todo"], correcta: 2, explicacion: "Por eso conviene cambiar de a una cosa. \"Sabés todo\" tienta, pero no podés repetir el truco." },
    { q: "Tu imagen está muy cargada de cosas. ¿Qué agregás?", opciones: ["\"fondo simple\" o \"minimalista\"","\"más detalles\"","\"8k ultra\"","\"muchos colores\""], correcta: 0, explicacion: "Pedir simpleza la limpia. \"Más detalles\" tienta por calidad, pero carga más." },
    { q: "Algo importante no aparece en la imagen. ¿Dónde lo ponés en el prompt?", opciones: ["Al final, entre paréntesis","En otro prompt aparte","No lo ponés","Al principio: lo primero pesa más"], correcta: 3, explicacion: "Las primeras palabras suelen tener más peso. El final tienta por ordenado, pero pesa menos." },
    { q: "Querés un estilo parecido al de una ilustradora conocida. ¿Qué escribís?", opciones: ["\"Al estilo de\" su nombre y apellido","La técnica: \"trazos gruesos, colores planos\"","Su firma","El nombre de su libro"], correcta: 1, explicacion: "Describir la técnica evita aprovechar su trabajo sin permiso. Su nombre tienta por directo, pero es injusto con ella." },
    { q: "Tu imagen tiene una mano con seis dedos y el resto está perfecto. ¿Qué hacés?", opciones: ["Rehacés toda la imagen desde cero","La publicás igual","Editás solo esa zona con relleno generativo","Borrás la mano con el dedo en la pantalla"], correcta: 2, explicacion: "Editar la zona conserva lo bueno. Rehacer todo tienta, pero podés perder la imagen que te gustaba." },
    { q: "Querés pasar una imagen cuadrada a vertical sin cortarla. ¿Qué usás?", opciones: ["Ampliar o extender el fondo con la IA","Estirarla a lo alto","Recortarla por los costados","Rotarla"], correcta: 0, explicacion: "Extender genera fondo nuevo arriba y abajo. Estirarla tienta por rápido, pero deforma todo." },
    { q: "En una herramienta de chat querés varios cambios. ¿Cómo los pedís?", opciones: ["Diez cambios en un solo mensaje","Sin decir qué cambiar","En otro idioma cada uno","De a uno, con pedidos cortos"], correcta: 3, explicacion: "De a uno funciona mejor. Todos juntos tienta por rápido, pero suele ignorar algunos." },
    { q: "Tenés una foto real de una mermelada que vendés. ¿Qué edición está bien?", opciones: ["Hacer el frasco más grande de lo que es","Sacar un cable del fondo","Cambiar el color de la mermelada","Agregar frutas que no tiene"], correcta: 1, explicacion: "Limpiar el fondo no engaña. Cambiar el producto tienta para vender más, pero engaña al cliente." },
  ],
},
{
  id: "usos",
  icono: "🎨",
  titulo: "Usos útiles en la vida diaria",
  nivel: "Intermedio",
  objetivos: [
    "Crear un flyer o una invitación combinando una imagen de IA con texto propio",
    "Hacer ilustraciones para una clase, un cuento o una presentación",
    "Decidir cuándo conviene una imagen de IA y cuándo una foto real o un diseñador",
  ],
  lecciones: [
    { titulo: "Flyers, invitaciones y carteles", html: `
      <p class="idea">El uso más práctico: una <strong>imagen de IA de fondo</strong> y el <strong>texto escrito por vos</strong> encima, en un editor. La IA pone el dibujo; vos, la información.</p>
      <pre><code>Receta de un flyer:
1. Generá la imagen SIN texto y con espacio libre:
   "...con mucho espacio vacío arriba para escribir un título"
2. Abrila en un editor (Canva, Microsoft Designer o el del celular).
3. Agregá el texto vos: título grande, fecha, hora, lugar, contacto.
4. Revisá: ¿se lee desde lejos? ¿están bien la fecha y la hora?
5. Exportá: PNG para redes, PDF para imprimir.</code></pre>
      <table>
        <tr><th>Elemento</th><th>Consejo</th></tr>
        <tr><td>Título</td><td>Grande, corto, que se lea a 3 metros</td></tr>
        <tr><td>Datos</td><td>Qué, cuándo, dónde, cuánto cuesta, cómo anotarse</td></tr>
        <tr><td>Imagen</td><td>Que acompañe, no que tape el texto</td></tr>
        <tr><td>Contraste</td><td>Letra oscura sobre fondo claro o al revés</td></tr>
      </table>
      <p><strong>Contraste</strong> es la diferencia entre el color de la letra y el del fondo. Con poco contraste (gris sobre celeste), no se lee.</p>
      <p><strong>Los datos los escribís vos, siempre:</strong> si le pedís a la IA que ponga la fecha, puede inventar un día, un número de teléfono o cambiar una letra de la dirección.</p>
      <p>Por ejemplo, Diego generó una ilustración con espacio arriba, la abrió en Canva y escribió "Taller de dibujo · Sábados 10 h · Club Unión". Lo imprimió en A4 y lo pegó en la entrada del club.</p>` },
    { titulo: "Ilustrar una clase, un cuento o una presentación", html: `
      <p class="idea">La IA es útil para <strong>ilustrar ideas</strong>: un personaje para un cuento, una escena para explicar un tema, una portada para una presentación.</p>
      <table>
        <tr><th>Necesitás</th><th>Prompt de ejemplo</th></tr>
        <tr><td>Un personaje que se repita</td><td>"Un carpincho con lentes y bufanda roja, estilo libro infantil, fondo blanco"</td></tr>
        <tr><td>Una escena para explicar</td><td>"Ilustración simple del ciclo del agua: mar, nubes, lluvia y río, para chicos de primaria"</td></tr>
        <tr><td>Una portada</td><td>"Fondo abstracto en tonos verdes y amarillos con espacio a la izquierda para un título"</td></tr>
      </table>
      <p><strong>Para que un personaje sea el mismo en varias imágenes,</strong> repetí la misma descripción exacta en cada prompt (y la misma frase de estilo). Algunas herramientas tienen una función de "referencia" para mantenerlo parecido.</p>
      <p><strong>En una clase, la imagen no reemplaza el dato:</strong> un dibujo del ciclo del agua sirve para mirar, pero revisá que no tenga errores (una flecha al revés, un río que sube la montaña). Si algo tiene que ser exacto, como un mapa o un esquema del cuerpo, usá una fuente confiable.</p>
      <pre><code>Si la imagen es para enseñar:
[ ] ¿Muestra bien la idea, sin errores?
[ ] ¿Se ve que es una ilustración y no una foto real?
[ ] ¿Representa a gente diversa?
[ ] ¿Dice en algún lado que se hizo con IA?</code></pre>
      <p>Por ejemplo, Diego inventó con los chicos un cuento de un carpincho artista. Generó 5 escenas con la misma descripción del personaje y los chicos las colorearon impresas.</p>` },
    { titulo: "Cuándo sí y cuándo no", html: `
      <p class="idea">La IA es una herramienta más, no la respuesta a todo. Para cada caso preguntá: <strong>¿hace falta que sea real? ¿alguien puede salir perjudicado? ¿vale la pena un profesional?</strong></p>
      <table>
        <tr><th>Conviene IA</th><th>Conviene otra cosa</th></tr>
        <tr><td>Ilustración para un flyer de un evento</td><td>Foto real del producto que vendés (el cliente compra eso)</td></tr>
        <tr><td>Un personaje para un cuento</td><td>Logo de tu emprendimiento a largo plazo (mejor un diseñador: tiene que ser único y tuyo)</td></tr>
        <tr><td>Fondo para una presentación</td><td>Imagen de una persona real, como un vecino o un candidato</td></tr>
        <tr><td>Bocetos para mostrarle una idea a alguien</td><td>Una noticia o algo que tiene que ser verdad</td></tr>
      </table>
      <p><strong>Un boceto</strong> es un dibujo rápido para mostrar una idea antes de hacerla en serio. La IA es buenísima para eso: "así me imagino el mural del club".</p>
      <p><strong>Los diseñadores e ilustradores</strong> también usan IA, pero aportan criterio, identidad y algo único. Para un logo o una marca que vas a usar años, su trabajo vale lo que cuesta.</p>
      <p><strong>Decí que es IA cuando importa:</strong> si alguien podría creer que la imagen es una foto real, aclaralo. Algunas redes tienen una etiqueta para marcarlo.</p>
      <p>Por ejemplo, el club le pidió a Diego un logo nuevo. Él generó 6 bocetos con IA para que la comisión eligiera una idea, y después se lo encargaron a una diseñadora del barrio, que lo hizo único.</p>` },
  ],
  practica: [
    "Hacé un flyer para un evento real o inventado: imagen de IA sin texto y texto agregado por vos en un editor. Anotá los 5 datos que pusiste.",
    "Creá un personaje y generá 3 imágenes con la misma descripción. Anotá en cuántas se parece de verdad.",
    "Hacé una lista de 6 imágenes que necesitás este mes y anotá al lado de cada una si conviene IA, foto real o un profesional.",
  ],
  recursos: [
    { t: "Microsoft Designer: imágenes y diseños con IA", url: "https://designer.microsoft.com/" },
    { t: "Curso de este sitio: Fotos de producto con el celular", url: "https://pkeios.github.io/EiaLearning/fotos-producto/" },
    { t: "Creative Commons: licencias para compartir obras (en castellano)", url: "https://creativecommons.org/licenses/?lang=es" },
  ],
  quiz: [
    { q: "Tenés que hacer un flyer del taller. ¿Cómo repartís el trabajo?", opciones: ["La IA hace todo, con fecha y dirección","Vos dibujás todo a mano","La IA hace la imagen sin texto y vos escribís los datos en un editor","La IA escribe y vos dibujás"], correcta: 2, explicacion: "La IA puede inventar o escribir mal los datos. Que haga todo tienta por rápido, pero arriesgás un error." },
    { q: "Querés dejar lugar para el título. ¿Qué agregás al prompt?", opciones: ["\"con mucho espacio vacío arriba para escribir un título\"","\"con el título Taller de dibujo\"","\"sin espacio\"","Nada"], correcta: 0, explicacion: "Pedir espacio libre deja lugar al texto. Pedir el título tienta, pero suele salir mal escrito." },
    { q: "Tu flyer tiene letra gris sobre fondo celeste. ¿Qué problema hay?", opciones: ["Ninguno","Que es muy grande","Que tiene muchos datos","Poco contraste: no se lee"], correcta: 3, explicacion: "Hace falta diferencia entre letra y fondo. \"Ninguno\" tienta en la pantalla de cerca, pero de lejos no se lee." },
    { q: "Le pediste a la IA que ponga el teléfono del club en la imagen. ¿Qué riesgo hay?", opciones: ["Ninguno","Que invente o cambie números","Que llamen más","Que la imagen pese más"], correcta: 1, explicacion: "La IA no copia datos exactos. \"Ninguno\" tienta si se ve bien, pero un número cambiado arruina el flyer." },
    { q: "Vas a imprimir el flyer. ¿En qué formato lo exportás?", opciones: ["Solo PNG chiquito","Captura de pantalla","PDF","Texto plano"], correcta: 2, explicacion: "PDF es el formato para imprimir. La captura tienta por fácil, pero pierde calidad." },
    { q: "Querés el mismo carpincho en 5 escenas de un cuento. ¿Qué hacés?", opciones: ["Repetís la misma descripción exacta del personaje en cada prompt","Escribís \"el mismo de antes\"","Cambiás la descripción cada vez","Generás una sola imagen"], correcta: 0, explicacion: "La herramienta no recuerda; la descripción igual ayuda. \"El mismo de antes\" tienta, pero muchas no lo entienden." },
    { q: "Generaste un dibujo del ciclo del agua para tu clase y el río sube la montaña. ¿Qué hacés?", opciones: ["Lo usás, es solo un dibujo","Les decís que así es","Lo dejás para otra clase","Lo corregís o lo rehacés: la imagen enseña algo falso"], correcta: 3, explicacion: "Una imagen para enseñar tiene que estar bien. \"Es solo un dibujo\" tienta, pero los chicos aprenden de lo que ven." },
    { q: "Necesitás mostrar un mapa exacto del recorrido del colectivo. ¿Qué usás?", opciones: ["Una imagen de IA del recorrido","Una fuente confiable, como el mapa oficial","Un dibujo de memoria","Cualquier mapa"], correcta: 1, explicacion: "La IA inventa calles. Generarlo tienta, pero el mapa tiene que ser exacto." },
    { q: "Vendés budines y querés una imagen para la publicación de venta. ¿Qué conviene?", opciones: ["Un budín perfecto hecho con IA","La foto de otro budín de internet","Una foto real de tu budín","Un dibujo de un budín"], correcta: 2, explicacion: "El cliente compra lo que ve. El budín de IA tienta por lindo, pero no es el tuyo." },
    { q: "Tu emprendimiento necesita un logo para los próximos años. ¿Qué conviene?", opciones: ["Usar la IA para bocetos y encargarlo a un diseñador","El primer logo que salga de la IA","Copiar el de otra marca","No tener logo"], correcta: 0, explicacion: "Un logo tiene que ser único y tuyo. El de la IA tienta por gratis, pero puede parecerse a otros y no tiene criterio." },
    { q: "¿Para qué es buenísima la IA según la lección?", opciones: ["Para mostrar noticias reales","Para retratar a un vecino real","Para reemplazar fotos de productos","Para hacer bocetos y mostrar una idea antes de hacerla en serio"], correcta: 3, explicacion: "Un boceto muestra una idea rápido. Las noticias tientan por llamativas, pero tienen que ser verdad." },
    { q: "Tu imagen de IA parece una foto real de una escena del barrio. ¿Qué hacés al publicarla?", opciones: ["No decís nada","Aclarás que está hecha con IA","Decís que es una foto tuya","La publicás sin la fecha"], correcta: 1, explicacion: "Si alguien puede creer que es real, se aclara. No decir nada tienta, pero confunde a quien la ve." },
  ],
},
{
  id: "derechos",
  icono: "⚖️",
  titulo: "Derechos de autor y derecho a la imagen",
  nivel: "Intermedio",
  objetivos: [
    "Reconocer cuándo una imagen generada puede afectar los derechos de un artista o de una marca",
    "Aplicar el derecho a la imagen: no usar la cara de una persona sin su consentimiento",
    "Revisar las condiciones de uso comercial de una herramienta antes de vender algo hecho con ella",
  ],
  lecciones: [
    { titulo: "Derechos de autor: el trabajo de otros", html: `
      <p class="idea">Los <strong>derechos de autor</strong> protegen las obras de las personas que las crean: dibujos, fotos, música, libros. En Argentina están en la <strong>Ley 11.723</strong>. Que una imagen la haga la IA no te habilita a copiar obras ajenas.</p>
      <table>
        <tr><th>Situación</th><th>Riesgo</th><th>Mejor</th></tr>
        <tr><td>Pedir un personaje famoso (de una película o un dibujo animado)</td><td>Alto: el personaje tiene dueño</td><td>Crear un personaje propio</td></tr>
        <tr><td>Pedir "al estilo de" un artista vivo con nombre</td><td>Discutido y poco justo con su trabajo</td><td>Describir la técnica</td></tr>
        <tr><td>Poner el logo de una marca conocida</td><td>Alto: las marcas están protegidas</td><td>Sin marcas reales</td></tr>
        <tr><td>Subir una foto de un fotógrafo para "modificarla"</td><td>Alto: la foto es de quien la sacó</td><td>Usar fotos tuyas o con licencia libre</td></tr>
        <tr><td>Generar una escena original con tu propia descripción</td><td>Bajo</td><td>Así se trabaja</td></tr>
      </table>
      <p><strong>¿De quién es la imagen que genera la IA?</strong> Es un tema que se está discutiendo en todo el mundo y no hay una respuesta única. En muchos países se considera que una obra necesita un autor humano para estar protegida. Mientras tanto, lo que sí está claro es qué dice la herramienta en sus condiciones de uso.</p>
      <p><strong>Licencias libres:</strong> algunas obras se comparten con licencias <strong>Creative Commons</strong>, que dicen qué podés hacer con ellas (por ejemplo, usarlas citando al autor).</p>
      <p><strong>Esta lección te ayuda a entender los riesgos, pero no reemplaza a un abogado.</strong> Si vas a vender o hacer algo grande con imágenes de IA, consultá a un profesional.</p>
      <p>Por ejemplo, los chicos del taller le pidieron a Diego un flyer con un superhéroe famoso. Diego les propuso inventar entre todos "la superheroína del club": quedó original y sin problemas.</p>` },
    { titulo: "El derecho a la propia imagen", html: `
      <p class="idea">Tu cara y tu voz son tuyas. En Argentina, el <strong>artículo 53 del Código Civil y Comercial</strong> dice que para captar o reproducir la imagen o la voz de una persona hace falta su <strong>consentimiento</strong>, salvo algunas excepciones.</p>
      <p><strong>Consentimiento</strong> es el permiso que una persona da sabiendo para qué se va a usar lo suyo.</p>
      <table>
        <tr><th>Excepciones que menciona el artículo 53</th><th>Ejemplo</th></tr>
        <tr><td>La persona participa en actos públicos</td><td>Una foto general de un acto en la plaza</td></tr>
        <tr><td>Interés científico, cultural o educacional prioritario, cuidando no dañar</td><td>Una investigación seria</td></tr>
        <tr><td>Informar sobre acontecimientos de interés general</td><td>Una noticia</td></tr>
      </table>
      <p><strong>Con IA esto se vuelve más importante:</strong> hoy se puede crear una imagen de una persona real haciendo algo que nunca hizo. Usar la cara de alguien en una imagen inventada sin su permiso puede dañar su reputación y meterte en problemas legales.</p>
      <pre><code>Antes de crear una imagen con una persona real, preguntate:
[ ] ¿Tengo su permiso, para esto en concreto?
[ ] ¿Puede creer alguien que esto pasó de verdad?
[ ] ¿Podría hacerle daño, avergonzarla o burlarse de ella?
Si alguna respuesta te hace dudar: no la hagas.</code></pre>
      <p><strong>Personas famosas también:</strong> que alguien sea conocido no quiere decir que puedas ponerle palabras en la boca. Una imagen de un político o un deportista haciendo algo inventado puede engañar a miles.</p>
      <p>Por ejemplo, un padre del club le pidió a Diego una imagen graciosa del presidente del club disfrazado de payaso para el cumpleaños del club. Diego le preguntó primero al presidente; como no le gustó la idea, no la hizo.</p>` },
    { titulo: "Vender o usar comercialmente", html: `
      <p class="idea">Si vas a <strong>vender</strong> algo hecho con IA (remeras, tazas, láminas, publicidad), primero leé las <strong>condiciones de uso</strong> de la herramienta: dicen si permite el uso comercial y con qué límites.</p>
      <p><strong>Uso comercial</strong> es usar algo para ganar plata: venderlo o usarlo en la publicidad de un negocio.</p>
      <table>
        <tr><th>Qué buscar en las condiciones</th><th>Palabras para buscar con Ctrl+F</th></tr>
        <tr><td>Si podés vender lo que creás</td><td>"commercial", "comercial"</td></tr>
        <tr><td>Quién es dueño de lo generado</td><td>"ownership", "propiedad", "content"</td></tr>
        <tr><td>Qué contenido está prohibido</td><td>"prohibited", "prohibido", "policy"</td></tr>
        <tr><td>Si la versión gratis tiene más límites que la paga</td><td>"free", "plan"</td></tr>
      </table>
      <p><strong>Las condiciones cambian:</strong> guardá una captura o la fecha en la que las leíste, por si después cambian.</p>
      <p><strong>Algunas herramientas dicen que entrenaron con imágenes con permiso</strong> (por ejemplo, Adobe afirma que Firefly se entrenó con contenido con licencia y de dominio público). Puede ser un punto a favor si vas a vender, pero igual revisá lo que generás.</p>
      <p><strong>Lo que vendés no puede copiar a otros:</strong> aunque la herramienta lo permita, una remera con un personaje famoso generado por IA sigue usando un personaje ajeno.</p>
      <p>Esto conecta con el curso de seguridad digital: leer la letra chica antes de aceptar es la misma habilidad, ahora para crear.</p>
      <p>Por ejemplo, Diego quería vender láminas con los dibujos del cuento del carpincho para juntar plata para el club. Buscó "commercial" en las condiciones de la herramienta, confirmó que lo permitía y guardó una captura con la fecha.</p>` },
  ],
  practica: [
    "Revisá 5 ideas de imágenes que tengas y anotá al lado de cada una si usa un personaje, una marca o una persona real.",
    "Buscá en las condiciones de uso de la herramienta que uses las palabras \"commercial\" o \"comercial\" y anotá qué dice.",
    "Escribí en 3 líneas, con tus palabras, qué dice el artículo 53 del Código Civil y Comercial y una excepción.",
  ],
  recursos: [
    { t: "Ley 11.723 de Propiedad Intelectual (texto en el sitio del Estado argentino)", url: "https://www.argentina.gob.ar/normativa/nacional/ley-11723-42755/texto" },
    { t: "Código Civil y Comercial de la Nación (el artículo 53 trata el derecho a la imagen)", url: "https://www.argentina.gob.ar/normativa/nacional/ley-26994-235975/texto" },
    { t: "Creative Commons: licencias para compartir obras (en castellano)", url: "https://creativecommons.org/licenses/?lang=es" },
  ],
  quiz: [
    { q: "Si los chicos piden un flyer con un superhéroe famoso, ¿qué conviene?", opciones: ["Generar el superhéroe con IA, total no es dibujo tuyo","Copiar una imagen de internet","Inventar un personaje propio","Cambiarle el color al superhéroe"], correcta: 2, explicacion: "El personaje famoso tiene dueño aunque lo dibuje la IA. Cambiar el color tienta, pero sigue siendo él." },
    { q: "Querés un estilo parecido al de una ilustradora conocida para un trabajo. ¿Qué hacés?", opciones: ["Describís la técnica sin poner su nombre","Ponés su nombre y apellido en el prompt","Subís sus dibujos para que la IA los copie","Le firmás con su nombre"], correcta: 0, explicacion: "La técnica se describe; su trabajo es suyo. El nombre tienta por directo, pero aprovecha su obra sin permiso." },
    { q: "Si una foto la sacó un fotógrafo y la querés modificar con IA, ¿qué pasa?", opciones: ["Si la modificás, pasa a ser tuya","Todo lo de internet es libre","La IA la vuelve pública","La foto es suya: necesitás su permiso o una licencia libre"], correcta: 3, explicacion: "La obra es de quien la sacó. \"Si la modificás es tuya\" tienta, pero no es así." },
    { q: "Si una obra tiene licencia Creative Commons, ¿qué te dice?", opciones: ["Que no tiene dueño","Qué podés hacer con ella, por ejemplo usarla citando al autor","Que es secreta","Que se puede vender siempre"], correcta: 1, explicacion: "La licencia define el permiso. \"No tiene dueño\" tienta, pero el autor sigue siendo el autor." },
    { q: "Vas a hacer un negocio grande con imágenes de IA y tenés dudas legales. ¿Qué hacés?", opciones: ["Confiás en lo que dice un video","Seguís y ves qué pasa","Consultás a un abogado","Le preguntás solo a la IA"], correcta: 2, explicacion: "La lección ayuda a entender, pero no reemplaza a un profesional. Preguntarle a la IA tienta por rápido, pero puede equivocarse." },
    { q: "Querés crear una imagen de tu vecina en una escena inventada. ¿Qué necesitás primero?", opciones: ["Su consentimiento, para eso en concreto","Nada, si es para reírse","Una foto de buena calidad","Que sea famosa"], correcta: 0, explicacion: "El artículo 53 pide consentimiento. \"Si es para reírse\" tienta, pero puede avergonzarla." },
    { q: "Si una persona es famosa, ¿podés hacer una imagen de ella diciendo algo que nunca dijo?", opciones: ["Sí, los famosos no tienen derechos","Sí, si es en una red chica","Sí, si ponés que es broma en letra chica","No: puede engañar a mucha gente y dañarla"], correcta: 3, explicacion: "Ser famoso no quita el derecho a la imagen. La letra chica tienta, pero la imagen circula sin ella." },
    { q: "Le preguntaste al presidente del club si podías hacer una imagen graciosa de él y dijo que no. ¿Qué hacés?", opciones: ["La hacés igual porque es en broma","No la hacés","La hacés y no la mostrás a él","La hacés con otra cara parecida"], correcta: 1, explicacion: "Sin consentimiento, no. \"Con otra cara parecida\" tienta, pero si se lo reconoce es lo mismo." },
    { q: "Vas a vender remeras con imágenes de IA. ¿Qué revisás primero?", opciones: ["El color de las remeras","Cuántos likes tiene la imagen","Las condiciones de uso: si permiten el uso comercial","Nada, si la generé es mía"], correcta: 2, explicacion: "El permiso para vender está en las condiciones. \"Si la generé es mía\" tienta, pero depende de lo que diga la herramienta." },
    { q: "Leíste las condiciones de una herramienta y permiten vender. ¿Qué más hacés?", opciones: ["Guardás una captura con la fecha, porque pueden cambiar","Nada más","Las borrás","Las compartís en redes"], correcta: 0, explicacion: "Así podés mostrar qué decían cuando las usaste. \"Nada más\" tienta, pero las condiciones cambian." },
    { q: "Si la herramienta permite el uso comercial y generaste un personaje famoso, ¿podés venderlo?", opciones: ["Sí, la herramienta lo permite","Sí, si lo generaste vos","Sí, si vendés pocas","No: el personaje sigue siendo de su dueño"], correcta: 3, explicacion: "La herramienta no puede darte derechos sobre algo ajeno. \"Lo permite\" tienta, pero se refiere a tus creaciones originales." },
    { q: "Si buscás en las condiciones quién es dueño de lo generado, ¿qué palabras probás con Ctrl+F?", opciones: ["\"color\"","\"ownership\", \"propiedad\" o \"content\"","\"descargar\"","\"login\""], correcta: 1, explicacion: "Esas palabras suelen estar en esa parte. \"Descargar\" tienta, pero habla de otra cosa." },
  ],
},
{
  id: "deepfakes",
  icono: "🎭",
  titulo: "Deepfakes y daño a personas",
  nivel: "Avanzado",
  objetivos: [
    "Explicar qué es un deepfake y por qué puede causar un daño grave",
    "Reconocer que crear o compartir imágenes sexuales falsas de una persona es violencia digital",
    "Saber qué hacer y dónde pedir ayuda si alguien es víctima",
  ],
  lecciones: [
    { titulo: "Qué es un deepfake", video: {"id":"ACVglWBYhQA","t":"Qué son los deepfakes y trucos para detectar las falsificaciones · DW Español (17:28)"}, html: `
      <p class="idea">Un <strong>deepfake</strong> es una imagen, un video o un audio hecho con IA que muestra a una <strong>persona real</strong> haciendo o diciendo algo que <strong>nunca hizo</strong>. El nombre viene del inglés: deep (de "deep learning", un tipo de IA) y fake (falso).</p>
      <table>
        <tr><th>Tipo</th><th>Ejemplo</th><th>Daño posible</th></tr>
        <tr><td>Político o famoso</td><td>Un candidato "diciendo" algo que no dijo</td><td>Engaña a votantes, desinforma</td></tr>
        <tr><td>Estafa</td><td>La voz de un familiar pidiendo plata con urgencia</td><td>Robo de dinero</td></tr>
        <tr><td>Contra una persona común</td><td>Una compañera de escuela en una imagen sexual falsa</td><td>Humillación, acoso, daño enorme</td></tr>
        <tr><td>Publicidad falsa</td><td>Un médico famoso "recomendando" un producto</td><td>Engaña a compradores</td></tr>
      </table>
      <p><strong>Por qué es tan grave:</strong> aunque sea falso, la imagen circula, se guarda y se reenvía. La persona tiene que dar explicaciones por algo que no hizo, y muchas veces el daño no se borra.</p>
      <p><strong>"Era una broma" no lo arregla:</strong> lo que para quien lo hace es un chiste, para quien aparece puede ser una pesadilla. Por eso la regla es simple: <strong>no se crean imágenes de personas reales sin su permiso</strong>, y nunca para humillar.</p>
      <p><strong>Las estafas con voz</strong> también existen: si un familiar te pide plata con urgencia por audio, cortá y llamalo vos a su número de siempre. Lo ves más en el curso de seguridad digital.</p>
      <p>Por ejemplo, en el grupo de padres del club circuló una imagen del entrenador "borracho" en una fiesta. Era un deepfake. Diego avisó en el grupo que era falsa y pidió que nadie la reenviara.</p>` },
    { titulo: "Violencia digital: lo que nunca se hace", html: `
      <p class="idea">Crear o compartir imágenes <strong>sexuales o íntimas falsas</strong> de una persona sin su consentimiento es <strong>violencia digital</strong>. Con chicos y chicas es un <strong>delito grave</strong>, siempre.</p>
      <p>En Argentina, la <strong>Ley 27.736</strong>, conocida como <strong>Ley Olimpia</strong> (2023), incorporó la violencia digital como una forma de violencia contra las mujeres. Incluye, entre otras cosas, difundir contenido íntimo sin consentimiento.</p>
      <table>
        <tr><th>Nunca</th><th>Por qué</th></tr>
        <tr><td>Crear una imagen sexual o desnuda de una persona real</td><td>Es violencia, aunque sea "falsa"</td></tr>
        <tr><td>Reenviar una imagen así que te llegó</td><td>Compartir también daña y también es responsabilidad tuya</td></tr>
        <tr><td>Cualquier imagen sexual de alguien menor de 18</td><td>Es un delito, sea real, dibujada o hecha con IA</td></tr>
        <tr><td>Usar una foto de alguien para "desvestirla" con una app</td><td>Es exactamente esto, aunque la app lo prometa como juego</td></tr>
      </table>
      <p><strong>Si te llega una imagen así:</strong> no la reenvíes, no la comentes, avisale a la persona si la conocés (con cuidado) y denunciala en la red donde apareció.</p>
      <p><strong>Las herramientas serias lo prohíben:</strong> sus políticas no permiten este contenido y bloquean muchos pedidos. Las apps que lo ofrecen son peligrosas también para quien las usa (piden fotos y datos).</p>
      <p><strong>Esto no es un tema para resolver solo:</strong> si se trata de chicos, tiene que intervenir un adulto responsable y, si corresponde, la justicia.</p>
      <p>Por ejemplo, una alumna del taller le contó a Diego que circulaba una imagen falsa de ella. Diego avisó a su familia, la acompañaron a guardar las pruebas y a hacer la denuncia, y pidió a la escuela que intervenga.</p>` },
    { titulo: "Qué hacer si te pasa a vos o a alguien cercano", html: `
      <p class="idea">Si alguien es víctima de un deepfake, lo primero es <strong>no estar solo</strong>, <strong>guardar pruebas</strong> y <strong>pedir que lo bajen</strong>. La culpa nunca es de quien aparece en la imagen.</p>
      <pre><code>Pasos:
1. Respirá: no es tu culpa.
2. Guardá pruebas: capturas con la fecha, el enlace,
   el nombre de la cuenta que lo publicó.
3. Denunciá en la red social o la app (todas tienen un
   botón "denunciar" para contenido íntimo o falso).
4. Hablá con alguien de confianza.
5. Hacé la denuncia en la comisaría o la fiscalía.
6. Si es violencia de género: Línea 144 (gratis, las 24 h).
7. Si es un chico o una chica: un adulto responsable lo
   acompaña y se denuncia siempre.</code></pre>
      <table>
        <tr><th>Dónde pedir ayuda</th><th>Para qué</th></tr>
        <tr><td>Línea 144</td><td>Atención, contención y asesoramiento en violencia de género, las 24 horas</td></tr>
        <tr><td>Comisaría o fiscalía</td><td>Hacer la denuncia penal</td></tr>
        <tr><td>La red social donde se publicó</td><td>Pedir que se baje el contenido</td></tr>
        <tr><td>AAIP</td><td>Reclamos por uso indebido de datos personales</td></tr>
      </table>
      <p><strong>No borres antes de guardar:</strong> si la imagen desaparece, sin capturas es más difícil demostrar lo que pasó.</p>
      <p><strong>Esta lección orienta, pero no reemplaza el asesoramiento de un abogado</strong> ni el acompañamiento de profesionales. Los organismos de la tabla te pueden orientar sobre cómo seguir.</p>
      <p>Por ejemplo, cuando le pasó al entrenador del club, Diego lo ayudó a sacar capturas del grupo con la fecha antes de que alguien borrara la imagen, y con eso el entrenador pudo hacer la denuncia.</p>` },
  ],
  practica: [
    "Buscá en una red social que uses dónde está el botón para denunciar contenido íntimo o falso y anotá los pasos.",
    "Escribí en una nota del celular los números y lugares de ayuda de la lección (Línea 144, comisaría o fiscalía de tu zona) y anotá la dirección de la más cercana.",
    "Escribí un mensaje corto para un grupo de WhatsApp pidiendo que nadie reenvíe una imagen falsa de una persona. Anotá cuántas palabras usaste (que sea corto).",
  ],
  recursos: [
    { t: "Línea 144: atención a personas en situación de violencia de género", url: "https://www.argentina.gob.ar/generos/linea-144" },
    { t: "Derecho Fácil: leyes explicadas en lenguaje claro (Ministerio de Justicia)", url: "https://www.argentina.gob.ar/justicia/derechofacil" },
    { t: "Curso de este sitio: Seguridad digital y estafas", url: "https://pkeios.github.io/EiaLearning/seguridad-digital/" },
  ],
  quiz: [
    { q: "Ves un video de un candidato diciendo algo escandaloso que nunca dijo, hecho con IA. ¿Qué es?", opciones: ["Una noticia","Un meme inocente","Un deepfake","Un error del celular"], correcta: 2, explicacion: "Muestra a una persona real haciendo algo que no hizo. \"Meme inocente\" tienta por chistoso, pero engaña a votantes." },
    { q: "Te llega un audio con la voz de tu hermano pidiendo plata urgente. ¿Qué hacés?", opciones: ["Cortás y lo llamás a su número de siempre","Le mandás la plata enseguida","Le pedís que te mande otro audio","Respondés con tus datos bancarios"], correcta: 0, explicacion: "La voz se puede imitar con IA. Otro audio tienta para confirmar, pero también puede ser falso." },
    { q: "Si alguien dice que hizo una imagen falsa de una compañera \"en broma\", ¿lo arregla?", opciones: ["Sí, si era broma no pasa nada","Sí, si la borra a la semana","Sí, si es falsa no importa","No: para quien aparece puede ser un daño enorme"], correcta: 3, explicacion: "La intención no borra el daño. \"Si es falsa no importa\" tienta, pero la gente igual la ve y la comparte." },
    { q: "Te llega por WhatsApp una imagen íntima falsa de una vecina. ¿Qué hacés?", opciones: ["La reenviás preguntando si es real","No la reenviás y la denunciás en la app","La guardás por curiosidad","La comentás en el grupo"], correcta: 1, explicacion: "Reenviar también daña. Preguntar si es real tienta, pero así la seguís difundiendo." },
    { q: "En Argentina, ¿qué ley incorporó la violencia digital como forma de violencia contra las mujeres?", opciones: ["La Ley de Propiedad Intelectual","Ninguna","La Ley 27.736, conocida como Ley Olimpia","La ley de tránsito"], correcta: 2, explicacion: "La Ley Olimpia es de 2023. La de propiedad intelectual tienta porque habla de imágenes, pero trata derechos de autor." },
    { q: "Si una imagen sexual de alguien menor de 18 está hecha con IA y no es real, ¿qué es?", opciones: ["Un delito igual","Legal porque es falsa","Un dibujo sin problemas","Depende de la app"], correcta: 0, explicacion: "Sea real, dibujada o con IA, es delito. \"Legal porque es falsa\" tienta, pero no lo es." },
    { q: "Si una app promete \"desvestir\" fotos como un juego, ¿qué es?", opciones: ["Un juego inocente","Una app de edición común","Algo legal si es con amigos","Una herramienta para hacer violencia digital, y además peligrosa para tus datos"], correcta: 3, explicacion: "Crear imágenes íntimas falsas es violencia. \"Si es con amigos\" tienta, pero la persona de la foto no consintió." },
    { q: "Si una amiga descubre una imagen falsa de ella circulando, ¿qué es lo primero que le decís?", opciones: ["Que no tendría que haber subido fotos","Que no es su culpa, y que guarde pruebas","Que lo ignore","Que la borre ya mismo de todos lados"], correcta: 1, explicacion: "La culpa es de quien la creó. Culparla tienta como consejo, pero la revictimiza." },
    { q: "Antes de denunciar, ¿qué tenés que guardar?", opciones: ["Nada, la policía lo encuentra","Solo el nombre de la víctima","Capturas con la fecha, el enlace y el nombre de la cuenta","La imagen reenviada a varios grupos"], correcta: 2, explicacion: "Las pruebas sostienen la denuncia. \"La policía lo encuentra\" tienta, pero si se borra, se pierde." },
    { q: "Si la víctima es una mujer y necesita contención y asesoramiento, ¿qué línea llama?", opciones: ["Línea 144, gratis y las 24 horas","El 911 solo para que borren la foto","El soporte de la app","Ninguna"], correcta: 0, explicacion: "La 144 atiende violencia de género. El soporte de la app tienta, pero solo baja el contenido." },
    { q: "Si la víctima es un chico de 13 años, ¿quién tiene que intervenir?", opciones: ["Nadie, que lo resuelva él","Solo sus amigos","El que creó la imagen","Un adulto responsable que lo acompañe a denunciar"], correcta: 3, explicacion: "Con chicos se denuncia siempre y con un adulto. \"Que lo resuelva él\" tienta por respetar su privacidad, pero es demasiado grave." },
    { q: "Querés borrar la imagen falsa del grupo enseguida. ¿Qué hacés antes?", opciones: ["Nada, borrarla es lo urgente","Guardás capturas con la fecha","La reenviás a tu correo","La subís a otra red como prueba"], correcta: 1, explicacion: "Sin pruebas cuesta denunciar. Borrarla tienta por urgente, pero primero se guarda la captura." },
  ],
},
{
  id: "detectar",
  icono: "🔎",
  titulo: "Reconocer imágenes hechas con IA",
  nivel: "Avanzado",
  objetivos: [
    "Revisar una imagen buscando señales de que fue generada o editada con IA",
    "Usar la búsqueda inversa y las Credenciales de contenido para averiguar su origen",
    "Etiquetar con honestidad las imágenes que vos creás",
  ],
  lecciones: [
    { titulo: "Señales para mirar", video: {"id":"rbPNG5iAK-I","t":"Cómo identificar cuando un video está hecho con inteligencia artificial · La Tercera (2:40)"}, html: `
      <p class="idea">No hay un truco infalible, pero muchas imágenes con IA tienen <strong>detalles que no cierran</strong>. Mirá con zoom y sin apuro.</p>
      <table>
        <tr><th>Dónde mirar</th><th>Señal sospechosa</th></tr>
        <tr><td>Manos y dientes</td><td>Dedos de más o fundidos, dientes como una tira</td></tr>
        <tr><td>Texto de fondo</td><td>Carteles con letras sin sentido</td></tr>
        <tr><td>Bordes</td><td>Pelo que se funde con el fondo, anteojos que no terminan</td></tr>
        <tr><td>Simetría</td><td>Aros distintos en cada oreja, botones desparejos</td></tr>
        <tr><td>Luz y sombras</td><td>Sombras que van para lados distintos</td></tr>
        <tr><td>Piel y texturas</td><td>Piel demasiado lisa, como de plástico</td></tr>
        <tr><td>En videos</td><td>Parpadeo raro, labios que no coinciden con la voz</td></tr>
      </table>
      <p><strong>Cada vez es más difícil:</strong> las herramientas mejoran y muchas de estas señales desaparecen. Por eso las señales son una pista, no una prueba. Lo más importante es lo de la próxima lección: averiguar de dónde viene.</p>
      <p><strong>Desconfiá de las imágenes que te generan una emoción muy fuerte</strong> (bronca, miedo, indignación): son las que más se comparten sin pensar, y las favoritas de quienes desinforman.</p>
      <p><strong>Los detectores automáticos de IA</strong> que prometen decir "esto es IA con un 95%" se equivocan seguido. No los tomes como verdad.</p>
      <p>Por ejemplo, en el grupo del club circulaba una foto del intendente "inaugurando" el club con una cinta. Diego hizo zoom: el cartel del fondo decía cualquier cosa y el intendente tenía seis dedos. No la compartió.</p>` },
    { titulo: "Averiguar de dónde viene", html: `
      <p class="idea">La mejor forma de saber si una imagen es real es <strong>averiguar su origen</strong>: quién la publicó primero, cuándo y si alguien serio la confirma.</p>
      <pre><code>Búsqueda inversa con Google Lens:
1. En el celular: mantené apretada la imagen o abrí la app de Google
   y tocá el ícono de la cámara (Lens).
2. En la compu: en Google Imágenes, tocá el ícono de la cámara
   y subí la imagen o pegá su enlace.
3. Mirá dónde más aparece: ¿en un medio serio? ¿hace años?
   ¿con otra explicación?</code></pre>
      <p>La <strong>búsqueda inversa</strong> busca usando una imagen en lugar de palabras. Sirve para encontrar la versión original, ver si es vieja o si la publicó primero un sitio de humor.</p>
      <table>
        <tr><th>Herramienta</th><th>Qué te dice</th></tr>
        <tr><td>Google Lens (búsqueda inversa)</td><td>Dónde más aparece la imagen</td></tr>
        <tr><td>Credenciales de contenido (contentcredentials.org/verify)</td><td>Si la imagen trae datos de origen: con qué se hizo o se editó</td></tr>
        <tr><td>Medios y verificadores serios</td><td>Si alguien ya chequeó esa imagen</td></tr>
      </table>
      <p><strong>Las Credenciales de contenido</strong> son una especie de etiqueta de origen que algunas herramientas (como Adobe Firefly y algunas de Microsoft) agregan a las imágenes: dicen si se usó IA. Si la imagen no las tiene, no prueba nada: muchas fotos no las traen o se pierden al reenviarlas.</p>
      <p><strong>Las preguntas de siempre:</strong> ¿quién lo publicó? ¿cuándo? ¿lo cuenta algún medio serio? Son las mismas que se usan para cualquier información, también con texto.</p>
      <p>Por ejemplo, Diego buscó con Google Lens la foto del intendente y la encontró en una cuenta de humor, publicada dos días antes con la aclaración "hecha con IA".</p>` },
    { titulo: "Etiquetar lo que vos creás", html: `
      <p class="idea">Si querés que la gente confíe en vos, <strong>decí cuándo una imagen está hecha con IA</strong>, sobre todo si podría parecer una foto real.</p>
      <table>
        <tr><th>Caso</th><th>¿Etiquetar?</th><th>Cómo</th></tr>
        <tr><td>Ilustración claramente dibujada para un flyer</td><td>Opcional, pero suma</td><td>"Ilustración hecha con IA" en letra chica</td></tr>
        <tr><td>Imagen que parece una foto real</td><td>Sí</td><td>En el texto de la publicación y en la imagen</td></tr>
        <tr><td>Publicidad de un producto</td><td>Sí, y además mostrá fotos reales del producto</td><td>"Imagen ilustrativa generada con IA"</td></tr>
        <tr><td>Algo que parece una noticia</td><td>No lo hagas: puede desinformar</td><td>—</td></tr>
      </table>
      <p><strong>Muchas redes tienen una etiqueta</strong> para marcar contenido hecho con IA al publicar. Usala: además de ser honesto, evita que te bajen la publicación.</p>
      <p><strong>No borres las Credenciales de contenido</strong> si la herramienta las agrega: son información útil para quien vea tu imagen.</p>
      <pre><code>Antes de publicar una imagen de IA:
[ ] ¿Podría alguien creer que es una foto real?  → etiquetala
[ ] ¿Aparece una persona real?                    → ¿tenés su permiso?
[ ] ¿Muestra un producto que vendés?               → sumá fotos reales
[ ] ¿Parece una noticia?                          → no la publiques</code></pre>
      <p><strong>Ser honesto también es una ventaja:</strong> la gente perdona que uses IA, pero no que la engañes.</p>
      <p>Por ejemplo, Diego agrega "Ilustración hecha con IA · Taller de dibujo Club Unión" en una esquina de cada flyer. Un papá le preguntó cómo lo hacía y terminó dando una charla sobre el tema en el club.</p>` },
  ],
  practica: [
    "Elegí 3 imágenes que te hayan llegado esta semana, revisalas con la tabla de señales y anotá cuántas señales encontraste en cada una.",
    "Hacé una búsqueda inversa con Google Lens de una imagen viral y anotá dónde y cuándo apareció por primera vez.",
    "Subí a contentcredentials.org/verify una imagen hecha con Firefly o Designer y anotá qué datos de origen muestra.",
  ],
  recursos: [
    { t: "Google: buscar con una imagen (búsqueda inversa)", url: "https://support.google.com/websearch/answer/1325808?hl=es" },
    { t: "Content Credentials: verificar el origen de una imagen", url: "https://contentcredentials.org/verify" },
    { t: "Adobe: qué son las Credenciales de contenido (en castellano)", url: "https://helpx.adobe.com/es/firefly/get-set-up/learn-the-basics/content-credentials-overview.html" },
  ],
  quiz: [
    { q: "Si una foto viral muestra a una persona con seis dedos y un cartel con letras sin sentido, ¿qué te dice?", opciones: ["Que es una foto real seguro","Que es una foto vieja","Señales fuertes de que puede estar hecha con IA","Nada"], correcta: 2, explicacion: "Manos y texto raros son señales típicas. \"Foto vieja\" tienta, pero las fotos viejas no inventan dedos." },
    { q: "Si una imagen no tiene ninguna señal rara, ¿ya sabés que es real?", opciones: ["No: las señales son pistas, no pruebas","Sí, si no tiene errores es real","Sí, si tiene buena calidad","Sí, si la compartió mucha gente"], correcta: 0, explicacion: "Las herramientas nuevas casi no dejan señales. \"Sin errores es real\" tienta, pero ya no alcanza." },
    { q: "Una imagen te da muchísima bronca. ¿Qué hacés antes de compartirla?", opciones: ["La compartís para avisar a todos","La comentás enseguida","La mandás a todos tus grupos","Pausás y averiguás de dónde viene"], correcta: 3, explicacion: "La emoción fuerte es justo lo que buscan los que desinforman. Avisar a todos tienta, pero podés difundir algo falso." },
    { q: "Un detector online dice \"98% hecho con IA\". ¿Qué hacés con ese dato?", opciones: ["Lo tomás como prueba segura","Lo tomás como una pista más: suelen equivocarse","Lo publicás como verdad","Ignorás todo lo demás"], correcta: 1, explicacion: "Los detectores automáticos fallan seguido. El porcentaje tienta por preciso, pero no es una prueba." },
    { q: "Querés saber dónde más aparece una imagen. ¿Qué usás?", opciones: ["Buscar con palabras al azar","Mirarla con más brillo","La búsqueda inversa de Google Lens","Preguntarle al que te la mandó solamente"], correcta: 2, explicacion: "Buscar con la imagen encuentra sus copias y su origen. Preguntar al que la mandó tienta, pero él también puede no saber." },
    { q: "Con la búsqueda inversa encontrás la imagen en una cuenta de humor que dice \"hecha con IA\". ¿Qué sabés?", opciones: ["Que es falsa y circula sin su aclaración","Que es real","Que la cuenta de humor miente","Nada"], correcta: 0, explicacion: "El origen explica qué es. \"Es real\" tienta porque la viste en muchos grupos, pero nació como humor." },
    { q: "Subís una imagen a contentcredentials.org/verify y no muestra datos de origen. ¿Qué significa?", opciones: ["Que es real seguro","Que es IA seguro","Que la página no funciona","Nada seguro: muchas imágenes no los traen o se pierden al reenviarlas"], correcta: 3, explicacion: "La falta de credenciales no prueba nada. \"Es real seguro\" tienta, pero solo sabés que no hay etiqueta." },
    { q: "Una imagen de un acto parece real, pero ningún medio serio la publicó. ¿Qué hacés?", opciones: ["La compartís como exclusiva","Dudás y no la compartís hasta confirmarla","La creés porque se ve real","La mandás a un medio como prueba"], correcta: 1, explicacion: "Si nadie serio la cuenta, hay que dudar. \"Exclusiva\" tienta, pero suele ser falsa." },
    { q: "Hiciste con IA una imagen que parece una foto real del club. ¿Qué hacés al publicarla?", opciones: ["No decís nada, total se ve bien","Decís que la sacaste vos","La etiquetás como hecha con IA","La publicás sin texto"], correcta: 2, explicacion: "Si puede parecer real, se etiqueta. No decir nada tienta, pero la gente puede creer que pasó." },
    { q: "Vendés budines y usás una imagen de IA en la publicidad. ¿Qué más hacés?", opciones: ["La marcás como ilustrativa y sumás fotos reales del producto","Nada más","Borrás las fotos reales","Decís que es foto real"], correcta: 0, explicacion: "El cliente tiene que ver lo que compra. \"Nada más\" tienta por simple, pero engaña." },
    { q: "Tu herramienta agrega Credenciales de contenido a la imagen. ¿Qué hacés?", opciones: ["Las borrás para que no se note","Le cambiás el nombre al archivo","La reenviás para que se pierdan","Las dejás: informan el origen"], correcta: 3, explicacion: "Son información útil y honesta. Borrarlas tienta para que no se note la IA, pero esconde el origen." },
    { q: "Querés publicar con IA algo que parece una noticia del barrio. ¿Qué hacés?", opciones: ["Lo publicás con una etiqueta chiquita","No lo publicás: puede desinformar","Lo publicás si te parece verdad","Lo publicás en pocos grupos"], correcta: 1, explicacion: "Una noticia falsa desinforma aunque tenga etiqueta. La etiqueta chica tienta, pero la imagen circula sin ella." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: una campaña con IA, responsable",
  nivel: "Avanzado",
  objetivos: [
    "Planificar 3 imágenes para un evento o un emprendimiento real",
    "Crearlas con prompts registrados y revisarlas con la lista de responsabilidad",
    "Evaluar tu campaña con una rúbrica",
  ],
  lecciones: [
    { titulo: "Planificá tu campaña", html: `
      <p class="idea">Tu proyecto es una <strong>campaña de 3 imágenes</strong> para algo real: un evento, un emprendimiento, una clase o una causa del barrio. Primero se planifica, después se genera.</p>
      <table>
        <tr><th>Si sos...</th><th>Campaña posible</th></tr>
        <tr><td>Docente o tallerista</td><td>Flyer, cartel del aula y una ilustración para una clase</td></tr>
        <tr><td>Emprendedor o emprendedora</td><td>Fondo para una publicación, una historia y un cartel del local (con fotos reales del producto aparte)</td></tr>
        <tr><td>De un club o una organización</td><td>Invitación, cartel y publicación para redes</td></tr>
        <tr><td>Estudiante</td><td>Portada, ilustración de un tema y un afiche</td></tr>
      </table>
      <pre><code>Tu plan:
Para qué:         ________________________ (en una línea)
Para quién:       ________________________
Las 3 imágenes:   1. ______  formato ____ (1:1, 9:16, A4)
                  2. ______  formato ____
                  3. ______  formato ____
Texto de cada una (lo escribís vos, no la IA): ____________
Herramienta:      ________________________
¿Aparecen personas reales?  sí / no   (si sí: ¿tenés permiso?)</code></pre>
      <p><strong>Que las 3 se vean de la misma familia:</strong> elegí un estilo y una paleta (los colores principales) y repetilos en los 3 prompts. Así se reconoce que son de la misma campaña.</p>
      <p><strong>Una <em>paleta</em></strong> es el grupo de colores que usás siempre: por ejemplo, verde, amarillo y blanco para el club.</p>
      <p>Por ejemplo, Diego planificó la campaña de la muestra de fin de año: invitación (1:1), cartel de la puerta (A4) y una historia (9:16), todas en acuarela con los colores del club.</p>` },
    { titulo: "Generá y registrá", html: `
      <p class="idea">Generá cada imagen y llevá un <strong>registro</strong>: el prompt, los intentos y qué cambiaste. Ese registro es parte de la entrega y te sirve para la próxima campaña.</p>
      <table>
        <tr><th>Imagen</th><th>Prompt final</th><th>Intentos</th><th>Qué cambié</th></tr>
        <tr><td>1. Invitación</td><td>"Ilustración acuarela de chicas y chicos mostrando dibujos colgados en una soga, colores verde y amarillo, espacio vacío arriba, 1:1"</td><td>3</td><td>Agregué "espacio vacío arriba" y "chicas y chicos"</td></tr>
        <tr><td>2. Cartel</td><td>...</td><td>...</td><td>...</td></tr>
        <tr><td>3. Historia</td><td>...</td><td>...</td><td>...</td></tr>
      </table>
      <pre><code>Lista de responsabilidad (para cada imagen):
[ ] Sin fallas: manos, texto, cantidades, fondo
[ ] Diversidad: no repite un solo tipo de persona
[ ] Sin personajes, marcas ni estilos de artistas con nombre
[ ] Sin personas reales (o con su permiso para esto)
[ ] Los datos (fecha, lugar, precio) escritos por vos y revisados
[ ] Etiqueta "hecha con IA" si puede parecer real
[ ] Si es para vender: condiciones de uso revisadas</code></pre>
      <p><strong>El texto final se agrega en un editor:</strong> como viste en el módulo de usos, la IA hace la imagen y vos escribís la información.</p>
      <p>Por ejemplo, la lista de responsabilidad le marcó a Diego que en el cartel había solo varones. Regeneró con "chicas y chicos de distintas edades" y la campaña quedó lista.</p>` },
    { titulo: "Evaluá con la rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si algo está bien hecho. Usala para revisar tu campaña antes de publicarla.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Plan</td><td>Para qué, para quién, formatos y textos claros</td><td>Falta una parte</td><td>Sin plan</td></tr>
        <tr><td>Prompts</td><td>Registrados, con las partes de un buen prompt</td><td>Registrados, pero vagos</td><td>Sin registro</td></tr>
        <tr><td>Calidad</td><td>Sin fallas visibles, texto bien escrito</td><td>Alguna falla menor</td><td>Fallas que se notan</td></tr>
        <tr><td>Unidad</td><td>Las 3 se ven de la misma campaña</td><td>2 de 3 combinan</td><td>No combinan</td></tr>
        <tr><td>Responsabilidad</td><td>Lista completa en las 3 imágenes</td><td>Falta un punto</td><td>Faltan varios</td></tr>
        <tr><td>Honestidad</td><td>Etiqueta donde hace falta y datos reales</td><td>Etiqueta en algunas</td><td>Puede engañar</td></tr>
      </table>
      <pre><code>Total: ___ de 12
10 a 12 → lista para publicar
7 a 9   → mejorá el criterio más bajo y volvé a evaluar
0 a 6   → repasá los módulos de prompts y de derechos</code></pre>
      <p><strong>Mostrala antes de publicar:</strong> pedile a alguien de tu público que mire las 3 imágenes y te diga qué entendió. Si entendió el qué, el cuándo y el dónde, la campaña funciona.</p>
      <p><strong>Seguí aprendiendo:</strong> las herramientas cambian cada pocos meses, pero lo que aprendiste en este curso (describir bien, revisar, respetar a las personas y ser honesto) sigue sirviendo.</p>
      <p>Por ejemplo, Diego sacó 11 de 12: perdió un punto en unidad porque la historia tenía otros colores. La rehízo con la misma paleta y publicó la campaña.</p>` },
  ],
  practica: [
    "Completá el plan de tu campaña con las 3 imágenes y sus formatos, y anotá si aparecen personas reales.",
    "Generá las 3 imágenes y completá la tabla de registro con el prompt final y la cantidad de intentos de cada una.",
    "Pasá cada imagen por la lista de responsabilidad y anotá cuántos de los 7 puntos cumplió cada una.",
    "Puntuá tu campaña con la rúbrica, anotá tu total de 12 y mostrásela a alguien de tu público antes de publicar.",
  ],
  recursos: [
    { t: "Bing Image Creator (Microsoft): crear imágenes gratis con una cuenta", url: "https://www.bing.com/images/create" },
    { t: "Microsoft Designer: imágenes y diseños con IA", url: "https://designer.microsoft.com/" },
    { t: "Content Credentials: verificar el origen de una imagen", url: "https://contentcredentials.org/verify" },
  ],
  quiz: [
    { q: "Vas a hacer tu campaña. ¿Qué hacés primero?", opciones: ["Generar 50 imágenes y ver qué sale","Publicar y después ver","El plan: para qué, para quién, formatos y textos","Elegir solo la herramienta"], correcta: 2, explicacion: "El plan ordena todo. Generar 50 tienta por rápido, pero gastás créditos sin rumbo." },
    { q: "En tu plan, ¿quién escribe el texto de cada imagen?", opciones: ["Vos, no la IA","La IA dentro de la imagen","Nadie, va sin texto siempre","El público"], correcta: 0, explicacion: "La IA puede escribir mal o inventar datos. Que lo haga la IA tienta por cómodo, pero arriesgás errores." },
    { q: "Querés que las 3 imágenes se vean de la misma campaña. ¿Qué hacés?", opciones: ["Usás un estilo distinto en cada una","Usás 3 herramientas distintas","No importa","Repetís el mismo estilo y la misma paleta en los 3 prompts"], correcta: 3, explicacion: "El mismo estilo y colores las unen. Variar tienta por creatividad, pero no se reconocen como una campaña." },
    { q: "Vendés productos y tu campaña tiene imágenes de IA. ¿Qué no puede faltar?", opciones: ["Una imagen de IA del producto como si fuera real","Fotos reales del producto aparte","Precios inventados","Nada más"], correcta: 1, explicacion: "El cliente tiene que ver lo que compra. La imagen de IA del producto tienta por linda, pero engaña." },
    { q: "¿Para qué llevás un registro de prompts e intentos?", opciones: ["Para nada","Para la herramienta","Para la entrega y para reusar lo que funcionó","Para gastar más créditos"], correcta: 2, explicacion: "Te ahorra trabajo la próxima vez. \"Para nada\" tienta, pero sin registro empezás de cero." },
    { q: "La lista de responsabilidad te marca que en el cartel hay solo varones. ¿Qué hacés?", opciones: ["Regenerás pidiendo chicas y chicos de distintas edades","Lo publicás igual","Le sacás la lista","Cambiás solo el color del fondo"], correcta: 0, explicacion: "Es un sesgo que se corrige describiendo. Publicarlo tienta por apuro, pero deja afuera a parte de tu público." },
    { q: "Tu imagen parece una foto real de la muestra del club. ¿Qué agregás?", opciones: ["Nada","Un filtro para que parezca más real","Tu firma como fotógrafo","La etiqueta \"hecha con IA\""], correcta: 3, explicacion: "Si puede parecer real, se etiqueta. Un filtro tienta para que quede linda, pero engaña más." },
    { q: "Vas a vender las láminas de tu campaña. ¿Qué revisás antes?", opciones: ["Solo el precio","Las condiciones de uso comercial de la herramienta","Los likes","Nada, si las hiciste vos"], correcta: 1, explicacion: "El permiso para vender está en las condiciones. \"Si las hiciste vos\" tienta, pero depende de la herramienta." },
    { q: "Tus prompts están registrados pero son vagos. ¿Cuántos puntos sacás en \"Prompts\"?", opciones: ["2","0","1","12"], correcta: 2, explicacion: "Registrados pero vagos es 1. 2 tienta porque están anotados, pero falta que tengan las partes de un buen prompt." },
    { q: "Sacaste 8 de 12. ¿Qué hacés?", opciones: ["Mejorás el criterio más bajo y volvés a evaluar","Publicás igual","Empezás el curso de cero","Borrás todo"], correcta: 0, explicacion: "De 7 a 9, falta pulir algo. Empezar de cero tienta, pero no hace falta." },
    { q: "Querés saber si la campaña se entiende. ¿Qué hacés?", opciones: ["La mirás vos de nuevo","Contás los colores","Le preguntás a la IA si está bien","Se la mostrás a alguien de tu público y le preguntás qué entendió"], correcta: 3, explicacion: "Otra persona ve lo que vos ya no ves. Mirarla vos tienta, pero ya sabés qué quisiste decir." },
    { q: "Si las herramientas cambian cada pocos meses, ¿qué te queda del curso?", opciones: ["Nada, hay que aprender todo de nuevo","Describir bien, revisar, respetar a las personas y ser honesto","Solo los nombres de las herramientas","Los precios de este año"], correcta: 1, explicacion: "Las habilidades sirven con cualquier herramienta. \"Nada\" tienta porque cambian rápido, pero lo importante se mantiene." },
  ],
},
];
