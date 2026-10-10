import { useState } from "react";
import {
  Camera,
  ChevronDown,
  Film,
  Handshake,
  Layers,
  Lightbulb,
  MessageSquare,
  Search,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { competencies, dimensions } from "@/lib/communication-competencies";
import { cn } from "@/lib/utils";

const competencyIcons: Record<string, LucideIcon> = {
  critica: Search,
  clara: MessageSquare,
  sintesis: Layers,
  narrativa: Film,
  audiencias: Users,
  creatividad: Lightbulb,
  equipo: Handshake,
  audiovisual: Camera,
};

const dimensionTone = {
  datos: "border-primary/30 text-primary",
  negocio: "border-accent/30 text-accent",
  comunicacion: "border-chart-3/30 text-chart-3",
};

export function CommunicationData() {
  const [expanded, setExpanded] = useState(false);
  const first = competencies[0];
  const [activeId, setActiveId] = useState(first?.id ?? "");
  const active = competencies.find((item) => item.id === activeId) ?? first;
  if (!active) return null;

  return (
    <section id="comunicacion" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <Collapsible open={expanded} onOpenChange={setExpanded}>
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div>
              <p className="font-mono text-sm text-chart-3">04 / Comunicación + Datos</p>
              <h2 className="mt-3 font-display text-2xl font-bold leading-tight">Analizar también es saber comunicar.</h2>
            </div>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="gap-3">
                {expanded ? "Cerrar Comunicación + Datos" : "Explorar Comunicación + Datos"}
                <ChevronDown className={cn("transition-transform", expanded && "rotate-180")} />
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="journey-reveal">
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {dimensions.map((dimension) => (
            <div key={dimension.id} className={cn("rounded-2xl border bg-card p-5", dimensionTone[dimension.id])}>
              <p className="font-display text-lg font-semibold">{dimension.label}</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-muted-foreground">{dimension.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{dimension.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h3 className="font-display text-xl font-semibold">
              Ocho competencias de comunicación que uso en el análisis
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Son habilidades que desarrollé en Comunicación Social y Periodismo. Elige una para ver qué significa en mi
              perfil, de dónde viene y cómo se aplica a un proyecto de datos.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 lg:flex-col lg:items-stretch" aria-label="Competencias de comunicación">
              {competencies.map((item) => {
                const Icon = competencyIcons[item.id] ?? MessageSquare;
                const selected = item.id === active.id;
                return (
                  <Button
                    key={item.id}
                    variant="ghost"
                    aria-pressed={selected}
                    aria-controls="competencia-detalle"
                    onClick={() => setActiveId(item.id)}
                    className={cn(
                      "h-auto w-full justify-start gap-3 whitespace-normal rounded-lg px-3 py-2.5 text-left hover:bg-secondary hover:text-foreground",
                      selected && "bg-secondary text-foreground hover:bg-secondary",
                    )}
                  >
                    <Icon className={cn("h-4 w-4 shrink-0", selected ? "text-chart-3" : "text-muted-foreground")} />
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold leading-snug">{item.name}</span>
                      <span className="mt-0.5 block text-xs font-normal text-muted-foreground">{item.short}</span>
                    </span>
                  </Button>
                );
              })}
            </div>
          </div>

          <article
            id="competencia-detalle"
            aria-label="Detalle de la competencia"
            className="overflow-hidden rounded-2xl border border-border bg-card lg:sticky lg:top-24"
          >
            <div key={active.id} className="journey-reveal">
              <div className="border-b border-border p-6">
                <p className="font-mono text-xs text-chart-3">CÓMO SE TRADUCE EN EL TRABAJO</p>
                <h4 className="mt-2 font-display text-2xl font-bold leading-tight">{active.name}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{active.short}</p>
              </div>
              <div className="grid gap-6 p-6 md:grid-cols-2" aria-live="polite">
                {[
                  { title: "Qué significa en mi perfil", text: active.meaning },
                  { title: "De dónde viene", text: active.origin },
                  { title: "Cómo se aplica a un proyecto de datos", text: active.application },
                  { title: "Qué valor aporta a un equipo", text: active.teamValue },
                ].map((block) => (
                  <div key={block.title}>
                    <h5 className="font-display text-sm font-semibold text-chart-3">{block.title}</h5>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{block.text}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-3 border-t border-border px-6 py-4 text-xs">
                <span className="font-mono text-muted-foreground">DONDE LO PUEDO VER EN ESTE PORTAFOLIO</span>
                <span className="rounded-md border border-border px-2 py-1 font-mono text-primary">{active.project}</span>
              </div>
            </div>
          </article>
        </div>


        <p className="mt-12 max-w-3xl border-l-2 border-chart-3/50 pl-5 text-xs leading-relaxed text-muted-foreground">
          La mayoría de estas competencias vienen de mi formación en Comunicación Social y Periodismo (Universidad
          Distrital Francisco José de Caldas) y de proyectos propios. Las mantengo separadas de mi experiencia laboral y
          de los proyectos de análisis publicados en esta página.
        </p>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  );
}
