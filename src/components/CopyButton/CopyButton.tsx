"use client";

import { useState } from "react";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function handle() {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handle}
      className="h-8 px-3 border border-border-strong bg-surface text-[11px] uppercase tracking-[0.18em] text-foreground hover:border-accent hover:text-accent transition-colors flex items-center gap-2"
    >
      <span
        className={`h-1.5 w-1.5 ${copied ? "bg-accent" : "bg-muted"}`}
      />
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
