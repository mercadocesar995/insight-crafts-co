import { createFileRoute } from "@tanstack/react-router";
import { AboutJourney } from "@/components/about-journey";
import { SubpageShell } from "@/components/subpage-shell";

export const Route = createFileRoute("/acerca-de-mi")({
  head: () => ({
    meta: [
      { title: "Acerca de mí y trayectoria — Cesar Mercado" },
      { name: "description", content: "Trayectoria de Cesar Mercado: operaciones, negocio y comunicación como base de su perfil como Analista de Datos." },
      { property: "og:title", content: "Acerca de mí y trayectoria — Cesar Mercado" },
      { property: "og:description", content: "Operaciones, negocio y comunicación como base de mi perfil como Analista de Datos." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => <SubpageShell><AboutJourney /></SubpageShell>,
});
