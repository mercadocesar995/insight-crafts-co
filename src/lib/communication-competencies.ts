import bahiaAsset from "@/assets/bahia-pescadores.jpg.asset.json";
import faunaAsset from "@/assets/fauna-parque.jpg.asset.json";
import hibiscoAsset from "@/assets/hibisco-detalle.jpg.asset.json";

export type Competency = {
  id: string;
  name: string;
  short: string;
  meaning: string;
  origin: string;
  application: string;
  teamValue: string;
  project: string;
};

export type Dimension = {
  id: "datos" | "negocio" | "comunicacion";
  label: string;
  role: string;
  text: string;
};

export type VisualPiece = {
  id: string;
  title: string;
  kind: "Foto" | "Audio" | "Video";
  note: string;
  href: string;
  /** Optional preview: a hosted image URL or an asset pointer URL used as the card thumbnail. */
  image?: string;
};

export const dimensions: Dimension[] = [
  {
    id: "datos",
    label: "Datos",
    role: "encontrar evidencia",
    text: "Organizar, limpiar, analizar y validar información para identificar patrones, tendencias y posibles oportunidades.",
  },
  {
    id: "negocio",
    label: "Negocio",
    role: "comprender el contexto",
    text: "Entender el problema que se busca resolver, los procesos involucrados y la relevancia de los resultados para una organización.",
  },
  {
    id: "comunicacion",
    label: "Comunicación",
    role: "convertir hallazgos en comprensión",
    text: "Sintetizar resultados, construir narrativas claras y presentar la información para que diferentes equipos puedan entenderla y usarla.",
  },
];

