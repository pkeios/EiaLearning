// Temario completo. Lo edita el comando /mejorar. Validar con: node tools/validar.js
// Formato de cada pregunta: { q, opciones: [4 strings], correcta: índice, explicacion }
window.TEMARIO = [
{
  id: 'fundamentos',
  icono: '🧮',
  titulo: 'Fundamentos: Python y matemáticas para IA',
  nivel: 'Básico',
  objetivos: [
    'Manejar Python, entornos virtuales y NumPy con soltura',
    'Entender vectores, matrices, producto punto y gradientes',
    'Leer probabilidad básica: distribuciones y softmax',
  ],
  lecciones: [
    { titulo: 'Python para IA: lo imprescindible', html: `
      <p>Casi todo el ecosistema de IA vive en Python. No necesitás ser experto, pero sí fluido en:</p>
      <ul>
        <li><strong>Estructuras:</strong> listas, diccionarios, comprensiones, funciones, clases, <code>async/await</code> (lo vas a usar con APIs).</li>
        <li><strong>Entornos:</strong> un entorno virtual por proyecto (<code>python -m venv .venv</code> o <code>uv</code>) y dependencias fijadas.</li>
        <li><strong>NumPy:</strong> arrays n-dimensionales y operaciones vectorizadas (corren en C, 10-100x más rápido que bucles).</li>
        <li><strong>Pandas:</strong> tablas de datos; <strong>Jupyter:</strong> experimentar paso a paso.</li>
      </ul>
      <pre><code>import numpy as np
x = np.array([1.0, 2.0, 3.0])
W = np.random.randn(4, 3)   # matriz 4x3
y = W @ x                   # producto matriz-vector -> shape (4,)
print(y.shape)</code></pre>
      <p>Esa última línea es, literalmente, lo que hace una capa de una red neuronal.</p>` },
    { titulo: 'Matemáticas mínimas (y por qué importan)', html: `
      <p><strong>Vectores:</strong> una lista de números. Un texto, una imagen o un usuario se representan como vectores (embeddings).</p>
      <p><strong>Producto punto:</strong> <code>a·b = Σ aᵢbᵢ</code>. Mide cuánto "apuntan en la misma dirección" dos vectores. Es el corazón de la atención en Transformers y de la búsqueda semántica. La <strong>similitud coseno</strong> es el producto punto normalizado: compara dirección e ignora magnitud.</p>
      <p><strong>Matrices:</strong> transformaciones. Una matriz m×n convierte vectores de n dimensiones en vectores de m dimensiones.</p>
      <p><strong>Derivadas y gradiente:</strong> el gradiente apunta hacia donde la función crece más rápido. Entrenar un modelo = moverse en la dirección <em>contraria</em> al gradiente de la pérdida (descenso de gradiente).</p>
      <p><strong>Probabilidad:</strong> un LLM produce una distribución de probabilidad sobre el siguiente token. La función <strong>softmax</strong> convierte números arbitrarios (logits) en probabilidades positivas que suman 1.</p>
      <pre><code>def softmax(z):
    e = np.exp(z - z.max())   # restar el máximo evita overflow
    return e / e.sum()</code></pre>` },
  ],
  practica: [
    'Implementá producto punto, similitud coseno y softmax solo con NumPy y comprobá los resultados a mano con vectores pequeños.',
    'Implementá descenso de gradiente para minimizar f(x) = (x - 3)^2 empezando en x = 0. Probá learning rates 0.01, 0.1 y 1.1 y explicá qué pasa.',
    'Mirá los 4 primeros videos de la serie de redes neuronales de 3Blue1Brown y escribí un resumen de una página.',
  ],
  recursos: [
    { t: 'Tutorial oficial de Python (español)', url: 'https://docs.python.org/es/3/tutorial/' },
    { t: '3Blue1Brown — Redes neuronales (visual)', url: 'https://www.3blue1brown.com/topics/neural-networks' },
    { t: 'Khan Academy — Álgebra lineal', url: 'https://www.khanacademy.org/math/linear-algebra' },
    { t: 'Dive into Deep Learning (libro gratis, con código)', url: 'https://d2l.ai/' },
  ],
  quiz: [
    { q: '¿Cuánto vale el producto punto de [1, 2, 3] y [4, 5, 6]?', opciones: ['32', '21', '[4, 10, 18]', '15'], correcta: 0, explicacion: '1·4 + 2·5 + 3·6 = 4 + 10 + 18 = 32. [4, 10, 18] es el producto elemento a elemento, que no se suma.' },
    { q: '¿En qué dirección actualiza los parámetros el descenso de gradiente?', opciones: ['En la dirección del gradiente', 'En la dirección opuesta al gradiente', 'Perpendicular al gradiente', 'Al azar'], correcta: 1, explicacion: 'El gradiente apunta hacia donde la pérdida crece más rápido; queremos que baje, así que vamos en sentido contrario.' },
    { q: '¿Qué produce softmax a partir de un vector de logits?', opciones: ['Un vector binario', 'Los logits ordenados', 'Una distribución de probabilidad que suma 1', 'La norma del vector'], correcta: 2, explicacion: 'Softmax exponencia y normaliza: todos los valores quedan positivos y suman 1.' },
    { q: 'Multiplicás una matriz 3x4 por un vector de 4 elementos. ¿Qué obtenés?', opciones: ['Un vector de 4', 'Una matriz 4x4', 'Un escalar', 'Un vector de 3'], correcta: 3, explicacion: 'Una matriz m×n lleva vectores de n dimensiones a m dimensiones: 3x4 por 4 da 3.' },
    { q: '¿Por qué se usa NumPy en vez de listas de Python para cálculo numérico?', opciones: ['Porque las operaciones vectorizadas corren en código compilado y son mucho más rápidas', 'Porque las listas no pueden guardar números decimales', 'Porque NumPy usa siempre la GPU', 'Porque Python no tiene bucles'], correcta: 0, explicacion: 'NumPy ejecuta las operaciones sobre arrays en C, sin el costo del intérprete por elemento. No usa GPU por sí solo (para eso existen PyTorch o CuPy).' },
    { q: '¿Qué mide la similitud coseno entre dos vectores?', opciones: ['La distancia euclídea', 'El ángulo entre ellos, sin importar su longitud', 'La suma de sus elementos', 'Cuántos elementos son iguales'], correcta: 1, explicacion: 'Coseno = producto punto dividido por el producto de las normas: solo depende de la dirección. Por eso se usa para comparar embeddings.' },
    { q: 'En softmax, ¿por qué se resta el máximo antes de exponenciar?', opciones: ['Para que el resultado sume 0', 'Para que sea más aleatorio', 'Para evitar overflow numérico; el resultado no cambia', 'Para eliminar valores negativos'], correcta: 2, explicacion: 'Restar una constante a todos los logits no cambia el resultado de softmax, pero evita calcular exp() de números enormes.' },
  ],
},
{
  id: 'ml-clasico',
  icono: '📊',
  titulo: 'Machine Learning clásico',
  nivel: 'Básico',
  objetivos: [
    'Distinguir aprendizaje supervisado, no supervisado y por refuerzo',
    'Detectar overfitting y usar bien train/validación/test',
    'Elegir la métrica correcta (accuracy, precision, recall, F1)',
    'Usar ensembles de árboles (random forest, gradient boosting) y pipelines sin data leakage',
  ],
  lecciones: [
    { titulo: 'Qué es aprender a partir de datos', html: `
      <p>Machine Learning es encontrar una función que, a partir de ejemplos, generalice a datos nuevos.</p>
      <ul>
        <li><strong>Supervisado:</strong> tenés entradas y la respuesta correcta (etiqueta). Regresión (predecir un número) o clasificación (predecir una clase).</li>
        <li><strong>No supervisado:</strong> sin etiquetas. Clustering (k-means), reducción de dimensionalidad (PCA).</li>
        <li><strong>Refuerzo:</strong> un agente aprende por recompensas. Se usa, por ejemplo, para alinear LLMs (RLHF).</li>
      </ul>
      <p>Siempre separás los datos: <strong>train</strong> (aprender), <strong>validación</strong> (elegir hiperparámetros) y <strong>test</strong> (medir al final, una sola vez). Si mirás el test para tomar decisiones, tu número final miente.</p>
      <pre><code>from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
X_tr, X_te, y_tr, y_te = train_test_split(X, y, test_size=0.2, random_state=0)
modelo = LogisticRegression().fit(X_tr, y_tr)
print(modelo.score(X_te, y_te))</code></pre>` },
    { titulo: 'Overfitting, métricas y errores clásicos', html: `
      <p><strong>Overfitting:</strong> el modelo memoriza el entrenamiento (train muy bien, test mal). <strong>Underfitting:</strong> es demasiado simple (mal en ambos). Remedios contra overfitting: más datos, regularización, modelos más simples, early stopping, validación cruzada.</p>
      <p><strong>Métricas de clasificación</strong> (TP = verdaderos positivos, FP = falsos positivos, FN = falsos negativos):</p>
      <ul>
        <li><strong>Precision</strong> = TP / (TP + FP): de lo que marqué positivo, ¿cuánto era cierto?</li>
        <li><strong>Recall</strong> = TP / (TP + FN): de lo positivo real, ¿cuánto encontré?</li>
        <li><strong>F1</strong>: media armónica de ambas.</li>
      </ul>
      <p>Con clases desbalanceadas, la accuracy engaña: si el 99% de los casos son negativos, un modelo que siempre dice "negativo" tiene 99% de accuracy y no sirve para nada.</p>
      <p><strong>Data leakage:</strong> información que no tendrías en producción se cuela en el entrenamiento (por ejemplo, normalizar usando estadísticas del dataset completo antes de separar test). Da resultados irrealmente buenos.</p>` },
    { titulo: 'Árboles, ensembles y pipelines: lo que gana en datos tabulares', html: `
      <p>Aunque los LLMs dominan el texto, en <strong>datos tabulares</strong> (planillas, bases de datos de clientes, transacciones) los modelos basados en árboles siguen siendo la primera opción: un estudio de 2022 mostró que superan a las redes neuronales en la mayoría de los benchmarks tabulares de tamaño medio.</p>
      <ul>
        <li><strong>Árbol de decisión:</strong> preguntas del tipo "¿ingresos &gt; 50.000?" encadenadas. Interpretable, pero un árbol profundo hace overfitting con facilidad.</li>
        <li><strong>Random forest (bagging):</strong> muchos árboles, cada uno entrenado con una muestra aleatoria de filas y de columnas, y se promedian. Reduce la <em>varianza</em>: los errores individuales se compensan.</li>
        <li><strong>Gradient boosting:</strong> árboles chicos entrenados <em>en secuencia</em>; cada uno aprende a corregir los errores (el gradiente de la pérdida) de los anteriores. Suele ser el más preciso. Implementaciones: XGBoost, LightGBM, CatBoost y <code>HistGradientBoostingClassifier</code> de scikit-learn, que además maneja valores faltantes de forma nativa.</li>
      </ul>
      <p>El boosting puede hacer overfitting si sumás demasiados árboles: usá <strong>early stopping</strong> sobre un conjunto de validación y un learning rate moderado.</p>
      <p><strong>Pipelines:</strong> todo el preprocesamiento (escalar, codificar categorías, imputar) va dentro de un <code>Pipeline</code>. Así, en validación cruzada, cada transformación se ajusta solo con el train de cada fold y no hay leakage. Además, el mismo objeto se usa en producción, sin reescribir el preprocesamiento.</p>
      <pre><code>from sklearn.compose import make_column_transformer
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.pipeline import make_pipeline
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import HistGradientBoostingClassifier
from sklearn.model_selection import cross_val_score

prep = make_column_transformer(
    (StandardScaler(), ["edad", "ingresos"]),
    (OneHotEncoder(handle_unknown="ignore"), ["ciudad"]),
)
lineal = make_pipeline(prep, LogisticRegression(max_iter=1000))
boosting = make_pipeline(prep, HistGradientBoostingClassifier(early_stopping=True))

for nombre, modelo in [("lineal", lineal), ("boosting", boosting)]:
    f1 = cross_val_score(modelo, X, y, cv=5, scoring="f1")
    print(nombre, f1.mean().round(3), "±", f1.std().round(3))</code></pre>
      <p>Regla práctica: empezá con un modelo lineal como línea base, después gradient boosting. Si el boosting no mejora claramente, el problema está en los datos o en las features, no en el algoritmo.</p>` },
  ],
  practica: [
    'Con scikit-learn y el dataset Titanic (o cualquiera de Kaggle), entrená una regresión logística y un random forest. Compará accuracy, precision, recall y F1 en test.',
    'Provocá overfitting a propósito con un árbol de decisión sin límite de profundidad y graficá error de train vs test según max_depth.',
    'Con un dataset tabular de Kaggle, compará con validación cruzada de 5 folds una regresión logística en Pipeline, un random forest y HistGradientBoosting. Reportá F1 medio ± desvío de cada uno y justificá cuál pondrías en producción.',
  ],
  recursos: [
    { t: 'Guía de usuario de scikit-learn', url: 'https://scikit-learn.org/stable/user_guide.html' },
    { t: 'scikit-learn — Ensembles: gradient boosting, random forests y más', url: 'https://scikit-learn.org/stable/modules/ensemble.html' },
    { t: 'Why do tree-based models still outperform deep learning on tabular data? (paper)', url: 'https://arxiv.org/abs/2207.08815' },
    { t: 'Machine Learning Specialization (Andrew Ng)', url: 'https://www.coursera.org/specializations/machine-learning-introduction' },
    { t: 'Kaggle Learn (cursos cortos y prácticos)', url: 'https://www.kaggle.com/learn' },
  ],
  quiz: [
    { q: 'Tu modelo tiene 99% de accuracy en train y 70% en test. ¿Qué pasa probablemente?', opciones: ['Underfitting', 'Overfitting', 'Data leakage en train', 'El modelo es perfecto'], correcta: 1, explicacion: 'Gran diferencia entre train y test es la firma del overfitting: memorizó en lugar de generalizar.' },
    { q: '¿Para qué se usa el conjunto de test?', opciones: ['Para ajustar hiperparámetros', 'Para entrenar con más datos al final', 'Para estimar el rendimiento final en datos no vistos, una sola vez', 'Para limpiar los datos'], correcta: 2, explicacion: 'Si usás el test para decidir, pasa a ser parte del entrenamiento y tu estimación queda optimista. Para decidir está el set de validación.' },
    { q: 'Detección de fraude: 99% de transacciones legítimas. Un modelo que siempre dice "legítima" tiene accuracy de...', opciones: ['50%', '1%', '0%', '99%'], correcta: 3, explicacion: 'Acierta todas las legítimas (99%) y ningún fraude. Por eso en datos desbalanceados se mira recall, precision y F1.' },
    { q: '¿Cuál es la fórmula del recall?', opciones: ['TP / (TP + FN)', 'TP / (TP + FP)', '(TP + TN) / total', 'FP / (FP + TN)'], correcta: 0, explicacion: 'Recall = de todos los positivos reales (TP + FN), cuántos detectaste (TP). TP / (TP + FP) es precision.' },
    { q: 'K-means es un algoritmo de...', opciones: ['Clasificación supervisada', 'Clustering no supervisado', 'Regresión lineal', 'Aprendizaje por refuerzo'], correcta: 1, explicacion: 'K-means agrupa datos sin etiquetas en k clusters según cercanía a centroides.' },
    { q: 'Normalizás todo el dataset con su media y desvío y después lo separás en train/test. ¿Qué problema tiene?', opciones: ['Ninguno', 'Underfitting', 'Data leakage: el train "ve" estadísticas del test', 'El modelo entrena más lento'], correcta: 2, explicacion: 'Las estadísticas de normalización deben calcularse solo con train. Si no, información del test se filtra al entrenamiento.' },
    { q: '¿Qué hace un random forest para mejorar a un solo árbol de decisión?', opciones: ['Entrena árboles en secuencia, cada uno corrigiendo al anterior', 'Reemplaza los árboles por una red neuronal', 'Poda el árbol hasta dejarlo con una sola división', 'Promedia muchos árboles entrenados con muestras aleatorias de filas y columnas, reduciendo la varianza'], correcta: 3, explicacion: 'Bagging: árboles independientes cuyos errores se compensan al promediar. Entrenar en secuencia corrigiendo errores es boosting, no random forest.' },
    { q: 'Tenés 50.000 filas de datos tabulares con columnas mixtas y valores faltantes. ¿Qué probás como primer modelo fuerte, después de la línea base?', opciones: ['Un Transformer entrenado desde cero', 'Una red convolucional', 'Gradient boosting (HistGradientBoosting, LightGBM o XGBoost)', 'K-means'], correcta: 2, explicacion: 'En datos tabulares de tamaño medio los árboles con boosting suelen ganar, y algunas implementaciones manejan faltantes de forma nativa. K-means no es supervisado.' },
    { q: '¿Por qué conviene meter el escalado y la codificación dentro de un Pipeline al hacer validación cruzada?', opciones: ['Porque entrena más rápido', 'Porque scikit-learn no permite escalar fuera de un Pipeline', 'Para que el modelo use la GPU', 'Para que cada transformación se ajuste solo con el train de cada fold y no haya leakage'], correcta: 3, explicacion: 'Si escalás todo antes de la validación cruzada, cada fold de validación ya "vio" estadísticas de sí mismo. El Pipeline lo evita y además se reutiliza en producción.' },
    { q: 'En gradient boosting, ¿qué aprende cada árbol nuevo?', opciones: ['A corregir los errores (el gradiente de la pérdida) del conjunto de árboles anteriores', 'Lo mismo que el anterior pero con otra muestra de datos', 'Una partición aleatoria sin mirar los errores', 'A decidir qué árbol anterior usar para cada fila'], correcta: 0, explicacion: 'El boosting es secuencial y aditivo: cada árbol apunta a lo que el conjunto todavía predice mal. Entrenar con otra muestra independiente es la idea del bagging.' },
    { q: 'Tu gradient boosting mejora en train con cada iteración, pero la métrica de validación empeora a partir de la iteración 300. ¿Qué hacés?', opciones: ['Agregar más iteraciones', 'Subir el learning rate', 'Usar early stopping con el set de validación, o bajar el learning rate y limitar los árboles', 'Dejar de usar el set de validación'], correcta: 2, explicacion: 'Es overfitting: a partir de ese punto los árboles nuevos memorizan ruido. Early stopping corta en el mejor punto de validación. Más iteraciones o más learning rate lo empeoran.' },
  ],
},
{
  id: 'deep-learning',
  icono: '🧠',
  titulo: 'Deep Learning y redes neuronales',
  nivel: 'Intermedio',
  objetivos: [
    'Entender forward pass, función de pérdida, backpropagation y optimizadores',
    'Escribir un bucle de entrenamiento en PyTorch',
    'Conocer MLP, CNN y RNN y por qué los Transformers las desplazaron en lenguaje',
  ],
  lecciones: [
    { titulo: 'Cómo aprende una red neuronal', html: `
      <p>Una capa calcula <code>y = activación(W·x + b)</code>. Apilando capas obtenés una red. La <strong>activación no lineal</strong> (ReLU, GELU) es clave: sin ella, cualquier cantidad de capas colapsa en una sola transformación lineal.</p>
      <ol>
        <li><strong>Forward:</strong> pasás datos por la red y obtenés una predicción.</li>
        <li><strong>Pérdida:</strong> medís el error (MSE para regresión, entropía cruzada para clasificación).</li>
        <li><strong>Backpropagation:</strong> calculás el gradiente de la pérdida respecto a cada parámetro con la regla de la cadena.</li>
        <li><strong>Optimizador:</strong> actualizás parámetros (SGD, Adam/AdamW) con un <em>learning rate</em>.</li>
      </ol>
      <p>Un <strong>batch</strong> es un grupo de ejemplos procesados juntos; una <strong>epoch</strong> es una pasada completa por el dataset.</p>
      <pre><code>for epoch in range(10):
    for x, y in loader:
        pred = model(x)
        loss = loss_fn(pred, y)
        optimizer.zero_grad()   # los gradientes se acumulan si no los limpiás
        loss.backward()         # backprop
        optimizer.step()        # actualizar pesos</code></pre>` },
    { titulo: 'Arquitecturas: MLP, CNN, RNN y el salto a Transformers', html: `
      <ul>
        <li><strong>MLP:</strong> capas densas. Sirve para datos tabulares y como bloque dentro de modelos más grandes.</li>
        <li><strong>CNN:</strong> filtros que se deslizan sobre la imagen y comparten pesos; capturan patrones locales (bordes, texturas). Dominaron visión por computadora.</li>
        <li><strong>RNN/LSTM:</strong> procesan secuencias paso a paso con un estado oculto. Problemas: son difíciles de paralelizar y les cuesta recordar dependencias largas (gradientes que se desvanecen).</li>
        <li><strong>Transformers (2017):</strong> la atención permite que cada token mire a todos los demás a la vez. Se paraleliza muy bien en GPU y escala con datos y cómputo: por eso son la base de los LLMs.</li>
      </ul>
      <p>Trucos que vas a ver en todos lados: <strong>normalización</strong> (LayerNorm), <strong>conexiones residuales</strong> (sumar la entrada a la salida para que el gradiente fluya), <strong>dropout</strong> (apagar neuronas al azar para regularizar).</p>` },
  ],
  practica: [
    'Seguí "Neural Networks: Zero to Hero" de Andrej Karpathy hasta micrograd: implementá backpropagation desde cero.',
    'Entrená en PyTorch un MLP sobre MNIST. Después cambiá a una CNN pequeña y compará accuracy y cantidad de parámetros.',
    'Rompé tu entrenamiento a propósito: learning rate 10x más alto, sin zero_grad(), sin activación. Anotá qué síntoma produce cada error.',
  ],
  recursos: [
    { t: 'Andrej Karpathy — Neural Networks: Zero to Hero', url: 'https://karpathy.ai/zero-to-hero.html' },
    { t: 'fast.ai — Practical Deep Learning', url: 'https://course.fast.ai/' },
    { t: 'Tutoriales oficiales de PyTorch', url: 'https://pytorch.org/tutorials/' },
    { t: 'Deep Learning Book (Goodfellow et al.)', url: 'https://www.deeplearningbook.org/' },
  ],
  quiz: [
    { q: 'Una red de 10 capas sin funciones de activación no lineales equivale a...', opciones: ['Una red de 10 capas más rápida', 'Una sola transformación lineal', 'Una CNN', 'Un modelo que no se puede entrenar'], correcta: 1, explicacion: 'La composición de funciones lineales es lineal. La no linealidad es lo que da poder expresivo a la profundidad.' },
    { q: '¿Qué calcula backpropagation?', opciones: ['La predicción de la red', 'El learning rate óptimo', 'Los gradientes de la pérdida respecto a cada parámetro', 'La cantidad de capas necesarias'], correcta: 2, explicacion: 'Backprop aplica la regla de la cadena desde la salida hacia atrás para obtener cada gradiente; el optimizador después los usa.' },
    { q: 'La pérdida sube y oscila sin control desde el inicio del entrenamiento. ¿Causa más probable?', opciones: ['Learning rate demasiado alto', 'Learning rate demasiado bajo', 'Demasiados datos', 'Batch muy grande'], correcta: 0, explicacion: 'Pasos demasiado grandes "saltan" el mínimo y divergen. Un learning rate muy bajo da el síntoma contrario: aprendizaje lentísimo.' },
    { q: 'En PyTorch, ¿por qué se llama a optimizer.zero_grad() en cada paso?', opciones: ['Para reiniciar los pesos', 'Para liberar memoria de la GPU', 'Para poner el learning rate en cero', 'Porque los gradientes se acumulan por defecto'], correcta: 3, explicacion: 'loss.backward() suma al gradiente existente. Sin limpiar, mezclás gradientes de batches anteriores.' },
    { q: '¿Para qué tipo de datos se diseñaron especialmente las CNN?', opciones: ['Datos tabulares', 'Imágenes y otros datos con estructura espacial local', 'Grafos sociales', 'Texto muy largo'], correcta: 1, explicacion: 'Los filtros convolucionales explotan la localidad y comparten pesos en toda la imagen.' },
    { q: '¿Qué ventaja clave tienen los Transformers sobre las RNN?', opciones: ['Usan menos memoria siempre', 'No necesitan datos de entrenamiento', 'Procesan la secuencia en paralelo y manejan mejor dependencias largas', 'No tienen parámetros'], correcta: 2, explicacion: 'La atención conecta cada posición con todas las demás en un paso, sin recorrer la secuencia de forma secuencial como una RNN.' },
    { q: '¿Qué es una epoch?', opciones: ['Una pasada completa por todo el dataset de entrenamiento', 'Un batch de 32 ejemplos', 'Una capa de la red', 'Una actualización de pesos'], correcta: 0, explicacion: 'Una epoch contiene muchos batches; cada batch produce una actualización de pesos.' },
  ],
},
{
  id: 'llms',
  icono: '🤖',
  titulo: 'Transformers y LLMs por dentro',
  nivel: 'Intermedio',
  objetivos: [
    'Explicar tokenización, embeddings y mecanismo de atención',
    'Conocer las etapas de entrenamiento de un LLM (pre-training, SFT, RLHF)',
    'Entender parámetros de muestreo, ventana de contexto y alucinaciones',
  ],
  lecciones: [
    { titulo: 'De texto a predicción: tokens, embeddings y atención', html: `
      <p><strong>Tokenización:</strong> el texto se parte en tokens (trozos de palabra) con algoritmos como BPE. Un token no es una palabra: en inglés, 1 token ≈ 4 caracteres; en español suele haber más tokens por palabra.</p>
      <p><strong>Embeddings:</strong> cada token se convierte en un vector. Se le suma (o se codifica en la atención) información de posición, porque la atención por sí sola no sabe el orden.</p>
      <p><strong>Atención:</strong> cada token genera una query (Q), una key (K) y un value (V). Para cada token, se compara su Q con las K de los demás, se aplica softmax y se promedian los V:</p>
      <pre><code>Atención(Q, K, V) = softmax(Q·Kᵀ / √d_k) · V</code></pre>
      <p>Se divide por √d_k para que los productos punto no crezcan tanto que el softmax se sature. <strong>Multi-head</strong>: varias atenciones en paralelo, cada una aprende relaciones distintas (sintaxis, referencias, etc.).</p>
      <p>Los LLMs actuales son mayormente <strong>decoder-only</strong>: con máscara causal (cada token solo ve los anteriores), entrenados para <strong>predecir el siguiente token</strong>. Generar texto es repetir esa predicción una y otra vez.</p>` },
    { titulo: 'Cómo se entrena y se usa un LLM', html: `
      <ol>
        <li><strong>Pre-training:</strong> billones de tokens de texto, objetivo de siguiente token. Sale un modelo que "completa" texto.</li>
        <li><strong>Fine-tuning supervisado (SFT):</strong> ejemplos de instrucción → buena respuesta. Sale un asistente.</li>
        <li><strong>Alineación con preferencias:</strong> RLHF/RLAIF o DPO, para que sea útil, honesto y seguro.</li>
        <li><strong>Razonamiento:</strong> modelos entrenados (a menudo con RL) para "pensar" antes de responder; mejoran en matemáticas, código y tareas de varios pasos a cambio de más tokens y latencia.</li>
      </ol>
      <p><strong>Ventana de contexto:</strong> máximo de tokens (entrada + salida) que el modelo procesa a la vez. Fuera de ahí, no existe para el modelo.</p>
      <p><strong>Muestreo:</strong> <em>temperatura</em> baja = más determinista; alta = más variado. <em>Top-p</em> limita la elección a los tokens que acumulan probabilidad p.</p>
      <p><strong>Alucinaciones:</strong> el modelo genera texto plausible, no necesariamente verdadero. Se mitiga dando contexto (RAG), pidiendo citas, permitiendo "no sé" y evaluando.</p>
      <p><strong>Leyes de escalado:</strong> el rendimiento mejora de forma predecible con más parámetros, datos y cómputo, y también con más cómputo en inferencia (pensar más).</p>` },
  ],
  practica: [
    'Mirá "Let\'s build GPT: from scratch" de Karpathy y reimplementá un mini-GPT a nivel de caracteres.',
    'Usá un tokenizador (por ejemplo tiktoken o el de Hugging Face) y compará cuántos tokens ocupa el mismo párrafo en español y en inglés.',
    'Implementá la atención de una cabeza en NumPy con Q, K, V aleatorios y verificá que cada fila de los pesos de atención suma 1.',
  ],
  recursos: [
    { t: 'Attention Is All You Need (paper original)', url: 'https://arxiv.org/abs/1706.03762' },
    { t: 'The Illustrated Transformer (Jay Alammar)', url: 'https://jalammar.github.io/illustrated-transformer/' },
    { t: 'Hugging Face — LLM Course', url: 'https://huggingface.co/learn/llm-course' },
    { t: 'Karpathy — Zero to Hero (incluye "Let\'s build GPT")', url: 'https://karpathy.ai/zero-to-hero.html' },
  ],
  quiz: [
    { q: '¿Para qué se entrena principalmente un LLM decoder-only durante el pre-training?', opciones: ['Clasificar sentimientos', 'Traducir idiomas', 'Predecir el siguiente token', 'Responder preguntas de un dataset fijo'], correcta: 2, explicacion: 'El objetivo es siguiente token sobre enormes cantidades de texto; las demás capacidades emergen de ahí y del post-entrenamiento.' },
    { q: 'En la atención, ¿por qué se divide Q·Kᵀ por √d_k?', opciones: ['Para que los productos punto no sean tan grandes que saturen el softmax', 'Para normalizar la longitud del texto', 'Para reducir la memoria usada', 'Para hacer la atención causal'], correcta: 0, explicacion: 'Con d_k grande, los productos punto crecen; el softmax se vuelve casi one-hot y los gradientes se hacen diminutos.' },
    { q: '¿Qué efecto tiene una temperatura cercana a 0?', opciones: ['Respuestas más creativas', 'Salida casi determinista: elige los tokens más probables', 'Respuestas más largas', 'Ignora el prompt de sistema'], correcta: 1, explicacion: 'Temperatura baja concentra la probabilidad en los tokens más probables. Útil para extracción y clasificación.' },
    { q: '¿Qué es la ventana de contexto?', opciones: ['La cantidad de parámetros del modelo', 'El tiempo máximo de respuesta', 'El número de conversaciones simultáneas', 'El máximo de tokens que el modelo puede procesar a la vez'], correcta: 3, explicacion: 'Incluye prompt, historial, documentos y la salida. Lo que no entra, el modelo no lo ve.' },
    { q: '¿Para qué sirve RLHF?', opciones: ['Para comprimir el modelo', 'Para alinear el comportamiento con preferencias humanas', 'Para aumentar la ventana de contexto', 'Para tokenizar mejor'], correcta: 1, explicacion: 'Con comparaciones de respuestas hechas por humanos (o por un modelo, en RLAIF) se ajusta el modelo hacia respuestas preferidas.' },
    { q: '¿Cuántos tokens tiene la frase "Hola mundo"?', opciones: ['Siempre 2', 'Siempre 10', 'Depende del tokenizador', 'Siempre 1'], correcta: 2, explicacion: 'Cada modelo tiene su propio vocabulario; una palabra puede ser uno o varios tokens.' },
    { q: '¿Qué es una alucinación?', opciones: ['Un error de conexión con la API', 'Cuando el modelo se niega a responder', 'Texto plausible pero falso o inventado', 'Una respuesta demasiado larga'], correcta: 2, explicacion: 'El modelo optimiza verosimilitud, no verdad. Por eso se le da contexto verificable y se evalúa.' },
    { q: '¿Por qué los Transformers necesitan información de posición?', opciones: ['Porque la atención por sí sola no distingue el orden de los tokens', 'Para ahorrar memoria', 'Para tokenizar', 'No la necesitan'], correcta: 0, explicacion: 'La atención trata la entrada como un conjunto; sin codificación posicional, "perro muerde hombre" y "hombre muerde perro" serían iguales.' },
  ],
},
{
  id: 'prompting',
  icono: '💬',
  titulo: 'Prompt engineering',
  nivel: 'Intermedio',
  objetivos: [
    'Escribir prompts claros con contexto, ejemplos y formato de salida',
    'Usar system prompts, etiquetas XML, cadena de pensamiento y prompt chaining',
    'Iterar prompts con criterios de éxito y casos de prueba, como un ingeniero',
  ],
  lecciones: [
    { titulo: 'Las técnicas que realmente funcionan', html: `
      <ul>
        <li><strong>Sé claro y directo:</strong> escribí como si se lo explicaras a un colega brillante que no tiene contexto. Decí el objetivo, para quién es y qué es "bien hecho".</li>
        <li><strong>Dá contexto y el porqué:</strong> "Respondé breve porque se lee en el celular" funciona mejor que "respondé breve".</li>
        <li><strong>Ejemplos (few-shot):</strong> 2-5 ejemplos variados de entrada → salida. Es la forma más fuerte de fijar formato y estilo.</li>
        <li><strong>Estructura con etiquetas XML:</strong> separá instrucciones, documentos y ejemplos (<code>&lt;documento&gt;...&lt;/documento&gt;</code>). Reduce confusiones.</li>
        <li><strong>System prompt:</strong> rol y reglas persistentes de la conversación.</li>
        <li><strong>Espacio para pensar:</strong> pedir razonamiento paso a paso (o usar el modo de razonamiento del modelo) mejora tareas de varios pasos.</li>
        <li><strong>Prompt chaining:</strong> dividir una tarea grande en pasos (extraer → analizar → redactar), cada uno con su llamada. Más fácil de depurar.</li>
        <li><strong>Formato de salida:</strong> pedí JSON con un esquema concreto, o usá las salidas estructuradas de la API.</li>
      </ul>
      <pre><code>Sos un analista de soporte. Clasificá el ticket en una categoría.
&lt;categorias&gt;facturacion, bug, pedido_funcionalidad, otro&lt;/categorias&gt;
&lt;ticket&gt;{texto_del_ticket}&lt;/ticket&gt;
Respondé solo con JSON: {"categoria": "...", "motivo": "una frase"}</code></pre>` },
    { titulo: 'Prompting como ingeniería: medir, no adivinar', html: `
      <p>Cambiar palabras "a ojo" no es ingeniería. El proceso:</p>
      <ol>
        <li><strong>Definí criterios de éxito</strong> medibles (ej.: "clasifica bien el 95% de los tickets", "JSON válido siempre").</li>
        <li><strong>Armá casos de prueba</strong> realistas, incluyendo casos difíciles y bordes.</li>
        <li><strong>Escribí una primera versión</strong> simple y medila.</li>
        <li><strong>Leé los fallos</strong>, formulá una hipótesis y cambiá <em>una cosa</em> a la vez.</li>
        <li><strong>Versioná los prompts</strong> como código (git) y guardá los resultados de cada versión.</li>
      </ol>
      <p>Los prompts suelen fallar por falta de contexto, no por falta de palabras mágicas. Si un humano experto no podría hacer la tarea con ese prompt, el modelo tampoco.</p>` },
  ],
  practica: [
    'Elegí una tarea real (resumir mails, clasificar gastos). Escribí 20 casos de prueba con la respuesta esperada y medí 3 versiones de prompt.',
    'Convertí un prompt largo de un solo paso en una cadena de 3 prompts y compará calidad y facilidad de depuración.',
    'Hacé el tutorial interactivo de prompt engineering de Anthropic de principio a fin.',
  ],
  recursos: [
    { t: 'Anthropic — Guía de prompt engineering', url: 'https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview' },
    { t: 'Anthropic — Tutorial interactivo de prompt engineering (GitHub)', url: 'https://github.com/anthropics/prompt-eng-interactive-tutorial' },
    { t: 'Prompting Guide (técnicas y papers)', url: 'https://www.promptingguide.ai/' },
  ],
  quiz: [
    { q: '¿Qué es few-shot prompting?', opciones: ['Hacer pocas llamadas a la API', 'Incluir ejemplos de entrada y salida en el prompt', 'Usar un modelo pequeño', 'Limitar los tokens de salida'], correcta: 1, explicacion: 'Mostrar ejemplos es la forma más efectiva de transmitir formato, tono y criterios.' },
    { q: '¿Para qué sirven las etiquetas XML en un prompt?', opciones: ['Para separar claramente instrucciones, datos y ejemplos', 'Porque el modelo solo entiende XML', 'Para encriptar el prompt', 'Para reducir el costo'], correcta: 0, explicacion: 'Delimitan las partes del prompt para que el modelo no confunda, por ejemplo, el documento a analizar con tus instrucciones.' },
    { q: '¿En qué tareas ayuda más pedir razonamiento paso a paso?', opciones: ['Traducir una palabra', 'Saludar al usuario', 'Problemas de varios pasos: matemáticas, lógica, análisis', 'Devolver un valor fijo'], correcta: 2, explicacion: 'El razonamiento explícito da al modelo "espacio de cómputo" para tareas complejas; en tareas triviales solo agrega costo y latencia.' },
    { q: '¿Qué es prompt chaining?', opciones: ['Repetir el mismo prompt varias veces', 'Unir varios modelos en uno', 'Concatenar todos los documentos', 'Dividir una tarea compleja en varias llamadas encadenadas'], correcta: 3, explicacion: 'Cada eslabón hace una subtarea y su salida alimenta al siguiente. Más fiable y más fácil de depurar.' },
    { q: '¿Qué conviene hacer antes de empezar a optimizar un prompt?', opciones: ['Probar con temperatura 2', 'Definir criterios de éxito y casos de prueba', 'Agregar "por favor" en cada línea', 'Hacer el prompt lo más largo posible'], correcta: 1, explicacion: 'Sin criterios ni casos de prueba no podés saber si un cambio mejora o empeora.' },
    { q: 'Un prompt falla sistemáticamente en un tipo de caso. ¿Qué hacés primero?', opciones: ['Leer los fallos, formular una hipótesis y cambiar una sola cosa', 'Cambiar de modelo inmediatamente', 'Reescribir todo el prompt desde cero', 'Subir la temperatura'], correcta: 0, explicacion: 'Cambiar una cosa por vez y medir te dice qué funcionó. Cambiar todo a la vez no enseña nada.' },
  ],
},
{
  id: 'apis',
  icono: '🔌',
  titulo: 'APIs de LLMs y desarrollo de aplicaciones',
  nivel: 'Intermedio',
  objetivos: [
    'Hacer llamadas a una API de LLM: mensajes, roles, system, max_tokens',
    'Usar streaming, salidas estructuradas, reintentos y caching',
    'Estimar y controlar costo y latencia',
  ],
  lecciones: [
    { titulo: 'Anatomía de una llamada', html: `
      <p>Las APIs de chat son <strong>stateless</strong>: el modelo no recuerda nada entre llamadas. Para una conversación, reenviás el historial completo cada vez.</p>
      <pre><code>import anthropic
client = anthropic.Anthropic()  # lee ANTHROPIC_API_KEY del entorno

resp = client.messages.create(
    model="claude-sonnet-5-5",
    max_tokens=1024,
    system="Sos un tutor de IA. Respondé en español y con ejemplos.",
    messages=[
        {"role": "user", "content": "¿Qué es un embedding?"},
    ],
)
print(resp.content[0].text)
print(resp.usage)  # tokens de entrada y salida = lo que pagás</code></pre>
      <ul>
        <li><strong>messages:</strong> alternancia de roles <code>user</code> / <code>assistant</code>.</li>
        <li><strong>system:</strong> instrucciones de rol y reglas.</li>
        <li><strong>max_tokens:</strong> límite de la salida (si se corta, la respuesta queda incompleta).</li>
        <li><strong>usage:</strong> tokens consumidos; el costo se calcula con ellos.</li>
      </ul>
      <p>Nunca pongas la API key en el frontend ni en el repositorio: usá variables de entorno y un backend.</p>` },
    { titulo: 'Lo que separa un demo de una app real', html: `
      <ul>
        <li><strong>Streaming:</strong> mostrás tokens a medida que llegan. No acelera la respuesta total, pero la latencia percibida baja muchísimo.</li>
        <li><strong>Salidas estructuradas:</strong> pedí JSON con esquema (o usá la función de salidas estructuradas / tool use) y <em>validá</em> siempre del lado de tu código.</li>
        <li><strong>Errores y reintentos:</strong> 429 (rate limit) y 5xx/sobrecarga se reintentan con <em>backoff exponencial</em> con jitter. Errores 400 no: hay que arreglar la petición.</li>
        <li><strong>Costo:</strong> tokens de entrada + tokens de salida (la salida suele ser más cara por token). Elegí el modelo más chico que cumpla tus evals.</li>
        <li><strong>Prompt caching:</strong> si reutilizás un prefijo largo (system prompt, documentos), cachearlo reduce costo y latencia.</li>
        <li><strong>Batch:</strong> para trabajos masivos no urgentes, las APIs de lotes son más baratas.</li>
        <li><strong>Timeouts y fallbacks:</strong> qué pasa si el proveedor no responde. Tu app tiene que degradar con elegancia.</li>
      </ul>` },
  ],
  practica: [
    'Construí un chatbot de terminal con historial, streaming y un comando /reset. Mostrá tokens y costo estimado de cada turno.',
    'Hacé un extractor que reciba facturas en texto y devuelva JSON validado con Pydantic (o Zod). Si la validación falla, reintentá enviando el error al modelo.',
    'Medí la latencia hasta el primer token con y sin streaming, y con un modelo grande vs uno chico.',
  ],
  recursos: [
    { t: 'Documentación de la API de Claude', url: 'https://docs.claude.com/' },
    { t: 'Anthropic Cookbook (recetas con código)', url: 'https://github.com/anthropics/anthropic-cookbook' },
    { t: 'Documentación de la API de OpenAI', url: 'https://platform.openai.com/docs' },
  ],
  quiz: [
    { q: 'Las APIs de chat son stateless. ¿Qué implica?', opciones: ['Que no guardan logs', 'Que hay que enviar el historial de la conversación en cada llamada', 'Que no se pueden usar en producción', 'Que la respuesta siempre es igual'], correcta: 1, explicacion: 'El modelo solo ve lo que mandás en esa petición. La "memoria" la gestiona tu aplicación.' },
    { q: 'Recibís un error 429. ¿Qué hacés?', opciones: ['Reintentar con backoff exponencial', 'Reintentar inmediatamente en un bucle', 'Cambiar la API key', 'Ignorarlo, es un éxito'], correcta: 0, explicacion: '429 = rate limit. Esperar cada vez más (con algo de aleatoriedad) evita empeorar la congestión.' },
    { q: '¿Qué mejora principalmente el streaming?', opciones: ['El costo total', 'La calidad de la respuesta', 'La latencia percibida por el usuario', 'La ventana de contexto'], correcta: 2, explicacion: 'El usuario ve el primer token enseguida, aunque la respuesta completa tarde lo mismo.' },
    { q: '¿De qué depende el costo de una llamada?', opciones: ['Del número de palabras de la pregunta solamente', 'Del tiempo de respuesta', 'De la cantidad de usuarios', 'De los tokens de entrada y de salida'], correcta: 3, explicacion: 'Se cobra por token, con precios distintos para entrada y salida (y descuentos para tokens cacheados).' },
    { q: '¿Cuándo ayuda el prompt caching?', opciones: ['Cuando cada prompt es completamente distinto', 'Cuando reutilizás un prefijo largo (instrucciones o documentos) en muchas llamadas', 'Solo en modelos open source', 'Cuando usás temperatura 0'], correcta: 1, explicacion: 'Lo cacheado es el prefijo repetido; si no se repite nada, no hay nada que reutilizar.' },
    { q: '¿Dónde debe estar la API key en una app web?', opciones: ['En el JavaScript del frontend', 'En el repositorio para que el equipo la tenga', 'En el backend, leída de variables de entorno o un gestor de secretos', 'En la URL'], correcta: 2, explicacion: 'Todo lo que llega al navegador es público. La key en el frontend o en git termina filtrada.' },
  ],
},
{
  id: 'rag',
  icono: '📚',
  titulo: 'Embeddings y RAG',
  nivel: 'Intermedio',
  objetivos: [
    'Entender embeddings y búsqueda semántica',
    'Construir un pipeline RAG completo: ingestión, chunking, retrieval y generación',
    'Diagnosticar y mejorar un RAG: híbrido, reranking, evaluación del retrieval',
  ],
  lecciones: [
    { titulo: 'Embeddings y búsqueda semántica', html: `
      <p>Un <strong>modelo de embeddings</strong> convierte texto en un vector denso (cientos o miles de dimensiones) donde textos de significado parecido quedan cerca. "¿Cómo reseteo mi clave?" y "olvidé mi contraseña" quedan próximos aunque no compartan palabras.</p>
      <p><strong>Búsqueda semántica:</strong> embebés tus documentos una vez, embebés la consulta, y buscás los vectores más cercanos (similitud coseno). Para escalar, se usan índices de vecinos aproximados (HNSW) en bases vectoriales: pgvector, Qdrant, Chroma, FAISS, etc.</p>
      <pre><code># pseudocódigo
docs_vec = embed(chunks)            # una vez, al indexar
q_vec = embed("¿cómo pido reembolso?")
top = mas_cercanos(q_vec, docs_vec, k=5)</code></pre>
      <p>La búsqueda léxica (BM25) sigue siendo excelente para nombres propios, códigos y términos exactos. Lo mejor suele ser combinarlas.</p>` },
    { titulo: 'El pipeline RAG y cómo mejorarlo', html: `
      <p><strong>RAG</strong> (Retrieval-Augmented Generation): antes de responder, recuperás documentos relevantes y se los pasás al modelo como contexto. Da conocimiento privado y actualizado sin reentrenar, y permite citar fuentes.</p>
      <ol>
        <li><strong>Ingestión:</strong> extraer texto limpio (PDF, HTML, etc.).</li>
        <li><strong>Chunking:</strong> partir en trozos. Muy grandes: mezclan temas y gastan contexto. Muy chicos: pierden contexto. Respetá la estructura (secciones, párrafos) y usá algo de solapamiento.</li>
        <li><strong>Indexado:</strong> embeddings + índice vectorial (y BM25 para búsqueda híbrida).</li>
        <li><strong>Retrieval:</strong> top-k candidatos; un <strong>reranker</strong> (cross-encoder) reordena con más precisión.</li>
        <li><strong>Generación:</strong> prompt con los chunks, instrucción de responder solo con esa información y citar; permitir "no lo sé".</li>
      </ol>
      <p><strong>Depuración:</strong> si la respuesta es mala, mirá primero si los chunks correctos fueron recuperados. Medí el retrieval por separado (recall@k) y la generación por separado (fidelidad al contexto, relevancia).</p>
      <p>Mejoras avanzadas: agregar contexto del documento a cada chunk antes de embeberlo (contextual retrieval), reescribir la consulta, metadatos para filtrar, y RAG agéntico (el modelo decide qué buscar y cuándo).</p>` },
  ],
  practica: [
    'Construí un RAG sobre tus propios apuntes (o la documentación de una librería): chunking, embeddings, pgvector o Chroma, y respuestas con citas.',
    'Creá 30 preguntas con el chunk correcto esperado y medí recall@5 con búsqueda vectorial, BM25 e híbrida.',
    'Agregá un reranker y medí cuánto cambia la calidad de las respuestas.',
  ],
  recursos: [
    { t: 'Paper original de RAG (Lewis et al., 2020)', url: 'https://arxiv.org/abs/2005.11401' },
    { t: 'Anthropic — Contextual Retrieval', url: 'https://www.anthropic.com/news/contextual-retrieval' },
    { t: 'pgvector (búsqueda vectorial en Postgres)', url: 'https://github.com/pgvector/pgvector' },
    { t: 'Sentence Transformers (embeddings open source)', url: 'https://www.sbert.net/' },
  ],
  quiz: [
    { q: '¿Qué problema resuelve principalmente RAG?', opciones: ['Hacer el modelo más rápido', 'Dar al modelo conocimiento privado o actualizado sin reentrenarlo', 'Reducir el tamaño del modelo', 'Eliminar la necesidad de prompts'], correcta: 1, explicacion: 'Recupera información relevante en el momento de la consulta y la incluye en el contexto.' },
    { q: '¿Qué pasa si los chunks son demasiado grandes?', opciones: ['Mezclan temas, diluyen la relevancia y gastan contexto', 'El modelo de embeddings falla siempre', 'Mejora siempre la precisión', 'Se reduce el costo'], correcta: 0, explicacion: 'Un chunk con varios temas tiene un embedding "promedio" menos preciso y mete texto irrelevante en el prompt.' },
    { q: '¿Qué es la búsqueda híbrida?', opciones: ['Buscar en dos bases de datos', 'Usar dos modelos de lenguaje', 'Combinar búsqueda léxica (BM25) con búsqueda semántica (embeddings)', 'Buscar en texto e imágenes'], correcta: 2, explicacion: 'BM25 acierta en términos exactos (códigos, nombres); los embeddings, en sinónimos y paráfrasis. Juntas cubren más casos.' },
    { q: '¿Qué hace un reranker?', opciones: ['Genera la respuesta final', 'Divide los documentos en chunks', 'Calcula los embeddings', 'Reordena los candidatos recuperados con un modelo más preciso'], correcta: 3, explicacion: 'Un cross-encoder mira consulta y documento juntos: es más lento pero más preciso, así que se aplica solo sobre los top candidatos.' },
    { q: 'Tu RAG responde mal. ¿Qué revisás primero?', opciones: ['Si el retrieval trajo los documentos correctos', 'El color de la interfaz', 'Cambiar a un modelo más grande', 'Subir la temperatura'], correcta: 0, explicacion: 'Si el contexto no tiene la respuesta, ningún modelo puede darla bien. Separá fallos de retrieval de fallos de generación.' },
    { q: '¿Qué mide recall@k en retrieval?', opciones: ['La velocidad de la búsqueda', 'La proporción de documentos relevantes que aparecen entre los k primeros resultados', 'Cuántos tokens tiene la respuesta', 'La similitud media de los resultados'], correcta: 1, explicacion: 'Si el chunk correcto no está en el top-k, el generador nunca lo ve.' },
  ],
},
{
  id: 'agentes',
  icono: '🛠️',
  titulo: 'Agentes, tool use y MCP',
  nivel: 'Avanzado',
  objetivos: [
    'Implementar el bucle de tool use desde cero',
    'Distinguir workflows de agentes y conocer los patrones principales',
    'Entender MCP y diseñar herramientas que un modelo use bien',
  ],
  lecciones: [
    { titulo: 'Tool use: el bucle que da superpoderes', html: `
      <p>Le describís al modelo herramientas (nombre, descripción, esquema JSON de parámetros). Cuando lo necesita, el modelo responde pidiendo usar una herramienta con ciertos argumentos. <strong>Tu código la ejecuta</strong> y le devuelve el resultado. Repetís hasta que el modelo da una respuesta final.</p>
      <pre><code>mensajes = [{"role": "user", "content": pregunta}]
for paso in range(10):                      # límite de pasos: siempre
    resp = llamar_modelo(mensajes, tools=HERRAMIENTAS)
    mensajes.append({"role": "assistant", "content": resp.content})
    if resp.stop_reason != "tool_use":
        break                                # respuesta final
    resultados = [ejecutar(b.name, b.input) for b in resp.content if b.type == "tool_use"]
    mensajes.append({"role": "user", "content": resultados})</code></pre>
      <p>Diseñar buenas herramientas importa tanto como el prompt: nombres claros, descripciones que digan cuándo usarla, parámetros documentados, errores que expliquen cómo corregir y respuestas concisas (no devuelvas 10.000 líneas).</p>` },
    { titulo: 'Workflows, agentes y MCP', html: `
      <p><strong>Workflow:</strong> el camino lo define tu código (paso 1 → paso 2). <strong>Agente:</strong> el modelo decide dinámicamente qué hacer y qué herramientas usar. Empezá por lo más simple: muchas tareas se resuelven con una sola llamada bien hecha o un workflow.</p>
      <p>Patrones comunes (de "Building effective agents" de Anthropic):</p>
      <ul>
        <li><strong>Prompt chaining:</strong> pasos secuenciales.</li>
        <li><strong>Routing:</strong> clasificar la entrada y mandarla al flujo adecuado.</li>
        <li><strong>Paralelización:</strong> subtareas en paralelo o varias votaciones.</li>
        <li><strong>Orquestador-trabajadores:</strong> un modelo reparte subtareas a otros.</li>
        <li><strong>Evaluador-optimizador:</strong> uno genera, otro critica, se itera.</li>
      </ul>
      <p><strong>MCP (Model Context Protocol):</strong> estándar abierto para conectar aplicaciones de IA con herramientas y datos. Un <em>servidor MCP</em> expone tools, resources y prompts; cualquier cliente compatible (Claude Code, IDEs, apps) los puede usar sin integración a medida.</p>
      <p><strong>Riesgos:</strong> bucles infinitos, costos que se disparan, acciones irreversibles. Salvaguardas: límite de pasos y presupuesto, confirmación humana para acciones destructivas, permisos mínimos, logs de cada paso.</p>` },
  ],
  practica: [
    'Implementá desde cero (sin frameworks) un agente con 3 herramientas: calculadora, búsqueda en tus archivos y lectura de una URL. Logueá cada paso.',
    'Escribí tu propio servidor MCP (por ejemplo, que consulte tu base de notas) y conectalo a Claude Code o Claude Desktop.',
    'Implementá el patrón evaluador-optimizador para mejorar un texto hasta que un juez le dé la nota mínima, con un máximo de 3 iteraciones.',
  ],
  recursos: [
    { t: 'Anthropic — Building effective agents', url: 'https://www.anthropic.com/engineering/building-effective-agents' },
    { t: 'Model Context Protocol (documentación oficial)', url: 'https://modelcontextprotocol.io/' },
    { t: 'Documentación de tool use de Claude', url: 'https://docs.claude.com/en/docs/agents-and-tools/tool-use/overview' },
  ],
  quiz: [
    { q: 'En tool use, ¿quién ejecuta la herramienta?', opciones: ['El modelo, en los servidores del proveedor', 'Tu aplicación; el modelo solo pide la llamada con argumentos', 'El navegador del usuario siempre', 'Nadie, es simulado'], correcta: 1, explicacion: 'El modelo genera una solicitud estructurada; tu código decide si la ejecuta y devuelve el resultado. (Existen herramientas del lado del servidor del proveedor, pero el patrón base es este.)' },
    { q: '¿Cuál es la diferencia entre un workflow y un agente?', opciones: ['No hay diferencia', 'Los agentes no usan LLMs', 'En un workflow los pasos los define el código; en un agente los decide el modelo', 'Los workflows son siempre más caros'], correcta: 2, explicacion: 'Más autonomía da flexibilidad, pero también menos previsibilidad, más costo y más riesgo.' },
    { q: '¿Qué es MCP?', opciones: ['Un protocolo abierto para conectar apps de IA con herramientas y fuentes de datos', 'Un modelo de lenguaje', 'Una base de datos vectorial', 'Un formato de fine-tuning'], correcta: 0, explicacion: 'Model Context Protocol estandariza cómo un cliente de IA descubre y usa herramientas, recursos y prompts de un servidor.' },
    { q: '¿Cuál es la recomendación al empezar un sistema con LLMs?', opciones: ['Empezar con un sistema multi-agente', 'Usar el framework más completo disponible', 'Darle al agente todos los permisos', 'Empezar con la solución más simple y agregar complejidad solo si mejora los resultados'], correcta: 3, explicacion: 'Cada capa agéntica agrega latencia, costo y modos de fallo; tiene que justificarse con mejoras medidas.' },
    { q: '¿Qué salvaguarda es imprescindible en un agente que puede borrar archivos o enviar mails?', opciones: ['Temperatura 0', 'Confirmación humana para acciones irreversibles y límite de pasos', 'Un system prompt más largo', 'Usar el modelo más grande'], correcta: 1, explicacion: 'El modelo puede equivocarse o ser manipulado; las acciones irreversibles necesitan un control fuera del modelo.' },
    { q: '¿Qué hace que una herramienta sea fácil de usar para un modelo?', opciones: ['Que tenga muchos parámetros opcionales', 'Que devuelva toda la información posible', 'Nombre y descripción claros, parámetros documentados y errores que expliquen cómo corregir', 'Que su nombre sea corto y críptico'], correcta: 2, explicacion: 'El modelo solo conoce la herramienta por su descripción: escribila como documentación para un colega nuevo.' },
  ],
},
{
  id: 'evals',
  icono: '🧪',
  titulo: 'Evaluación de sistemas con LLMs (evals)',
  nivel: 'Avanzado',
  objetivos: [
    'Construir un dataset de evaluación a partir de casos reales',
    'Combinar evaluaciones por código, LLM-as-judge y revisión humana',
    'Usar evals para iterar sin regresiones',
  ],
  lecciones: [
    { titulo: 'Por qué las evals son la habilidad número uno', html: `
      <p>Sin evals, cada cambio de prompt, modelo o retrieval es una apuesta. Con evals, es un experimento. Es lo que más diferencia a un AI engineer profesional.</p>
      <p><strong>Empezá por el análisis de errores:</strong> leé 50-100 trazas reales (entradas, salidas, pasos intermedios). Anotá qué falla y agrupalo en categorías. Las categorías más frecuentes son las que vale la pena medir.</p>
      <p>Tipos de evaluación, de más barata a más cara:</p>
      <ul>
        <li><strong>Por código:</strong> ¿es JSON válido?, ¿contiene el campo?, ¿coincide exactamente?, ¿pasa los tests? Rápidas, deterministas, ideales para CI.</li>
        <li><strong>LLM-as-judge:</strong> un modelo evalúa con una rúbrica concreta (preferiblemente veredicto binario pasa/falla con justificación). Para criterios subjetivos: tono, fidelidad al contexto, utilidad.</li>
        <li><strong>Humana:</strong> la referencia de verdad, cara. Se usa para crear etiquetas y calibrar jueces.</li>
      </ul>` },
    { titulo: 'Montar un pipeline de evals', html: `
      <ol>
        <li><strong>Dataset dorado:</strong> 20-50 casos reales al principio (crecé a cientos), con la salida esperada o criterios. Incluí casos difíciles y casos que ya fallaron en producción.</li>
        <li><strong>Métricas:</strong> una por modo de fallo importante.</li>
        <li><strong>Ejecución automática:</strong> corré las evals en cada cambio (CI) y guardá resultados por versión de prompt/modelo.</li>
        <li><strong>Regresiones:</strong> un cambio que mejora un caso no puede romper otros diez.</li>
      </ol>
      <p><strong>Sesgos del LLM-as-judge:</strong> prefiere respuestas largas, la primera opción en comparaciones, y a veces sus propias respuestas. Mitigaciones: rúbricas específicas, veredictos binarios, alternar el orden, y <em>medir el acuerdo del juez con etiquetas humanas</em> antes de confiar en él.</p>
      <p><strong>Offline vs online:</strong> offline = dataset fijo antes de desplegar. Online = señales en producción (feedback del usuario, tasa de éxito de tareas, A/B tests).</p>` },
  ],
  practica: [
    'Tomá tu RAG o chatbot, revisá 50 respuestas a mano y armá una taxonomía de errores con su frecuencia.',
    'Escribí un juez LLM binario para tu modo de fallo más común. Etiquetá 40 casos a mano y medí el acuerdo (accuracy, y precision/recall del juez).',
    'Integrá tus evals en CI para que fallen si la tasa de aprobación baja de un umbral.',
  ],
  recursos: [
    { t: 'Hamel Husain — Your AI Product Needs Evals', url: 'https://hamel.dev/blog/posts/evals/' },
    { t: 'Anthropic — Crear evaluaciones empíricas', url: 'https://docs.claude.com/en/docs/test-and-evaluate/develop-tests' },
    { t: 'Chip Huyen — AI Engineering (libro, O\'Reilly)', url: 'https://www.oreilly.com/library/view/ai-engineering/9781098166298/' },
  ],
  quiz: [
    { q: '¿Cuál es el primer paso recomendado para crear evals útiles?', opciones: ['Elegir una métrica genérica como BLEU', 'Leer trazas reales y hacer análisis de errores', 'Comprar una herramienta de evals', 'Pedirle al modelo que se evalúe solo'], correcta: 1, explicacion: 'Las métricas útiles salen de los fallos que realmente ocurren en tu sistema, no de una lista genérica.' },
    { q: '¿Cuándo conviene un LLM-as-judge?', opciones: ['Para verificar si un JSON es válido', 'Para contar palabras', 'Para criterios subjetivos difíciles de verificar con código', 'Nunca, siempre es poco fiable'], correcta: 2, explicacion: 'Si se puede verificar con código, hacelo con código: es más barato y determinista. El juez es para lo subjetivo.' },
    { q: '¿Cuál es un sesgo conocido de los jueces LLM?', opciones: ['Preferir respuestas más largas', 'Preferir respuestas en mayúsculas', 'Rechazar todo', 'No poder leer JSON'], correcta: 0, explicacion: 'También tienen sesgo de posición y de autopreferencia. Por eso se calibran contra humanos.' },
    { q: '¿Cómo sabés si podés confiar en tu juez LLM?', opciones: ['Si usa el modelo más caro', 'Si su prompt es largo', 'Si da notas altas', 'Midiendo su acuerdo con etiquetas humanas'], correcta: 3, explicacion: 'Un juez es un clasificador: medí su precision y recall contra la verdad humana.' },
    { q: '¿Para qué sirven las evals de regresión?', opciones: ['Para entrenar el modelo', 'Para asegurar que un cambio no rompe casos que ya funcionaban', 'Para reducir costos', 'Para generar datos sintéticos'], correcta: 1, explicacion: 'Mejorar un caso empeorando otros es muy común con prompts; las regresiones lo detectan.' },
    { q: '¿Qué evaluación es ideal para verificar que la salida es JSON válido con un campo "categoria"?', opciones: ['Una assertion en código', 'Un juez LLM', 'Revisión humana', 'Un A/B test'], correcta: 0, explicacion: 'Es determinista y verificable: parsear y chequear el campo. Gratis y exacto.' },
  ],
},
{
  id: 'fine-tuning',
  icono: '🎛️',
  titulo: 'Fine-tuning y modelos abiertos',
  nivel: 'Avanzado',
  objetivos: [
    'Decidir cuándo conviene fine-tuning frente a prompting o RAG',
    'Entender SFT, DPO, LoRA y QLoRA',
    'Correr y cuantizar modelos abiertos localmente',
  ],
  lecciones: [
    { titulo: '¿Cuándo hacer fine-tuning?', html: `
      <p>Orden recomendado: <strong>prompting → RAG / herramientas → fine-tuning</strong>. El fine-tuning es más caro de mantener: datos, entrenamiento, evals, redespliegue cada vez que cambia algo.</p>
      <p><strong>Buen uso:</strong></p>
      <ul>
        <li>Fijar un estilo, formato o comportamiento muy específico de forma consistente.</li>
        <li>Una tarea estrecha y repetida donde un modelo chico afinado iguala a uno grande (menos costo y latencia).</li>
        <li>Destilar: entrenar un modelo chico con salidas de uno grande.</li>
      </ul>
      <p><strong>Mal uso:</strong> agregar conocimiento que cambia seguido (para eso, RAG) o tapar un prompt mal hecho.</p>
      <p><strong>Tipos:</strong> <em>SFT</em> (pares instrucción → respuesta ideal) y <em>ajuste por preferencias</em> como DPO (pares respuesta preferida / rechazada, sin entrenar un modelo de recompensa aparte).</p>` },
    { titulo: 'LoRA, cuantización e inferencia local', html: `
      <p><strong>LoRA:</strong> en vez de actualizar todos los pesos, congelás el modelo y entrenás matrices pequeñas de bajo rango que se suman a ciertas capas. Entrenás menos del 1% de parámetros, con mucha menos memoria, y el adaptador pesa megas.</p>
      <p><strong>QLoRA:</strong> LoRA sobre un modelo base cuantizado a 4 bits: permite afinar modelos grandes en una sola GPU.</p>
      <p><strong>Cuantización:</strong> representar los pesos con menos bits (16 → 8 → 4). Menos memoria y más velocidad, con alguna pérdida de calidad. Formatos comunes: GGUF (llama.cpp / Ollama), AWQ, GPTQ.</p>
      <p><strong>Inferencia local y servidores:</strong> Ollama y llama.cpp para tu máquina; vLLM o TGI para servir con alto rendimiento en producción.</p>
      <p>Regla para estimar memoria de los pesos: parámetros × bytes por parámetro. Un modelo de 8B en 16 bits ≈ 16 GB; en 4 bits ≈ 4-5 GB (más la memoria del contexto, la KV cache).</p>` },
  ],
  practica: [
    'Instalá Ollama, corré un modelo abierto de 7-8B y compará calidad y velocidad en 4 bits vs 8 bits con 10 prompts tuyos.',
    'Hacé fine-tuning con LoRA (Hugging Face PEFT o Unsloth) de un modelo chico para una tarea de clasificación, y comparalo con few-shot prompting usando tus evals.',
  ],
  recursos: [
    { t: 'LoRA (paper)', url: 'https://arxiv.org/abs/2106.09685' },
    { t: 'QLoRA (paper)', url: 'https://arxiv.org/abs/2305.14314' },
    { t: 'Hugging Face PEFT', url: 'https://huggingface.co/docs/peft' },
    { t: 'Ollama', url: 'https://ollama.com/' },
  ],
  quiz: [
    { q: '¿Qué hace LoRA?', opciones: ['Entrena todos los pesos con menor learning rate', 'Entrena matrices de bajo rango añadidas, con los pesos originales congelados', 'Elimina capas del modelo', 'Cuantiza el modelo a 4 bits'], correcta: 1, explicacion: 'Aprende un "delta" de bajo rango por capa. Mucho menos memoria y almacenamiento que un fine-tuning completo.' },
    { q: 'Tu chatbot necesita conocer los precios que cambian cada día. ¿Qué usás?', opciones: ['Fine-tuning diario', 'Pre-training propio', 'RAG o una herramienta que consulte los precios', 'Un prompt más largo con los precios del año pasado'], correcta: 2, explicacion: 'El conocimiento cambiante se inyecta en el momento de la consulta; reentrenar cada día es caro y lento.' },
    { q: '¿Qué es cuantizar un modelo?', opciones: ['Representar los pesos con menos bits para ahorrar memoria y ganar velocidad', 'Contar sus parámetros', 'Dividirlo en varios modelos', 'Entrenarlo con menos datos'], correcta: 0, explicacion: 'Pasar de 16 a 8 o 4 bits por peso reduce memoria proporcionalmente, con algo de pérdida de calidad.' },
    { q: '¿Qué es QLoRA?', opciones: ['Una versión de LoRA para imágenes', 'Un tokenizador', 'Un formato de archivo', 'LoRA aplicado sobre un modelo base cuantizado a 4 bits'], correcta: 3, explicacion: 'Combina cuantización del base con adaptadores LoRA, permitiendo afinar modelos grandes en hardware modesto.' },
    { q: '¿Qué datos usa DPO?', opciones: ['Pares de respuesta preferida y rechazada', 'Solo texto sin etiquetar', 'Imágenes etiquetadas', 'Puntuaciones de un modelo de recompensa entrenado aparte'], correcta: 0, explicacion: 'DPO optimiza directamente con preferencias, sin entrenar un modelo de recompensa separado como en RLHF clásico.' },
    { q: '¿Cuánta memoria ocupan aproximadamente los pesos de un modelo de 8B parámetros en 16 bits?', opciones: ['8 MB', '1 GB', '16 GB', '128 GB'], correcta: 2, explicacion: '8.000 millones × 2 bytes = 16 GB, sin contar la KV cache del contexto.' },
  ],
},
{
  id: 'produccion',
  icono: '🚀',
  titulo: 'LLMOps: llevar a producción',
  nivel: 'Avanzado',
  objetivos: [
    'Instrumentar observabilidad: trazas, tokens, costo, latencia',
    'Optimizar costo y latencia sin perder calidad',
    'Hacer sistemas fiables: validación, fallbacks, versionado',
  ],
  lecciones: [
    { titulo: 'Observabilidad y versionado', html: `
      <p>En producción, si no lo registrás, no existió. Por cada llamada guardá: entrada, salida, modelo, versión del prompt, tokens, costo, latencia (total y hasta el primer token) y errores. En agentes, la <strong>traza</strong> completa: cada paso y cada llamada a herramientas.</p>
      <p>Herramientas típicas: OpenTelemetry, Langfuse, LangSmith, Arize Phoenix, o tu propia tabla en Postgres al principio.</p>
      <p><strong>Versioná prompts y configuración</strong> como código: te permite reproducir un resultado, comparar versiones con tus evals y hacer rollback. Desplegá cambios detrás de feature flags o con A/B tests.</p>
      <p><strong>Privacidad:</strong> los logs contienen datos de usuarios. Enmascará PII, definí retención y controlá quién accede.</p>` },
    { titulo: 'Costo, latencia y fiabilidad', html: `
      <ul>
        <li><strong>Latencia:</strong> streaming, modelos más chicos para pasos simples, paralelizar llamadas independientes, cachear, prompts más cortos, limitar max_tokens.</li>
        <li><strong>Costo:</strong> prompt caching, APIs batch para trabajos no urgentes, <em>routing</em> (consultas fáciles a un modelo barato, difíciles a uno potente), cache de respuestas para preguntas repetidas.</li>
        <li><strong>Fiabilidad:</strong> timeouts, reintentos con backoff, proveedor o modelo de respaldo, validar salidas contra un esquema y reintentar si fallan.</li>
        <li><strong>Guardrails:</strong> chequeos de entrada y salida (temas permitidos, PII, formato) antes de mostrar o ejecutar algo.</li>
        <li><strong>Rate limits:</strong> conocé tus límites, encolá picos de tráfico y limitá por usuario para evitar abusos.</li>
      </ul>
      <p>Toda optimización se valida con tus evals: un modelo más barato que baja la calidad no es ahorro.</p>` },
  ],
  practica: [
    'Agregá a tu app un log por llamada (Postgres o Langfuse) con tokens, costo, latencia y versión de prompt. Hacé un dashboard simple.',
    'Implementá routing: un clasificador barato decide si la consulta va al modelo chico o al grande. Medí ahorro y calidad con tus evals.',
  ],
  recursos: [
    { t: 'Langfuse (observabilidad open source)', url: 'https://langfuse.com/docs' },
    { t: 'OpenTelemetry', url: 'https://opentelemetry.io/docs/' },
    { t: 'Documentación de prompt caching de Claude', url: 'https://docs.claude.com/en/docs/build-with-claude/prompt-caching' },
  ],
  quiz: [
    { q: '¿Qué conviene registrar por cada llamada al LLM?', opciones: ['Solo los errores', 'Entrada, salida, modelo, versión de prompt, tokens, costo y latencia', 'Solo el costo mensual', 'Nada, por privacidad'], correcta: 1, explicacion: 'Sin estos datos no podés depurar, optimizar ni comparar versiones. La privacidad se resuelve enmascarando y con retención, no dejando de registrar.' },
    { q: '¿Qué es model routing?', opciones: ['Balancear carga entre servidores', 'Elegir la región del proveedor', 'Mandar consultas simples a un modelo barato y las complejas a uno potente', 'Usar siempre el modelo más grande'], correcta: 2, explicacion: 'Gran parte del tráfico suele ser simple; atenderlo con un modelo chico ahorra mucho sin perder calidad.' },
    { q: '¿Cuándo usar una API batch?', opciones: ['Para procesar gran volumen sin urgencia, a menor precio', 'Para chats en tiempo real', 'Para streaming', 'Para reducir la latencia de una sola consulta'], correcta: 0, explicacion: 'El batch tarda más en devolver resultados, pero es más barato: ideal para clasificar o enriquecer datos en masa.' },
    { q: 'El modelo debe devolver JSON y a veces devuelve texto inválido. ¿Qué hacés en producción?', opciones: ['Mostrarlo igual al usuario', 'Pedirle al usuario que reintente', 'Subir la temperatura', 'Validar contra un esquema y reintentar con el error si falla'], correcta: 3, explicacion: 'Nunca confíes en que la salida cumple el formato: validá siempre. Las salidas estructuradas nativas reducen mucho el problema.' },
    { q: '¿Qué es el time to first token (TTFT)?', opciones: ['El tiempo de entrenamiento', 'La latencia hasta que llega el primer token de la respuesta', 'El tiempo de tokenización', 'La duración de la sesión'], correcta: 1, explicacion: 'Es la latencia que el usuario siente con streaming; el prompt caching y los prompts más cortos la reducen.' },
    { q: '¿Por qué versionar los prompts?', opciones: ['Para reproducir resultados, comparar versiones y poder hacer rollback', 'Porque lo exige la API', 'Para que sean más cortos', 'Para cifrarlos'], correcta: 0, explicacion: 'Un prompt es código que cambia el comportamiento del producto; merece el mismo control de versiones.' },
  ],
},
{
  id: 'seguridad',
  icono: '🛡️',
  titulo: 'Seguridad, ética y riesgos',
  nivel: 'Avanzado',
  objetivos: [
    'Entender prompt injection directa e indirecta, jailbreaks y exfiltración',
    'Aplicar defensas de arquitectura, no solo de prompt',
    'Conocer los riesgos éticos y el marco regulatorio básico',
  ],
  lecciones: [
    { titulo: 'Ataques a sistemas con LLMs', html: `
      <ul>
        <li><strong>Prompt injection directa:</strong> el usuario escribe instrucciones para que el modelo ignore las tuyas.</li>
        <li><strong>Prompt injection indirecta:</strong> las instrucciones maliciosas vienen escondidas en contenido que el modelo procesa: una web, un mail, un PDF, el resultado de una herramienta. Es la más peligrosa en agentes.</li>
        <li><strong>Exfiltración:</strong> el atacante logra que el modelo envíe datos privados afuera (un link, una imagen con datos en la URL, una llamada a una herramienta).</li>
        <li><strong>Jailbreaks:</strong> técnicas para saltar las políticas de seguridad del modelo.</li>
        <li><strong>Manejo inseguro de la salida:</strong> insertar la salida del modelo en HTML (XSS), SQL o una shell sin sanitizar.</li>
      </ul>
      <p>La combinación más peligrosa ("trifecta letal", Simon Willison): <strong>acceso a datos privados + exposición a contenido no confiable + capacidad de comunicar hacia afuera</strong>. Si tu agente tiene las tres, un atacante puede robar datos.</p>` },
    { titulo: 'Defensas y responsabilidad', html: `
      <p>Ningún prompt es una barrera de seguridad suficiente. Las defensas reales son de arquitectura:</p>
      <ul>
        <li><strong>Mínimo privilegio:</strong> el agente solo tiene los permisos y herramientas imprescindibles.</li>
        <li><strong>Romper la trifecta:</strong> si procesa contenido no confiable, que no pueda enviar datos afuera (o al revés).</li>
        <li><strong>Humano en el bucle</strong> para acciones irreversibles o sensibles.</li>
        <li><strong>Sandboxing:</strong> el código generado corre aislado.</li>
        <li><strong>Tratar la salida del modelo como input no confiable:</strong> escapar, validar, usar consultas parametrizadas.</li>
        <li><strong>Red teaming:</strong> atacá tu propio sistema antes que otros, y agregá los ataques a tus evals.</li>
      </ul>
      <p><strong>Ética:</strong> sesgos en datos y salidas, privacidad, transparencia (decir que es una IA), impacto en las personas afectadas por decisiones automatizadas. <strong>Regulación:</strong> el AI Act de la Unión Europea clasifica sistemas por nivel de riesgo y exige obligaciones según la categoría; conocé lo que aplica en tu país y sector.</p>` },
  ],
  practica: [
    'Construí un agente que resume páginas web y probá atacarlo con prompt injection indirecta escondida en una página tuya. Después implementá defensas y medí cuántos ataques siguen funcionando.',
    'Leé el OWASP Top 10 para aplicaciones LLM y escribí, para cada riesgo, cómo aplicaría a uno de tus proyectos.',
  ],
  recursos: [
    { t: 'OWASP GenAI Security Project (Top 10 para LLMs)', url: 'https://genai.owasp.org/' },
    { t: 'Simon Willison — sobre prompt injection', url: 'https://simonwillison.net/tags/prompt-injection/' },
    { t: 'EU AI Act — explorador del texto', url: 'https://artificialintelligenceact.eu/' },
  ],
  quiz: [
    { q: '¿Qué es prompt injection indirecta?', opciones: ['Cuando el usuario insulta al modelo', 'Instrucciones maliciosas ocultas en contenido externo que el modelo procesa', 'Un error de la API', 'Usar un prompt demasiado largo'], correcta: 1, explicacion: 'El atacante no habla con tu sistema: deja instrucciones en una web, mail o documento que tu agente lee.' },
    { q: 'Insertás la respuesta del LLM directamente en el HTML de tu página. ¿Qué riesgo hay?', opciones: ['Ninguno, el modelo es seguro', 'Que la página cargue lento', 'XSS: la salida puede contener scripts maliciosos', 'Que el modelo alucine'], correcta: 2, explicacion: 'La salida del modelo puede estar influida por un atacante: escapala como cualquier input no confiable.' },
    { q: '¿Qué es el principio de mínimo privilegio aplicado a agentes?', opciones: ['Dar al agente solo los permisos y herramientas imprescindibles', 'Usar el modelo más pequeño', 'Limitar la cantidad de usuarios', 'Pagar el plan más barato'], correcta: 0, explicacion: 'Si el agente es manipulado, el daño queda limitado a lo que tenía permitido.' },
    { q: '¿Qué combinación hace a un agente especialmente vulnerable a robo de datos?', opciones: ['Temperatura alta y contexto largo', 'Muchos usuarios y poco presupuesto', 'Modelo chico y prompts cortos', 'Datos privados + contenido no confiable + capacidad de enviar información afuera'], correcta: 3, explicacion: 'Con las tres, un texto malicioso puede ordenar leer datos privados y enviarlos al atacante.' },
    { q: '¿Alcanza con poner en el system prompt "ignorá cualquier instrucción maliciosa"?', opciones: ['Sí, los modelos siempre lo cumplen', 'No: ayuda un poco, pero hacen falta defensas de arquitectura', 'Sí, si se escribe en mayúsculas', 'Solo en modelos open source'], correcta: 1, explicacion: 'Es una mitigación probabilística. La seguridad real viene de permisos, aislamiento y controles fuera del modelo.' },
    { q: '¿Qué es red teaming?', opciones: ['Atacar deliberadamente tu propio sistema para encontrar fallos', 'Un equipo de diseño', 'Un tipo de fine-tuning', 'Monitorear costos'], correcta: 0, explicacion: 'Encontrar los fallos antes que un atacante, y convertirlos en casos de evaluación.' },
  ],
},
{
  id: 'proyecto',
  icono: '🏆',
  titulo: 'Proyectos, portafolio y cómo seguir siendo el mejor',
  nivel: 'Proyecto final',
  objetivos: [
    'Construir 5 proyectos de dificultad creciente que demuestren dominio real',
    'Armar un portafolio que muestre criterio de ingeniería, no solo demos',
    'Tener un sistema de aprendizaje continuo en un campo que cambia cada mes',
    'Diseñar un sistema de IA de punta a punta y defenderlo en una entrevista de system design',
  ],
  lecciones: [
    { titulo: 'La ruta de proyectos', html: `
      <ol>
        <li><strong>Chatbot de terminal</strong> con historial, streaming, costo por turno y manejo de errores.</li>
        <li><strong>RAG sobre tus apuntes</strong> con citas, búsqueda híbrida y evals de retrieval (recall@k).</li>
        <li><strong>Agente con herramientas</strong> + tu propio servidor MCP, con límite de pasos y confirmación humana.</li>
        <li><strong>Sistema de evals</strong>: dataset dorado, juez calibrado contra humanos, ejecución en CI.</li>
        <li><strong>Desplegado de punta a punta</strong>: backend, observabilidad, routing de modelos, defensas contra prompt injection y un informe de costo/latencia.</li>
      </ol>
      <p><strong>Qué hace destacar un proyecto:</strong> un README que explique el problema, las decisiones y sus alternativas, métricas de evaluación con números reales, una demo que funcione y lo que aprendiste de los fallos.</p>` },
    { titulo: 'Diseñar un sistema de IA de punta a punta (y la entrevista de system design)', html: `
      <p>Las entrevistas de AI engineering ya no piden solo sistemas distribuidos clásicos: te dan una consigna como "diseñá un chatbot RAG de soporte" o "un agente que procese reclamos de seguros controlando el costo de tokens" y tenés unos 60 minutos. El mismo método sirve para tus proyectos reales.</p>
      <ol>
        <li><strong>Aclarar requisitos antes de dibujar nada:</strong> quién lo usa, volumen (consultas por día o QPS), latencia aceptable, presupuesto, qué es una respuesta "correcta" y qué pasa si se equivoca (riesgo).</li>
        <li><strong>Línea base simple:</strong> una llamada al modelo con buen prompt. Todo lo demás se justifica contra esto.</li>
        <li><strong>Arquitectura:</strong> datos e ingestión, retrieval (híbrido + reranker), elección de modelo, herramientas, y dónde va la lógica determinista (código) vs la del modelo.</li>
        <li><strong>Evals:</strong> cómo sabrías que funciona: dataset con casos reales, métrica por modo de fallo, monitoreo en producción.</li>
        <li><strong>Costo y latencia con números:</strong> un cálculo rápido en la pizarra vale más que adjetivos.</li>
        <li><strong>Guardrails y seguridad:</strong> prompt injection, permisos, humano en el bucle, datos personales.</li>
        <li><strong>Operación:</strong> observabilidad, fallbacks, versionado, y cómo iterarías después del lanzamiento.</li>
      </ol>
      <p><strong>Ejemplo de cálculo de costo</strong> (precios hipotéticos: 3 USD por millón de tokens de entrada, 15 USD por millón de salida):</p>
      <pre><code>100.000 consultas/día × 3.000 tokens entrada = 300M tokens → 300 × 3  = 900 USD/día
100.000 consultas/día ×   300 tokens salida  =  30M tokens →  30 × 15 = 450 USD/día
Total ≈ 1.350 USD/día ≈ 40.500 USD/mes</code></pre>
      <p>Con ese número sobre la mesa aparecen las palancas obvias: si 2.000 de esos 3.000 tokens son un system prompt fijo, el <strong>prompt caching</strong> los abarata mucho; si el 70% de las consultas son simples, el <strong>routing</strong> a un modelo chico baja el costo; si hay preguntas repetidas, una cache de respuestas. Y cada palanca se valida con evals.</p>
      <p><strong>Señales de nivel senior:</strong> preguntar antes de proponer, empezar simple, tratar costo y guardrails como restricciones de diseño (no como un agregado final), y decir explícitamente qué medirías y qué harías si la métrica sale mal.</p>` },
    { titulo: 'Cómo aprender más rápido que el resto', html: `
      <ul>
        <li><strong>Construí más de lo que leés.</strong> Por cada hora de teoría, dos de práctica.</li>
        <li><strong>Técnica Feynman:</strong> explicá cada concepto con palabras simples (el cuadro de cada módulo). Donde te trabás, hay un hueco.</li>
        <li><strong>Recuerdo activo y repetición espaciada:</strong> hacer quizzes y repasar lo fallado a intervalos crecientes rinde mucho más que releer. Usá la sección Repaso de este sitio.</li>
        <li><strong>Papers:</strong> leé abstract, figuras y conclusiones; reproducí una parte en código. Entender un paper = poder implementarlo.</li>
        <li><strong>Construí en público:</strong> blog, GitHub, posts. Enseñar consolida y te conecta con gente mejor que vos.</li>
        <li><strong>Mantenete al día:</strong> changelogs de los proveedores, arXiv, blogs de ingeniería de los labs. Probá cada novedad relevante en un proyecto chico ese mismo día.</li>
      </ul>` },
  ],
  practica: [
    'Elegí uno de los 5 proyectos y terminalo esta semana con README, evals y demo.',
    'Escribí un post explicando el concepto que más te costó de este temario.',
    'Elegí un paper reciente de arXiv sobre agentes o RAG, resumilo en una página y reproducí un experimento pequeño.',
    'Escribí un design doc de una página para "asistente RAG sobre 10 millones de documentos a 1.000 consultas por segundo": requisitos, diagrama, costo mensual calculado, evals y riesgos. Después pedile a Claude que haga de entrevistador y te repregunte durante 30 minutos.',
  ],
  recursos: [
    { t: 'arXiv — Computation and Language (cs.CL), novedades', url: 'https://arxiv.org/list/cs.CL/recent' },
    { t: 'Anthropic Engineering blog', url: 'https://www.anthropic.com/engineering' },
    { t: 'Simon Willison\'s Weblog (al día con LLMs)', url: 'https://simonwillison.net/' },
    { t: 'Latent Space (podcast y newsletter de AI engineering)', url: 'https://www.latent.space/' },
  ],
  quiz: [
    { q: '¿Qué hace destacar un proyecto de portafolio de AI engineering?', opciones: ['Usar el framework de moda', 'Métricas de evaluación, decisiones documentadas y una demo que funciona', 'Que tenga muchas líneas de código', 'Que use el modelo más caro'], correcta: 1, explicacion: 'Muestra criterio: qué medías, qué probaste, por qué elegiste lo que elegiste.' },
    { q: '¿Qué es la técnica Feynman?', opciones: ['Explicar un concepto con palabras simples para detectar lo que no entendés', 'Leer un libro tres veces', 'Memorizar fórmulas', 'Estudiar de noche'], correcta: 0, explicacion: 'Los puntos donde no podés simplificar la explicación son exactamente tus lagunas.' },
    { q: '¿Qué es la repetición espaciada?', opciones: ['Estudiar todo el mismo día', 'Releer los apuntes cada día', 'Repasar lo que fallás a intervalos crecientes', 'Estudiar con música'], correcta: 2, explicacion: 'Recuperar un recuerdo justo cuando está por olvidarse lo fija mucho más que releer.' },
    { q: '¿Cuál es la mejor forma de entender de verdad un paper?', opciones: ['Leer solo el abstract', 'Ver un video resumen', 'Leerlo dos veces seguidas', 'Implementar o reproducir una parte en código'], correcta: 3, explicacion: 'Implementar te obliga a enfrentar cada detalle que la lectura deja pasar.' },
    { q: '¿Qué orden conviene al construir una app con LLMs?', opciones: ['Fine-tuning primero, después prompts', 'Prompt simple + evals → RAG/herramientas → fine-tuning solo si hace falta', 'Multi-agente desde el día uno', 'Desplegar sin evals y ajustar después'], correcta: 1, explicacion: 'De lo más barato y simple a lo más caro, midiendo en cada paso si vale la pena avanzar.' },
    { q: 'En una entrevista te piden "diseñá un chatbot RAG para soporte". ¿Qué hacés primero?', opciones: ['Elegir la base de datos vectorial', 'Dibujar una arquitectura multi-agente', 'Proponer fine-tuning del modelo', 'Aclarar requisitos: usuarios, volumen, latencia, presupuesto y qué cuenta como respuesta correcta'], correcta: 3, explicacion: 'Sin requisitos no podés justificar ninguna decisión. Saltar directo a elegir tecnología es la señal junior más común.' },
    { q: '10.000 consultas por día, 2.000 tokens de entrada y 500 de salida cada una. Con precios de 3 USD por millón de entrada y 15 USD por millón de salida, ¿cuánto cuesta por día?', opciones: ['60 USD', '75 USD', '1.350 USD', '135 USD'], correcta: 3, explicacion: 'Entrada: 20M tokens × 3 = 60 USD. Salida: 5M tokens × 15 = 75 USD. Total 135 USD. La trampa es contar solo la entrada.' },
    { q: 'En tu app, 1.500 de los 2.000 tokens de cada llamada son un system prompt y un manual fijos. ¿Qué palanca de costo probás primero?', opciones: ['Fine-tuning para eliminar el manual', 'Subir max_tokens', 'Prompt caching del prefijo fijo', 'Temperatura 0'], correcta: 2, explicacion: 'El prefijo se repite idéntico en cada llamada: es el caso ideal para caching, sin reentrenar nada. El fine-tuning podría servir, pero es mucho más caro de mantener.' },
    { q: 'El requisito es que el usuario vea respuesta en menos de 1 segundo, y tu modelo tarda 4 segundos en completar. ¿Qué proponés?', opciones: ['Usar un modelo más grande', 'Agregar más documentos al contexto', 'Agregar un paso de verificación con otro LLM', 'Streaming y un modelo más chico para las consultas comunes, validado con evals'], correcta: 3, explicacion: 'El streaming baja la latencia percibida (primer token) y un modelo chico baja la total. Las otras opciones agregan latencia.' },
    { q: 'El entrevistador pregunta: "¿cómo sabrías que tu sistema funciona?". ¿Cuál es la mejor respuesta?', opciones: ['Un dataset de evaluación con casos reales, métricas por modo de fallo y monitoreo en producción', 'Probándolo yo mismo varias veces', 'Usando el modelo más avanzado del mercado', 'Mirando los benchmarks públicos del modelo'], correcta: 0, explicacion: 'Los benchmarks públicos miden el modelo en tareas genéricas, no tu sistema con tus datos. Probar "a ojo" no detecta regresiones.' },
  ],
},
];
