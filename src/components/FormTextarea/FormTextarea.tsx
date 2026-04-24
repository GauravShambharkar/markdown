type Props = {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  rows?: number;
  hint?: string;
  onChange: (v: string) => void;
};

export function FormTextarea({
  label,
  name,
  value,
  placeholder,
  rows = 4,
  hint,
  onChange,
}: Props) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[11px] uppercase tracking-[0.18em] text-muted">
        {label}
      </span>
      <textarea
        name={name}
        value={value}
        placeholder={placeholder}
        rows={rows}
        onChange={(e) => onChange(e.target.value)}
        className="bg-surface border border-border px-3 py-2 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent focus:bg-surface-2 transition-colors resize-none scrollbar-thin"
      />
      {hint ? (
        <span className="text-[11px] leading-snug text-muted">{hint}</span>
      ) : null}
    </label>
  );
}
