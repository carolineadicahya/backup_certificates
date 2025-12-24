import Card from "../../components/Card";
import { ClipboardList } from "lucide-react";

const icons = {
  organoleptik: ClipboardList,
};
type FormKey = keyof typeof icons;

const FormTypes: { key: FormKey; label: string }[] = [
  { key: "organoleptik", label: "Formulir Organoleptik" },
];

export default function FormType() {
  return (
    <div className="flex flex-col items-center p-6 gap-6">
      <h1 className="text-sm font-semibold text-(--color-primary) mb-2 text-center opacity-90">
        Jenis Formulir
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-7 p-8 justify-items-center">
        {FormTypes.map((item) => {
          const Icon = icons[item.key];

          return (
            <Card key={item.key} className="min-h-[220px] w-full max-w-sm">
              <div className="flex flex-col items-center justify-center gap-7 p-6">
                <Icon className="size-16 text-gray-700 dark:text-gray-300" />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">
                  {item.label}
                </h2>
                <button
                  type="button"
                  className="w-full rounded-lg bg-(--color-primary) px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-(--color-primary-hover) dark:bg-(--color-primary) dark:hover:bg-(--color-primary-hover)">
                  Buat Formulir
                </button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
