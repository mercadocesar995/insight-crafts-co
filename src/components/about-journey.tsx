import { useState } from "react";
import { ArrowDown, ArrowRight, BarChart3, BriefcaseBusiness, Check, ChevronDown, ChevronLeft, ChevronRight, GraduationCap, MapPin, MessageSquare, Sparkles, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { experiencesForSkill, journey, journeySkills, type JourneySkill, type JourneyStage } from "@/lib/professional-journey";
import { education } from "@/lib/work-tools";
import { cn } from "@/lib/utils";

const themeClasses = {
  operations: "text-primary bg-primary/10 border-primary/30",
  business: "text-accent bg-accent/10 border-accent/30",
  communication: "text-chart-3 bg-chart-3/10 border-chart-3/30",
  data: "text-primary bg-primary/10 border-primary/30",
};
const themeIcons = { operations: Utensils, business: BriefcaseBusiness, communication: MessageSquare, data: BarChart3 };

export function AboutJourney() {
  const [expanded, setExpanded] = useState(false);
  const [selectedId, setSelectedId] = useState("cuarta");
  const [skill, setSkill] = useState<JourneySkill>("Pensamiento analítico");
  const selectedIndex = journey.findIndex((stage) => stage.id === selectedId);
  const selected = journey[selectedIndex];
  if (!selected) return null;
  const evidence = experiencesForSkill(skill);
  const Icon = themeIcons[selected.theme];

  function selectStage(stage: JourneyStage) {
    setSelectedId(stage.id);
    if (window.matchMedia("(max-width: 1023px)").matches) {
      document.getElementById("journey-detail")?.scrollIntoView({ block: "start" });
    }
  }

  return (
    <section id="sobre-mi" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid gap-6 md:grid-cols-[1fr_1.1fr] md:items-end">
          <div>
            <p className="font-mono text-sm text-primary">01 / Acerca de mí</p>
            <h2 className="mt-3 font-display text-2xl font-bold leading-tight">Datos, negocio y una mirada comunicadora.</h2>
          </div>
          <div><p className="max-w-xl text-sm leading-relaxed text-muted-foreground">Mi formación en Comunicación Social y mi experiencia operativa aportan contexto y claridad a mi perfil de Analista de Datos Junior.</p>
            <Button variant="outline" aria-expanded={expanded} aria-controls="about-expanded" onClick={() => setExpanded((value) => !value)} className="mt-4 gap-2">
              {expanded ? "Cerrar acerca de mí" : "Acerca de mí"}<ChevronDown className={cn("h-4 w-4 transition-transform", expanded && "rotate-180")} />
            </Button>
          </div>
        </div>

        {expanded && <div id="about-expanded" className="journey-reveal">
        <div className="mt-8 flex items-center gap-5 border-t border-border pt-6">
          <img src={education.logo} alt="Escudo de la Universidad Distrital" loading="lazy" className="h-20 w-20 shrink-0 rounded-md object-contain" />
          <div><p className="font-mono text-xs text-chart-3">{education.status} · Formación profesional</p><h3 className="mt-2 text-sm font-semibold">{education.institution}</h3><p className="mt-1 text-sm text-muted-foreground">{education.degree}</p></div>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-3 border-y border-border py-5 font-display text-sm font-medium md:text-base">
          <span className="inline-flex items-center gap-2 text-primary"><Utensils className="h-4 w-4" /> Operaciones</span>
          <ArrowRight className="h-4 w-4 text-muted-foreground" />
          <span className="inline-flex items-center gap-2 text-accent"><BriefcaseBusiness className="h-4 w-4" /> Negocio</span>
          <span className="text-muted-foreground">+</span>
          <span className="inline-flex items-center gap-2 text-chart-3"><MessageSquare className="h-4 w-4" /> Comunicación</span>
          <ArrowRight className="h-4 w-4 text-muted-foreground" />
          <span className="inline-flex items-center gap-2 text-primary"><BarChart3 className="h-4 w-4" /> Datos</span>
        </div>

        <div className="mt-10 flex items-end justify-between gap-4">
          <div><p className="font-mono text-xs text-muted-foreground">2016 → ACTUALIDAD</p><h3 className="mt-2 font-display text-xl font-semibold">Mi ruta profesional</h3></div>
          <span className="font-mono text-xs text-muted-foreground">7 experiencias · 2 capítulos de formación</span>
        </div>

        <div className="mt-6 grid items-start gap-8 lg:grid-cols-[0.85fr_1.45fr]">
          <ol className="relative grid gap-1" aria-label="Ruta profesional">
            {journey.map((stage, index) => {
              const StageIcon = themeIcons[stage.theme];
              const active = selected.id === stage.id;
              return (
                <li key={stage.id} className={cn("relative", index === 7 && "mt-5 border-t border-border pt-5")}>
                  {index < 6 && <span aria-hidden="true" className="absolute bottom-0 left-[23px] top-12 w-px bg-border" />}
                  <Button variant="ghost" aria-pressed={active} aria-controls="journey-detail" onClick={() => selectStage(stage)}
                    className={cn("h-auto w-full justify-start gap-4 whitespace-normal rounded-lg px-2 py-3 text-left hover:bg-secondary hover:text-foreground", active && "bg-secondary")}>
                    <span className={cn("relative grid h-8 w-8 shrink-0 place-items-center rounded-full border", active ? themeClasses[stage.theme] : "border-border bg-background text-muted-foreground")}><StageIcon className="h-4 w-4" /></span>
                    <span className="min-w-0 flex-1"><span className={cn("block font-mono text-[10px] leading-relaxed", active ? "text-primary" : "text-muted-foreground")}>{stage.period}</span><span className="mt-1 block text-sm font-semibold leading-snug">{stage.company}</span><span className="mt-0.5 block text-xs font-normal text-muted-foreground">{stage.role}</span></span>
                    <ChevronRight className={cn("shrink-0", active ? "text-primary" : "text-muted-foreground")} />
                  </Button>
                </li>
              );
            })}
          </ol>

          <article id="journey-detail" aria-label="Detalle de la etapa" className="overflow-hidden rounded-lg border border-border bg-card lg:sticky lg:top-24">
            <div key={selected.id} className="journey-reveal">
              <div className="border-b border-border p-6 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className={cn("inline-flex items-center gap-2 rounded-md border px-2.5 py-1 font-mono text-xs", themeClasses[selected.theme])}><Icon className="h-3.5 w-3.5" /> {selected.kind}</span>
                  <span className="font-mono text-xs text-muted-foreground">{String(selectedIndex + 1).padStart(2, "0")} / 09</span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold leading-tight md:text-3xl">{selected.headline}</h3>
                <p className="mt-3 font-medium">{selected.company}</p>
                <p className="mt-1 text-sm text-muted-foreground">{selected.role}</p>
                <div className="mt-3 flex flex-wrap items-center gap-3 font-mono text-xs text-muted-foreground"><span>{selected.period}</span>{selected.location && <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" />{selected.location}</span>}</div>
              </div>
              <div className="grid gap-6 p-6 md:grid-cols-2 md:p-8" aria-live="polite">
                {[
                  { title: "El contexto", content: selected.context, icon: BriefcaseBusiness },
                  { title: "Lo que aprendí", content: selected.learning, icon: GraduationCap },
                  { title: "Mi conexión con los datos", content: selected.connection, icon: BarChart3 },
                  { title: "Lo que aporto hoy", content: selected.contribution, icon: Sparkles },
                ].map((block) => <div key={block.title}><h4 className="flex items-center gap-2 text-sm font-semibold"><block.icon className="h-4 w-4 shrink-0 text-accent" />{block.title}</h4><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{block.content}</p></div>)}
              </div>
              {selected.result && <div className="mx-6 mb-6 flex items-start gap-5 border-l-2 border-primary bg-primary/5 p-4 md:mx-8"><strong className="font-display text-3xl text-primary">{selected.result.value}%</strong><div><p className="text-sm font-semibold">{selected.result.text}</p><p className="mt-2 text-xs leading-relaxed text-muted-foreground">{selected.result.attribution}</p></div></div>}
              {selected.tools && <div className="mx-6 mb-6 flex flex-wrap gap-2 md:mx-8">{selected.tools.map((tool) => <span key={tool} className="rounded-md border border-border px-2 py-1 font-mono text-xs text-muted-foreground">{tool}</span>)}</div>}
              <div className="flex flex-wrap gap-2 border-t border-border px-6 py-4 md:px-8">{Object.keys(selected.skills).map((label) => <span key={label} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"><Check className="h-3 w-3 text-primary" />{label}</span>)}</div>
            </div>
            <div className="flex items-center justify-between border-t border-border p-4">
              <Button variant="ghost" size="sm" disabled={selectedIndex === 0} onClick={() => { const previous = journey[selectedIndex - 1]; if (previous) selectStage(previous); }}><ChevronLeft />Anterior</Button>
              <Button variant="ghost" size="sm" disabled={selectedIndex === journey.length - 1} onClick={() => { const next = journey[selectedIndex + 1]; if (next) selectStage(next); }}>Siguiente<ChevronRight /></Button>
            </div>
          </article>
        </div>

        <div className="mt-16 border-t border-border pt-10">
          <p className="font-mono text-xs text-accent">APRENDIZAJES QUE CONECTAN ETAPAS</p>
          <h3 className="mt-2 font-display text-2xl font-semibold">Las habilidades que construí en el camino</h3>
          <div className="mt-6 flex flex-wrap gap-2" aria-label="Habilidades de mi trayectoria">
            {journeySkills.map((item) => <Button key={item} variant={skill === item ? "default" : "outline"} aria-pressed={skill === item} aria-controls="skill-evidence" onClick={() => setSkill(item)} className="h-auto min-h-9 max-w-full whitespace-normal px-3 py-2 text-left text-xs">{item}</Button>)}
          </div>
          <div id="skill-evidence" className="mt-6" aria-live="polite">
            <div className="flex flex-wrap items-center gap-3"><h4 className="font-display text-lg font-semibold">{skill}</h4><span className="font-mono text-xs text-muted-foreground">{evidence.length} {evidence.length === 1 ? "etapa" : "etapas"}</span></div>
            <div className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">{evidence.map((stage) => <div key={stage.id} className="border-l border-accent/40 py-3 pl-4"><Button variant="link" onClick={() => { selectStage(stage); document.getElementById("journey-detail")?.scrollIntoView({ block: "start" }); }} className="h-auto justify-start whitespace-normal p-0 text-left text-sm">{stage.company}<ArrowRight /></Button><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{stage.skills[skill]}</p></div>)}</div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 border-y border-border py-10 md:grid-cols-[1fr_1.2fr]">
          <div><p className="font-mono text-xs text-primary">DE LAS OPERACIONES A LOS DATOS</p><h3 className="mt-3 font-display text-2xl font-semibold">Las preguntas estaban ahí.<br />Hoy sumo nuevas herramientas.</h3></div>
          <div><p className="leading-relaxed text-muted-foreground">Inventarios, productos, clientes, tiempos, costos y procesos: mi trayectoria me acercó a información que sostiene las decisiones del negocio. No abandono esa experiencia; la integro con herramientas analíticas para comprenderla mejor.</p><p className="mt-4 flex items-center gap-2 text-sm text-primary"><ArrowDown className="h-4 w-4" /> Del registro operativo al hallazgo útil.</p></div>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            { title: "Datos", icon: BarChart3, color: "text-primary", text: "Analizar, validar e identificar patrones. Mi formación y mis proyectos me ayudan a convertir preguntas en análisis." },
            { title: "Negocio", icon: BriefcaseBusiness, color: "text-accent", text: "Comprender procesos, necesidades y objetivos. La experiencia operativa aporta contexto a cada indicador." },
            { title: "Comunicación", icon: MessageSquare, color: "text-chart-3", text: "Explicar hallazgos y facilitar su comprensión. Mi formación organizacional y audiovisual aporta creatividad, síntesis y storytelling." },
          ].map((item) => <div key={item.title}><item.icon className={cn("h-6 w-6", item.color)} /><h3 className={cn("mt-4 font-display text-xl font-semibold", item.color)}>{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p></div>)}
        </div>

        <div className="mt-12 border-l-2 border-primary pl-6">
          <p className="font-mono text-xs text-primary">MI PRESENTE Y LO QUE SIGUE</p>
          <p className="mt-3 max-w-3xl font-display text-xl font-medium leading-relaxed">Combino pensamiento analítico, comprensión operativa del negocio y habilidades de comunicación para transformar información en hallazgos claros y útiles para la toma de decisiones.</p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">Sigo desarrollándome como Analista de Datos Junior, con interés en aprender y aportar a equipos que conecten información con decisiones.</p>
          <Button asChild variant="link" className="mt-4 h-auto p-0"><a href="#proyectos">Mi siguiente capítulo: los proyectos<ArrowRight /></a></Button>
        </div>
        </div>}
      </div>
    </section>
  );
}