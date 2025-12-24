// src/components/radio/RadioField.tsx

interface RadioFieldProps {
  id: string;
  name: string;
  label: string;
  value: string;
  defaultChecked?: boolean;
}

export default function RadioField({
  id,
  name,
  label,
  value,
  defaultChecked = false,
}: RadioFieldProps) {
  return (
    <div className="flex items-center gap-3">
      <input
        id={id}
        name={name}
        type="radio"
        value={value}
        defaultChecked={defaultChecked}
        className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-(--color-primary-active) checked:bg-(--color-primary-active) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-primary-active) disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 dark:border-white/10 dark:bg-white/5 dark:checked:border-(--color-primary) dark:checked:bg-(--color-primary) dark:focus-visible:outline-(--color-primary) dark:disabled:border-white/5 dark:disabled:bg-white/10 dark:disabled:before:bg-white/20 forced-colors:appearance-auto forced-colors:before:hidden"
      />
      <label
        htmlFor={id}
        className="block text-sm/6 font-medium text-gray-900 dark:text-white">
        {label}
      </label>
    </div>
  );
}
