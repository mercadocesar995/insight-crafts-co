import { createFileRoute } from "@tanstack/react-router";
import { CommunicationData } from "@/components/communication-data";
import { SubpageShell } from "@/components/subpage-shell";

export const Route = createFileRoute("/comunicacion")({
  head: () => ({
    meta: [
      { title: "Comunicación + Datos — Cesar Mercado" },
      { name: "description", content: "Ocho competencias de comunicación que Cesar Mercado aplica al análisis de datos y a la presentación de hallazgos." },
      { property: "og:title", content: "Comunicación + Datos — Cesar Mercado" },
      { property: "og:description", content: "Cómo la comunicación social fortalece el análisis y la presentación de hallazgos." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => <SubpageShell><CommunicationData /></SubpageShell>,
});
