type Option = { value: string; label: string };

type Props = {
  label: string;
  name: string;
  value: string;
  options: Option[];
  hint?: string;
  onChange: (v: string) => void;
};

export function FormSelect({
  label,
  name,
  value,
  options,
  hint,
  onChange,
}: Props) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[11px] uppercase tracking-[0.18em] text-muted">
        {label}
      </span>
      <select
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-10 bg-surface border border-border px-3 text-sm text-foreground focus:outline-none focus:border-accent focus:bg-surface-2 transition-colors appearance-none cursor-pointer"
        style={{
          backgroundImage:
            "linear-gradient(45deg, transparent 50%, #8a8a92 50%), linear-gradient(135deg, #8a8a92 50%, transparent 50%)",
          backgroundPosition:
            "calc(100% - 14px) 16px, calc(100% - 9px) 16px",
          backgroundSize: "5px 5px, 5px 5px",
          backgroundRepeat: "no-repeat",
        }}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value} className="bg-surface">
            {o.label}
          </option>
        ))}
      </select>
      {hint ? (
        <span className="text-[11px] leading-snug text-muted">{hint}</span>
      ) : null}
    </label>
  );
}
