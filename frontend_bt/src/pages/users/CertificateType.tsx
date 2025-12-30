import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import { Fish, PawPrint, Sprout } from "lucide-react";

const icons = {
  KI: Fish,
  KH: PawPrint,
  KT: Sprout,
};
type CertificateKey = keyof typeof icons;

const certificateTypes: { key: CertificateKey; label: string }[] = [
  { key: "KI", label: "Karantina Ikan" },
  { key: "KH", label: "Karantina Hewan" },
  { key: "KT", label: "Karantina Tumbuhan" },
];

export default function CertificateType() {
  const navigate = useNavigate();

  return (
    // <div className="bg-[url(/src/assets/nisa.jpg)] ...">
    <div className="flex flex-col items-center p-6 gap-3">
      <h1 className="text-sm font-semibold text-(--color-primary) mb-2 text-center opacity-90">
        Jenis Sertifikat
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-8">
        {certificateTypes.map((item) => {
          const Icon = icons[item.key];

          return (
            <Card key={item.key} className="min-h-[220px]">
              <div className="flex flex-col items-center justify-center gap-3 p-4">
                <Icon className="size-16 text-gray-700 dark:text-gray-300" />
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white text-center">
                  {item.label}
                </h2>
                <button
                  type="button"
                  onClick={() =>
                    navigate("/users/form", {
                      state: { category: item.key },
                    })
                  }
                  className="w-full rounded-md bg-(--color-primary) px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-(--color-primary-hover) dark:bg-(--color-primary) dark:hover:bg-(--color-primary-hover)">
                  Buat Sertif
                </button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
    // </div>
  );
}
