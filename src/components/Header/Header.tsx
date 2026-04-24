export function Header() {
  return (
    <header className="border-b border-border bg-surface/60 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center bg-accent text-[#0a0a0a] font-bold">
            M
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight">
              MD FORGE
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-muted">
              markdown · context-aware
            </span>
          </div>
        </div>
        <span className="hidden sm:inline text-[11px] uppercase tracking-[0.18em] text-muted">
          powered by groq
        </span>
      </div>
    </header>
  );
}
