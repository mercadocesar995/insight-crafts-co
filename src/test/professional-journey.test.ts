import { describe, expect, it } from "vitest";
import { experiencesForSkill, journey } from "@/lib/professional-journey";

describe("Professional journey facts", () => {
  it("preserves the reported 15% waiting-time reduction at BBC", () => {
    expect(journey.find((stage) => stage.id === "bbc")?.result?.value).toBe(15);
  });
  it("preserves the reported 30% result at Toro without exclusive attribution", () => {
    const result = journey.find((stage) => stage.id === "toro")?.result;
    expect(result?.value).toBe(30);
    expect(result?.attribution).toContain("no se presenta como un efecto exclusivamente atribuible");
  });
  it("preserves the reported 20% waste reduction at La Cuarta Pared", () => {
    expect(journey.find((stage) => stage.id === "cuarta")?.result?.value).toBe(20);
  });
  it("keeps data formation distinct from the eight jobs", () => {
    expect(journey.filter((stage) => stage.kind === "Experiencia laboral")).toHaveLength(8);
    expect(journey.find((stage) => stage.id === "data")?.kind).toBe("Formación y proyectos");
  });
  it("adds the reported Apex America role with its facts", () => {
    const apex = journey.find((stage) => stage.id === "apex");
    expect(apex?.company).toBe("Apex America");
    expect(apex?.role).toBe("Analista de Desarrollo Organizacional");
    expect(apex?.period).toBe("sep 2025 – mar 2026");
    expect(apex?.kind).toBe("Experiencia laboral");
    expect(apex?.context).toContain("1.500");
    expect(apex?.context).toContain("desarrollo organizacional");
    expect(apex?.skills["Pensamiento analítico"]).toContain("onboarding");
  });
  it("links active listening only to the supported service experience", () => {
    expect(experiencesForSkill("Escucha activa").map((stage) => stage.id)).toEqual(["toro"]);
  });
  it("retains the exact El Hogareño employment period", () => {
    expect(journey.find((stage) => stage.id === "hogareno")?.period).toBe("15 feb 2017 – 15 jun 2017");
  });
});