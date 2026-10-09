export type JourneySkill =
  | "Organización y atención al detalle" | "Pensamiento analítico" | "Resolución de problemas"
  | "Liderazgo" | "Trabajo en equipo" | "Comunicación interpersonal" | "Escucha activa"
  | "Orientación al cliente" | "Adaptabilidad" | "Planificación y priorización"
  | "Pensamiento crítico" | "Creatividad" | "Aprendizaje continuo"
  | "Orientación a resultados" | "Storytelling y comunicación de hallazgos";

export type JourneyStage = {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  kind: "Experiencia laboral" | "Formación" | "Formación y proyectos";
  theme: "operations" | "business" | "communication" | "data";
  headline: string;
  context: string;
  learning: string;
  connection: string;
  contribution: string;
  skills: Partial<Record<JourneySkill, string>>;
  tools?: string[];
  result?: { value: number; text: string; attribution: string };
};

export const journey: JourneyStage[] = [
  {
    id: "habbana", company: "Habbana 93", role: "Auxiliar de Cocina", period: "2016–2017", location: "Bogotá", kind: "Experiencia laboral", theme: "operations",
    headline: "Aprender a observar la operación",
    context: "Apoyé el porcionamiento, mise en place, cocina fría y caliente, panadería y repostería. Con la experiencia asumí más responsabilidades en el servicio, la rotación de productos y el control diario de inventarios, manteniendo el orden y la higiene del área.",
    learning: "Construí disciplina, atención al detalle y responsabilidad sobre los recursos, adaptándome al ritmo del servicio y al trabajo en equipo.",
    connection: "Las existencias, el consumo y la rotación me acercaron al seguimiento de información operativa, antes de estudiar análisis de datos.",
    contribution: "Una mirada cuidadosa sobre el origen de la información y los procesos que la generan.",
    skills: {
      "Organización y atención al detalle": "Seguimiento diario de inventarios y rotación adecuada de productos.",
      "Trabajo en equipo": "Apoyo a las distintas áreas de cocina durante el servicio.",
      "Adaptabilidad": "Participación en cocina fría, caliente, panadería y repostería según las necesidades operativas.",
    },
  },
  {
    id: "hogareno", company: "El Hogareño", role: "Jefe de Cocina", period: "15 feb 2017 – 15 jun 2017", kind: "Experiencia laboral", theme: "operations",
    headline: "De ejecutar tareas a planificar recursos",
    context: "Elaboré menús, preparé materias primas y atendí el servicio tipo bufé. Manejé inventarios, rotulé productos y verifiqué el cumplimiento de buenas prácticas de manufactura (BPM).",
    learning: "Fortalecí la planificación, la priorización y el liderazgo operativo para responder a las necesidades del servicio.",
    connection: "La disponibilidad de productos y el control de inventarios me enseñaron a anticipar necesidades y mantener información organizada para evitar errores.",
    contribution: "Comprender cómo la planificación y la calidad de los registros apoyan decisiones operativas.",
    skills: {
      "Planificación y priorización": "Elaboración de menús y prealistamiento de materias primas para el bufé.",
      "Liderazgo": "Responsabilidad sobre la organización del trabajo como jefe de cocina.",
      "Organización y atención al detalle": "Rotulación de productos y verificación de BPM.",
    },
  },
  {
    id: "hico", company: "Hico Fish / Cóctel del Mar", role: "Auxiliar de Cevichería", period: "23 ago 2017 – 13 ene 2018", kind: "Experiencia laboral", theme: "operations",
    headline: "Conectar los insumos con el servicio",
    context: "Preparé áreas de trabajo, porcionamientos, cortes y salsas base. Apoyé el servicio y la atención al cliente, el control de inventarios, la rotación y la limpieza del área.",
    learning: "Reforcé la coordinación, la orientación al cliente y el cumplimiento de estándares en una operación que exigía cuidado con los productos.",
    connection: "El control de cantidades y la rotación mostraron la relación entre insumos, planificación y calidad del servicio.",
    contribution: "Relacionar la información sobre recursos con su impacto en la experiencia del cliente.",
    skills: {
      "Orientación al cliente": "Atención al cliente y apoyo al servicio en cocina.",
      "Trabajo en equipo": "Coordinación de la preparación y el apoyo al servicio.",
      "Organización y atención al detalle": "Porcionamiento, control de inventarios y rotación de productos.",
    },
  },
  {
    id: "dlz", company: "DLZ / Gastro-Innova", role: "Auxiliar y Líder de Cocina", period: "23 mar 2018 – 1 nov 2019", kind: "Experiencia laboral", theme: "operations",
    headline: "Dar continuidad al seguimiento",
    context: "Organicé las áreas de parrilla, cocina caliente y fría. Apoyé el servicio y la atención al cliente, manejé inventarios diarios, quincenales y mensuales, y coordiné y supervisé personal.",
    learning: "Desarrollé liderazgo, gestión del tiempo, autonomía y comunicación operativa para organizar recursos y equipos.",
    connection: "Los inventarios en distintos periodos me permitieron comprender la importancia de comparar registros, revisar existencias y mantener controles consistentes.",
    contribution: "Entender la periodicidad de la información y comunicar necesidades entre quienes registran y usan los datos.",
    skills: {
      "Liderazgo": "Coordinación y supervisión de personal en cocina.",
      "Comunicación interpersonal": "Coordinación operativa entre personas y áreas de trabajo.",
      "Pensamiento analítico": "Seguimiento de inventarios diarios, quincenales y mensuales para revisar existencias.",
      "Planificación y priorización": "Organización de las áreas de parrilla, cocina caliente y fría.",
    },
  },
  {
    id: "bbc", company: "BBC / Bavaria", role: "Cocinero", period: "dic 2020 – mar 2022", location: "Bogotá", kind: "Experiencia laboral", theme: "operations",
    headline: "Comprender el valor de los tiempos",
    context: "Preparé alimentos bajo estándares de calidad e inocuidad, organicé materias primas e insumos y coordiné cocina y servicio, cumpliendo tiempos de preparación y entrega en alta demanda.",
    learning: "Fortalecí el trabajo bajo presión, la gestión del tiempo y la mejora continua con orientación a resultados.",
    connection: "Los tiempos de proceso y la coordinación entre áreas hicieron visible su importancia para la eficiencia operativa.",
    contribution: "Interpretar indicadores de proceso teniendo en cuenta el contexto real de la operación.",
    skills: {
      "Adaptabilidad": "Trabajo en entornos de alta demanda sin perder los estándares de calidad.",
      "Trabajo en equipo": "Coordinación entre cocina y servicio para cumplir tiempos de entrega.",
      "Orientación a resultados": "Participación en mejoras operativas que contribuyeron a reducir los tiempos de espera.",
    },
    result: { value: 15, text: "Reducción de tiempos de espera", attribution: "Resultado reportado: contribuí a mejoras operativas que redujeron los tiempos de espera en un 15%; no se atribuye a una metodología analítica específica." },
  },
  {
    id: "toro", company: "Toro McCoy", role: "Asesor de Servicio", period: "dic 2023 – jun 2024", location: "Bogotá", kind: "Experiencia laboral", theme: "business",
    headline: "Escuchar para comprender el negocio",
    context: "Atendí y asesoré a clientes, gestioné pedidos y requerimientos, coordiné con cocina y servicio, y busqué soluciones a inquietudes. Apoyé el seguimiento de la operación diaria.",
    learning: "Desarrollé escucha activa, comunicación persuasiva y asesoría comercial para comprender necesidades y resolver problemas.",
    connection: "Esta etapa conectó el comportamiento del cliente, la experiencia de compra y los resultados comerciales.",
    contribution: "Formular preguntas relevantes sobre clientes y comunicar hallazgos con sensibilidad hacia sus necesidades.",
    skills: {
      "Escucha activa": "Atención personalizada y seguimiento de requerimientos de clientes.",
      "Comunicación interpersonal": "Uso de comunicación persuasiva y asesoría comercial.",
      "Orientación al cliente": "Comprensión de necesidades de compra y atención de inquietudes.",
      "Resolución de problemas": "Búsqueda de soluciones a inquietudes en coordinación con cocina y servicio.",
    },
    result: { value: 30, text: "Mejora reportada en ticket promedio y satisfacción", attribution: "Resultado reportado en mi experiencia profesional, relacionado con técnicas de comunicación y asesoría comercial; no se presenta como un efecto exclusivamente atribuible a mis acciones." },
  },
  {
    id: "cuarta", company: "La Cuarta Pared", role: "Líder de Cocina y Cajero", period: "oct 2024 – jun 2025", location: "Bogotá", kind: "Experiencia laboral", theme: "business",
    headline: "Ver los datos detrás de los recursos",
    context: "Lideré y formé al equipo, coordiné procesos en alta demanda y realicé seguimiento de inventarios, consumo, abastecimiento, costos y desperdicios. Implementé controles de inventario y organicé recursos y tiempos de entrega.",
    learning: "Fortalecí el pensamiento orientado a procesos, el análisis práctico de consumo y la identificación de oportunidades de mejora.",
    connection: "El seguimiento de inventarios y desperdicios me permitió ver con mayor claridad su relación con los costos y la rentabilidad.",
    contribution: "Conectar preguntas de negocio con registros operativos y aportar contexto al análisis de costos, consumo y recursos.",
    skills: {
      "Liderazgo": "Liderazgo y formación del equipo durante la operación.",
      "Pensamiento analítico": "Seguimiento de inventarios, consumo, costos y desperdicios.",
      "Pensamiento crítico": "Identificación de oportunidades de mejora mediante el control de recursos y desperdicios.",
      "Orientación a resultados": "Implementación de controles de inventario que contribuyeron a reducir mermas.",
      "Planificación y priorización": "Organización de recursos y procesos en momentos de alta demanda.",
    },
    result: { value: 20, text: "Reducción de mermas", attribution: "Resultado reportado: los controles de inventario que implementé contribuyeron a reducir las mermas en un 20%, sin atribuir ahorros monetarios no documentados." },
  },
  {
    id: "communication", company: "Universidad Distrital Francisco José de Caldas", role: "Comunicación Social y Periodismo", period: "Formación profesional · sin fecha especificada", kind: "Formación", theme: "communication",
    headline: "La comunicación también es mi identidad",
    context: "Soy Comunicador Social y Periodista, con un doble enfoque en comunicación organizacional y producción audiovisual. He liderado y participado en proyectos audiovisuales presentados en foros nacionales y festivales universitarios.",
    learning: "Mi formación abarca guion, fotografía, video, edición y postproducción; comunicación interna y externa, marketing, publicidad, redes sociales y producción gráfica y multimedia.",
    connection: "Organizar historias y adaptar mensajes a distintas audiencias complementa la visualización de información y la presentación de hallazgos.",
    contribution: "Traducir resultados técnicos a un lenguaje comprensible para el negocio, sin perder su significado.",
    skills: {
      "Creatividad": "Conceptualización de proyectos audiovisuales y producción de contenido gráfico y multimedia.",
      "Storytelling y comunicación de hallazgos": "Escritura de guiones y organización de historias; aprendizaje transferible a presentar hallazgos de datos.",
      "Comunicación interpersonal": "Adaptación de mensajes para diferentes audiencias y comunicación organizacional.",
      "Trabajo en equipo": "Participación y liderazgo en proyectos audiovisuales presentados en foros y festivales universitarios.",
    },
  },
  {
    id: "data", company: "Mi presente en análisis de datos", role: "Analista de Datos Junior · perfil en desarrollo", period: "Actualidad · formación y portafolio", kind: "Formación y proyectos", theme: "data",
    headline: "Integrar lo aprendido, no empezar de cero",
    context: "Desarrollo mi perfil junior mediante formación práctica y proyectos de portafolio como RappiPlus, Andes Retail Group, Andes Capital Real Estate, ConnectaTel y NovaRetail+. Esta etapa no representa experiencia laboral formal como analista.",
    learning: "Me formo en limpieza, transformación y validación de datos, análisis exploratorio, estadística, pruebas A/B y creación de KPIs, visualizaciones y dashboards.",
    connection: "Aplico nuevas herramientas a preguntas sobre ventas, clientes, rentabilidad y comportamiento de usuarios, integrando mi comprensión operativa del negocio.",
    contribution: "Pensamiento analítico, contexto de negocio y comunicación clara, con disposición para aprender y aportar a un equipo de datos, BI, marketing u operaciones.",
    tools: ["SQL", "PostgreSQL", "Python", "Pandas", "Excel", "Google Sheets", "Power BI", "DAX", "Power Query"],
    skills: {
      "Aprendizaje continuo": "Formación práctica en herramientas analíticas y desarrollo de proyectos de portafolio.",
      "Pensamiento analítico": "Análisis exploratorio y proyectos sobre ventas, clientes y rentabilidad.",
      "Pensamiento crítico": "Limpieza y validación de información, estadística y pruebas A/B durante la formación.",
      "Storytelling y comunicación de hallazgos": "Creación de visualizaciones y dashboards como parte del portafolio.",
      "Resolución de problemas": "Proyectos de análisis orientados a preguntas de negocio sobre clientes, ventas y usuarios.",
    },
  },
];

export const journeySkills: JourneySkill[] = [
  "Organización y atención al detalle", "Pensamiento analítico", "Resolución de problemas", "Liderazgo",
  "Trabajo en equipo", "Comunicación interpersonal", "Escucha activa", "Orientación al cliente",
  "Adaptabilidad", "Planificación y priorización", "Pensamiento crítico", "Creatividad",
  "Aprendizaje continuo", "Orientación a resultados", "Storytelling y comunicación de hallazgos",
];

export function experiencesForSkill(skill: JourneySkill) {
  return journey.filter((stage) => Boolean(stage.skills[skill]));
}