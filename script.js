/**
 * DETECTIVES DIGITALES: SOPA DE LETRAS INTERACTIVA
 * Tema: Información Confiable: ¿Todo en Internet es Verdad?
 * Nivel: 6° de Primaria
 */

// ==========================================================
// 1. BANCO DE DATOS DE NIVELES, PALABRAS Y PREGUNTAS
// ==========================================================

const GAME_LEVELS = [
  {
    id: 1,
    title: "Nivel 1: El entorno digital",
    subtitle: "Conceptos iniciales sobre la red",
    focus: "Enfocado en las palabras básicas sobre cómo circula la información en la red.",
    guideTip: "«Internet es un océano inmenso: cualquiera puede crear una página o subir un dato, por eso el primer paso del detective es no dar nada por seguro sin investigar.»",
    gridSize: 12,
    directions: ["H", "V", "D_DR", "D_DL"], // Horizontal, Vertical, Diagonal normal
    directionsLabel: "Horizontal • Vertical • Diagonal",
    words: [
      {
        display: "INTERNET",
        clean: "INTERNET",
        question: "¿Todo lo que se publica en Internet ha sido revisado por un equipo de científicos o maestros antes de subirse?",
        options: [
          { text: "No; cualquiera puede subir información, por eso debemos dudar y verificar.", correct: true },
          { text: "Sí; todos los sitios web pasan por un filtro obligatorio del gobierno.", correct: false },
          { text: "Sí; porque Google solo muestra páginas que son 100% verdaderas.", correct: false }
        ],
        explanation: "Internet es un espacio libre y abierto donde cualquier persona u organización puede publicar contenido sin que nadie lo revise con antelación."
      },
      {
        display: "INFORMACIÓN",
        clean: "INFORMACION",
        question: "¿Cuál de las siguientes afirmaciones sobre la información en la red es correcta?",
        options: [
          { text: "Que una publicación tenga millones de 'likes' garantiza que es totalmente real.", correct: false },
          { text: "La información de calidad se distingue porque presenta datos claros, fuentes y autores comprobables.", correct: true },
          { text: "Es mejor compartir la información rápido antes de leerla para alertar a los demás.", correct: false }
        ],
        explanation: "La cantidad de 'me gusta' o visualizaciones solo mide popularidad o impacto emocional, nunca la veracidad de la información."
      },
      {
        display: "DATO",
        clean: "DATO",
        question: "En una noticia o artículo confiable, ¿qué función cumple un dato?",
        options: [
          { text: "Es una cifra, fecha o hecho objetivo y comprobable que respalda lo que se afirma.", correct: true },
          { text: "Es un adorno para que el texto se vea más largo y difícil de entender.", correct: false },
          { text: "Es la opinión personal o corazonada de la persona que escribió la publicación.", correct: false }
        ],
        explanation: "Un dato es una evidencia objetiva (por ejemplo: 'según el censo oficial, el 80% tiene acceso a agua') que cualquiera puede corroborar."
      },
      {
        display: "RED",
        clean: "RED",
        question: "Cuando un mensaje impactante o alarmante llega a un grupo de una red social (como WhatsApp o TikTok), ¿qué debes hacer?",
        options: [
          { text: "Reenviarlo de inmediato a todos tus contactos por si acaso es urgente.", correct: false },
          { text: "Creerlo sin dudar si te lo envió un amigo o compañero de la escuela.", correct: false },
          { text: "Pausar, leer con calma y comprobar si es real en fuentes oficiales antes de compartirlo.", correct: true }
        ],
        explanation: "Las redes sociales propagan noticias falsas muy rápido; el mejor filtro para detenerlas es pensar antes de compartir."
      },
      {
        display: "NOTICIA",
        clean: "NOTICIA",
        question: "¿Qué distingue a una noticia periodística profesional frente a una publicación cualquiera?",
        options: [
          { text: "Responde a preguntas clave (qué, quién, cuándo, dónde) y consulta diversas fuentes.", correct: true },
          { text: "Usa títulos exagerados con mayúsculas como '¡NO CREERÁS LO QUE PASÓ!'.", correct: false },
          { text: "Oculta los nombres de las personas e instituciones para mantener el misterio.", correct: false }
        ],
        explanation: "El periodismo serio busca informar con hechos precisos, mientras que el sensacionalismo busca llamar la atención con engaños."
      },
      {
        display: "MEDIO",
        clean: "MEDIO",
        question: "¿Por qué es importante fijarse en el 'Medio de comunicación' donde se publica una noticia?",
        options: [
          { text: "Porque los medios reconocidos tienen normas éticas y equipos que verifican los hechos.", correct: true },
          { text: "Porque da igual el medio; todos copian y pegan exactamente lo mismo de internet.", correct: false },
          { text: "Porque las páginas anónimas siempre tienen los secretos más verdaderos.", correct: false }
        ],
        explanation: "Un medio con trayectoria y reputación asume responsabilidad legal y profesional sobre la exactitud de lo que publica."
      },
      {
        display: "PÁGINA",
        clean: "PAGINA",
        question: "Estás navegando en una página web. ¿Qué señal te haría sospechar que podría ser fraudulenta o de mala calidad?",
        options: [
          { text: "Tiene una dirección web extraña (como 'noticias-reales-123.xyz') y exceso de anuncios invasivos.", correct: true },
          { text: "Tiene un diseño limpio y una sección clara de 'Quiénes somos' y contacto.", correct: false },
          { text: "Cita investigaciones de universidades reconocidas y enlaces a documentos originales.", correct: false }
        ],
        explanation: "Las páginas trampa suelen usar direcciones web raras, imitar logos oficiales y saturar la pantalla de publicidad para ganar dinero."
      }
    ]
  },
  {
    id: 2,
    title: "Nivel 2: Las amenazas",
    subtitle: "¿De qué debemos cuidarnos?",
    focus: "Enfocado en identificar los riesgos de la desinformación en la web.",
    guideTip: "«Las noticias falsas no se crean por error: buscan despertar miedo, enojo o sorpresa para que las compartas sin reflexionar.»",
    gridSize: 12,
    directions: ["H", "H_REV", "V", "D_DR", "D_DL"], // Horizontal (normal y reversa), Vertical, Diagonales
    directionsLabel: "Horizontal • Reversa • Vertical • Diagonal",
    words: [
      {
        display: "FALSO",
        clean: "FALSO",
        question: "¿Cuál es el principal motivo por el que se crean contenidos y noticias falsas en Internet?",
        options: [
          { text: "Para ganar dinero con visitas (clics), engañar a las personas o manipular opiniones.", correct: true },
          { text: "Por simples fallos técnicos o errores matemáticos de los servidores.", correct: false },
          { text: "Porque las computadoras no tienen suficiente memoria para guardar verdades.", correct: false }
        ],
        explanation: "Detrás de las 'fake news' hay intereses económicos (publicidad engañosa) o personas que buscan sembrar odio y confusión."
      },
      {
        display: "RUMOR",
        clean: "RUMOR",
        question: "Un rumor digital es una afirmación que se transmite sin confirmación oficial. ¿Qué actitud es la más responsable?",
        options: [
          { text: "No difundirlo y consultar fuentes confiables u oficiales antes de creerlo.", correct: true },
          { text: "Publicarlo en tus historias de redes sociales para preguntar si alguien sabe algo.", correct: false },
          { text: "Asustar a tu familia y amigos 'por si acaso llega a ser cierto'.", correct: false }
        ],
        explanation: "Los rumores crecen cuando la gente los repite sin pruebas. Un detective digital no propaga lo que no está comprobado."
      },
      {
        display: "ENGAÑO",
        clean: "ENGANO",
        question: "Recibes un mensaje que dice: '¡Felicidades, ganaste un iPhone! Haz clic aquí para reclamarlo'. ¿De qué se trata con mayor probabilidad?",
        options: [
          { text: "De un engaño o estafa digital (phishing) para robar contraseñas o datos personales.", correct: true },
          { text: "De un concurso oficial de una organización benéfica internacional.", correct: false },
          { text: "De un premio especial por haber iniciado sesión temprano.", correct: false }
        ],
        explanation: "Si una oferta suena demasiado buena para ser verdad, casi siempre es una trampa de ciberdelincuentes para engañarte."
      },
      {
        display: "BULO",
        clean: "BULO",
        question: "¿Qué es exactamente un 'bulo' en el entorno digital?",
        options: [
          { text: "Una mentira fabricada intencionalmente que se disfraza de noticia para engañar al público.", correct: true },
          { text: "Un programa de computadora que sirve para organizar archivos escolares.", correct: false },
          { text: "Un tipo de contraseña ultrasegura para cuentas de videojuegos.", correct: false }
        ],
        explanation: "La palabra 'bulo' (o hoax) se refiere a engaños inventados a propósito para que la gente los comparta y genere alarma."
      },
      {
        display: "EXAGERACIÓN",
        clean: "EXAGERACION",
        question: "Titulares como '¡ESTE REMEDIO SECRETO CURA TODAS LAS ENFERMEDADES DEL PLANETA!' son un ejemplo evidente de:",
        options: [
          { text: "Exageración y 'clickbait' para provocar asombro y ganar visitas a costa de engaños.", correct: true },
          { text: "Un gran avance de la ciencia comprobado por todos los hospitales del mundo.", correct: false },
          { text: "Un mensaje oficial emitido por la Organización Mundial de la Salud.", correct: false }
        ],
        explanation: "La exageración recurre a palabras absolutas ('todo', 'nunca', 'milagroso') para anular tu sentido crítico con emociones fuertes."
      },
      {
        display: "CADENA",
        clean: "CADENA",
        question: "Los mensajes que afirman: 'Reenvía este texto a 10 personas o algo terrible te ocurrirá':",
        options: [
          { text: "Son cadenas falsas que manipulan con miedo o culpa y no tienen ningún fundamento real.", correct: true },
          { text: "Son avisos de seguridad que siempre debemos obedecer al pie de la letra.", correct: false },
          { text: "Son mensajes enviados por los ingenieros creadores de la aplicación.", correct: false }
        ],
        explanation: "Las cadenas son trucos antiguos que buscan viralizarse jugando con la superstición. Lo más sabio es eliminarlas."
      },
      {
        display: "VIRAL",
        clean: "VIRAL",
        question: "Que un video o noticia sea 'viral' y tenga millones de reproducciones en redes significa que:",
        options: [
          { text: "Ha sido muy compartido, pero eso NO demuestra que lo que dice sea verdad.", correct: true },
          { text: "Es una verdad incuestionable, porque millones de usuarios no pueden estar equivocados.", correct: false },
          { text: "Ha sido certificado por un comité científico internacional.", correct: false }
        ],
        explanation: "Lo viral solo indica que el contenido causó risa, sorpresa o indignación; muchas de las mayores mentiras son virales."
      }
    ]
  },
  {
    id: 3,
    title: "Nivel 3: Los criterios de búsqueda",
    subtitle: "Los filtros del detective",
    focus: "Enfocado en los pasos clave para revisar si un contenido es real.",
    guideTip: "«Usa la prueba del detective: ¿Quién lo escribió? ¿Cuándo ocurrió? ¿Qué otras fuentes lo confirman?»",
    gridSize: 12, // Como se especificó: Cuadrícula 12x12
    directions: ["H", "H_REV", "V", "V_REV", "D_DR", "D_DL", "D_UR", "D_UL"], // Diagonales invertidas incluidas
    directionsLabel: "Horizontal • Vertical • Diagonal • Diagonal Invertida",
    words: [
      {
        display: "AUTOR",
        clean: "AUTOR",
        question: "Al leer una información en internet, ¿por qué es indispensable saber quién es el autor?",
        options: [
          { text: "Para saber si es una persona o entidad capacitada, con experiencia en el tema del que habla.", correct: true },
          { text: "Para ver si tiene muchos seguidores y una foto de perfil divertida.", correct: false },
          { text: "Solo para saber si escribió el texto con letra bonita o cursiva.", correct: false }
        ],
        explanation: "Un autor con credenciales en la materia nos da confianza. Si el artículo es anónimo, debemos desconfiar de inmediato."
      },
      {
        display: "FUENTE",
        clean: "FUENTE",
        question: "¿Qué es una 'fuente confiable' en una investigación escolar o periodística?",
        options: [
          { text: "El origen comprobable de los datos (institutos científicos, libros, documentos o testigos).", correct: true },
          { text: "El primer resultado que aparece al buscar una palabra en un buscador de internet.", correct: false },
          { text: "Un comentario gracioso que leíste en un foro de videojuegos.", correct: false }
        ],
        explanation: "Las fuentes son los cimientos de la verdad: si la fuente es sólida y verificable, la información tiene respaldo."
      },
      {
        display: "FECHA",
        clean: "FECHA",
        question: "¿Por qué es fundamental revisar la fecha en que se publicó una noticia o imagen?",
        options: [
          { text: "Porque a menudo se comparten noticias o fotos viejas como si fueran de hoy para crear pánico.", correct: true },
          { text: "Porque las páginas web del año pasado dejan de funcionar por completo.", correct: false },
          { text: "Porque los hechos del pasado ya no tienen ninguna importancia histórica.", correct: false }
        ],
        explanation: "Sacar sucesos de contexto temporal (hacer pasar un evento de hace 6 años como si estuviera pasando hoy) es una trampa muy común."
      },
      {
        display: "COMPARAR",
        clean: "COMPARAR",
        question: "¿En qué consiste la técnica de 'lectura lateral' o comparar información?",
        options: [
          { text: "Abrir varias pestañas y comprobar si otros medios serios e independientes dicen lo mismo.", correct: true },
          { text: "Leer el texto inclinando la cabeza hacia los lados para encontrar errores ortográficos.", correct: false },
          { text: "Comparar únicamente el tamaño del título de dos páginas diferentes.", correct: false }
        ],
        explanation: "Si un suceso extraordinario ocurrió de verdad, múltiples fuentes confiables lo estarán reportando con los mismos datos clave."
      },
      {
        display: "VERIFICAR",
        clean: "VERIFICAR",
        question: "¿Qué acción realiza un detective de la información al 'verificar' un contenido?",
        options: [
          { text: "Comprobar con pruebas concretas que los nombres, lugares, citas y hechos sean exactos.", correct: true },
          { text: "Preguntar a su mejor amigo si la historia le parece entretenida.", correct: false },
          { text: "Darle 'Me gusta' y guardar la publicación en sus favoritos.", correct: false }
        ],
        explanation: "Verificar es buscar evidencias reales antes de dar por cierto un testimonio o una noticia."
      },
      {
        display: "INVESTIGAR",
        clean: "INVESTIGAR",
        question: "Si encuentras una fotografía sorprendente en redes sociales, ¿cómo puedes investigar si es auténtica o trucada?",
        options: [
          { text: "Haciendo una búsqueda inversa de imágenes (Google Imágenes o TinEye) para ver su origen.", correct: true },
          { text: "Acercando la pantalla a tus ojos para ver si los píxeles brillan.", correct: false },
          { text: "Creyendo que es real simplemente porque tiene colores muy brillantes.", correct: false }
        ],
        explanation: "La búsqueda inversa te permite descubrir cuándo y dónde se subió esa imagen por primera vez o si fue editada con Photoshop o IA."
      },
      {
        display: "EXPERTO",
        clean: "EXPERTO",
        question: "Si tienes dudas sobre un tema científico o de salud, ¿a quién debes consultar como voz experta?",
        options: [
          { text: "A médicos, científicos y organismos de salud reconocidos (como la OMS o universidades).", correct: true },
          { text: "A un influencer de moda que da consejos rápidos en videos de 15 segundos.", correct: false },
          { text: "A un perfil anónimo en los comentarios de una red social.", correct: false }
        ],
        explanation: "Un experto ha estudiado durante años y basa sus afirmaciones en investigaciones respaldadas por la comunidad científica."
      }
    ]
  },
  {
    id: 4,
    title: "Nivel 4: Pensamiento crítico",
    subtitle: "El perfil del detective digital",
    focus: "Enfocado en las actitudes y características de una fuente o persona analítica.",
    guideTip: "«El pensamiento crítico es tu superpoder: no se trata de no creer en nada, sino de exigir evidencias antes de aceptar una idea.»",
    gridSize: 13,
    directions: ["H", "H_REV", "V", "V_REV", "D_DR", "D_DL", "D_UR", "D_UL"], // Todas las direcciones en avanzado
    directionsLabel: "¡Nivel Maestro! Todas las direcciones posibles",
    words: [
      {
        display: "CONFIABLE",
        clean: "CONFIABLE",
        question: "¿Qué características demuestran que un artículo o sitio web es verdaderamente 'confiable'?",
        options: [
          { text: "Transparencia en sus autores, fuentes citadas con claridad y un tono objetivo sin escándalo.", correct: true },
          { text: "Tener muchos emojis y letras mayúsculas en el título.", correct: false },
          { text: "Afirmar que 'los científicos no quieren que conozcas este secreto'.", correct: false }
        ],
        explanation: "La confianza se gana con honestidad, datos contrastables y un compromiso genuino con la verdad."
      },
      {
        display: "CRÍTICO",
        clean: "CRITICO",
        question: "¿Qué significa tener un pensamiento 'crítico' frente al contenido que vemos en internet?",
        options: [
          { text: "Hacerse preguntas, analizar con calma las intenciones del autor y pedir pruebas antes de creer.", correct: true },
          { text: "Burlarse y dejar comentarios agresivos en todas las publicaciones de los demás.", correct: false },
          { text: "Rechazar todo lo que nos dicen los maestros y los libros escolares.", correct: false }
        ],
        explanation: "Pensar críticamente es ser curioso y reflexivo: no tragar entero y evaluar con lógica lo que vemos y escuchamos."
      },
      {
        display: "OFICIAL",
        clean: "OFICIAL",
        question: "Ante una situación de emergencia, alerta climática o aviso escolar, ¿por qué debemos acudir a canales 'oficiales'?",
        options: [
          { text: "Porque son las autoridades e instituciones responsables y autorizadas para emitir protocolos reales.", correct: true },
          { text: "Porque son las únicas páginas que tienen imágenes en alta definición.", correct: false },
          { text: "Porque siempre publican historias divertidas para calmar los nervios.", correct: false }
        ],
        explanation: "Las fuentes oficiales (ministerios, protección civil, la dirección del colegio) brindan información verificada frente a la confusión de rumores."
      },
      {
        display: "RIGOR",
        clean: "RIGOR",
        question: "¿Qué significa aplicar 'rigor' al realizar una consulta o investigación escolar en la web?",
        options: [
          { text: "Ser ordenado y meticuloso, contrastar los datos y no quedarse con lo primero que aparece.", correct: true },
          { text: "Copiar y pegar rápidamente el primer párrafo de Wikipedia sin revisarlo.", correct: false },
          { text: "Terminar la tarea en 2 minutos para ir a jugar videojuegos.", correct: false }
        ],
        explanation: "El rigor científico y escolar es el cuidado con el que verificamos que cada dato sea exacto y verdadero."
      },
      {
        display: "EVIDENCIA",
        clean: "EVIDENCIA",
        question: "En el método del detective digital, ¿cuál es el valor de la 'evidencia'?",
        options: [
          { text: "Es la prueba objetiva e indiscutible que demuestra si una afirmación es cierta o falsa.", correct: true },
          { text: "Es una sospecha o corazonada de que algo podría ser verdad.", correct: false },
          { text: "Es la opinión que más compañeros repiten durante el recreo.", correct: false }
        ],
        explanation: "Una regla de oro del pensamiento crítico dice: 'Afirmaciones extraordinarias requieren evidencias extraordinarias'."
      },
      {
        display: "SEGURIDAD",
        clean: "SEGURIDAD",
        question: "En cuanto a la seguridad digital y la información personal, ¿cuál es un hábito fundamental?",
        options: [
          { text: "Cuidar tus datos privados, usar contraseñas fuertes y no abrir enlaces de origen desconocido.", correct: true },
          { text: "Aceptar invitaciones de cualquier desconocido para tener más amigos en línea.", correct: false },
          { text: "Descargar archivos de cualquier sitio si prometen trucos gratis para tus juegos.", correct: false }
        ],
        explanation: "La seguridad digital incluye proteger tu privacidad y la de tus seres queridos frente a trampas y virus informáticos."
      },
      {
        display: "ANÁLISIS",
        clean: "ANALISIS",
        question: "¿Qué proceso realizas cuando haces un buen 'análisis' de una noticia o video viral?",
        options: [
          { text: "Separas los hechos de las opiniones, examinas el propósito del autor y evalúas las pruebas.", correct: true },
          { text: "Miras solamente si el video tiene una canción de moda o graciosa.", correct: false },
          { text: "Lees el título a toda velocidad y escribes tu opinión sin ver el contenido.", correct: false }
        ],
        explanation: "Analizar es descomponer la información en partes para comprender qué es un hecho real y qué es solo la opinión o interés de quien lo creó."
      }
    ]
  }
];

