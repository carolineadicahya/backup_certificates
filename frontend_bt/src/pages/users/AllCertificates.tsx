// import { useEffect, useState } from "react";

// interface Certificate {
//   id: number;
//   certificate_type: string;
//   product_name: string;
//   file_url: string;
//   status: "pending" | "approved" | "rejected";
//   created_at: string;
// }

// export default function AllCertificates() {
//   const dummyCertificates: Certificate[] = [
//     {
//       id: 1,
//       certificate_type: "health",
//       product_name: "Ikan Tuna",
//       file_url: "/files/tuna-health.pdf",
//       status: "pending",
//       created_at: "2025-01-02",
//     },
//     {
//       id: 2,
//       certificate_type: "quarantine",
//       product_name: "Udang Vaname",
//       file_url: "/files/udang-quarantine.jpg",
//       status: "approved",
//       created_at: "2025-01-03",
//     },
//     {
//       id: 3,
//       certificate_type: "health",
//       product_name: "Cumi-Cumi",
//       file_url: "/files/cumi-health.pdf",
//       status: "rejected",
//       created_at: "2025-01-01",
//     },
//   ];

//   const [data, setData] = useState<Certificate[]>([]);
//   const [statusFilter, setStatusFilter] = useState<
//     "all" | "pending" | "approved" | "rejected"
//   >("all");
//   const [typeFilter, setTypeFilter] = useState<"all" | "health" | "quarantine">(
//     "all"
//   );

//   useEffect(() => {
//     setTimeout(() => {
//       setData(dummyCertificates);
//     }, 400);
//   }, []);

//   const filteredData = data.filter((item) => {
//     const statusMatch = statusFilter === "all" || item.status === statusFilter;
//     const typeMatch =
//       typeFilter === "all" || item.certificate_type === typeFilter;

//     return statusMatch && typeMatch;
//   });

//   const statusStyle = (status: string) => {
//     if (status === "approved")
//       return "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400";
//     if (status === "rejected")
//       return "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400";
//     return "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400";
//   };

//   return (
// <div className="min-h-screen px-4 sm:px-6 lg:px-10 py-8 bg-gray-100 dark:bg-gray-950 transition-colors">
//   {/* Header */}
//   <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
//     <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
//       Sertifikat
//     </h1>

//         {/* Filters */}
//         <div className="flex flex-col sm:flex-row gap-4">
//           {/* Type Filter */}
//           <select
//             value={typeFilter}
//             onChange={(e) => setTypeFilter(e.target.value as any)}
//             className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white rounded-lg px-4 py-2">
//             <option value="all">All Types</option>
//             <option value="health">Health</option>
//             <option value="quarantine">Quarantine</option>
//           </select>

//           {/* Status Filter */}
//           <select
//             value={statusFilter}
//             onChange={(e) => setStatusFilter(e.target.value as any)}
//             className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white rounded-lg px-4 py-2">
//             <option value="all">All Status</option>
//             <option value="pending">Pending</option>
//             <option value="approved">Approved</option>
//             <option value="rejected">Rejected</option>
//           </select>
//         </div>
//       </div>

//       {/* Grid */}
//   <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
//     {filteredData.map((cert) => (
//       <div
//         key={cert.id}
//         className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
//         <div className="flex justify-between items-start">
//           <div>
//             <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
//               {cert.product_name}
//             </h2>
//             <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
//               {cert.certificate_type} certificate
//             </p>
//           </div>

//           <span
//             className={`px-3 py-1 text-xs rounded-full font-medium ${statusStyle(
//               cert.status
//             )}`}>
//             {cert.status.toUpperCase()}
//           </span>
//         </div>

//         <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
//           Uploaded: {new Date(cert.created_at).toLocaleDateString()}
//         </p>

//         <div className="flex gap-3 mt-6">
//           <a
//             href={cert.file_url}
//             target="_blank"
//             className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm sm:text-base">
//             View
//           </a>

//           <a
//             href={cert.file_url}
//             download
//             className="flex-1 text-center bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-800 text-gray-800 dark:text-white py-2 rounded-lg text-sm sm:text-base">
//             Download
//           </a>
//         </div>
//       </div>
//     ))}
//   </div>

//   {filteredData.length === 0 && (
//     <p className="text-gray-500 dark:text-gray-400 mt-20 text-center">
//       No certificates found
//     </p>
//   )}
// </div>
//   );
// }

import { useMemo, useState } from "react";

type CertificateType = "health" | "quarantine";
type CertificateStatus = "pending" | "approved" | "rejected";

interface CertificateFile {
  id: number;
  name: string;
  product_name: string;
  certificate_type: CertificateType;
  status: CertificateStatus;
  file_url: string;
  submitted_at: string;
  created_at: string;
}

