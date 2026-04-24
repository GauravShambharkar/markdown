"use client";

import { useState } from "react";
import { InputForm, FormState } from "../InputForm/InputForm";
import { OutputPanel } from "../OutputPanel/OutputPanel";

const INITIAL: FormState = {
  topic: "",
  docType: "readme",
  audience: "",
  tone: "technical",
  length: "medium",
  sections: "",
  notes: "",
};

export function MarkdownGenerator() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function onChange<K extends keyof FormState>(key: K, v: FormState[K]) {
    setForm((f) => ({ ...f, [key]: v }));
  }

  async function onSubmit() {
    setLoading(true);
    setError(null);
    setMarkdown("");
    try {
      const res = await fetch("/api/md/v1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Request failed");
      setMarkdown(data.markdown || "");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] gap-4 h-full min-h-0">
      <InputForm
        value={form}
        loading={loading}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <OutputPanel markdown={markdown} loading={loading} error={error} />
    </div>
  );
}
