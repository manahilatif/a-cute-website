"use client";

import { TextField } from "@/lib/templates";

interface TextEditorProps {
  fields: TextField[];
  values: Record<string, string>;
  onChange: (id: string, value: string) => void;
}

export default function TextEditor({
  fields,
  values,
  onChange,
}: TextEditorProps) {
  return (
    <div className="flex flex-col gap-5">
      {fields.map((field) => (
        <div key={field.id} className="flex flex-col gap-1.5">
          <label className="text-xs font-medium tracking-widest uppercase text-rose-DEFAULT">
            {field.label}
          </label>

          {field.type === "long" ? (
            <div className="relative">
              <textarea
                className="textarea-field"
                rows={5}
                placeholder={field.placeholder}
                maxLength={field.maxLength}
                value={values[field.id] ?? ""}
                onChange={(e) => onChange(field.id, e.target.value)}
              />
              {/* Character count */}
              <span className="absolute bottom-3 right-4 text-xs text-petal-300 pointer-events-none">
                {(values[field.id] ?? "").length}/{field.maxLength}
              </span>
            </div>
          ) : (
            <input
              type="text"
              className="input-field"
              placeholder={field.placeholder}
              maxLength={field.maxLength}
              value={values[field.id] ?? ""}
              onChange={(e) => onChange(field.id, e.target.value)}
            />
          )}
        </div>
      ))}
    </div>
  );
}