// Temario del curso "Monotributo, facturación e impuestos para independientes". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js impuestos-independientes y node tools/metodologia.js impuestos-independientes
window.TEMARIO = [
{
  id: "empezar",
  icono: "🧾",
  titulo: "Empezar a trabajar por tu cuenta",
  nivel: "Básico",
  objetivos: [
    "Sacar la CUIT y la clave fiscal con el nivel que necesitás",
    "Elegir entre monotributo, monotributo social y responsable inscripto según tu caso",
    "Armar la lista de obligaciones que tenés como independiente",
  ],
  lecciones: [
    { titulo: "Qué cambia al ser independiente", html: `
      <p class="idea">Cuando trabajás en relación de dependencia, tu empleador descuenta los aportes y paga por vos. Cuando trabajás por tu cuenta, esas tareas pasan a ser tuyas: inscribirte, facturar y pagar.</p>
      <table>
        <tr><th>En relación de dependencia</th><th>Por tu cuenta</th></tr>
        <tr><td>Te pagan un sueldo con recibo</td><td>Cobrás y entregás una factura</td></tr>
        <tr><td>El empleador hace los aportes de jubilación y obra social</td><td>Los pagás vos (en el monotributo, dentro de la cuota)</td></tr>
        <tr><td>Vacaciones y aguinaldo por ley</td><td>Tenés que preverlos vos en tus precios</td></tr>
        <tr><td>No hacés trámites impositivos</td><td>Te inscribís en ARCA y cumplís fechas</td></tr>
      </table>
      <p><strong>ARCA</strong> (Agencia de Recaudación y Control Aduanero) es el organismo que reemplazó a la AFIP. Muchos trámites y videos todavía dicen AFIP: es lo mismo.</p>
      <p><strong>Trabajar en negro</strong> (sin facturar) te deja sin jubilación ni obra social, sin poder demostrar ingresos para un alquiler o un crédito, y con riesgo de multas.</p>
      <p class="aviso">Este curso es educativo y no reemplaza a un contador. Los montos, categorías y reglas cambian seguido: verificá siempre en el sitio de ARCA antes de hacer un trámite.</p>
      <p>Por ejemplo, una diseñadora que cobra $ 800.000 por mes sin facturar no puede mostrar esos ingresos para alquilar un departamento, y no suma años de aportes para jubilarse.</p>` },
    { titulo: "CUIT y clave fiscal", video: {"id":"Ce4pD17aIik","t":"Cómo obtengo o blanqueo mi clave fiscal con la app ARCA Móvil · ARCA (0:45)"}, html: `
      <p class="idea">Para hacer cualquier trámite necesitás dos cosas: la <strong>CUIT</strong> (tu número de contribuyente) y la <strong>clave fiscal</strong> (la contraseña para entrar a los servicios de ARCA).</p>
      <table>
        <tr><th>Paso</th><th>Qué hacés</th></tr>
        <tr><td>1. CUIT</td><td>Si ya trabajaste en blanco, tu CUIL suele servir de base; se tramita en ARCA</td></tr>
        <tr><td>2. Clave fiscal</td><td>Con la app ARCA Móvil (con foto del DNI y de tu cara) o en una oficina</td></tr>
        <tr><td>3. Nivel de seguridad</td><td>Para el monotributo y la facturación se pide nivel 3 o más</td></tr>
        <tr><td>4. Domicilio fiscal electrónico</td><td>Lo habilitás con clave fiscal: ahí te llegan las comunicaciones oficiales</td></tr>
      </table>
      <p><strong>El domicilio fiscal electrónico</strong> ayuda a evitar estafas: ARCA te escribe ahí, no por WhatsApp ni por mails con enlaces raros.</p>
      <p><strong>Tu clave es tuya:</strong> no se la des a nadie. Si un contador te ayuda, se le puede delegar el acceso a servicios desde ARCA, sin compartir tu clave.</p>
      <pre><code>Formato de la CUIT: 20-XXXXXXXX-X
(prefijo, número de DNI y un dígito verificador)</code></pre>
      <p>Por ejemplo, si te llega un mail que dice "ARCA: tenés una deuda, pagá en este enlace", no hagas clic: entrá vos al sitio de ARCA y fijate en tu domicilio fiscal electrónico.</p>` },
    { titulo: "Qué régimen te toca", html: `
      <p class="idea">Hay tres formas principales de trabajar por tu cuenta en regla. La mayoría de quienes empiezan entran en el <strong>monotributo</strong>, porque es el más simple.</p>
      <table>
        <tr><th>Régimen</th><th>Para quién</th><th>Cómo se paga</th></tr>
        <tr><td>Monotributo</td><td>Pequeños contribuyentes, hasta el tope de la categoría más alta</td><td>Una cuota fija por mes según tu categoría</td></tr>
        <tr><td>Monotributo social</td><td>Personas en situación de vulnerabilidad social que inician un emprendimiento</td><td>Una cuota reducida; hay que emitir al menos 6 facturas por semestre</td></tr>
        <tr><td>Responsable inscripto</td><td>Quien supera los topes del monotributo o no puede estar en él</td><td>IVA, Ganancias y autónomos por separado</td></tr>
      </table>
      <p><strong>No se elige por gusto:</strong> si superás los límites del monotributo (lo vas a ver en el módulo siguiente), tenés que pasar a responsable inscripto.</p>
      <p><strong>Si además tenés un empleo,</strong> podés ser monotributista por tu actividad independiente. Consultá en ARCA qué componentes de la cuota te corresponden en ese caso.</p>
      <p>Por ejemplo, un electricista que arranca con pocos clientes por mes suele empezar en el monotributo; si con los años factura mucho más, pasa a responsable inscripto.</p>` },
  ],
  practica: [
    "Anotá en una tabla qué cosas hacía tu empleador por vos (o haría) y quién las va a hacer cuando trabajes por tu cuenta.",
    "Verificá qué nivel de clave fiscal tenés (entrando a ARCA o con la app) y anotalo. Si es menor a 3, anotá cómo lo vas a subir.",
    "Escribí tu actividad, cuánto pensás facturar por mes y anotá qué régimen te correspondería y por qué.",
  ],
  recursos: [
    { t: "ARCA: clave fiscal", url: "https://www.arca.gob.ar/claveFiscal/" },
    { t: "ARCA: primeros pasos para darte de alta", url: "https://www.arca.gob.ar/monotributo/ayuda/inicio.asp" },
    { t: "ARCA: monotributo social", url: "https://www.arca.gob.ar/monotributo/monotributo-social/default.asp" },
  ],
  quiz: [
    { q: "Si pasás de un empleo a trabajar por tu cuenta, ¿quién paga tus aportes de jubilación?", opciones: ["Tu empleador anterior","Nadie, ya no hacen falta","Vos: en el monotributo, dentro de la cuota mensual","El cliente, automáticamente"], correcta: 2, explicacion: "Como independiente, los aportes son tuyos. \"El cliente\" tienta porque te paga, pero no hace aportes por vos." },
    { q: "Si cobrás por tu trabajo sin facturar, ¿qué perdés?", opciones: ["Jubilación, obra social y poder demostrar ingresos, además del riesgo de multas","Nada, ganás más","Solo la obra social","Nada si es poca plata"], correcta: 0, explicacion: "Trabajar en negro tiene costos grandes. \"Ganás más\" tienta por la cuota que no pagás, pero perdés derechos." },
    { q: "Si un video viejo dice \"entrá a AFIP\", ¿qué tenés en cuenta?", opciones: ["Que el video está mal","Que son dos trámites distintos","Que hay que ir a los dos","Que AFIP ahora se llama ARCA: es el mismo organismo"], correcta: 3, explicacion: "ARCA reemplazó a la AFIP. \"Dos trámites\" tienta por los nombres distintos, pero es uno solo." },
    { q: "Si querés entrar a los servicios de ARCA, ¿qué necesitás?", opciones: ["Solo el DNI","La CUIT y la clave fiscal","Una cuenta en el banco","Un contador obligatorio"], correcta: 1, explicacion: "La clave fiscal es tu contraseña. El DNI tienta porque se usa para sacarla, pero no alcanza para entrar." },
    { q: "Si querés darte de alta en el monotributo y facturar, ¿qué nivel de clave fiscal te piden?", opciones: ["Nivel 1","Cualquiera","Nivel 3 o más","No hace falta clave"], correcta: 2, explicacion: "Se pide nivel 3 o más. \"Cualquiera\" tienta, pero con nivel bajo no te deja entrar a esos servicios." },
    { q: "Si te llega un mail de \"ARCA\" con un enlace para pagar una deuda, ¿qué hacés?", opciones: ["No hacés clic: entrás vos al sitio de ARCA y revisás tu domicilio fiscal electrónico","Pagás enseguida","Respondés el mail con tus datos","Reenviás el enlace a tu familia"], correcta: 0, explicacion: "Las comunicaciones oficiales llegan al domicilio fiscal electrónico. Pagar enseguida tienta por miedo, pero es una estafa típica." },
    { q: "Si un contador te va a ayudar, ¿cómo le das acceso?", opciones: ["Le pasás tu clave fiscal","Le das tu DNI y tu clave del banco","No se puede","Le delegás los servicios desde ARCA, sin compartir tu clave"], correcta: 3, explicacion: "Se puede delegar sin dar la clave. Pasarle la clave tienta por rápido, pero pierde el control de quién hace qué." },
    { q: "Si recién empezás con pocos clientes, ¿qué régimen suele corresponder?", opciones: ["Responsable inscripto siempre","El monotributo","Ninguno","El régimen de sociedades"], correcta: 1, explicacion: "El monotributo es el más simple para empezar. Responsable inscripto tienta por \"más completo\", pero es para quien supera los topes." },
    { q: "Si estás en situación de vulnerabilidad y empezás un emprendimiento, ¿qué podés consultar?", opciones: ["Solo el régimen general","Trabajar en negro","El monotributo social, con cuota reducida","Nada, no hay opciones"], correcta: 2, explicacion: "El monotributo social está para eso. Trabajar en negro tienta por no pagar, pero te deja sin derechos." },
    { q: "Si estás en el monotributo social, ¿qué tenés que cumplir para seguir?", opciones: ["Emitir al menos 6 facturas por semestre","Facturar una vez por año","No facturar nunca","Tener empleados"], correcta: 0, explicacion: "ARCA pide al menos 6 facturas por semestre. \"Una por año\" tienta por simple, pero te pueden dar de baja." },
    { q: "Si superás los límites del monotributo, ¿qué pasa?", opciones: ["Seguís igual","Podés elegir quedarte","Te dan un premio","Tenés que pasar a responsable inscripto"], correcta: 3, explicacion: "No se elige por gusto. Quedarte tienta por cómodo, pero ARCA te puede excluir con deuda." },
    { q: "Si tenés un empleo y además hacés trabajos por tu cuenta, ¿qué podés hacer?", opciones: ["No podés facturar nunca","Ser monotributista por la actividad independiente y consultar qué componentes de la cuota te tocan","Tenés que renunciar al empleo","Facturar con la CUIT de tu empleador"], correcta: 1, explicacion: "Las dos cosas son compatibles. Renunciar tienta como si fuera obligatorio, pero no hace falta." },
  ],
},
{
  id: "monotributo",
  icono: "📋",
  titulo: "Cómo funciona el monotributo",
  nivel: "Básico",
  objetivos: [
    "Explicar qué incluye la cuota mensual del monotributo",
    "Elegir tu categoría según tus ingresos y demás parámetros",
    "Revisar si cumplís los requisitos antes de inscribirte",
  ],
  lecciones: [
    { titulo: "Qué pagás con la cuota", html: `
      <p class="idea">El monotributo <strong>unifica en una sola cuota mensual</strong> el IVA y Ganancias con tus aportes de jubilación y obra social. Por eso es más simple que el régimen general.</p>
      <table>
        <tr><th>Parte de la cuota</th><th>Para qué es</th></tr>
        <tr><td>Impuesto integrado</td><td>Reemplaza al IVA y a Ganancias</td></tr>
        <tr><td>Aporte jubilatorio (SIPA)</td><td>Suma años para tu jubilación</td></tr>
        <tr><td>Obra social</td><td>Tu cobertura de salud; elegís cuál</td></tr>
      </table>
      <p><strong>El monto depende de tu categoría,</strong> y las categorías se actualizan en general dos veces por año. Los montos vigentes están en la tabla de ARCA.</p>
      <p><strong>Obra social:</strong> podés sumar familiares pagando un adicional por cada uno.</p>
      <p><strong>Ingresos Brutos</strong> es un impuesto provincial aparte. En varias provincias existe el monotributo unificado, que lo suma a la misma cuota; en otras se paga en el organismo provincial (lo vas a ver en el módulo "Mantenerte al día").</p>
      <p>Por ejemplo, alguien en una categoría baja paga una sola cuota que incluye su obra social: no tiene que hacer declaraciones juradas de IVA todos los meses.</p>` },
    { titulo: "Las categorías", html: `
      <p class="idea">Hay categorías de la <strong>A</strong> a la <strong>K</strong>. Te ubicás en una según los parámetros de tu actividad de los últimos 12 meses. Te toca la categoría en la que entran todos tus parámetros, no solo los ingresos.</p>
      <table>
        <tr><th>Parámetro</th><th>Qué es</th></tr>
        <tr><td>Ingresos brutos anuales</td><td>Todo lo que facturaste en los últimos 12 meses</td></tr>
        <tr><td>Superficie</td><td>Los metros del local donde trabajás, si tenés</td></tr>
        <tr><td>Energía eléctrica</td><td>Lo que consume ese local en un año</td></tr>
        <tr><td>Alquileres</td><td>Lo que pagás por alquilar el local</td></tr>
      </table>
      <pre><code>Ejemplo con números inventados:
Categoría C: hasta $ 20.000.000 por año y 45 m²
Categoría D: hasta $ 26.000.000 por año y 60 m²

Facturaste $ 18.000.000 y tu local tiene 50 m²
→ por ingresos entrarías en la C, por superficie no
→ te corresponde la D (la que cumple los dos)</code></pre>
      <p><strong>Si empezás,</strong> elegís la categoría según lo que estimás facturar en un año.</p>
      <p><strong>Los topes reales cambian:</strong> buscalos siempre en la tabla de categorías de ARCA.</p>
      <p>Por ejemplo, alguien que trabaja desde su casa sin local solo mira el parámetro de ingresos.</p>` },
    { titulo: "Quién puede entrar", video: {"id":"IeTUZriWKWE","t":"Cómo me adhiero al monotributo · ARCA (1:16)"}, html: `
      <p class="idea">No todos pueden ser monotributistas. ARCA fija límites, y si no los cumplís tenés que inscribirte en el régimen general.</p>
      <table>
        <tr><th>No podés estar en el monotributo si...</th></tr>
        <tr><td>Tus ingresos superan el tope de la categoría K</td></tr>
        <tr><td>El precio unitario de lo que vendés supera el máximo que fija ARCA</td></tr>
        <tr><td>Tenés más de 3 actividades o más de 3 locales al mismo tiempo</td></tr>
        <tr><td>Importaste bienes o servicios para revender en los últimos 12 meses</td></tr>
      </table>
      <pre><code>Para inscribirte (con clave fiscal nivel 3):
1. Habilitar el domicilio fiscal electrónico.
2. Entrar a "Registro Único Tributario" y cargar domicilio y actividad.
3. Elegir la categoría y la obra social.
4. Pagar la primera cuota (vence el último día de ese mes).</code></pre>
      <p><strong>La actividad se elige de una lista de códigos.</strong> Elegí la que mejor describa lo que hacés, porque aparece en tus facturas.</p>
      <p>Por ejemplo, alguien que trae productos del exterior para revenderlos no puede estar en el monotributo, aunque facture poco.</p>` },
  ],
  practica: [
    "Abrí la tabla de categorías de ARCA y anotá el tope de ingresos de las categorías A, B y C de hoy.",
    "Con tu facturación estimada de 12 meses (real o imaginaria), anotá qué categoría te corresponde y por qué.",
    "Anotá si cumplís cada uno de los 4 límites de la tabla \"No podés estar en el monotributo si…\".",
  ],
  recursos: [
    { t: "ARCA: qué es el monotributo y quiénes pueden entrar", url: "https://www.arca.gob.ar/monotributo/ayuda/que-es.asp" },
    { t: "ARCA: montos y categorías vigentes del monotributo", url: "https://www.arca.gob.ar/monotributo/categorias.asp" },
    { t: "ARCA: primeros pasos para darte de alta", url: "https://www.arca.gob.ar/monotributo/ayuda/inicio.asp" },
  ],
  quiz: [
    { q: "Si pagás la cuota del monotributo, ¿qué estás pagando?", opciones: ["Solo la obra social","Solo el IVA","Impuesto integrado, aporte jubilatorio y obra social","Una multa"], correcta: 2, explicacion: "La cuota unifica las tres partes. Solo la obra social tienta porque es lo que más se usa, pero incluye más." },
    { q: "Si sos monotributista, ¿qué reemplaza el impuesto integrado?", opciones: ["Al IVA y a Ganancias","A la obra social","A Ingresos Brutos siempre","A la jubilación"], correcta: 0, explicacion: "El integrado reemplaza IVA y Ganancias. Ingresos Brutos tienta, pero es provincial y va aparte o unificado según la provincia." },
    { q: "Si querés sumar a tu pareja a la obra social del monotributo, ¿qué pasa?", opciones: ["Es gratis","No se puede","Tiene que hacerse monotributista también","Pagás un adicional por cada familiar"], correcta: 3, explicacion: "Se puede, con un adicional. \"Es gratis\" tienta, pero cada integrante suma un monto." },
    { q: "Si querés saber cuánto pagás de cuota este mes, ¿dónde lo buscás?", opciones: ["En un video de hace dos años","En la tabla de categorías vigente de ARCA","En lo que pagó un amigo","En el resumen de la tarjeta"], correcta: 1, explicacion: "Los montos se actualizan. El video tienta por explicado, pero los números ya cambiaron." },
    { q: "Si facturaste $ 18.000.000 en 12 meses y tu local tiene 50 m², con los números del ejemplo, ¿qué categoría te toca?", opciones: ["La C, porque mirás solo los ingresos","La A","La D, porque por superficie no entrás en la C","La K"], correcta: 2, explicacion: "Te toca la que cumple todos los parámetros. La C tienta por los ingresos, pero los 50 m² la superan." },
    { q: "Si trabajás desde tu casa sin local, ¿qué parámetro mirás para tu categoría?", opciones: ["Los ingresos brutos de los últimos 12 meses","La superficie de tu casa","La luz que gastás en tu casa","El alquiler de tu casa"], correcta: 0, explicacion: "Sin local afectado, cuentan los ingresos. La superficie de tu casa tienta, pero no es un local de la actividad." },
    { q: "Si recién empezás a trabajar, ¿cómo elegís la categoría?", opciones: ["Siempre la K","Siempre la más alta por las dudas","La que tenga mejor obra social","Según lo que estimás facturar en un año"], correcta: 3, explicacion: "Al empezar, se estima. La más alta tienta \"por las dudas\", pero pagás de más todos los meses." },
    { q: "Si tus ingresos superan el tope de la categoría K, ¿qué pasa?", opciones: ["Te ponen en la L","No podés estar en el monotributo: pasás al régimen general","Seguís en la K","Pagás el doble"], correcta: 1, explicacion: "La K es la más alta. \"La L\" tienta como si siguiera la lista, pero no existe." },
    { q: "Si tenés 4 actividades distintas a la vez, ¿podés ser monotributista?", opciones: ["Sí, sin límite","Sí, si facturás poco","No: el límite es de 3 actividades simultáneas","Solo con un contador"], correcta: 2, explicacion: "Hay un máximo de 3. \"Si facturás poco\" tienta, pero el límite de actividades se cumple igual." },
    { q: "Si importás productos para revender, ¿qué pasa con el monotributo?", opciones: ["No podés estar si importaste para revender en los últimos 12 meses","Podés si son pocos","Es obligatorio estar","Solo cambia la categoría"], correcta: 0, explicacion: "Es uno de los límites. \"Si son pocos\" tienta, pero la regla no depende de la cantidad." },
    { q: "Si te das de alta en el monotributo hoy, ¿cuándo vence tu primera cuota?", opciones: ["En un año","El día 20 del mes que viene","Nunca, la primera es gratis","El último día de ese mismo mes"], correcta: 3, explicacion: "La primera vence a fin de ese mes. El día 20 tienta porque es el vencimiento habitual, pero ese es para las siguientes." },
    { q: "Si al inscribirte elegís el código de actividad, ¿por qué importa?", opciones: ["No importa","Porque describe lo que hacés y aparece en tus facturas","Porque cambia tu DNI","Porque define tu sueldo"], correcta: 1, explicacion: "La actividad queda registrada y en tus comprobantes. \"No importa\" tienta por ser un trámite, pero después cuesta corregirlo." },
  ],
},
{
  id: "facturar",
  icono: "🧮",
  titulo: "Facturar bien",
  nivel: "Intermedio",
  objetivos: [
    "Emitir una factura C electrónica con los datos correctos",
    "Anular una factura mal hecha con una nota de crédito",
    "Verificar que una factura que recibís sea válida",
  ],
  lecciones: [
    { titulo: "La factura C", html: `
      <p class="idea">Como monotributista, emitís <strong>factura C</strong>, siempre electrónica. Se hace con clave fiscal, desde la computadora o el celular, y no lleva IVA discriminado.</p>
      <table>
        <tr><th>Quién factura</th><th>Tipo de factura</th></tr>
        <tr><td>Monotributista, a cualquier cliente</td><td>C</td></tr>
        <tr><td>Responsable inscripto a otro responsable inscripto</td><td>A</td></tr>
        <tr><td>Responsable inscripto a un consumidor final o a un monotributista</td><td>B</td></tr>
      </table>
      <p><strong>Cuándo facturar:</strong> cada vez que cobrás, por el total cobrado. Si cobrás en partes, una factura por cada pago.</p>
      <p><strong>Punto de venta:</strong> antes de la primera factura, se habilita un punto de venta en ARCA. Es un número que identifica desde dónde facturás (por ejemplo, 0001).</p>
      <p>Por ejemplo, un profe particular que cobra $ 120.000 por mes a cada alumno emite una factura C por $ 120.000 a cada uno, cada mes.</p>` },
    { titulo: "Hacer la factura paso a paso", video: {"id":"hNM1vSjGbro","t":"Factura electrónica: cómo hacer un comprobante paso a paso · ARCA (2:00)"}, html: `
      <p class="idea">El servicio más usado para facturar es <strong>Comprobantes en línea</strong>, dentro de ARCA con clave fiscal. Tiene cinco pantallas, y conviene revisar cada una antes de confirmar.</p>
      <pre><code>1. Punto de venta y tipo: 0001 · Factura C
2. Fecha y concepto:     Productos, Servicios o ambos
   (si son servicios, el período facturado y el vencimiento de pago)
3. Datos del cliente:    consumidor final, o su CUIT si la pide
                         condición frente al IVA y forma de pago
4. Detalle:              descripción, cantidad y precio
5. Revisar y confirmar → se genera el CAE y el PDF</code></pre>
      <table>
        <tr><th>Dato</th><th>Qué es</th></tr>
        <tr><td>CAE</td><td>Código de Autorización Electrónico: el número que hace válida la factura</td></tr>
        <tr><td>Concepto</td><td>Si vendés productos, servicios o las dos cosas</td></tr>
        <tr><td>Condición frente al IVA</td><td>Del cliente: consumidor final, monotributista, responsable inscripto o exento</td></tr>
      </table>
      <p><strong>Descripción clara:</strong> "Clase particular de matemática, 4 clases, marzo" sirve mucho más que "servicios".</p>
      <p><strong>Guardá el PDF</strong> y mandáselo al cliente. Quedan también en ARCA, pero conviene tener tu copia ordenada por mes.</p>
      <p>Por ejemplo, si el cliente es una empresa, te va a pedir que pongas su CUIT y su condición frente al IVA; si es una persona que no la pide, va como consumidor final.</p>` },
    { titulo: "Errores y cómo corregirlos", html: `
      <p class="idea">Una factura electrónica emitida <strong>no se borra</strong>. Si te equivocaste, se anula con una <strong>nota de crédito</strong> por el mismo monto, y después se hace la factura correcta.</p>
      <table>
        <tr><th>Error común</th><th>Cómo evitarlo o corregirlo</th></tr>
        <tr><td>Monto equivocado</td><td>Nota de crédito C y factura nueva</td></tr>
        <tr><td>CUIT del cliente mal puesta</td><td>Revisarla con el cliente antes de confirmar</td></tr>
        <tr><td>Facturar menos de lo que cobraste</td><td>Facturar siempre el total cobrado</td></tr>
        <tr><td>Facturar meses después</td><td>Facturar en el momento de cobrar</td></tr>
        <tr><td>"Prestar" tu CUIT para que otro facture</td><td>Nunca: los ingresos quedan a tu nombre y suman a tu categoría</td></tr>
      </table>
      <p><strong>Verificar una factura que recibís:</strong> ARCA tiene un servicio de constatación de comprobantes, con el CAE y la CUIT de quien la emitió. Sirve para detectar facturas falsas.</p>
      <p><strong>Facturas falsas (apócrifas):</strong> comprar o usar facturas truchas es un delito.</p>
      <p>Por ejemplo, si facturaste $ 150.000 en vez de $ 105.000, hacés una nota de crédito por $ 150.000 y una factura nueva por $ 105.000.</p>` },
  ],
  practica: [
    "Escribí en papel los 5 pasos de una factura C para un trabajo real o imaginario: punto de venta, concepto, cliente, detalle y monto. Anotá la descripción que usarías.",
    "Para una factura mal hecha de $ 200.000 que debía ser de $ 180.000, anotá qué comprobantes harías y por qué monto cada uno.",
    "Pedí una factura en un comercio y verificala en la constatación de comprobantes de ARCA. Anotá si es válida.",
  ],
  recursos: [
    { t: "ARCA: factura electrónica", url: "https://www.arca.gob.ar/fe/" },
    { t: "ARCA: pagos, facturación y recategorización del monotributo", url: "https://www.arca.gob.ar/monotributo/ayuda/desarrollo-de-la-actividad.asp" },
  ],
  quiz: [
    { q: "Si sos monotributista, ¿qué tipo de factura emitís?", opciones: ["Factura A","Factura B","Factura C","Un recibo a mano"], correcta: 2, explicacion: "El monotributista emite C. La A tienta porque \"es la primera\", pero es entre responsables inscriptos." },
    { q: "Si un responsable inscripto le vende a un consumidor final, ¿qué factura hace?", opciones: ["Factura B","Factura C","Factura A","Ninguna"], correcta: 0, explicacion: "Responsable inscripto a consumidor final es B. La C tienta, pero es la de los monotributistas." },
    { q: "Si cobrás un trabajo en dos pagos, ¿cómo facturás?", opciones: ["Una sola al final del año","Solo el primer pago","Ninguna si es poco","Una factura por cada pago, por el monto cobrado"], correcta: 3, explicacion: "Se factura cada cobro. \"Al final del año\" tienta por simple, pero corresponde en el momento." },
    { q: "Si vas a hacer tu primera factura, ¿qué tenés que habilitar antes en ARCA?", opciones: ["Una cuenta bancaria nueva","Un punto de venta","Un local comercial","Una sociedad"], correcta: 1, explicacion: "El punto de venta identifica desde dónde facturás. El local tienta, pero no hace falta para facturar." },
    { q: "Si querés emitir una factura electrónica, ¿qué servicio de ARCA podés usar?", opciones: ["Un talonario comprado en la librería","Un mensaje de WhatsApp al cliente","Comprobantes en línea, con clave fiscal","Una planilla de cálculo"], correcta: 2, explicacion: "Comprobantes en línea genera la factura válida. La planilla tienta para llevar el registro, pero no es una factura." },
    { q: "Si facturás servicios, ¿qué datos extra te pide el sistema?", opciones: ["El período facturado y el vencimiento del pago","El número de tu DNI dos veces","La patente del auto","Nada más"], correcta: 0, explicacion: "Para servicios se piden esas fechas. \"Nada más\" tienta, pero sin esos datos no avanza." },
    { q: "Si la factura quedó generada, ¿qué la hace válida?", opciones: ["Tu firma","Un sello","El logo de tu emprendimiento","El CAE, el código que asigna ARCA"], correcta: 3, explicacion: "El CAE autoriza la factura electrónica. La firma tienta por costumbre, pero no hace falta." },
    { q: "Si una empresa te pide factura, ¿qué datos suyos ponés?", opciones: ["Nada, va como consumidor final","Su CUIT y su condición frente al IVA","Solo el nombre del dueño","Su número de teléfono"], correcta: 1, explicacion: "Las empresas necesitan su CUIT en la factura. Consumidor final tienta por rápido, pero no les sirve." },
    { q: "Si emitiste una factura con el monto equivocado, ¿qué hacés?", opciones: ["La borrás en ARCA","La rompés","Una nota de crédito por el mismo monto y después la factura correcta","Hacés otra encima sin anular la primera"], correcta: 2, explicacion: "Las facturas electrónicas no se borran. Hacer otra encima tienta, pero te quedan facturados los dos montos." },
    { q: "Si facturaste $ 150.000 en vez de $ 105.000, ¿de cuánto es la nota de crédito?", opciones: ["$ 150.000, y después una factura de $ 105.000","$ 45.000","$ 105.000","$ 255.000"], correcta: 0, explicacion: "Se anula la factura entera. $ 45.000 tienta porque es la diferencia, pero lo correcto es anular todo y rehacerla." },
    { q: "Si un conocido te pide \"prestar\" tu CUIT para facturar, ¿qué hacés?", opciones: ["Aceptás, es un favor","Aceptás si te paga","Le das tu clave fiscal","No: los ingresos quedan a tu nombre y suman a tu categoría"], correcta: 3, explicacion: "Lo que se factura con tu CUIT es tuyo ante ARCA. \"Es un favor\" tienta, pero te puede sacar del monotributo." },
    { q: "Si recibís una factura y dudás de que sea real, ¿qué hacés?", opciones: ["La aceptás igual","La verificás en la constatación de comprobantes de ARCA con el CAE","Le preguntás a quien te la dio","La tirás"], correcta: 1, explicacion: "ARCA permite verificarla. Preguntarle a quien la dio tienta, pero si es falsa, te va a decir que es válida." },
  ],
},
{
  id: "al-dia",
  icono: "📅",
  titulo: "Mantenerte al día",
  nivel: "Intermedio",
  objetivos: [
    "Pagar la cuota todos los meses antes del vencimiento",
    "Hacer la recategorización con los números de tus últimos 12 meses",
    "Reconocer cuándo corresponde la exclusión, la baja o Ingresos Brutos",
  ],
  lecciones: [
    { titulo: "Pagar la cuota", html: `
      <p class="idea">La cuota del monotributo se paga <strong>todos los meses, hasta el día 20</strong>. Si no la pagás, se generan intereses y deuda, y podés perder la cobertura de la obra social.</p>
      <table>
        <tr><th>Forma de pago</th><th>Cómo es</th></tr>
        <tr><td>Débito automático en cuenta o tarjeta</td><td>Se paga sola cada mes; la más segura para no olvidarte</td></tr>
        <tr><td>VEP (Volante Electrónico de Pago)</td><td>Lo generás en ARCA y lo pagás desde el home banking</td></tr>
        <tr><td>Billeteras y apps de pago</td><td>Algunas permiten pagar con el código de la cuota</td></tr>
      </table>
      <p><strong>Pagás aunque no factures:</strong> la cuota es fija por estar inscripto, aunque ese mes no hayas cobrado nada.</p>
      <p><strong>Si te atrasaste:</strong> pagá lo antes posible; ARCA suele tener planes de pago para deudas.</p>
      <p><strong>Revisá tu cuenta:</strong> en el portal del monotributo podés ver si tenés deuda o pagos a favor.</p>
      <p>Por ejemplo, con el débito automático no te olvidás en un mes de mucho trabajo, que es justo cuando más fácil es pasarlo por alto.</p>` },
    { titulo: "La recategorización", video: {"id":"SWdiXyKWZ6s","t":"Cómo me recategorizo en el monotributo · ARCA (0:59)"}, html: `
      <p class="idea">Dos veces por año, en <strong>febrero y agosto</strong>, tenés que revisar si tu categoría sigue siendo la correcta. Se llama <strong>recategorización</strong>.</p>
      <pre><code>Cómo calcular:
1. Sumá lo que facturaste en los últimos 12 meses.
2. Revisá superficie, energía y alquileres si tenés local.
3. Compará con la tabla vigente de ARCA.

Ejemplo (números inventados):
Facturaste $ 1.500.000 por mes durante 12 meses
1.500.000 × 12 = 18.000.000
Si tu categoría tiene tope $ 15.000.000 → tenés que subir
Si tiene tope $ 20.000.000 → seguís en la misma</code></pre>
      <table>
        <tr><th>Situación</th><th>Qué hacés</th></tr>
        <tr><td>Superaste el tope de tu categoría</td><td>Subís de categoría</td></tr>
        <tr><td>Facturaste bastante menos</td><td>Podés bajar de categoría</td></tr>
        <tr><td>Seguís igual</td><td>No hace falta hacer nada (pero conviene revisar)</td></tr>
      </table>
      <p><strong>Si no te recategorizás cuando corresponde,</strong> ARCA puede hacerlo de oficio y cobrarte una multa.</p>
      <p>Por ejemplo, llevar una planilla con lo facturado cada mes te deja hacer la cuenta en 2 minutos cuando llega febrero o agosto.</p>` },
    { titulo: "Ingresos Brutos, exclusión y baja", video: {"id":"uP0vc4fAKUU","t":"Cómo me doy de alta en el monotributo unificado · ARCA (0:54)"}, html: `
      <p class="idea">Además del monotributo, hay que tener en cuenta el impuesto provincial y qué pasa si dejás de cumplir los límites o dejás de trabajar.</p>
      <table>
        <tr><th>Tema</th><th>Qué es</th></tr>
        <tr><td>Ingresos Brutos</td><td>Impuesto de cada provincia sobre lo que facturás. En las provincias con monotributo unificado, va en la misma cuota; en otras, te inscribís en el organismo provincial</td></tr>
        <tr><td>Exclusión</td><td>ARCA te saca del monotributo porque superaste algún límite; pasás al régimen general</td></tr>
        <tr><td>Renuncia</td><td>Vos decidís pasar al régimen general</td></tr>
        <tr><td>Baja</td><td>Dejás de trabajar por tu cuenta y te das de baja</td></tr>
      </table>
      <pre><code>Para darte de baja:
Portal del monotributo → "Modificación y baja" → "Darse de baja"
El mes de la baja tiene que quedar pago.
Desde el mes siguiente no pagás más, y terminan los aportes y la obra social.</code></pre>
      <p><strong>Si dejás de trabajar, date de baja:</strong> si no, la cuota sigue generando deuda todos los meses.</p>
      <p>Por ejemplo, alguien que consiguió un empleo y dejó de hacer trabajos por su cuenta, pero no se dio de baja, puede encontrarse con una deuda de varios meses de cuota.</p>` },
  ],
  practica: [
    "Anotá en tu calendario el día 20 de los próximos 3 meses y febrero y agosto para la recategorización.",
    "Con tu facturación de 12 meses (real o inventada), hacé la cuenta de la recategorización y compará con la tabla vigente. Anotá si subís, bajás o seguís.",
    "Buscá si tu provincia tiene monotributo unificado o si Ingresos Brutos se paga aparte. Anotá dónde lo verificaste.",
  ],
  recursos: [
    { t: "ARCA: pagos, facturación y recategorización del monotributo", url: "https://www.arca.gob.ar/monotributo/ayuda/desarrollo-de-la-actividad.asp" },
    { t: "ARCA: montos y categorías vigentes del monotributo", url: "https://www.arca.gob.ar/monotributo/categorias.asp" },
    { t: "ARCA: portal del monotributo", url: "https://www.arca.gob.ar/monotributo/" },
  ],
  quiz: [
    { q: "Si sos monotributista, ¿hasta qué día del mes pagás la cuota?", opciones: ["Hasta el día 5","Hasta fin de año","Hasta el día 20","Cuando quieras"], correcta: 2, explicacion: "La cuota vence el 20 de cada mes. Fin de año tienta, pero se generan intereses mes a mes." },
    { q: "Si un mes no facturaste nada, ¿tenés que pagar la cuota?", opciones: ["Sí: la cuota es fija por estar inscripto","No, solo si facturás","Solo la mitad","Solo la obra social"], correcta: 0, explicacion: "Se paga aunque no factures. \"Solo si facturás\" tienta por lógica, pero no es así." },
    { q: "Si querés no olvidarte nunca de pagar, ¿qué forma conviene?", opciones: ["Acordarte de memoria","Pagar cada 3 meses juntos","Esperar a que te avisen","Débito automático"], correcta: 3, explicacion: "El débito se paga solo. Acordarte de memoria tienta por simple, pero en un mes cargado se pasa." },
    { q: "Si dejás de pagar varios meses, ¿qué puede pasar?", opciones: ["Nada","Se genera deuda con intereses y podés perder la cobertura de la obra social","Te dan de baja sin deuda","Se paga solo"], correcta: 1, explicacion: "La deuda crece y la obra social se corta. \"Te dan de baja sin deuda\" tienta, pero la deuda queda." },
    { q: "Si querés hacer la recategorización, ¿en qué meses toca?", opciones: ["Enero y julio","Solo en diciembre","Febrero y agosto","Cuando quieras, sin fecha"], correcta: 2, explicacion: "ARCA fija febrero y agosto. Enero y julio tientan porque cierran los semestres, pero el trámite se hace en los meses siguientes." },
    { q: "Si facturaste $ 1.500.000 por mes durante 12 meses, ¿cuánto sumás para la recategorización?", opciones: ["$ 18.000.000","$ 1.500.000","$ 9.000.000","$ 180.000.000"], correcta: 0, explicacion: "1.500.000 × 12 = 18.000.000. $ 9.000.000 tienta porque es un semestre, pero se suman 12 meses." },
    { q: "Si sumás $ 18.000.000 y tu categoría tiene tope $ 15.000.000, ¿qué hacés?", opciones: ["Seguís igual","Bajás de categoría","Facturás menos el resto del año","Subís de categoría"], correcta: 3, explicacion: "Superaste el tope, así que subís. Facturar menos tienta para no subir, pero no cambia lo que ya facturaste." },
    { q: "Si facturaste bastante menos que el tope de tu categoría, ¿qué podés hacer?", opciones: ["Nada, nunca se baja","Bajar de categoría en la recategorización","Pedir que te devuelvan cuotas","Darte de baja"], correcta: 1, explicacion: "Se puede bajar. \"Nunca se baja\" tienta, pero la recategorización sirve para los dos lados." },
    { q: "Si no te recategorizás cuando correspondía subir, ¿qué puede pasar?", opciones: ["Nada","Te bajan de categoría","ARCA puede recategorizarte de oficio y cobrarte una multa","Te dan un plazo de 5 años"], correcta: 2, explicacion: "ARCA cruza datos y puede actuar sola. \"Nada\" tienta si nadie te avisó, pero el riesgo es real." },
    { q: "Si vivís en una provincia con monotributo unificado, ¿cómo pagás Ingresos Brutos?", opciones: ["En la misma cuota del monotributo","No existe Ingresos Brutos","Siempre aparte en la provincia","Una vez por año en ARCA"], correcta: 0, explicacion: "El unificado los junta. \"Siempre aparte\" tienta, pero eso depende de la provincia." },
    { q: "Si superaste el tope de la categoría K, ¿qué pasa?", opciones: ["Te dan de baja sin más","Seguís igual","Te cobran solo una multa","Te excluyen del monotributo y pasás al régimen general"], correcta: 3, explicacion: "Eso es la exclusión. \"Baja\" tienta por parecido, pero la baja es cuando dejás de trabajar." },
    { q: "Si conseguiste un empleo y dejaste de trabajar por tu cuenta, ¿qué hacés con el monotributo?", opciones: ["Nada, se cancela solo","Te das de baja, dejando pago el mes de la baja","Dejás de pagar y listo","Lo pasás a otra persona"], correcta: 1, explicacion: "Si no te das de baja, sigue la deuda. Dejar de pagar tienta, pero la cuota se sigue generando." },
  ],
},
{
  id: "numeros",
  icono: "💰",
  titulo: "Tus números como independiente",
  nivel: "Intermedio",
  objetivos: [
    "Calcular un precio por hora que cubra cuota, gastos, vacaciones y aguinaldo",
    "Llevar una planilla de facturación que te avise antes de pasarte de categoría",
    "Ordenar los cobros del exterior y la plata para impuestos",
  ],
  lecciones: [
    { titulo: "Un precio que cubra todo", html: `
      <p class="idea">Como independiente, tu precio tiene que cubrir lo que antes pagaba un empleador: aportes, vacaciones y aguinaldo, además de tus gastos. Si cobrás "lo mismo que un sueldo dividido por horas", perdés plata.</p>
      <pre><code>Ejemplo (números inventados):
Querés ganar por mes:            1.000.000
Cuota del monotributo:              50.000
Gastos (internet, herramientas):   100.000
Total por mes:                   1.150.000
Por 12 meses:                   13.800.000
Más un "aguinaldo" propio:     + 1.000.000
Necesitás en el año:            14.800.000

Horas que podés cobrar:
11 meses (1 de vacaciones) × 4 semanas × 20 horas = 880
Precio por hora: 14.800.000 / 880 = 16.818 → unos $ 17.000</code></pre>
      <table>
        <tr><th>Por qué 20 horas y no 40</th></tr>
        <tr><td>Parte de tu tiempo no se cobra: buscar clientes, presupuestar, facturar, viajar, aprender</td></tr>
      </table>
      <p><strong>Actualizá tu precio:</strong> con inflación, un precio que no cambia en un año en realidad baja. Revisalo cada pocos meses.</p>
      <p>El curso "Finanzas personales con números" de este sitio explica el presupuesto y el curso "Invertir desde cero en Argentina", la inflación y la tasa real.</p>
      <p>Por ejemplo, alguien que cobra $ 9.000 la hora porque "es lo que gana un empleado" termina ganando bastante menos que ese empleado, después de la cuota, los gastos y los meses sin trabajo.</p>` },
    { titulo: "La planilla de facturación", html: `
      <p class="idea">Una planilla simple con lo que facturás cada mes te avisa antes de que te pases del tope de tu categoría, y te deja hacer la recategorización en minutos.</p>
      <pre><code>Mes      Facturado   Suma 12 meses   Tope categoría   % usado
Ene      1.400.000      16.200.000       20.000.000       81%
Feb      1.600.000      16.800.000       20.000.000       84%
Mar      1.900.000      17.500.000       20.000.000       87,5%

% usado = Suma 12 meses / Tope × 100</code></pre>
      <table>
        <tr><th>Si el % usado...</th><th>Qué hacés</th></tr>
        <tr><td>Está debajo del 80%</td><td>Seguí igual</td></tr>
        <tr><td>Pasa el 80%</td><td>Prepará la subida de categoría en la próxima recategorización</td></tr>
        <tr><td>Se acerca al tope de la K</td><td>Hablá con un contador sobre pasar a responsable inscripto</td></tr>
      </table>
      <p><strong>"Suma 12 meses"</strong> es la suma del mes actual y los 11 anteriores: cuando entra un mes nuevo, sale el más viejo.</p>
      <p><strong>Nunca dejes de facturar para no subir:</strong> es ilegal y te deja sin respaldo de lo que cobraste.</p>
      <p>Por ejemplo, ver en marzo que ya usás el 87,5% te da tiempo de organizarte para agosto, en vez de enterarte por una multa.</p>` },
    { titulo: "Plata para impuestos y cobros del exterior", html: `
      <p class="idea">Dos hábitos evitan sorpresas: separar la plata de los impuestos apenas cobrás, y facturar bien lo que cobrás de clientes del exterior.</p>
      <table>
        <tr><th>Hábito</th><th>Cómo</th></tr>
        <tr><td>Cuenta separada</td><td>Usá una cuenta (o una "caja" de tu billetera) solo para el trabajo</td></tr>
        <tr><td>Apartar al cobrar</td><td>Cada vez que cobrás, pasá un porcentaje a una reserva para la cuota y otros impuestos</td></tr>
        <tr><td>Fondo para meses flojos</td><td>Los ingresos de un independiente suben y bajan: guardá para los meses malos</td></tr>
      </table>
      <p><strong>Cobros del exterior:</strong> si le hacés un trabajo a un cliente de otro país, también se factura. Se emite una factura E (de exportación), y ARCA tiene una guía de exportación de servicios para monotributistas.</p>
      <p><strong>Los dólares cobrados también suman</strong> a tu facturación anual, convertidos a pesos, para la categoría.</p>
      <pre><code>Ejemplo de reserva:
Cobrás 600.000 → apartás 10% = 60.000
Al fin del mes, la reserva paga la cuota de 50.000
y quedan 10.000 para el fondo de meses flojos</code></pre>
      <p>Por ejemplo, una traductora que cobra de una empresa de afuera y no factura queda sin respaldo de esos ingresos, y puede tener problemas cuando ARCA cruce los datos del banco.</p>` },
  ],
  practica: [
    "Calculá tu precio por hora con tus números (o inventados): cuánto querés ganar, cuota, gastos, aguinaldo y horas cobrables. Anotá el resultado.",
    "Armá la planilla de facturación con 12 filas y las columnas suma 12 meses y % usado. Cargá al menos 3 meses.",
    "Elegí qué porcentaje vas a apartar de cada cobro y probalo con 3 cobros imaginarios. Anotá si alcanza para la cuota.",
  ],
  recursos: [
    { t: "ARCA: montos y categorías vigentes del monotributo", url: "https://www.arca.gob.ar/monotributo/categorias.asp" },
    { t: "ARCA: exportación de servicios para monotributistas", url: "https://www.arca.gob.ar/monotributo/exportacion-servicios/" },
    { t: "ARCA: portal del monotributo", url: "https://www.arca.gob.ar/monotributo/" },
  ],
  quiz: [
    { q: "Si fijás tu precio como un sueldo dividido por horas, ¿qué problema tenés?", opciones: ["Ninguno, es lo justo","Cobrás de más","No cubrís cuota, gastos, vacaciones ni aguinaldo","Pagás menos impuestos"], correcta: 2, explicacion: "Como independiente, esos costos son tuyos. \"Es lo justo\" tienta por comparar con un empleado, pero ganás menos que él." },
    { q: "Si necesitás $ 14.800.000 por año y podés cobrar 880 horas, ¿cuánto cobrás la hora?", opciones: ["Unos $ 17.000","$ 1.680","$ 168.000","$ 14.800"], correcta: 0, explicacion: "14.800.000 / 880 = 16.818. $ 14.800 tienta por parecerse al total, pero no es la cuenta." },
    { q: "Si calculás tus horas cobrables, ¿por qué usar 20 por semana y no 40?", opciones: ["Porque la ley lo prohíbe","Porque es más cómodo","No hay motivo","Porque parte del tiempo se va en buscar clientes, presupuestar, facturar y viajar"], correcta: 3, explicacion: "No todo tu tiempo de trabajo se cobra. \"Es más cómodo\" tienta, pero la razón es el trabajo que nadie te paga." },
    { q: "Si hace un año que no cambiás tu precio y hubo inflación, ¿qué pasó?", opciones: ["Quedó igual","En realidad tu precio bajó","Subió","No importa"], correcta: 1, explicacion: "La inflación reduce lo que podés comprar con lo que cobrás. \"Quedó igual\" tienta por el número, pero vale menos." },
    { q: "Si querés saber si te acercás al tope de tu categoría, ¿qué columna mirás en tu planilla?", opciones: ["Solo lo facturado del mes","El total desde que empezaste","El % usado: la suma de 12 meses dividida por el tope","La cuota que pagás"], correcta: 2, explicacion: "El tope se mide con 12 meses. El mes solo tienta por simple, pero no muestra el acumulado." },
    { q: "Si sumás $ 17.500.000 en 12 meses y el tope es $ 20.000.000, ¿qué % usaste?", opciones: ["87,5%","17,5%","25%","114%"], correcta: 0, explicacion: "17.500.000 / 20.000.000 × 100 = 87,5. 114% tienta si dividís al revés." },
    { q: "Si tu % usado pasa el 80%, ¿qué hacés?", opciones: ["Dejás de facturar","Nada","Te das de baja","Preparás la subida de categoría para la próxima recategorización"], correcta: 3, explicacion: "Ver el aviso con tiempo te deja organizarte. Dejar de facturar tienta para no subir, pero es ilegal." },
    { q: "Si entra un mes nuevo en la planilla, ¿qué pasa con la \"suma 12 meses\"?", opciones: ["Se suma todo desde el inicio","Se suma el mes nuevo y sale el más viejo","Se reinicia en cero","Queda igual"], correcta: 1, explicacion: "Son siempre los últimos 12 meses. Sumar todo tienta, pero el tope es anual móvil." },
    { q: "Si querés que la cuota no te tome por sorpresa, ¿qué hábito conviene?", opciones: ["Pagar con lo que sobre a fin de mes","Gastarlo todo y ver después","Apartar un porcentaje de cada cobro en una reserva","Pedir un préstamo cada mes"], correcta: 2, explicacion: "Apartar al cobrar asegura la plata. \"Lo que sobre\" tienta, pero en los meses flojos no sobra." },
    { q: "Si cobrás $ 600.000 y apartás 10%, ¿cuánto va a la reserva?", opciones: ["$ 60.000","$ 6.000","$ 600.000","$ 540.000"], correcta: 0, explicacion: "600.000 × 0,10 = 60.000. $ 540.000 tienta porque es lo que te queda, pero eso no va a la reserva." },
    { q: "Si le hacés un trabajo a un cliente de otro país, ¿cómo facturás?", opciones: ["No se factura","Con factura A","Con un recibo a mano","Con una factura E, de exportación"], correcta: 3, explicacion: "Los servicios al exterior se facturan con E. \"No se factura\" tienta porque el cliente está afuera, pero el trabajo lo hiciste acá." },
    { q: "Si cobrás en dólares de un cliente del exterior, ¿suma a tu facturación para la categoría?", opciones: ["No, los dólares no cuentan","Sí, convertido a pesos","Solo la mitad","Solo si los cambiás"], correcta: 1, explicacion: "Todo lo facturado suma. \"Los dólares no cuentan\" tienta, pero son ingresos de tu actividad." },
  ],
},
{
  id: "responsable",
  icono: "📈",
  titulo: "Cuando crecés: responsable inscripto",
  nivel: "Avanzado",
  objetivos: [
    "Calcular cuánto IVA pagás restando el IVA de tus compras al de tus ventas",
    "Enumerar las obligaciones de un responsable inscripto",
    "Decidir cuándo conviene pasar de régimen y buscar un contador",
  ],
  lecciones: [
    { titulo: "Qué es el IVA", html: `
      <p class="idea">El <strong>IVA</strong> (Impuesto al Valor Agregado) es un impuesto que se suma al precio de lo que se vende. Como responsable inscripto, lo cobrás en tus facturas y después pagás a ARCA la diferencia con el IVA de tus compras.</p>
      <pre><code>Tasa general: 21% (algunos bienes tienen 10,5%)

Precio sin IVA:    100.000
IVA 21%:          + 21.000
Precio con IVA:    121.000</code></pre>
      <pre><code>En un mes:
Vendiste 1.000.000 + IVA 210.000  → IVA débito  (lo que cobraste)
Compraste  400.000 + IVA  84.000  → IVA crédito (lo que pagaste)

IVA a pagar = 210.000 - 84.000 = 126.000</code></pre>
      <table>
        <tr><th>Término</th><th>Qué es</th></tr>
        <tr><td>Débito fiscal</td><td>El IVA que cobraste en tus ventas</td></tr>
        <tr><td>Crédito fiscal</td><td>El IVA que pagaste en compras para tu actividad, con factura A</td></tr>
      </table>
      <p><strong>El IVA no es tuyo:</strong> lo cobrás para pagarlo. Si lo gastás, el mes que viene no tenés con qué pagar.</p>
      <p>Por ejemplo, si compraste una computadora para trabajar con factura A, su IVA se resta del que tenés que pagar; si la compraste con factura B o sin factura, no.</p>` },
    { titulo: "Las obligaciones del régimen general", html: `
      <p class="idea">El responsable inscripto paga cada impuesto por separado y presenta declaraciones juradas. Es más complejo que el monotributo, y la mayoría trabaja con un contador.</p>
      <table>
        <tr><th>Obligación</th><th>Cada cuánto</th></tr>
        <tr><td>Declaración jurada y pago de IVA</td><td>Todos los meses</td></tr>
        <tr><td>Aportes de autónomos (jubilación)</td><td>Todos los meses</td></tr>
        <tr><td>Ganancias: declaración jurada</td><td>Una vez por año, con anticipos durante el año</td></tr>
        <tr><td>Obra social</td><td>Se contrata y paga aparte</td></tr>
        <tr><td>Ingresos Brutos</td><td>Según tu provincia</td></tr>
        <tr><td>Facturas A o B</td><td>Cada venta, según el cliente</td></tr>
      </table>
      <p><strong>Declaración jurada:</strong> un formulario donde informás a ARCA tus ventas, compras o ganancias. Es tu responsabilidad que sea verdadera.</p>
      <p><strong>Ganancias:</strong> se paga sobre lo que ganaste (ingresos menos gastos de la actividad), con deducciones que fija la ley. Por eso conviene guardar todas las facturas de gastos.</p>
      <p>Por ejemplo, un responsable inscripto tiene vencimientos todos los meses; un error en la declaración de IVA puede generar intereses y multas.</p>` },
    { titulo: "Cuándo pasar y cómo elegir contador", html: `
      <p class="idea">A veces pasar a responsable inscripto es obligatorio, y a veces conviene antes. Es una decisión para tomar con números y con un contador.</p>
      <table>
        <tr><th>Situación</th><th>Qué pasa</th></tr>
        <tr><td>Superaste los límites del monotributo</td><td>Es obligatorio pasar</td></tr>
        <tr><td>Tus clientes son empresas que quieren factura A</td><td>Puede convenirte, porque ellas se descuentan tu IVA</td></tr>
        <tr><td>Tenés muchas compras con IVA (equipos, insumos)</td><td>Puede convenirte, por el crédito fiscal</td></tr>
        <tr><td>Facturás poco y tenés pocos gastos</td><td>En general conviene seguir en el monotributo</td></tr>
      </table>
      <p><strong>Cómo elegir contador:</strong></p>
      <table>
        <tr><th>Preguntá</th><th>Por qué</th></tr>
        <tr><td>¿Tiene matrícula en el Consejo Profesional de su provincia?</td><td>Es la habilitación para ejercer</td></tr>
        <tr><td>¿Cuánto cobra por mes y qué incluye?</td><td>Para comparar y sumarlo a tu precio</td></tr>
        <tr><td>¿Trabaja con gente de tu rubro?</td><td>Conoce tus gastos y tus dudas</td></tr>
        <tr><td>¿Te explica lo que presenta?</td><td>Las declaraciones son tu responsabilidad</td></tr>
      </table>
      <p>Por ejemplo, un fotógrafo que compra equipos caros y trabaja para empresas puede pagar menos en total como responsable inscripto, aunque tenga más trámites.</p>` },
  ],
  practica: [
    "Calculá el IVA a pagar de un mes con ventas por 800.000 más IVA y compras con factura A por 300.000 más IVA. Anotá débito, crédito y resultado.",
    "Armá una tabla con las 6 obligaciones del régimen general y anotá cuáles tendrías que pagar en tu caso.",
    "Escribí 4 preguntas para una entrevista con un contador y anotá dónde podrías verificar su matrícula.",
  ],
  recursos: [
    { t: "ARCA: IVA", url: "https://www.arca.gob.ar/iva/" },
    { t: "ARCA: Ganancias y Bienes Personales", url: "https://www.arca.gob.ar/gananciasYBienes/" },
    { t: "ARCA: trabajadores autónomos", url: "https://www.arca.gob.ar/autonomos/" },
  ],
  quiz: [
    { q: "Si sos responsable inscripto y vendés algo a $ 100.000 sin IVA con tasa general, ¿cuánto facturás en total?", opciones: ["$ 100.000","$ 79.000","$ 121.000","$ 110.500"], correcta: 2, explicacion: "100.000 + 21% = 121.000. $ 110.500 tienta porque es con 10,5%, pero esa es una tasa especial." },
    { q: "Si vendiste por 1.000.000 + IVA y compraste por 400.000 + IVA (21%), ¿cuánto IVA pagás?", opciones: ["$ 126.000","$ 210.000","$ 84.000","$ 600.000"], correcta: 0, explicacion: "210.000 - 84.000 = 126.000. $ 210.000 tienta porque es lo que cobraste, pero se resta el crédito." },
    { q: "Si cobraste IVA en tus ventas, ¿cómo se llama ese IVA?", opciones: ["Crédito fiscal","Impuesto integrado","Aporte","Débito fiscal"], correcta: 3, explicacion: "Lo que cobrás es débito. Crédito tienta porque \"lo cobraste\", pero el crédito es el de las compras." },
    { q: "Si compraste una computadora para trabajar con factura B, ¿podés restar su IVA?", opciones: ["Sí, siempre","No: para el crédito fiscal se necesita factura A","Sí, si es cara","Sí, el doble"], correcta: 1, explicacion: "El crédito fiscal pide factura A. \"Siempre\" tienta porque pagaste IVA, pero sin factura A no se computa." },
    { q: "Si cobraste el IVA y lo gastaste, ¿qué pasa el mes que viene?", opciones: ["Nada","ARCA te lo perdona","No tenés con qué pagarlo: el IVA no es tuyo, lo cobrás para pagarlo","Se resta solo"], correcta: 2, explicacion: "El IVA cobrado es para ARCA. \"Nada\" tienta porque la plata pasó por tu cuenta, pero hay que pagarlo." },
    { q: "Si sos responsable inscripto, ¿cada cuánto presentás la declaración de IVA?", opciones: ["Todos los meses","Una vez por año","Nunca","Cada 5 años"], correcta: 0, explicacion: "El IVA es mensual. \"Una vez por año\" tienta porque Ganancias es anual, pero IVA no." },
    { q: "Si sos responsable inscripto, ¿cómo hacés tus aportes de jubilación?", opciones: ["Dentro del IVA","No hace falta","Dentro de Ganancias","Como autónomo, todos los meses"], correcta: 3, explicacion: "Los aportes de autónomos van aparte. \"Dentro del IVA\" tienta por el monotributo, donde todo iba junto." },
    { q: "Si querés pagar Ganancias sobre lo que realmente ganaste, ¿qué conviene guardar?", opciones: ["Solo las facturas de ventas","Todas las facturas de gastos de la actividad","Nada","Los tickets del supermercado de tu casa"], correcta: 1, explicacion: "Ganancias es ingresos menos gastos de la actividad. Los tickets de tu casa tientan, pero no son gastos del trabajo." },
    { q: "Si firmás una declaración jurada, ¿de quién es la responsabilidad de que sea verdadera?", opciones: ["Solo del contador","De ARCA","Tuya, aunque la prepare un contador","De nadie"], correcta: 2, explicacion: "La declaración es del contribuyente. \"Solo del contador\" tienta, pero vos respondés ante ARCA." },
    { q: "Si tus clientes son empresas que te piden factura A, ¿qué podés evaluar?", opciones: ["Si te conviene pasar a responsable inscripto, porque ellas se descuentan tu IVA","Hacerles factura C igual","Inventar una factura A","Pedirles que no te paguen"], correcta: 0, explicacion: "Con factura A, las empresas se descuentan el IVA. Inventarla tienta para conformarlas, pero es un delito." },
    { q: "Si facturás poco y casi no tenés gastos con IVA, ¿qué conviene en general?", opciones: ["Pasar a responsable inscripto ya","Darte de baja","Trabajar en negro","Seguir en el monotributo"], correcta: 3, explicacion: "Con poca facturación, el monotributo suele ser más simple y barato. Pasar ya tienta por \"crecer\", pero suma costos." },
    { q: "Si vas a elegir un contador, ¿qué verificás primero?", opciones: ["Que tenga muchos seguidores","Que tenga matrícula en el Consejo Profesional de su provincia","Que sea el más barato","Que sea amigo de alguien"], correcta: 1, explicacion: "La matrícula lo habilita. El más barato tienta, pero sin matrícula no puede ejercer." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: tu kit de independiente",
  nivel: "Avanzado",
  objetivos: [
    "Armar tu kit con calendario, planilla, precio y lista de trámites",
    "Evaluarlo con una rúbrica y corregir lo que falte",
    "Definir qué vas a revisar cada mes y cada semestre",
  ],
  lecciones: [
    { titulo: "El encargo", html: `
      <p class="idea">El proyecto final es tu <strong>kit de independiente</strong>: todo lo que necesitás para trabajar por tu cuenta en regla, en una carpeta o una planilla con varias hojas.</p>
      <table>
        <tr><th>Parte del kit</th><th>Módulo</th></tr>
        <tr><td>Lista de trámites hechos y pendientes (CUIT, clave nivel 3, domicilio fiscal electrónico, alta)</td><td>Empezar a trabajar por tu cuenta</td></tr>
        <tr><td>Tu categoría con el cálculo que la justifica</td><td>Cómo funciona el monotributo</td></tr>
        <tr><td>Una factura modelo (en papel o de práctica) con descripción clara</td><td>Facturar bien</td></tr>
        <tr><td>Calendario: día 20, febrero y agosto, Ingresos Brutos</td><td>Mantenerte al día</td></tr>
        <tr><td>Precio por hora y planilla de facturación con % usado</td><td>Tus números como independiente</td></tr>
        <tr><td>En qué momento consultarías a un contador</td><td>Cuando crecés</td></tr>
      </table>
      <p><strong>Podés usar números inventados</strong> si todavía no trabajás por tu cuenta.</p>
      <p>Por ejemplo, el kit de un profe particular tendría 6 alumnos a $ 120.000 por mes, su cálculo de categoría con $ 8.640.000 por año, y el débito automático de la cuota anotado en el calendario.</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si algo está listo. Usala para evaluar tu kit.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Trámites</td><td>Todos listos o con fecha</td><td>Algunos sin fecha</td><td>No sabe cuáles faltan</td></tr>
        <tr><td>Categoría</td><td>Con cálculo de 12 meses y tabla vigente</td><td>Sin cálculo o con tabla vieja</td><td>Elegida al azar</td></tr>
        <tr><td>Factura</td><td>Tipo, cliente y descripción correctos</td><td>Un dato flojo</td><td>Tipo equivocado</td></tr>
        <tr><td>Calendario</td><td>Cuota, recategorización e Ingresos Brutos</td><td>Falta uno</td><td>No hay</td></tr>
        <tr><td>Números</td><td>Precio que cubre todo y planilla con % usado</td><td>Uno de los dos</td><td>Ninguno</td></tr>
        <tr><td>Legalidad</td><td>Factura todo lo que cobra y no presta su CUIT</td><td>—</td><td>Deja cobros sin facturar o presta su CUIT</td></tr>
      </table>
      <pre><code>Máximo: 12
11 o 12 → listo
7 a 10  → mejorá lo que sacó 0 o 1
0 a 6   → repasá los módulos y volvé a armarlo
Regla: si "Legalidad" tiene 0, el kit no está listo,
       aunque el total sea alto.</code></pre>
      <p>Por ejemplo, un kit perfecto que planea "facturar solo la mitad para no subir de categoría" saca 0 en legalidad y no está listo.</p>` },
    { titulo: "Tu rutina mensual y semestral", video: {"id":"8p1pFvuUxaw","t":"Guía completa de Ingresos Brutos: cuándo hay que pagar y cómo funciona · Agustín Hansen (16:59)"}, html: `
      <p class="idea">Trabajar en regla se vuelve fácil cuando tenés una rutina corta. Estos son los controles que conviene hacer siempre.</p>
      <table>
        <tr><th>Cuándo</th><th>Qué hacer</th><th>Tiempo</th></tr>
        <tr><td>Cada vez que cobrás</td><td>Facturar y apartar la reserva</td><td>5 minutos</td></tr>
        <tr><td>Cada mes, antes del 20</td><td>Revisar que se pagó la cuota y cargar la planilla</td><td>10 minutos</td></tr>
        <tr><td>Cada mes</td><td>Mirar el domicilio fiscal electrónico</td><td>2 minutos</td></tr>
        <tr><td>Febrero y agosto</td><td>Recategorización con la tabla vigente</td><td>15 minutos</td></tr>
        <tr><td>Cada 3 a 6 meses</td><td>Actualizar tu precio por la inflación</td><td>15 minutos</td></tr>
      </table>
      <p><strong>Guardá todo ordenado:</strong> una carpeta por año, con subcarpetas de facturas emitidas, comprobantes de pago y gastos.</p>
      <p><strong>Las reglas cambian:</strong> montos, categorías y a veces trámites. Ante un cambio grande, consultá en el sitio de ARCA o a un contador.</p>
      <p>Por ejemplo, 30 minutos por mes de rutina evitan las horas de trámites y las multas de tener que ponerte al día de golpe.</p>` },
  ],
  practica: [
    "Armá tu kit de independiente con las 6 partes del encargo. Anotá la fecha en que lo terminaste.",
    "Evaluá tu kit con la rúbrica y anotá el puntaje de cada criterio y el total.",
    "Hacé la rutina mensual completa una vez y anotá cuántos minutos te llevó.",
  ],
  recursos: [
    { t: "ARCA: portal del monotributo", url: "https://www.arca.gob.ar/monotributo/" },
    { t: "ARCA: montos y categorías vigentes del monotributo", url: "https://www.arca.gob.ar/monotributo/categorias.asp" },
    { t: "ARCA: Ganancias y Bienes Personales", url: "https://www.arca.gob.ar/gananciasYBienes/" },
  ],
  quiz: [
    { q: "Si armás tu kit de independiente, ¿qué tiene que incluir?", opciones: ["Solo la constancia de inscripción","Solo el precio por hora","Trámites, categoría, factura modelo, calendario, números y cuándo consultar a un contador","Solo el calendario"], correcta: 2, explicacion: "El kit junta todo el curso. La constancia tienta por oficial, pero no alcanza para trabajar en regla." },
    { q: "Si un profe tiene 6 alumnos a $ 120.000 por mes, ¿cuánto factura en un año?", opciones: ["$ 8.640.000","$ 720.000","$ 1.440.000","$ 86.400.000"], correcta: 0, explicacion: "6 × 120.000 = 720.000 por mes × 12 = 8.640.000. $ 720.000 tienta porque es un mes, pero la categoría mira el año." },
    { q: "Si elegiste tu categoría sin calcular nada, ¿cuánto sacás en \"Categoría\"?", opciones: ["2 puntos","1 punto","No se evalúa","0 puntos"], correcta: 3, explicacion: "Elegida al azar es 0. 1 punto tienta si \"más o menos\" acertaste, pero sin cálculo no lo sabés." },
    { q: "Si tu calendario tiene la cuota y la recategorización, pero no Ingresos Brutos, ¿cuánto saca?", opciones: ["2 puntos","1 punto: falta uno","0 puntos","3 puntos"], correcta: 1, explicacion: "Falta uno de los tres. Sacar 2 tienta porque están los del monotributo, pero Ingresos Brutos también vence." },
    { q: "Si tu kit suma 11 puntos, pero planeás facturar solo la mitad para no subir de categoría, ¿está listo?", opciones: ["Sí, 11 es listo","Sí, si nadie se entera","No: \"Legalidad\" tiene 0 y eso no se compensa con el total","Depende de la categoría"], correcta: 2, explicacion: "La regla de la rúbrica lo dice. \"11 es listo\" tienta, pero no facturar lo cobrado es ilegal." },
    { q: "Si tu kit saca 8 puntos, ¿qué hacés?", opciones: ["Mejorás los criterios que sacaron 0 o 1","Lo das por terminado","Empezás todo de cero","Cambiás la rúbrica"], correcta: 0, explicacion: "De 7 a 10 se mejora lo flojo. Darlo por terminado tienta, pero le falta poco para estar listo." },
    { q: "Si acabás de cobrar un trabajo, ¿qué hacés según tu rutina?", opciones: ["Esperás a fin de año para facturar","Gastás todo y después ves","Solo lo anotás en un cuaderno","Facturás y apartás la reserva"], correcta: 3, explicacion: "Facturar y apartar al cobrar evita olvidos. Anotarlo en un cuaderno tienta, pero no es una factura." },
    { q: "Si querés enterarte de las comunicaciones oficiales de ARCA, ¿qué revisás cada mes?", opciones: ["Los mensajes de WhatsApp de números desconocidos","El domicilio fiscal electrónico","Las redes de ARCA","Nada"], correcta: 1, explicacion: "ARCA notifica ahí. WhatsApp tienta por rápido, pero es donde llegan las estafas." },
    { q: "Si llega febrero, ¿qué tarea te toca?", opciones: ["Darte de baja","Pagar el aguinaldo a ARCA","La recategorización con la tabla vigente","Nada especial"], correcta: 2, explicacion: "Febrero y agosto son los meses de recategorización. \"Nada especial\" tienta, pero es uno de los dos meses clave." },
    { q: "Si querés tener tus papeles ordenados, ¿cómo los guardás?", opciones: ["Una carpeta por año con facturas emitidas, pagos y gastos","Todo mezclado en el celular","Solo en la memoria","Los tirás después de pagar"], correcta: 0, explicacion: "El orden te salva cuando ARCA o un contador te piden algo. Tirarlos tienta para no acumular, pero los vas a necesitar." },
    { q: "Si hace 6 meses que no cambiás tu precio y hubo inflación, ¿qué hacés?", opciones: ["Lo dejás igual para no perder clientes","Lo bajás","Dejás de facturar","Lo actualizás, como dice la rutina"], correcta: 3, explicacion: "La rutina pide revisarlo cada 3 a 6 meses. Dejarlo igual tienta, pero en realidad estás cobrando menos." },
    { q: "Si ARCA cambia montos o trámites, ¿qué hacés?", opciones: ["Seguís con lo que aprendiste en este curso","Verificás en el sitio de ARCA o consultás a un contador","Le preguntás a un grupo de redes","No hacés nada"], correcta: 1, explicacion: "Las reglas cambian y la fuente oficial manda. Seguir con el curso tienta, pero los montos del curso son de ejemplo." },
  ],
},
];