// Letras con frecuencias en español para relleno natural y equilibrado
const SPANISH_LETTER_POOL = "AAAAAAABBCCCDDEEEEEEEEFGGHIIIIIIJLLMMMNNNNÑOOOOPQRRRRSSSSTTTUUUUVYZ";

// ==========================================================
// 2. SISTEMA DE AUDIO (WEB AUDIO API SINTETIZADOR)
// ==========================================================

class SoundManager {
  constructor() {
    this.audioCtx = null;
    this.muted = false;
  }

  init() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    return this.muted;
  }

  playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.1) {
    if (this.muted) return;
    this.init();
    if (!this.audioCtx) return;

    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

      gain.gain.setValueAtTime(gainVal, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (e) {
      console.warn("Audio playTone error", e);
    }
  }

  playSelect() {
    this.playTone(440, 'triangle', 0.05, 0.05);
  }

  playWordFound() {
    if (this.muted) return;
    this.init();
    // Arpegio victorioso ascendente
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playTone(freq, 'sine', 0.22, 0.12);
      }, idx * 60);
    });
  }

  playTriviaCorrect() {
    if (this.muted) return;
    this.init();
    // Doble campana brillante
    this.playTone(659.25, 'sine', 0.15, 0.15); // E5
    setTimeout(() => {
      this.playTone(880, 'sine', 0.35, 0.2); // A5
    }, 120);
  }

  playTriviaWrong() {
    if (this.muted) return;
    this.init();
    this.playTone(261.63, 'sawtooth', 0.18, 0.1);
    setTimeout(() => {
      this.playTone(220, 'sawtooth', 0.28, 0.1);
    }, 120);
  }

  playHint() {
    if (this.muted) return;
    this.init();
    // Tono de advertencia / misterio
    this.playTone(392, 'sine', 0.15, 0.15);
    setTimeout(() => {
      this.playTone(329.63, 'triangle', 0.25, 0.18);
    }, 140);
  }

  playLevelUp() {
    if (this.muted) return;
    this.init();
    const chords = [523.25, 659.25, 783.99, 1046.50, 1318.51];
    chords.forEach((freq, i) => {
      setTimeout(() => {
        this.playTone(freq, 'triangle', 0.3, 0.15);
      }, i * 90);
    });
  }

  playGrandVictory() {
    if (this.muted) return;
    this.init();
    const melody = [523.25, 523.25, 523.25, 659.25, 783.99, 659.25, 783.99, 1046.50];
    melody.forEach((freq, i) => {
      setTimeout(() => {
        this.playTone(freq, 'sine', 0.35, 0.18);
      }, i * 110);
    });
  }
}

