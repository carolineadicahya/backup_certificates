// src/components/checkbox/CheckboxField.tsx

interface CheckboxFieldProps {
  id: string;
  label: string;
  description?: string;
  defaultChecked?: boolean;
}

export default function CheckboxField({
  id,
  label,
  description,
  defaultChecked = false,
}: CheckboxFieldProps) {
  return (
    <div className="flex gap-3">
      <div className="flex h-6 shrink-0 items-center">
        <div className="group grid size-4 grid-cols-1">
          <input
            defaultChecked={defaultChecked}
            id={id}
            name={id}
            type="checkbox"
            className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-(--status-success) checked:bg-(--status-success) indeterminate:border-(--status-success) indeterminate:bg-(--status-success) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--status-success) disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 dark:border-white/10 dark:bg-white/5 dark:checked:border-(--status-success) dark:checked:bg-(--status-success) dark:indeterminate:border-(--status-success) dark:indeterminate:bg-(--status-success) dark:focus-visible:outline-(--status-success) dark:disabled:border-white/5 dark:disabled:bg-white/10 dark:disabled:checked:bg-white/10 forced-colors:appearance-auto"
          />
          <svg
            fill="none"
            viewBox="0 0 14 14"
            className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25 dark:group-has-disabled:stroke-white/25">
            <path
              d="M3 8L6 11L11 3.5"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-0 group-has-checked:opacity-100"
            />
            <path
              d="M3 7H11"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-0 group-has-indeterminate:opacity-100"
            />
          </svg>
        </div>
      </div>

      <div className="text-sm">
        <label
          htmlFor={id}
          className="font-medium text-gray-900 dark:text-white">
          {label}
        </label>
        {description && (
          <p className="text-gray-500 dark:text-gray-400">{description}</p>
        )}
      </div>
    </div>
  );
}
