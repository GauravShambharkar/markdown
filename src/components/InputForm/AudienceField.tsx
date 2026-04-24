import { FormField } from "../FormField/FormField";
import { Chips } from "../Chips/Chips";
import { AUDIENCE_PRESETS } from "@/app/data/presets";

type Props = {
  value: string;
  onChange: (v: string) => void;
};

export function AudienceField({ value, onChange }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <FormField
        label="Audience"
        name="audience"
        value={value}
        placeholder="e.g. backend engineers new to Redis"
        hint="Who's reading this + what they already know. Tap a preset to start."
        onChange={onChange}
      />
      <Chips items={AUDIENCE_PRESETS} onPick={onChange} />
    </div>
  );
}
