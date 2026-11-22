// Temario del curso "Conservas y dulces caseros seguros". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js conservas y node tools/metodologia.js conservas
window.TEMARIO = [
{
  id: "seguridad",
  icono: "⚠️",
  titulo: "El botulismo y la regla de la acidez",
  nivel: "Básico",
  objetivos: [
    "Explicar qué es el botulismo y por qué las conservas caseras son su causa más común",
    "Separar los alimentos ácidos de los de baja acidez usando el límite de pH 4,5",
    "Decidir qué conservas se pueden hacer en casa y cuáles no",
  ],
  lecciones: [
    { titulo: "Qué es el botulismo", video: {"id":"ZfCHCsBqtTw","t":"Botulismo: cómo evitar la intoxicación por conservas y alimentos en mal estado · Hospital de Clínicas, UBA (5:19)"}, html: `<p>En todo el curso acompañamos a <strong>Elsa</strong>, que vive en Maipú, Mendoza. En el verano le sobran duraznos y tomates de la quinta de su familia, y quiere guardarlos para el invierno sin poner en riesgo a nadie.</p><p><strong>Este curso enseña a hacer conservas caseras seguras siguiendo guías del INTA y de la Universidad Nacional de La Plata. No reemplaza un curso presencial de manipulación de alimentos. Ante cualquier síntoma después de comer una conserva, andá a una guardia.</strong></p>
      <p class="idea">El <strong>botulismo</strong> es una intoxicación grave causada por la toxina de una bacteria, <strong>Clostridium botulinum</strong>. Su causa más común son las <strong>conservas caseras mal hechas</strong>.</p>
      <table>
        <tr><th>La bacteria crece cuando hay...</th><th>En un frasco de conserva</th></tr>
        <tr><td>Un alimento húmedo de baja acidez</td><td>Verduras, carnes, pescados sin acidificar</td></tr>
        <tr><td>Poco o nada de aire</td><td>Un frasco cerrado al vacío</td></tr>
        <tr><td>Temperatura entre 4,5 °C y 49 °C</td><td>Un estante de la alacena</td></tr>
      </table>
      <p>Sus <strong>esporas</strong> (formas resistentes, como semillas de la bacteria) están en la superficie de casi todas las verduras frescas y en la tierra. Aguantan el hervor del agua. Por eso no alcanza con lavar ni con hervir: hay que <strong>no darles las condiciones para crecer</strong>.</p>
      <p><strong>Síntomas</strong> (según la guía de la UNLP): cansancio y debilidad marcados, mareos, después visión borrosa, boca seca y dificultad para tragar y hablar. Suelen aparecer entre 12 y 36 horas después de comer. La toxina bloquea los nervios y puede paralizar los músculos de la respiración.</p>
      <p><strong>Si alguien tiene esos síntomas después de comer una conserva: guardia de inmediato.</strong> Hay un tratamiento (la antitoxina) que funciona mejor cuanto antes se da. Guardá el frasco para que lo analicen.</p>
      <p><strong>Lo más peligroso:</strong> según el INTA, una conserva con botulismo puede no cambiar de sabor, olor ni color. No se puede "probar a ver si está bien".</p>
      <p>Por ejemplo, Elsa quería hacer morrones en aceite como los de su abuela. Al leer esto entendió por qué su médica le había dicho que no: el morrón es de baja acidez y el aceite deja sin aire.</p>` },
    { titulo: "La regla de la acidez: pH 4,5", html: `
      <p class="idea">La bacteria del botulismo <strong>no crece en alimentos ácidos</strong>. La frontera es un <strong>pH de 4,5</strong>: por debajo, el alimento es ácido y se puede envasar en casa con baño María; por arriba, no.</p>
      <p>El <strong>pH</strong> es una medida de la acidez. Cuanto más bajo el número, más ácido. El jugo de limón tiene un pH cercano a 2; el agua, 7.</p>
      <pre><code>   2       3       4    4,5    5       6       7
   |-------|-------|-----|------|-------|-------|
 limón   vinagre  frutas │  tomate  zanahoria  agua
                         │  (al límite)  choclo, carnes
   ÁCIDOS: baño María    │   BAJA ACIDEZ: no en casa
</code></pre>
      <table>
        <tr><th>Ácidos (se pueden hacer en casa)</th><th>De baja acidez (no se envasan en casa)</th></tr>
        <tr><td>Durazno, damasco, ciruela, pera, manzana, frutilla, ananá, cítricos (según el INTA)</td><td>Morrón, berenjena, chaucha, choclo, espárrago, zanahoria, repollo</td></tr>
        <tr><td>Encurtidos en vinagre bien acidificados</td><td>Carnes, pescados, aves</td></tr>
        <tr><td>Mermeladas y dulces de fruta</td><td>Hongos, legumbres</td></tr>
      </table>
      <p><strong>El tomate está en el límite:</strong> según la variedad y la madurez puede pasar el 4,5. Por eso siempre se le agrega ácido (jugo de limón, ácido cítrico o vinagre), como verás en el módulo del tomate.</p>
      <p><strong>Acidificar</strong> es agregarle a un alimento un ácido (vinagre, jugo de limón o ácido cítrico) para bajar su pH por debajo de 4,5. Así se hacen los encurtidos: verduras de baja acidez que quedan seguras porque el vinagre las acidifica.</p>
      <p>Por ejemplo, Elsa puede hacer dulce de durazno (ácido) y tomate triturado con limón (acidificado), pero no arvejas al natural en frasco.</p>` },
    { titulo: "Qué no hacer en casa", html: `
      <p class="idea">Los alimentos de baja acidez solo se pueden esterilizar a más de 115 °C, con <strong>autoclave</strong> (olla a presión industrial con control). La guía de la UNLP recomienda <strong>no hacer este tipo de conservas en casa</strong>.</p>
      <table>
        <tr><th>No hagas en casa para guardar</th><th>Por qué</th></tr>
        <tr><td>Verduras al natural (arvejas, choclo, chauchas, espárragos)</td><td>Baja acidez: el baño María no alcanza</td></tr>
        <tr><td>Morrones, ajo, hierbas u hongos en aceite</td><td>El Senasa los nombra entre los más sensibles: baja acidez y sin aire</td></tr>
        <tr><td>Carnes, pescados, aves en frasco</td><td>Baja acidez</td></tr>
        <tr><td>Aceites saborizados (con ajo o romero adentro)</td><td>Lo mismo: el aceite deja sin aire</td></tr>
        <tr><td>Recetas "de la abuela" sin tiempos ni ácido medido</td><td>No sabés si llegan a pH 4,5</td></tr>
        <tr><td>Cambiar las cantidades de una receta probada</td><td>Menos vinagre o limón puede dejarla insegura</td></tr>
      </table>
      <p>Un <strong>autoclave</strong> es un equipo que calienta a presión, por encima de los 100 °C del agua hirviendo. Una olla a presión común de cocina no tiene el control necesario para esto.</p>
      <p><strong>Métodos que no sirven</strong> (según la UNLP): olla sin tapa, horno, microondas, solo vapor. La sal y los conservantes caseros no reemplazan el tratamiento con calor.</p>
      <p><strong>¿Y si quiero morrones o ajo en aceite?</strong> Hacelos para comer en pocos días, guardados en la heladera, nunca para la alacena. Para guardar meses, hacelos en vinagre con una receta probada.</p>
      <p>Por ejemplo, la vecina de Elsa le regaló un frasco de berenjenas en aceite sin etiqueta. Siguiendo el consejo del Senasa (no consumir conservas de origen desconocido o sin etiqueta), no lo abrió y lo tiró.</p>` },
  ],
  practica: [
    "Hacé una lista de 6 alimentos que te gustaría conservar y anotá cuáles son ácidos y cuáles de baja acidez según la tabla.",
    "Escribí en un papel los 4 síntomas principales del botulismo y pegalo en la alacena.",
    "Revisá las conservas caseras que tengas en tu casa y anotá cuántas no tienen etiqueta ni fecha.",
  ],
  recursos: [
    { t: "UNLP (LIPA): Introducción a la elaboración de conservas (PDF)", url: "https://lipa.agro.unlp.edu.ar/wp-content/uploads/sites/29/2020/03/GUIA-CONSERVAS.pdf" },
    { t: "Senasa: pautas para la prevención del botulismo", url: "https://www.argentina.gob.ar/node/356889" },
    { t: "INTA: Manual de conservas, recetas caseras (PDF, 2018)", url: "https://www.argentina.gob.ar/sites/default/files/2023/08/inta_manual_de_recetas_para_elaborar_conservas_2018.pdf" },
  ],
  quiz: [
    { q: "¿Qué causa el botulismo?", opciones: ["Un virus de la gripe","Comer mucha azúcar","La toxina de una bacteria, Clostridium botulinum","El frío de la heladera"], correcta: 2, explicacion: "La toxina es la que enferma. \"Un virus\" tienta, pero es una bacteria y su toxina." },
    { q: "Tenés un frasco cerrado con morrones, sin vinagre, en la alacena. ¿Por qué es riesgoso?", opciones: ["Es de baja acidez, sin aire y a temperatura ambiente: lo que la bacteria necesita","No es riesgoso","Porque el vidrio es peligroso","Porque está oscuro"], correcta: 0, explicacion: "Se juntan las tres condiciones. \"No es riesgoso\" tienta porque así se hacía antes." },
    { q: "Si lavaste y herviste bien las verduras, ¿ya no hay riesgo de botulismo?", opciones: ["No, el hervor mata todo","No, el lavado alcanza","Solo si son de la verdulería","Sí hay: las esporas aguantan el hervor"], correcta: 3, explicacion: "Las esporas resisten 100 °C. \"El hervor mata todo\" tienta, pero no a las esporas." },
    { q: "Al día siguiente de comer una conserva casera, alguien ve borroso, tiene la boca seca y le cuesta tragar. ¿Qué hacés?", opciones: ["Espero a ver si se pasa","Lo llevo a una guardia de inmediato y guardo el frasco","Le doy un té","Tiro el frasco para que nadie más coma"], correcta: 1, explicacion: "El tratamiento funciona mejor cuanto antes. Tirar el frasco tienta, pero sirve para analizarlo." },
    { q: "Si una conserva huele y se ve normal, ¿seguro que no tiene botulismo?", opciones: ["Sí, seguro","Sí, si la probás y está rica","No: la toxina puede no cambiar sabor, olor ni color","Sí, si el frasco es nuevo"], correcta: 2, explicacion: "No se detecta probando. \"Si la probás\" tienta, pero es justamente lo peligroso." },
    { q: "¿Qué significa que un alimento tenga pH 3?", opciones: ["Que es ácido","Que es neutro como el agua","Que es de baja acidez","Que está vencido"], correcta: 0, explicacion: "Cuanto más bajo el pH, más ácido. \"Baja acidez\" tienta por el número bajo, pero es al revés." },
    { q: "Querés hacer conservas en casa con baño María. ¿Qué alimentos elegís?", opciones: ["Cualquiera","Solo carnes","Los de pH mayor a 4,5","Ácidos o acidificados, con pH menor a 4,5"], correcta: 3, explicacion: "El límite es 4,5. \"Cualquiera\" tienta, pero los de baja acidez necesitan autoclave." },
    { q: "Si elsa quiere guardar duraznos, ¿qué tipo de alimento es?", opciones: ["De baja acidez","Ácido: se puede envasar con baño María siguiendo la receta","Imposible de conservar","Igual que la carne"], correcta: 1, explicacion: "El durazno está en la lista de ácidos. \"Baja acidez\" tienta si pensás que es dulce, pero dulce no es lo mismo que poco ácido." },
    { q: "¿Por qué al tomate siempre se le agrega limón o ácido cítrico?", opciones: ["Solo por el sabor","Para que sea más rojo","Porque está en el límite y puede pasar el pH 4,5","No hace falta"], correcta: 2, explicacion: "Es una medida de seguridad. \"Solo por el sabor\" tienta, pero es para bajar el pH." },
    { q: "Querés hacer arvejas al natural en frasco para el invierno. ¿Qué hacés?", opciones: ["No las envaso en casa: son de baja acidez y necesitan autoclave","Las hago con baño María más largo","Les pongo mucha sal","Uso el microondas"], correcta: 0, explicacion: "La UNLP recomienda no hacerlas en casa. Más tiempo de baño María tienta, pero harían falta 7 a 11 horas." },
    { q: "Querés ajo en aceite. ¿Cómo lo hacés seguro?", opciones: ["En frasco cerrado en la alacena por meses","Con más aceite","Con el frasco al sol","Para comer en pocos días, en la heladera; nunca para la alacena"], correcta: 3, explicacion: "Baja acidez y sin aire. \"Más aceite\" tienta, pero tapa más el aire." },
    { q: "Te regalan una conserva casera sin etiqueta y no sabés quién la hizo. ¿Qué hacés?", opciones: ["La pruebo un poquito","No la consumo","La como si se ve bien","Se la doy a los chicos"], correcta: 1, explicacion: "El Senasa recomienda no consumir conservas de origen desconocido. Probar un poquito tienta, pero basta muy poca toxina." },
  ],
},
{
  id: "higiene",
  icono: "🧼",
  titulo: "Higiene, frascos y tapas",
  nivel: "Básico",
  objetivos: [
    "Lavar manos, utensilios y materias primas siguiendo las guías",
    "Esterilizar frascos y preparar tapas nuevas",
    "Llenar los frascos dejando el espacio de cabeza correcto",
  ],
  lecciones: [
    { titulo: "Limpiar, desinfectar y esterilizar no es lo mismo", html: `
      <p class="idea">Antes de envasar, todo tiene que estar limpio. Pero <strong>limpiar</strong>, <strong>desinfectar</strong> y <strong>esterilizar</strong> son tres cosas distintas, y en las conservas hacen falta las tres.</p>
      <table>
        <tr><th>Proceso</th><th>Qué hace</th><th>Cómo (según la UNLP)</th></tr>
        <tr><td>Limpiar</td><td>Saca la suciedad que se ve</td><td>Agua, detergente y frotar</td></tr>
        <tr><td>Desinfectar</td><td>Mata la mayoría de los microbios de una superficie</td><td>Lavandina: 1 cucharadita de té por litro de agua; o alcohol: 2 partes de alcohol y 1 de agua</td></tr>
        <tr><td>Esterilizar</td><td>Elimina todos los microbios</td><td>Frascos sumergidos en agua hirviendo</td></tr>
      </table>
      <p><strong>Primero limpiar, después desinfectar:</strong> los desinfectantes no funcionan bien sobre la suciedad.</p>
      <p><strong>Las manos:</strong> lavalas con agua y jabón entre 20 y 25 segundos, frotando palmas, dorso, entre los dedos, uñas y pulgares. Antes de empezar, después de ir al baño y después de tocar algo sucio. Si tenés una herida en las manos, cubrila con algo impermeable; si tenés diarrea o una infección en la piel, no elabores.</p>
      <p><strong>Las frutas y verduras:</strong> lavalas con agua potable abundante. Si usás agua de pozo, la UNLP indica agregar 4 ml de lavandina (una cuchara de té) por litro. Descartá las que tengan podredumbre, hongos o golpes.</p>
      <p><strong>La mesada y los utensilios:</strong> evitá la madera, que no se puede desinfectar bien. Usá tablas plásticas y cucharas de acero o de silicona.</p>
      <p>Por ejemplo, Elsa usaba la cuchara de madera de siempre para revolver el dulce. La cambió por una de acero y guardó la de madera para otras comidas.</p>` },
    { titulo: "Frascos y tapas", video: {"id":"S9uUV0EySC8","t":"Cómo esterilizar frascos para conservas · Tenedor Libre (3:19)"}, html: `
      <p class="idea">Los frascos de vidrio se pueden reusar si están sanos, pero <strong>las tapas tienen que ser nuevas cada vez</strong>. Los frascos se esterilizan <strong>sumergidos en agua hirviendo</strong>.</p>
      <pre><code>Esterilizar frascos (guía de la UNLP)
1. Lavar frascos con agua caliente y detergente; enjuagar muy bien.
2. Sumergirlos por completo en una olla con agua hirviendo, 5 minutos.
3. Sacarlos con una pinza, escurrir y dejarlos boca abajo
   sobre un repasador limpio hasta llenarlos.
Tapas: nuevas, desinfectadas con alcohol al 70%
(2 partes de alcohol y 1 de agua).</code></pre>
      <table>
        <tr><th>Usar</th><th>No usar</th></tr>
        <tr><td>Frascos de vidrio para conservas o de mermelada comprada, sanos</td><td>Frascos con rajaduras o bordes saltados</td></tr>
        <tr><td>Tapas metálicas nuevas con su junta de goma</td><td>Tapas viejas, abolladas, oxidadas o con la junta dañada</td></tr>
        <tr><td>Agua hirviendo para esterilizar</td><td>Horno o microondas (la UNLP no los recomienda)</td></tr>
      </table>
      <p>La <strong>junta</strong> es el anillo de goma que tiene la tapa por dentro. Con el calor se ablanda, deja salir el aire y, al enfriarse, cierra herméticamente. Una junta usada ya no cierra bien.</p>
      <p><strong>Si el video que ves usa horno o microondas,</strong> seguí el método de agua hirviendo de esta lección, que es el que recomiendan las guías.</p>
      <p><strong>Cuidado con las quemaduras:</strong> usá pinza para frascos o una espumadera, guantes de cocina secos y no apoyes vidrio caliente sobre una superficie fría o mojada: se puede romper.</p>
      <p>Por ejemplo, Elsa juntó 20 frascos de mermelada comprada. Descartó 3 que tenían el borde saltado y compró 17 tapas nuevas del mismo tamaño.</p>` },
    { titulo: "Llenar y cerrar: el espacio de cabeza", html: `
      <p class="idea">El frasco no se llena hasta el borde: se deja un <strong>espacio de cabeza</strong> de <strong>1 cm</strong>. Ese aire hace falta para que se forme el <strong>vacío</strong> al enfriarse.</p>
      <pre><code>        ┌───────┐  ← tapa nueva
        │       │  ← 1 cm de espacio de cabeza
        │~~~~~~~│  ← nivel del líquido
        │ ░░░░░ │
        │ ░░░░░ │  ← los sólidos, tapados por el líquido
        └───────┘</code></pre>
      <table>
        <tr><th>Paso</th><th>Por qué</th></tr>
        <tr><td>Llenar en caliente (alimento y líquido calientes)</td><td>Saca más aire y forma mejor vacío</td></tr>
        <tr><td>Dejar 1 cm de espacio de cabeza</td><td>Para que el alimento se expanda y se forme el vacío</td></tr>
        <tr><td>Que los sólidos queden cubiertos de líquido</td><td>Lo que queda afuera se oscurece y se puede alterar</td></tr>
        <tr><td>Sacar las burbujas con una espátula limpia</td><td>El aire atrapado afecta el vacío</td></tr>
        <tr><td>Limpiar el borde con papel descartable húmedo</td><td>Un resto en el borde impide que la tapa selle</td></tr>
        <tr><td>Cerrar firme, sin forzar</td><td>Si se aprieta de más, el aire no puede salir</td></tr>
      </table>
      <p>El <strong>vacío</strong> es la falta de aire dentro del frasco. Se forma cuando el frasco caliente se enfría: el aire de adentro se achica y la tapa queda "chupada" hacia abajo.</p>
      <p><strong>Embudo de boca ancha:</strong> ayuda a llenar sin ensuciar el borde. Se consigue en bazares.</p>
      <p>Por ejemplo, Elsa llenaba los frascos hasta arriba "para que no entre aire". Después se dio cuenta de que así las tapas no hacían vacío: ahora deja 1 cm y le cierran todos.</p>` },
  ],
  practica: [
    "Prepará una solución desinfectante con 1 cucharadita de lavandina por litro y anotá para qué superficies la vas a usar.",
    "Revisá tus frascos y anotá cuántos están sanos, cuántos descartás y cuántas tapas nuevas necesitás.",
    "Esterilizá 3 frascos con el método de la lección y anotá cuántos minutos hirvieron.",
    "Llená un frasco con agua caliente dejando 1 cm de espacio de cabeza y medilo con una regla.",
  ],
  recursos: [
    { t: "UNLP (LIPA): Introducción a la elaboración de conservas (PDF)", url: "https://lipa.agro.unlp.edu.ar/wp-content/uploads/sites/29/2020/03/GUIA-CONSERVAS.pdf" },
    { t: "ANMAT: Manual de manipulación higiénica de alimentos (PDF, 2024)", url: "https://www.argentina.gob.ar/sites/default/files/anmat_manual_manipuladores_de_alimentos_version_2024.pdf" },
    { t: "INTA: Manual de conservas, recetas caseras (PDF, 2018)", url: "https://www.argentina.gob.ar/sites/default/files/2023/08/inta_manual_de_recetas_para_elaborar_conservas_2018.pdf" },
  ],
  quiz: [
    { q: "Querés matar los microbios de la mesada. ¿Qué hacés primero?", opciones: ["Le echo lavandina sobre la suciedad","Solo la seco","La limpio con agua y detergente, y después la desinfecto","La esterilizo con fuego"], correcta: 2, explicacion: "Los desinfectantes no funcionan bien sobre la suciedad. La lavandina directo tienta por rápido." },
    { q: "¿Cuánta lavandina usás por litro de agua para desinfectar, según la UNLP?", opciones: ["1 cucharadita de té","Medio litro","Una taza","Nada, alcanza con agua"], correcta: 0, explicacion: "Poca cantidad alcanza. Una taza tienta para \"asegurarse\", pero es demasiado." },
    { q: "Tenés una herida en un dedo y vas a hacer dulce. ¿Qué hacés?", opciones: ["La dejo al aire","No me lavo las manos para no mojarla","Nada","La curo y la cubro con algo impermeable"], correcta: 3, explicacion: "Así no contaminás el alimento. No lavarte tienta para cuidar la herida, pero es peor." },
    { q: "Usás agua de pozo para lavar las frutas. ¿Qué indica la UNLP?", opciones: ["Usarla así","Agregar 4 ml de lavandina (una cuchara de té) por litro","Hervirla con azúcar","Agregar vinagre"], correcta: 1, explicacion: "El agua de pozo puede no ser potable. Usarla así tienta, pero puede traer microbios." },
    { q: "Vas a revolver el dulce. ¿Qué cuchara usás?", opciones: ["La de madera de siempre","Una de plástico descartable cualquiera","Una de acero o de silicona","La mano"], correcta: 2, explicacion: "La madera no se desinfecta bien. La de siempre tienta por costumbre." },
    { q: "¿Cómo esterilizás los frascos según la guía de la UNLP?", opciones: ["Sumergidos en agua hirviendo 5 minutos","En el microondas","En el horno","Enjuagados con agua tibia"], correcta: 0, explicacion: "La UNLP no recomienda horno ni microondas. El horno tienta porque se ve en videos." },
    { q: "Tenés tapas de un frasco de mermelada que ya usaste. ¿Las reusás?", opciones: ["Sí, si las lavo","Sí, si no están oxidadas","Sí, si las hiervo","No: las tapas tienen que ser nuevas"], correcta: 3, explicacion: "La junta usada ya no cierra bien. Lavarlas tienta, pero la junta sigue gastada." },
    { q: "Un frasco tiene el borde saltado. ¿Qué hacés?", opciones: ["Lo uso igual","Lo descarto para conservas","Lo uso con más tapa","Lo lleno menos"], correcta: 1, explicacion: "El borde dañado no sella. Usarlo tienta para no perder un frasco." },
    { q: "Si sacás un frasco hirviendo y lo apoyás en la mesada mojada, ¿qué puede pasar?", opciones: ["Nada","Que se esterilice más","Que se rompa por el cambio de temperatura","Que haga vacío"], correcta: 2, explicacion: "El vidrio caliente se raja con lo frío o mojado. \"Nada\" tienta porque no siempre pasa." },
    { q: "¿Cuánto espacio de cabeza dejás en el frasco?", opciones: ["1 cm","Nada, hasta el borde","La mitad del frasco","5 cm"], correcta: 0, explicacion: "Hace falta para que se forme el vacío. Hasta el borde tienta \"para que no entre aire\", pero impide el vacío." },
    { q: "Llenaste el frasco y quedó dulce en el borde. ¿Qué hacés?", opciones: ["Cierro igual","Lo limpio con el dedo","Le pongo más dulce","Limpio el borde con papel descartable húmedo"], correcta: 3, explicacion: "Un resto en el borde impide sellar. Limpiarlo con el dedo tienta, pero lo ensuciás." },
    { q: "Los pedazos de durazno quedan por arriba del almíbar. ¿Qué hacés?", opciones: ["Lo dejo así","Agrego líquido o acomodo para que queden cubiertos, respetando 1 cm","Lleno hasta el borde","Saco todo el líquido"], correcta: 1, explicacion: "Los sólidos se cubren. Llenar hasta el borde tienta, pero sacás el espacio de cabeza." },
  ],
},
{
  id: "bano-maria",
  icono: "♨️",
  titulo: "El baño María y el vacío",
  nivel: "Intermedio",
  objetivos: [
    "Procesar frascos en baño María contando el tiempo desde el hervor",
    "Respetar los tiempos de cada receta sin acortarlos",
    "Comprobar el vacío y decidir qué hacer con un frasco que no selló",
  ],
  lecciones: [
    { titulo: "El equipo y el paso a paso", video: {"id":"z0y9zJTGtNs","t":"La mejor técnica para conservas al baño María · Lo Intentamos - Try It (6:19)"}, html: `
      <p class="idea">El <strong>baño María</strong> es hervir los frascos llenos y cerrados, totalmente tapados por agua, durante el tiempo que dice la receta. Es el tratamiento con calor para los alimentos ácidos.</p>
      <table>
        <tr><th>Equipo</th><th>Para qué</th></tr>
        <tr><td>Olla profunda con tapa</td><td>Que el agua cubra los frascos al menos 2,5 cm</td></tr>
        <tr><td>Rejilla o un repasador doblado en el fondo</td><td>Que los frascos no toquen el fondo y no se rompan</td></tr>
        <tr><td>Pinza para frascos</td><td>Sacarlos sin quemarte</td></tr>
        <tr><td>Reloj o alarma</td><td>Contar el tiempo exacto</td></tr>
      </table>
      <pre><code>Baño María (guía de la UNLP)
1. Olla con agua hasta la mitad y la rejilla en el fondo.
2. Frascos llenos y cerrados, parados, sin tocarse entre sí.
3. Agregar agua caliente hasta que cubra las tapas 2,5 cm.
4. Tapar la olla y esperar el hervor fuerte.
5. Recién ahí empezar a contar el tiempo de la receta.
6. Mantener el hervor todo el tiempo; si baja el agua, agregar agua hirviendo.
7. Apagar, esperar 5 minutos y sacar los frascos.
8. Apoyarlos sobre un repasador, sin volver a ajustar las tapas.</code></pre>
      <p><strong>Ojo con el tiempo:</strong> una olla grande con frascos llenos puede tardar de 20 a 40 minutos en llegar a hervir. Ese tiempo <strong>no cuenta</strong>: se cuenta desde que hierve fuerte.</p>
      <p><strong>Seguridad:</strong> es mucha agua hirviendo. Mangos hacia adentro, chicos lejos de la cocina, guantes secos y la tapa de la olla abierta hacia el lado contrario a tu cara.</p>
      <p>Por ejemplo, la primera vez Elsa empezó a contar apenas puso la olla al fuego. Tardó 30 minutos en hervir, así que sus frascos recibieron mucho menos tratamiento del que pedía la receta. Los volvió a procesar.</p>` },
    { titulo: "Los tiempos se respetan", html: `
      <p class="idea">El tiempo de cada receta está calculado para eliminar los microbios. Se puede hacer <strong>más largo</strong>, pero <strong>nunca más corto</strong>.</p>
      <table>
        <tr><th>Receta (guía de la UNLP)</th><th>Frasco</th><th>Tiempo de baño María desde el hervor</th></tr>
        <tr><td>Puré de frutas, acidificado</td><td>Medio litro</td><td>15 minutos</td></tr>
        <tr><td>Duraznos en mitades en almíbar</td><td>Medio litro</td><td>25 minutos</td></tr>
        <tr><td>Tomate triturado, con limón o ácido cítrico</td><td>Medio litro</td><td>35 minutos</td></tr>
        <tr><td>Tomates enteros en su jugo, con limón o ácido cítrico</td><td>473 ml</td><td>85 minutos</td></tr>
        <tr><td>Pimientos en vinagre</td><td>Medio litro</td><td>5 minutos</td></tr>
      </table>
      <p><strong>El tiempo depende del alimento y del tamaño del frasco:</strong> un frasco más grande tarda más en calentarse en el centro. Si usás frascos más grandes que los de la receta, no alcanza con el mismo tiempo: buscá una receta para ese tamaño.</p>
      <p><strong>Cocinar antes no reemplaza el baño María:</strong> la UNLP lo aclara, porque al envasar el alimento se puede volver a contaminar.</p>
      <p><strong>¿Y en la altura?</strong> En lugares altos el agua hierve a menos de 100 °C, y las guías internacionales indican alargar los tiempos. Si vivís en la Puna o en zonas altas de la cordillera, buscá recetas adaptadas a la altura.</p>
      <p>Por ejemplo, Elsa tenía frascos de 1 litro y la receta de duraznos era para medio litro. En vez de inventar un tiempo, usó frascos de medio litro.</p>` },
    { titulo: "Comprobar el vacío", html: `
      <p class="idea">Cuando los frascos se enfrían (unas 12 a 24 horas después), se revisa que la tapa haya hecho <strong>vacío</strong>. Un frasco sin vacío no se guarda en la alacena.</p>
      <table>
        <tr><th>Prueba (guía de la UNLP)</th><th>Selló bien</th><th>No selló</th></tr>
        <tr><td>Apretar el centro de la tapa con el dedo</td><td>No se mueve</td><td>Sube y baja ("hace clic")</td></tr>
        <tr><td>Golpear la tapa con una cucharita</td><td>Sonido agudo</td><td>Sonido sordo</td></tr>
        <tr><td>Mirar la tapa a la altura de los ojos</td><td>Curvada hacia abajo en el centro</td><td>Plana o abombada</td></tr>
        <tr><td>Sumergir el frasco en agua (también sirve para tapa corona)</td><td>Sin burbujas</td><td>Salen burbujas</td></tr>
      </table>
      <pre><code>Si un frasco no selló (antes de 24 horas):
→ cambiar la tapa por una nueva y volver a procesar con el tiempo completo, o
→ guardarlo en la heladera y consumirlo en pocos días.
Nunca a la alacena.</code></pre>
      <p><strong>No vuelvas a ajustar las tapas</strong> después del baño María: puede romper el sello.</p>
      <p><strong>Una tapa abombada más adelante,</strong> en un frasco que había sellado bien, es una alarma: indica que algo está produciendo gas adentro. Se tira sin abrir (lo vemos en el módulo de guardar).</p>
      <p>Por ejemplo, de 12 frascos de duraznos, a Elsa uno le hacía clic. Lo puso en la heladera y lo comieron esa semana; los otros 11 fueron a la alacena con etiqueta.</p>` },
  ],
  practica: [
    "Prepará la olla para el baño María con agua, sin frascos, y medí cuántos minutos tarda en hervir fuerte; anotalo.",
    "Hacé una tabla con 3 recetas que quieras hacer, el tamaño de frasco y el tiempo de baño María de cada una.",
    "Después de tu primera tanda, hacé 2 pruebas de vacío en cada frasco y anotá cuántos sellaron.",
  ],
  recursos: [
    { t: "UNLP (LIPA): Introducción a la elaboración de conservas (PDF)", url: "https://lipa.agro.unlp.edu.ar/wp-content/uploads/sites/29/2020/03/GUIA-CONSERVAS.pdf" },
    { t: "National Center for Home Food Preservation, Universidad de Georgia (en inglés)", url: "https://nchfp.uga.edu/" },
    { t: "INTA: Manual de conservas, recetas caseras (PDF, 2018)", url: "https://www.argentina.gob.ar/sites/default/files/2023/08/inta_manual_de_recetas_para_elaborar_conservas_2018.pdf" },
  ],
  quiz: [
    { q: "¿Cuánta agua tiene que haber sobre las tapas en el baño María?", opciones: ["Hasta la mitad del frasco","Que apenas toque la tapa","Al menos 2,5 cm","No importa"], correcta: 2, explicacion: "Los frascos tienen que quedar totalmente tapados. \"Hasta la mitad\" tienta, pero la parte de arriba no se calienta igual." },
    { q: "¿Para qué va una rejilla o un repasador en el fondo de la olla?", opciones: ["Para que los frascos no toquen el fondo y no se rompan","Para que hierva más rápido","Para darle sabor","No hace falta"], correcta: 0, explicacion: "El fondo caliente puede romper el vidrio. \"No hace falta\" tienta, pero se rompen frascos." },
    { q: "Pusiste la olla al fuego a las 10 y empezó a hervir fuerte a las 10:30. La receta dice 25 minutos. ¿Hasta cuándo hervís?", opciones: ["Hasta las 10:25","Hasta las 10:30","Hasta las 11:25","Hasta las 10:55"], correcta: 3, explicacion: "Se cuenta desde el hervor fuerte. Las 10:25 tienta si contás desde que pusiste la olla." },
    { q: "Durante el baño María baja el nivel del agua. ¿Qué hacés?", opciones: ["Agrego agua fría","Agrego agua hirviendo para que siga tapando los frascos","Lo dejo así","Saco los frascos antes"], correcta: 1, explicacion: "Agua hirviendo para no cortar el hervor. El agua fría tienta por rápida, pero corta el tratamiento." },
    { q: "Terminó el tiempo. ¿Qué hacés con los frascos?", opciones: ["Los dejo enfriar dentro del agua toda la noche","Les ajusto bien las tapas","Apago, espero 5 minutos y los saco a un repasador, sin ajustar las tapas","Los pongo en agua helada enseguida"], correcta: 2, explicacion: "Así lo indica la UNLP. Ajustar las tapas tienta para \"asegurar\", pero rompe el sello." },
    { q: "Si la receta dice 35 minutos y estás apurado, ¿podés hacer 20?", opciones: ["No: el tiempo se puede alargar, pero nunca acortar","Sí, si el agua hierve fuerte","Sí, si los frascos son nuevos","Sí, si después los guardás en la heladera"], correcta: 0, explicacion: "El tiempo está calculado para eliminar microbios. \"Si hierve fuerte\" tienta, pero no compensa." },
    { q: "Tenés frascos de 1 litro y la receta es para medio litro. ¿Qué hacés?", opciones: ["Uso el mismo tiempo","Divido el tiempo a la mitad","Invento un tiempo","Uso frascos de medio litro o busco una receta para 1 litro"], correcta: 3, explicacion: "Un frasco más grande tarda más en calentarse. El mismo tiempo tienta, pero no alcanza en el centro." },
    { q: "Si cocinaste bien el dulce antes de envasar, ¿hace falta el baño María?", opciones: ["No, ya está cocido","Sí: al envasar se puede volver a contaminar","Solo si hace calor","Solo para frascos grandes"], correcta: 1, explicacion: "La UNLP dice que la cocción no lo reemplaza. \"Ya está cocido\" tienta, pero el envasado puede contaminar." },
    { q: "Vivís en una zona muy alta de la cordillera. ¿Qué tenés en cuenta?", opciones: ["Nada, es igual","Acortar los tiempos","El agua hierve a menos de 100 °C y hay que buscar recetas adaptadas a la altura","Usar menos agua"], correcta: 2, explicacion: "Con menos temperatura hace falta más tiempo. \"Es igual\" tienta porque igual se ve hervir." },
    { q: "Si apretás el centro de la tapa y sube y baja, ¿qué significa?", opciones: ["Que no hizo vacío","Que está perfecto","Que tiene botulismo seguro","Que hay que ajustarla"], correcta: 0, explicacion: "Sin vacío no se guarda en la alacena. Ajustarla tienta, pero no arregla el sello." },
    { q: "Golpeás la tapa con una cucharita y suena sordo. ¿Qué hacés?", opciones: ["Lo guardo igual en la alacena","Lo golpeo más fuerte","Lo regalo","Lo trato como frasco sin sellar: tapa nueva y reproceso, o heladera y consumo rápido"], correcta: 3, explicacion: "Sonido sordo es mal sellado. Guardarlo igual tienta, pero sin vacío no está protegido." },
    { q: "Un frasco no selló y no querés reprocesarlo. ¿Qué hacés?", opciones: ["Lo pongo en la alacena","Lo guardo en la heladera y lo consumo en pocos días","Lo dejo al sol","Lo congelo con la tapa floja y lo olvido"], correcta: 1, explicacion: "En la heladera y pronto. La alacena tienta por lugar, pero no es seguro." },
  ],
},
{
  id: "mermeladas",
  icono: "🍓",
  titulo: "Mermeladas y dulces",
  nivel: "Intermedio",
  objetivos: [
    "Explicar el papel del azúcar, el ácido y la pectina en un dulce",
    "Hacer una mermelada con las proporciones del INTA",
    "Reconocer el punto con la prueba del plato frío",
  ],
  lecciones: [
    { titulo: "Azúcar, ácido y pectina", html: `
      <p class="idea">Una mermelada se conserva y queda firme por tres cosas juntas: el <strong>azúcar</strong>, el <strong>ácido</strong> y la <strong>pectina</strong> de la fruta.</p>
      <table>
        <tr><th>Ingrediente</th><th>Qué hace</th></tr>
        <tr><td>Azúcar</td><td>Conserva: con mucha azúcar los microbios no tienen agua libre para crecer. También da consistencia y sabor</td></tr>
        <tr><td>Ácido (jugo de limón o ácido cítrico)</td><td>Ayuda a que la pectina "agarre", da brillo y sabor</td></tr>
        <tr><td>Pectina</td><td>Sustancia natural de la fruta (sobre todo en cáscaras y semillas) que hace que el dulce gelifique</td></tr>
      </table>
      <p><strong>Gelificar</strong> es pasar de líquido a una consistencia firme, como una gelatina.</p>
      <table>
        <tr><th>Frutas ricas en pectina (según el INTA)</th><th>Frutas pobres en pectina</th></tr>
        <tr><td>Higo, manzana, membrillo, cítricos, ciruela</td><td>Frutilla, cereza, damasco, tomate, uva</td></tr>
        <tr><td>Dan dulces firmes</td><td>Dan dulces más sueltos</td></tr>
      </table>
      <p><strong>Para frutas pobres en pectina,</strong> el INTA sugiere agregar puré de manzana o membrillo (menos del 10% de la fruta) antes del azúcar.</p>
      <p><strong>Ácido:</strong> según el INTA, 4 cucharadas de jugo de limón equivalen a 1 cucharadita al ras de ácido cítrico. Si la fruta necesita ácido, se agrega antes de cocinarla.</p>
      <p><strong>Dulces "bajos en azúcar":</strong> con menos azúcar se conservan peor. Si los hacés, guardalos en la heladera una vez abiertos y consumilos rápido, o buscá recetas probadas para eso.</p>
      <p>Por ejemplo, la mermelada de frutillas de Elsa quedaba siempre aguada. Le agregó un poco de puré de manzana y el jugo de limón al principio, y quedó firme.</p>` },
    { titulo: "Paso a paso: mermelada de frutillas", video: {"id":"Z6PDUwTNbXs","t":"Mermelada de frutillas · Cocineros Argentinos (6:02)"}, html: `
      <p class="idea">Una receta probada se sigue tal cual. Esta es la <strong>mermelada de frutillas del manual del INTA</strong>.</p>
      <pre><code>Mermelada de frutillas (manual del INTA)
Frutillas maduras ... 1 kg
Azúcar .............. 800 g
Jugo de limón ....... 1 cucharada

1. Lavar las frutillas y sacarles los cabitos.
2. Ponerlas con el jugo de limón en una cacerola y hervir 1 minuto.
3. Agregar el azúcar.
4. Hervir a fuego lento, revolviendo, hasta el punto.
5. Envasar en caliente en frascos esterilizados, con 1 cm de espacio de cabeza.
6. Limpiar bordes, cerrar con tapas nuevas.</code></pre>
      <table>
        <tr><th>Consejo del INTA</th><th>Por qué</th></tr>
        <tr><td>No agregar el azúcar hasta que la fruta esté bien cocida</td><td>Si no, la fruta queda dura</td></tr>
        <tr><td>Sacar la espuma blanca del principio</td><td>Son impurezas; la espuma fina del final no hace falta sacarla</td></tr>
        <tr><td>No cocinar de más</td><td>Queda oscura y con gusto a caramelo o quemado</td></tr>
        <tr><td>Revolver con cuchara de acero o silicona</td><td>Para que no se pegue y por higiene</td></tr>
      </table>
      <p><strong>¿Y el baño María?</strong> Las guías de la UNLP y las internacionales indican procesar también las mermeladas en baño María para guardarlas en la alacena (por ejemplo, el puré de frutas acidificado lleva 15 minutos en frascos de medio litro). Si no lo hacés, guardalas en la heladera.</p>
      <p><strong>Cuidado con las salpicaduras:</strong> el dulce hirviendo pega y quema mucho más que el agua. Usá una cuchara de mango largo, ollas profundas y manga larga.</p>
      <p>Por ejemplo, con 3 kg de frutillas Elsa hizo 8 frascos de medio litro. Los procesó 15 minutos en baño María y los guardó con etiqueta.</p>` },
    { titulo: "El punto: la prueba del plato frío", html: `
      <p class="idea">El <strong>punto</strong> es el momento en que la mermelada ya tiene la concentración justa. Según el INTA, está a punto cuando llega a <strong>105 °C</strong>, a <strong>67 grados Brix</strong>, o cuando <strong>3 kg de azúcar dan 5 kg de dulce</strong>.</p>
      <p>Los <strong>grados Brix</strong> miden cuánta azúcar hay disuelta. Se miden con un refractómetro, un aparato que usan los productores. En casa hay formas más simples:</p>
      <table>
        <tr><th>Método</th><th>Cómo</th></tr>
        <tr><td>Plato frío (el más usado)</td><td>Poné una cucharadita en un plato frío y seco: si gelifica enseguida y al pasar el dedo queda el surco, está a punto</td></tr>
        <tr><td>Termómetro de cocina</td><td>Que llegue a 105 °C</td></tr>
        <tr><td>Peso</td><td>Pesá la olla vacía antes; cuando el dulce pesa 5/3 del azúcar que pusiste, está a punto</td></tr>
      </table>
      <pre><code>Ejemplo del método del peso
Azúcar que usaste: 1,8 kg
Dulce a punto = 1,8 × 5 ÷ 3 = 3 kg de dulce (sin contar la olla)</code></pre>
      <p><strong>Sin punto:</strong> la mermelada queda líquida y se conserva peor, porque tiene más agua libre. Según el INTA, uno de los motivos de moho es la falta de punto.</p>
      <p><strong>Pasada de punto:</strong> queda dura, oscura y con gusto a caramelo.</p>
      <p>Por ejemplo, Elsa dejó un plato en el freezer antes de empezar. A los 40 minutos puso una gota y al pasar el dedo quedó el surco: apagó y envasó.</p>` },
  ],
  practica: [
    "Elegí una fruta de estación, anotá si es rica o pobre en pectina y si va a necesitar ácido.",
    "Hacé la mermelada de frutillas del INTA con 1 kg de fruta y anotá cuántos frascos de medio litro salieron.",
    "Probá el punto con el plato frío cada 5 minutos y anotá en qué minuto quedó el surco.",
  ],
  recursos: [
    { t: "INTA: Manual de conservas, recetas caseras (PDF, 2018)", url: "https://www.argentina.gob.ar/sites/default/files/2023/08/inta_manual_de_recetas_para_elaborar_conservas_2018.pdf" },
    { t: "INTI: cuadernillo de mermeladas, dulces y confituras (PDF)", url: "https://app.inti.gob.ar/greenstone3/sites/localsite/collect/works/index/assoc/Cuad_Mer.dir/doc.pdf" },
    { t: "Curso de este sitio: Cocina básica", url: "https://pkeios.github.io/EiaLearning/cocina/" },
  ],
  quiz: [
    { q: "¿Qué hace el azúcar en una mermelada, además de endulzar?", opciones: ["Nada más","La hace ácida","Ayuda a conservarla: los microbios no tienen agua libre para crecer","Le saca la pectina"], correcta: 2, explicacion: "El azúcar conserva. \"Nada más\" tienta porque lo pensamos solo como dulce." },
    { q: "¿Qué es la pectina?", opciones: ["Una sustancia natural de la fruta que hace que el dulce gelifique","Un conservante químico","Un tipo de azúcar","Una bacteria"], correcta: 0, explicacion: "Está sobre todo en cáscaras y semillas. \"Conservante químico\" tienta porque se vende en sobres, pero es natural." },
    { q: "Tu mermelada de frutillas queda aguada. ¿Qué podés agregar según el INTA?", opciones: ["Agua","Más fuego hasta que se queme","Sal","Un poco de puré de manzana o membrillo y el ácido al principio"], correcta: 3, explicacion: "La frutilla es pobre en pectina. Más fuego tienta, pero se oscurece y se quema." },
    { q: "Querés usar ácido cítrico en vez de jugo de limón. ¿Cuánto equivale a 4 cucharadas de jugo?", opciones: ["4 cucharadas de ácido cítrico","1 cucharadita al ras de ácido cítrico","Media taza","Nada, no se puede cambiar"], correcta: 1, explicacion: "Según el INTA, 4 cucharadas de jugo son 1 cucharadita. 4 cucharadas de ácido tienta, pero sería muchísimo." },
    { q: "Hacés un dulce con mucho menos azúcar que la receta. ¿Qué cuidado tenés?", opciones: ["Ninguno","Lo guardo al sol","Se conserva peor: heladera una vez abierto y consumo rápido, o una receta probada para eso","Le saco el baño María"], correcta: 2, explicacion: "Menos azúcar, menos conservación. \"Ninguno\" tienta porque se ve igual." },
    { q: "Querés hacer la mermelada de frutillas del INTA con 1 kg de frutillas. ¿Cuánta azúcar usás?", opciones: ["800 g","100 g","2 kg","La que quieras"], correcta: 0, explicacion: "Así está probada la receta. \"La que quieras\" tienta, pero cambia el punto y la conservación." },
    { q: "¿Cuándo agregás el azúcar?", opciones: ["Antes de lavar la fruta","Al final, después de envasar","Nunca","Cuando la fruta ya está cocida"], correcta: 3, explicacion: "Si se agrega antes, la fruta queda dura. \"Antes de lavar\" tienta por adelantar, pero no." },
    { q: "Al principio de la cocción aparece espuma blanca. ¿Qué hacés?", opciones: ["La revuelvo para que se mezcle","La saco: son impurezas","Apago el fuego","Le agrego agua"], correcta: 1, explicacion: "La del principio se retira. Revolverla tienta, pero queda turbia." },
    { q: "Querés guardar la mermelada en la alacena varios meses. ¿Qué hacés además de envasarla en caliente?", opciones: ["Nada más","Le pongo sal","La proceso en baño María","La dejo destapada un día"], correcta: 2, explicacion: "Las guías indican baño María para la alacena. \"Nada más\" tienta porque muchos no lo hacen." },
    { q: "Si ponés una gota en un plato frío y al pasar el dedo queda el surco, ¿qué significa?", opciones: ["Que la mermelada está a punto","Que está quemada","Que le falta azúcar","Que hay que agregar agua"], correcta: 0, explicacion: "Gelificó enseguida. \"Quemada\" tienta, pero quemada se nota en el color y el olor." },
    { q: "Usaste 1,8 kg de azúcar. Según el método del peso, ¿cuánto tiene que pesar el dulce a punto?", opciones: ["1,8 kg","5 kg","9 kg","3 kg"], correcta: 3, explicacion: "3 kg de azúcar dan 5 kg de dulce: 1,8 × 5 ÷ 3 = 3. 5 kg tienta porque es el número de la regla." },
    { q: "Tu mermelada quedó oscura y con gusto a caramelo. ¿Qué pasó?", opciones: ["Le faltó cocción","Se cocinó de más","Tenía mucha fruta","Era fruta de estación"], correcta: 1, explicacion: "El exceso de cocción la oscurece. \"Le faltó\" tienta, pero eso la deja líquida." },
  ],
},
{
  id: "tomate",
  icono: "🍅",
  titulo: "Tomate en frasco, siempre con ácido",
  nivel: "Intermedio",
  objetivos: [
    "Pelar y preparar tomates para envasar",
    "Acidificar el tomate con jugo de limón o ácido cítrico en la cantidad de la receta",
    "Hacer tomate triturado con el tiempo de baño María correcto",
  ],
  lecciones: [
    { titulo: "Por qué el tomate lleva ácido", html: `
      <p class="idea">El tomate es ácido, pero <strong>está muy cerca del límite de pH 4,5</strong>: según la variedad, la madurez y la zona puede pasarlo. Por eso <strong>siempre se le agrega ácido</strong>, aunque la receta de la abuela no lo hiciera.</p>
      <table>
        <tr><th>Ácido</th><th>Cantidad por kg de tomate (guía de la UNLP)</th><th>Cómo es</th></tr>
        <tr><td>Jugo de limón</td><td>2 cucharadas soperas</td><td>Fácil de conseguir; usá limón exprimido o jugo envasado de limón</td></tr>
        <tr><td>Ácido cítrico</td><td>1 cucharadita de té al ras</td><td>Polvo blanco que se vende en dietéticas y casas de repostería; no cambia el gusto</td></tr>
      </table>
      <p>El manual del INTA también propone <strong>vinagre</strong>: dos cucharadas por cada botella de un kilo de tomate, puré, triturado o salsa. Sea cual sea el ácido que elijas, <strong>la cantidad es la de la receta</strong>.</p>
      <p><strong>Lo que no reemplaza al ácido:</strong> la sal, el azúcar, el aceite ni las hierbas. La sal es solo para el gusto.</p>
      <p><strong>Tomates de calidad:</strong> maduros pero firmes, sin podredumbre ni partes blandas. Los tomates pasados o machucados pueden tener un pH más alto y más microbios.</p>
      <p>Por ejemplo, Elsa siempre hizo la salsa de su abuela sin limón y "nunca pasó nada". Aprendió que un riesgo bajo no es riesgo cero, y ahora agrega 2 cucharadas de jugo de limón por kilo.</p>` },
    { titulo: "Paso a paso: tomate triturado", html: `
      <p class="idea">Esta es la receta de <strong>tomate triturado</strong> de la guía de la UNLP, para frascos de medio litro. Se sigue tal cual.</p>
      <pre><code>Tomate triturado (guía de la UNLP)
1. Lavar los tomates y hacerles una cruz en la punta con un cuchillo.
2. Sumergirlos en agua hirviendo 1 a 3 minutos, hasta que la piel se separe.
3. Pasarlos a agua fría, sacar la piel y el cabito.
4. Sacar partes verdes o machucadas y cortar en cuartos.
5. Aplastar una sexta parte para que largue jugo y calentarla en una olla.
6. Cuando hierve, ir sumando el resto de los tomates, revolviendo.
7. Hervir 5 minutos.
8. Agregar por cada kg: 2 cucharadas soperas de jugo de limón
   o 1 cucharadita de té al ras de ácido cítrico.
   Sal a gusto (1 cuchara al ras por kg, si querés).
9. Llenar los frascos en caliente, con 4 a 8 mm de espacio de cabeza.
10. Sacar burbujas, limpiar bordes, cerrar con tapas nuevas.
11. Baño María: 35 minutos desde el hervor, frascos de medio litro.</code></pre>
      <table>
        <tr><th>Para hacer en una tanda</th><th>Cantidad aproximada</th></tr>
        <tr><td>Tomates</td><td>Unos 1,5 kg por frasco de medio litro (pierden agua y piel)</td></tr>
        <tr><td>Jugo de limón para 6 kg</td><td>12 cucharadas soperas</td></tr>
      </table>
      <p><strong>Pelar con la cruz:</strong> el agua hirviendo afloja la piel y el agua fría corta la cocción. Usá una espumadera y cuidado con las salpicaduras.</p>
      <p>Por ejemplo, Elsa procesó 6 kg de tomates: agregó 12 cucharadas de jugo de limón, llenó 4 frascos de medio litro y los hirvió 35 minutos contados desde el hervor.</p>` },
    { titulo: "Tomates enteros y salsas", html: `
      <p class="idea">Los <strong>tomates enteros en su jugo</strong> necesitan mucho más tiempo de baño María que el triturado: el calor tarda más en llegar al centro de un tomate entero.</p>
      <table>
        <tr><th>Preparación (guía de la UNLP)</th><th>Ácido por kg</th><th>Baño María</th></tr>
        <tr><td>Tomate triturado</td><td>2 cucharadas de jugo de limón o 1 cucharadita de ácido cítrico</td><td>35 min (medio litro)</td></tr>
        <tr><td>Tomates enteros en su jugo</td><td>Lo mismo</td><td>85 min (frasco de 473 ml)</td></tr>
      </table>
      <p><strong>¿Y una salsa con cebolla, morrón o ajo?</strong> Esas verduras son de baja acidez y suben el pH de la salsa. Una salsa así no sigue la receta del triturado.</p>
      <table>
        <tr><th>Opción segura</th><th>Cómo</th></tr>
        <tr><td>Envasar solo tomate (con ácido)</td><td>Y hacer la salsa cuando abrís el frasco, con cebolla y lo que quieras</td></tr>
        <tr><td>Hacer la salsa para la semana</td><td>Heladera y consumir en pocos días</td></tr>
        <tr><td>Hacer la salsa para varios meses</td><td>Freezer, en porciones</td></tr>
      </table>
      <p><strong>Ese es el truco de las conservas seguras:</strong> guardar el ingrediente base de forma simple y segura, y cocinar el plato completo cuando lo vas a comer.</p>
      <p>Por ejemplo, Elsa quería envasar su tuco con cebolla y morrón. En vez de eso envasó tomate triturado con limón; en invierno abre un frasco y hace el tuco en 20 minutos.</p>` },
  ],
  practica: [
    "Pelá 1 kg de tomates con el método de la cruz y anotá cuántos minutos tardó en aflojarse la piel.",
    "Calculá cuánto jugo de limón o ácido cítrico necesitás para 5 kg de tomate y anotalo.",
    "Hacé tomate triturado siguiendo la receta, anotá cuántos frascos salieron y cuántos sellaron.",
  ],
  recursos: [
    { t: "UNLP (LIPA): Introducción a la elaboración de conservas (PDF)", url: "https://lipa.agro.unlp.edu.ar/wp-content/uploads/sites/29/2020/03/GUIA-CONSERVAS.pdf" },
    { t: "INTA: Manual de conservas, recetas caseras (PDF, 2018)", url: "https://www.argentina.gob.ar/sites/default/files/2023/08/inta_manual_de_recetas_para_elaborar_conservas_2018.pdf" },
    { t: "National Center for Home Food Preservation, Universidad de Georgia (en inglés)", url: "https://nchfp.uga.edu/" },
  ],
  quiz: [
    { q: "¿Por qué se le agrega ácido al tomate si ya es ácido?", opciones: ["Solo por el sabor","Para que sea más rojo","Porque está cerca del límite de pH 4,5 y puede pasarlo","No hace falta"], correcta: 2, explicacion: "Es una medida de seguridad. \"Solo por el sabor\" tienta porque mucha gente no lo hace." },
    { q: "Vas a envasar 3 kg de tomate triturado con jugo de limón. ¿Cuánto usás?", opciones: ["6 cucharadas soperas","1 cucharada","3 cucharaditas","A gusto"], correcta: 0, explicacion: "2 cucharadas por kg. \"A gusto\" tienta, pero la cantidad es por seguridad." },
    { q: "Querés que el tomate no tenga gusto a limón. ¿Qué usás?", opciones: ["Nada de ácido","Más sal","Aceite","Ácido cítrico: 1 cucharadita al ras por kg"], correcta: 3, explicacion: "El ácido cítrico no cambia el gusto. \"Más sal\" tienta, pero la sal no acidifica." },
    { q: "¿La sal reemplaza al ácido en el tomate?", opciones: ["Sí, si es mucha","No: la sal es solo para el gusto","Sí, si es sal gruesa","Sí, en verano"], correcta: 1, explicacion: "Solo el ácido baja el pH. \"Si es mucha\" tienta, pero no cambia la acidez." },
    { q: "Tenés tomates muy pasados y machucados. ¿Los usás para envasar?", opciones: ["Sí, son ideales","Sí, si les pongo más sal","No: pueden tener un pH más alto y más microbios","Sí, si los hiervo más"], correcta: 2, explicacion: "Se usan tomates maduros pero firmes. \"Son ideales\" tienta porque se pelan fácil." },
    { q: "¿Para qué se le hace una cruz al tomate y se lo pasa por agua hirviendo?", opciones: ["Para que la piel se afloje y se pele fácil","Para esterilizarlo","Para darle ácido","Para que se haga puré solo"], correcta: 0, explicacion: "Es para pelar. \"Esterilizarlo\" tienta, pero 1 a 3 minutos no alcanzan para eso." },
    { q: "Si hiciste tomate triturado en frascos de medio litro, ¿cuánto baño María según la UNLP?", opciones: ["5 minutos","15 minutos","Nada, ya está hervido","35 minutos desde el hervor"], correcta: 3, explicacion: "Ese es el tiempo probado. \"Ya está hervido\" tienta, pero la cocción no reemplaza el baño María." },
    { q: "Si vas a envasar tomates enteros en su jugo (frasco de 473 ml), ¿cuánto baño María?", opciones: ["35 minutos, como el triturado","85 minutos","10 minutos","5 minutos"], correcta: 1, explicacion: "Enteros tardan más en calentarse en el centro. 35 tienta por ser el del triturado." },
    { q: "Querés envasar tuco con cebolla, morrón y ajo para el invierno. ¿Qué hacés?", opciones: ["Lo envaso igual con la receta del triturado","Le pongo más sal","Envaso solo tomate con ácido y hago el tuco al abrir el frasco","Lo dejo en la alacena sin baño María"], correcta: 2, explicacion: "La cebolla y el morrón suben el pH. Usar la receta del triturado tienta, pero ya no es la misma receta." },
    { q: "Hiciste tuco para la semana. ¿Dónde lo guardás?", opciones: ["En la heladera, y lo comés en pocos días","En la alacena","Al sol","En el auto"], correcta: 0, explicacion: "Sin receta probada para conserva, va a la heladera. La alacena tienta por espacio." },
    { q: "Querés tener tuco con verduras para varios meses. ¿Qué es lo más seguro en casa?", opciones: ["Envasarlo en frasco sin ácido","Dejarlo en la olla","Agregarle aceite arriba","Congelarlo en porciones"], correcta: 3, explicacion: "El freezer frena los microbios. El aceite arriba tienta como \"sello\", pero deja sin aire y no acidifica." },
    { q: "La receta de tu abuela no lleva ácido y \"nunca pasó nada\". ¿Qué hacés?", opciones: ["La sigo igual","Agrego el ácido de la receta probada: un riesgo bajo no es riesgo cero","Le saco el baño María también","La hago solo los domingos"], correcta: 1, explicacion: "El botulismo es raro pero grave. \"Nunca pasó nada\" tienta, pero no garantiza nada." },
  ],
},
{
  id: "vinagre",
  icono: "🥒",
  titulo: "Conservas en vinagre: pickles y encurtidos",
  nivel: "Avanzado",
  objetivos: [
    "Explicar cómo el vinagre hace segura una verdura de baja acidez",
    "Preparar pimientos en vinagre con las proporciones de la guía de la UNLP",
    "Diferenciar lo que se guarda en la alacena de lo que va a la heladera",
  ],
  lecciones: [
    { titulo: "El vinagre hace la magia", video: {"id":"Y8sKjFJ43ZE","t":"Aprendé a preparar los mejores pickles · Cocineros Argentinos (18:23)"}, html: `
      <p class="idea">Las verduras de baja acidez (morrón, pepino, cebolla, zanahoria, coliflor) se pueden envasar en casa <strong>si se acidifican con vinagre</strong> hasta un pH menor a 4,5. Así se hacen los <strong>encurtidos</strong> o <strong>pickles</strong>.</p>
      <p>Un <strong>encurtido</strong> es una verdura conservada en vinagre. El <strong>vinagre</strong> es ácido acético diluido en agua; el común de almacén tiene alrededor de 5% de acidez.</p>
      <table>
        <tr><th>Regla</th><th>Por qué</th></tr>
        <tr><td>Seguí las proporciones de vinagre de una receta probada</td><td>La UNLP pide no cambiarlas en recetas con alimentos poco ácidos acidificados</td></tr>
        <tr><td>No agregues más agua de la que dice la receta</td><td>Diluye el vinagre y sube el pH</td></tr>
        <tr><td>Usá vinagre común de almacén (de alcohol o de manzana)</td><td>El INTA los recomienda por su color claro</td></tr>
        <tr><td>Las verduras siempre cubiertas por el líquido</td><td>Lo que queda afuera no está acidificado</td></tr>
        <tr><td>Cortá en trozos parejos y no muy gruesos</td><td>Para que el vinagre llegue hasta el centro</td></tr>
      </table>
      <p><strong>El Senasa advierte</strong> que los escabeches con un pH final no adecuado (igual o mayor a 4,5) permiten que se forme la toxina. Un escabeche "suave" con poco vinagre y mucho aceite no es una conserva segura para la alacena.</p>
      <p><strong>El video</strong> muestra varias recetas de pickles. Para guardar en la alacena, quedate con las proporciones de vinagre de una receta probada y procesalas en baño María.</p>
      <p>Por ejemplo, Elsa quería pickles "menos ácidos" y pensaba mezclar mitad vinagre y mitad agua. Al leer la regla, eligió una receta probada y dejó el vinagre como estaba.</p>` },
    { titulo: "Paso a paso: pimientos en vinagre", html: `
      <p class="idea">Esta es la receta de <strong>pimientos en vinagre</strong> de la guía de la UNLP, para frascos de medio litro.</p>
      <pre><code>Pimientos en vinagre (guía de la UNLP)
Líquido: azúcar, vinagre y agua en partes iguales (por ejemplo, 1 taza de cada uno).

1. Lavar los pimientos, cortarlos en cuartos, sacar el cabo y las semillas; cortar en tiras.
2. Hervir el azúcar, el vinagre y el agua 1 minuto.
3. Agregar los pimientos y llevar a hervor.
4. En cada frasco de medio litro: medio diente de ajo y 1/4 cucharadita de sal.
5. Llenar con las tiras y cubrir con el líquido caliente, con 1 cm de espacio de cabeza.
6. Sacar burbujas, limpiar bordes, cerrar con tapas nuevas.
7. Baño María: 5 minutos desde el hervor.</code></pre>
      <table>
        <tr><th>¿Por qué este ajo sí y el ajo en aceite no?</th></tr>
        <tr><td>Acá el ajo está sumergido en un líquido con mucho vinagre, que lo acidifica. En aceite no hay ácido y no hay aire: las condiciones del botulismo.</td></tr>
      </table>
      <p><strong>No cambies la receta:</strong> si querés más ajo, más pimiento o menos vinagre, ya es otra receta y no sabés si llega al pH seguro.</p>
      <p><strong>Cuidado con el vapor de vinagre:</strong> irrita ojos y garganta. Cociná con la ventana abierta y sin acercar la cara a la olla.</p>
      <p>Por ejemplo, Elsa hizo 6 frascos de pimientos con 2 tazas de cada líquido. Los procesó 5 minutos y a las 24 horas comprobó que los 6 tenían vacío.</p>` },
    { titulo: "Alacena o heladera", html: `
      <p class="idea">No todo lo que lleva vinagre se puede guardar meses en la alacena. Depende de si siguió una <strong>receta probada con baño María</strong> o no.</p>
      <table>
        <tr><th>Preparación</th><th>Dónde y cuánto (según el INTA)</th></tr>
        <tr><td>Pickles y verduras en vinagre esterilizados (receta probada con baño María)</td><td>Alacena, alrededor de 2 años</td></tr>
        <tr><td>Pickles en vinagre sin esterilizar, en frasco tapado</td><td>Heladera, 2 a 3 meses</td></tr>
        <tr><td>Berenjenas en escabeche (con aceite), sin esterilizar</td><td>Heladera, unos 10 días</td></tr>
        <tr><td>Morrones, ajo o hierbas en aceite</td><td>Heladera, pocos días; nunca en la alacena</td></tr>
      </table>
      <p>Un <strong>escabeche</strong> es una preparación con vinagre, aceite y especias. Lleva vinagre, pero el aceite y las verduras de baja acidez lo hacen más delicado: si no tenés una receta probada con su tiempo de baño María, va a la heladera.</p>
      <p><strong>Con el tiempo,</strong> la luz oscurece y ablanda las verduras en vinagre (dice el INTA): guardalas en un lugar oscuro.</p>
      <p><strong>Una vez abierto, cualquier frasco va a la heladera</strong> y se consume en pocos días, sacando siempre con un utensilio limpio.</p>
      <p>Por ejemplo, Elsa hizo berenjenas en escabeche para un cumpleaños. No las procesó en baño María, así que las guardó en la heladera y las comieron esa semana.</p>` },
  ],
  practica: [
    "Revisá el vinagre de tu casa y anotá qué tipo es y qué acidez dice la etiqueta.",
    "Hacé pimientos en vinagre con la receta de la UNLP y anotá cuántos frascos salieron y cuántos sellaron.",
    "Hacé una lista de 4 conservas que te gustan y anotá para cada una si va a la alacena o a la heladera y por cuánto tiempo.",
  ],
  recursos: [
    { t: "UNLP (LIPA): Introducción a la elaboración de conservas (PDF)", url: "https://lipa.agro.unlp.edu.ar/wp-content/uploads/sites/29/2020/03/GUIA-CONSERVAS.pdf" },
    { t: "INTA: Manual de conservas, recetas caseras (PDF, 2018)", url: "https://www.argentina.gob.ar/sites/default/files/2023/08/inta_manual_de_recetas_para_elaborar_conservas_2018.pdf" },
    { t: "Senasa: pautas para la prevención del botulismo", url: "https://www.argentina.gob.ar/node/356889" },
  ],
  quiz: [
    { q: "¿Qué hace el vinagre en un encurtido de pepinos?", opciones: ["Solo da sabor","Le saca el agua","Acidifica la verdura para que quede por debajo de pH 4,5","Mata las esporas"], correcta: 2, explicacion: "Acidifica, y así la bacteria no crece. \"Mata las esporas\" tienta, pero lo que hace es impedir que crezcan." },
    { q: "Querés pickles menos ácidos y pensás mezclar mitad vinagre, mitad agua. ¿Qué hacés?", opciones: ["No cambio la proporción: sigo una receta probada","Lo hago así y los guardo en la alacena","Agrego aceite","Uso menos baño María"], correcta: 0, explicacion: "Diluir sube el pH. Hacerlo así tienta por el sabor, pero ya no es seguro." },
    { q: "Las tiras de morrón quedan por arriba del vinagre. ¿Qué hacés?", opciones: ["Lo dejo así","Lleno hasta el borde sin espacio","Le pongo aceite arriba","Las acomodo o agrego líquido para que queden cubiertas"], correcta: 3, explicacion: "Lo que queda afuera no está acidificado. Aceite arriba tienta como tapa, pero no acidifica." },
    { q: "El Senasa advierte sobre escabeches con pH igual o mayor a 4,5. ¿Por qué?", opciones: ["Porque son muy ácidos","Porque permiten que se forme la toxina del botulismo","Porque tienen mucho azúcar","Porque se ponen oscuros"], correcta: 1, explicacion: "pH 4,5 o más es baja acidez. \"Muy ácidos\" tienta, pero es al revés." },
    { q: "Para pimientos en vinagre según la UNLP, ¿cómo es el líquido?", opciones: ["Solo aceite","Mitad agua y mitad aceite","Azúcar, vinagre y agua en partes iguales","Solo agua con sal"], correcta: 2, explicacion: "Así está probada la receta. \"Solo aceite\" tienta por la costumbre de los morrones en aceite." },
    { q: "Si hiciste pimientos en vinagre en frascos de medio litro, ¿cuánto baño María según la UNLP?", opciones: ["5 minutos desde el hervor","35 minutos","Nada","1 minuto"], correcta: 0, explicacion: "Es el tiempo de esa receta. 35 tienta por ser el del tomate." },
    { q: "¿Por qué el ajo de los pimientos en vinagre sí es seguro y el ajo en aceite no?", opciones: ["Porque es otro tipo de ajo","Porque el aceite está vencido","No hay diferencia","Porque en el vinagre queda acidificado; en aceite no hay ácido ni aire"], correcta: 3, explicacion: "El vinagre lo acidifica. \"Otro tipo de ajo\" tienta, pero el ajo es el mismo." },
    { q: "Querés más ajo y menos vinagre en la receta. ¿Qué pasa?", opciones: ["Queda igual de segura","Ya es otra receta y no sabés si llega al pH seguro","Queda más segura","Solo cambia el color"], correcta: 1, explicacion: "Cambiar cantidades cambia el pH. \"Igual de segura\" tienta, pero no está probada." },
    { q: "Cocinás el líquido con vinagre y te arden los ojos. ¿Qué hacés?", opciones: ["Me acerco a ver mejor","Tapo la ventana","Abro la ventana y no acerco la cara a la olla","Agrego más vinagre"], correcta: 2, explicacion: "El vapor de vinagre irrita. Acercarte tienta para controlar, pero irrita más." },
    { q: "Si hiciste pickles en vinagre sin baño María, en un frasco tapado, ¿dónde y cuánto, según el INTA?", opciones: ["En la heladera, 2 a 3 meses","En la alacena, 2 años","En la mesada, 1 año","En el auto"], correcta: 0, explicacion: "Sin esterilizar, heladera. \"Alacena, 2 años\" tienta, pero eso es para los esterilizados." },
    { q: "Hiciste berenjenas en escabeche con aceite, sin receta probada con baño María. ¿Qué hacés?", opciones: ["Las guardo en la alacena un año","Las regalo para que duren","Les agrego más aceite","Las guardo en la heladera y las como en unos días"], correcta: 3, explicacion: "El aceite y la baja acidez las hacen delicadas. La alacena tienta, pero no es segura." },
    { q: "Abriste un frasco de pickles. ¿Qué hacés con lo que sobra?", opciones: ["Lo dejo en la alacena abierto","Lo guardo en la heladera y saco con utensilio limpio","Saco con los dedos","Le agrego agua"], correcta: 1, explicacion: "Abierto, va a la heladera. Dejarlo en la alacena tienta porque \"tiene vinagre\"." },
  ],
},
{
  id: "guardar",
  icono: "🏷️",
  titulo: "Guardar, revisar y vender",
  nivel: "Avanzado",
  objetivos: [
    "Etiquetar y guardar las conservas en las condiciones correctas",
    "Reconocer las señales de una conserva alterada y descartarla de forma segura",
    "Conocer qué registros y habilitaciones hacen falta para vender conservas",
  ],
  lecciones: [
    { titulo: "Etiquetar y guardar", html: `
      <p class="idea">Cada frasco lleva una <strong>etiqueta con qué es y la fecha</strong>. Se guarda en un lugar <strong>oscuro, seco y fresco</strong>, y se consume primero lo más viejo.</p>
      <pre><code>Etiqueta casera
┌─────────────────────────────┐
│ Tomate triturado con limón  │
│ Elaborado: 15/02/2026       │
│ Baño María: 35 min          │
│ Frasco 3 de 4 de la tanda   │
└─────────────────────────────┘</code></pre>
      <table>
        <tr><th>Condición (según la UNLP)</th><th>Por qué</th></tr>
        <tr><td>Lugar oscuro</td><td>La luz cambia el color y el sabor</td></tr>
        <tr><td>Lugar seco</td><td>La humedad oxida las tapas y puede romper el sello</td></tr>
        <tr><td>Por debajo de 35 °C; mejor entre 10 y 20 °C</td><td>El calor deteriora la conserva</td></tr>
        <tr><td>Lejos de hornos, caños calientes y sol directo</td><td>Lo mismo</td></tr>
        <tr><td>En estantes, no en el piso</td><td>Por higiene y para no golpearlos</td></tr>
        <tr><td>Lo primero que entra, lo primero que sale</td><td>Para no tener frascos olvidados por años</td></tr>
      </table>
      <p><strong>Revisá los frascos cada tanto:</strong> una mirada rápida a las tapas cada mes sirve para detectar problemas temprano.</p>
      <p><strong>Cuánto duran:</strong> bien hechas y guardadas, las conservas ácidas se pueden consumir durante bastante tiempo (el INTA habla de unos 2 años para las verduras en vinagre esterilizadas), pero con el tiempo pierden calidad. Lo ideal es consumirlas dentro del año.</p>
      <p>Por ejemplo, Elsa guardaba los frascos arriba del calefón "porque había lugar". Los pasó a un placard del pasillo, oscuro y fresco, con las tandas ordenadas por fecha.</p>` },
    { titulo: "Señales de alarma: tirar sin abrir", html: `
      <p class="idea">Si un frasco muestra señales de alteración, se <strong>tira sin abrir y sin probar</strong>. Y recordá: el botulismo puede no dar ninguna señal, por eso lo más importante es haberlo hecho bien.</p>
      <table>
        <tr><th>Señal (según el Senasa y el INTA)</th><th>Qué hacer</th></tr>
        <tr><td>Tapa abombada o hinchada</td><td>Descartar sin sacar la tapa</td></tr>
        <tr><td>Sale gas al abrir, o el contenido "sube" y se vuelca</td><td>Descartar sin probar</td></tr>
        <tr><td>Líquido turbio que antes era claro</td><td>Descartar</td></tr>
        <tr><td>Burbujas o espuma con el frasco quieto</td><td>Descartar</td></tr>
        <tr><td>Frasco chorreado o tapa que perdió el vacío</td><td>Descartar</td></tr>
        <tr><td>Olor raro, moho o depósitos blancos en el fondo</td><td>Descartar</td></tr>
        <tr><td>Conserva sin etiqueta o de origen desconocido</td><td>No consumir</td></tr>
      </table>
      <pre><code>Cómo descartar un frasco sospechoso
1. No lo abras ni lo pruebes, ni siquiera una gota.
2. Ponete guantes. Metelo cerrado en una bolsa, cerrala y ponela en otra bolsa.
3. Tiralo a la basura, fuera del alcance de chicos y animales.
4. Si se derramó, limpiá con lavandina diluida y papel descartable.
5. Lavate bien las manos.</code></pre>
      <p><strong>Nunca "pruebes a ver":</strong> una cantidad mínima de toxina puede enfermar gravemente.</p>
      <p><strong>Si alguien comió de un frasco sospechoso</strong> y tiene visión borrosa o doble, boca seca o dificultad para tragar o hablar: guardia de inmediato, llevando el frasco.</p>
      <p>Por ejemplo, Elsa encontró un frasco de tomate con la tapa abombada. Lo metió en dos bolsas sin abrirlo y lo tiró. Revisó en su registro de qué tanda era y miró los otros frascos de esa tanda.</p>` },
    { titulo: "Si querés vender", html: `
      <p class="idea">Para <strong>vender</strong> conservas no alcanza con hacerlas bien: hace falta cumplir el <strong>Código Alimentario Argentino</strong> y tener las habilitaciones que pide tu municipio o provincia.</p>
      <table>
        <tr><th>Qué se pide (en general)</th><th>Qué es</th></tr>
        <tr><td>Carnet o curso de manipulador de alimentos</td><td>Un curso obligatorio para quien elabora alimentos para vender</td></tr>
        <tr><td>RNE (Registro Nacional de Establecimiento)</td><td>La habilitación del lugar donde elaborás</td></tr>
        <tr><td>RNPA (Registro Nacional de Producto Alimenticio)</td><td>La inscripción de cada producto que vendés</td></tr>
        <tr><td>Rótulo completo</td><td>Nombre, ingredientes, peso, fecha de elaboración y vencimiento, y los números de RNE y RNPA</td></tr>
        <tr><td>Inscripción impositiva</td><td>Por ejemplo, monotributo</td></tr>
      </table>
      <p>Los trámites de RNE y RNPA se hacen en la <strong>bromatología</strong> de tu municipio o de tu provincia, que también te dice qué condiciones tiene que tener la cocina. Muchas provincias y municipios tienen programas para pequeños elaboradores y cocinas comunitarias habilitadas.</p>
      <p><strong>Al comprar conservas,</strong> fijate que tengan rótulo con RNE y RNPA: el Senasa recomienda no consumir conservas de origen desconocido o sin etiqueta.</p>
      <p><strong>Esta lección orienta, pero los requisitos cambian según el lugar:</strong> consultá en la bromatología de tu municipio antes de vender.</p>
      <p>Para calcular el precio de tus frascos, está el curso <strong>Costos y precios</strong> de este sitio.</p>
      <p>Por ejemplo, Elsa quería vender dulces en la feria del barrio. Fue a bromatología de su municipio: le pidieron el curso de manipulador y le contaron de una cocina comunitaria habilitada donde podía elaborar.</p>` },
  ],
  practica: [
    "Diseñá la etiqueta de tus conservas con nombre, fecha y tiempo de baño María, y anotá qué datos lleva.",
    "Revisá el lugar donde guardás las conservas y anotá si cumple las 6 condiciones de la tabla.",
    "Revisá 5 conservas compradas y anotá cuáles tienen RNE y RNPA en el rótulo.",
  ],
  recursos: [
    { t: "Senasa: pautas para la prevención del botulismo", url: "https://www.argentina.gob.ar/node/356889" },
    { t: "ANMAT: Código Alimentario Argentino", url: "https://www.argentina.gob.ar/anmat/codigoalimentario" },
    { t: "ANMAT: alimentos (registros y trámites)", url: "https://www.argentina.gob.ar/anmat/regulados/alimentos" },
    { t: "Curso de este sitio: Costos y precios, cuánto cobrar", url: "https://pkeios.github.io/EiaLearning/costos-precios/" },
  ],
  quiz: [
    { q: "¿Qué datos lleva la etiqueta de tu conserva casera, como mínimo?", opciones: ["Solo tu nombre","Nada, se ve lo que es","Qué es y la fecha de elaboración","Solo el precio"], correcta: 2, explicacion: "Sirve para saber qué es y cuándo se hizo. \"Se ve lo que es\" tienta, pero la fecha no se ve." },
    { q: "Tenés lugar arriba del calefón. ¿Guardás ahí las conservas?", opciones: ["No: hace calor; mejor un lugar oscuro, seco y fresco","Sí, está seco","Sí, así se mantienen calientes","Sí, si están bien tapadas"], correcta: 0, explicacion: "El calor las deteriora. \"Está seco\" tienta, pero también tiene que ser fresco." },
    { q: "¿A qué temperatura no conviene que estén las conservas, según la UNLP?", opciones: ["A 15 °C","En un lugar fresco","A temperatura de un placard","Cerca de 35 °C o más"], correcta: 3, explicacion: "Mejor entre 10 y 20 °C. Un placard tienta como respuesta mala, pero es un buen lugar." },
    { q: "Tenés frascos de distintas fechas. ¿Cuáles usás primero?", opciones: ["Los más nuevos","Los más viejos","Los más lindos","Cualquiera"], correcta: 1, explicacion: "Lo primero que entra, lo primero que sale. Los nuevos tientan porque están adelante." },
    { q: "Un frasco tiene la tapa abombada. ¿Qué hacés?", opciones: ["Lo abro para ver","Lo pruebo un poquito","Lo tiro sin abrir, metido en dos bolsas","Lo hiervo y lo como"], correcta: 2, explicacion: "El Senasa dice descartar sin sacar la tapa. Abrirlo para ver tienta, pero te expone." },
    { q: "Abrís un frasco, sale gas y el contenido sube. ¿Qué hacés?", opciones: ["No lo pruebo y lo descarto","Lo como igual","Lo dejo destapado un rato","Le agrego vinagre"], correcta: 0, explicacion: "Es señal de fermentación o contaminación. Dejarlo destapado tienta, pero no lo arregla." },
    { q: "Si una conserva se ve, huele y sabe bien, ¿garantiza que no tiene botulismo?", opciones: ["Sí, totalmente","Sí, si es casera","Sí, si tiene menos de un mes","No: el botulismo puede no dar ninguna señal"], correcta: 3, explicacion: "Por eso importa hacerla bien. \"Totalmente\" tienta porque se ve normal." },
    { q: "Se derramó el líquido de un frasco sospechoso en la mesada. ¿Qué hacés?", opciones: ["Lo seco con el repasador de siempre","Limpio con guantes, lavandina diluida y papel descartable, y me lavo las manos","Lo dejo secar","Lo limpio con la mano"], correcta: 1, explicacion: "Hay que limpiar y desinfectar sin tocarlo. El repasador tienta, pero lo contamina." },
    { q: "Alguien comió de un frasco con la tapa hinchada y ahora ve doble. ¿Qué hacés?", opciones: ["Esperar al día siguiente","Darle un laxante","Guardia de inmediato, llevando el frasco","Tirar el frasco y no decir nada"], correcta: 2, explicacion: "El tratamiento funciona mejor cuanto antes. Esperar tienta, pero se pierde tiempo." },
    { q: "Querés vender tus dulces en la feria. ¿Qué es el RNPA?", opciones: ["La inscripción de cada producto que vendés","Un tipo de frasco","Un impuesto","Una receta oficial"], correcta: 0, explicacion: "Es el registro del producto. \"Un impuesto\" tienta, pero eso es la inscripción impositiva." },
    { q: "¿Dónde averiguás qué habilitaciones te piden para vender conservas?", opciones: ["En un grupo de WhatsApp","En el supermercado","No hace falta ninguna","En la bromatología de tu municipio o provincia"], correcta: 3, explicacion: "Ahí te dicen los requisitos de tu lugar. \"No hace falta\" tienta para empezar rápido." },
    { q: "Si comprás una conserva en una feria, ¿qué mirás en el rótulo?", opciones: ["Que el frasco sea lindo","Que tenga RNE y RNPA","Que sea barata","Que diga \"casero\""], correcta: 1, explicacion: "Los registros muestran que está habilitada. \"Casero\" tienta como garantía, pero no lo es." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: tu tanda de conservas",
  nivel: "Avanzado",
  objetivos: [
    "Planificar una tanda con recetas probadas, materiales y tiempos",
    "Elaborar llevando un registro de cada paso de seguridad",
    "Revisar la tanda a la semana y evaluar el trabajo con una rúbrica",
  ],
  lecciones: [
    { titulo: "Planificá la tanda", html: `
      <p class="idea">El proyecto final es hacer <strong>una tanda de dos conservas</strong>: una mermelada y un tomate triturado (o pimientos en vinagre), siguiendo recetas probadas y registrando todo.</p>
      <table>
        <tr><th>Antes de empezar</th><th>Qué preparar</th></tr>
        <tr><td>Recetas</td><td>Impresas o anotadas, con cantidades de ácido y tiempos de baño María</td></tr>
        <tr><td>Fruta y verdura</td><td>De estación, madura y sana; pesala</td></tr>
        <tr><td>Frascos</td><td>Sanos, del tamaño de la receta, con tapas nuevas</td></tr>
        <tr><td>Ácido</td><td>Limón o ácido cítrico, medido según los kilos</td></tr>
        <tr><td>Equipo</td><td>Olla profunda con tapa, rejilla, pinza, embudo, reloj</td></tr>
        <tr><td>Etiquetas</td><td>Para escribir qué es y la fecha</td></tr>
      </table>
      <pre><code>Plan de Elsa (un sábado de diciembre)
Mermelada de frutillas (receta del INTA): 3 kg → unos 8 frascos de medio litro
Tomate triturado: 6 kg → unos 4 frascos de medio litro
  Ácido: 6 × 2 = 12 cucharadas de jugo de limón
Baño María: mermelada 15 min · tomate 35 min (desde el hervor)
Tapas nuevas: 12 + 2 de repuesto</code></pre>
      <p><strong>Empezá chico:</strong> la primera vez, mejor 4 frascos bien hechos que 20 apurados.</p>
      <p><strong>Elegí el momento:</strong> un día sin apuro y sin chicos sueltos en la cocina. Hay mucha agua hirviendo durante horas.</p>
      <p>Por ejemplo, Elsa armó su plan el jueves, compró las tapas el viernes y el sábado tenía todo sobre la mesada antes de prender el fuego.</p>` },
    { titulo: "Elaborá con registro", html: `
      <p class="idea">Mientras elaborás, <strong>anotá cada paso de seguridad</strong> en una planilla de registro. Si un frasco falla, el registro te dice qué pasó y qué otros frascos revisar.</p>
      <pre><code>Registro de elaboración
Fecha: __/__/____     Receta: ____________________
Materia prima: ___ kg  · Estado: sana / descarté ___ kg
Ácido agregado: ______ (según la receta: ______)
Frascos esterilizados: ___ · 5 min en agua hirviendo: sí / no
Espacio de cabeza: ___ cm · Bordes limpios: sí / no
Hora en que hirvió el baño María: __:__ · Hora de apagado: __:__
Minutos de proceso: ___ (receta: ___)
Frascos con vacío a las 24 h: ___ de ___
Frascos sin vacío: heladera / reprocesados</code></pre>
      <table>
        <tr><th>Paso crítico</th><th>Lo viste en</th></tr>
        <tr><td>Higiene y materia prima sana</td><td>Higiene, frascos y tapas</td></tr>
        <tr><td>Ácido según la receta</td><td>El tomate / En vinagre</td></tr>
        <tr><td>Espacio de cabeza y bordes limpios</td><td>Higiene, frascos y tapas</td></tr>
        <tr><td>Tiempo desde el hervor</td><td>El baño María</td></tr>
        <tr><td>Prueba de vacío</td><td>El baño María</td></tr>
      </table>
      <p>Un <strong>paso crítico</strong> es uno que, si se hace mal, puede hacer insegura la conserva. Son los que se anotan siempre.</p>
      <p>Por ejemplo, en el registro de Elsa quedó que el baño María del tomate hirvió a las 11:20 y apagó a las 11:55: 35 minutos, igual que la receta.</p>` },
    { titulo: "Revisá y evaluá con la rúbrica", html: `
      <p class="idea">A la semana, <strong>revisá cada frasco</strong> (tapas, color, líquido) y evaluá la tanda con la <strong>rúbrica</strong>: una lista de criterios con puntaje.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Recetas</td><td>Probadas, seguidas sin cambiar cantidades</td><td>Probadas con algún cambio menor de sabor (no de ácido)</td><td>Inventadas o cambiadas</td></tr>
        <tr><td>Acidez</td><td>Ácido medido y anotado según la receta</td><td>Ácido agregado sin medir</td><td>Sin ácido en el tomate</td></tr>
        <tr><td>Higiene y frascos</td><td>Frascos esterilizados, tapas nuevas, bordes limpios</td><td>Falta uno</td><td>Faltan dos o más</td></tr>
        <tr><td>Baño María</td><td>Tiempo completo desde el hervor, anotado</td><td>Tiempo completo sin anotar</td><td>Tiempo acortado</td></tr>
        <tr><td>Vacío y guardado</td><td>Todos probados; los sin vacío a la heladera</td><td>Probados algunos</td><td>Sin probar</td></tr>
        <tr><td>Etiqueta y registro</td><td>Todos etiquetados con fecha y registro completo</td><td>Uno de los dos</td><td>Ninguno</td></tr>
      </table>
      <pre><code>Total: ___ de 12
10 a 12 → tanda segura: repetila con otra fruta de estación
7 a 9   → mejorá el criterio más bajo en la próxima tanda
0 a 6   → no guardes esos frascos en la alacena: heladera y consumo rápido;
          repasá los módulos de acidez y baño María</code></pre>
      <p><strong>Si algún criterio de seguridad (acidez o baño María) sacó 0,</strong> esa tanda no va a la alacena aunque el total sea alto.</p>
      <p>Por ejemplo, Elsa sacó 11 de 12: un frasco de tomate no tenía etiqueta. Lo etiquetó, y en la revisión de la semana los 12 frascos tenían vacío.</p>` },
  ],
  practica: [
    "Escribí el plan de tu tanda con 2 recetas probadas, kilos, ácido, tiempos y cantidad de frascos.",
    "Elaborá la tanda completando la planilla de registro y anotá los minutos reales de cada baño María.",
    "A la semana, revisá cada frasco y anotá cuántos mantienen el vacío.",
    "Puntuá tu tanda con la rúbrica y anotá tu total de 12.",
  ],
  recursos: [
    { t: "UNLP (LIPA): Introducción a la elaboración de conservas (PDF)", url: "https://lipa.agro.unlp.edu.ar/wp-content/uploads/sites/29/2020/03/GUIA-CONSERVAS.pdf" },
    { t: "INTA: Manual de conservas, recetas caseras (PDF, 2018)", url: "https://www.argentina.gob.ar/sites/default/files/2023/08/inta_manual_de_recetas_para_elaborar_conservas_2018.pdf" },
    { t: "ANMAT: Manual de manipulación higiénica de alimentos (PDF, 2024)", url: "https://www.argentina.gob.ar/sites/default/files/anmat_manual_manipuladores_de_alimentos_version_2024.pdf" },
  ],
  quiz: [
    { q: "Vas a hacer tu primera tanda. ¿Cuánto hacés?", opciones: ["Todo lo que entre en la cocina","50 frascos para todo el año","Poco: mejor 4 frascos bien hechos que 20 apurados","Lo que salga, sin plan"], correcta: 2, explicacion: "Empezar chico te deja hacer todo con calma. 50 frascos tienta para aprovechar, pero se apura." },
    { q: "Tenés 6 kg de tomate. ¿Cuánto jugo de limón planificás?", opciones: ["12 cucharadas soperas","6 cucharaditas","2 cucharadas","A gusto"], correcta: 0, explicacion: "2 cucharadas por kg. 2 cucharadas tienta si te olvidás de multiplicar." },
    { q: "Si vas a envasar 12 frascos, ¿cuántas tapas nuevas comprás?", opciones: ["6, y reuso las otras","Ninguna, reuso todas","12 justas sin repuesto","12 y algunas de repuesto"], correcta: 3, explicacion: "Las tapas son nuevas y un repuesto salva un frasco. Reusar tienta para ahorrar, pero la junta ya no cierra." },
    { q: "¿Qué día elegís para elaborar?", opciones: ["Un día que tengo una hora libre","Un día sin apuro y sin chicos sueltos en la cocina","Cuando hay visitas","De noche apurado"], correcta: 1, explicacion: "Es mucha agua hirviendo por horas. Una hora libre tienta, pero no alcanza." },
    { q: "¿Para qué sirve la planilla de registro?", opciones: ["Para decorar","Para el contador","Para saber qué pasó en cada tanda y qué frascos revisar si uno falla","No sirve"], correcta: 2, explicacion: "El registro rastrea los problemas. \"Para el contador\" tienta, pero es para la seguridad." },
    { q: "¿Qué es un paso crítico?", opciones: ["Uno que, si se hace mal, puede hacer insegura la conserva","El paso más largo","El paso más caro","El último paso"], correcta: 0, explicacion: "Por eso se anota siempre. \"El más largo\" tienta porque el baño María lo es, pero no es eso." },
    { q: "En tu registro, el baño María hirvió a las 11:20 y apagaste a las 11:45. La receta dice 35 minutos. ¿Qué pasó?", opciones: ["Está perfecto","Le sobraron 10 minutos","No importa","Le faltaron 10 minutos: hay que reprocesar"], correcta: 3, explicacion: "Fueron 25 minutos. \"Está perfecto\" tienta si mirás solo la hora de apagado." },
    { q: "A las 24 horas, 2 de 12 frascos no tienen vacío. ¿Qué hacés?", opciones: ["Los guardo con los demás","Esos 2 a la heladera o los reproceso con tapa nueva","Les ajusto la tapa","Los regalo"], correcta: 1, explicacion: "Sin vacío no van a la alacena. Ajustar la tapa tienta, pero no arregla el sello." },
    { q: "Si cambiaste el azúcar de la mermelada por gusto, sin tocar el ácido, ¿cuántos puntos en \"Recetas\"?", opciones: ["2","0","1","12"], correcta: 2, explicacion: "Un cambio menor de sabor es 1 punto. 2 tienta, pero es para la receta sin cambios." },
    { q: "Si hiciste el tomate sin ácido, ¿cuántos puntos en \"Acidez\" y qué pasa con la tanda?", opciones: ["0, y esa tanda no va a la alacena","1, y va a la alacena","2, si el resto está bien","0, pero va a la alacena igual"], correcta: 0, explicacion: "Un 0 en seguridad saca la tanda de la alacena. \"Va igual\" tienta si el total es alto." },
    { q: "Sacaste 8 de 12 y todo lo de seguridad está bien. ¿Qué hacés?", opciones: ["Tiro todos los frascos","Dejo de hacer conservas","No cambio nada","Mejoro el criterio más bajo en la próxima tanda"], correcta: 3, explicacion: "De 7 a 9, mejorá uno. Tirar todo tienta del miedo, pero si la seguridad está bien no hace falta." },
    { q: "Si a la semana revisás los frascos, ¿qué mirás?", opciones: ["Solo cuántos quedan","Las tapas, el color y el líquido de cada uno","Nada, ya están hechos","El precio"], correcta: 1, explicacion: "Así detectás problemas temprano. \"Ya están hechos\" tienta, pero la revisión es parte del trabajo." },
  ],
},
];
