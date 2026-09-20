import React from "react";

interface BaseFieldProps {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  className?: string;
}

interface InputFieldProps extends BaseFieldProps {
  type?: "text" | "email" | "tel" | "date";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

interface SelectFieldProps extends BaseFieldProps {
  type: "select";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { label: string; value: string }[];
  placeholder?: string;
}

interface TextareaFieldProps extends BaseFieldProps {
  type: "textarea";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
}

export type FormFieldProps = InputFieldProps | SelectFieldProps | TextareaFieldProps;

export function FormField(props: FormFieldProps) {
  const { id, label, error, required, className = "" } = props;
  const errorId = `${id}-error`;

  return (
    <div className={`relative flex flex-col items-start w-full ${className}`}>
      <label
        htmlFor={id}
        className="font-mono text-[11px] uppercase tracking-[0.2em] text-espresso-muted mb-2 font-medium flex items-center gap-1"
      >
        <span>{label}</span>
        {required && <span className="text-gold-subtle text-xs" aria-hidden="true">*</span>}
      </label>

      {props.type === "select" ? (
        <select
          id={id}
          value={props.value}
          onChange={props.onChange}
          aria-required={required}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className="w-full bg-transparent border-b border-[#2C2523]/20 py-3 text-base sm:text-sm text-espresso-primary font-sans focus:outline-none focus:border-gold-subtle transition-colors duration-300 rounded-none cursor-pointer"
        >
          {props.placeholder && (
            <option value="" disabled className="text-espresso-muted bg-[#FAF8F5]">
              {props.placeholder}
            </option>
          )}
          {props.options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-[#FAF8F5] text-espresso-primary py-2">
              {opt.label}
            </option>
          ))}
        </select>
      ) : props.type === "textarea" ? (
        <textarea
          id={id}
          rows={props.rows || 4}
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
          aria-required={required}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className="w-full bg-transparent border-b border-[#2C2523]/20 py-3 text-base sm:text-sm text-espresso-primary font-sans placeholder:text-espresso-muted/40 focus:outline-none focus:border-gold-subtle transition-colors duration-300 resize-none rounded-none"
        />
      ) : (
        <input
          id={id}
          type={props.type || "text"}
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
          aria-required={required}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className="w-full bg-transparent border-b border-[#2C2523]/20 py-3 text-base sm:text-sm text-espresso-primary font-sans placeholder:text-espresso-muted/40 focus:outline-none focus:border-gold-subtle transition-colors duration-300 rounded-none"
        />
      )}

      {/* Human-readable Error State */}
      {error && (
        <span
          id={errorId}
          role="alert"
          className="font-sans text-xs text-[#A63A2B] mt-1.5 transition-opacity duration-200"
        >
          {error}
        </span>
      )}
    </div>
  );
}
