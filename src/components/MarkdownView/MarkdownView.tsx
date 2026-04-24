import { CopyButton } from "../CopyButton/CopyButton";

type Props = {
  markdown: string;
  filename?: string;
};

export function MarkdownView({ markdown, filename = "output.md" }: Props) {
  return (
    <div className="flex flex-col h-full border border-border bg-surface">
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5 bg-surface-2">
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted">
          <span className="h-1.5 w-1.5 bg-accent" />
          <span>{filename}</span>
        </div>
        <CopyButton text={markdown} />
      </div>
      <pre className="flex-1 overflow-auto scrollbar-thin px-5 py-4 text-[13px] leading-[1.7] text-foreground whitespace-pre-wrap break-words font-mono">
        {markdown}
      </pre>
    </div>
  );
}
