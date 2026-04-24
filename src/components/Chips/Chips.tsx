type Props = {
  items: string[];
  onPick: (v: string) => void;
  prefix?: string;
};

export function Chips({ items, onPick, prefix = "" }: Props) {
  if (!items.length) return null;
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => onPick(item)}
          className="h-7 border border-border bg-surface-2 px-2.5 text-[11px] text-muted hover:text-foreground hover:border-accent transition-colors"
        >
          {prefix}
          {item}
        </button>
      ))}
    </div>
  );
}
