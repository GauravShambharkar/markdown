import { FormField } from "../FormField/FormField";
import { FormTextarea } from "../FormTextarea/FormTextarea";
import { FormSelect } from "../FormSelect/FormSelect";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import { AudienceField } from "./AudienceField";
import { SectionsField } from "./SectionsField";
import { DOC_TYPES, TONES, LENGTHS } from "@/app/data/formOptions";

export type FormState = {
  topic: string;
  docType: string;
  audience: string;
  tone: string;
  length: string;
  sections: string;
  notes: string;
};

type Props = {
  value: FormState;
  loading: boolean;
  onChange: <K extends keyof FormState>(key: K, v: FormState[K]) => void;
  onSubmit: () => void;
};

export function InputForm({ value, loading, onChange, onSubmit }: Props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="flex flex-col gap-4 border border-border bg-surface p-5 h-full overflow-auto scrollbar-thin"
    >
      <FormField
        label="Topic / title"
        name="topic"
        value={value.topic}
        required
        placeholder="e.g. Getting started with Redis Streams"
        hint="One clear line. This becomes the H1 of your document."
        onChange={(v) => onChange("topic", v)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormSelect
          label="Document type"
          name="docType"
          value={value.docType}
          options={DOC_TYPES}
          onChange={(v) => onChange("docType", v)}
        />
        <FormSelect
          label="Tone"
          name="tone"
          value={value.tone}
          options={TONES}
          onChange={(v) => onChange("tone", v)}
        />
      </div>
      <AudienceField
        value={value.audience}
        onChange={(v) => onChange("audience", v)}
      />
      <FormSelect
        label="Length"
        name="length"
        value={value.length}
        options={LENGTHS}
        onChange={(v) => onChange("length", v)}
      />
      <SectionsField
        value={value.sections}
        docType={value.docType}
        onChange={(v) => onChange("sections", v)}
      />
      <FormTextarea
        label="Notes & requirements"
        name="notes"
        value={value.notes}
        rows={4}
        placeholder="Include runnable code examples. Skip marketing language. Link to docs."
        hint="Free-form context: constraints, examples, style cues, things to avoid."
        onChange={(v) => onChange("notes", v)}
      />
      <div className="pt-1">
        <SubmitButton loading={loading} disabled={!value.topic.trim()} />
      </div>
    </form>
  );
}
