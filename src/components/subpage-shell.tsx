import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

function BackButton() {
  return (
    <Button asChild variant="outline" className="gap-2 rounded-full">
      <Link to="/" hash="inicio"><ArrowLeft className="h-4 w-4" /> Volver al portafolio</Link>
    </Button>
  );
}

export function SubpageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <Link to="/" className="font-display text-lg font-bold">cesar<span className="text-primary">.</span>data</Link>
          <BackButton />
        </div>
      </header>
      <main>{children}</main>
      <div className="mx-auto flex max-w-6xl justify-center px-5 pb-20 pt-6"><BackButton /></div>
    </div>
  );
}
