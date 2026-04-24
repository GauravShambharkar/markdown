type Props = {
  loading: boolean;
  disabled?: boolean;
};

export function SubmitButton({ loading, disabled }: Props) {
  return (
    <button
      type="submit"
      disabled={disabled || loading}
      className="group relative h-11 bg-accent text-[#0a0a0a] px-5 text-sm font-semibold uppercase tracking-[0.14em] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-foreground transition-colors flex items-center justify-center gap-2"
    >
      {loading ? (
        <>
          <span className="h-2 w-2 bg-[#0a0a0a] animate-pulse" />
          <span>Forging</span>
        </>
      ) : (
        <>
          <span>Generate markdown</span>
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </>
      )}
    </button>
  );
}
