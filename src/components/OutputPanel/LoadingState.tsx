export function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-3">
      <div className="flex gap-1.5">
        <span className="h-2 w-2 bg-accent animate-pulse" />
        <span className="h-2 w-2 bg-accent animate-pulse [animation-delay:150ms]" />
        <span className="h-2 w-2 bg-accent animate-pulse [animation-delay:300ms]" />
      </div>
      <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
        Composing markdown
      </p>
    </div>
  );
}
