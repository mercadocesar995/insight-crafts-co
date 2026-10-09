import { describe, expect, it } from "vitest";
import { competencies, dimensions, visualPieces } from "@/lib/communication-competencies";

const PORTFOLIO_PROJECTS = [
  "RappiPlus",
  "Andes Capital Real Estate",
  "Andes Retail",
  "NovaRetail+",
  "ConnectaTel",
  "Movilidad 2024",
  "Experimentos A/B",
];

const SENIOR_TERMS = ["experto", "especialista", "dominio avanzado", "senior", "data scientist", "data engineer"];

describe("Comunicación + Datos facts", () => {
  it("lists the eight communication competencies from the brief", () => {
    expect(competencies).toHaveLength(8);
    expect(new Set(competencies.map((item) => item.id)).size).toBe(8);
  });

  it("explains meaning, origin, application and team value for every competency", () => {
    for (const item of competencies) {
      for (const field of ["meaning", "origin", "application", "teamValue"] as const) {
        expect(item[field].trim().length).toBeGreaterThan(40);
      }
    }
  });

  it("keeps the three dimensions of the profile with their roles", () => {
    expect(dimensions.map((item) => item.id)).toEqual(["datos", "negocio", "comunicacion"]);
    expect(dimensions.find((item) => item.id === "datos")?.role).toBe("encontrar evidencia");
    expect(dimensions.find((item) => item.id === "negocio")?.role).toBe("comprender el contexto");
    expect(dimensions.find((item) => item.id === "comunicacion")?.role).toBe("convertir hallazgos en comprensión");
  });

  it("never uses senior or expert positioning", () => {
    const text = JSON.stringify(competencies).toLowerCase();
    for (const term of SENIOR_TERMS) expect(text).not.toContain(term);
  });

  it("links each competency to a project that is really on the page", () => {
    for (const item of competencies) expect(PORTFOLIO_PROJECTS).toContain(item.project);
  });

  it("only publishes visual pieces that are Foto, Audio or Video with an openable link", () => {
    expect(visualPieces).toHaveLength(5);
    for (const piece of visualPieces) {
      expect(["Foto", "Audio", "Video"]).toContain(piece.kind);
      expect(piece.href.startsWith("https://") || piece.href.startsWith("/")).toBe(true);
      if (piece.image) expect(piece.image.startsWith("https://") || piece.image.startsWith("/")).toBe(true);
    }
  });
});
