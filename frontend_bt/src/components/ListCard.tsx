import { ChevronRightIcon } from "@heroicons/react/24/outline";

type Employee = {
  id: string;
  name: string;
  role: string;
  location: string;
};

type Props = {
  data: Employee[];
  onSelect: (id: string) => void;
};

export default function EmployeeList({ data, onSelect }: Props) {
  const grouped = data.reduce((acc: any, curr) => {
    acc[curr.location] = acc[curr.location] || [];
    acc[curr.location].push(curr);
    return acc;
  }, {});

  return (
    <div className="space-y-10">
      {Object.keys(grouped).map((location) => (
        <div key={location} className="space-y-4">
          <h2 className="text-xl font-bold">{location}</h2>

          {grouped[location].map((p: Employee) => (
            <div
              key={p.id}
              onClick={() => onSelect(p.id)}
              className="flex items-center justify-between py-4 border-b cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 px-2 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border rounded-full flex items-center justify-center text-xl">
                  👤
                </div>
                <div>
                  <p className="font-semibold">{p.name}</p>
                  <p className="text-sm text-gray-500">{p.role}</p>
                </div>
              </div>

              <ChevronRightIcon className="w-6 h-6" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
