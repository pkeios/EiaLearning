// Temario del curso "Pastelería básica". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js pasteleria y node tools/metodologia.js pasteleria
window.TEMARIO = [
{
  id: "base",
  icono: "🧁",
  titulo: "Seguridad, higiene y herramientas",
  nivel: "Básico",
  objetivos: [
    "Trabajar con huevos, cremas y almíbar sin riesgo para quien come ni para vos",
    "Elegir las herramientas básicas y medir siempre con balanza",
    "Saber qué carnet y qué habilitación hacen falta para vender pastelería",
  ],
  lecciones: [
    { titulo: "Los cuidados propios de la pastelería", html: `
      <p class="idea">La pastelería tiene riesgos que el pan no tiene: <strong>huevos crudos</strong>, <strong>cremas que se echan a perder rápido</strong> y <strong>almíbar a más de 100 °C</strong>. Con unas reglas claras, se evitan.</p>
      <p>En todo el curso acompañamos a <strong>Marta</strong>, jubilada en Bahía Blanca. Siempre hizo las tortas de los cumpleaños de la familia y ahora las vecinas le encargan tortas, budines y alfajores. Quiere que le salgan parejas y venderlas sin problemas.</p>
      <table>
        <tr><th>Riesgo</th><th>Qué puede pasar</th><th>Cómo se evita</th></tr>
        <tr><td>Huevo crudo</td><td>Salmonella: una bacteria que causa una intoxicación grave</td><td>Usá recetas con huevo cocido (merengue italiano o suizo, crema pastelera bien hervida) o huevo pasteurizado. No vendas preparaciones con huevo crudo</td></tr>
        <tr><td>Cremas y rellenos</td><td>Crecen bacterias si están a temperatura ambiente</td><td>Heladera siempre; tortas rellenas, en frío hasta la entrega</td></tr>
        <tr><td>Almíbar y caramelo</td><td>Quemaduras graves: el azúcar caliente se pega a la piel</td><td>Chicos lejos, mangas largas, ollita con mango, nunca tocar para "probar"</td></tr>
        <tr><td>Batidora</td><td>Golpes y cortes</td><td>Apagada y desenchufada para sacar las paletas o raspar</td></tr>
      </table>
      <p><strong>Lavá los huevos solo justo antes de usarlos</strong> (si los lavás antes de guardar, la cáscara pierde su protección), y lavate las manos después de tocarlos. Descartá los que tienen la cáscara rajada.</p>
      <p><strong>Si te quemás con almíbar,</strong> agua fresca de la canilla 10 a 20 minutos y, si es grande, guardia. Nada de manteca ni hielo.</p>
      <p><strong>La higiene general es la del curso de panadería:</strong> las cinco claves de la OMS, pelo atado, sin anillos, manos lavadas.</p>
      <p>Por ejemplo, Marta hacía mousse con claras crudas como su mamá. Cuando empezó a vender, la cambió por una versión con merengue italiano, que cocina las claras con almíbar caliente.</p>` },
    { titulo: "Las herramientas básicas", html: `
      <p class="idea">No hace falta una cocina profesional. Con <strong>una balanza, una batidora, dos moldes y unas pocas herramientas</strong> se hace casi todo lo de este curso.</p>
      <table>
        <tr><th>Herramienta</th><th>Para qué</th><th>Imprescindible</th></tr>
        <tr><td>Balanza digital</td><td>Pesar todo, de a 1 gramo</td><td>Sí</td></tr>
        <tr><td>Batidora (de mano o de pie)</td><td>Batir huevos, claras, crema</td><td>Sí</td></tr>
        <tr><td>Molde redondo de 24 cm y uno de budín</td><td>Bizcochuelos y budines</td><td>Sí</td></tr>
        <tr><td>Espátula de goma (miserable)</td><td>Raspar el bol y mezclar con movimientos envolventes</td><td>Sí</td></tr>
        <tr><td>Bowl de metal o vidrio</td><td>Batir claras (el plástico retiene grasa)</td><td>Sí</td></tr>
        <tr><td>Termómetro de cocina</td><td>Almíbar y crema: saber la temperatura exacta</td><td>Recomendado</td></tr>
        <tr><td>Manga y picos</td><td>Decorar, rellenar</td><td>Después</td></tr>
        <tr><td>Rejilla</td><td>Enfriar tortas y galletitas</td><td>Recomendado</td></tr>
      </table>
      <p><strong>En pastelería, pesar es obligatorio:</strong> una diferencia de 20 gramos de harina cambia un bizcochuelo. Como viste en panadería, una taza puede pesar muy distinto según cómo la llenes.</p>
      <p><strong>Preparar todo antes:</strong> pesá todos los ingredientes y prepará el molde antes de empezar. En pastelería muchas cosas no pueden esperar (una mezcla batida se baja si la dejás).</p>
      <p><strong>Enmantecar y enharinar</strong> el molde es untarlo con manteca y espolvorear harina para que la torta no se pegue. Otra opción: un disco de papel manteca en la base.</p>
      <p>Por ejemplo, Marta medía con tazas y cada torta le salía distinta. Con una balanza digital y las recetas en gramos, dos tortas iguales le salen iguales.</p>` },
    { titulo: "Para vender: carnet, habilitación y alergias", html: `
      <p class="idea">Para vender pastelería valen las mismas reglas que para el pan: <strong>carnet de manipulador de alimentos</strong>, <strong>consultar a bromatología</strong> de tu municipio y <strong>avisar los alérgenos</strong>.</p>
      <table>
        <tr><th>Requisito</th><th>Resumen</th></tr>
        <tr><td>Carnet de manipulador de alimentos</td><td>Obligatorio según el Código Alimentario Argentino; se obtiene con curso y examen y dura 3 años</td></tr>
        <tr><td>Habilitación o registro</td><td>Depende del municipio: consultá en bromatología</td></tr>
        <tr><td>Rótulo</td><td>Nombre, ingredientes, alérgenos, fecha de elaboración, cómo conservar</td></tr>
      </table>
      <table>
        <tr><th>Alérgenos frecuentes en pastelería</th><th>Dónde aparecen</th></tr>
        <tr><td>Huevo</td><td>Casi todo: bizcochuelo, cremas, merengues</td></tr>
        <tr><td>Leche</td><td>Manteca, crema, dulce de leche, chocolate con leche</td></tr>
        <tr><td>Gluten (trigo)</td><td>Harina, galletitas, algunas coberturas</td></tr>
        <tr><td>Frutos secos y maní</td><td>Nueces, almendras, praliné, algunos chocolates</td></tr>
      </table>
      <p><strong>Sin TACC:</strong> en una cocina donde hay harina de trigo, el polvo queda en el aire y en las superficies. No vendas nada como "sin TACC" sin un lugar y un registro aprobados.</p>
      <p><strong>Esta lección te orienta; los requisitos cambian</strong> según el municipio. Confirmalos antes de empezar a vender.</p>
      <p>Por ejemplo, una clienta le pidió a Marta una torta para una nena alérgica a la nuez. Marta le explicó que en su cocina usa nueces y no puede garantizar que no haya rastros, y le recomendó una pastelería especializada.</p>` },
  ],
  practica: [
    "Revisá 3 recetas que hagas y anotá cuáles usan huevo crudo y cómo las reemplazarías.",
    "Hacé la lista de tus herramientas y anotá cuáles de las imprescindibles te faltan.",
    "Escribí el rótulo de un producto tuyo con nombre, ingredientes, alérgenos, fecha y cómo conservarlo, y anotá cuántos alérgenos tiene.",
  ],
  recursos: [
    { t: "ANMAT: Manual de manipulación higiénica de alimentos (PDF, 2024)", url: "https://www.argentina.gob.ar/sites/default/files/anmat_manual_manipuladores_de_alimentos_version_2024.pdf" },
    { t: "OMS: Manual sobre las cinco claves para la inocuidad de los alimentos", url: "https://www.who.int/es/publications/i/item/9789241594639" },
    { t: "Ministerio de Salud: celiaquía", url: "https://www.argentina.gob.ar/salud/celiaquia" },
  ],
  quiz: [
    { q: "Vas a vender una mousse. ¿Qué cuidado tenés con las claras?", opciones: ["Usar claras crudas bien frescas","Agregar más azúcar","Usar una receta con claras cocidas, como el merengue italiano","Servirla rápido"], correcta: 2, explicacion: "El huevo crudo puede tener salmonella. \"Bien frescas\" tienta, pero no elimina el riesgo." },
    { q: "Si hiciste una torta rellena con crema, ¿dónde la guardás hasta entregarla?", opciones: ["En la heladera","En la mesada, tapada","En el horno apagado","Al lado de la ventana"], correcta: 0, explicacion: "Las cremas se echan a perder a temperatura ambiente. Tapada en la mesada tienta, pero no la protege." },
    { q: "Estás haciendo almíbar y un chico se acerca. ¿Qué hacés?", opciones: ["Lo dejás mirar de cerca","Le das a probar","Nada","Lo alejás: el azúcar caliente causa quemaduras graves"], correcta: 3, explicacion: "El almíbar pasa los 100 °C y se pega a la piel. Dejarlo mirar tienta, pero es peligroso." },
    { q: "Te salpicó almíbar en la mano. ¿Qué hacés?", opciones: ["Manteca","Agua fresca de la canilla 10 a 20 minutos","Hielo directo","Pasta dental"], correcta: 1, explicacion: "El agua fresca enfría sin dañar. La manteca tienta por remedio casero, pero empeora." },
    { q: "¿Cuándo lavás los huevos?", opciones: ["Apenas los comprás","Nunca","Justo antes de usarlos","Después de usarlos"], correcta: 2, explicacion: "Lavados antes de guardar, la cáscara pierde protección. Apenas los comprás tienta por prolijo." },
    { q: "Querés que dos tortas te salgan iguales. ¿Qué es lo más importante?", opciones: ["Pesar todo con balanza","Usar la misma taza","Batir más fuerte","Hornear más tiempo"], correcta: 0, explicacion: "Una diferencia de 20 g cambia el resultado. La misma taza tienta, pero se llena distinto." },
    { q: "Si vas a batir claras, ¿en qué bowl?", opciones: ["De plástico","El que usaste para la manteca sin lavar","Cualquiera","De metal o vidrio, bien limpio"], correcta: 3, explicacion: "El plástico y los restos de grasa impiden que suban. \"Cualquiera\" tienta por cómodo." },
    { q: "Si empezás a batir el bizcochuelo y todavía no preparaste el molde, ¿qué problema hay?", opciones: ["Ninguno","La mezcla batida se baja mientras lo preparás","Que el horno se enfría","Que se derrite el azúcar"], correcta: 1, explicacion: "En pastelería muchas mezclas no esperan. \"Ninguno\" tienta, pero perdés el aire." },
    { q: "Querés vender alfajores en tu barrio. ¿Qué documento personal necesitás?", opciones: ["Ninguno, es casero","Un título de pastelera","El carnet de manipulador de alimentos","El registro de conducir"], correcta: 2, explicacion: "Lo pide el Código Alimentario. \"Es casero\" tienta, pero igual se pide." },
    { q: "Tu torta tiene manteca y dulce de leche. ¿Qué alérgeno avisás?", opciones: ["Leche","Ninguno","Solo azúcar","Pescado"], correcta: 0, explicacion: "Manteca y dulce de leche tienen leche. \"Ninguno\" tienta porque no se ve." },
    { q: "Te piden una torta sin TACC y en tu cocina usás harina de trigo. ¿Qué hacés?", opciones: ["La hacés con otra harina y la vendés como sin TACC","Le decís que un poco no hace mal","La hacés más chica","No la vendés como sin TACC: puede estar contaminada"], correcta: 3, explicacion: "La harina queda en el aire. Otra harina tienta, pero sin lugar aprobado igual puede contaminarse." },
    { q: "Una clienta pide una torta para una nena alérgica a la nuez y vos usás nueces. ¿Qué hacés?", opciones: ["Le hacés la torta sin nuez y listo","Le explicás que no podés garantizar que no haya rastros","Le decís que no pasa nada","Le sacás las nueces de arriba"], correcta: 1, explicacion: "Pueden quedar rastros en tu cocina. \"Sin nuez y listo\" tienta, pero la alergia puede ser grave." },
  ],
},
{
  id: "ingredientes",
  icono: "🥚",
  titulo: "Los ingredientes y qué hace cada uno",
  nivel: "Básico",
  objetivos: [
    "Elegir harina, azúcar y materia grasa según la receta",
    "Usar los huevos a la temperatura correcta y separar claras y yemas",
    "Distinguir polvo de hornear, bicarbonato y harina leudante",
  ],
  lecciones: [
    { titulo: "Harina, azúcar y materia grasa", html: `
      <p class="idea">En pastelería cada ingrediente cumple una función. Conocerla te permite entender una receta y arreglarla cuando algo sale mal.</p>
      <table>
        <tr><th>Ingrediente</th><th>Función</th><th>Tipos</th></tr>
        <tr><td>Harina</td><td>Estructura</td><td>0000 (la más usada en pastelería, fina), leudante (trae polvo de hornear)</td></tr>
        <tr><td>Azúcar</td><td>Endulza, da humedad, dora y estabiliza los merengues</td><td>Común, impalpable (en polvo, para glaseados y cremas), negra o mascabo (más húmeda)</td></tr>
        <tr><td>Manteca</td><td>Sabor, ternura, ayuda a que crezca al batirla con azúcar</td><td>Fría para masas secas; pomada para budines</td></tr>
        <tr><td>Aceite</td><td>Humedad: budines que se mantienen tiernos más días</td><td>Neutro (girasol, maíz)</td></tr>
        <tr><td>Fécula de maíz (maicena)</td><td>Espesa cremas; da textura arenosa en masas</td><td>—</td></tr>
      </table>
      <p><strong>Manteca pomada</strong> es manteca a temperatura ambiente, blanda como una pomada pero no derretida. Se consigue sacándola de la heladera una o dos horas antes.</p>
      <p><strong>No es lo mismo cambiar manteca por aceite:</strong> el aceite da humedad, pero no incorpora aire al batir. Si una receta dice manteca, al cambiarla cambia la textura.</p>
      <p><strong>El azúcar impalpable</strong> se disuelve más fácil: sirve para glaseados, cremas y masas secas finas. Se puede hacer procesando azúcar común, pero sale más gruesa.</p>
      <p>Por ejemplo, el budín de Marta se secaba al segundo día. Cambió parte de la manteca por aceite, como hacen muchas recetas de budín, y ahora dura tierno 4 días.</p>` },
    { titulo: "Los huevos", html: `
      <p class="idea">Los huevos dan estructura, humedad y, batidos, <strong>aire</strong>. Se usan a <strong>temperatura ambiente</strong>: fríos, incorporan menos aire y pueden cortar una mezcla con manteca.</p>
      <table>
        <tr><th>Parte</th><th>Qué aporta</th><th>Se usa en</th></tr>
        <tr><td>Huevo entero</td><td>Estructura y aire al batirlo con azúcar</td><td>Bizcochuelo, budines</td></tr>
        <tr><td>Clara</td><td>Mucho aire al batirla; sin grasa</td><td>Merengues, bizcochuelos livianos</td></tr>
        <tr><td>Yema</td><td>Grasa, color, cremosidad</td><td>Crema pastelera, masas</td></tr>
      </table>
      <pre><code>Separar claras y yemas sin que se mezclen:
1. Usá huevos fríos (se separan mejor) y después dejalos templar.
2. Rompé cada huevo sobre un bol chico, no sobre el bol grande.
3. Pasá la yema de una mitad de cáscara a la otra y dejá caer la clara.
4. Si se rompió la yema en la clara, apartá ese huevo:
   una gota de yema arruina el batido de todas las claras.
5. Recién ahí pasá la clara al bol grande.</code></pre>
      <p><strong>¿Por qué un bol chico?</strong> Si rompés directo sobre las claras ya separadas y se te cae una yema, perdés todas.</p>
      <p><strong>Tamaño:</strong> las recetas suelen pensar en huevos de unos 50 a 60 gramos. Si los tuyos son muy chicos o muy grandes, pesá: un huevo mediano sin cáscara pesa unos 50 g.</p>
      <p><strong>Huevos frescos:</strong> comprá en lugares confiables, guardalos en la heladera y respetá la fecha.</p>
      <p>Por ejemplo, Marta rompía los huevos directo sobre las claras y una vez se le cayó una yema en 8 claras: el merengue no subió. Ahora usa un bol chico para cada huevo.</p>` },
    { titulo: "Polvo de hornear, bicarbonato y leudante", html: `
      <p class="idea">Los <strong>leudantes químicos</strong> generan gas al mezclarse y calentarse, y hacen crecer tortas y budines sin necesidad de levadura.</p>
      <table>
        <tr><th>Leudante</th><th>Cómo funciona</th><th>Cuánto, en general</th></tr>
        <tr><td>Polvo de hornear</td><td>Trae todo lo necesario: se activa con humedad y calor</td><td>Unos 10 a 12 g por cada 250 g de harina (seguí la receta)</td></tr>
        <tr><td>Bicarbonato de sodio</td><td>Necesita un ingrediente ácido (yogur, limón, cacao) para activarse</td><td>Muy poco: de más deja gusto amargo</td></tr>
        <tr><td>Harina leudante</td><td>Harina que ya trae polvo de hornear</td><td>Si la usás, no agregues polvo de hornear (salvo que la receta lo diga)</td></tr>
      </table>
      <pre><code>Reemplazo casero (aproximado):
harina leudante ≈ harina 0000 + polvo de hornear
por cada 100 g de harina 0000, unos 4 g de polvo de hornear
(Mejor seguir la receta original cuando se pueda.)</code></pre>
      <p><strong>El bizcochuelo clásico no necesita leudante</strong> si batís bien los huevos: el aire del batido lo hace crecer. Muchas recetas igual usan harina leudante para asegurarse.</p>
      <p><strong>De más también es malo:</strong> mucho polvo de hornear hace que la torta suba de golpe y después se hunda, y deja un gusto metálico.</p>
      <p><strong>El polvo de hornear vence:</strong> si es viejo, la torta no crece. Prueba: una cucharadita en agua caliente tiene que burbujear enseguida.</p>
      <p>Por ejemplo, un budín de Marta se hundió en el medio. Revisó la receta: había usado harina leudante y además polvo de hornear. Con una sola de las dos, salió parejo.</p>` },
  ],
  practica: [
    "Leé una receta tuya y anotá la función de cada ingrediente con la tabla de la lección.",
    "Separá 6 huevos con el método del bol chico y anotá si se te rompió alguna yema.",
    "Probá tu polvo de hornear en agua caliente y anotá si burbujeó o hay que reemplazarlo.",
  ],
  recursos: [
    { t: "ANMAT: Código Alimentario Argentino", url: "https://www.argentina.gob.ar/anmat/codigoalimentario" },
    { t: "ANMAT: Manual de manipulación higiénica de alimentos (PDF, 2024)", url: "https://www.argentina.gob.ar/sites/default/files/anmat_manual_manipuladores_de_alimentos_version_2024.pdf" },
    { t: "Curso de este sitio: Panadería casera para vender", url: "https://pkeios.github.io/EiaLearning/panaderia/" },
  ],
  quiz: [
    { q: "Si una receta dice \"manteca pomada\", ¿cómo la preparás?", opciones: ["La derretís en el microondas","La usás recién sacada de la heladera","La sacás de la heladera una o dos horas antes, que quede blanda sin derretir","La cambiás por aceite"], correcta: 2, explicacion: "Pomada es blanda pero sólida. Derretirla tienta por rápido, pero no incorpora aire." },
    { q: "Tu budín se seca al segundo día. ¿Qué cambio suele ayudar?", opciones: ["Usar parte de aceite en lugar de toda manteca","Más harina","Más tiempo de horno","Menos huevos"], correcta: 0, explicacion: "El aceite da humedad duradera. Más horno tienta para \"asegurarse\", pero lo seca más." },
    { q: "Vas a hacer un glaseado. ¿Qué azúcar usás?", opciones: ["Mascabo","Común sin procesar","Ninguna","Impalpable"], correcta: 3, explicacion: "La impalpable se disuelve fácil. La común tienta, pero queda granulada." },
    { q: "Querés espesar una crema. ¿Qué ingrediente sirve?", opciones: ["Polvo de hornear","Fécula de maíz","Bicarbonato","Azúcar impalpable"], correcta: 1, explicacion: "La fécula espesa al cocinarse. El polvo de hornear tienta por ser un polvo, pero es para crecer." },
    { q: "Si sacás los huevos de la heladera y batís enseguida con la manteca, ¿qué puede pasar?", opciones: ["Sale mejor","Nada","La mezcla se corta y entra menos aire","Se cocina"], correcta: 2, explicacion: "Fríos, incorporan menos aire y cortan la manteca. \"Nada\" tienta por apuro." },
    { q: "Si vas a separar 8 claras, ¿cómo rompés cada huevo?", opciones: ["Sobre un bol chico aparte y después pasás la clara al bol grande","Directo sobre el bol grande","Todos juntos","Con un tenedor adentro de la clara"], correcta: 0, explicacion: "Si se rompe una yema, perdés solo ese huevo. Directo tienta por rápido, pero arriesga todo." },
    { q: "Si se te cayó una gota de yema en las claras, ¿qué pasa al batir?", opciones: ["Suben más","Nada","Se ponen amarillas y suben igual","No suben bien: la grasa de la yema lo impide"], correcta: 3, explicacion: "La grasa arruina el batido. \"Nada\" tienta porque es una gota, pero alcanza." },
    { q: "Tus huevos son muy chicos y la receta pide 4. ¿Qué hacés?", opciones: ["Usás 4 igual","Pesás: un huevo mediano sin cáscara pesa unos 50 g","Usás 2","Agregás agua"], correcta: 1, explicacion: "Pesar asegura la cantidad. \"4 igual\" tienta por seguir la receta, pero falta huevo." },
    { q: "Querés usar bicarbonato en una receta sin nada ácido. ¿Qué pasa?", opciones: ["Funciona igual que el polvo de hornear","Sube el doble","No se activa bien y puede dejar gusto amargo","Se vuelve azúcar"], correcta: 2, explicacion: "Necesita un ácido. \"Igual que el polvo\" tienta porque los dos son leudantes." },
    { q: "Usás harina leudante. ¿Agregás polvo de hornear?", opciones: ["No, salvo que la receta lo diga","Sí, siempre el doble","Sí, por las dudas","Sí, bicarbonato"], correcta: 0, explicacion: "Ya lo trae. \"Por las dudas\" tienta, pero de más se hunde." },
    { q: "Tu budín subió y después se hundió en el medio. ¿Qué causa revisás?", opciones: ["Poco azúcar","Molde de metal","Huevos grandes","Demasiado leudante"], correcta: 3, explicacion: "De más sube de golpe y se hunde. Poco azúcar tienta, pero no causa eso." },
    { q: "No sabés si tu polvo de hornear sirve. ¿Cómo lo probás?", opciones: ["Probándolo con la lengua","Una cucharadita en agua caliente: tiene que burbujear","Oliéndolo","Mirando el color"], correcta: 1, explicacion: "Si no burbujea, perdió fuerza. Olerlo tienta, pero no dice nada." },
  ],
},
{
  id: "tortas",
  icono: "🎂",
  titulo: "Bizcochuelos y budines",
  nivel: "Intermedio",
  objetivos: [
    "Hacer un bizcochuelo por el método batido, llegando al punto letra",
    "Hacer un budín por el método cremado",
    "Saber cuándo está cocido y desmoldarlo sin romperlo",
  ],
  lecciones: [
    { titulo: "El bizcochuelo: batir bien", video: {"id":"O7RrC_Ir9IA","t":"Los sí y los no del bizcochuelo · Cocineros Argentinos (22:46)"}, html: `
      <p class="idea">El secreto del bizcochuelo es el <strong>aire</strong>: los huevos se baten con el azúcar hasta el <strong>punto letra</strong> y la harina se incorpora <strong>con movimientos envolventes</strong> para no perderlo.</p>
      <pre><code>Bizcochuelo clásico (molde de 24 cm):
4 huevos a temperatura ambiente
120 g de azúcar
120 g de harina leudante (o 0000 con 1 cucharadita de polvo de hornear)
1 cucharadita de esencia de vainilla

1. Prendé el horno a 180 °C y prepará el molde (enmantecado y enharinado).
2. Batí los huevos con el azúcar a velocidad alta 8 a 10 minutos,
   hasta el punto letra.
3. Agregá la vainilla.
4. Tamizá la harina sobre la mezcla en 3 veces y uní con la espátula,
   con movimientos envolventes, de abajo hacia arriba.
5. Volcá en el molde y horneá 30 a 35 minutos sin abrir la puerta
   los primeros 20.</code></pre>
      <table>
        <tr><th>Término</th><th>Qué es</th></tr>
        <tr><td>Punto letra (o cinta)</td><td>La mezcla está pálida, triplicó su volumen y, al levantar el batidor, cae formando una cinta que se ve un rato sobre la superficie</td></tr>
        <tr><td>Tamizar</td><td>Pasar la harina por un colador para que no tenga grumos y se airee</td></tr>
        <tr><td>Movimiento envolvente</td><td>Con la espátula, cortar por el medio, ir al fondo y subir, girando el bol: une sin perder aire</td></tr>
      </table>
      <p><strong>Si revolvés en círculos rápidos</strong> o batís después de agregar la harina, se pierde el aire y el bizcochuelo sale bajo y apelmazado.</p>
      <p>Por ejemplo, Marta batía los huevos 3 minutos. Cuando empezó a batir 10 minutos hasta el punto letra, su bizcochuelo pasó de 3 a 6 centímetros de alto.</p>` },
    { titulo: "El budín: el método cremado", video: {"id":"mK4Cequ0-eA","t":"Los sí y los no del budín de limón · Cocineros Argentinos (15:56)"}, html: `
      <p class="idea">En el método <strong>cremado</strong>, primero se bate la <strong>manteca pomada con el azúcar</strong> hasta que quede clara y cremosa. Así entra aire, y después se suman los huevos de a uno y los secos.</p>
      <pre><code>Orden del método cremado:
1. Manteca pomada + azúcar: batir 4 a 5 minutos hasta que aclare.
2. Huevos a temperatura ambiente, de a uno, batiendo bien entre cada uno.
3. Ralladura y jugo (por ejemplo, de limón).
4. Secos tamizados (harina + polvo de hornear) alternados con
   el líquido (leche o yogur), empezando y terminando con secos.
5. Mezclar lo justo: apenas se integra, parar.
6. Molde de budín enmantecado, horno a 170-180 °C, 40 a 50 minutos.</code></pre>
      <table>
        <tr><th>Batido (bizcochuelo)</th><th>Cremado (budín)</th></tr>
        <tr><td>El aire viene de los huevos</td><td>El aire viene de la manteca con el azúcar</td></tr>
        <tr><td>Miga liviana y esponjosa</td><td>Miga más densa y húmeda</td></tr>
        <tr><td>Poca o ninguna grasa</td><td>Mucha manteca o aceite</td></tr>
      </table>
      <p><strong>Si la mezcla se corta</strong> (se ve granulada al agregar los huevos), suele ser porque estaban fríos. Agregá una cucharada de la harina y seguí batiendo: se recupera.</p>
      <p><strong>Mezclá lo justo</strong> después de agregar la harina: si batís de más, se forma gluten y el budín queda duro y con túneles.</p>
      <p>Por ejemplo, Marta batía la manteca y el azúcar 1 minuto. Con 5 minutos de cremado, el budín de limón le salió con una miga más fina y suave.</p>` },
    { titulo: "Cocción y desmolde", html: `
      <p class="idea">Una torta está lista cuando <strong>un palillo clavado en el centro sale seco</strong>. Después, el enfriado y el desmolde también importan para que no se rompa ni se humedezca.</p>
      <table>
        <tr><th>Prueba</th><th>Está lista si...</th></tr>
        <tr><td>Palillo en el centro</td><td>Sale seco o con migas secas</td></tr>
        <tr><td>Tocar suave el centro</td><td>Vuelve, no queda marcado</td></tr>
        <tr><td>Bordes</td><td>Se despegan un poquito del molde</td></tr>
        <tr><td>Color</td><td>Dorado parejo</td></tr>
      </table>
      <pre><code>Desmolde:
1. Sacá del horno y dejá 10 minutos en el molde sobre una rejilla.
2. Pasá un cuchillo sin filo por el borde.
3. Dalo vuelta sobre la rejilla y sacá el molde (y el papel, si usaste).
4. Dejá enfriar del todo antes de cortar o rellenar.</code></pre>
      <table>
        <tr><th>Problema</th><th>Causa probable</th></tr>
        <tr><td>Se hundió en el medio</td><td>Abriste el horno temprano, falta de cocción o leudante de más</td></tr>
        <tr><td>Se quemó arriba y está crudo adentro</td><td>Horno demasiado fuerte: bajá 10 a 20 °C</td></tr>
        <tr><td>Bajo y apelmazado</td><td>Poco batido o mezcla de más con la harina</td></tr>
        <tr><td>Se pegó al molde</td><td>Molde mal enmantecado o desmoldado muy caliente</td></tr>
      </table>
      <p><strong>Rellenar caliente es un error:</strong> la crema se derrite y el bizcochuelo se desarma. Para tortas por encargo, muchas pasteleras hornean el día anterior.</p>
      <p>Por ejemplo, el bizcochuelo de Marta se hundía porque abría el horno a los 10 minutos para mirar. Ahora espera 25 minutos, hace la prueba del palillo y sale perfecto.</p>` },
  ],
  practica: [
    "Hacé el bizcochuelo clásico, medí su altura al salir y anotala.",
    "Hacé un budín por el método cremado y anotá cuántos minutos batiste la manteca con el azúcar.",
    "Cuando algo salga mal, buscalo en la tabla de problemas, cambiá una sola cosa la próxima vez y anotá el resultado.",
  ],
  recursos: [
    { t: "ANMAT: Manual de manipulación higiénica de alimentos (PDF, 2024)", url: "https://www.argentina.gob.ar/sites/default/files/anmat_manual_manipuladores_de_alimentos_version_2024.pdf" },
    { t: "ANMAT: Código Alimentario Argentino", url: "https://www.argentina.gob.ar/anmat/codigoalimentario" },
    { t: "Curso de este sitio: Panadería casera para vender", url: "https://pkeios.github.io/EiaLearning/panaderia/" },
  ],
  quiz: [
    { q: "Querés un bizcochuelo alto. ¿Hasta cuándo batís los huevos con el azúcar?", opciones: ["1 minuto","Hasta que se disuelva el azúcar","Hasta el punto letra: pálido, triplicado y cayendo en cinta","Hasta que esté líquido"], correcta: 2, explicacion: "El aire del batido lo hace crecer. Hasta disolver el azúcar tienta, pero falta aire." },
    { q: "Si agregás la harina al bizcochuelo, ¿cómo la incorporás?", opciones: ["Tamizada, en 3 veces, con movimientos envolventes","Toda de golpe con la batidora","Revolviendo rápido en círculos","Con las manos"], correcta: 0, explicacion: "Así no se pierde el aire. La batidora tienta por rápida, pero baja la mezcla." },
    { q: "¿Qué es tamizar?", opciones: ["Batir la harina","Mojar la harina","Pesar la harina","Pasar la harina por un colador para sacar grumos y airearla"], correcta: 3, explicacion: "Se hace con un colador. Batir tienta, pero es otra cosa." },
    { q: "Tu bizcochuelo salió bajo y apelmazado. ¿Qué revisás primero?", opciones: ["El color del molde","Si batiste poco los huevos o mezclaste de más con la harina","La marca del azúcar","La hora"], correcta: 1, explicacion: "Es falta de aire o aire perdido. La marca del azúcar tienta, pero no es la causa." },
    { q: "En el método cremado, ¿qué se bate primero?", opciones: ["Los huevos solos","La harina con la leche","La manteca pomada con el azúcar","El polvo de hornear"], correcta: 2, explicacion: "Ahí entra el aire del budín. Los huevos tientan, pero eso es el método batido." },
    { q: "Al agregar los huevos al cremado, la mezcla se ve granulada. ¿Qué hacés?", opciones: ["Agregás una cucharada de la harina y seguís batiendo","La tirás","Agregás más manteca derretida","La metés al horno así"], correcta: 0, explicacion: "Se recupera. Tirarla tienta, pero no hace falta." },
    { q: "Si ya agregaste la harina al budín, ¿cuánto mezclás?", opciones: ["5 minutos con batidora","Hasta que esté elástica","Lo más posible","Lo justo, hasta que se integra"], correcta: 3, explicacion: "De más se forma gluten y queda duro. \"Lo más posible\" tienta por prolijo." },
    { q: "¿Qué diferencia hay entre la miga de un bizcochuelo y la de un budín?", opciones: ["Son iguales","El bizcochuelo es más liviano; el budín, más denso y húmedo","El budín es más liviano","El bizcochuelo es más húmedo"], correcta: 1, explicacion: "Cambia el método y la grasa. \"Son iguales\" tienta, pero se nota al comerlos." },
    { q: "Clavás un palillo en el centro y sale con mezcla húmeda. ¿Qué hacés?", opciones: ["Lo sacás igual","Subís el horno al máximo","Lo dejás unos minutos más y volvés a probar","Lo desmoldás ya"], correcta: 2, explicacion: "Todavía está crudo. Subir el horno tienta, pero quema afuera." },
    { q: "Tu bizcochuelo se hunde porque abrís el horno a los 10 minutos. ¿Qué cambiás?", opciones: ["No abrir la puerta los primeros 20 minutos","Abrirla más seguido","Hornear más frío","Más polvo de hornear"], correcta: 0, explicacion: "El aire frío lo baja antes de que se arme. Más polvo tienta, pero lo hunde más." },
    { q: "Tu torta está quemada arriba y cruda adentro. ¿Qué cambiás?", opciones: ["Subís el horno","Horneás menos","Cambiás el molde por uno más chico","Bajás el horno 10 a 20 °C y horneás más tiempo"], correcta: 3, explicacion: "Con mucho calor se dora antes de cocinar. Subir el horno tienta, pero empeora." },
    { q: "Sacaste el bizcochuelo y querés rellenarlo ya. ¿Qué pasa?", opciones: ["Queda mejor","La crema se derrite y se desarma: hay que esperar que enfríe","Nada","Se cocina el relleno"], correcta: 1, explicacion: "Caliente, el relleno se arruina. \"Queda mejor\" tienta por apuro." },
  ],
},
{
  id: "masas",
  icono: "🍪",
  titulo: "Masas secas, tartas y alfajores",
  nivel: "Intermedio",
  objetivos: [
    "Hacer una masa sablée (frola) sin amasarla de más",
    "Hacer alfajores de maicena parejos",
    "Hornear y guardar masas secas para que se mantengan crocantes",
  ],
  lecciones: [
    { titulo: "La masa sablée: frío y poco amasado", html: `
      <p class="idea">La <strong>masa sablée</strong> (arenosa) es la base de la pastafrola, las tartas dulces y muchas galletitas. Tiene dos secretos: <strong>manteca fría</strong> y <strong>amasar lo mínimo</strong>.</p>
      <pre><code>Masa sablée (para una tarta de 24 cm):
250 g de harina 0000
125 g de manteca fría en cubos
100 g de azúcar impalpable
1 huevo
Ralladura de limón

1. Arenar: frotá la harina con la manteca fría con la punta de los dedos
   (o en procesadora) hasta que parezca arena húmeda.
2. Agregá el azúcar, la ralladura y el huevo.
3. Uní rápido, sin amasar: apenas forma un bollo, parás.
4. Envolvé en film y llevá a la heladera 30 minutos como mínimo.
5. Estirá entre dos papeles manteca, forrá el molde y volvé a enfriar.
6. Horno a 180 °C.</code></pre>
      <table>
        <tr><th>Si...</th><th>Pasa que...</th></tr>
        <tr><td>Amasás de más</td><td>Se forma gluten: queda dura y se encoge en el horno</td></tr>
        <tr><td>La manteca está blanda</td><td>La masa se pega y no queda arenosa</td></tr>
        <tr><td>No la enfriás</td><td>Se deforma en el horno</td></tr>
      </table>
      <p><strong>Arenar</strong> es mezclar la harina con la manteca fría frotando con los dedos, hasta que quede como arena. Así la manteca recubre la harina y la masa queda tierna.</p>
      <p><strong>Si se rompe al estirar,</strong> no la vuelvas a amasar entera: emparchá con pedacitos y presioná. En tartas no se nota.</p>
      <p>Por ejemplo, la pastafrola de Marta salía dura. Se dio cuenta de que amasaba la masa como si fuera de pan. Desde que la une apenas y la enfría, sale arenosa y se deshace en la boca.</p>` },
    { titulo: "Alfajores de maicena", video: {"id":"ba19CJn605Q","t":"Los sí y los no de los alfajores de maicena · Cocineros Argentinos (17:15)"}, html: `
      <p class="idea">Los <strong>alfajores de maicena</strong> se venden muchísimo. La masa lleva mucha fécula, que la hace <strong>suave y quebradiza</strong>; el truco es tapas parejas y finas, y un horno que no las dore.</p>
      <table>
        <tr><th>Paso</th><th>Clave</th></tr>
        <tr><td>Masa</td><td>Cremar manteca y azúcar, sumar yemas, y los secos (maicena, harina, polvo de hornear) sin amasar de más</td></tr>
        <tr><td>Frío</td><td>30 minutos de heladera antes de estirar</td></tr>
        <tr><td>Estirar</td><td>A 5 milímetros parejos (dos varillas o palitos al costado ayudan)</td></tr>
        <tr><td>Cortar</td><td>Siempre el mismo cortante; volvé a juntar los recortes una sola vez</td></tr>
        <tr><td>Horno</td><td>Moderado, unos 170 °C, 10 a 12 minutos: se retiran claritas, sin dorar</td></tr>
        <tr><td>Armado</td><td>Con las tapas frías: dulce de leche repostero, coco rallado en el borde</td></tr>
      </table>
      <p><strong>Dulce de leche repostero</strong> es el que viene más firme, para rellenar sin que se escurra. El común es más blando.</p>
      <p><strong>Las tapas recién horneadas son muy frágiles:</strong> dejalas enfriar sobre la placa unos minutos antes de moverlas.</p>
      <p><strong>Para vender, contá:</strong> si cada tapa pesa lo mismo, cada alfajor también. Pesá 3 tapas crudas y ajustá el grosor hasta que pesen parecido.</p>
      <p>Por ejemplo, Marta estiraba a ojo y le salían alfajores de dos alturas. Con dos palitos de 5 mm a los costados del palo de amasar, todas las tapas le salen iguales.</p>` },
    { titulo: "Hornear y guardar masas secas", html: `
      <p class="idea">Las masas secas (galletitas, tapas de alfajor, tartas sin relleno húmedo) duran varios días si se <strong>hornean bien</strong> y se <strong>guardan lejos de la humedad</strong>.</p>
      <table>
        <tr><th>Producto</th><th>Cómo guardar</th><th>Duración aproximada</th></tr>
        <tr><td>Galletitas y tapas sin rellenar</td><td>Frasco o lata hermética, a temperatura ambiente</td><td>Una a dos semanas</td></tr>
        <tr><td>Alfajores de maicena armados</td><td>Recipiente cerrado; con calor, en heladera</td><td>Unos días</td></tr>
        <tr><td>Pastafrola</td><td>Tapada, en lugar fresco</td><td>Unos días</td></tr>
        <tr><td>Tarta con crema pastelera</td><td>Heladera</td><td>2 días</td></tr>
      </table>
      <pre><code>Para que una tanda salga pareja:
- Placa en el medio del horno.
- Galletitas del mismo tamaño y grosor en cada placa.
- Separadas unos 2 cm.
- Girá la placa a mitad de cocción.
- Retirá cuando los bordes apenas empiezan a dorarse:
  terminan de secarse afuera.</code></pre>
      <p><strong>Guardá solo cuando están frías:</strong> si las guardás tibias, la humedad las ablanda.</p>
      <p><strong>Las duraciones son orientativas:</strong> dependen de la receta, el calor y la humedad. Ante la duda de si algo está bien, no lo vendas.</p>
      <p>Por ejemplo, Marta guardaba las galletitas tibias en una bolsa y a los dos días estaban blandas. Ahora las enfría en rejilla y las guarda en una lata: siguen crocantes una semana.</p>` },
  ],
  practica: [
    "Hacé una masa sablée arenando con los dedos, enfriala 30 minutos y anotá si se encogió en el horno.",
    "Hacé una tanda de tapas de alfajor, pesá 5 tapas crudas y anotá la diferencia entre la más pesada y la más liviana.",
    "Guardá galletitas frías en una lata y otras tibias en una bolsa, y anotá cuántos días dura crocante cada grupo.",
  ],
  recursos: [
    { t: "ANMAT: Manual de manipulación higiénica de alimentos (PDF, 2024)", url: "https://www.argentina.gob.ar/sites/default/files/anmat_manual_manipuladores_de_alimentos_version_2024.pdf" },
    { t: "ANMAT: Código Alimentario Argentino", url: "https://www.argentina.gob.ar/anmat/codigoalimentario" },
    { t: "Curso de este sitio: Panadería casera para vender", url: "https://pkeios.github.io/EiaLearning/panaderia/" },
  ],
  quiz: [
    { q: "Hacés una masa sablée. ¿Cómo tiene que estar la manteca?", opciones: ["Derretida","Pomada","Fría, en cubos","A temperatura ambiente varias horas"], correcta: 2, explicacion: "Fría queda arenosa. Pomada tienta por ser la del budín, pero acá se pega." },
    { q: "¿Qué es arenar?", opciones: ["Frotar la harina con la manteca fría hasta que parezca arena","Agregar arena","Batir los huevos","Amasar 10 minutos"], correcta: 0, explicacion: "La manteca recubre la harina. Amasar tienta, pero es lo contrario." },
    { q: "Tu pastafrola sale dura y se encoge. ¿Qué pasó?", opciones: ["Le faltó azúcar","La manteca estaba muy fría","El horno estaba bajo","Amasaste de más y se formó gluten"], correcta: 3, explicacion: "La sablée se une apenas. La manteca fría tienta como causa, pero es lo correcto." },
    { q: "La masa sablée se rompe al estirarla en el molde. ¿Qué hacés?", opciones: ["La amasás entera de nuevo","Emparchás con pedacitos y presionás","Le agregás agua","La tirás"], correcta: 1, explicacion: "Reamasarla la endurece. Agregar agua tienta, pero cambia la masa." },
    { q: "Si estirás la masa de alfajores y salen tapas de distintas alturas, ¿qué te ayuda?", opciones: ["Estirar más rápido","Más harina en la mesa","Dos palitos de 5 mm al costado del palo de amasar","Cortar más grande"], correcta: 2, explicacion: "Los palitos marcan el grosor. Más harina tienta, pero no empareja." },
    { q: "¿Cómo se retiran del horno las tapas de alfajor de maicena?", opciones: ["Claritas, sin dorar","Bien doradas","Quemadas en los bordes","Crudas en el centro"], correcta: 0, explicacion: "Así quedan suaves. Doradas tienta por lindas, pero se secan." },
    { q: "Las tapas recién horneadas se rompen al moverlas. ¿Qué hacés?", opciones: ["Las movés más rápido","Las mojás","Las rellenás calientes","Las dejás enfriar unos minutos sobre la placa"], correcta: 3, explicacion: "Calientes son muy frágiles. Moverlas rápido tienta, pero se rompen igual." },
    { q: "Vas a rellenar alfajores. ¿Qué dulce de leche usás?", opciones: ["El más líquido","Repostero, que es más firme","Leche condensada","Cualquiera"], correcta: 1, explicacion: "El repostero no se escurre. El común tienta, pero se sale por los bordes." },
    { q: "Querés que todos tus alfajores pesen parecido. ¿Qué hacés?", opciones: ["Los contás","Los mirás","Pesás algunas tapas crudas y ajustás el grosor","Usás cortantes distintos"], correcta: 2, explicacion: "Si las tapas pesan igual, los alfajores también. Contarlos tienta, pero no dice el peso." },
    { q: "Si guardás galletitas tibias en una bolsa, ¿qué pasa?", opciones: ["Se ablandan por la humedad","Duran más","Se ponen más crocantes","Nada"], correcta: 0, explicacion: "Hay que guardarlas frías. \"Duran más\" tienta por guardarlas rápido." },
    { q: "¿Dónde guardás galletitas para que sigan crocantes?", opciones: ["En una bolsa abierta","En la heladera sin tapar","Al sol","En un frasco o lata hermética"], correcta: 3, explicacion: "Lo hermético las protege de la humedad. La heladera tienta, pero sin tapar se humedecen." },
    { q: "Tenés una tarta con crema pastelera. ¿Cuánto dura y dónde?", opciones: ["Una semana en la alacena","Unos 2 días, en la heladera","Un mes","Lo mismo que una galletita"], correcta: 1, explicacion: "La crema se echa a perder rápido. Como una galletita tienta, pero tiene relleno húmedo." },
  ],
},
{
  id: "cremas",
  icono: "🍮",
  titulo: "Cremas y rellenos",
  nivel: "Intermedio",
  objetivos: [
    "Hacer una crema pastelera bien cocida y enfriarla de forma segura",
    "Batir crema chantilly sin pasarla",
    "Preparar una ganache para rellenar o cubrir",
  ],
  lecciones: [
    { titulo: "Crema pastelera", video: {"id":"ShxuYcXkg84","t":"Crema pastelera tradicional · Cocineros Argentinos (18:10)"}, html: `
      <p class="idea">La <strong>crema pastelera</strong> es leche espesada con yemas, azúcar y fécula. Tiene que <strong>hervir</strong> para cocinar la fécula y el huevo, y después <strong>enfriarse rápido</strong> y en la heladera.</p>
      <pre><code>Crema pastelera (unos 600 g):
500 ml de leche
4 yemas
120 g de azúcar
45 g de fécula de maíz
Vainilla o cáscara de limón

1. Calentá la leche con la vainilla (sin que hierva).
2. En un bol, mezclá yemas, azúcar y fécula hasta que no haya grumos.
3. Volcá un poco de leche caliente sobre las yemas, revolviendo
   (así se templan y no se cocinan de golpe).
4. Volvé todo a la olla, a fuego medio, revolviendo sin parar.
5. Cuando espese y largue el primer hervor, cociná 1 o 2 minutos más
   revolviendo.
6. Pasala a un recipiente bajo, tapá con film EN CONTACTO con la crema
   y llevá a la heladera apenas deje de humear.</code></pre>
      <table>
        <tr><th>Paso</th><th>Por qué</th></tr>
        <tr><td>Templar las yemas</td><td>Si echás las yemas en la leche hirviendo, se hacen huevo revuelto</td></tr>
        <tr><td>Hervir 1 o 2 minutos</td><td>Cocina la fécula (si no, sabe a harina y se licúa) y el huevo</td></tr>
        <tr><td>Film en contacto</td><td>Evita que se forme una costra arriba</td></tr>
        <tr><td>Recipiente bajo y heladera</td><td>Enfría rápido: las bacterias crecen en lo tibio</td></tr>
      </table>
      <p><strong>Se usa en el día o al siguiente</strong> y siempre se mantiene en frío. Lo que tenga crema pastelera también va a la heladera.</p>
      <p><strong>Si quedan grumos,</strong> batila con batidor de alambre o pasala por un colador mientras está caliente.</p>
      <p>Por ejemplo, la crema de Marta se licuaba al día siguiente. Le faltaba cocinarla después del hervor. Con 2 minutos más revolviendo, quedó firme para rellenar.</p>` },
    { titulo: "Crema chantilly", html: `
      <p class="idea">La <strong>chantilly</strong> es crema de leche batida con azúcar hasta que forma picos. Necesita <strong>todo bien frío</strong> y <strong>parar a tiempo</strong>: si te pasás, se convierte en manteca.</p>
      <pre><code>Chantilly:
500 ml de crema de leche (para batir, bien fría)
50 g de azúcar impalpable
Vainilla

1. Bol y batidor en la heladera o el freezer 15 minutos antes.
2. Batí la crema a velocidad media.
3. Cuando empieza a espesar, agregá el azúcar y la vainilla.
4. Seguí batiendo y mirá seguido:
   - Picos blandos (se doblan): para cubrir y decorar suave.
   - Picos firmes (se quedan parados): para rellenar y decorar con manga.
5. PARÁ apenas llegás al punto.</code></pre>
      <table>
        <tr><th>Punto</th><th>Cómo se ve</th><th>Para qué</th></tr>
        <tr><td>Líquida</td><td>Todavía chorrea</td><td>Seguí batiendo</td></tr>
        <tr><td>Picos blandos</td><td>Forma picos que se doblan</td><td>Cubrir, mezclar con otras cremas</td></tr>
        <tr><td>Picos firmes</td><td>Picos que se sostienen</td><td>Rellenar, manga</td></tr>
        <tr><td>Pasada</td><td>Se ve granulada, amarillenta, suelta líquido</td><td>Ya no sirve como chantilly (es manteca y suero)</td></tr>
      </table>
      <p><strong>La crema tiene que ser "para batir"</strong> (con suficiente grasa). Las cremas livianas no levantan.</p>
      <p><strong>Con calor, más rápido se pasa y más rápido se baja:</strong> en verano trabajá con el bol sobre otro bol con hielo.</p>
      <p>Por ejemplo, Marta batía la crema a velocidad máxima sin mirar y se le cortaba seguido. Ahora bate a velocidad media, mira cada 20 segundos al final y para en picos firmes.</p>` },
    { titulo: "Ganache y dulce de leche", html: `
      <p class="idea">La <strong>ganache</strong> es chocolate derretido con crema de leche caliente. Cambiando la proporción, sirve para cubrir o para rellenar. El <strong>dulce de leche repostero</strong> es el relleno argentino por excelencia.</p>
      <table>
        <tr><th>Proporción chocolate:crema</th><th>Textura</th><th>Para qué</th></tr>
        <tr><td>1:1 (200 g chocolate + 200 ml crema)</td><td>Cremosa, fluida tibia</td><td>Cubrir tortas, bañar</td></tr>
        <tr><td>2:1 (300 g chocolate + 150 ml crema)</td><td>Firme al enfriar</td><td>Rellenos, trufas</td></tr>
      </table>
      <pre><code>Ganache:
1. Picá el chocolate chiquito y ponelo en un bol.
2. Calentá la crema hasta que esté por hervir (sin que hierva fuerte).
3. Volcala sobre el chocolate y esperá 2 minutos sin tocar.
4. Mezclá desde el centro hacia afuera hasta que quede lisa y brillante.
5. Para cubrir, usala tibia. Para rellenar, dejala enfriar hasta que espese.</code></pre>
      <p><strong>Chocolate de buena calidad:</strong> para ganache conviene chocolate cobertura o semiamargo. Los "baños de repostería" baratos tienen otras grasas y no quedan igual.</p>
      <p><strong>Dulce de leche repostero:</strong> se usa tal cual para rellenar bizcochuelos, alfajores y tartas. No necesita heladera si el producto ya armado no lleva cremas, pero seguí lo que dice el envase.</p>
      <p><strong>Combinaciones clásicas:</strong> bizcochuelo con dulce de leche y merengue; bizcochuelo de chocolate con ganache; tarta con crema pastelera y frutas.</p>
      <p>Por ejemplo, Marta cubría con chocolate derretido solo y se le quebraba al cortar. Con ganache 1:1 la cobertura queda brillante y se corta limpia.</p>` },
  ],
  practica: [
    "Hacé crema pastelera, anotá cuántos minutos la cocinaste después del primer hervor y si al día siguiente estaba firme.",
    "Batí chantilly mirando cada 20 segundos al final y anotá en qué minuto llegó a picos firmes.",
    "Hacé ganache 1:1 y 2:1 en cantidades chicas y anotá la diferencia de textura al enfriar.",
  ],
  recursos: [
    { t: "ANMAT: Manual de manipulación higiénica de alimentos (PDF, 2024)", url: "https://www.argentina.gob.ar/sites/default/files/anmat_manual_manipuladores_de_alimentos_version_2024.pdf" },
    { t: "OMS: Manual sobre las cinco claves para la inocuidad de los alimentos", url: "https://www.who.int/es/publications/i/item/9789241594639" },
    { t: "ANMAT: Código Alimentario Argentino", url: "https://www.argentina.gob.ar/anmat/codigoalimentario" },
  ],
  quiz: [
    { q: "Hacés crema pastelera. ¿Cómo sumás las yemas a la leche caliente?", opciones: ["Echándolas directo en la leche hirviendo","Batiéndolas solas","Templándolas: primero un poco de leche sobre las yemas, revolviendo","Sin leche"], correcta: 2, explicacion: "Así no se cocinan de golpe. Echarlas directo tienta por rápido, pero se hace huevo revuelto." },
    { q: "La crema pastelera ya espesó e hirvió. ¿Qué hacés?", opciones: ["La cocinás 1 o 2 minutos más revolviendo","La sacás del fuego enseguida","Le agregás más fécula","La dejás hervir 20 minutos sin revolver"], correcta: 0, explicacion: "Así se cocina la fécula y no se licúa. Sacarla enseguida tienta, pero queda cruda." },
    { q: "Querés que no se forme costra arriba de la crema. ¿Qué hacés?", opciones: ["Tapar con una tapa","Dejarla destapada","Revolverla cada hora","Film en contacto con la superficie"], correcta: 3, explicacion: "El film en contacto evita la costra. Una tapa tienta, pero deja aire." },
    { q: "Tu crema pastelera está tibia. ¿Dónde la ponés?", opciones: ["En la mesada hasta el día siguiente","En un recipiente bajo a la heladera, apenas deja de humear","En el horno apagado","En una olla honda al sol"], correcta: 1, explicacion: "Lo tibio cría bacterias. La mesada tienta para que enfríe, pero es riesgoso." },
    { q: "Tu crema pastelera quedó con grumos. ¿Qué hacés?", opciones: ["La tirás","Le agregás agua","La batís con batidor de alambre o la pasás por un colador en caliente","La congelás"], correcta: 2, explicacion: "Se arregla en caliente. Agregar agua tienta, pero la arruina." },
    { q: "Si vas a batir chantilly, ¿cómo preparás el bol y la crema?", opciones: ["Todo bien frío","A temperatura ambiente","La crema tibia","El bol recién lavado con agua caliente"], correcta: 0, explicacion: "El frío ayuda a que levante. Tibia tienta por fácil, pero no sube." },
    { q: "Querés rellenar con manga. ¿Hasta qué punto batís la chantilly?", opciones: ["Picos blandos","Hasta que esté granulada","Líquida","Picos firmes"], correcta: 3, explicacion: "Firmes se sostienen en la manga. Granulada tienta por \"más firme\", pero está pasada." },
    { q: "Tu chantilly se ve granulada y amarillenta. ¿Qué pasó?", opciones: ["Le falta batir","Se pasó: se está convirtiendo en manteca","Le falta azúcar","Está perfecta"], correcta: 1, explicacion: "Es el punto pasado. \"Le falta batir\" tienta, pero empeora." },
    { q: "Es verano y la chantilly se te baja enseguida. ¿Qué hacés?", opciones: ["Batís más rápido","Agregás más azúcar","Batís con el bol sobre otro bol con hielo","Usás crema liviana"], correcta: 2, explicacion: "El frío la estabiliza. Más rápido tienta, pero se pasa antes." },
    { q: "Querés cubrir una torta con ganache. ¿Qué proporción usás?", opciones: ["1:1, chocolate y crema","2:1, más firme","Solo chocolate derretido","1:3"], correcta: 0, explicacion: "1:1 queda fluida para cubrir. 2:1 tienta, pero es para rellenar." },
    { q: "Volcaste la crema caliente sobre el chocolate. ¿Qué hacés?", opciones: ["Batís con batidora enseguida","Lo ponés a hervir","Le agregás agua","Esperás 2 minutos y mezclás desde el centro"], correcta: 3, explicacion: "Así se derrite parejo y queda brillante. Batir enseguida tienta, pero mete aire." },
    { q: "Tu cobertura de chocolate derretido se quiebra al cortar. ¿Qué cambiás?", opciones: ["Más chocolate","Usás ganache en lugar de chocolate solo","Chocolate frío","Cortar más rápido"], correcta: 1, explicacion: "La crema la hace más flexible. Más chocolate tienta, pero se quiebra igual." },
  ],
},
{
  id: "merengues",
  icono: "☁️",
  titulo: "Claras y merengues",
  nivel: "Avanzado",
  objetivos: [
    "Batir claras a punto nieve sin que se bajen",
    "Elegir entre merengue francés, suizo e italiano según el uso",
    "Hacer merengue italiano con almíbar de forma segura",
  ],
  lecciones: [
    { titulo: "Claras a punto nieve", video: {"id":"GLq0cYB-HIg","t":"Montar claras a punto de nieve · CanalCandido (3:56)"}, html: `
      <p class="idea">Las claras batidas atrapan aire y suben hasta 8 veces su volumen. Para que funcione hacen falta <strong>cero grasa</strong>: bol limpio, sin restos de yema y sin plástico.</p>
      <table>
        <tr><th>Punto</th><th>Cómo se ve</th></tr>
        <tr><td>Espumoso</td><td>Burbujas grandes, todavía líquido</td></tr>
        <tr><td>Picos blandos</td><td>Blanco, forma picos que se doblan</td></tr>
        <tr><td>Punto nieve (picos firmes)</td><td>Brillante, los picos se sostienen; das vuelta el bol y no se cae</td></tr>
        <tr><td>Pasado</td><td>Opaco, grumoso, suelta líquido</td></tr>
      </table>
      <pre><code>Claves:
- Bol de metal o vidrio, lavado y bien seco.
- Claras a temperatura ambiente, sin una gota de yema.
- Empezá a velocidad media y subí cuando están espumosas.
- Un chorrito de jugo de limón o una pizca de sal ayudan a estabilizar.
- Si llevan azúcar, agregala de a poco cuando ya están espumosas.
- Usalas enseguida: si esperan, se bajan.</code></pre>
      <p><strong>Para incorporarlas a una mezcla,</strong> primero agregá un poco de claras para aflojarla y después el resto con movimientos envolventes, como la harina del bizcochuelo.</p>
      <p><strong>Ojo:</strong> las claras batidas solas están crudas. Se usan en preparaciones que se hornean (bizcochuelos, soufflés). Para comer sin cocinar, usá merengue suizo o italiano (próximas lecciones).</p>
      <p>Por ejemplo, las claras de Marta no subían nunca. Usaba un bol de plástico donde antes había batido manteca. Con un bol de vidrio limpio, subieron en 4 minutos.</p>` },
    { titulo: "Tres merengues: francés, suizo e italiano", html: `
      <p class="idea">El <strong>merengue</strong> es clara batida con azúcar. Hay tres tipos según <strong>cómo se agrega el azúcar y si se cocina</strong>. Para algo que se come sin hornear, siempre suizo o italiano.</p>
      <table>
        <tr><th>Tipo</th><th>Cómo se hace</th><th>¿Clara cocida?</th><th>Para qué</th></tr>
        <tr><td>Francés</td><td>Claras batidas con azúcar en crudo</td><td>No: solo si después se hornea</td><td>Merenguitos secos, pavlova (horneados)</td></tr>
        <tr><td>Suizo</td><td>Claras y azúcar a baño María hasta que se disuelve el azúcar y está bien caliente, después se bate</td><td>Sí, si llega a la temperatura</td><td>Cubrir tortas, buttercream</td></tr>
        <tr><td>Italiano</td><td>Se vuelca almíbar caliente sobre las claras batidas</td><td>Sí</td><td>Cubrir, rellenar, mousses, decorar con soplete</td></tr>
      </table>
      <pre><code>Merengue suizo:
1. Claras + el doble de su peso en azúcar, en un bol sobre agua
   caliente (baño María), revolviendo.
2. Calentá hasta que el azúcar se disuelva y la mezcla esté muy caliente
   (unos 70 °C con termómetro: no se puede tocar con el dedo).
3. Sacá del baño María y batí hasta que enfríe y forme picos firmes.</code></pre>
      <p><strong>Baño María</strong> es calentar algo en un recipiente puesto sobre otro con agua caliente, para que el calor sea suave.</p>
      <p><strong>Merenguitos secos:</strong> el francés se hornea a muy baja temperatura (unos 100 °C) mucho tiempo, más para secar que para dorar.</p>
      <p>Por ejemplo, Marta cubría las tortas con merengue francés crudo. Lo cambió por suizo, que se cocina a baño María: queda igual de lindo y es seguro para vender.</p>` },
    { titulo: "Merengue italiano y el almíbar", video: {"id":"Qi2gbIl7njk","t":"Cómo hacer un buen merengue italiano · Isabel Vermal (3:16)"}, html: `
      <p class="idea">El <strong>merengue italiano</strong> es el más firme y estable: se hace volcando <strong>almíbar a unos 118 a 121 °C</strong> sobre las claras batidas. El almíbar quema mucho: se trabaja con cuidado.</p>
      <pre><code>Merengue italiano:
120 g de claras (unas 4)
240 g de azúcar + 80 ml de agua (para el almíbar)

1. Poné el azúcar y el agua en una ollita y cociná sin revolver.
2. Cuando el almíbar está por llegar (unos 110 °C), empezá a batir
   las claras a punto espumoso / picos blandos.
3. Cuando el almíbar llega a 118-121 °C, apagá.
4. Con la batidora andando a velocidad media, volcá el almíbar en
   hilo fino por el costado del bol (no sobre las paletas: salpica).
5. Seguí batiendo hasta que el bol esté tibio: brillante y firme.</code></pre>
      <table>
        <tr><th>Seguridad con el almíbar</th><th>Por qué</th></tr>
        <tr><td>Chicos y mascotas fuera de la cocina</td><td>Un tirón de la olla puede causar quemaduras muy graves</td></tr>
        <tr><td>Mango de la olla hacia adentro</td><td>Que nadie lo enganche al pasar</td></tr>
        <tr><td>Nunca probar con el dedo</td><td>El azúcar caliente se pega a la piel</td></tr>
        <tr><td>Volcar por el costado, en hilo</td><td>Sobre las paletas salpica almíbar caliente</td></tr>
      </table>
      <p><strong>Sin termómetro,</strong> la prueba casera es la del <strong>punto bolita blanda</strong>: una gota de almíbar en un vaso de agua fría forma una bolita blanda. Con termómetro es más seguro y preciso.</p>
      <p><strong>Es la base de muchas cosas:</strong> mousses, cubiertas que se doran con soplete, lemon pie, buttercream de merengue italiano.</p>
      <p>Por ejemplo, Marta hizo su primer lemon pie con merengue italiano y termómetro. Le salió tan firme que lo pudo dorar con soplete y aguantó toda la tarde del cumpleaños.</p>` },
  ],
  practica: [
    "Batí 3 claras en un bol de metal o vidrio limpio y anotá cuántos minutos tardaron en llegar a punto nieve.",
    "Hacé merengue suizo con termómetro y anotá a qué temperatura lo sacaste del baño María.",
    "Hacé merengue italiano con termómetro siguiendo las reglas de seguridad y anotá a qué temperatura volcaste el almíbar.",
  ],
  recursos: [
    { t: "OMS: Manual sobre las cinco claves para la inocuidad de los alimentos", url: "https://www.who.int/es/publications/i/item/9789241594639" },
    { t: "ANMAT: Manual de manipulación higiénica de alimentos (PDF, 2024)", url: "https://www.argentina.gob.ar/sites/default/files/anmat_manual_manipuladores_de_alimentos_version_2024.pdf" },
    { t: "ANMAT: Código Alimentario Argentino", url: "https://www.argentina.gob.ar/anmat/codigoalimentario" },
  ],
  quiz: [
    { q: "Tus claras no suben nunca. ¿Qué revisás primero?", opciones: ["La marca de los huevos","La hora del día","Que el bol esté limpio, sin grasa ni restos de yema, y que no sea de plástico","El color del bol"], correcta: 2, explicacion: "La grasa impide que suban. La marca tienta, pero el problema suele ser el bol." },
    { q: "Si das vuelta el bol y las claras no se caen, ¿qué punto es?", opciones: ["Punto nieve (picos firmes)","Espumoso","Pasado","Picos blandos"], correcta: 0, explicacion: "Es la prueba clásica. Pasado tienta por \"más firme\", pero se ve opaco y suelta líquido." },
    { q: "Las claras están batidas y tenés que terminar otra cosa. ¿Qué pasa si esperan?", opciones: ["Suben más","Se conservan igual","Se cocinan","Se bajan: hay que usarlas enseguida"], correcta: 3, explicacion: "El aire se escapa. \"Se conservan\" tienta, pero no." },
    { q: "Si vas a sumar claras batidas a una mezcla, ¿cómo?", opciones: ["Todas de golpe con la batidora","Un poco primero para aflojar y el resto con movimientos envolventes","Revolviendo rápido","Batiendo 5 minutos"], correcta: 1, explicacion: "Así no se pierde el aire. Con batidora tienta por rápido, pero baja todo." },
    { q: "Querés cubrir una torta que no se hornea. ¿Qué merengue usás?", opciones: ["Francés crudo","Claras solas","Suizo o italiano","Cualquiera"], correcta: 2, explicacion: "Tienen la clara cocida. El francés tienta por fácil, pero queda crudo." },
    { q: "¿Para qué sirve el merengue francés?", opciones: ["Para preparaciones que después se hornean, como merenguitos","Para cubrir tortas sin hornear","Para una mousse cruda","Para comer así nomás"], correcta: 0, explicacion: "Crudo es riesgoso. Cubrir tortas tienta, pero no se cocina." },
    { q: "¿Qué es el baño María?", opciones: ["Mojar la torta","Hervir el azúcar directo","Enfriar con hielo","Calentar algo en un recipiente sobre agua caliente"], correcta: 3, explicacion: "Da un calor suave. Hervir directo tienta, pero quema." },
    { q: "Hacés merengue suizo. ¿Hasta cuándo calentás a baño María?", opciones: ["Hasta que está tibio","Hasta que el azúcar se disuelve y está muy caliente, unos 70 °C","Hasta que hierve","Un minuto nomás"], correcta: 1, explicacion: "Así se cocina la clara. Tibio tienta por cómodo, pero no alcanza." },
    { q: "Hacés merengue italiano. ¿A qué temperatura volcás el almíbar?", opciones: ["70 °C","200 °C","Unos 118 a 121 °C","Cuando hierve, a los 100 °C"], correcta: 2, explicacion: "Es el punto justo. 100 °C tienta porque hierve, pero falta." },
    { q: "Si vas a volcar el almíbar sobre las claras batiendo, ¿dónde lo volcás?", opciones: ["Por el costado del bol, en hilo fino","Sobre las paletas","De golpe","Con la batidora apagada en el centro"], correcta: 0, explicacion: "Sobre las paletas salpica almíbar caliente. De golpe tienta por rápido." },
    { q: "Mientras hacés almíbar, ¿cómo ponés el mango de la olla?", opciones: ["Hacia afuera para agarrarlo fácil","Da igual","Hacia la ventana","Hacia adentro de la cocina, que nadie lo enganche"], correcta: 3, explicacion: "Un tirón puede causar quemaduras graves. Hacia afuera tienta por cómodo." },
    { q: "No tenés termómetro. ¿Cómo probás el almíbar?", opciones: ["Con el dedo","Una gota en agua fría: si forma una bolita blanda, está","Probándolo con una cuchara en la boca","Mirando el color"], correcta: 1, explicacion: "La prueba de la bolita es segura. Con el dedo tienta, pero quema gravemente." },
  ],
},
{
  id: "armar-vender",
  icono: "🎂",
  titulo: "Armar tortas y venderlas",
  nivel: "Avanzado",
  objetivos: [
    "Armar una torta rellena pareja: nivelar, humedecer, rellenar y cubrir",
    "Calcular el costo de una torta y ponerle precio",
    "Tomar pedidos, rotular y entregar de forma segura",
  ],
  lecciones: [
    { titulo: "Armar una torta pareja", html: `
      <p class="idea">Una torta prolija se arma en capas: <strong>nivelar, cortar, humedecer, rellenar, enfriar y cubrir</strong>. El frío entre pasos es lo que hace que quede recta.</p>
      <pre><code>Armado de una torta de 24 cm:
1. Bizcochuelo frío (mejor del día anterior, envuelto en film).
2. Nivelar: cortá la parte de arriba si está abombada.
3. Cortar en 2 o 3 discos parejos con cuchillo de sierra,
   girando la torta.
4. Humedecer cada disco con almíbar liviano
   (agua y azúcar hervidas, frías) con pincel: que no quede mojado.
5. Rellenar: una capa pareja, dejando 1 cm sin relleno en el borde.
6. Apilar y llevar 30 minutos a la heladera.
7. Primera capa fina de cobertura (atrapa las migas) y heladera.
8. Capa final de cobertura y decoración.</code></pre>
      <table>
        <tr><th>Problema</th><th>Solución</th></tr>
        <tr><td>Se desliza o se inclina</td><td>Relleno muy blando o torta tibia: más frío entre capas</td></tr>
        <tr><td>Se ven migas en la cobertura</td><td>Hacé la primera capa fina y enfriá antes de la final</td></tr>
        <tr><td>El relleno se sale por los costados</td><td>Dejá 1 cm libre en el borde</td></tr>
        <tr><td>Bizcochuelo seco</td><td>Humedecé con almíbar</td></tr>
      </table>
      <p><strong>Almíbar para humedecer</strong> es distinto del de merengue: es liviano (por ejemplo, partes iguales de agua y azúcar hervidas un minuto) y se usa frío. Puede llevar ralladura o esencia.</p>
      <p><strong>Las tortas con cremas</strong> se arman, se guardan y se entregan en frío.</p>
      <p>Por ejemplo, las tortas de Marta quedaban torcidas. Empezó a enfriar 30 minutos después de rellenar y a hacer una primera capa fina: ahora salen rectas y sin migas.</p>` },
    { titulo: "Cuánto cobrar", html: `
      <p class="idea">Para ponerle precio a una torta, sumá <strong>todos los costos</strong> (ingredientes, gas o luz, caja, decoración) y <strong>tu trabajo</strong>. La pastelería lleva muchas horas: si no las contás, trabajás gratis.</p>
      <table>
        <tr><th>Costo (precios de ejemplo, usá los tuyos)</th><th>Torta de 24 cm con dulce de leche y merengue</th></tr>
        <tr><td>Huevos, azúcar, harina</td><td>$4.000</td></tr>
        <tr><td>Dulce de leche repostero (1 kg)</td><td>$6.000</td></tr>
        <tr><td>Merengue (claras y azúcar)</td><td>$1.500</td></tr>
        <tr><td>Gas o luz</td><td>$1.000</td></tr>
        <tr><td>Caja y base de cartón</td><td>$2.500</td></tr>
        <tr><td><strong>Total de costos</strong></td><td><strong>$15.000</strong></td></tr>
      </table>
      <pre><code>Tu trabajo:
4 horas (hornear, armar, decorar, limpiar) × $3.000 por hora = $12.000

Precio = costos + trabajo + ganancia del emprendimiento
$15.000 + $12.000 = $27.000
+ 20% de ganancia: $27.000 × 1,20 = $32.400  → redondeo: $32.500</code></pre>
      <p><strong>Las horas también son un costo:</strong> decidí cuánto querés ganar por hora y sumalo. La ganancia extra es para el emprendimiento: reponer moldes, crecer, imprevistos.</p>
      <p><strong>Compará con tu zona,</strong> pero no bajes de tu costo: si el precio que necesitás es más alto, ofrecé algo distinto (personalización, sabores, entrega) en lugar de regalar tu trabajo.</p>
      <p><strong>Seña:</strong> en tortas por encargo es común pedir una parte por adelantado (por ejemplo, la mitad), así no perdés los ingredientes si cancelan.</p>
      <p>Para profundizar, está el curso <strong>Costos y precios</strong> de este sitio.</p>
      <p>Por ejemplo, Marta cobraba $18.000 una torta que le costaba $15.000 en ingredientes y caja, sin contar sus 4 horas. Con la cuenta completa la subió a $32.500 y sus clientas siguieron encargando.</p>` },
    { titulo: "Pedidos, rótulo y entrega", html: `
      <p class="idea">Una torta por encargo se confirma <strong>por escrito</strong> con todos los detalles, se rotula con lo que hace falta y se entrega <strong>en frío y a horario</strong>.</p>
      <pre><code>Confirmación del pedido (por WhatsApp):
"¡Hola, Laura! Te confirmo:
🎂 Torta de 24 cm (unas 15 porciones)
   Bizcochuelo de vainilla, dulce de leche y merengue suizo
   Decoración: "Feliz cumple Sofi" en color rosa
💰 Total: $32.500 · Seña: $16.250 (por transferencia)
📅 Retiro: sábado 14 a las 16 h
⚠️ Contiene huevo, leche y gluten. Mantener en heladera.
¿Está todo bien?"</code></pre>
      <table>
        <tr><th>En el rótulo</th><th>Ejemplo</th></tr>
        <tr><td>Nombre del producto</td><td>Torta de dulce de leche y merengue</td></tr>
        <tr><td>Ingredientes y alérgenos</td><td>Contiene huevo, leche y gluten</td></tr>
        <tr><td>Fecha de elaboración</td><td>13/3</td></tr>
        <tr><td>Conservación</td><td>Mantener en heladera, consumir en 2 días</td></tr>
        <tr><td>Contacto</td><td>Tu nombre y teléfono</td></tr>
      </table>
      <p><strong>La entrega:</strong> la torta sale de la heladera justo antes, en caja, sobre una superficie plana del auto (nunca en el asiento inclinado) y sin sol directo.</p>
      <p><strong>Fotos reales:</strong> mostrá tus tortas como son (lo ves en el curso de fotos de producto). Si prometés algo en una foto, la torta tiene que ser así.</p>
      <p>Para la atención por mensajes, está el curso <strong>Atender clientes por WhatsApp</strong> de este sitio.</p>
      <p>Por ejemplo, una clienta reclamó que la torta decía "Feliz cumple Sofía" y no "Sofi". Marta le mostró la confirmación que ella había aceptado. Desde entonces copia el texto exacto que le pasan.</p>` },
  ],
  practica: [
    "Armá una torta de 2 discos con almíbar, relleno y primera capa fina, y anotá cuánto tiempo la enfriaste entre pasos.",
    "Calculá el costo completo de una torta tuya (ingredientes, gas, caja y tus horas) y anotá el precio final.",
    "Escribí la confirmación de un pedido con los datos de la lección y el rótulo del producto, y anotá cuántos datos tiene la confirmación.",
  ],
  recursos: [
    { t: "Curso de este sitio: Costos y precios para tu emprendimiento", url: "https://pkeios.github.io/EiaLearning/costos-precios/" },
    { t: "Curso de este sitio: Atender clientes por WhatsApp", url: "https://pkeios.github.io/EiaLearning/whatsapp-negocio/" },
    { t: "Curso de este sitio: Fotos de producto con el celular", url: "https://pkeios.github.io/EiaLearning/fotos-producto/" },
  ],
  quiz: [
    { q: "Si vas a armar una torta, ¿cómo tiene que estar el bizcochuelo?", opciones: ["Recién salido del horno","Tibio","Frío, mejor del día anterior","Congelado y duro"], correcta: 2, explicacion: "Frío se corta y se rellena sin desarmarse. Tibio tienta por apuro." },
    { q: "El bizcochuelo salió abombado arriba. ¿Qué hacés?", opciones: ["Lo nivelás cortando la parte de arriba","Lo dejás así","Lo aplastás con la mano","Le ponés más relleno abajo"], correcta: 0, explicacion: "Nivelado queda recto. Aplastarlo tienta, pero lo compacta." },
    { q: "El bizcochuelo está seco. ¿Qué hacés antes de rellenar?", opciones: ["Le echás agua","Lo mojás con leche hasta que chorree","Nada","Lo humedecés con almíbar liviano frío, con pincel"], correcta: 3, explicacion: "El almíbar da humedad y sabor. Mojarlo de más tienta, pero se desarma." },
    { q: "El relleno se te sale por los costados. ¿Qué cambiás?", opciones: ["Más relleno","Dejás 1 cm libre en el borde al rellenar","Menos bizcochuelo","Apretar más"], correcta: 1, explicacion: "Al apilar, el relleno se expande. Apretar tienta, pero lo empuja más." },
    { q: "Se ven migas en la cobertura. ¿Qué hacés la próxima?", opciones: ["Una sola capa gruesa","Cubrir caliente","Una primera capa fina, heladera y después la final","Más migas"], correcta: 2, explicacion: "La capa fina atrapa las migas. Una gruesa tienta, pero las arrastra." },
    { q: "Si calculás el precio sumando solo ingredientes y caja, ¿qué falta?", opciones: ["Tus horas de trabajo y la ganancia del emprendimiento","Nada","El color de la caja","La propina"], correcta: 0, explicacion: "Si no contás tus horas, trabajás gratis. \"Nada\" tienta si ya cubrís lo que gastaste." },
    { q: "Costos $15.000, trabajo $12.000 y 20% de ganancia. ¿Cuánto da?", opciones: ["$27.000","$18.000","$30.000","$32.400"], correcta: 3, explicacion: "$27.000 × 1,20 = $32.400. $27.000 tienta, pero falta la ganancia." },
    { q: "En tu zona cobran menos de lo que necesitás. ¿Qué hacés?", opciones: ["Bajás aunque pierdas","Ofrecés algo distinto en lugar de bajar de tu costo","Usás ingredientes vencidos","Dejás de contar tus horas"], correcta: 1, explicacion: "Bajar de tu costo es perder. Bajar tienta para competir." },
    { q: "Te encargan una torta grande. ¿Qué pedís para no perder si cancelan?", opciones: ["Nada","El DNI","Una seña por adelantado","Que te paguen el doble"], correcta: 2, explicacion: "La seña cubre los ingredientes. \"Nada\" tienta por confianza." },
    { q: "¿Cómo confirmás un pedido de torta?", opciones: ["Por escrito, con sabor, tamaño, texto exacto, precio, seña, fecha y alérgenos","De palabra","Solo el precio","Con un audio sin detalles"], correcta: 0, explicacion: "Por escrito evita reclamos. De palabra tienta por confianza." },
    { q: "Si una torta con merengue y dulce de leche va en el rótulo, ¿qué alérgenos ponés?", opciones: ["Ninguno","Solo azúcar","Frutos secos siempre","Huevo, leche y gluten"], correcta: 3, explicacion: "Huevo del merengue, leche del dulce, gluten de la harina. \"Ninguno\" tienta porque no se ven." },
    { q: "Si vas a llevar una torta en el auto, ¿dónde la ponés?", opciones: ["En el asiento inclinado","En una superficie plana, en caja, sin sol directo","Arriba del tablero al sol","En la mano"], correcta: 1, explicacion: "Plano evita que se deslice. El asiento tienta por cómodo, pero está inclinado." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: tu mesa dulce por encargo",
  nivel: "Avanzado",
  objetivos: [
    "Planificar un pedido real o de práctica: una torta y una tanda de alfajores o budines",
    "Producir con orden, seguridad e higiene, siguiendo un cronograma",
    "Evaluar el resultado con una rúbrica y ajustar el precio",
  ],
  lecciones: [
    { titulo: "El plan del pedido", html: `
      <p class="idea">El proyecto es preparar una <strong>mesa dulce chica</strong>: una torta rellena y una tanda de alfajores de maicena (o budines). Primero se planifica, con un <strong>cronograma hacia atrás</strong> desde la entrega.</p>
      <pre><code>Pedido: torta de 24 cm (dulce de leche y merengue suizo)
        + 24 alfajores de maicena. Entrega: sábado 16 h.

Cronograma:
Jueves:  compras · bizcochuelo (envuelto en film) · masa de alfajores a la heladera
Viernes: hornear tapas · armar alfajores · almíbar
Sábado:  10 h armar torta y enfriar · 13 h merengue suizo y cubrir
         15 h rótulo y caja · 15.45 h salir · 16 h entrega</code></pre>
      <table>
        <tr><th>Lo que se puede adelantar</th><th>Lo que se hace el último día</th></tr>
        <tr><td>Bizcochuelo (1 día antes, envuelto)</td><td>Merengues y chantilly</td></tr>
        <tr><td>Masas secas y tapas de alfajor</td><td>Cubrir y decorar</td></tr>
        <tr><td>Almíbar para humedecer</td><td>Rótulo y empaque</td></tr>
        <tr><td>Dulce de leche y ganache</td><td>Entrega</td></tr>
      </table>
      <p><strong>Lista de compras con cantidades:</strong> sumá lo de cada receta y comprá un poco más (un huevo que se rompe, una tapa que se quiebra).</p>
      <p><strong>Si es de práctica,</strong> hacelo para un cumpleaños de tu familia y tratalo como un pedido real: confirmación, rótulo y horario.</p>
      <p>Por ejemplo, Marta armaba todo el sábado y siempre terminaba corriendo. Con el cronograma de 3 días, el sábado solo armó, cubrió y entregó, tranquila.</p>` },
    { titulo: "Producir con orden", html: `
      <p class="idea">El día de producción, seguí el cronograma y usá el <strong>control de seguridad e higiene</strong>. Anotá lo que pasa: tiempos, problemas y lo que sobró.</p>
      <pre><code>Control del día:
[ ] Pelo atado, manos lavadas, sin anillos
[ ] Huevos sin rajaduras; ninguna preparación con huevo crudo para vender
[ ] Cremas y rellenos en la heladera hasta el armado
[ ] Almíbar: chicos fuera de la cocina, mango hacia adentro
[ ] Torta armada en frío y guardada en la heladera
[ ] Rótulo con alérgenos, fecha y conservación
[ ] Seña recibida y confirmación por escrito</code></pre>
      <table>
        <tr><th>Registro</th><th>Ejemplo de Marta</th></tr>
        <tr><td>Horas reales</td><td>7 horas en 3 días (había calculado 5)</td></tr>
        <tr><td>Problemas</td><td>3 tapas rotas; el merengue tardó más en el baño María</td></tr>
        <tr><td>Sobrantes</td><td>4 tapas de alfajor</td></tr>
        <tr><td>Costo real</td><td>Según los tickets de compra</td></tr>
        <tr><td>Comentario del cliente</td><td>"El merengue, espectacular"</td></tr>
      </table>
      <p><strong>Las horas reales importan:</strong> si tardaste más de lo que calculaste, tu precio está cobrando de menos.</p>
      <p><strong>Pedí opinión al día siguiente:</strong> "¿Qué te pareció?". Lo que te digan te sirve para mejorar y, si te dan permiso, para mostrar.</p>
      <p>Por ejemplo, el registro de Marta mostró 7 horas reales en lugar de 5. Recalculó el precio con la cuenta del módulo anterior y lo ajustó para el próximo pedido.</p>` },
    { titulo: "Evaluá con la rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si algo está bien hecho. Usala para revisar tu mesa dulce y decidir qué mejorar.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Seguridad e higiene</td><td>Control del día completo</td><td>Falta un punto</td><td>Faltan varios</td></tr>
        <tr><td>Torta</td><td>Pareja, bien cocida, rellena y cubierta sin migas</td><td>Algún detalle</td><td>Se inclinó o se desarmó</td></tr>
        <tr><td>Alfajores o budines</td><td>Parejos en tamaño y cocción</td><td>Algunos desparejos</td><td>Muy desparejos</td></tr>
        <tr><td>Organización</td><td>Cronograma cumplido, entrega a horario</td><td>Llegaste justo</td><td>Llegaste tarde</td></tr>
        <tr><td>Precio</td><td>Con costos reales y horas reales</td><td>Sin contar las horas</td><td>Sin calcular</td></tr>
        <tr><td>Atención</td><td>Confirmación escrita, rótulo y consulta posterior</td><td>Falta una</td><td>Faltan dos o más</td></tr>
      </table>
      <pre><code>Total: ___ de 12
10 a 12 → lista para tomar pedidos
7 a 9   → mejorá el criterio más bajo en el próximo pedido
0 a 6   → repasá los módulos de bizcochuelos, cremas y seguridad</code></pre>
      <p><strong>Elegí tu especialidad:</strong> con pocos productos bien hechos (una torta clásica, alfajores, un budín) es más fácil que te recomienden que con muchos regulares.</p>
      <p>Por ejemplo, Marta sacó 10 de 12: perdió un punto en alfajores (3 tapas rotas) y otro en precio (no había contado sus horas reales). En el segundo pedido sacó 12.</p>` },
  ],
  practica: [
    "Armá el cronograma hacia atrás de un pedido real o de práctica y anotá qué día hacés cada cosa.",
    "Producí la mesa dulce con el control del día, completá el registro y anotá las horas reales y los sobrantes.",
    "Puntuá tu trabajo con la rúbrica y anotá tu total de 12 y el criterio más bajo.",
    "Recalculá el precio con tus horas reales y anotá el precio nuevo.",
  ],
  recursos: [
    { t: "Curso de este sitio: Costos y precios para tu emprendimiento", url: "https://pkeios.github.io/EiaLearning/costos-precios/" },
    { t: "Curso de este sitio: Panadería casera para vender", url: "https://pkeios.github.io/EiaLearning/panaderia/" },
    { t: "ANMAT: Manual de manipulación higiénica de alimentos (PDF, 2024)", url: "https://www.argentina.gob.ar/sites/default/files/anmat_manual_manipuladores_de_alimentos_version_2024.pdf" },
  ],
  quiz: [
    { q: "Tenés una entrega el sábado a las 16 h. ¿Cómo armás el plan?", opciones: ["Empezando el sábado temprano con todo","Sin plan","Con un cronograma hacia atrás desde la entrega","El viernes a la noche"], correcta: 2, explicacion: "Hacia atrás ves qué adelantar. Todo el sábado tienta, pero terminás corriendo." },
    { q: "¿Qué podés adelantar un día antes?", opciones: ["El bizcochuelo, envuelto en film","El merengue","La chantilly","El rótulo con la fecha de hoy"], correcta: 0, explicacion: "El bizcochuelo frío se arma mejor. El merengue tienta, pero se hace el último día." },
    { q: "¿Qué dejás para el último día?", opciones: ["Comprar los ingredientes","Hornear las tapas","Hacer el bizcochuelo","Merengues, chantilly, cubrir y decorar"], correcta: 3, explicacion: "Lo delicado se hace al final. Comprar tienta, pero eso va primero." },
    { q: "Hacés la lista de compras. ¿Cuánto comprás?", opciones: ["Justo lo de las recetas","Lo de las recetas más un poco extra","El doble de todo","A ojo"], correcta: 1, explicacion: "Un huevo se rompe, una tapa se quiebra. Justo tienta por ahorrar, pero no tenés margen." },
    { q: "Es un pedido de práctica para tu familia. ¿Cómo lo tratás?", opciones: ["Sin cuidados, es familia","Sin plan","Como uno real: confirmación, rótulo y horario","Sin higiene"], correcta: 2, explicacion: "Así practicás todo el proceso. \"Es familia\" tienta, pero no aprendés lo de vender." },
    { q: "Durante la producción, ¿dónde están las cremas?", opciones: ["En la heladera hasta el armado","En la mesada para tenerlas a mano","Al lado del horno","Al sol"], correcta: 0, explicacion: "Las cremas se cuidan del calor. A mano tienta por cómodo, pero es riesgoso." },
    { q: "Tardaste 7 horas y habías calculado 5. ¿Qué hacés?", opciones: ["Nada","Bajás el precio","Trabajás más rápido sin cambiar nada","Recalculás el precio con las horas reales"], correcta: 3, explicacion: "Si no, cobrás de menos. \"Trabajás más rápido\" tienta, pero las horas fueron 7." },
    { q: "Al día siguiente de la entrega, ¿qué hacés?", opciones: ["Nada","Preguntás qué le pareció","Le cobrás de nuevo","Le pedís que te recomiende a 10 personas"], correcta: 1, explicacion: "La opinión te ayuda a mejorar. Pedir 10 recomendaciones tienta, pero es mucho." },
    { q: "Tu torta se inclinó. ¿Cuántos puntos sacás en \"Torta\"?", opciones: ["2","1","0","12"], correcta: 2, explicacion: "\"Se inclinó o se desarmó\" es 0. 1 tienta, pero es para algún detalle menor." },
    { q: "Calculaste el precio sin contar tus horas. ¿Cuántos puntos sacás en \"Precio\"?", opciones: ["1","2","0","12"], correcta: 0, explicacion: "\"Sin contar las horas\" es 1. 2 tienta porque calculaste, pero falta lo principal." },
    { q: "Sacaste 8 de 12. ¿Qué hacés?", opciones: ["Dejás de vender","Subís los precios al doble","Hacés 20 productos nuevos","Mejorás el criterio más bajo en el próximo pedido"], correcta: 3, explicacion: "De 7 a 9, falta pulir. 20 productos nuevos tienta por crecer, pero suma complicaciones." },
    { q: "¿Por qué conviene elegir una especialidad?", opciones: ["Porque es más barato siempre","Pocos productos bien hechos hacen que te recomienden más","Porque no hace falta practicar","No conviene"], correcta: 1, explicacion: "La calidad pareja genera clientes. \"No hace falta practicar\" tienta, pero es al revés." },
  ],
},
];
