import { describe, expect, it } from "vitest";
import { education, toolCount, toolGroups } from "@/lib/work-tools";

describe("User-provided tools and education", () => {
  it("groups the six analysis tools separately", () => {
    expect(toolGroups[0]?.tools.map((tool) => tool.name)).toEqual(["Python", "SQL", "Power BI", "Excel", "Google Sheets", "Jupyter Notebook"]);
  });
  it("includes the four multimedia tools", () => {
    expect(toolGroups[1]?.tools.map((tool) => tool.name)).toEqual(["Canva", "CapCut", "Adobe Premiere", "Photopea"]);
    expect(toolCount).toBe(10);
  });
  it("identifies the institution as education, not employment", () => {
    expect(education.institution).toBe("Universidad Distrital Francisco José de Caldas");
    expect(education.status).toBe("Egresado");
  });
});