/* ================= Dummy Data ================= */
const dummyCertificates: CertificateFile[] = [
  {
    id: 1,
    name: "Health Certificate - Tuna",
    product_name: "Tuna",
    certificate_type: "health",
    status: "approved",
    file_url: "#",
    submitted_at: "2025-01-01",
    created_at: "2025-01-01",
  },
  {
    id: 2,
    name: "Quarantine Certificate - Salmon",
    product_name: "Salmon",
    certificate_type: "quarantine",
    status: "pending",
    file_url: "#",
    submitted_at: "2025-01-03",
    created_at: "2025-01-03",
  },
  {
    id: 3,
    name: "Health Certificate - Shrimp",
    product_name: "Shrimp",
    certificate_type: "health",
    status: "rejected",
    file_url: "#",
    submitted_at: "2025-01-05",
    created_at: "2025-01-05",
  },
];

export default function AllCertificates() {
  /* ================= Filter State ================= */
  const [showFilter, setShowFilter] = useState(false);

  const [typeFilter, setTypeFilter] = useState<
    Record<CertificateType, boolean>
  >({
    health: true,
    quarantine: true,
  });

  const [statusFilter, setStatusFilter] = useState<
    Record<CertificateStatus, boolean>
  >({
    pending: true,
    approved: true,
    rejected: true,
  });

  /* ================= Filtering Logic ================= */
  const filteredData = useMemo(() => {
    return dummyCertificates.filter(
      (item) => typeFilter[item.certificate_type] && statusFilter[item.status]
    );
  }, [typeFilter, statusFilter]);

  const statusStyle = (status: string) => {
    if (status === "approved")
      return "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400";
    if (status === "rejected")
      return "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400";
    return "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400";
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-10 py-8 dark:transition-colors">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
          Sertifikat
        </h1>

        <button
          onClick={() => setShowFilter(true)}
          className="px-4 py-2 rounded-lg border bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700">
          ☰ Filter
        </button>
      </div>

      {/* ================= Certificate List ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredData.map((cert) => (
          <div
            key={cert.id}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                  {cert.product_name}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                  {cert.certificate_type} certificate
                </p>
              </div>

              <span
                className={`px-3 py-1 text-xs rounded-full font-medium ${statusStyle(
                  cert.status
                )}`}>
                {cert.status.toUpperCase()}
              </span>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
              Uploaded: {new Date(cert.created_at).toLocaleDateString()}
            </p>

            <div className="flex gap-3 mt-6">
              <a
                href={cert.file_url}
                target="_blank"
                className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm sm:text-base">
                View
              </a>

              <a
                href={cert.file_url}
                download
                className="flex-1 text-center bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-800 text-gray-800 dark:text-white py-2 rounded-lg text-sm sm:text-base">
                Download
              </a>
            </div>
          </div>
        ))}
      </div>

      {filteredData.length === 0 && (
        <p className="text-gray-500 dark:text-gray-400 mt-20 text-center">
          Tidak ada Sertifikat yang ditemukan 🗃️
        </p>
      )}

      {/* ================= Filter Drawer ================= */}
      <div
        className={`fixed inset-0 z-50 transition ${
          showFilter ? "pointer-events-auto" : "pointer-events-none"
        }`}>
        {/* Overlay */}
        <div
          onClick={() => setShowFilter(false)}
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            showFilter ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-xl p-6 transform transition-transform duration-300 ${
            showFilter ? "translate-x-0" : "translate-x-full"
          }`}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Filters
            </h2>
            <button onClick={() => setShowFilter(false)}>✕</button>
          </div>

          {/* Certificate Type */}
          <div className="mb-6">
            <p className="font-semibold mb-2 text-gray-800 dark:text-gray-200">
              Certificate Type
            </p>

            {(["health", "quarantine"] as CertificateType[]).map((type) => (
              <label
                key={type}
                className="flex items-center gap-2 mb-2 text-gray-700 dark:text-gray-300">
                <input
                  type="checkbox"
                  checked={typeFilter[type]}
                  onChange={() =>
                    setTypeFilter((prev) => ({
                      ...prev,
                      [type]: !prev[type],
                    }))
                  }
                />
                {type}
              </label>
            ))}
          </div>

          {/* Status */}
          <div className="mb-6">
            <p className="font-semibold mb-2 text-gray-800 dark:text-gray-200">
              Status
            </p>

            {(["pending", "approved", "rejected"] as CertificateStatus[]).map(
              (status) => (
                <label
                  key={status}
                  className="flex items-center gap-2 mb-2 text-gray-700 dark:text-gray-300">
                  <input
                    type="checkbox"
                    checked={statusFilter[status]}
                    onChange={() =>
                      setStatusFilter((prev) => ({
                        ...prev,
                        [status]: !prev[status],
                      }))
                    }
                  />
                  {status}
                </label>
              )
            )}
          </div>

          <div className="flex gap-3 mt-auto">
            <button
              onClick={() => {
                setTypeFilter({ health: true, quarantine: true });
                setStatusFilter({
                  pending: true,
                  approved: true,
                  rejected: true,
                });
              }}
              className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 rounded-lg">
              Reset
            </button>

            <button
              onClick={() => setShowFilter(false)}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
