// Temario del curso "Trámites por internet sin perderse". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js tramites-online y node tools/metodologia.js tramites-online
window.TEMARIO = [
{
  id: "empezar",
  icono: "🏛️",
  titulo: "Antes de empezar",
  nivel: "Básico",
  objetivos: [
    "Reconocer qué trámites se pueden hacer por internet",
    "Distinguir un sitio oficial de uno falso",
    "Tener a mano lo que piden casi todos los trámites",
  ],
  lecciones: [
    { titulo: "Qué se puede hacer por internet", html: `
      <p class="idea">Muchos trámites que antes pedían hacer fila hoy se hacen desde el celular o la compu. Otros se empiezan por internet (por ejemplo, sacando un turno) y se terminan en persona.</p>
      <table>
        <tr><th>Tipo</th><th>Ejemplos</th></tr>
        <tr><td>Todo por internet</td><td>Certificado de antecedentes penales, constancia de CUIL, constancias de ARCA</td></tr>
        <tr><td>Turno por internet y trámite en persona</td><td>Renovar el DNI, sacar el pasaporte</td></tr>
        <tr><td>Consultas</td><td>Estado de un trámite, fechas de cobro, credenciales</td></tr>
      </table>
      <p><strong>Cada organismo tiene su sitio:</strong> ANSES (seguridad social), ARCA (impuestos, ex-AFIP), RENAPER (DNI y pasaporte), y muchos trámites se juntan en <strong>Mi Argentina</strong>.</p>
      <p><strong>Las provincias y los municipios</strong> tienen sus propios trámites y sitios, como la licencia de conducir o las tasas municipales.</p>
      <p class="aviso">Los trámites, los requisitos y los costos cambian. Este curso explica cómo moverte; antes de cada trámite, verificá los pasos en el sitio oficial.</p>
      <p>Por ejemplo, el certificado de antecedentes penales se puede pedir y recibir sin salir de tu casa, mientras que para renovar el DNI se saca el turno por internet y después se va a una oficina.</p>` },
    { titulo: "Sitios oficiales y sitios falsos", html: `
      <p class="idea">Antes de poner un dato o pagar algo, fijate que estés en el <strong>sitio oficial</strong>. Hay páginas que copian el aspecto de las oficiales para cobrar de más o robar datos.</p>
      <table>
        <tr><th>Señal de sitio oficial</th><th>Señal de alarma</th></tr>
        <tr><td>La dirección termina en .gob.ar (por ejemplo, argentina.gob.ar)</td><td>Direcciones parecidas: "tramites-argentina-online.com"</td></tr>
        <tr><td>Llegaste escribiendo vos la dirección o desde un buscador con cuidado</td><td>Llegaste desde un aviso pago o un mensaje</td></tr>
        <tr><td>Los turnos son gratis</td><td>Te cobran por "gestionar" un turno</td></tr>
        <tr><td>Pagás solo lo que el trámite cuesta, en canales oficiales</td><td>Te piden transferir a una persona</td></tr>
      </table>
      <pre><code>Truco simple:
Escribí vos la dirección oficial (por ejemplo, argentina.gob.ar)
y buscá el trámite desde ahí.
Guardala en favoritos para la próxima vez.</code></pre>
      <p><strong>Los primeros resultados de un buscador</strong> a veces son avisos pagos. Mirá bien la dirección antes de entrar.</p>
      <p>Por ejemplo, un sitio que cobra $ 20.000 por "sacarte el turno del DNI" te está cobrando por algo que en el sitio oficial es gratis.</p>` },
    { titulo: "Lo que vas a necesitar", html: `
      <p class="idea">Casi todos los trámites piden lo mismo. Tenerlo listo te ahorra cortar el trámite a la mitad.</p>
      <table>
        <tr><th>Qué</th><th>Por qué</th></tr>
        <tr><td>Tu DNI a mano (el físico)</td><td>Piden el número y, a veces, el número de trámite que está en el frente</td></tr>
        <tr><td>Un mail propio al que entres seguido</td><td>Llegan códigos, comprobantes y avisos</td></tr>
        <tr><td>Un celular con número a tu nombre</td><td>Para recibir códigos y usar las apps oficiales</td></tr>
        <tr><td>Tu CUIL</td><td>Lo piden ANSES, ARCA y muchos otros</td></tr>
        <tr><td>Un lugar donde guardar los PDF</td><td>Constancias y comprobantes que vas a necesitar después</td></tr>
      </table>
      <p><strong>Si no tenés mail o celular propios,</strong> creá un mail gratuito antes de empezar. Usar el de otra persona trae problemas cuando necesitás recuperar una cuenta.</p>
      <p><strong>Si necesitás ayuda en persona,</strong> los Puntos Digitales del Estado ayudan con trámites y con la validación de identidad.</p>
      <p>Por ejemplo, muchos trámites mandan un código al mail que vence en pocos minutos: si el mail es de un hijo que no está, el trámite se corta.</p>` },
  ],
  practica: [
    "Anotá 3 trámites que necesites hacer este año y marcá cuáles son todo por internet y cuáles piden turno.",
    "Guardá en favoritos la dirección oficial argentina.gob.ar y anotá cómo reconocés que un sitio es oficial.",
    "Revisá la lista de lo que vas a necesitar y anotá qué tenés listo y qué te falta (por ejemplo, un mail propio).",
  ],
  recursos: [
    { t: "Mi Argentina: qué es y cómo empezar", url: "https://www.argentina.gob.ar/miargentina" },
    { t: "Argentina.gob.ar: turnos", url: "https://www.argentina.gob.ar/turnos" },
  ],
  quiz: [
    { q: "Si querés el certificado de antecedentes penales, ¿lo podés hacer todo por internet?", opciones: ["No, siempre en persona","Solo en una comisaría","Sí, se pide y se recibe en línea","Solo por correo postal"], correcta: 2, explicacion: "Se puede hacer en línea. \"Siempre en persona\" tienta por costumbre, pero ya no hace falta." },
    { q: "Si querés renovar el DNI, ¿cómo suele ser el trámite?", opciones: ["Turno por internet y trámite en persona","Todo por internet sin ir nunca","Solo por teléfono","No se puede renovar"], correcta: 0, explicacion: "El DNI pide ir en persona. \"Todo por internet\" tienta, pero hacen falta la foto y las huellas." },
    { q: "Si querés hacer un trámite de impuestos, ¿qué organismo es?", opciones: ["RENAPER","ANSES","Correo","ARCA (ex-AFIP)"], correcta: 3, explicacion: "ARCA maneja los impuestos. ANSES tienta, pero es seguridad social." },
    { q: "Si un trámite cambió desde la última vez, ¿qué hacés?", opciones: ["Seguís lo que hiciste hace años","Verificás los pasos actuales en el sitio oficial","Le preguntás a cualquiera en redes","Nada"], correcta: 1, explicacion: "Los trámites cambian. Seguir lo de hace años tienta, pero puede no funcionar." },
    { q: "Si la dirección de un sitio termina en .gob.ar, ¿qué indica?", opciones: ["Que es un sitio de compras","Que es falso","Que es un sitio del Estado argentino","Nada"], correcta: 2, explicacion: ".gob.ar es oficial. \"Que es falso\" tienta por desconfianza, pero es la señal de sitio oficial." },
    { q: "Si un sitio \"tramites-argentina-online.com\" te cobra por sacar un turno, ¿qué es?", opciones: ["Un sitio no oficial que cobra por algo que suele ser gratis","El sitio oficial","Un descuento","Una obligación"], correcta: 0, explicacion: "Los turnos oficiales no se venden. \"El sitio oficial\" tienta porque se parece, pero la dirección no es .gob.ar." },
    { q: "Si llegás a un sitio de trámites desde un mensaje que te mandaron, ¿qué hacés?", opciones: ["Ponés todos tus datos","Pagás lo que piden","Lo reenviás","No ponés datos y entrás vos escribiendo la dirección oficial"], correcta: 3, explicacion: "Los mensajes pueden llevar a sitios falsos. Poner los datos tienta por rápido, pero es riesgoso." },
    { q: "Si buscás un trámite en un buscador, ¿qué cuidás?", opciones: ["Entrar al primero siempre","Que el resultado no sea un aviso pago y que la dirección sea oficial","Nada","Elegir el que tenga más colores"], correcta: 1, explicacion: "Los primeros pueden ser avisos. Entrar al primero tienta por cómodo, pero puede no ser oficial." },
    { q: "Si te piden transferir la plata del trámite a una cuenta de una persona, ¿qué hacés?", opciones: ["Transferís","Transferís la mitad","No transferís: los pagos oficiales van por canales oficiales","Le pasás tu clave del banco"], correcta: 2, explicacion: "Los organismos no cobran a cuentas personales. Transferir tienta por rápido, pero es una estafa." },
    { q: "Si vas a hacer un trámite, ¿qué tenés a mano?", opciones: ["DNI, mail propio, celular, CUIL y dónde guardar los PDF","Solo la tarjeta de crédito","Nada","Solo el celular de otra persona"], correcta: 0, explicacion: "Eso piden casi todos. El celular de otro tienta si no tenés uno, pero los códigos no te llegan a vos." },
    { q: "Si usás el mail de tu hijo para un trámite, ¿qué problema puede haber?", opciones: ["Ninguno","Que el trámite sea gratis","Que salga más rápido","Que no recibas a tiempo los códigos y avisos"], correcta: 3, explicacion: "Los códigos vencen en minutos. \"Ninguno\" tienta por practicidad, pero el trámite se corta." },
    { q: "Si necesitás ayuda en persona con un trámite digital, ¿adónde vas?", opciones: ["A un gestor desconocido de la calle","A un Punto Digital","A nadie","A un sitio que cobra por todo"], correcta: 1, explicacion: "Los Puntos Digitales ayudan. El gestor desconocido tienta por cercano, pero es riesgoso." },
  ],
},
{
  id: "identidad",
  icono: "🔐",
  titulo: "Tu identidad digital",
  nivel: "Básico",
  objetivos: [
    "Crear tu cuenta de Mi Argentina y validar tu identidad",
    "Obtener la clave fiscal de ARCA y la clave de la Seguridad Social de ANSES",
    "Cuidar y recuperar tus claves",
  ],
  lecciones: [
    { titulo: "Mi Argentina", video: {"id":"XktRv5ssW_g","t":"Cómo crear mi cuenta en Mi Argentina · Mi Argentina (0:59)"}, html: `
      <p class="idea"><strong>Mi Argentina</strong> es tu perfil digital ante el Estado: junta en un solo lugar trámites, turnos, credenciales e información personalizada. Se usa desde la app o desde el sitio.</p>
      <pre><code>Para empezar:
1. Bajá la app oficial Mi Argentina (o entrá a mi.argentina.gob.ar).
2. Registrate con tus datos, tu mail y una contraseña.
3. Validá tu identidad (lección siguiente).
4. Explorá los servicios disponibles.</code></pre>
      <table>
        <tr><th>Qué podés encontrar</th></tr>
        <tr><td>Trámites de distintos organismos</td></tr>
        <tr><td>Turnos</td></tr>
        <tr><td>Credenciales digitales</td></tr>
        <tr><td>Avisos y vencimientos personalizados</td></tr>
      </table>
      <p><strong>Bajá la app solo de la tienda oficial</strong> del celular, y fijate que el desarrollador sea el gobierno.</p>
      <p>Por ejemplo, con la cuenta validada, en Mi Argentina podés pedir el certificado de antecedentes penales sin salir de tu casa.</p>` },
    { titulo: "Validar tu identidad", video: {"id":"-8WcMtNYrp0","t":"Cómo validar mi identidad en Mi Argentina · Mi Argentina (1:18)"}, html: `
      <p class="idea"><strong>Validar tu identidad</strong> es demostrarle al sistema que sos quien decís ser. Sin validar, muchos trámites no se pueden hacer.</p>
      <table>
        <tr><th>Forma</th><th>Cómo</th></tr>
        <tr><td>Desde la app</td><td>Con una selfie: la app pide permiso para usar la cámara</td></tr>
        <tr><td>En persona</td><td>En un Punto Digital cerca de tu casa, si no pudiste desde la app</td></tr>
      </table>
      <pre><code>Para que la selfie salga bien:
- Luz natural, de frente (cerca de una ventana).
- Sin anteojos, gorra ni barbijo.
- Fondo liso, cara entera en el recuadro.
- Seguí las instrucciones de la app (por ejemplo, mover la cabeza).</code></pre>
      <p><strong>Si falla varias veces,</strong> probá otro momento con mejor luz o andá a un Punto Digital. No le pidas a otra persona que se saque la foto por vos: la validación es de tu cara.</p>
      <p>Por ejemplo, una selfie a la noche con la luz del techo detrás suele fallar; la misma selfie de día junto a una ventana suele funcionar.</p>` },
    { titulo: "Clave fiscal, clave de ANSES y cómo cuidarlas", video: {"id":"STZrbNC5tOI","t":"Cómo crear tu Clave de la Seguridad Social · ANSES (0:48)"}, html: `
      <p class="idea">Además de Mi Argentina, algunos organismos tienen su propia clave. Las dos más usadas son la <strong>clave fiscal</strong> de ARCA y la <strong>clave de la Seguridad Social</strong> de ANSES.</p>
      <table>
        <tr><th>Clave</th><th>Para qué</th><th>Se saca</th></tr>
        <tr><td>Clave fiscal (ARCA)</td><td>Impuestos, monotributo, constancias</td><td>Con la app de ARCA o en una oficina; tiene niveles de seguridad</td></tr>
        <tr><td>Clave de la Seguridad Social (ANSES)</td><td>Mi ANSES: asignaciones, jubilación, constancias</td><td>En el sitio de ANSES, siguiendo los pasos de su tutorial</td></tr>
      </table>
      <table>
        <tr><th>Cuidar tus claves</th></tr>
        <tr><td>Una clave distinta para cada cuenta</td></tr>
        <tr><td>No la anotes en el celular sin protección ni la compartas</td></tr>
        <tr><td>Los organismos nunca te la piden por mensaje, llamada o mail</td></tr>
        <tr><td>Si la olvidaste, usá la opción oficial de recuperar o blanquear</td></tr>
      </table>
      <p>El curso "Seguridad digital y estafas" de este sitio explica cómo armar contraseñas seguras.</p>
      <p>Por ejemplo, si alguien llama diciendo ser de ANSES y te pide la clave "para liberar un pago", es una estafa: cortá.</p>` },
  ],
  practica: [
    "Creá tu cuenta en Mi Argentina (o revisá la que tenés) y anotá si tu identidad está validada.",
    "Si no está validada, intentá con la selfie siguiendo los consejos de luz y anotá cuántos intentos hiciste.",
    "Anotá qué claves tenés (Mi Argentina, clave fiscal, clave de ANSES) y cuál te falta sacar.",
  ],
  recursos: [
    { t: "Mi Argentina: qué es y cómo empezar", url: "https://www.argentina.gob.ar/miargentina" },
    { t: "Mi Argentina: cómo validar tu identidad", url: "https://www.argentina.gob.ar/miargentina/validar-identidad" },
    { t: "ARCA: clave fiscal", url: "https://www.arca.gob.ar/claveFiscal/" },
  ],
  quiz: [
    { q: "Si querés juntar tus trámites, turnos y credenciales en un solo lugar, ¿qué usás?", opciones: ["Una red social","El mail de un amigo","Mi Argentina","Una app de juegos"], correcta: 2, explicacion: "Mi Argentina es tu perfil digital ante el Estado. Una red social tienta por conocida, pero no es oficial." },
    { q: "Si vas a bajar la app de Mi Argentina, ¿de dónde la bajás?", opciones: ["De la tienda oficial del celular, revisando que el desarrollador sea el gobierno","De un link que te mandaron","De cualquier página","De un archivo de un desconocido"], correcta: 0, explicacion: "La tienda oficial es segura. El link tienta por rápido, pero puede ser una copia falsa." },
    { q: "Si no validaste tu identidad en Mi Argentina, ¿qué pasa?", opciones: ["Podés hacer todo igual","Te cobran más","Te cierran la cuenta enseguida","Muchos trámites no se pueden hacer"], correcta: 3, explicacion: "La validación habilita los trámites. \"Podés hacer todo\" tienta, pero varios piden identidad validada." },
    { q: "Si querés validar tu identidad desde la app, ¿qué te pide?", opciones: ["Tu contraseña del banco","Una selfie con la cámara del celular","Una foto de tu casa","Tu huella en papel"], correcta: 1, explicacion: "Se valida con la cara. La contraseña del banco tienta como dato de seguridad, pero no se pide nunca." },
    { q: "Si la validación con selfie falla, ¿qué hacés?", opciones: ["Le pedís a otra persona que se saque la foto","Abandonás para siempre","Probás con mejor luz o vas a un Punto Digital","Pagás a un gestor desconocido"], correcta: 2, explicacion: "La validación es de tu cara. Que otro se saque la foto tienta para destrabar, pero no corresponde." },
    { q: "Si vas a sacarte la selfie, ¿cómo conviene la luz?", opciones: ["Luz natural de frente, cerca de una ventana","Una lámpara detrás de vos","A oscuras","Con flash al espejo"], correcta: 0, explicacion: "La luz de frente muestra bien la cara. La lámpara detrás tienta porque está prendida, pero oscurece la cara." },
    { q: "Si querés hacer trámites de impuestos o del monotributo, ¿qué clave necesitás?", opciones: ["La clave de la Seguridad Social","La clave del wifi","Ninguna","La clave fiscal de ARCA"], correcta: 3, explicacion: "ARCA usa la clave fiscal. La de ANSES tienta, pero es para la seguridad social." },
    { q: "Si querés consultar asignaciones o tu jubilación, ¿qué clave usás?", opciones: ["La clave fiscal","La clave de la Seguridad Social de ANSES","La del mail","La del cajero"], correcta: 1, explicacion: "Mi ANSES usa esa clave. La fiscal tienta, pero es de impuestos." },
    { q: "Si usás la misma clave para todas tus cuentas, ¿qué riesgo hay?", opciones: ["Ninguno","Que te la olvides","Si roban una, pueden entrar a todas","Que sea más segura"], correcta: 2, explicacion: "Una clave por cuenta limita el daño. \"Ninguno\" tienta por cómodo, pero es un riesgo grande." },
    { q: "Si alguien llama diciendo ser de ANSES y te pide la clave, ¿qué hacés?", opciones: ["Cortás: los organismos nunca piden la clave","Se la das","Le das la mitad","Le pedís que te llame más tarde y se la das"], correcta: 0, explicacion: "Es una estafa. Dársela tienta si suena oficial, pero ningún organismo la pide." },
    { q: "Si olvidaste tu clave fiscal, ¿qué hacés?", opciones: ["Usás la de otra persona","Creás otra cuenta con otro DNI","Le pedís a un desconocido","Usás la opción oficial para recuperarla o blanquearla"], correcta: 3, explicacion: "Hay un camino oficial. Usar la de otra persona tienta para salir del paso, pero no corresponde." },
    { q: "Si querés anotar tus claves, ¿cómo lo hacés?", opciones: ["En un papel pegado en la compu","En un lugar seguro, no en una nota del celular sin protección","En un grupo de WhatsApp","En redes"], correcta: 1, explicacion: "Las claves se guardan protegidas. El papel pegado tienta por cómodo, pero cualquiera lo ve." },
  ],
},
{
  id: "tramites",
  icono: "📄",
  titulo: "Trámites frecuentes",
  nivel: "Intermedio",
  objetivos: [
    "Pedir el certificado de antecedentes penales en línea",
    "Sacar un turno para el DNI o el pasaporte",
    "Descargar constancias de ANSES y ARCA",
  ],
  lecciones: [
    { titulo: "Certificado de antecedentes penales", video: {"id":"ucQKuab_rj0","t":"Cómo solicitar el certificado de antecedentes penales online · MOZZI (2:12)"}, html: `
      <p class="idea">El <strong>certificado de antecedentes penales</strong> lo piden muchos trabajos. Se puede tramitar en línea y recibir sin salir de tu casa.</p>
      <table>
        <tr><th>Podés entrar con</th></tr>
        <tr><td>Usuario de Mi Argentina con identidad validada y un mail a tu nombre</td></tr>
        <tr><td>Clave fiscal de ARCA</td></tr>
        <tr><td>Clave de la Seguridad Social de ANSES</td></tr>
        <tr><td>Tarjeta Banelco</td></tr>
      </table>
      <table>
        <tr><th>Plazo de entrega</th><th>Costo</th></tr>
        <tr><td>1 hora (exprés)</td><td>El más caro</td></tr>
        <tr><td>6 horas</td><td>Más barato que el exprés</td></tr>
        <tr><td>24 horas</td><td>Más barato todavía</td></tr>
        <tr><td>5 días</td><td>El más barato</td></tr>
      </table>
      <p><strong>El costo depende de la urgencia:</strong> cuanto más rápido, más caro. Los valores cambian: miralos en el sitio oficial antes de elegir.</p>
      <p><strong>El plazo empieza cuando se acredita el pago,</strong> y algunas modalidades tienen horario de pago en días hábiles.</p>
      <p>Por ejemplo, si te lo piden para un trabajo dentro de una semana, la modalidad de 5 días es la más barata y llega a tiempo.</p>` },
    { titulo: "Turnos para DNI y pasaporte", video: {"id":"tfu-AEOjsYY","t":"Cómo sacar turno para el DNI paso a paso · MOZZI (2:51)"}, html: `
      <p class="idea">Para el DNI y el pasaporte hay que ir en persona (para la foto y las huellas), pero el <strong>turno</strong> se saca por internet.</p>
      <pre><code>Pasos generales:
1. Entrá al sitio oficial de turnos o a Mi Argentina.
2. Elegí el trámite (DNI, pasaporte) y si es para vos u otra persona.
3. Elegí la oficina más cercana y un día y horario.
4. Guardá el comprobante del turno (captura o PDF).
5. Revisá qué tenés que llevar (DNI anterior, partida, pago).
6. Llegá unos minutos antes.</code></pre>
      <table>
        <tr><th>Tené en cuenta</th></tr>
        <tr><td>El turno es gratis; el trámite del DNI o pasaporte tiene su costo, que se paga por canales oficiales</td></tr>
        <tr><td>Para menores, hay requisitos especiales (por ejemplo, ir con un adulto responsable)</td></tr>
        <tr><td>Si no podés ir, cancelá el turno para liberarlo</td></tr>
      </table>
      <p>Por ejemplo, si tu DNI vence en 3 meses, sacar el turno con tiempo evita quedarte con el documento vencido justo cuando lo necesitás.</p>` },
    { titulo: "Constancias de ANSES y ARCA", html: `
      <p class="idea">Muchas veces te piden una <strong>constancia</strong>: un documento que prueba un dato, como tu CUIL o tu inscripción en ARCA. Se descargan en PDF.</p>
      <table>
        <tr><th>Constancia</th><th>Para qué</th><th>Dónde</th></tr>
        <tr><td>Constancia de CUIL</td><td>Empleos, bancos, trámites</td><td>ANSES (sitio o Mi ANSES)</td></tr>
        <tr><td>Constancia de inscripción en ARCA</td><td>Monotributistas que facturan</td><td>ARCA con clave fiscal</td></tr>
        <tr><td>Certificación negativa</td><td>Demostrar que no cobrás ciertas prestaciones</td><td>ANSES</td></tr>
        <tr><td>Datos de tu obra social</td><td>Saber qué obra social tenés registrada</td><td>ANSES</td></tr>
      </table>
      <pre><code>Al descargar una constancia:
- Guardala con un nombre claro: "Constancia CUIL - 2026-11.pdf"
- Guardala en una carpeta "Trámites".
- Fijate si tiene fecha de emisión: algunas piden ser recientes.</code></pre>
      <p><strong>Los nombres de cada servicio cambian seguido:</strong> si no encontrás algo, buscá en el sitio oficial con palabras simples ("constancia de CUIL").</p>
      <p>Por ejemplo, un nuevo trabajo te pide la constancia de CUIL: la descargás en 2 minutos desde ANSES y la mandás en PDF.</p>` },
  ],
  practica: [
    "Entrá al sitio oficial del certificado de antecedentes penales y anotá con qué clave podrías entrar y qué modalidad elegirías.",
    "Buscá en el sitio oficial de turnos cuál es la oficina más cercana para el DNI y anotá qué tenés que llevar.",
    "Descargá tu constancia de CUIL, guardala con un nombre claro y anotá cuánto tiempo te llevó.",
  ],
  recursos: [
    { t: "Certificado de antecedentes penales", url: "https://www.argentina.gob.ar/justicia/reincidencia/antecedentespenales" },
    { t: "RENAPER: Registro Nacional de las Personas (DNI y pasaporte)", url: "https://www.argentina.gob.ar/interior/renaper" },
    { t: "Argentina.gob.ar: turnos", url: "https://www.argentina.gob.ar/turnos" },
  ],
  quiz: [
    { q: "Si querés pedir el certificado de antecedentes penales en línea con Mi Argentina, ¿qué necesitás?", opciones: ["Solo el número de DNI","Ir a una comisaría","Usuario con identidad validada y un mail a tu nombre","La clave del wifi"], correcta: 2, explicacion: "Eso pide la página oficial. Solo el DNI tienta, pero sin validación no te deja." },
    { q: "Si no tenés Mi Argentina, ¿con qué otras opciones podés pedir el certificado en línea?", opciones: ["Clave fiscal, clave de la Seguridad Social o tarjeta Banelco","Con nada, es imposible","Con la clave de un amigo","Con un gestor de la calle"], correcta: 0, explicacion: "Hay varias opciones oficiales. La clave de un amigo tienta, pero el certificado es tuyo." },
    { q: "Si necesitás el certificado en 1 hora, ¿qué modalidad elegís?", opciones: ["La de 5 días","La de 24 horas","Ninguna","Exprés"], correcta: 3, explicacion: "La exprés es de 1 hora. La de 5 días tienta por barata, pero no llega a tiempo." },
    { q: "Si te piden el certificado para dentro de una semana, ¿qué modalidad conviene?", opciones: ["La exprés","La de 5 días, la más barata, que llega a tiempo","La de 1 hora siempre","Ninguna"], correcta: 1, explicacion: "Con tiempo, conviene la más barata. La exprés tienta por rápida, pero pagás de más." },
    { q: "Si pediste el certificado, ¿desde cuándo cuenta el plazo de entrega?", opciones: ["Desde que pensaste pedirlo","Desde el día siguiente siempre","Desde que se acredita el pago","Desde que lo imprimís"], correcta: 2, explicacion: "Eso dice la página oficial. \"Desde que lo pediste\" tienta, pero depende del pago." },
    { q: "Si querés renovar el DNI, ¿qué hacés por internet?", opciones: ["Sacás el turno","Hacés todo el trámite","Te mandan el DNI sin ir","Nada"], correcta: 0, explicacion: "El turno es en línea; el trámite, en persona. \"Hacés todo\" tienta, pero hacen falta foto y huellas." },
    { q: "Si alguien te cobra por sacarte el turno del DNI, ¿qué pensás?", opciones: ["Que es normal","Que es obligatorio","Que es más rápido siempre","Que el turno oficial es gratis: te están cobrando de más"], correcta: 3, explicacion: "El turno no se vende. \"Es más rápido\" tienta, pero es el mismo turno gratis." },
    { q: "Si ya sacaste el turno, ¿qué guardás?", opciones: ["Nada","El comprobante del turno","Solo la hora en la cabeza","La clave fiscal"], correcta: 1, explicacion: "El comprobante tiene los datos. \"En la cabeza\" tienta, pero podés confundir el día o la oficina." },
    { q: "Si no podés ir al turno, ¿qué hacés?", opciones: ["No vas y no avisás","Mandás a otra persona en tu lugar","Lo cancelás para liberarlo","Sacás 5 turnos más"], correcta: 2, explicacion: "Cancelar libera el lugar. No avisar tienta por cómodo, pero otro lo podría usar." },
    { q: "Si un trabajo te pide la constancia de CUIL, ¿dónde la descargás?", opciones: ["En ANSES","En RENAPER","En el correo","En un sitio que cobra"], correcta: 0, explicacion: "El CUIL es de ANSES. RENAPER tienta porque es del DNI, pero el CUIL lo da ANSES." },
    { q: "Si sos monotributista y te piden la constancia de inscripción, ¿dónde la buscás?", opciones: ["En ANSES","En RENAPER","En el banco","En ARCA, con clave fiscal"], correcta: 3, explicacion: "La inscripción impositiva es de ARCA. ANSES tienta, pero es seguridad social." },
    { q: "Si descargás una constancia, ¿cómo la guardás?", opciones: ["Con el nombre que trae, \"documento (3).pdf\"","Con un nombre claro y en una carpeta de trámites","No la guardás","Solo en el chat"], correcta: 1, explicacion: "Un nombre claro te deja encontrarla. El nombre que trae tienta por rápido, pero después no sabés cuál es." },
  ],
},
{
  id: "seguridad",
  icono: "🛡️",
  titulo: "Trámites sin estafas",
  nivel: "Intermedio",
  objetivos: [
    "Reconocer los mensajes falsos que se hacen pasar por organismos",
    "Distinguir la ayuda legítima de los falsos gestores",
    "Actuar si diste un dato o una clave por error",
  ],
  lecciones: [
    { titulo: "Mensajes falsos", html: `
      <p class="idea">Muchas estafas se hacen pasar por ANSES, ARCA o Mi Argentina. Usan el miedo ("tu trámite está bloqueado") o la promesa ("cobrá un bono") para que pongas tus datos.</p>
      <table>
        <tr><th>Mensaje falso</th><th>Qué quieren</th></tr>
        <tr><td>"Tu cuenta de Mi Argentina será suspendida, ingresá acá"</td><td>Tu usuario y contraseña</td></tr>
        <tr><td>"Tenés un bono de ANSES sin cobrar, completá tus datos"</td><td>Tus datos y tu clave del banco</td></tr>
        <tr><td>"ARCA: tenés una deuda, pagá en este link"</td><td>Que pagues a una cuenta falsa</td></tr>
        <tr><td>"Te llamo de ANSES, decime el código que te llegó"</td><td>Entrar a tu cuenta</td></tr>
      </table>
      <pre><code>Regla de oro:
Los organismos no te piden claves ni códigos
por mensaje, llamada, WhatsApp ni redes.
Si dudás, entrá vos al sitio oficial escribiendo la dirección.</code></pre>
      <p><strong>ARCA usa el domicilio fiscal electrónico</strong> para sus comunicaciones: si te llega un aviso por otro medio, revisá ahí.</p>
      <p>Por ejemplo, un SMS con un link a "anses-beneficios.com" no es de ANSES: la dirección no termina en .gob.ar.</p>` },
    { titulo: "Gestores y ayuda legítima", html: `
      <p class="idea">Hay quienes ofrecen "hacerte el trámite" a cambio de plata. Algunos son profesionales en regla; otros cobran por algo gratis o se quedan con tus datos.</p>
      <table>
        <tr><th>Ayuda legítima</th><th>Señales de alarma</th></tr>
        <tr><td>Puntos Digitales y oficinas del Estado (gratis)</td><td>Te piden tu clave para "hacer todo ellos"</td></tr>
        <tr><td>Un familiar de confianza que te acompaña mientras vos lo hacés</td><td>Te cobran por un turno gratuito</td></tr>
        <tr><td>Un contador o abogado matriculado, para trámites complejos</td><td>Te prometen un beneficio que no te corresponde</td></tr>
        <tr><td>La mesa de ayuda oficial de Mi Argentina</td><td>Te piden pagar a una cuenta personal</td></tr>
      </table>
      <p><strong>Si alguien te ayuda, que te acompañe:</strong> la clave la escribís vos y el trámite queda a tu nombre. Al terminar, cerrá la sesión.</p>
      <p><strong>Para impuestos,</strong> un contador puede actuar por vos sin tu clave: ARCA permite delegarle servicios.</p>
      <p>Por ejemplo, un "gestor" en la puerta de una oficina que cobra por sacarte un turno te está vendiendo algo que podés hacer gratis desde el celular.</p>` },
    { titulo: "Si diste un dato por error", html: `
      <p class="idea">Si diste una clave, un código o tus datos a quien no debías, actuá rápido: cuanto antes, menos daño.</p>
      <pre><code>Si diste una clave o un código:
1. Cambiá esa clave enseguida desde el sitio oficial.
2. Si usabas la misma clave en otras cuentas, cambiala también ahí.
3. Si diste datos del banco, llamá al banco y bloqueá las tarjetas.
4. Revisá movimientos raros en tus cuentas.
5. Guardá capturas de los mensajes y del número.
6. Hacé la denuncia (ver "Dónde denunciar" en recursos).</code></pre>
      <table>
        <tr><th>Si te pasó...</th><th>Primer paso</th></tr>
        <tr><td>Diste la clave de Mi Argentina</td><td>Cambiar la contraseña</td></tr>
        <tr><td>Diste la clave fiscal</td><td>Cambiarla en ARCA</td></tr>
        <tr><td>Diste la clave del banco o un código</td><td>Llamar al banco y bloquear</td></tr>
        <tr><td>Pagaste a un sitio falso</td><td>Llamar al banco o la billetera y denunciar</td></tr>
      </table>
      <p><strong>No te culpes:</strong> estas estafas están hechas para engañar a cualquiera. Lo importante es actuar rápido.</p>
      <p>El curso "Seguridad digital y estafas" de este sitio profundiza en cómo reconocerlas.</p>
      <p>Por ejemplo, alguien que dio la clave de Mi Argentina y la cambió a los 10 minutos tiene muchas más chances de que no pase nada que quien se da cuenta a la semana.</p>` },
  ],
  practica: [
    "Buscá un mensaje sospechoso que hayas recibido (o uno de ejemplo) y anotá 3 señales de que es falso.",
    "Anotá dónde queda el Punto Digital o la oficina oficial más cercana para pedir ayuda gratis.",
    "Escribí los 6 pasos de \"Si diste un dato por error\" y anotá el teléfono de tu banco para bloquear tarjetas.",
  ],
  recursos: [
    { t: "Con vos en la web: seguridad en internet (Argentina.gob.ar)", url: "https://www.argentina.gob.ar/justicia/convosenlaweb" },
    { t: "Con vos en la web: dónde denunciar un delito informático", url: "https://www.argentina.gob.ar/justicia/convosenlaweb/denuncia" },
    { t: "Mi Argentina: mesa de ayuda", url: "https://www.argentina.gob.ar/miargentina/mesadeayuda" },
  ],
  quiz: [
    { q: "Si te llega \"Tu cuenta de Mi Argentina será suspendida, ingresá acá\", ¿qué hacés?", opciones: ["Tocás el link enseguida","Ponés tu contraseña","No tocás el link y entrás vos a la app o al sitio oficial","Lo reenviás a todos"], correcta: 2, explicacion: "Es un intento de robo. Tocar el link tienta por el miedo, pero es justo lo que buscan." },
    { q: "Si alguien que dice ser de ANSES te pide el código que te llegó, ¿qué hacés?", opciones: ["Cortás: los organismos no piden códigos","Se lo das","Le das la mitad","Le pedís que te espere"], correcta: 0, explicacion: "El código abre tu cuenta. Darlo tienta si suena oficial, pero ningún organismo lo pide." },
    { q: "Si te avisan de una \"deuda en ARCA\" con un link para pagar, ¿qué hacés?", opciones: ["Pagás enseguida","Transferís a la cuenta del mensaje","Respondés con tus datos","No pagás ahí: entrás a ARCA y revisás tu domicilio fiscal electrónico"], correcta: 3, explicacion: "ARCA comunica por su domicilio fiscal electrónico. Pagar enseguida tienta por miedo, pero es una estafa." },
    { q: "Si un link dice \"anses-beneficios.com\", ¿es oficial?", opciones: ["Sí, dice ANSES","No: no termina en .gob.ar","Sí, si tiene el logo","Depende del color"], correcta: 1, explicacion: "El nombre en la dirección no alcanza. \"Dice ANSES\" tienta, pero los oficiales terminan en .gob.ar." },
    { q: "Si necesitás ayuda gratis con un trámite, ¿adónde vas?", opciones: ["A un gestor de la puerta que cobra","A un sitio que cobra por turnos","A un Punto Digital o a una oficina del Estado","A nadie"], correcta: 2, explicacion: "La ayuda oficial es gratis. El gestor tienta por cercano, pero cobra por algo gratis." },
    { q: "Si alguien te ayuda con un trámite, ¿quién escribe la clave?", opciones: ["Vos, y al terminar cerrás la sesión","La otra persona, siempre","La anotás en un papel para que la use","Se la mandás por mensaje"], correcta: 0, explicacion: "La clave es tuya. Que la escriba el otro tienta por cómodo, pero pierde el control." },
    { q: "Si un contador te lleva los impuestos, ¿le das tu clave fiscal?", opciones: ["Sí, siempre","Sí, por WhatsApp","Sí, y también la del banco","No hace falta: podés delegarle servicios desde ARCA"], correcta: 3, explicacion: "ARCA permite delegar. Darle la clave tienta por simple, pero no es necesario." },
    { q: "Si alguien te promete un beneficio que no te corresponde a cambio de plata, ¿qué es?", opciones: ["Una oportunidad","Una señal de alarma: probablemente una estafa","Un trámite normal","Un regalo del Estado"], correcta: 1, explicacion: "Los beneficios no se compran. \"Oportunidad\" tienta, pero es la señal típica de estafa." },
    { q: "Si diste tu clave de Mi Argentina por error, ¿qué hacés primero?", opciones: ["Esperás a ver qué pasa","Le pedís al estafador que la borre","Cambiás la contraseña enseguida","Nada"], correcta: 2, explicacion: "Cambiarla rápido corta el acceso. Esperar tienta, pero da tiempo al estafador." },
    { q: "Si diste datos de tu tarjeta en un sitio falso, ¿qué hacés?", opciones: ["Llamás al banco y bloqueás la tarjeta","Nada","Volvés a poner los datos","Esperás el resumen del mes"], correcta: 0, explicacion: "Bloquear evita compras. Esperar el resumen tienta, pero ya puede ser tarde." },
    { q: "Si usabas la misma clave en otras cuentas, ¿qué hacés?", opciones: ["Nada","Solo en una","La anotás en redes","La cambiás también en esas cuentas"], correcta: 3, explicacion: "Con la misma clave entran a todas. \"Nada\" tienta, pero el riesgo se repite." },
    { q: "Si caíste en una estafa, ¿qué no hacés?", opciones: ["No guardás capturas","No te quedás callado por vergüenza: denunciás","No llamás al banco","No cambiás la clave"], correcta: 1, explicacion: "Denunciar ayuda. La vergüenza tienta a callar, pero estas estafas engañan a cualquiera." },
  ],
},
{
  id: "organizar",
  icono: "🗂️",
  titulo: "Ordenar papeles y vencimientos",
  nivel: "Avanzado",
  objetivos: [
    "Armar una carpeta digital de documentos",
    "Llevar un calendario de vencimientos",
    "Ayudar a otra persona sin poner en riesgo sus datos",
  ],
  lecciones: [
    { titulo: "Tu carpeta digital", html: `
      <p class="idea">Tener los documentos ordenados te ahorra buscar el mismo papel cada vez que te lo piden. Una carpeta digital bien armada se arma una vez y se usa siempre.</p>
      <pre><code>Trámites/
├── Identidad/         DNI (foto de frente y dorso), CUIL
├── Trabajo/           Recibos, constancias de trabajo
├── Impuestos/         Constancias de ARCA, facturas
├── Salud/             Credencial de obra social, estudios
├── Casa/              Contrato, servicios
└── Certificados/      Antecedentes penales, títulos</code></pre>
      <table>
        <tr><th>Regla</th><th>Por qué</th></tr>
        <tr><td>Nombres claros: "2026-11 Constancia CUIL.pdf"</td><td>Se encuentra en segundos y se ordena por fecha</td></tr>
        <tr><td>Una copia en la nube y otra en otro lugar</td><td>Si perdés el celular, no perdés todo</td></tr>
        <tr><td>Carpeta protegida (con contraseña o en tu cuenta)</td><td>Son datos personales</td></tr>
        <tr><td>Borrar lo vencido o repetido una vez por año</td><td>Que no se vuelva un lío</td></tr>
      </table>
      <p>Por ejemplo, cuando un nuevo trabajo te pide DNI, CUIL y antecedentes, con la carpeta armada mandás los tres archivos en 2 minutos.</p>` },
    { titulo: "Calendario de vencimientos", html: `
      <p class="idea">Muchos trámites tienen fecha: un DNI que vence, un certificado que tiene que ser reciente, una cuota que se paga cada mes. Anotarlos evita apuros y multas.</p>
      <table>
        <tr><th>Qué anotar</th><th>Cuándo poner el aviso</th></tr>
        <tr><td>Vencimiento del DNI y del pasaporte</td><td>3 meses antes</td></tr>
        <tr><td>Vencimiento de la licencia de conducir</td><td>1 o 2 meses antes</td></tr>
        <tr><td>Pagos mensuales (monotributo, servicios)</td><td>Unos días antes de cada vencimiento</td></tr>
        <tr><td>Turnos</td><td>El día anterior</td></tr>
      </table>
      <pre><code>En el calendario del celular:
Título:   Renovar DNI (vence 15/03)
Fecha:    15/12
Aviso:    el mismo día a las 9
Nota:     sacar turno en el sitio oficial</code></pre>
      <p><strong>Mi Argentina</strong> también puede mostrarte avisos y vencimientos personalizados.</p>
      <p>Por ejemplo, el aviso 3 meses antes del vencimiento del DNI te da tiempo de conseguir un turno cómodo, en lugar de correr la última semana.</p>` },
    { titulo: "Ayudar a otra persona", html: `
      <p class="idea">Muchas personas ayudan a sus padres, abuelos o vecinos con trámites. Se puede ayudar mucho sin quedarse con sus claves ni ponerlas en riesgo.</p>
      <table>
        <tr><th>Hacé</th><th>Evitá</th></tr>
        <tr><td>Sentarte al lado y que la persona escriba sus claves</td><td>Anotar sus claves en tu celular</td></tr>
        <tr><td>Usar su mail y su celular</td><td>Poner tu mail en su cuenta</td></tr>
        <tr><td>Explicar cada paso para que aprenda</td><td>Hacerlo todo sin explicar</td></tr>
        <tr><td>Cerrar la sesión al terminar</td><td>Dejar su cuenta abierta en tu compu</td></tr>
        <tr><td>Dejar los pasos escritos en un papel</td><td>Que dependa de vos para siempre</td></tr>
      </table>
      <p><strong>Si la persona no puede hacer sola el trámite,</strong> averiguá si existe una forma oficial de que otro la represente (por ejemplo, un apoderado en ANSES).</p>
      <p>El curso "Internet para adultos mayores" está en la lista de este sitio para quien acompaña a personas mayores.</p>
      <p>Por ejemplo, ayudar a tu abuela a validar su identidad en Mi Argentina con su propio celular le permite después consultar sola sus trámites.</p>` },
  ],
  practica: [
    "Armá la carpeta \"Trámites\" con las 6 subcarpetas y guardá al menos 3 documentos con nombres claros. Anotá cuántos guardaste.",
    "Cargá en el calendario del celular al menos 3 vencimientos con su aviso. Anotá cuáles son.",
    "Ayudá a alguien con un trámite siguiendo la tabla y anotá qué pasos le dejaste escritos.",
  ],
  recursos: [
    { t: "Mi Argentina: qué es y cómo empezar", url: "https://www.argentina.gob.ar/miargentina" },
    { t: "Mi Argentina: preguntas frecuentes", url: "https://www.argentina.gob.ar/miargentina/preguntasfrecuentes" },
  ],
  quiz: [
    { q: "Si querés encontrar rápido tus documentos, ¿qué armás?", opciones: ["Todo suelto en descargas","Fotos en el chat","Una carpeta digital con subcarpetas y nombres claros","Nada"], correcta: 2, explicacion: "El orden ahorra tiempo. Todo en descargas tienta por cómodo, pero después no encontrás nada." },
    { q: "Si guardás una constancia de CUIL de noviembre de 2026, ¿qué nombre le ponés?", opciones: ["\"2026-11 Constancia CUIL.pdf\"","\"documento (3).pdf\"","\"asdf.pdf\"","\"nuevo.pdf\""], correcta: 0, explicacion: "Con fecha y nombre se encuentra y ordena. \"documento (3)\" tienta porque viene así, pero no dice qué es." },
    { q: "Si perdés el celular, ¿cómo no perdés tus documentos?", opciones: ["No hay forma","Teniéndolos solo en el celular","Mandándolos a un grupo","Teniendo una copia en la nube y otra en otro lugar"], correcta: 3, explicacion: "Las copias protegen. Solo en el celular tienta por cómodo, pero se pierde todo junto." },
    { q: "Si tu carpeta tiene tu DNI y tu CUIL, ¿cómo la cuidás?", opciones: ["Compartida en público","Con contraseña o dentro de tu cuenta protegida","En una computadora de un locutorio","Sin ninguna protección"], correcta: 1, explicacion: "Son datos personales. Compartirla en público tienta para tenerla a mano, pero cualquiera la ve." },
    { q: "Si tu DNI vence en marzo, ¿cuándo te conviene el aviso?", opciones: ["El mismo día que vence","Un año después","Unos 3 meses antes","Nunca"], correcta: 2, explicacion: "Te da tiempo para el turno. El mismo día tienta, pero ya está vencido." },
    { q: "Si tenés un turno, ¿cuándo ponés el aviso?", opciones: ["El día anterior","Un año antes","Una hora después","No hace falta"], correcta: 0, explicacion: "El día anterior te deja organizarte. \"No hace falta\" tienta si te acordás, pero es fácil olvidarlo." },
    { q: "Si pagás el monotributo cada mes, ¿cuándo ponés el aviso?", opciones: ["Después del vencimiento","Una vez por año","Nunca","Unos días antes de cada vencimiento"], correcta: 3, explicacion: "Antes evita intereses. Después del vencimiento tienta por olvido, pero ya debés intereses." },
    { q: "Si ayudás a tu abuela con un trámite, ¿quién escribe la clave?", opciones: ["Vos, y la anotás en tu celular","Ella, con vos al lado","Un desconocido","Nadie"], correcta: 1, explicacion: "La clave es suya. Anotarla en tu celular tienta por practicidad, pero la pone en riesgo." },
    { q: "Si ayudás a alguien, ¿qué mail ponés en su cuenta?", opciones: ["El tuyo","Uno inventado","El suyo","El de un vecino"], correcta: 2, explicacion: "La cuenta es de la persona. Poner el tuyo tienta para controlar los avisos, pero ella pierde el acceso." },
    { q: "Si terminaste de ayudar en tu compu, ¿qué hacés?", opciones: ["Cerrás la sesión de su cuenta","La dejás abierta","Guardás su contraseña en el navegador","Nada"], correcta: 0, explicacion: "Cerrar la sesión protege su cuenta. Dejarla abierta tienta para la próxima vez, pero es un riesgo." },
    { q: "Si querés que la persona aprenda, ¿qué hacés?", opciones: ["Lo hacés todo rápido sin explicar","Le decís que no toque nada","Nada","Explicás cada paso y le dejás los pasos escritos"], correcta: 3, explicacion: "Así puede hacerlo sola. Hacerlo rápido tienta por apuro, pero depende de vos para siempre." },
    { q: "Si una persona no puede hacer sola un trámite, ¿qué averiguás?", opciones: ["Cómo usar su clave sin que sepa","Si existe una forma oficial de representarla, como un apoderado","Nada","Un gestor de la calle"], correcta: 1, explicacion: "Hay caminos oficiales. Usar su clave sin que sepa tienta por rápido, pero no corresponde." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: tus trámites en orden",
  nivel: "Avanzado",
  objetivos: [
    "Dejar tu identidad digital lista: cuentas y claves",
    "Hacer al menos 2 trámites reales por internet",
    "Evaluar el resultado con una rúbrica",
  ],
  lecciones: [
    { titulo: "El encargo", video: {"id":"Ce4pD17aIik","t":"Cómo obtengo o blanqueo mi clave fiscal con la app ARCA Móvil · ARCA (0:45)"}, html: `
      <p class="idea">El proyecto final es dejar <strong>tus trámites en orden</strong>: tu identidad digital lista, 2 trámites reales hechos por internet y tu carpeta y tu calendario armados.</p>
      <table>
        <tr><th>Parte</th><th>Módulo</th></tr>
        <tr><td>Lista de lo que necesitás y sitios oficiales en favoritos</td><td>Antes de empezar</td></tr>
        <tr><td>Mi Argentina validada y las claves que te correspondan</td><td>Tu identidad digital</td></tr>
        <tr><td>2 trámites reales (por ejemplo, constancia de CUIL y un turno)</td><td>Trámites frecuentes</td></tr>
        <tr><td>Lista de señales de estafa y qué harías</td><td>Trámites sin estafas</td></tr>
        <tr><td>Carpeta digital y calendario de vencimientos</td><td>Ordenar papeles y vencimientos</td></tr>
      </table>
      <pre><code>Registro del proyecto (ejemplo):
Fecha   Trámite                Dónde                Resultado
10/11   Validar Mi Argentina   App, con selfie      Listo, 2 intentos
12/11   Constancia de CUIL     ANSES                PDF guardado
15/11   Turno DNI              Sitio de turnos      Turno para el 3/12</code></pre>
      <p>Por ejemplo, alguien que nunca hizo un trámite en línea puede, en una semana, tener su cuenta validada, su constancia de CUIL guardada y el turno del DNI sacado.</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si algo está listo. Usala para evaluar tu proyecto.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Identidad digital</td><td>Mi Argentina validada y las claves que necesitás</td><td>Cuenta sin validar o falta una clave</td><td>Sin cuenta</td></tr>
        <tr><td>Trámites</td><td>2 trámites reales terminados</td><td>1 trámite</td><td>Ninguno</td></tr>
        <tr><td>Registro</td><td>Fecha, trámite, dónde y resultado de cada uno</td><td>Incompleto</td><td>No hay</td></tr>
        <tr><td>Orden</td><td>Carpeta con nombres claros y calendario con avisos</td><td>Solo uno</td><td>Ninguno</td></tr>
        <tr><td>Prevención</td><td>Lista de señales de estafa y pasos si das un dato</td><td>Incompleta</td><td>No hay</td></tr>
        <tr><td>Seguridad</td><td>Solo sitios oficiales y claves sin compartir</td><td>—</td><td>Usó un sitio no oficial o compartió una clave</td></tr>
      </table>
      <pre><code>Máximo: 12
11 o 12 → listo
7 a 10  → mejorá lo que sacó 0 o 1
0 a 6   → repasá los módulos y volvé a intentarlo
Regla: si "Seguridad" tiene 0, el proyecto no está listo,
       aunque el total sea alto.</code></pre>
      <p>Por ejemplo, hacer los 2 trámites con un "gestor" que pidió tu clave saca 0 en seguridad: los trámites están, pero tu cuenta quedó en riesgo.</p>` },
    { titulo: "Seguir aprendiendo", html: `
      <p class="idea">Una vez que hiciste un par de trámites, los demás se parecen. Lo importante es saber dónde buscar y desconfiar de los atajos.</p>
      <table>
        <tr><th>Si necesitás...</th><th>Dónde</th></tr>
        <tr><td>Un trámite nacional</td><td>argentina.gob.ar o Mi Argentina</td></tr>
        <tr><td>Un trámite de tu provincia o municipio</td><td>El sitio oficial de tu provincia o municipio</td></tr>
        <tr><td>Ayuda en persona</td><td>Un Punto Digital o la oficina del organismo</td></tr>
        <tr><td>Ayuda con Mi Argentina</td><td>La mesa de ayuda oficial</td></tr>
        <tr><td>Denunciar una estafa</td><td>Los canales de "Con vos en la web"</td></tr>
      </table>
      <p><strong>Una vez por año,</strong> revisá tu carpeta, tus claves y tus vencimientos. Lleva una tarde y evita apuros.</p>
      <p>Otros cursos del sitio que te pueden servir: "Seguridad digital y estafas" y "Monotributo, facturación e impuestos para independientes".</p>
      <p>Por ejemplo, si un día necesitás un trámite nuevo, empezar por argentina.gob.ar y buscar con palabras simples suele llevarte al lugar correcto en pocos minutos.</p>` },
  ],
  practica: [
    "Completá las 5 partes del encargo y anotá la fecha en que terminaste cada una.",
    "Hacé al menos 2 trámites reales y anotalos en el registro con fecha, dónde y resultado.",
    "Evaluá tu proyecto con la rúbrica y anotá el puntaje de cada criterio y el total.",
  ],
  recursos: [
    { t: "Mi Argentina: qué es y cómo empezar", url: "https://www.argentina.gob.ar/miargentina" },
    { t: "Argentina.gob.ar: turnos", url: "https://www.argentina.gob.ar/turnos" },
    { t: "Con vos en la web: dónde denunciar un delito informático", url: "https://www.argentina.gob.ar/justicia/convosenlaweb/denuncia" },
  ],
  quiz: [
    { q: "Si armás el proyecto final, ¿qué tiene que incluir?", opciones: ["Solo bajar la app","Solo un turno","Identidad digital, 2 trámites reales, registro, carpeta, calendario y prevención","Solo una lista de sitios"], correcta: 2, explicacion: "El proyecto junta todo el curso. Bajar la app tienta como primer paso, pero es solo el comienzo." },
    { q: "Si tu cuenta de Mi Argentina no está validada, ¿cuánto sacás en \"Identidad digital\"?", opciones: ["1 punto","2 puntos","0 puntos","3 puntos"], correcta: 0, explicacion: "Hay cuenta, pero sin validar. 0 tienta, pero ese es cuando no hay cuenta." },
    { q: "Si hiciste un solo trámite real, ¿cuánto sacás en \"Trámites\"?", opciones: ["2 puntos","0 puntos","3 puntos","1 punto"], correcta: 3, explicacion: "La rúbrica pide 2. Sacar 2 tienta porque ya hiciste uno, pero falta el otro." },
    { q: "Si tenés la carpeta, pero no el calendario, ¿cuánto sacás en \"Orden\"?", opciones: ["2 puntos","1 punto","0 puntos","No se evalúa"], correcta: 1, explicacion: "Falta uno de los dos. Sacar 2 tienta porque la carpeta está, pero falta el calendario." },
    { q: "Si hiciste los trámites con un gestor que te pidió la clave, ¿está listo el proyecto?", opciones: ["Sí, los trámites están","Sí, si salió rápido","No: \"Seguridad\" tiene 0 y eso no se compensa","Depende del gestor"], correcta: 2, explicacion: "La regla lo dice. \"Los trámites están\" tienta, pero tu cuenta quedó en riesgo." },
    { q: "Si tu proyecto saca 8, ¿qué hacés?", opciones: ["Mejorás lo que sacó 0 o 1","Lo das por terminado","Empezás de cero","Cambiás la rúbrica"], correcta: 0, explicacion: "De 7 a 10 se mejora lo flojo. Empezar de cero tienta, pero no hace falta." },
    { q: "Si en el registro anotás \"Constancia de CUIL · ANSES · PDF guardado\", ¿qué te falta?", opciones: ["Nada","Tu clave","El color del PDF","La fecha"], correcta: 3, explicacion: "El registro pide fecha, trámite, dónde y resultado. Tu clave tienta, pero nunca va en un registro." },
    { q: "Si necesitás un trámite de tu municipio, ¿dónde lo buscás?", opciones: ["En el sitio de otro país","En el sitio oficial de tu municipio","En un sitio que cobra por todo","En redes sin fuente"], correcta: 1, explicacion: "Cada municipio tiene su sitio. El que cobra por todo tienta por cómodo, pero no es oficial." },
    { q: "Si necesitás ayuda con Mi Argentina, ¿adónde vas?", opciones: ["A un grupo de redes","A un desconocido que te escribe","A la mesa de ayuda oficial","A nadie"], correcta: 2, explicacion: "La mesa de ayuda es oficial. El desconocido tienta por rápido, pero puede ser una estafa." },
    { q: "Si caíste en una estafa con un trámite, ¿dónde ves cómo denunciar?", opciones: ["En \"Con vos en la web\"","En el mismo mensaje de la estafa","En ningún lado","En un foro anónimo"], correcta: 0, explicacion: "Es el canal oficial de información. El mensaje de la estafa tienta por tener datos, pero es del estafador." },
    { q: "Si querés mantener todo en orden, ¿cada cuánto revisás carpeta, claves y vencimientos?", opciones: ["Nunca","Cada 10 años","Solo cuando algo falla","Una vez por año"], correcta: 3, explicacion: "Una revisión anual alcanza. \"Cuando algo falla\" tienta, pero ahí ya hay apuro." },
    { q: "Si necesitás un trámite nuevo y no sabés dónde está, ¿por dónde empezás?", opciones: ["Por el primer aviso pago del buscador","Por argentina.gob.ar, buscando con palabras simples","Por un mensaje que te llegó","Por un gestor"], correcta: 1, explicacion: "Empezar por el sitio oficial evita sitios falsos. El aviso pago tienta por estar primero, pero puede no ser oficial." },
  ],
},
];
