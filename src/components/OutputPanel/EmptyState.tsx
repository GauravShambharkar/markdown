export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-6 gap-3">
      <div className="h-8 w-8 border border-border-strong flex items-center justify-center text-muted">
        ↳
      </div>
      <p className="text-sm text-muted max-w-xs">
        Your generated markdown will render here. Fill the form and hit
        generate.
      </p>
    </div>
  );
}
