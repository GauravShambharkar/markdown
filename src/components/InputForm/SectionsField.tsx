import { FormField } from "../FormField/FormField";
import { Chips } from "../Chips/Chips";
import { SECTION_PRESETS } from "@/app/data/presets";

type Props = {
  value: string;
  docType: string;
  onChange: (v: string) => void;
};

function appendSection(current: string, section: string): string {
  const parts = current
    .split(",")
    .map((p) => p.trim())
    .filter(Boolean);
  if (parts.some((p) => p.toLowerCase() === section.toLowerCase())) {
    return current;
  }
  return parts.length ? `${parts.join(", ")}, ${section}` : section;
}

export function SectionsField({ value, docType, onChange }: Props) {
  const chips = SECTION_PRESETS[docType] || SECTION_PRESETS.readme;
  return (
    <div className="flex flex-col gap-2">
      <FormField
        label="Required sections"
        name="sections"
        value={value}
        placeholder="Overview, Installation, Usage, API"
        hint="Comma-separated list of H2 headings the doc should contain. Tap a suggestion to add it."
        onChange={onChange}
      />
      <Chips
        items={chips}
        onPick={(s) => onChange(appendSection(value, s))}
        prefix="+ "
      />
    </div>
  );
}
