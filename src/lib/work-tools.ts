import python from "@/assets/python.svg.asset.json";
import sheets from "@/assets/googlesheets.svg.asset.json";
import jupyter from "@/assets/jupyter.svg.asset.json";
import photopea from "@/assets/photopea.svg.asset.json";
import university from "@/assets/logo_u.png.asset.json";

export const education = {
  institution: "Universidad Distrital Francisco José de Caldas",
  degree: "Comunicación Social y Periodismo",
  status: "Egresado",
  logo: university.url,
};

export const toolGroups = [
  { name: "Análisis y Datos", tone: "data", tools: [
    { name: "Python", image: python.url, symbol: "python" },
    { name: "SQL", symbol: "database" },
    { name: "Power BI", symbol: "chart" },
    { name: "Excel", symbol: "excel" },
    { name: "Google Sheets", image: sheets.url, symbol: "sheet" },
    { name: "Jupyter Notebook", image: jupyter.url, symbol: "notebook" },
  ] },
  { name: "Multimedia y Diseño", tone: "design", tools: [
    { name: "Canva", symbol: "canva" },
    { name: "CapCut", symbol: "cut" },
    { name: "Adobe Premiere", symbol: "premiere" },
    { name: "Photopea", image: photopea.url, symbol: "photopea" },
  ] },
] satisfies { name: string; tone: string; tools: { name: string; image?: string; symbol: string }[] }[];

export const toolCount = toolGroups.reduce((count, group) => count + group.tools.length, 0);