export const competencies: Competency[] = [
  {
    id: "critica",
    name: "Pensamiento crítico e investigación",
    short: "Formular buenas preguntas antes de tocar los números.",
    meaning:
      "Antes de analizar me pregunto qué se está midiendo realmente, de dónde viene la información y qué quedaría sin cubrir. Es un hábito de investigación: no partir de la conclusión que me conviene.",
    origin:
      "Viene de la investigación cuantitativa y cualitativa y del periodismo de investigación: contrastar fuentes, pedir el dato original y no conformarme con la primera explicación.",
    application:
      "En un experimento A/B como RappiPlus ayuda a revisar si los grupos son comparables, si la diferencia podría deberse al azar y qué otra explicación cabe antes de reportar una mejora.",
    teamValue: "Un equipo evita sostener decisiones sobre conclusiones que la evidencia no respalda del todo.",
    project: "RappiPlus",
  },
  {
    id: "clara",
    name: "Comunicación clara",
    short: "Explicar un resultado sin que nadie necesite un traductor.",
    meaning:
      "Buscar la frase que hace entender el hallazgo a quien no hizo el análisis, y ajustarla según a quién se le hable.",
    origin:
      "De la producción de textos y la construcción de narrativas, junto con la comunicación organizacional: escribir para públicos distintos con un mismo mensaje.",
    application:
      "En un tablero como Andes Retail se traduce en títulos que dicen qué mirar, en el orden de los indicadores y en lo que se deja fuera para no confundir.",
    teamValue: "Reduce idas y vueltas: la lectura del análisis no depende de que alguien explique la reunión.",
    project: "Andes Retail",
  },
  {
    id: "sintesis",
    name: "Síntesis de información",
    short: "Decidir qué es lo que de verdad importa.",
    meaning:
      "Ordenar mucha información y quedarme con lo relevante, separando lo llamativo de lo que tiene consecuencias.",
    origin:
      "Del diseño, la diagramación y la gestión de contenidos: jerarquiar la información para que se entienda de un vistazo.",
    application:
      "En un análisis con muchas variables, como las cohortes de Andes Capital Real Estate, implica elegir qué mostrar y qué queda en el detalle técnico.",
    teamValue: "Las reuniones se usan para decidir, no para recorrer todo el dataset.",
    project: "Andes Capital Real Estate",
  },
  {
    id: "narrativa",
    name: "Storytelling y narrativa",
    short: "Conectar el contexto, la evidencia y lo que sigue.",
    meaning:
      "Armar un recorrido: qué pasaba, qué se encontró y qué significa. Sin inflar el resultado para que la historia se sostenga.",
    origin:
      "De la construcción de narrativas y el lenguaje cinematográfico: estructura, ritmo y cierre de una historia.",
    application:
      "Al presentar un análisis de clientes como ConnectaTel ayuda a ordenar la exposición del problema a la recomendación, dejando claro qué es evidencia y qué es interpretación.",
    teamValue: "El mensaje llega con contexto, así es más fácil acordar un siguiente paso.",
    project: "ConnectaTel",
  },
  {
    id: "audiencias",
    name: "Comprensión de audiencias",
    short: "Saber quién va a leer el dato.",
    meaning:
      "Pensar qué sabe y qué necesita la persona que recibe la información: no es el mismo tablero para quien opera que para quien decide.",
    origin:
      "De los estudios de opinión pública y la comprensión de audiencias: definir a quién se le habla antes de definir el mensaje.",
    application:
      "En un análisis estadístico de clientes como NovaRetail+ el mismo hallazgo se muestra distinto en un resumen para dirección que en el detalle para el equipo de atención.",
    teamValue: "La información se usa en el área a la que va dirigida, en lugar de archivarse.",
    project: "NovaRetail+",
  },
  {
    id: "creatividad",
    name: "Creatividad y pensamiento estratégico",
    short: "Probar otras formas de mostrar lo mismo.",
    meaning:
      "Explorar ángulos y formatos distintos antes de cerrar una presentación, y preguntar para qué sirve el análisis.",
    origin:
      "Del marketing, la publicidad y la producción audiovisual: pensar la idea, el formato y el propósito del mensaje.",
    application:
      "En el experimento de conversión de la landing page (Experimentos A/B) ayuda a decidir qué comparar, qué hipótesis vale la pena poner a prueba y cómo presentar la opción elegida.",
    teamValue: "Aporta varias alternativas sobre la mesa en lugar de una sola lectura del dato.",
    project: "Experimentos A/B",
  },
  {
    id: "equipo",
    name: "Trabajo en equipo y adaptabilidad",
    short: "Colaborar con perfiles que no vienen de los datos.",
    meaning:
      "Escuchar cómo cada área entiende su propio proceso y ajustar la forma de trabajar y de comunicar según lo que el equipo necesite.",
    origin:
      "De la comunicación organizacional e intercultural y de la práctica en radio, televisión y multimedia: roles distintos cooperando en un mismo producto.",
    application:
      "En un proyecto de calidad de datos implica entender con el área cómo se genera cada campo antes de limpiar, corregir o descartar algo.",
    teamValue: "Baja la fricción entre negocio y análisis: la información se pide con contexto.",
    project: "ConnectaTel",
  },
  {
    id: "audiovisual",
    name: "Producción audiovisual y comunicación visual",
    short: "Una mirada de imagen, sonido y ritmo.",
    meaning:
      "Formación en fotografía, video, edición y diseño. La entiendo como un apoyo para presentar información, no como experiencia en análisis de datos.",
    origin:
      "De la fotografía y la reportería gráfica, el lenguaje cinematográfico y la radio, televisión y multimedia. Es formación académica y trabajo propio, no práctica profesional con datos.",
    application:
      "Aporta al cuidado visual de presentaciones y tableros: composición, jerarquía, contraste y uso del espacio para que un dashboard se lea sin esfuerzo.",
    teamValue: "Los materiales que se comparten se ven cuidados y se entienden más rápido.",
    project: "Andes Retail",
  },
];

export const visualPieces: VisualPiece[] = [
  {
    id: "hegemonia",
    kind: "Video",
    title: "HEGEMONIA",
    note: "Documental propio.",
    href: "https://drive.google.com/file/d/19swwgoWAgGfL8paal-1NZPBuFKIeUeny/view",
  },
  {
    id: "crecimos-al-sol",
    kind: "Video",
    title: "Crecimos al Sol",
    note: "Pieza audiovisual propia.",
    href: "https://drive.google.com/file/d/1DvyKbJClfkSDoJkblTw42OKaYcjvBPtT/view",
  },
  {
    id: "fauna-parque",
    kind: "Foto",
    title: "Fauna en el parque",
    note: "Fotografía propia de aves en un parque urbano.",
    href: faunaAsset.url,
    image: faunaAsset.url,
  },
  {
    id: "bahia",
    kind: "Foto",
    title: "Bahía de pescadores",
    note: "Fotografía propia de paisaje costero a contraluz.",
    href: bahiaAsset.url,
    image: bahiaAsset.url,
  },
  {
    id: "hibisco",
    kind: "Foto",
    title: "Hibisco, detalle",
    note: "Fotografía propia en primer plano.",
    href: hibiscoAsset.url,
    image: hibiscoAsset.url,
  },
];
