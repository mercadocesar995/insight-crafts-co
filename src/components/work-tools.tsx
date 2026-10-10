import { BarChart3, Database, Scissors, Sheet, type LucideIcon } from "lucide-react";
import { toolGroups } from "@/lib/work-tools";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = { database: Database, chart: BarChart3, excel: Sheet, cut: Scissors };

export function WorkTools() {
  return (
    <section id="herramientas" className="scroll-mt-24 border-y border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <p className="font-mono text-sm text-accent">05 / Herramientas</p>
        <h2 className="mt-2 font-display text-3xl font-bold">Mi caja de herramientas</h2>
        <div className="mt-10 space-y-9">
          {toolGroups.map((group) => (
            <div key={group.name}>
              <h3 className="mb-4 flex items-center gap-3 font-mono text-xs text-muted-foreground">
                <span className={cn("h-1.5 w-1.5 rounded-full", group.tone === "data" ? "bg-accent" : "bg-chart-3")} />{group.name}
              </h3>
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {group.tools.map((tool) => {
                  const Icon = icons[tool.symbol];
                  const image = "image" in tool ? tool.image : undefined;
                  return (
                    <li key={tool.name} className="flex min-h-24 flex-col items-center justify-center gap-3 rounded-lg border border-border bg-background px-3 py-4 transition-colors hover:border-accent/50">
                      <span aria-hidden="true" className={cn("flex h-8 w-8 items-center justify-center", group.tone === "data" ? "text-accent" : "text-chart-3")}>
                        {image ? <img src={image} alt="" loading="lazy" className="h-7 w-7 object-contain" /> : Icon ? <Icon className="h-7 w-7" /> : <span className={cn("font-display text-xl font-semibold", tool.symbol === "premiere" && "border border-current px-1 text-base")}>{tool.symbol === "canva" ? "C" : "Pr"}</span>}
                      </span>
                      <span className="text-center text-xs font-medium leading-snug">{tool.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}