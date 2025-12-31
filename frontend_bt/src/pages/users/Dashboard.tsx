import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

/* ================================
   TYPES
================================ */
type CertificateStatus = "valid" | "expiring" | "expired";

type Certificate = {
  id: string;
  name: string;
  type: "health" | "quarantine" | "origin";
  owner: string;
  issuedAt: string;
  expiredAt: string;
  fileUrl: string;
  status: CertificateStatus;
  createdAt: string;
};

/* ================================
   HELPERS
================================ */
function getStatus(expiredAt: string): CertificateStatus {
  const now = new Date();
  const exp = new Date(expiredAt);
  const diff = (exp.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);

  if (diff < 0) return "expired";
  if (diff <= 30) return "expiring";
  return "valid";
}

function getStats(certs: Certificate[]) {
  const now = new Date();

  const expiringSoon = certs.filter((c) => {
    const d = new Date(c.expiredAt);
    const diff = (d.getTime() - now.getTime()) / (1000 * 60 * 60 * 24);
    return diff > 0 && diff <= 30;
  });

  const byType = certs.reduce((acc, c) => {
    acc[c.type] = (acc[c.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return {
    total: certs.length,
    expired: certs.filter((c) => new Date(c.expiredAt) < now).length,
    expiring: expiringSoon.length,
    types: Object.keys(byType).length,
    expiringList: expiringSoon,
  };
}

function getChartData(certs: Certificate[]) {
  const statusCount = { valid: 0, expiring: 0, expired: 0 };
  const typeCount: Record<string, number> = {};

  certs.forEach((c) => {
    statusCount[c.status]++;
    typeCount[c.type] = (typeCount[c.type] || 0) + 1;
  });

  return {
    statusData: [
      { name: "Valid", value: statusCount.valid },
      { name: "Expiring", value: statusCount.expiring },
      { name: "Expired", value: statusCount.expired },
    ],
    typeData: Object.keys(typeCount).map((t) => ({
      name: t,
      total: typeCount[t],
    })),
  };
}

/* ================================
   DUMMY DATA
================================ */
const rawCertificates: Omit<Certificate, "status">[] = [
  {
    id: "1",
    name: "Health Certificate - Tuna",
    type: "health",
    owner: "PT Samudra",
    issuedAt: "2025-01-01",
    expiredAt: "2026-01-01",
    fileUrl: "#",
    createdAt: "2025-01-01",
  },
  {
    id: "2",
    name: "Quarantine - Shrimp",
    type: "quarantine",
    owner: "CV Laut Bersih",
    issuedAt: "2024-12-01",
    expiredAt: "2025-01-15",
    fileUrl: "#",
    createdAt: "2024-12-01",
  },
  {
    id: "3",
    name: "Origin Certificate - Crab",
    type: "origin",
    owner: "PT Biru Laut",
    issuedAt: "2024-08-01",
    expiredAt: "2024-12-01",
    fileUrl: "#",
    createdAt: "2024-08-01",
  },
];

/* ================================
   UI COMPONENTS
================================ */
const STATUS_COLORS = ["#22c55e", "#facc15", "#ef4444"];

function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: number;
  icon: string;
}) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow flex items-center gap-4">
      <div className="text-3xl">{icon}</div>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">
          {value}
        </p>
      </div>
    </div>
  );
}

function ExpiringAlert({ list }: { list: Certificate[] }) {
  if (!list.length) {
    return (
      <div className="bg-green-100 text-green-800 p-4 rounded-lg">
        ✅ All certificates are safe
      </div>
    );
  }

  return (
    <div className="bg-red-100 text-red-800 p-4 rounded-lg space-y-2">
      <p className="font-semibold">⚠ Certificates expiring soon</p>
      {list.map((c) => (
        <p key={c.id}>
          • {c.name} — {new Date(c.expiredAt).toLocaleDateString("id-ID")}
        </p>
      ))}
    </div>
  );
}

function RecentTable({ certs }: { certs: Certificate[] }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            <th className="p-4">Name</th>
            <th>Type</th>
            <th>Expiry</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {certs.slice(0, 5).map((c) => (
            <tr key={c.id} className="border-t dark:border-gray-700">
              <td className="p-4">{c.name}</td>
              <td className="capitalize">{c.type}</td>
              <td>{new Date(c.expiredAt).toLocaleDateString("id-ID")}</td>
              <td>
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    c.status === "valid"
                      ? "bg-green-200 text-green-800"
                      : c.status === "expiring"
                      ? "bg-yellow-200 text-yellow-800"
                      : "bg-red-200 text-red-800"
                  }`}>
                  {c.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ================================
   PAGE
================================ */
export default function Dashboard() {
  const navigate = useNavigate();
  const handleCreateCertif = (e: React.FormEvent) => {
    e.preventDefault();
    // simulasi login berhasil
    navigate("/users/certificate-type");
  };
  const certificates: Certificate[] = rawCertificates.map((c) => ({
    ...c,
    status: getStatus(c.expiredAt),
  }));

  const stats = useMemo(() => getStats(certificates), [certificates]);
  const chart = useMemo(() => getChartData(certificates), [certificates]);

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Certificate Dashboard
      </h1>

      <div className="flex flex-wrap gap-4 justify-end items-center">
        <button
          onClick={handleCreateCertif}
          className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
          + Buat Sertifikat
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard title="Total" value={stats.total} icon="📄" />
        <StatCard title="Expiring" value={stats.expiring} icon="⏳" />
        <StatCard title="Expired" value={stats.expired} icon="⚠️" />
        <StatCard title="Types" value={stats.types} icon="🗂️" />
      </div>

      {/* Alerts */}
      <ExpiringAlert list={stats.expiringList} />

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-4 text-gray-900 dark:text-white">
            Certificate Status
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={chart.statusData}
                dataKey="value"
                nameKey="name"
                outerRadius={90}
                label>
                {chart.statusData.map((_, i) => (
                  <Cell key={i} fill={STATUS_COLORS[i]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-4 text-gray-900 dark:text-white">
            Certificates by Type
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={chart.typeData}>
              <XAxis dataKey="name" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="total" fill="#6366f1" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent */}
      <RecentTable certs={certificates} />

      {/* Actions */}
      {/* <div className="flex flex-wrap gap-4">
        <button className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
          + Buat Sertifikat
        </button>
        <button className="px-6 py-3 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-white">
          View All
        </button>
        <button className="px-6 py-3 rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-white">
          Export Backup
        </button>
      </div> */}
    </div>
  );
}
