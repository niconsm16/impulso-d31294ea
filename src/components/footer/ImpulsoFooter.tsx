export function ImpulsoFooter() {
  return (
    <footer className="border-t border-border/50 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-lg font-bold text-foreground tracking-tight">
            IMPULSO
          </span>
          <span className="text-xs text-muted-foreground font-mono">v1.0</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © 2026 Impulso. Inteligencia de mercado para marketplaces.
        </p>
      </div>
    </footer>
  );
}
