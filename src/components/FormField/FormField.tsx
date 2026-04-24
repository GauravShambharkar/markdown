type Props = {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  required?: boolean;
  hint?: string;
  onChange: (v: string) => void;
};

export function FormField({
  label,
  name,
  value,
  placeholder,
  required,
  hint,
  onChange,
}: Props) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[11px] uppercase tracking-[0.18em] text-muted">
        {label}
        {required ? <span className="text-accent"> *</span> : null}
      </span>
      <input
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="h-10 bg-surface border border-border px-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent focus:bg-surface-2 transition-colors"
      />
      {hint ? (
        <span className="text-[11px] leading-snug text-muted">{hint}</span>
      ) : null}
    </label>
  );
}
