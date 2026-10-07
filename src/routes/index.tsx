import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "César Mercado — Analista de Datos Junior" },
      { name: "description", content: "Portafolio de César Mercado: Analista de Datos Junior que combina datos, negocio y comunicación. SQL, Python, Excel y Power BI." },
      { property: "og:title", content: "César Mercado — Analista de Datos Junior" },
      { property: "og:description", content: "Datos + negocio + comunicación. Proyectos de BI, A/B testing y análisis de clientes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NOTION = "https://grave-echinodon-95d.notion.site/Cesar-Mercado-Data-Analytics-BI-Portfolio-a8ad0ee5acfe823ea4b901fbad6d941e";

type Cat = "Todos" | "BI" | "Clientes" | "Experimentación";
const projects: { name: string; topic: string; cat: Exclude<Cat, "Todos">; tools: string[]; bars: number[]; code: string }[] = [
  { name: "RappiPlus", topic: "Ventas, rentabilidad y A/B Testing", cat: "Experimentación", tools: ["SQL", "Python", "Estadística"], bars: [40, 65, 50, 80, 70, 90], code: "01" },
  { name: "Andes Retail", topic: "Business Intelligence y análisis comercial", cat: "BI", tools: ["Power BI", "DAX", "Power Query"], bars: [55, 45, 75, 60, 85, 70], code: "02" },
  { name: "Andes Capital Real Estate", topic: "Ventas, clientes y cohortes", cat: "BI", tools: ["SQL", "Power BI", "Excel"], bars: [30, 50, 60, 55, 75, 80], code: "03" },
  { name: "ConnectaTel", topic: "Análisis de clientes", cat: "Clientes", tools: ["Python", "SQL"], bars: [70, 60, 45, 65, 50, 75], code: "04" },
  { name: "NovaRetail+", topic: "Análisis estadístico de clientes", cat: "Clientes", tools: ["Python", "Estadística"], bars: [45, 70, 55, 85, 60, 65], code: "05" },
  { name: "Experimentos A/B", topic: "Conversión y comportamiento de usuarios", cat: "Experimentación", tools: ["Python", "Estadística", "SQL"], bars: [50, 52, 48, 72, 74, 76], code: "06" },
];

const skills = [
  { group: "Consultar y preparar", items: ["SQL", "Python", "Excel", "Power Query"] },
  { group: "Analizar", items: ["Estadística", "A/B Testing", "Cohortes"] },
  { group: "Visualizar y comunicar", items: ["Power BI", "DAX", "Storytelling con datos"] },
];

function Bars({ values, delay = 0 }: { values: number[]; delay?: number }) {
  return (
    <div className="flex h-24 items-end gap-1.5">
      {values.map((v, i) => (
        <div key={i} className="bar-grow flex-1 rounded-t-sm bg-primary/80 transition-colors group-hover:bg-accent"
          style={{ height: `${v}%`, animationDelay: `${delay + i * 80}ms` }} />
      ))}
    </div>
  );
}

function Index() {
  const [cat, setCat] = useState<Cat>("Todos");
  const list = projects.filter((p) => cat === "Todos" || p.cat === cat);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#inicio" className="font-display text-lg font-bold">césar<span className="text-primary">.</span>data</a>
          <div className="hidden gap-7 text-sm text-muted-foreground md:flex">
            {[["sobre-mi", "Sobre mí"], ["proyectos", "Proyectos"], ["habilidades", "Habilidades"], ["contacto", "Contacto"]].map(([id, l]) => (
              <a key={id} href={`#${id}`} className="transition-colors hover:text-foreground">{l}</a>
            ))}
          </div>
          <a href="#contacto" className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90">Contactar</a>
        </nav>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="grid-bg absolute inset-0" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1.3fr_1fr] md:py-28">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" /> Abierto a oportunidades · Analista de Datos Junior
            </p>
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              César Mercado
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Comunicador Social y Periodista construyendo mi carrera en análisis de datos. Convierto datos en
              respuestas claras para el negocio.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 font-display text-xl font-semibold">
              <span className="rounded-lg bg-primary/15 px-3 py-1 text-primary">Datos</span>+
              <span className="rounded-lg bg-accent/15 px-3 py-1 text-accent">Negocio</span>+
              <span className="rounded-lg bg-chart-3/15 px-3 py-1 text-chart-3">Comunicación</span>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#proyectos" className="rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:-translate-y-0.5">Ver proyectos →</a>
              <a href={NOTION} target="_blank" rel="noreferrer" className="rounded-full border border-border px-6 py-3 font-medium transition hover:border-primary">Portafolio en Notion</a>
            </div>
          </div>
          <div className="self-center rounded-2xl border border-border bg-card p-6 shadow-2xl">
            <div className="mb-4 flex items-center justify-between font-mono text-xs text-muted-foreground">
              <span>perfil_cesar.sql</span><span className="text-primary">● live</span>
            </div>
            <pre className="mb-6 overflow-x-auto rounded-lg bg-muted p-4 font-mono text-xs leading-relaxed text-muted-foreground">
<span className="text-accent">SELECT</span> rol, enfoque{"\n"}<span className="text-accent">FROM</span> cesar_mercado{"\n"}<span className="text-accent">WHERE</span> nivel = <span className="text-primary">'junior'</span>;
            </pre>
            <div className="grid grid-cols-3 gap-3 text-center">
              {[["6", "proyectos"], ["7", "herramientas"], ["3", "áreas"]].map(([n, l]) => (
                <div key={l} className="rounded-lg border border-border p-3">
                  <div className="font-display text-2xl font-bold text-primary">{n}</div>
                  <div className="text-xs text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
            <div className="group mt-5"><Bars values={[35, 55, 45, 70, 60, 85, 75, 95]} delay={300} /></div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="sobre-mi" className="mx-auto max-w-6xl px-5 py-20">
        <p className="font-mono text-sm text-primary">01 / Sobre mí</p>
        <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Un perfil que conecta números con personas</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            ["Datos", "Formación práctica en SQL, Python, Excel, Power BI, DAX, Power Query y estadística.", "text-primary"],
            ["Negocio", "Experiencia en desarrollo organizacional, marketing, operaciones, ventas, inventarios y gestión de información.", "text-accent"],
            ["Comunicación", "Formación como Comunicador Social y Periodista: explico hallazgos de forma clara para quien toma decisiones.", "text-chart-3"],
          ].map(([t, d, c]) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/50">
              <h3 className={`font-display text-xl font-semibold ${c}`}>{t}</h3>
              <p className="mt-3 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="proyectos" className="border-y border-border bg-card/40">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-mono text-sm text-primary">02 / Proyectos</p>
              <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Casos de análisis y dashboards</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {(["Todos", "BI", "Clientes", "Experimentación"] as Cat[]).map((c) => (
                <button key={c} onClick={() => setCat(c)}
                  className={`rounded-full border px-4 py-1.5 text-sm transition ${cat === c ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:text-foreground"}`}>
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <a key={p.name} href={NOTION} target="_blank" rel="noreferrer"
                className="group flex flex-col rounded-2xl border border-border bg-background p-6 transition hover:-translate-y-1 hover:border-primary/60">
                <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
                  <span>#{p.code}</span><span className="rounded-full bg-muted px-2 py-0.5">{p.cat}</span>
                </div>
                <div className="my-6 rounded-lg bg-muted/60 p-4"><Bars values={p.bars} delay={i * 60} /></div>
                <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.topic}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tools.map((t) => <span key={t} className="rounded-md border border-border px-2 py-0.5 font-mono text-xs">{t}</span>)}
                </div>
                <span className="mt-6 text-sm font-medium text-primary">Ver caso →</span>
              </a>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">Las barras son ilustrativas; los detalles y resultados de cada caso están en el portafolio completo.</p>
        </div>
      </section>

      {/* Skills */}
      <section id="habilidades" className="mx-auto max-w-6xl px-5 py-20">
        <p className="font-mono text-sm text-primary">03 / Habilidades</p>
        <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Mi flujo de trabajo con datos</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {skills.map((s, i) => (
            <div key={s.group} className="relative rounded-2xl border border-border p-6">
              <span className="font-mono text-5xl font-bold text-muted">{i + 1}</span>
              <h3 className="mt-2 font-display text-lg font-semibold">{s.group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.items.map((t) => <span key={t} className="rounded-full bg-secondary px-3 py-1 text-sm">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="mx-auto max-w-6xl px-5 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 text-center md:p-16">
          <div className="grid-bg absolute inset-0 opacity-60" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold md:text-5xl">¿Hablamos de datos?</h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">Busco mi próxima oportunidad como Analista de Datos Junior.</p>
            <a href={NOTION} target="_blank" rel="noreferrer" className="mt-8 inline-block rounded-full bg-primary px-7 py-3 font-medium text-primary-foreground transition hover:-translate-y-0.5">Ver portafolio completo</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">© 2026 César Mercado · Analista de Datos Junior</footer>
    </div>
  );
}
