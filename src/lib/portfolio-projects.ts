import ab from "@/assets/Imagen_A-B.jpg.asset.json";
import connecta from "@/assets/Imagen_ConnectaTel.jpg.asset.json";
import nova from "@/assets/Imagen_NovaRetail.jpg.asset.json";
import technology from "@/assets/Imagen_Tecnologia.jpg.asset.json";
import traffic from "@/assets/Imagen_trafico.jpg.asset.json";
import retail from "@/assets/Imagen-Walmart.jpg.asset.json";

export type Cat = "Todos" | "BI" | "Clientes" | "Experimentación";
type Area = Exclude<Cat, "Todos">;

type Project = {
  name: string;
  topic: string;
  summary: string;
  image?: string;
  cats: Area[];
  tools: string[];
  bars: number[];
  code: string;
  repo?: string;
  powerbi?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "RappiPlus",
    summary: "Análisis de ventas, rentabilidad y pruebas A/B para conectar el desempeño del negocio con el comportamiento de los clientes.",
    topic: "Ventas, rentabilidad y A/B Testing",
    cats: ["BI", "Clientes", "Experimentación"],
    tools: ["SQL", "Python", "Estadística", "Power BI"],
    bars: [40, 65, 50, 80, 70, 90, 78, 96],
    code: "01",
    repo: "https://github.com/mercadocesar995/RappiPlus_Analisis",
    powerbi: "https://app.powerbi.com/view?r=eyJrIjoiMjRiOTk0OGMtNDgxMy00YWM0LWE0YTUtOTEzYzEwYzBkMDZmIiwidCI6ImQ1MTM4OGVmLTZhYjAtNDM2My05Zjk0LWQ1NjY0NGE0NTk3MCIsImMiOjR9",
    featured: true,
  },
  {
    name: "Andes Capital Real Estate",
    summary: "Análisis de ventas y clientes del sector inmobiliario, con cohortes y un tablero para explorar el desempeño comercial.",
    topic: "Ventas, clientes y cohortes",
    cats: ["BI", "Clientes"],
    tools: ["SQL", "Power BI", "Excel"],
    bars: [30, 50, 60, 55, 75, 80],
    code: "02",
    repo: "https://github.com/mercadocesar995/Analisis_AndesCapitalRealEstate",
    powerbi: "https://app.powerbi.com/view?r=eyJrIjoiNzkyZDM5ZTQtYmFmZC00Y2VkLWIyZDctYjBlYmVkMDRmNjBjIiwidCI6ImQ1MTM4OGVmLTZhYjAtNDM2My05Zjk0LWQ1NjY0NGE0NTk3MCIsImMiOjR9",
  },
  {
    name: "Andes Retail",
    summary: "Tablero de evolución comercial y rentabilidad de 2024–2025, con una vista general y detalle operativo.",
    image: retail.url,
    topic: "Detalle operativo y rentabilidad (2024–2025)",
    cats: ["BI"],
    tools: ["Power BI", "DAX", "Excel"],
    bars: [35, 55, 48, 68, 62, 82],
    code: "03",
    powerbi: "https://app.powerbi.com/view?r=eyJrIjoiODhjYzgwNGYtMjUyZi00NzkwLTg3NmUtZjAyODMwNWIzNzM5IiwidCI6ImQ1MTM4OGVmLTZhYjAtNDM2My05Zjk0LWQ1NjY0NGE0NTk3MCIsImMiOjR9&pageName=3343bf1ef06660b8e8ef",
  },
  {
    name: "NovaRetail+",
    summary: "Análisis estadístico de clientes para explorar sus características y comprender patrones en la información.",
    image: nova.url,
    topic: "Análisis estadístico de clientes",
    cats: ["Clientes"],
    tools: ["Python", "Estadística"],
    bars: [45, 70, 55, 85, 60, 65],
    code: "04",
    repo: "https://github.com/mercadocesar995/analisis_NovaReatil-",
  },
  {
    name: "ConnectaTel",
    summary: "Análisis de clientes y abandono en telecomunicaciones para explorar el comportamiento de los usuarios.",
    image: connecta.url,
    topic: "Análisis de clientes y churn",
    cats: ["Clientes"],
    tools: ["Python", "SQL"],
    bars: [70, 60, 45, 65, 50, 75],
    code: "05",
    repo: "https://github.com/mercadocesar995/analisis_ConnectaTel",
  },
  {
    name: "Movilidad 2024",
    summary: "Exploración de datos de movilidad de 2024 para comprender la información disponible sobre desplazamientos.",
    image: traffic.url,
    topic: "Análisis de datos de movilidad",
    cats: ["BI"],
    tools: ["SQL", "Python", "Power BI"],
    bars: [55, 45, 75, 60, 85, 70],
    code: "06",
    repo: "https://github.com/mercadocesar995/analisis_movilidad_2024",
  },
  {
    name: "Experimentos A/B",
    summary: "Comparación de dos versiones de una landing page mediante pruebas A/B para evaluar la conversión de usuarios.",
    image: ab.url,
    topic: "Conversión y comportamiento de usuarios",
    cats: ["Experimentación"],
    tools: ["Python", "Estadística", "SQL"],
    bars: [50, 52, 48, 72, 74, 76],
    code: "07",
    repo: "https://github.com/mercadocesar995/analisis_landing_page",
  },
];


export const heroImage = technology.url;
