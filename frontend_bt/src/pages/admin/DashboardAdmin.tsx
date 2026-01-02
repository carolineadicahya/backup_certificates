import { useState } from "react";

/* ================= TYPES ================= */
type User = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "staff";
  status: "active" | "disabled";
  createdAt: string;
};

type Log = {
  id: string;
  time: string;
  user: string;
  action: string;
  target: string;
  ip: string;
  status: "success" | "failed";
};

/* ================= DUMMY DATA ================= */
const dummyUsers: User[] = [
  {
    id: "1",
    name: "Xara",
    email: "xara@system.com",
    role: "admin",
    status: "active",
    createdAt: "2025-01-01",
  },
  {
    id: "2",
    name: "Budi",
    email: "budi@system.com",
    role: "staff",
    status: "active",
    createdAt: "2025-01-02",
  },
  {
    id: "3",
    name: "Sinta",
    email: "sinta@system.com",
    role: "staff",
    status: "disabled",
    createdAt: "2025-01-02",
  },
];

const dummyLogs: Log[] = [
  {
    id: "1",
    time: "16:12",
    user: "Xara",
    action: "CREATE_USER",
    target: "budi@system.com",
    ip: "10.0.1.4",
    status: "success",
  },
  {
    id: "2",
    time: "16:10",
    user: "Budi",
    action: "LOGIN",
    target: "-",
    ip: "10.0.1.8",
    status: "failed",
  },
  {
    id: "3",
    time: "15:50",
    user: "Xara",
    action: "DISABLE_USER",
    target: "sinta@system.com",
    ip: "10.0.1.4",
    status: "success",
  },
];

/* ================= PAGE ================= */
export default function AdminDashboard() {
  const [users] = useState(dummyUsers);
  const [logs] = useState(dummyLogs);

  const failedLogins = logs.filter((l) => l.status === "failed").length;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 p-6 space-y-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      {/* ===== SUMMARY CARDS ===== */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <SummaryCard title="Users" value={users.length} />
        <SummaryCard title="New Today" value={1} />
        <SummaryCard title="Failed Logins" value={failedLogins} />
        <SummaryCard title="Total Logs" value={logs.length} />
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* USERS */}
        <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
          <h2 className="font-semibold mb-4">Users</h2>
          <table className="w-full text-sm b">
            <thead>
              <tr className="text-left border-b">
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} className="border-b last:border-0">
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.role}</td>
                  <td>
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        u.status === "active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}>
                      {u.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* LOGS */}
        <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
          <h2 className="font-semibold mb-4">Activity Logs</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b">
                <th>Time</th>
                <th>User</th>
                <th>Action</th>
                <th>IP</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((l) => (
                <tr key={l.id} className="border-b last:border-0">
                  <td>{l.time}</td>
                  <td>{l.user}</td>
                  <td>{l.action}</td>
                  <td>{l.ip}</td>
                  <td>{l.status === "success" ? "✅" : "❌"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ================= SMALL COMPONENT ================= */
function SummaryCard({ title, value }: { title: string; value: number }) {
  return (
    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
