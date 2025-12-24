// src/components/selects/SelectField.tsx
import { ChevronDownIcon } from "@heroicons/react/16/solid";

interface SelectFieldProps {
  label: string;
  id: string;
  options: string[];
}

export default function SelectField({ label, id, options }: SelectFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>

      <div className="relative mt-2">
        <select
          id={id}
          name={id}
          className="w-full appearance-none rounded-md bg-white py-1.5 pr-10 pl-3 text-base text-gray-900
            outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2
            focus:outline-(--color-primary) dark:bg-white/5 dark:text-white dark:outline-white/10">
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>

        <ChevronDownIcon className="absolute right-2 top-1/2 -translate-y-1/2 size-5 text-gray-500 dark:text-gray-400" />
      </div>
    </div>
  );
}