// ==========================================================
// 3. GENERADOR DE CONFETI EN CANVAS
// ==========================================================

class ConfettiFX {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this.particles = [];
    this.animId = null;
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  burst(x = window.innerWidth / 2, y = window.innerHeight / 2, count = 100) {
    if (!this.canvas || !this.ctx) return;
    const colors = ['#38bdf8', '#818cf8', '#fbbf24', '#34d399', '#f43f5e', '#a855f7'];

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 10 + 4;
      this.particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 3,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 15,
        opacity: 1,
        decay: Math.random() * 0.012 + 0.008
      });
    }

    if (!this.animId) {
      this.animate();
    }
  }

  animate() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.22; // Gravedad
      p.vx *= 0.98; // Resistencia
      p.rotation += p.rotationSpeed;
      p.opacity -= p.decay;

      if (p.opacity <= 0 || p.y > this.canvas.height) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.globalAlpha = p.opacity;
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.fillStyle = p.color;
      this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
      this.ctx.restore();
    }

    if (this.particles.length > 0) {
      this.animId = requestAnimationFrame(() => this.animate());
    } else {
      this.animId = null;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}

// ==========================================================
// 4. MOTOR PRINCIPAL DEL JUEGO (GAME CONTROLLER)
// ==========================================================

class WordSearchGame {
  constructor() {
    this.sound = new SoundManager();
    this.confetti = new ConfettiFX('confetti-canvas');

    // Estado del juego
    this.currentLevelIndex = 0;
    this.maxUnlockedLevel = 1;
    this.score = 0;
    this.hintsUsed = 0;
    this.totalQuestionsAnswered = 0;
    this.totalQuestionsCorrect = 0;

    // Temporizador
    this.secondsElapsed = 0;
    this.timerInterval = null;
    this.timerRunning = false;

    // Estado del nivel activo
    this.currentGrid = [];
    this.placedWords = []; // { display, clean, question, options, explanation, cells: [{r,c}], found: bool }
    this.foundWordsCount = 0;

    // Interacción de selección en cuadrícula
    this.isDragging = false;
    this.startCell = null;
    this.currentHoverCell = null;
    this.selectedCells = [];
    this.activeTriviaWord = null;

    // Rango de detective
    this.ranks = [
      { minScore: 0, title: "Cadete Digital", icon: "🥉" },
      { minScore: 1000, title: "Rastreador de Fake News", icon: "🥈" },
      { minScore: 2500, title: "Inspector Verificador", icon: "🥇" },
      { minScore: 4000, title: "Maestro del Pensamiento Crítico", icon: "🏆" }
    ];

    this.initDOM();
    this.bindEvents();
    this.loadLevel(0);
    this.startTimer();
  }

