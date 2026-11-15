// Temario del curso "Portugués básico". Mismo formato que public/contenido.js.
// Validar con: node tools/validar.js portugues y node tools/metodologia.js portugues
window.TEMARIO = [
{
  id: "empezar",
  icono: "🇧🇷",
  titulo: "Empezar: del castellano al portugués",
  nivel: "Básico",
  objetivos: [
    "Reconocer qué se parece y qué cambia entre el portugués y el castellano",
    "Distinguir el portugués de Brasil y el de Portugal",
    "Pronunciar los sonidos que más cambian: lh, nh, ç, ão, ch, j y r",
  ],
  lecciones: [
    { titulo: "Parecido, pero no igual", html: `
      <p class="idea">Para quien habla castellano, el portugués se entiende bastante leído, pero cuesta escucharlo y hablarlo bien. La clave es aprender las diferencias, no empezar de cero.</p>
      <table>
        <tr><th>Fácil</th><th>Difícil</th></tr>
        <tr><td>Mucho vocabulario parecido: <em>casa, trabalho, cliente</em></td><td>La pronunciación: sonidos nasales y vocales distintas</td></tr>
        <tr><td>Estructura de las oraciones parecida</td><td>Los falsos amigos: palabras iguales con otro significado</td></tr>
        <tr><td>Leer textos simples desde el principio</td><td>Entender a alguien que habla rápido</td></tr>
      </table>
      <p><strong>El riesgo del "portuñol":</strong> mezclar castellano con algunas palabras en portugués. Se entiende a medias, pero en el trabajo puede generar malentendidos. Este curso apunta a frases correctas desde el principio.</p>
      <p><strong>Por qué sirve en Argentina:</strong> Brasil es uno de los principales socios comerciales del país y muchos turistas brasileños visitan la Argentina. En comercio, turismo, hotelería y empresas, el portugués suma.</p>
      <p>Por ejemplo, <em>trabalho</em> (trabajo) se entiende leído, pero se pronuncia parecido a "trabaliu": si lo leés como en castellano, cuesta que te entiendan.</p>` },
    { titulo: "Brasil y Portugal", html: `
      <p class="idea">El portugués se habla en Brasil, Portugal y otros países. Brasil y Portugal tienen diferencias de pronunciación y algunas palabras, como pasa entre Argentina y España. Este curso usa el de Brasil.</p>
      <table>
        <tr><th>Tema</th><th>Brasil</th><th>Portugal</th></tr>
        <tr><td>"Vos/tú"</td><td>você</td><td>tu (muy usado)</td></tr>
        <tr><td>Celular</td><td>celular</td><td>telemóvel</td></tr>
        <tr><td>Desayuno</td><td>café da manhã</td><td>pequeno-almoço</td></tr>
        <tr><td>Pronunciación</td><td>Vocales más abiertas, más "cantado"</td><td>Vocales más cerradas, más rápido</td></tr>
      </table>
      <p><strong>Se entienden entre sí</strong>, igual que un argentino y un español. Si trabajás con Portugal, vas a notar diferencias, pero lo que aprendas te sirve.</p>
      <p>Por ejemplo, un turista brasileño que pregunta por el <em>café da manhã</em> está preguntando por el desayuno del hotel.</p>` },
    { titulo: "Los sonidos que cambian", video: {"id":"NJIo0dxFDEM","t":"Pronunciación básica: alfabeto y acentos (Brasil) · Tus Clases de Portugués (5:24)"}, html: `
      <p class="idea">Unos pocos sonidos hacen la mayor diferencia. Si los practicás, te van a entender mucho mejor.</p>
      <table>
        <tr><th>Se escribe</th><th>Suena parecido a</th><th>Ejemplo</th></tr>
        <tr><td>nh</td><td>ñ</td><td>amanhã (mañana)</td></tr>
        <tr><td>lh</td><td>"li" suave</td><td>trabalho (≈ trabaliu)</td></tr>
        <tr><td>ç</td><td>s</td><td>serviço (servicio)</td></tr>
        <tr><td>ão</td><td>"ao" por la nariz</td><td>pão (pan), não (no)</td></tr>
        <tr><td>ch</td><td>la "ll" porteña de "lluvia"</td><td>chave (llave)</td></tr>
        <tr><td>j</td><td>la "y" porteña de "yo", más suave</td><td>janeiro (enero)</td></tr>
        <tr><td>r al principio o rr</td><td>una "j" suave, aspirada</td><td>Rio (≈ "jíu"), carro</td></tr>
        <tr><td>s entre vocales</td><td>"z" zumbada, como un zumbido</td><td>casa</td></tr>
      </table>
      <p><strong>En Brasil, las vocales finales cambian:</strong> la <em>o</em> final suena "u" (<em>obrigado</em> ≈ "obrigadu") y la <em>e</em> final suena "i" (<em>leite</em> ≈ "leichi"). Además, <em>de</em> y <em>te</em> suelen sonar "yi" y "chi" (<em>dia</em> ≈ "yía", <em>noite</em> ≈ "noichi").</p>
      <p><strong>Escuchá y repetí:</strong> los diccionarios en línea y los videos te dejan oír cada palabra.</p>
      <p>Por ejemplo, decir "obrigado" como en castellano se entiende, pero "obrigadu" suena natural.</p>` },
  ],
  practica: [
    "Elegí 10 palabras del portugués que se parezcan al castellano (por ejemplo, de una etiqueta o un menú) y anotalas con su traducción.",
    "Practicá en voz alta las 8 palabras de ejemplo de la tabla de sonidos y grabate. Anotá cuáles te costaron.",
    "Escuchá 5 palabras con \"ão\" y \"nh\" en un diccionario con audio y repetilas. Anotá cuántas veces practicaste cada una.",
  ],
  recursos: [
    { t: "Diccionario Michaelis (portugués de Brasil)", url: "https://michaelis.uol.com.br/" },
    { t: "WordReference: diccionario español-portugués", url: "https://www.wordreference.com/espt/" },
    { t: "Celpe-Bras: el examen oficial de portugués de Brasil", url: "https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/celpe-bras" },
  ],
  quiz: [
    { q: "Si hablás castellano, ¿qué te resulta más fácil del portugués al principio?", opciones: ["Entender a alguien que habla rápido","La pronunciación","Leer textos simples, por el vocabulario parecido","Los falsos amigos"], correcta: 2, explicacion: "Leído se entiende mucho. La pronunciación tienta como fácil por el parecido, pero es lo que más cuesta." },
    { q: "Si mezclás castellano con algunas palabras en portugués, ¿qué riesgo hay en el trabajo?", opciones: ["Malentendidos: se entiende a medias","Ninguno, se entiende todo","Que te feliciten","Que hables más rápido"], correcta: 0, explicacion: "El portuñol se entiende a medias. \"Se entiende todo\" tienta por el parecido, pero algunas palabras cambian de sentido." },
    { q: "Si trabajás con turistas brasileños, ¿qué variante del portugués conviene aprender?", opciones: ["La de Portugal","Ninguna, alcanza el castellano","Una mezcla de las dos","La de Brasil"], correcta: 3, explicacion: "Para Brasil, el de Brasil. Portugal tienta porque es el origen, pero cambian la pronunciación y algunas palabras." },
    { q: "En Brasil, ¿cómo se dice \"vos\" o \"tú\" en general?", opciones: ["Tu siempre","Você","Vos","Usted"], correcta: 1, explicacion: "En Brasil se usa mucho \"você\". \"Tu\" tienta porque se parece al castellano, pero es más común en Portugal." },
    { q: "Un turista pregunta por el \"café da manhã\". ¿Qué busca?", opciones: ["Un café a la mañana en un bar","La cena","El desayuno","El almuerzo"], correcta: 2, explicacion: "Café da manhã es el desayuno. \"Un café a la mañana\" tienta por la traducción literal, pero es la comida completa." },
    { q: "Si leés \"amanhã\", ¿a qué sonido del castellano se parece la \"nh\"?", opciones: ["A la ñ","A la n sola","A la h","A la ll"], correcta: 0, explicacion: "Nh suena como ñ. La n sola tienta porque se escribe con n, pero suena distinto." },
    { q: "Si querés pronunciar \"trabalho\", ¿cómo suena aproximadamente?", opciones: ["\"trabalo\"","\"trabajo\"","\"traballo\"","\"trabaliu\""], correcta: 3, explicacion: "Lh suena \"li\" suave y la o final, \"u\". \"Trabajo\" tienta por el significado, pero la pronunciación es otra." },
    { q: "Si tenés que decir \"serviço\", ¿cómo suena la \"ç\"?", opciones: ["Como una k","Como una s","Como una ch","No suena"], correcta: 1, explicacion: "Ç suena s. La k tienta porque la c a veces suena así, pero la cedilla la cambia." },
    { q: "Si escuchás \"não\", ¿qué significa y cómo suena?", opciones: ["\"Nada\", como en castellano","\"Nuevo\", con \"o\" larga","\"No\", con \"ao\" por la nariz","\"Nadie\", sin nasal"], correcta: 2, explicacion: "Não es \"no\", nasal. \"Nada\" tienta porque empieza igual, pero es otra palabra." },
    { q: "En Brasil, ¿cómo suena la \"o\" final de \"obrigado\"?", opciones: ["Como una \"u\": \"obrigadu\"","Como una \"o\" fuerte","Como una \"a\"","No suena"], correcta: 0, explicacion: "La o final suena u en Brasil. La \"o\" fuerte tienta por el castellano, pero suena extranjero." },
    { q: "Si querés decir \"Rio\" (de Janeiro) como en Brasil, ¿cómo suena la r inicial?", opciones: ["Como la rr fuerte del castellano","Como una l","No suena","Como una \"j\" suave aspirada: \"jíu\""], correcta: 3, explicacion: "La r inicial suena aspirada. La rr del castellano tienta, pero suena muy distinto." },
    { q: "Si decís \"casa\" en portugués, ¿cómo suena la \"s\"?", opciones: ["Como una s fuerte","Como una \"z\" zumbada","Como una ch","No suena"], correcta: 1, explicacion: "Entre vocales la s zumba. La s fuerte tienta por el castellano, pero en portugués suena sonora." },
  ],
},
{
  id: "saludos",
  icono: "👋",
  titulo: "Saludos y presentaciones",
  nivel: "Básico",
  objetivos: [
    "Saludar y despedirte según el momento del día",
    "Presentarte con tu nombre, de dónde sos y qué hacés",
    "Elegir entre \"você\" y \"o senhor / a senhora\" según la persona",
  ],
  lecciones: [
    { titulo: "Saludar y despedirse", video: {"id":"hTJUubPPzqg","t":"Saludos y despedidas en portugués · Portugués con Philipe Brazuca (13:15)"}, html: `
      <p class="idea">Los saludos en portugués se parecen a los nuestros, pero con algunas diferencias que conviene saber de entrada.</p>
      <table>
        <tr><th>Portugués</th><th>Castellano</th><th>Cuándo</th></tr>
        <tr><td>Oi / Olá</td><td>Hola</td><td>Siempre; "oi" es más informal</td></tr>
        <tr><td>Bom dia</td><td>Buen día</td><td>A la mañana</td></tr>
        <tr><td>Boa tarde</td><td>Buenas tardes</td><td>Desde el mediodía</td></tr>
        <tr><td>Boa noite</td><td>Buenas noches</td><td>A la noche, al llegar y al irse</td></tr>
        <tr><td>Tudo bem?</td><td>¿Todo bien? ¿Cómo estás?</td><td>Después del saludo</td></tr>
        <tr><td>Tchau / Até logo / Até amanhã</td><td>Chau / Hasta luego / Hasta mañana</td><td>Al despedirte</td></tr>
      </table>
      <p><strong>"Tudo bem?"</strong> se responde "Tudo bem, e você?" (todo bien, ¿y vos?) o "Tudo ótimo!" (todo genial).</p>
      <p><strong>Ojo con "bom" y "boa":</strong> <em>dia</em> es masculino (bom dia); <em>tarde</em> y <em>noite</em> son femeninos (boa tarde, boa noite).</p>
      <p>Por ejemplo, a diferencia del inglés, en portugués "boa noite" sí sirve para saludar al entrar a la noche, igual que nuestro "buenas noches".</p>` },
    { titulo: "Presentarte", html: `
      <p class="idea">Para presentarte alcanzan cuatro frases: nombre, de dónde sos, a qué te dedicás y "encantado/a".</p>
      <pre><code>Olá, meu nome é Juana.          (Hola, mi nombre es Juana.)
Sou argentina, de Córdoba.       (Soy argentina, de Córdoba.)
Trabalho num hotel.              (Trabajo en un hotel.)
Muito prazer!                    (¡Mucho gusto!)</code></pre>
      <table>
        <tr><th>Para decir</th><th>En portugués</th></tr>
        <tr><td>Me llamo…</td><td>Meu nome é… / Me chamo…</td></tr>
        <tr><td>Soy de…</td><td>Sou de…</td></tr>
        <tr><td>Trabajo en…</td><td>Trabalho em… / num (en un) / numa (en una)</td></tr>
        <tr><td>Soy recepcionista</td><td>Sou recepcionista</td></tr>
        <tr><td>Mucho gusto</td><td>Muito prazer / Prazer</td></tr>
      </table>
      <p><strong>"Obrigado" u "obrigada":</strong> en portugués, "gracias" cambia según quien lo dice. Si sos varón decís <em>obrigado</em>; si sos mujer, <em>obrigada</em>.</p>
      <p><strong>Contracciones:</strong> <em>em + um = num</em>, <em>em + uma = numa</em>. "Trabalho num hotel", "trabalho numa loja" (negocio).</p>
      <p>Por ejemplo, una mujer que dice "obrigado" se entiende, pero lo correcto para ella es "obrigada".</p>` },
    { titulo: "\"Você\" o \"o senhor\"", html: `
      <p class="idea">En Brasil, <strong>você</strong> sirve para la mayoría de las situaciones, como nuestro "vos" o un "usted" amable. Con personas mayores o en situaciones muy formales se usa <strong>o senhor / a senhora</strong>.</p>
      <table>
        <tr><th>Situación</th><th>Forma</th><th>Ejemplo</th></tr>
        <tr><td>Compañeros, clientes jóvenes, la mayoría de los casos</td><td>você</td><td>Você precisa de ajuda? (¿Necesitás ayuda?)</td></tr>
        <tr><td>Persona mayor, cliente muy formal</td><td>o senhor / a senhora</td><td>A senhora precisa de ajuda? (¿Necesita ayuda?)</td></tr>
        <tr><td>Varias personas</td><td>vocês</td><td>Vocês querem uma mesa? (¿Quieren una mesa?)</td></tr>
      </table>
      <p><strong>Con você, el verbo va como con "él/ella":</strong> "você fala" (vos hablás), "você trabalha" (vos trabajás).</p>
      <p><strong>Frases de cortesía que usás todo el tiempo:</strong> <em>por favor</em>, <em>com licença</em> (permiso), <em>desculpe</em> (perdón), <em>de nada</em>.</p>
      <p>Por ejemplo, en un hotel, a una pareja de jubilados conviene decirles "Os senhores querem ajuda com as malas?" (¿Los señores quieren ayuda con las valijas?).</p>` },
  ],
  practica: [
    "Escribí cómo saludarías en portugués a las 9, a las 15 y a las 21, y cómo te despedirías. Anotá los saludos.",
    "Escribí tu presentación de 4 frases y decila en voz alta 3 veces. Anotá cuántos segundos dura.",
    "Escribí 3 preguntas a un cliente: una con \"você\", una con \"a senhora\" y una con \"vocês\". Anotalas con su traducción.",
  ],
  recursos: [
    { t: "Diccionario Michaelis (portugués de Brasil)", url: "https://michaelis.uol.com.br/" },
    { t: "WordReference: diccionario español-portugués", url: "https://www.wordreference.com/espt/" },
    { t: "Linguee: español-portugués con ejemplos reales", url: "https://www.linguee.es/espanol-portugues/" },
  ],
  quiz: [
    { q: "Si llegás a una reunión a las 10 de la mañana en Brasil, ¿cómo saludás?", opciones: ["Boa dia!","Boa noite!","Bom dia!","Bom tarde!"], correcta: 2, explicacion: "Dia es masculino: bom dia. \"Boa dia\" tienta por \"buenas\", pero el adjetivo concuerda con dia." },
    { q: "Si llegás a las 15 a una reunión en Brasil, ¿cómo decís \"buenas tardes\"?", opciones: ["Boa tarde","Bom tarde","Buenas tardes","Boas tardes"], correcta: 0, explicacion: "Tarde es femenino: boa tarde. \"Bom tarde\" tienta por \"bom dia\", pero cambia el género." },
    { q: "Si entrás a un restaurante a las 21 en Brasil, ¿podés saludar con \"boa noite\"?", opciones: ["No, solo para irse a dormir","No, se dice \"boa tarde\"","No, se dice \"bom dia\"","Sí: \"boa noite\" sirve al llegar y al irse"], correcta: 3, explicacion: "En portugués sirve para saludar. \"Solo para irse\" tienta por el inglés \"good night\", pero en portugués es como nuestro \"buenas noches\"." },
    { q: "Si un cliente te dice \"Tudo bem?\", ¿qué respondés?", opciones: ["Sim.","Tudo bem, e você?","Obrigado, tchau.","Não."], correcta: 1, explicacion: "Se responde y se devuelve la pregunta. \"Sim\" tienta por corto, pero no responde el saludo." },
    { q: "Querés presentarte. ¿Cómo decís \"mi nombre es Juana\"?", opciones: ["Mi nome es Juana.","Meu nombre é Juana.","Meu nome é Juana.","Eu nome Juana."], correcta: 2, explicacion: "Meu nome é. \"Mi nome es\" tienta por el castellano, pero mezcla los dos idiomas." },
    { q: "Sos mujer y querés decir \"gracias\". ¿Qué decís?", opciones: ["Obrigada","Obrigado","Gracias","Obrigados"], correcta: 0, explicacion: "Cambia según quien lo dice. \"Obrigado\" tienta porque es lo que más se escucha, pero es para varones." },
    { q: "Querés decir que trabajás en un hotel. ¿Qué frase es correcta?", opciones: ["Trabajo en un hotel.","Trabalho em um hotelo.","Trabalho no um hotel.","Trabalho num hotel."], correcta: 3, explicacion: "Em + um = num. \"Trabajo en un hotel\" tienta porque se entiende, pero es castellano." },
    { q: "Si te presentan a alguien, ¿qué decís?", opciones: ["Muito obrigado!","Muito prazer!","Boa sorte!","Até logo!"], correcta: 1, explicacion: "Muito prazer es \"mucho gusto\". \"Muito obrigado\" tienta por parecido, pero es \"muchas gracias\"." },
    { q: "Si atendés a una señora mayor en Brasil, ¿qué forma usás?", opciones: ["Você siempre","Tu","A senhora","Vos"], correcta: 2, explicacion: "Con personas mayores se usa a senhora. Você tienta porque es lo más común, pero con mayores puede sonar poco respetuoso." },
    { q: "Si querés preguntarle a un cliente \"¿Necesitás ayuda?\", ¿cómo lo decís?", opciones: ["Você precisa de ajuda?","Você necessitas ajuda?","Tu precisa ajuda?","Você precisas de ajuda?"], correcta: 0, explicacion: "Con você, el verbo va como con \"él\": precisa. \"Precisas\" tienta por el \"tú\" del castellano, pero no concuerda con você." },
    { q: "Le hablás a un grupo de clientes. ¿Qué pronombre usás?", opciones: ["Você","Vosotros","Os você","Vocês"], correcta: 3, explicacion: "Vocês es el plural. \"Vosotros\" tienta por el castellano de España, pero no se usa en portugués." },
    { q: "Querés pasar entre dos personas. ¿Qué decís?", opciones: ["Licencia.","Com licença.","Desculpa a licença.","Permisso."], correcta: 1, explicacion: "Com licença es \"permiso\". \"Permisso\" tienta por el castellano, pero no existe así." },
  ],
},
{
  id: "falsos",
  icono: "⚠️",
  titulo: "Falsos amigos",
  nivel: "Intermedio",
  objetivos: [
    "Reconocer los falsos amigos más comunes entre el portugués y el castellano",
    "Evitar errores que cambian el sentido o resultan incómodos",
    "Usar el diccionario para confirmar una palabra que parece igual",
  ],
  lecciones: [
    { titulo: "Los más comunes", video: {"id":"9YvdNjs6KGo","t":"Los falsos amigos del portugués · VideoEle (5:02)"}, html: `
      <p class="idea">Los <strong>falsos amigos</strong> son palabras que se escriben o suenan parecido en portugués y castellano, pero significan otra cosa. Son la trampa número uno para quien habla castellano.</p>
      <table>
        <tr><th>Portugués</th><th>Significa</th><th>No significa</th></tr>
        <tr><td>escritório</td><td>oficina</td><td>escritorio (mueble: escrivaninha)</td></tr>
        <tr><td>oficina</td><td>taller mecánico</td><td>oficina</td></tr>
        <tr><td>esquisito</td><td>raro</td><td>exquisito (gostoso, delicioso)</td></tr>
        <tr><td>embaraçada</td><td>avergonzada</td><td>embarazada (grávida)</td></tr>
        <tr><td>polvo</td><td>pulpo</td><td>polvo (pó)</td></tr>
        <tr><td>borracha</td><td>goma de borrar</td><td>borracha (bêbada)</td></tr>
        <tr><td>apelido</td><td>apodo</td><td>apellido (sobrenome)</td></tr>
        <tr><td>rato</td><td>ratón</td><td>rato (momento)</td></tr>
      </table>
      <p>Por ejemplo, decir "a comida está esquisita" queriendo elogiarla es decir que está rara: lo correcto es "está gostosa" o "deliciosa".</p>` },
    { titulo: "Falsos amigos del trabajo", html: `
      <p class="idea">Algunos falsos amigos aparecen todo el tiempo en el trabajo: en mails, reuniones y atención al cliente. Confundirlos puede cambiar un acuerdo.</p>
      <table>
        <tr><th>Portugués</th><th>Significa</th><th>Cuidado</th></tr>
        <tr><td>pronto</td><td>listo, ya está</td><td>"pronto" (en breve) es <em>logo</em> o <em>em breve</em></td></tr>
        <tr><td>data</td><td>fecha</td><td>no es "dato" (dado)</td></tr>
        <tr><td>firma</td><td>empresa</td><td>la firma de un papel es <em>assinatura</em></td></tr>
        <tr><td>acordar</td><td>despertarse</td><td>"acordarse" es <em>lembrar</em></td></tr>
        <tr><td>largo</td><td>ancho</td><td>"largo" es <em>comprido</em></td></tr>
        <tr><td>propina</td><td>soborno (en Brasil)</td><td>la propina del mozo es <em>gorjeta</em></td></tr>
        <tr><td>cena</td><td>escena</td><td>la comida de la noche es <em>jantar</em></td></tr>
        <tr><td>fechar</td><td>cerrar</td><td>poner fecha es <em>datar</em></td></tr>
      </table>
      <p><strong>"Está pronto":</strong> si un proveedor brasileño te escribe "O pedido está pronto", no te dice que va a estar pronto: te dice que ya está listo.</p>
      <p>Por ejemplo, ofrecerle a un cliente brasileño "una propina" queriendo decir una atención puede sonar a soborno: el término es <em>gorjeta</em>.</p>` },
    { titulo: "Confirmar antes de usar", html: `
      <p class="idea">No hace falta saberse todos los falsos amigos: hace falta desconfiar de las palabras que parecen iguales y confirmarlas cuando importan.</p>
      <table>
        <tr><th>Herramienta</th><th>Para qué</th></tr>
        <tr><td>Diccionario español-portugués (WordReference)</td><td>Ver la traducción y los ejemplos</td></tr>
        <tr><td>Linguee</td><td>Ver la palabra en frases reales traducidas</td></tr>
        <tr><td>Diccionario de portugués (Michaelis, Priberam)</td><td>Ver qué significa la palabra en portugués</td></tr>
      </table>
      <p><strong>Una regla práctica:</strong> si una palabra en portugués se ve igual que en castellano y es importante (una fecha, un precio, una condición), buscala antes de dar por sentado qué significa.</p>
      <p><strong>Armá tu propia lista:</strong> cada vez que descubras un falso amigo, anotalo con un ejemplo. Repasala con las tarjetas del glosario.</p>
      <pre><code>Mi lista de falsos amigos
data → fecha       "A data da entrega é sexta."
pronto → listo     "O relatório está pronto."</code></pre>
      <p>Por ejemplo, ante "Qual é a data?", buscar <em>data</em> en el diccionario evita responder con un dato cuando te preguntaban la fecha.</p>` },
  ],
  practica: [
    "Hacé tarjetas con los 16 falsos amigos de las tablas (portugués de un lado, significado del otro) y repasalas 3 días. Anotá cuántos acertás el tercer día.",
    "Escribí 5 frases de trabajo en portugués usando bien \"pronto\", \"data\", \"assinatura\", \"lembrar\" y \"gorjeta\". Anotalas con su traducción.",
    "Buscá 3 palabras de un texto en portugués que parezcan iguales al castellano y confirmalas en el diccionario. Anotá cuántas eran falsos amigos.",
  ],
  recursos: [
    { t: "WordReference: diccionario español-portugués", url: "https://www.wordreference.com/espt/" },
    { t: "Linguee: español-portugués con ejemplos reales", url: "https://www.linguee.es/espanol-portugues/" },
    { t: "Diccionario Priberam de la lengua portuguesa", url: "https://dicionario.priberam.org/" },
  ],
  quiz: [
    { q: "Si un cliente brasileño dice que trabaja en un \"escritório\", ¿dónde trabaja?", opciones: ["En un escritorio","En un taller","En una oficina","En una escuela"], correcta: 2, explicacion: "Escritório es oficina. Escritorio tienta por el parecido, pero el mueble se dice escrivaninha." },
    { q: "Si llevás el auto a una \"oficina\" en Brasil, ¿adónde lo llevás?", opciones: ["A un taller mecánico","A una oficina administrativa","A un estacionamiento","A un banco"], correcta: 0, explicacion: "Oficina es taller. Oficina administrativa tienta por el castellano, pero se dice escritório." },
    { q: "Querés elogiar la comida en Brasil. ¿Qué decís?", opciones: ["Está esquisita.","Está embaraçada.","Está pronta.","Está gostosa / deliciosa."], correcta: 3, explicacion: "Esquisito es raro. \"Esquisita\" tienta por \"exquisita\", pero dice que la comida está rara." },
    { q: "Si una clienta dice \"fiquei embaraçada\", ¿qué te está contando?", opciones: ["Que está embarazada","Que se sintió avergonzada","Que se enojó","Que se cansó"], correcta: 1, explicacion: "Embaraçada es avergonzada. Embarazada tienta por el parecido, pero se dice grávida." },
    { q: "En un menú en Brasil ves \"polvo\". ¿Qué es?", opciones: ["Polvo","Pollo","Pulpo","Pescado"], correcta: 2, explicacion: "Polvo es pulpo. Polvo tienta por el castellano, pero se dice pó." },
    { q: "Si un brasileño pide una \"borracha\", ¿qué le das?", opciones: ["Una goma de borrar","Una bebida alcohólica","Una botella","Una bolsa"], correcta: 0, explicacion: "Borracha es goma. \"Bebida alcohólica\" tienta por borracho, pero no tiene que ver." },
    { q: "Si en un formulario en portugués te piden el \"sobrenome\", ¿qué ponés?", opciones: ["Tu apodo","Tu segundo nombre","Tu nombre de usuario","Tu apellido"], correcta: 3, explicacion: "Sobrenome es apellido. Apodo tienta, pero eso es apelido." },
    { q: "Si un proveedor te escribe \"O pedido está pronto\", ¿qué significa?", opciones: ["Que el pedido va a estar pronto","Que el pedido ya está listo","Que el pedido se atrasa","Que falta poco para enviarlo"], correcta: 1, explicacion: "Pronto es listo. \"Va a estar pronto\" tienta por el castellano, pero ya está." },
    { q: "Si te preguntan \"Qual é a data da reunião?\", ¿qué te preguntan?", opciones: ["Los datos de la reunión","El lugar de la reunión","La fecha de la reunión","La duración"], correcta: 2, explicacion: "Data es fecha. Datos tienta por el parecido, pero se dice dados." },
    { q: "Si te piden la \"assinatura\" en un contrato, ¿qué te piden?", opciones: ["Tu firma","Tu suscripción","El nombre de la empresa","La fecha"], correcta: 0, explicacion: "Assinatura es firma. \"Firma\" en portugués es empresa, por eso tienta, pero es otra cosa." },
    { q: "Querés decir que no te acordás. ¿Qué verbo usás?", opciones: ["Acordar: \"Não me acordo\"","Recordar: \"Não recordo\" siempre","Olvidar: \"Não olvido\"","Lembrar: \"Não me lembro\""], correcta: 3, explicacion: "Acordar es despertarse. \"Não me acordo\" tienta por el castellano, pero dice \"no me despierto\"." },
    { q: "En Brasil querés dejarle propina al mozo. ¿Cómo se dice?", opciones: ["Propina","Gorjeta","Gorrita","Pagamento"], correcta: 1, explicacion: "Gorjeta es propina. \"Propina\" tienta por el castellano, pero en Brasil significa soborno." },
  ],
},
{
  id: "numeros",
  icono: "🔢",
  titulo: "Números, precios, horas y fechas",
  nivel: "Intermedio",
  objetivos: [
    "Decir y entender números, precios en reales y cantidades",
    "Decir la hora y entender horarios",
    "Usar los días de la semana y los meses",
  ],
  lecciones: [
    { titulo: "Números y precios", video: {"id":"m3lqmTTrVr0","t":"Clases de portugués básico: los números · Clases de Portugués Virtuales (2:11)"}, html: `
      <p class="idea">Los números en portugués se parecen a los nuestros, pero algunos cambian. Y como en todos los idiomas, son lo que más se confunde: repetilos siempre para confirmar.</p>
      <table>
        <tr><th>Número</th><th>Portugués (Brasil)</th></tr>
        <tr><td>1 / 2</td><td>um, uma / dois, duas (cambian con el femenino)</td></tr>
        <tr><td>3, 4, 5, 6</td><td>três, quatro, cinco, seis</td></tr>
        <tr><td>7, 8, 9, 10</td><td>sete, oito, nove, dez</td></tr>
        <tr><td>16, 17, 19</td><td>dezesseis, dezessete, dezenove</td></tr>
        <tr><td>20, 30, 50</td><td>vinte, trinta, cinquenta</td></tr>
        <tr><td>100 / 150</td><td>cem / cento e cinquenta</td></tr>
        <tr><td>1.000</td><td>mil</td></tr>
      </table>
      <p><strong>"Um" y "dois" tienen femenino:</strong> "duas pessoas" (dos personas), "uma mesa".</p>
      <p><strong>El seis por teléfono:</strong> en Brasil, al dictar números de teléfono, el 6 muchas veces se dice <em>meia</em> (de "meia dúzia", media docena), para no confundirlo con el tres.</p>
      <p><strong>La moneda:</strong> el real (R$), en plural reais. "Quanto custa?" (¿Cuánto cuesta?) — "Custa vinte reais."</p>
      <p>Por ejemplo, si un turista dice "meia" al dictarte su teléfono, está diciendo 6, no "media".</p>` },
    { titulo: "La hora", html: `
      <p class="idea">Para preguntar y decir la hora hay unas pocas frases fijas.</p>
      <table>
        <tr><th>Portugués</th><th>Castellano</th></tr>
        <tr><td>Que horas são?</td><td>¿Qué hora es?</td></tr>
        <tr><td>É uma hora.</td><td>Es la una.</td></tr>
        <tr><td>São duas horas.</td><td>Son las dos.</td></tr>
        <tr><td>São três e meia.</td><td>Son las tres y media.</td></tr>
        <tr><td>É meio-dia. / É meia-noite.</td><td>Es mediodía. / Es medianoche.</td></tr>
        <tr><td>Às dez horas.</td><td>A las diez.</td></tr>
      </table>
      <p><strong>Horarios de atención:</strong> "Abrimos às nove e fechamos às dezoito horas" (abrimos a las 9 y cerramos a las 18). Recordá: <em>fechar</em> es cerrar.</p>
      <p><strong>En Brasil también se usa el horario de 24 horas</strong> en horarios formales ("às 18h"), igual que en Argentina.</p>
      <p>Por ejemplo, "O check-out é ao meio-dia" significa que hay que dejar la habitación a las 12.</p>` },
    { titulo: "Días y meses", html: `
      <p class="idea">Los días de la semana en portugués son distintos de los nuestros: de lunes a viernes se cuentan con números. Los meses, en cambio, se parecen mucho.</p>
      <table>
        <tr><th>Castellano</th><th>Portugués</th></tr>
        <tr><td>Lunes</td><td>segunda-feira</td></tr>
        <tr><td>Martes</td><td>terça-feira</td></tr>
        <tr><td>Miércoles</td><td>quarta-feira</td></tr>
        <tr><td>Jueves</td><td>quinta-feira</td></tr>
        <tr><td>Viernes</td><td>sexta-feira</td></tr>
        <tr><td>Sábado / Domingo</td><td>sábado / domingo</td></tr>
      </table>
      <p>En el habla, muchas veces se dice solo <em>segunda, terça, quarta, quinta, sexta</em>: "Nos vemos na sexta" (nos vemos el viernes).</p>
      <p><strong>Meses:</strong> janeiro, fevereiro, março, abril, maio, junho, julho, agosto, setembro, outubro, novembro, dezembro. En portugués de Brasil se escriben con minúscula.</p>
      <p><strong>Fechas:</strong> el orden es día, mes y año, como en Argentina: "14 de março de 2026".</p>
      <p>Por ejemplo, "sexta-feira" no es el sexto día de la semana que vos esperás: es el viernes.</p>` },
  ],
  practica: [
    "Escribí en portugués 10 números de tu vida (tu edad, tu teléfono, un precio, un año) y decilos en voz alta. Anotá cuáles te costaron.",
    "Escribí el horario de atención de un lugar que conozcas en portugués, con días y horas. Anotá cuántos días y horarios incluiste.",
    "Escribí tu fecha de cumpleaños y la de 3 personas en portugués, con el día de la semana de este año. Anotalas.",
  ],
  recursos: [
    { t: "Diccionario Michaelis (portugués de Brasil)", url: "https://michaelis.uol.com.br/" },
    { t: "WordReference: diccionario español-portugués", url: "https://www.wordreference.com/espt/" },
    { t: "Celpe-Bras: el examen oficial de portugués de Brasil", url: "https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/celpe-bras" },
  ],
  quiz: [
    { q: "Si querés decir \"dos personas\" en portugués, ¿cómo lo decís?", opciones: ["Dois pessoas","Dos personas","Duas pessoas","Duas personas"], correcta: 2, explicacion: "Dois tiene femenino: duas. \"Dois pessoas\" tienta porque dois es la forma más común, pero pessoa es femenino." },
    { q: "Si te dictan un teléfono y escuchás \"meia\", ¿qué número es?", opciones: ["6","5","Media hora","9"], correcta: 0, explicacion: "En Brasil, al dictar, el 6 se dice meia. \"Media hora\" tienta por la palabra, pero en un teléfono es el seis." },
    { q: "Si un cliente de Brasil te dice que su habitación es la 16, ¿cómo escuchás ese número?", opciones: ["Dieciséis","Dezeseis","Dezasseis","Dezesseis"], correcta: 3, explicacion: "En Brasil es dezesseis. Dezasseis tienta, pero es la forma de Portugal." },
    { q: "Un turista pregunta \"Quanto custa?\". ¿Qué quiere saber?", opciones: ["Cuántos quedan","Cuánto cuesta","Dónde está","Cuándo abren"], correcta: 1, explicacion: "Quanto custa es el precio. \"Cuántos quedan\" tienta por quanto, pero custa es costar." },
    { q: "Si un turista te habla de precios en su país, ¿cómo se llama la moneda de Brasil y su plural?", opciones: ["Real, reales","Peso, pesos","Real, reais","Cruzeiro, cruzeiros"], correcta: 2, explicacion: "El plural es reais. \"Reales\" tienta por el castellano, pero en portugués cambia." },
    { q: "Si te preguntan \"Que horas são?\", ¿qué te preguntan?", opciones: ["Qué hora es","Cuántas horas trabajás","A qué hora abrís","Cuánto tarda"], correcta: 0, explicacion: "Es \"¿qué hora es?\". \"Cuántas horas\" tienta por horas, pero la pregunta es la hora actual." },
    { q: "Si son las tres y media, ¿cómo lo decís?", opciones: ["São três y media.","É três e meia.","São três e media.","São três e meia."], correcta: 3, explicacion: "São (plural) y meia. \"É três\" tienta por \"es\", pero con más de una hora se usa são." },
    { q: "Si un hotel dice \"O check-out é ao meio-dia\", ¿a qué hora hay que dejar la habitación?", opciones: ["A medianoche","A las 12","A las 10","A la mitad del día de mañana"], correcta: 1, explicacion: "Meio-dia es mediodía. Medianoche tienta, pero es meia-noite." },
    { q: "Si leés \"Fechamos às dezoito horas\", ¿qué significa?", opciones: ["Ponemos fecha a las 18","Abrimos a las 18","Cerramos a las 18","Atendemos hasta las 8"], correcta: 2, explicacion: "Fechar es cerrar. \"Ponemos fecha\" tienta por fecha, pero es un falso amigo." },
    { q: "Si un cliente dice \"Volto na segunda\", ¿cuándo vuelve?", opciones: ["El lunes","El martes","En un segundo","En dos días"], correcta: 0, explicacion: "Segunda(-feira) es lunes. \"En un segundo\" tienta por segundo, pero es el día." },
    { q: "Si leés \"sexta-feira\", ¿qué día es?", opciones: ["Sábado","Sexto día del mes","Jueves","Viernes"], correcta: 3, explicacion: "Sexta-feira es viernes. Sábado tienta por el número seis, pero se cuenta distinto." },
    { q: "Si un proveedor de Brasil te escribe una fecha, ¿en qué orden la escribe?", opciones: ["Mes, día y año","Día, mes y año, como en Argentina","Año, día y mes","Solo mes y año"], correcta: 1, explicacion: "Igual que en Argentina. Mes primero tienta por el inglés, pero no es el caso." },
  ],
},
{
  id: "clientes",
  icono: "🧳",
  titulo: "Atender clientes y turistas brasileños",
  nivel: "Intermedio",
  objetivos: [
    "Recibir y ofrecer ayuda a un cliente que habla portugués",
    "Dar precios, formas de pago e indicaciones",
    "Atender el teléfono y resolver un problema simple",
  ],
  lecciones: [
    { titulo: "Recibir y ofrecer ayuda", html: `
      <p class="idea">En hoteles, restaurantes, comercios y centros turísticos de Argentina hay muchos clientes de Brasil. Unas pocas frases en portugués cambian por completo su experiencia.</p>
      <table>
        <tr><th>Para</th><th>Portugués</th><th>Castellano</th></tr>
        <tr><td>Saludar y ofrecer ayuda</td><td>Olá! Posso ajudar?</td><td>¡Hola! ¿Te puedo ayudar?</td></tr>
        <tr><td>Preguntar qué busca</td><td>O que você procura?</td><td>¿Qué buscás?</td></tr>
        <tr><td>Ofrecer</td><td>Você quer experimentar?</td><td>¿Querés probártelo?</td></tr>
        <tr><td>Pedir un momento</td><td>Um momento, por favor.</td><td>Un momento, por favor.</td></tr>
        <tr><td>Despedir</td><td>Obrigado/a! Boa viagem!</td><td>¡Gracias! ¡Buen viaje!</td></tr>
      </table>
      <p><strong>"Procurar" es buscar,</strong> no "procurar" en el sentido de intentar.</p>
      <p><strong>Si no entendés,</strong> pedí que repitan despacio: "Desculpe, pode repetir mais devagar?" (Perdón, ¿podés repetir más despacio?).</p>
      <p>Por ejemplo, en una heladería, "Copinho ou casquinha?" (¿vasito o cucurucho?) resuelve la pregunta más común.</p>` },
    { titulo: "Precios, pagos e indicaciones", html: `
      <p class="idea">Las preguntas más comunes de un turista son cuánto cuesta, cómo pagar y dónde queda algo. Con estas frases se resuelven casi todas.</p>
      <table>
        <tr><th>Situación</th><th>Portugués</th></tr>
        <tr><td>Precio</td><td>Custa vinte mil pesos.</td></tr>
        <tr><td>Formas de pago</td><td>Pode pagar em dinheiro ou com cartão.</td></tr>
        <tr><td>Recibo</td><td>Aqui está o seu recibo.</td></tr>
        <tr><td>A la derecha / a la izquierda</td><td>À direita / à esquerda</td></tr>
        <tr><td>Derecho</td><td>Em frente / reto</td></tr>
        <tr><td>Cerca / lejos</td><td>Perto / longe</td></tr>
        <tr><td>En la esquina</td><td>Na esquina</td></tr>
        <tr><td>Dos cuadras</td><td>Duas quadras</td></tr>
      </table>
      <p><strong>"Dinheiro"</strong> es dinero y también efectivo: "em dinheiro" es "en efectivo".</p>
      <p><strong>Pix:</strong> en Brasil se paga mucho con Pix, un sistema de transferencias instantáneas. Muchos turistas preguntan si aceptás Pix; si no, explicá qué medios tenés.</p>
      <p><strong>Precios en pesos:</strong> los números grandes confunden; mostrá el precio escrito en la calculadora o el celular.</p>
      <p>Por ejemplo, "Siga em frente duas quadras e vire à direita" (seguí derecho dos cuadras y doblá a la derecha) cubre la mayoría de las indicaciones.</p>` },
    { titulo: "Teléfono y problemas", video: {"id":"6yPRojWgyTE","t":"Frases útiles para hablar por teléfono en portugués · Portugués con Philipe Brazuca (6:32)"}, html: `
      <p class="idea">Por teléfono o ante un problema, las mismas reglas de atención sirven en portugués: saludar bien, escuchar, disculparse y proponer algo.</p>
      <table>
        <tr><th>Situación</th><th>Portugués</th></tr>
        <tr><td>Atender</td><td>Alô? / Hotel Sur, bom dia, aqui é a Juana.</td></tr>
        <tr><td>Preguntar quién habla</td><td>Quem fala?</td></tr>
        <tr><td>Pedir que espere</td><td>Um momento, por favor.</td></tr>
        <tr><td>Tomar un mensaje</td><td>Quer deixar um recado?</td></tr>
        <tr><td>Disculparse</td><td>Desculpe pelo problema.</td></tr>
        <tr><td>Proponer</td><td>Posso trocar por outro.</td></tr>
        <tr><td>Derivar</td><td>Vou chamar o gerente.</td></tr>
      </table>
      <p><strong>"Recado"</strong> es mensaje (no un mandado). <strong>"Trocar"</strong> es cambiar algo por otra cosa.</p>
      <p><strong>Si no podés resolverlo,</strong> buscá a alguien que hable mejor portugués o usá el traductor del celular: lo importante es que el cliente se vaya con su problema resuelto.</p>
      <p>Por ejemplo, "Desculpe pelo problema. Posso trocar por outro" dicho con calma resuelve la mayoría de los reclamos por un producto fallado.</p>` },
  ],
  practica: [
    "Elegí un lugar donde trabajás o te gustaría trabajar y escribí 6 frases en portugués que usarías con un cliente brasileño. Anotalas con su traducción.",
    "Escribí cómo le indicarías a un turista, en portugués, cómo llegar desde tu trabajo a un lugar cercano, en 3 frases. Anotalas.",
    "Practicá con alguien una llamada en portugués: atender, preguntar quién habla y tomar un mensaje. Anotá qué frases usaste.",
  ],
  recursos: [
    { t: "WordReference: diccionario español-portugués", url: "https://www.wordreference.com/espt/" },
    { t: "Linguee: español-portugués con ejemplos reales", url: "https://www.linguee.es/espanol-portugues/" },
    { t: "Diccionario Michaelis (portugués de Brasil)", url: "https://michaelis.uol.com.br/" },
  ],
  quiz: [
    { q: "Entra un turista brasileño a tu local. ¿Qué decís?", opciones: ["Hola, ¿qué querés?","Olá! Pode ajudar?","Olá! Posso ajudar?","Tchau!"], correcta: 2, explicacion: "\"Posso ajudar?\" es \"¿te puedo ayudar?\". \"Pode ajudar?\" tienta por parecido, pero pregunta si él te puede ayudar a vos." },
    { q: "Si un cliente dice \"Procuro um casaco\", ¿qué busca?", opciones: ["Un abrigo: \"procurar\" es buscar","Intenta conseguir un abrigo","Vende un abrigo","Devuelve un abrigo"], correcta: 0, explicacion: "Procurar es buscar. \"Intenta\" tienta por el castellano, pero no es ese sentido." },
    { q: "Si no entendiste lo que dijo un cliente, ¿qué decís?", opciones: ["Não entendo nada, tchau.","Repete!","Nada, hacés como que entendiste","Desculpe, pode repetir mais devagar?"], correcta: 3, explicacion: "Pedir que repita despacio es amable. Hacer como que entendiste tienta, pero le das algo que no pidió." },
    { q: "En una heladería, ¿cómo preguntás \"¿vasito o cucurucho?\"?", opciones: ["Vasinho ou cucurucho?","Copinho ou casquinha?","Copo ou cone?","Taça ou casca?"], correcta: 1, explicacion: "Copinho y casquinha son lo usual. \"Vasinho\" tienta por vasito, pero es una maceta chica." },
    { q: "Querés decir que se puede pagar en efectivo o con tarjeta. ¿Qué frase usás?", opciones: ["Pode pagar em efetivo ou tarjeta.","Paga dinero ou cartão.","Pode pagar em dinheiro ou com cartão.","Pode pagar com efetivo."], correcta: 2, explicacion: "\"Em dinheiro\" es en efectivo. \"Efetivo\" tienta por el castellano, pero no se usa así para pagar." },
    { q: "Un turista pregunta si aceptás \"Pix\". ¿Qué es?", opciones: ["Un sistema brasileño de transferencias instantáneas","Una tarjeta de crédito","Una moneda","Un cupón de descuento"], correcta: 0, explicacion: "Pix es una transferencia instantánea de Brasil. \"Tarjeta\" tienta porque es un medio de pago, pero es otra cosa." },
    { q: "Querés decir \"a la izquierda\". ¿Cómo lo decís?", opciones: ["À izquierda","À direita","Na esquina","À esquerda"], correcta: 3, explicacion: "Esquerda es izquierda. Direita tienta, pero es derecha." },
    { q: "Un turista pregunta si el museo queda \"perto\". ¿Qué pregunta?", opciones: ["Si queda lejos","Si queda cerca","Si está abierto","Si es caro"], correcta: 1, explicacion: "Perto es cerca. Lejos tienta por oposición, pero se dice longe." },
    { q: "Si atendés el teléfono en portugués, ¿qué decís?", opciones: ["¿Hola?","Quem é você?","Alô? / Hotel Sur, bom dia, aqui é a Juana.","Tchau?"], correcta: 2, explicacion: "Alô o el saludo completo son lo usual. \"Quem é você?\" tienta por directo, pero suena desconfiado." },
    { q: "Querés ofrecer tomar un mensaje. ¿Qué decís?", opciones: ["Quer deixar um recado?","Quer deixar um mandado?","Quer uma mensagem?","Quer recado eu?"], correcta: 0, explicacion: "Recado es mensaje. \"Mandado\" tienta por el castellano, pero no es eso." },
    { q: "Si un cliente trae un producto fallado, ¿qué decís?", opciones: ["O problema é seu.","Não troco nada.","Volte amanhã.","Desculpe pelo problema. Posso trocar por outro."], correcta: 3, explicacion: "Disculparse y proponer resuelve. \"O problema é seu\" tienta si no fue tu culpa, pero el cliente se va molesto." },
    { q: "No podés resolver un reclamo en portugués. ¿Qué hacés?", opciones: ["Lo dejás sin resolver","Buscás a alguien que hable mejor o usás el traductor del celular","Le hablás en castellano más fuerte","Le pedís que vuelva con un traductor"], correcta: 1, explicacion: "Lo importante es resolver. Hablar más fuerte tienta, pero el problema no es el volumen." },
  ],
},
{
  id: "escribir",
  icono: "✉️",
  titulo: "Mensajes y mails en portugués",
  nivel: "Avanzado",
  objetivos: [
    "Escribir un mensaje o mail corto con saludo, pedido y cierre en portugués",
    "Usar bien los acentos y las letras que cambian respecto del castellano",
    "Conjugar en presente los verbos más comunes terminados en -ar",
  ],
  lecciones: [
    { titulo: "La estructura de un mail", html: `
      <p class="idea">Un mail de trabajo en portugués sigue la misma lógica que en castellano: asunto claro, saludo, pedido concreto y cierre.</p>
      <pre><code>Assunto: Pedido 2031 – data de entrega

Olá, Ricardo,

Tudo bem?
Você pode confirmar a data de entrega do pedido 2031?
Precisamos até sexta-feira, 14 de março.

Obrigada,
Juana Pérez</code></pre>
      <table>
        <tr><th>Parte</th><th>Opciones</th></tr>
        <tr><td>Saludo formal</td><td>Prezado Sr. Silva, / Prezada Sra. Costa,</td></tr>
        <tr><td>Saludo cercano</td><td>Olá, Ricardo, / Oi, Ana,</td></tr>
        <tr><td>Pedir con amabilidad</td><td>Você pode…? / Poderia…?</td></tr>
        <tr><td>Cierre formal</td><td>Atenciosamente,</td></tr>
        <tr><td>Cierre cercano</td><td>Abraços, / Obrigado/a,</td></tr>
      </table>
      <p><strong>"Prezado/a"</strong> es el "Estimado/a" del portugués. <strong>"Atenciosamente"</strong> es el cierre formal más usado.</p>
      <p>Por ejemplo, un mail a un proveedor nuevo empieza con "Prezado Sr. Silva" y termina con "Atenciosamente"; uno a un colega de siempre, con "Olá" y "Abraços".</p>` },
    { titulo: "Acentos y letras que cambian", html: `
      <p class="idea">Muchas palabras se escriben casi igual que en castellano, con cambios regulares. Conocerlos te ayuda a escribir bien sin buscar cada palabra.</p>
      <table>
        <tr><th>Castellano</th><th>Portugués</th><th>Ejemplo</th></tr>
        <tr><td>-ción</td><td>-ção</td><td>información → informação</td></tr>
        <tr><td>-ciones</td><td>-ções</td><td>soluciones → soluções</td></tr>
        <tr><td>ñ</td><td>nh</td><td>España → Espanha</td></tr>
        <tr><td>ll</td><td>lh (a veces ch)</td><td>llave → chave; batalla → batalha</td></tr>
        <tr><td>-dad</td><td>-dade</td><td>ciudad → cidade</td></tr>
      </table>
      <p><strong>Los acentos del portugués:</strong></p>
      <ul>
        <li><strong>´ (agudo):</strong> vocal abierta y acentuada: <em>você, café, está</em>.</li>
        <li><strong>^ (circunflejo):</strong> vocal cerrada y acentuada: <em>você</em> (la e es cerrada), <em>três</em>.</li>
        <li><strong>~ (til):</strong> nasal: <em>não, mãe, informações</em>.</li>
        <li><strong>ç (cedilla):</strong> suena s delante de a, o, u: <em>serviço, açúcar</em>.</li>
      </ul>
      <p><strong>Teclado:</strong> en el celular, mantené apretada la letra para ver los acentos. En la computadora, podés usar el corrector configurado en portugués.</p>
      <p>Por ejemplo, "informacion" sin la tilde ni la cedilla se entiende, pero en un mail formal conviene escribir "informação".</p>` },
    { titulo: "Verbos en presente", html: `
      <p class="idea">Los verbos terminados en <strong>-ar</strong> son los más comunes y se conjugan en presente de forma regular. Con você, el verbo va igual que con él o ella.</p>
      <pre><code>Falar (hablar)
eu falo          (yo hablo)
você / ele fala  (vos hablás / él habla)
nós falamos      (nosotros hablamos)
vocês / eles falam (ustedes / ellos hablan)</code></pre>
      <table>
        <tr><th>Verbo</th><th>Ejemplo</th></tr>
        <tr><td>trabalhar (trabajar)</td><td>Eu trabalho num hotel.</td></tr>
        <tr><td>precisar (necesitar)</td><td>Você precisa de ajuda?</td></tr>
        <tr><td>enviar (enviar)</td><td>Nós enviamos amanhã.</td></tr>
        <tr><td>confirmar (confirmar)</td><td>Eles confirmam a data.</td></tr>
        <tr><td>gostar (gustar)</td><td>Eu gosto de café. (Me gusta el café.)</td></tr>
      </table>
      <p><strong>"Gostar de":</strong> en portugués se dice "eu gosto de café" (literalmente "yo gusto de café"), no "me gosta café".</p>
      <p><strong>Tres verbos irregulares que vas a usar siempre:</strong> <em>ser</em> (eu sou, você é), <em>estar</em> (eu estou, você está), <em>ter</em> (eu tenho, você tem).</p>
      <p>Por ejemplo, "Você fala espanhol?" (¿Hablás español?) es una de las preguntas más útiles para empezar una charla.</p>` },
  ],
  practica: [
    "Escribí un mail en portugués a un proveedor pidiendo confirmar una fecha, con asunto, saludo formal, pedido y cierre. Anotá cuántas palabras tiene.",
    "Pasá al portugués 6 palabras terminadas en -ción, -dad, con ñ o con ll, usando la tabla. Confirmalas en el diccionario y anotá cuántas acertaste.",
    "Conjugá en presente 3 verbos en -ar (con eu, você, nós y vocês) y escribí una frase con cada uno. Anotalas.",
  ],
  recursos: [
    { t: "Diccionario Priberam de la lengua portuguesa", url: "https://dicionario.priberam.org/" },
    { t: "Diccionario Michaelis (portugués de Brasil)", url: "https://michaelis.uol.com.br/" },
    { t: "Linguee: español-portugués con ejemplos reales", url: "https://www.linguee.es/espanol-portugues/" },
  ],
  quiz: [
    { q: "Si le escribís por primera vez al señor Silva, un proveedor de Brasil, ¿cómo saludás?", opciones: ["Querido Silva,","Oi, Silvinha!","Prezado Sr. Silva,","Hola Silva,"], correcta: 2, explicacion: "Prezado es el saludo formal. \"Querido\" tienta por el castellano, pero es demasiado cercano." },
    { q: "Querés cerrar un mail formal en portugués. ¿Qué usás?", opciones: ["Atenciosamente,","Beijos,","Tchauzinho,","Atentamente pra você,"], correcta: 0, explicacion: "Atenciosamente es el cierre formal. \"Beijos\" tienta por cálido, pero es para amigos." },
    { q: "Un colega brasileño de siempre te escribe. ¿Cómo cerrás tu respuesta?", opciones: ["Atenciosamente, siempre","Prezado,","Beijinhos,","Abraços,"], correcta: 3, explicacion: "Abraços es cercano y profesional. \"Beijinhos\" tienta por cariñoso, pero es muy íntimo para el trabajo." },
    { q: "Querés pedir que confirmen una fecha. ¿Qué frase usás?", opciones: ["Confirma a data já!","Você pode confirmar a data?","Pode confirmar o dato?","Você confirmas a fecha?"], correcta: 1, explicacion: "\"Você pode…?\" es amable y data es fecha. \"O dato\" tienta por el castellano, pero es un falso amigo." },
    { q: "Si escribís un mail en portugués, ¿cómo escribís \"información\"?", opciones: ["Informacion","Informaçion","Informação","Informasão"], correcta: 2, explicacion: "-ción pasa a -ção. \"Informaçion\" tienta por mezclar las dos formas, pero es incorrecta." },
    { q: "Si escribís en portugués de qué ciudad sos, ¿cómo escribís \"ciudad\"?", opciones: ["Cidade","Ciudade","Cidad","Ciudá"], correcta: 0, explicacion: "-dad pasa a -dade. \"Ciudade\" tienta por conservar la \"u\", pero se escribe cidade." },
    { q: "Si querés escribir \"España\", ¿cómo lo escribís en portugués?", opciones: ["España","Espanya","Espania","Espanha"], correcta: 3, explicacion: "La ñ pasa a nh. \"España\" tienta porque es igual, pero la ñ no existe en portugués." },
    { q: "Si ves la tilde ~ en \"não\" o \"mãe\", ¿qué indica?", opciones: ["Que se acentúa fuerte","Que la vocal es nasal","Que es una pregunta","Que va en plural"], correcta: 1, explicacion: "La til marca nasal. \"Se acentúa fuerte\" tienta por el acento del castellano, pero es otra función." },
    { q: "Si querés preguntarle a alguien si habla español, ¿cómo conjugás \"falar\" con \"você\"?", opciones: ["Você falas","Você falo","Você fala","Você falamos"], correcta: 2, explicacion: "Con você va como con ele: fala. \"Falas\" tienta por el \"tú\" del castellano, pero no concuerda." },
    { q: "Querés decir \"nosotros enviamos mañana\". ¿Qué frase es correcta?", opciones: ["Nós enviamos amanhã.","Nós envia amanhã.","Nós enviam amanhã.","Nós enviamos mañana."], correcta: 0, explicacion: "Nós lleva -amos y mañana es amanhã. \"Mañana\" tienta por el castellano, pero se escribe amanhã." },
    { q: "Querés decir \"me gusta el café\". ¿Cómo lo decís?", opciones: ["Me gosta o café.","Eu gosto café.","Me gusta café.","Eu gosto de café."], correcta: 3, explicacion: "Gostar lleva \"de\". \"Me gosta\" tienta por el castellano, pero en portugués la estructura es otra." },
    { q: "Si querés decir que tenés una reserva, ¿cómo decís \"yo tengo\" en portugués?", opciones: ["Eu teno","Eu tenho","Eu tengo","Eu tem"], correcta: 1, explicacion: "Ter es irregular: eu tenho. \"Eu tem\" tienta porque es la forma de você, pero con eu es tenho." },
  ],
},
{
  id: "proyecto",
  icono: "🏁",
  titulo: "Proyecto final: tu kit de portugués",
  nivel: "Avanzado",
  objetivos: [
    "Armar un kit de frases en portugués para tu trabajo o tu viaje",
    "Practicar 3 situaciones y evaluarlas con una rúbrica",
    "Armar un plan para seguir aprendiendo",
  ],
  lecciones: [
    { titulo: "El encargo", html: `
      <p class="idea">El proyecto final es tu <strong>kit de portugués</strong>: las frases que vas a usar en tu trabajo (o en un viaje a Brasil), listas para tener a mano, y la práctica de 3 situaciones.</p>
      <table>
        <tr><th>Parte del kit</th><th>Módulo</th></tr>
        <tr><td>Saludos y tu presentación de 4 frases</td><td>Saludos y presentaciones</td></tr>
        <tr><td>Tu lista de falsos amigos del rubro</td><td>Falsos amigos</td></tr>
        <tr><td>Números, precios, horarios y días de tu trabajo</td><td>Números, precios, horas y fechas</td></tr>
        <tr><td>10 frases para clientes y una para el teléfono</td><td>Atender clientes</td></tr>
        <tr><td>Un mail o mensaje modelo</td><td>Mensajes y mails</td></tr>
        <tr><td>10 palabras de tu rubro con su pronunciación</td><td>Todos</td></tr>
      </table>
      <p><strong>Las 3 situaciones para practicar</strong> (con alguien o grabándote):</p>
      <ol>
        <li>Saludar y presentarte a un cliente o colega brasileño.</li>
        <li>Atender a un turista que pregunta un precio, cómo pagar y cómo llegar a un lugar.</li>
        <li>Atender un llamado y tomar un mensaje.</li>
      </ol>
      <p>Por ejemplo, el kit de alguien que trabaja en un restaurante tendría el menú en portugués, cómo ofrecer bebidas, la cuenta ("a conta") y la propina ("gorjeta").</p>` },
    { titulo: "La rúbrica", html: `
      <p class="idea">Una <strong>rúbrica</strong> es una lista de criterios con puntaje para saber si algo está listo. Usala para evaluar cada situación practicada.</p>
      <table>
        <tr><th>Criterio</th><th>2 puntos</th><th>1 punto</th><th>0 puntos</th></tr>
        <tr><td>Se entiende</td><td>La otra persona entendió todo</td><td>Con alguna repetición</td><td>No se entendió</td></tr>
        <tr><td>Pronunciación</td><td>nh, lh, ão y la o final como "u" bien dichas</td><td>Algunas bien</td><td>Leído como castellano</td></tr>
        <tr><td>Falsos amigos</td><td>Ninguno mal usado</td><td>Uno que no cambia el sentido</td><td>Uno que cambia el sentido</td></tr>
        <tr><td>Números y datos</td><td>Dijo y confirmó números, horarios o nombres</td><td>Los dijo sin confirmar</td><td>Errores en los datos</td></tr>
        <tr><td>Cortesía</td><td>Saludo, por favor, obrigado/a y despedida</td><td>Faltó alguna</td><td>Brusco</td></tr>
        <tr><td>Estrategias</td><td>Pidió que repitan o aclaró cuando hizo falta</td><td>A medias</td><td>Hizo como que entendió</td></tr>
      </table>
      <pre><code>Máximo: 12
11 o 12 → listo
7 a 10  → practicá lo que sacó 0 o 1
0 a 6   → volvé a los módulos de esos criterios</code></pre>
      <p>Por ejemplo, si dijiste "a comida está esquisita" queriendo elogiar, sacaste 0 en falsos amigos: repasá tu lista.</p>` },
    { titulo: "Seguir aprendiendo", html: `
      <p class="idea">El portugués avanza rápido para quien habla castellano si se practica un poco todos los días, sobre todo escuchando.</p>
      <table>
        <tr><th>Habilidad</th><th>Práctica de 10 a 15 minutos</th></tr>
        <tr><td>Escuchar</td><td>Un video o una canción brasileña con subtítulos en portugués</td></tr>
        <tr><td>Hablar</td><td>Repetir frases del kit en voz alta; grabarte una vez por semana</td></tr>
        <tr><td>Leer</td><td>Una noticia corta de un diario brasileño</td></tr>
        <tr><td>Escribir</td><td>Un mensaje corto por semana</td></tr>
        <tr><td>Vocabulario</td><td>5 palabras nuevas por semana con tarjetas</td></tr>
      </table>
      <p><strong>Un certificado oficial:</strong> si querés acreditar tu nivel para un trabajo, el <strong>Celpe-Bras</strong> es el examen oficial de portugués de Brasil, y se toma también en Argentina.</p>
      <p><strong>Escuchar es lo más importante:</strong> el portugués se lee fácil, pero se entiende hablado solo con mucha escucha.</p>
      <p>Por ejemplo, escuchar 10 minutos por día una radio o un podcast brasileño hace que en pocas semanas empieces a entender a un turista que habla rápido.</p>` },
  ],
  practica: [
    "Armá tu kit de portugués con las 6 partes de la tabla para tu trabajo o un viaje. Anotá para qué lo armaste.",
    "Practicá las 3 situaciones y evaluá cada una con la rúbrica. Anotá el puntaje de cada una sobre 12.",
    "Armá un plan de 10 a 15 minutos por día con foco en escuchar y seguilo 2 semanas. Anotá cuántos días lo cumpliste.",
  ],
  recursos: [
    { t: "Celpe-Bras: el examen oficial de portugués de Brasil", url: "https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/celpe-bras" },
    { t: "Instituto Camões: lengua y cultura portuguesa", url: "https://www.instituto-camoes.pt/" },
    { t: "WordReference: diccionario español-portugués", url: "https://www.wordreference.com/espt/" },
  ],
  quiz: [
    { q: "Trabajás en un restaurante. ¿Qué frases ponés en tu kit?", opciones: ["Vocabulario de un taller mecánico","Solo los números","El menú, cómo ofrecer bebidas, la cuenta (\"a conta\") y la propina (\"gorjeta\")","Frases de un banco"], correcta: 2, explicacion: "El kit se adapta al rubro. Solo los números tienta por útil, pero no alcanza para atender." },
    { q: "Si querés pedir la cuenta en Brasil, ¿qué palabra usás?", opciones: ["A conta","A cuenta","O conto","A fatura"], correcta: 0, explicacion: "\"A conta\" es la cuenta del restaurante. \"O conto\" tienta por el parecido, pero es un cuento." },
    { q: "Si querés evaluar tu práctica con una rúbrica, ¿qué es una rúbrica?", opciones: ["Un diccionario","Un examen oficial","Una lista de falsos amigos","Una lista de criterios con puntaje para saber si algo está listo"], correcta: 3, explicacion: "La rúbrica evalúa la práctica. El examen oficial tienta, pero la rúbrica es tuya, para mejorar." },
    { q: "Si en la práctica dijiste \"a comida está esquisita\" para elogiar, ¿qué criterio falla?", opciones: ["Pronunciación","Falsos amigos: dijiste que estaba rara","Números y datos","Ninguno"], correcta: 1, explicacion: "Esquisito es raro. Pronunciación tienta porque quizás la dijiste bien, pero el problema es el significado." },
    { q: "Si leíste las palabras como en castellano, sin nasales ni \"u\" final, ¿cuánto sacás en \"Pronunciación\"?", opciones: ["2","1","0","No se evalúa"], correcta: 2, explicacion: "Leído como castellano es 0. 1 tienta porque se entendió algo, pero no practicaste los sonidos." },
    { q: "Si dijiste el horario sin confirmarlo, ¿cuánto sacás en \"Números y datos\"?", opciones: ["1","2","0","No se evalúa"], correcta: 0, explicacion: "Sin confirmar, es 1. 2 tienta porque lo dijiste bien, pero confirmar es lo que evita errores." },
    { q: "Sacaste 8 sobre 12. ¿Qué hacés?", opciones: ["Lo das por listo","Abandonás el portugués","Empezás otro idioma","Practicás lo que sacó 0 o 1"], correcta: 3, explicacion: "Entre 7 y 10 se practica lo que falló. Abandonar tienta por frustración, pero ya tenés una base." },
    { q: "Si hablás castellano y querés mejorar tu portugués, ¿qué habilidad conviene practicar más?", opciones: ["Leer","Escuchar","Escribir a mano","Traducir palabra por palabra"], correcta: 1, explicacion: "Se lee fácil, pero hablado cuesta. Leer tienta porque es lo que ya sale, pero no te prepara para un turista que habla rápido." },
    { q: "Si un aviso de trabajo pide el Celpe-Bras, ¿qué es?", opciones: ["Una aplicación para aprender","Una escuela de idiomas","El examen oficial de portugués de Brasil","Un diccionario"], correcta: 2, explicacion: "Es el certificado oficial. Una aplicación tienta, pero es un examen del gobierno de Brasil." },
    { q: "Si querés rendir el Celpe-Bras sin viajar, ¿se puede tomar en Argentina?", opciones: ["Sí, también se toma en Argentina","No, solo en Brasil","No, solo en Portugal","No existe"], correcta: 0, explicacion: "Se toma en varios países. \"Solo en Brasil\" tienta porque es brasileño, pero hay sedes en el exterior." },
    { q: "Querés practicar 15 minutos por día. ¿Qué plan conviene?", opciones: ["Una vez por mes, 8 horas","Solo leer el diccionario","Esperar a viajar a Brasil","Escuchar, repetir frases del kit, leer algo corto y aprender 5 palabras por semana"], correcta: 3, explicacion: "Poco y constante rinde más. 8 horas un día tienta por intenso, pero se olvida entre medio." },
    { q: "Querés entender a un turista que habla rápido. ¿Qué te ayuda en pocas semanas?", opciones: ["Leer más rápido","Escuchar 10 minutos por día radio, videos o podcasts brasileños","Memorizar la gramática","Hablar más fuerte"], correcta: 1, explicacion: "La escucha diaria entrena el oído. Memorizar gramática tienta como base, pero no te prepara para entender hablado." },
  ],
},
];
