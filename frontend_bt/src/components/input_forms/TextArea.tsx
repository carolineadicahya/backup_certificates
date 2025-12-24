// src/components/inputs/TextArea.tsx
interface TextAreaProps {
  label: string;
  id: string;
  rows?: number;
  placeholder?: string;
}

export default function TextArea({
  label,
  id,
  rows = 3,
  placeholder,
}: TextAreaProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>

      <textarea
        id={id}
        name={id}
        rows={rows}
        placeholder={placeholder}
        className="mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900
          outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400
          focus:outline-2 focus:-outline-offset-2 focus:outline-(--color-primary)
          dark:bg-white/5 dark:text-white dark:outline-white/10
          dark:placeholder:text-gray-500 dark:focus:outline-(--color-primary)"></textarea>
    </div>
  );
}