  // Captura de elementos del DOM
  initDOM() {
    this.dom = {
      grid: document.getElementById('wordsearch-grid'),
      wordsList: document.getElementById('words-list'),
      scoreDisplay: document.getElementById('score-display'),
      foundCount: document.getElementById('found-count'),
      totalWordsCount: document.getElementById('total-words-count'),
      rankName: document.getElementById('rank-name'),
      rankIcon: document.getElementById('rank-icon'),
      timerDisplay: document.getElementById('timer-display'),
      levelTitle: document.getElementById('current-level-title'),
      levelSubtitle: document.getElementById('level-subtitle'),
      directionsText: document.getElementById('directions-text'),
      levelGuideTip: document.getElementById('level-guide-tip'),
      wordsLeftBadge: document.getElementById('words-left-badge'),
      floatingAlert: document.getElementById('floating-alert'),

      // Modales
      triviaModal: document.getElementById('trivia-modal'),
      triviaWordTitle: document.getElementById('trivia-word-title'),
      triviaQuestionText: document.getElementById('trivia-question-text'),
      triviaOptionsContainer: document.getElementById('trivia-options-container'),
      triviaFeedback: document.getElementById('trivia-feedback'),
      feedbackTitle: document.getElementById('feedback-title'),
      feedbackExplanation: document.getElementById('feedback-explanation'),
      feedbackIcon: document.getElementById('feedback-icon'),
      triviaContinueBtn: document.getElementById('trivia-continue-btn'),

      helpModal: document.getElementById('help-modal'),
      levelCompleteModal: document.getElementById('level-complete-modal'),
      grandVictoryModal: document.getElementById('grand-victory-modal'),

      // Botones
      hintBtn: document.getElementById('hint-btn'),
      soundBtn: document.getElementById('sound-btn'),
      soundIcon: document.getElementById('sound-icon'),
      helpBtn: document.getElementById('help-btn'),
      closeHelpBtn: document.getElementById('close-help-btn'),
      startPlayingBtn: document.getElementById('start-playing-btn'),
      nextLevelBtn: document.getElementById('next-level-btn'),
      printDiplomaBtn: document.getElementById('print-diploma-btn'),
      restartGameBtn: document.getElementById('restart-game-btn'),

      // Campos de Diploma
      studentNameInput: document.getElementById('student-name-input'),
      studentSignPreview: document.getElementById('student-sign-preview'),
      finalScoreVal: document.getElementById('final-score-val'),
      finalQuestionsVal: document.getElementById('final-questions-val'),
      finalTimeVal: document.getElementById('final-time-val'),
      finalStarsVal: document.getElementById('final-stars-val')
    };
  }

  // Enlace de Eventos de Usuario
  bindEvents() {
    // Selector de niveles (tabs)
    const tabs = document.querySelectorAll('.level-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        const lvl = parseInt(tab.dataset.level, 10);
        if (lvl <= this.maxUnlockedLevel) {
          this.loadLevel(lvl - 1);
        } else {
          this.showAlert("🔒 Este nivel se desbloqueará al completar el anterior.", true);
        }
      });
    });

    // Pista
    this.dom.hintBtn.addEventListener('click', () => this.useHint());

    // Sonido
    this.dom.soundBtn.addEventListener('click', () => {
      const isMuted = this.sound.toggleMute();
      this.dom.soundIcon.textContent = isMuted ? '🔇' : '🔊';
      this.showAlert(isMuted ? "Sonido desactivado" : "Sonido activado");
    });

    // Ayuda
    this.dom.helpBtn.addEventListener('click', () => this.showHelpModal());
    this.dom.closeHelpBtn.addEventListener('click', () => this.hideHelpModal());
    this.dom.startPlayingBtn.addEventListener('click', () => this.hideHelpModal());

    // Continuar tras pregunta trivia
    this.dom.triviaContinueBtn.addEventListener('click', () => this.closeTriviaModal());

    // Siguiente nivel tras celebrar
    this.dom.nextLevelBtn.addEventListener('click', () => {
      this.dom.levelCompleteModal.classList.add('hidden');
      if (this.currentLevelIndex < GAME_LEVELS.length - 1) {
        this.loadLevel(this.currentLevelIndex + 1);
      } else {
        this.showGrandVictory();
      }
    });

    // Diploma y reinicio
    this.dom.printDiplomaBtn.addEventListener('click', () => window.print());
    this.dom.restartGameBtn.addEventListener('click', () => this.restartEntireGame());

    // Sincronizar nombre en carnet
    this.dom.studentNameInput.addEventListener('input', (e) => {
      const name = e.target.value.trim() || "Detective Escolar";
      this.dom.studentSignPreview.textContent = name;
    });

    // Interacción Pointer (Mouse y Touch unificado) en la Cuadrícula
    this.setupGridPointerEvents();
  }

  // ==========================================================
  // 5. MOTOR DE GENERACIÓN DE SOPA DE LETRAS
  // ==========================================================

  loadLevel(levelIndex) {
    this.currentLevelIndex = levelIndex;
    const levelData = GAME_LEVELS[levelIndex];

    // Actualizar Encabezados del Nivel
    this.dom.levelTitle.textContent = levelData.title;
    this.dom.levelSubtitle.textContent = levelData.subtitle;
    this.dom.directionsText.textContent = levelData.directionsLabel;
    this.dom.levelGuideTip.textContent = levelData.guideTip;

    // Actualizar Tabs de Niveles
    document.querySelectorAll('.level-tab').forEach((tab, idx) => {
      tab.classList.remove('active');
      if (idx === levelIndex) {
        tab.classList.add('active');
        const statusEl = tab.querySelector('.lvl-status');
        if (statusEl && !tab.classList.contains('completed')) {
          statusEl.textContent = 'En curso';
        }
      }
    });

    // Establecer variable CSS del tamaño de la cuadrícula
    document.documentElement.style.setProperty('--grid-size', levelData.gridSize);

    // Reiniciar palabras del nivel
    this.pinnedCell = null;
    this.isDragging = false;
    this.foundWordsCount = 0;
    this.dom.totalWordsCount.textContent = levelData.words.length;
    this.dom.foundCount.textContent = "0";
    this.dom.wordsLeftBadge.textContent = `${levelData.words.length} restantes`;

    // Generar la matriz con palabras colocadas
    this.generateBoard(levelData);

    // Renderizar Cuadrícula y Lista de Palabras
    this.renderBoard();
    this.renderWordsList();
  }

  generateBoard(levelData) {
    let size = levelData.gridSize;

    // Mapa de direcciones
    const dirMap = {
      "H": [0, 1],        // Horizontal izquierda a derecha
      "H_REV": [0, -1],   // Horizontal derecha a izquierda
      "V": [1, 0],        // Vertical arriba a abajo
      "V_REV": [-1, 0],   // Vertical abajo a arriba
      "D_DR": [1, 1],     // Diagonal abajo-derecha
      "D_DL": [1, -1],    // Diagonal abajo-izquierda
      "D_UR": [-1, 1],    // Diagonal arriba-derecha
      "D_UL": [-1, -1]    // Diagonal arriba-izquierda
    };

    // Asegurar que la cuadrícula tenga al menos el largo de la palabra más larga
    const longestWord = Math.max(...levelData.words.map(w => w.clean.length));
    if (size < longestWord) {
      size = longestWord;
      levelData.gridSize = size;
    }

    document.documentElement.style.setProperty('--grid-size', size);

    let success = false;
    let outerAttempts = 0;

    while (!success && outerAttempts < 300) {
      outerAttempts++;
      const grid = Array.from({ length: size }, () => Array(size).fill(null));
      const placed = [];
      let allPlaced = true;

      // Ordenar palabras por longitud descendente
      const wordsToPlace = [...levelData.words].sort((a, b) => b.clean.length - a.clean.length);

      for (const wordObj of wordsToPlace) {
        const cleanWord = wordObj.clean;
        const validPlacements = [];
        const allowedDirs = levelData.directions.map(dKey => dirMap[dKey]);

        for (let r = 0; r < size; r++) {
          for (let c = 0; c < size; c++) {
            for (const [dr, dc] of allowedDirs) {
              const endR = r + dr * (cleanWord.length - 1);
              const endC = c + dc * (cleanWord.length - 1);

              if (endR >= 0 && endR < size && endC >= 0 && endC < size) {
                let canFit = true;
                const cells = [];
                for (let i = 0; i < cleanWord.length; i++) {
                  const currR = r + dr * i;
                  const currC = c + dc * i;
                  const existingLetter = grid[currR][currC];
                  if (existingLetter !== null && existingLetter !== cleanWord[i]) {
                    canFit = false;
                    break;
                  }
                  cells.push({ r: currR, c: currC });
                }

                if (canFit) {
                  validPlacements.push({ r, c, dr, dc, cells });
                }
              }
            }
          }
        }

        if (validPlacements.length > 0) {
          const choice = validPlacements[Math.floor(Math.random() * validPlacements.length)];
          for (let i = 0; i < cleanWord.length; i++) {
            const cell = choice.cells[i];
            grid[cell.r][cell.c] = cleanWord[i];
          }
          placed.push({
            ...wordObj,
            cells: choice.cells,
            found: false,
            colorIndex: placed.length % 7
          });
        } else {
          allPlaced = false;
          break;
        }
      }

      if (allPlaced) {
        // Rellenar espacios vacíos con letras de la bolsa española
        for (let r = 0; r < size; r++) {
          for (let c = 0; c < size; c++) {
            if (grid[r][c] === null) {
              grid[r][c] = SPANISH_LETTER_POOL[Math.floor(Math.random() * SPANISH_LETTER_POOL.length)];
            }
          }
        }
        this.currentGrid = grid;
        this.placedWords = placed;
        success = true;
        break;
      }
    }

    if (!success) {
      console.warn("Ampliando cuadrícula temporalmente para acomodo perfecto");
      levelData.gridSize = size + 1;
      this.generateBoard(levelData);
    }
  }

  renderBoard() {
    this.dom.grid.innerHTML = '';
    const size = this.currentGrid.length;

    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        const cellEl = document.createElement('div');
        cellEl.className = 'grid-cell';
        cellEl.dataset.row = r;
        cellEl.dataset.col = c;
        cellEl.textContent = this.currentGrid[r][c];
        this.dom.grid.appendChild(cellEl);
      }
    }
  }

  renderWordsList() {
    this.dom.wordsList.innerHTML = '';
    this.placedWords.forEach((wordObj, idx) => {
      const li = document.createElement('li');
      li.className = 'word-item';
      li.id = `word-item-${idx}`;

      li.innerHTML = `
        <div class="word-item-info">
          <span class="word-icon" id="word-icon-${idx}">🔍</span>
          <span class="word-text">${wordObj.display}</span>
        </div>
        <span class="word-status-tag" id="word-tag-${idx}">Oculta</span>
      `;
      this.dom.wordsList.appendChild(li);
    });
  }

  // ==========================================================
  // 6. CONTROLADOR DE EVENTOS DE SELECCIÓN TÁCTIL Y RATÓN
  // ==========================================================

  setupGridPointerEvents() {
    const grid = this.dom.grid;
    this.pinnedCell = null; // Para modo 2-clics (clic inicio + clic fin)
    this.hasMovedDrag = false;

    // Manejar pointerdown
    grid.addEventListener('pointerdown', (e) => {
      const target = document.elementFromPoint(e.clientX, e.clientY);
      const cell = target ? target.closest('.grid-cell') : null;
      if (!cell) return;

      const cellCoord = {
        r: parseInt(cell.dataset.row, 10),
        c: parseInt(cell.dataset.col, 10)
      };

      // Si ya teníamos una celda fijada (modo 2 clics)
      if (this.pinnedCell) {
        if (this.pinnedCell.r === cellCoord.r && this.pinnedCell.c === cellCoord.c) {
          // Deseleccionar al hacer clic de nuevo en la misma
          this.pinnedCell = null;
          this.clearTemporarySelection();
          return;
        } else {
          // Segundo clic: verificar línea entre celda fijada y celda actual
          this.selectedCells = this.getStraightLineCells(this.pinnedCell, cellCoord);
          this.checkSelectedWord();
          this.pinnedCell = null;
          this.clearTemporarySelection();
          return;
        }
      }

      // Iniciar arrastre o primer clic
      this.sound.playSelect();
      this.isDragging = true;
      this.hasMovedDrag = false;
      this.startCell = cellCoord;
      this.updateSelection(this.startCell, this.startCell);
      try {
        grid.setPointerCapture(e.pointerId);
      } catch (err) {}
    });

    // Manejar pointermove (Arrastre continuo)
    grid.addEventListener('pointermove', (e) => {
      if (!this.isDragging || !this.startCell) return;
      const target = document.elementFromPoint(e.clientX, e.clientY);
      const cell = target ? target.closest('.grid-cell') : null;
      if (!cell) return;

      const currentCell = {
        r: parseInt(cell.dataset.row, 10),
        c: parseInt(cell.dataset.col, 10)
      };

      if (currentCell.r !== this.startCell.r || currentCell.c !== this.startCell.c) {
        this.hasMovedDrag = true;
      }

      if (!this.currentHoverCell || this.currentHoverCell.r !== currentCell.r || this.currentHoverCell.c !== currentCell.c) {
        this.currentHoverCell = currentCell;
        this.updateSelection(this.startCell, currentCell);
      }
    });

    // Manejar pointerup (Soltar y verificar palabra o fijar celda)
    const handlePointerEnd = (e) => {
      if (!this.isDragging) return;
      this.isDragging = false;

      if (this.hasMovedDrag) {
        // Modo arrastre: verificar selección directamente
        this.checkSelectedWord();
        this.clearTemporarySelection();
        this.startCell = null;
        this.currentHoverCell = null;
      } else {
        // No se movió: fue un solo clic. Fijar esta celda como inicio de modo 2 clics
        this.pinnedCell = { ...this.startCell };
        this.updateSelection(this.pinnedCell, this.pinnedCell);
        this.showAlert("📍 Letra inicial fijada. Ahora haz clic en la letra final.", false);
      }

      try {
        grid.releasePointerCapture(e.pointerId);
      } catch (err) {}
    };

    grid.addEventListener('pointerup', handlePointerEnd);
    grid.addEventListener('pointercancel', handlePointerEnd);
  }

  // Calcular camino recto (Horizontal, Vertical, Diagonal)
  getStraightLineCells(start, end) {
    const dr = end.r - start.r;
    const dc = end.c - start.c;
    const stepR = dr === 0 ? 0 : dr > 0 ? 1 : -1;
    const stepC = dc === 0 ? 0 : dc > 0 ? 1 : -1;

    // Verificar si es horizontal, vertical o diagonal exacta
    const isHorizontal = dr === 0 && dc !== 0;
    const isVertical = dc === 0 && dr !== 0;
    const isDiagonal = Math.abs(dr) === Math.abs(dc) && dr !== 0;

    if (!isHorizontal && !isVertical && !isDiagonal) {
      return [{ r: start.r, c: start.c }];
    }

    const length = Math.max(Math.abs(dr), Math.abs(dc)) + 1;
    const cells = [];
    for (let i = 0; i < length; i++) {
      cells.push({
        r: start.r + stepR * i,
        c: start.c + stepC * i
      });
    }
    return cells;
  }

  updateSelection(start, end) {
    this.clearTemporarySelection();
    this.selectedCells = this.getStraightLineCells(start, end);

    this.selectedCells.forEach(coord => {
      const el = this.dom.grid.querySelector(`.grid-cell[data-row="${coord.r}"][data-col="${coord.c}"]`);
      if (el) {
        el.classList.add('selected');
      }
    });
  }

  clearTemporarySelection() {
    this.dom.grid.querySelectorAll('.grid-cell.selected').forEach(el => {
      el.classList.remove('selected');
    });
  }

  // ==========================================================
  // 7. COMPROBACIÓN DE PALABRAS Y DESAFÍO TRIVIA
  // ==========================================================

  checkSelectedWord() {
    if (!this.selectedCells || this.selectedCells.length < 2) return;

    // Obtener letras seleccionadas
    let forwardWord = "";
    this.selectedCells.forEach(c => {
      forwardWord += this.currentGrid[c.r][c.c];
    });
    const reverseWord = forwardWord.split("").reverse().join("");

    // Buscar si coincide con alguna palabra del nivel
    const foundMatch = this.placedWords.find(word => {
      if (word.found) return false;
      return word.clean === forwardWord || word.clean === reverseWord;
    });

    if (foundMatch) {
      // Validar si las coordenadas coinciden con las celdas de la palabra colocada
      const matchesCoordinates = this.verifyCoordinatesMatch(this.selectedCells, foundMatch.cells);

      if (matchesCoordinates) {
        this.handleWordFound(foundMatch);
      }
    }
  }

  verifyCoordinatesMatch(userCells, wordCells) {
    if (userCells.length !== wordCells.length) return false;

    // Comprobar coincidencia exacta o en orden inverso
    const matchesForward = userCells.every((cell, idx) => cell.r === wordCells[idx].r && cell.c === wordCells[idx].c);
    const matchesReverse = userCells.every((cell, idx) => {
      const revIdx = wordCells.length - 1 - idx;
      return cell.r === wordCells[revIdx].r && cell.c === wordCells[revIdx].c;
    });

    return matchesForward || matchesReverse;
  }

  handleWordFound(wordObj) {
    wordObj.found = true;
    this.foundWordsCount++;

    // Efecto de audio y puntuación de búsqueda
    this.sound.playWordFound();
    this.addScore(150, "¡Palabra Encontrada!");

    // Resaltar celdas permanentemente con color distintivo
    wordObj.cells.forEach(coord => {
      const el = this.dom.grid.querySelector(`.grid-cell[data-row="${coord.r}"][data-col="${coord.c}"]`);
      if (el) {
        el.classList.remove('hint-highlight');
        el.classList.add(`found-word-${wordObj.colorIndex}`);
      }
    });

    // Actualizar elemento en la lista de palabras
    const wordIndex = this.placedWords.indexOf(wordObj);
    const wordItem = document.getElementById(`word-item-${wordIndex}`);
    const wordIcon = document.getElementById(`word-icon-${wordIndex}`);
    const wordTag = document.getElementById(`word-tag-${wordIndex}`);

    if (wordItem) wordItem.classList.add('found');
    if (wordIcon) wordIcon.textContent = '✅';
    if (wordTag) wordTag.textContent = 'Descubierta';

    // Actualizar contadores del panel
    this.dom.foundCount.textContent = this.foundWordsCount;
    const remaining = this.placedWords.length - this.foundWordsCount;
    this.dom.wordsLeftBadge.textContent = `${remaining} restantes`;

    // Confeti localizado
    const bounds = this.dom.grid.getBoundingClientRect();
    this.confetti.burst(bounds.left + bounds.width / 2, bounds.top + bounds.height / 2, 45);

    // Activar inmediatamente la trivia interactiva obligatoria
    setTimeout(() => {
      this.openTriviaModal(wordObj);
    }, 450);
  }

  // ==========================================================
  // 8. MODAL DE TRIVIA / PREGUNTA DE VERIFICACIÓN
  // ==========================================================

  openTriviaModal(wordObj) {
    this.activeTriviaWord = wordObj;
    this.dom.triviaWordTitle.textContent = wordObj.display;
    this.dom.triviaQuestionText.textContent = wordObj.question;

    // Limpiar feedback previo
    this.dom.triviaFeedback.classList.add('hidden');
    this.dom.triviaFeedback.classList.remove('correct', 'wrong');

    // Renderizar opciones mezcladas
    this.dom.triviaOptionsContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    // Mezclar opciones para variedad
    const shuffledOptions = [...wordObj.options].sort(() => Math.random() - 0.5);

    shuffledOptions.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'trivia-option';
      btn.innerHTML = `
        <span class="option-prefix">${letters[idx]}</span>
        <span class="option-content">${opt.text}</span>
      `;
      btn.addEventListener('click', () => this.handleTriviaAnswer(btn, opt, shuffledOptions));
      this.dom.triviaOptionsContainer.appendChild(btn);
    });

    // Mostrar modal
    this.dom.triviaModal.classList.remove('hidden');
  }

  handleTriviaAnswer(clickedBtn, selectedOption, allOptions) {
    // Deshabilitar todas las opciones para evitar múltiples clics
    const optionButtons = this.dom.triviaOptionsContainer.querySelectorAll('.trivia-option');
    optionButtons.forEach(btn => btn.classList.add('disabled'));

    this.totalQuestionsAnswered++;

    if (selectedOption.correct) {
      // Respuesta Correcta
      clickedBtn.classList.add('selected-correct');
      this.sound.playTriviaCorrect();
      this.totalQuestionsCorrect++;
      this.addScore(100, "¡Respuesta de Detective Correcta!");

      this.dom.triviaFeedback.className = 'trivia-feedback correct';
      this.dom.feedbackIcon.textContent = '🌟';
      this.dom.feedbackTitle.textContent = '¡Excelente deducción, Detective!';
      this.dom.feedbackExplanation.textContent = this.activeTriviaWord.explanation;

      // Confeti
      this.confetti.burst(window.innerWidth / 2, window.innerHeight * 0.45, 50);
    } else {
      // Respuesta Incorrecta con aprendizaje constructivo
      clickedBtn.classList.add('selected-wrong');
      this.sound.playTriviaWrong();

      // Señalar visualmente la opción correcta
      optionButtons.forEach((btn, idx) => {
        if (allOptions[idx].correct) {
          btn.classList.add('selected-correct');
        }
      });

      this.dom.triviaFeedback.className = 'trivia-feedback wrong';
      this.dom.feedbackIcon.textContent = '🔎';
      this.dom.feedbackTitle.textContent = '¡Ojo con las trampas digitales!';
      this.dom.feedbackExplanation.textContent = `Punto clave a recordar: ${this.activeTriviaWord.explanation}`;
    }

    this.dom.triviaFeedback.classList.remove('hidden');
  }

  closeTriviaModal() {
    this.dom.triviaModal.classList.add('hidden');
    this.activeTriviaWord = null;

    // Verificar si se completó todo el nivel
    if (this.foundWordsCount >= this.placedWords.length) {
      setTimeout(() => {
        this.handleLevelCompleted();
      }, 350);
    }
  }

  // ==========================================================
  // 9. SISTEMA DE PISTAS (RESTA PUNTOS OBLIGATORIAMENTE)
  // ==========================================================

  useHint() {
    // Buscar una palabra que no se haya descubierto aún
    const hiddenWords = this.placedWords.filter(w => !w.found);

    if (hiddenWords.length === 0) {
      this.showAlert("¡Ya has encontrado todas las palabras de este nivel! 🎉");
      return;
    }

    // Costo de la pista: 30 puntos
    const hintPenalty = 30;
    this.score = Math.max(0, this.score - hintPenalty);
    this.hintsUsed++;
    this.updateScoreDisplay();

    // Efecto de sonido y advertencia
    this.sound.playHint();

    // Seleccionar palabra oculta aleatoria
    const targetWord = hiddenWords[Math.floor(Math.random() * hiddenWords.length)];

    // Resaltar la primera letra de la palabra oculta
    const firstCell = targetWord.cells[0];
    const cellEl = this.dom.grid.querySelector(`.grid-cell[data-row="${firstCell.r}"][data-col="${firstCell.c}"]`);

    if (cellEl) {
      cellEl.classList.add('hint-highlight');
      // Quitar pulsación después de 4.5 segundos
      setTimeout(() => {
        cellEl.classList.remove('hint-highlight');
      }, 4500);
    }

    this.showAlert(`💡 Pista revelada (-${hintPenalty} pts): ¡Busca la letra inicial de "${targetWord.display}"!`, true);
  }

  // ==========================================================
  // 10. PROGRESIÓN, NIVELES Y GRAN VICTORIA FINAL
  // ==========================================================

  handleLevelCompleted() {
    this.sound.playLevelUp();
    this.confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 120);

    // Marcar tab como completado
    const currentTab = document.getElementById(`tab-lvl-${this.currentLevelIndex + 1}`);
    if (currentTab) {
      currentTab.classList.add('completed');
      const statusEl = currentTab.querySelector('.lvl-status');
      if (statusEl) statusEl.textContent = '✅ Superado';
    }

    // Desbloquear siguiente nivel si existe
    if (this.currentLevelIndex + 1 < GAME_LEVELS.length) {
      this.maxUnlockedLevel = Math.max(this.maxUnlockedLevel, this.currentLevelIndex + 2);
      const nextTab = document.getElementById(`tab-lvl-${this.currentLevelIndex + 2}`);
      if (nextTab) {
        nextTab.classList.remove('locked');
        const nextStatusEl = nextTab.querySelector('.lvl-status');
        if (nextStatusEl) nextStatusEl.textContent = 'Desbloqueado';
      }

      // Mostrar modal de felicitación de nivel
      document.getElementById('complete-level-heading').textContent = `¡NIVEL ${this.currentLevelIndex + 1} SUPERADO!`;
      document.getElementById('complete-level-sub').textContent = `Has dominado los conceptos de: ${GAME_LEVELS[this.currentLevelIndex].title}`;
      document.getElementById('level-score-stat').textContent = `${this.score} pts`;
      const accuracy = this.totalQuestionsAnswered > 0 ? Math.round((this.totalQuestionsCorrect / this.totalQuestionsAnswered) * 100) : 100;
      document.getElementById('level-trivia-stat').textContent = `${accuracy}%`;

      this.dom.levelCompleteModal.classList.remove('hidden');
    } else {
      // ¡ÚLTIMO NIVEL COMPLETADO! -> GRAN FINAL
      this.showGrandVictory();
    }
  }

  showGrandVictory() {
    this.sound.playGrandVictory();
    this.stopTimer();

    // Lluvia de confeti múltiple
    this.confetti.burst(window.innerWidth * 0.3, window.innerHeight * 0.4, 100);
    setTimeout(() => this.confetti.burst(window.innerWidth * 0.7, window.innerHeight * 0.4, 100), 300);
    setTimeout(() => this.confetti.burst(window.innerWidth * 0.5, window.innerHeight * 0.3, 120), 600);

    // Rellenar datos del Diploma
    this.dom.finalScoreVal.textContent = `${this.score} Puntos`;
    this.dom.finalQuestionsVal.textContent = `${this.totalQuestionsCorrect} de ${this.totalQuestionsAnswered} aciertos`;
    this.dom.finalTimeVal.textContent = this.dom.timerDisplay.textContent;

    // Calcular estrellas según precisión y pistas
    let stars = "⭐⭐⭐⭐⭐";
    if (this.hintsUsed > 4) stars = "⭐⭐⭐";
    else if (this.hintsUsed > 2) stars = "⭐⭐⭐⭐";
    this.dom.finalStarsVal.textContent = stars;

    this.dom.grandVictoryModal.classList.remove('hidden');
  }

  restartEntireGame() {
    this.dom.grandVictoryModal.classList.add('hidden');
    this.score = 0;
    this.hintsUsed = 0;
    this.totalQuestionsAnswered = 0;
    this.totalQuestionsCorrect = 0;
    this.secondsElapsed = 0;
    this.maxUnlockedLevel = 1;

    // Reiniciar estados de tabs
    for (let i = 1; i <= 4; i++) {
      const tab = document.getElementById(`tab-lvl-${i}`);
      if (tab) {
        tab.classList.remove('completed');
        if (i > 1) {
          tab.classList.add('locked');
          const status = tab.querySelector('.lvl-status');
          if (status) status.textContent = '🔒 Bloqueado';
        }
      }
    }

    this.updateScoreDisplay();
    this.loadLevel(0);
    this.startTimer();
  }

  // ==========================================================
  // 11. PUNTUACIÓN, RANGOS Y TEMPORIZADOR
  // ==========================================================

  addScore(points, reason) {
    this.score += points;
    this.updateScoreDisplay();
    this.showAlert(`+${points} pts: ${reason}`);
  }

  updateScoreDisplay() {
    this.dom.scoreDisplay.textContent = this.score;

    // Actualizar Rango
    let currentRank = this.ranks[0];
    for (const r of this.ranks) {
      if (this.score >= r.minScore) {
        currentRank = r;
      }
    }
    this.dom.rankName.textContent = currentRank.title;
    this.dom.rankIcon.textContent = currentRank.icon;
  }

  showAlert(msg, isPenalty = false) {
    this.dom.floatingAlert.textContent = msg;
    this.dom.floatingAlert.className = `floating-alert ${isPenalty ? 'penalty' : ''}`;
    this.dom.floatingAlert.classList.remove('hidden');

    if (this.alertTimeout) clearTimeout(this.alertTimeout);
    this.alertTimeout = setTimeout(() => {
      this.dom.floatingAlert.classList.add('hidden');
    }, 3200);
  }

  startTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerRunning = true;
    this.timerInterval = setInterval(() => {
      this.secondsElapsed++;
      const mins = String(Math.floor(this.secondsElapsed / 60)).padStart(2, '0');
      const secs = String(this.secondsElapsed % 60).padStart(2, '0');
      this.dom.timerDisplay.textContent = `${mins}:${secs}`;
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    this.timerRunning = false;
  }

  showHelpModal() {
    this.dom.helpModal.classList.remove('hidden');
  }

  hideHelpModal() {
    this.dom.helpModal.classList.add('hidden');
  }
}

// ==========================================================
// 12. INICIALIZACIÓN AL CARGAR LA PÁGINA
// ==========================================================

document.addEventListener('DOMContentLoaded', () => {
  window.game = new WordSearchGame();
});
