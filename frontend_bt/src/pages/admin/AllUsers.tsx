// import { useMemo, useState } from "react";
// import SearchBar from "../../components/SearchBar";

// type CertificateType = "health" | "quarantine";
// type CertificateStatus = "pending" | "approved" | "rejected";

// interface CertificateFile {
//   id: number;
//   name: string;
//   product_name: string;
//   certificate_type: CertificateType;
//   status: CertificateStatus;
//   file_url: string;
//   submitted_at: string;
//   created_at: string;
// }

// /* ================= Dummy Data ================= */
// const dummyCertificates: CertificateFile[] = [
//   {
//     id: 1,
//     name: "Health Certificate - Tuna",
//     product_name: "Tuna",
//     certificate_type: "health",
//     status: "approved",
//     file_url: "#",
//     submitted_at: "2025-01-01",
//     created_at: "2025-01-01",
//   },
//   {
//     id: 2,
//     name: "Quarantine Certificate - Salmon",
//     product_name: "Salmon",
//     certificate_type: "quarantine",
//     status: "pending",
//     file_url: "#",
//     submitted_at: "2025-01-03",
//     created_at: "2025-01-03",
//   },
//   {
//     id: 3,
//     name: "Health Certificate - Shrimp",
//     product_name: "Shrimp",
//     certificate_type: "health",
//     status: "rejected",
//     file_url: "#",
//     submitted_at: "2025-01-05",
//     created_at: "2025-01-05",
//   },
// ];

// export default function AllUsers() {
//   /* ================= Filter State ================= */
//   const [search, setSearch] = useState("");
//   const [showFilter, setShowFilter] = useState(false);

//   const [typeFilter, setTypeFilter] = useState<
//     Record<CertificateType, boolean>
//   >({
//     health: true,
//     quarantine: true,
//   });

//   const [statusFilter, setStatusFilter] = useState<
//     Record<CertificateStatus, boolean>
//   >({
//     pending: true,
//     approved: true,
//     rejected: true,
//   });

//   /* ================= Filtering Logic ================= */
//   const filteredData = useMemo(() => {
//     return dummyCertificates.filter((item) => {
//       const matchType = typeFilter[item.certificate_type];
//       const matchStatus = statusFilter[item.status];

//       const matchSearch =
//         item.product_name.toLowerCase().includes(search.toLowerCase()) ||
//         item.certificate_type.toLowerCase().includes(search.toLowerCase());

//       return matchType && matchStatus && matchSearch;
//     });
//   }, [typeFilter, statusFilter, search]);

//   const statusStyle = (status: string) => {
//     if (status === "approved")
//       return "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400";
//     if (status === "rejected")
//       return "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-400";
//     return "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400";
//   };

//   return (
//     <div className="min-h-screen px-4 sm:px-6 lg:px-10 py-8 dark:transition-colors">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between mb-6">
//         <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
//           Sertifikat
//         </h1>
//         <div className="flex gap-3 w-full sm:w-auto">
//           <SearchBar
//             value={search}
//             onChange={setSearch}
//             placeholder="🔍 Cari Sertifikat..."
//           />

//           <button
//             onClick={() => setShowFilter(true)}
//             className="h-11 flex items-center justify-center gap-2 px-4 py-2 rounded-xl border bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition whitespace-nowrap">
//             <span className="text-lg">☰</span>
//             <span className="hidden sm:inline">Filter</span>
//           </button>
//         </div>
//       </div>

//       {/* ================= Certificate List ================= */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
//         {filteredData.map((cert) => (
//           <div
//             key={cert.id}
//             className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
//             <div className="flex justify-between items-start">
//               <div>
//                 <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
//                   {cert.product_name}
//                 </h2>
//                 <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
//                   {cert.certificate_type} certificate
//                 </p>
//               </div>

//               <span
//                 className={`px-3 py-1 text-xs rounded-full font-medium ${statusStyle(
//                   cert.status
//                 )}`}>
//                 {cert.status.toUpperCase()}
//               </span>
//             </div>

//             <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
//               Uploaded: {new Date(cert.created_at).toLocaleDateString()}
//             </p>

//             <div className="flex gap-3 mt-6">
//               <a
//                 href={cert.file_url}
//                 target="_blank"
//                 className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm sm:text-base">
//                 View
//               </a>

//               <a
//                 href={cert.file_url}
//                 download
//                 className="flex-1 text-center bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-800 text-gray-800 dark:text-white py-2 rounded-lg text-sm sm:text-base">
//                 Download
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>

//       {filteredData.length === 0 && (
//         <p className="text-gray-500 dark:text-gray-400 mt-20 text-center">
//           Tidak ada Sertifikat yang ditemukan 🗃️
//         </p>
//       )}

//       {/* ================= Filter Drawer ================= */}
//       <div
//         className={`fixed inset-0 z-50 transition ${
//           showFilter ? "pointer-events-auto" : "pointer-events-none"
//         }`}>
//         {/* Overlay */}
//         <div
//           onClick={() => setShowFilter(false)}
//           className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
//             showFilter ? "opacity-100" : "opacity-0"
//           }`}
//         />

//         {/* Panel */}
//         <div
//           className={`absolute right-0 top-0 h-full w-80 bg-white dark:bg-gray-900 shadow-xl p-6 transform transition-transform duration-300 ${
//             showFilter ? "translate-x-0" : "translate-x-full"
//           }`}>
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-xl font-bold text-gray-900 dark:text-white">
//               Filters
//             </h2>
//             <button onClick={() => setShowFilter(false)}>✕</button>
//           </div>

//           {/* Certificate Type */}
//           <div className="mb-6">
//             <p className="font-semibold mb-2 text-gray-800 dark:text-gray-200">
//               Certificate Type
//             </p>

//             {(["health", "quarantine"] as CertificateType[]).map((type) => (
//               <label
//                 key={type}
//                 className="flex items-center gap-2 mb-2 text-gray-700 dark:text-gray-300">
//                 <input
//                   type="checkbox"
//                   checked={typeFilter[type]}
//                   onChange={() =>
//                     setTypeFilter((prev) => ({
//                       ...prev,
//                       [type]: !prev[type],
//                     }))
//                   }
//                 />
//                 {type}
//               </label>
//             ))}
//           </div>

//           {/* Status */}
//           <div className="mb-6">
//             <p className="font-semibold mb-2 text-gray-800 dark:text-gray-200">
//               Status
//             </p>

//             {(["pending", "approved", "rejected"] as CertificateStatus[]).map(
//               (status) => (
//                 <label
//                   key={status}
//                   className="flex items-center gap-2 mb-2 text-gray-700 dark:text-gray-300">
//                   <input
//                     type="checkbox"
//                     checked={statusFilter[status]}
//                     onChange={() =>
//                       setStatusFilter((prev) => ({
//                         ...prev,
//                         [status]: !prev[status],
//                       }))
//                     }
//                   />
//                   {status}
//                 </label>
//               )
//             )}
//           </div>

//           <div className="flex gap-3 mt-auto">
//             <button
//               onClick={() => {
//                 setTypeFilter({ health: true, quarantine: true });
//                 setStatusFilter({
//                   pending: true,
//                   approved: true,
//                   rejected: true,
//                 });
//               }}
//               className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 rounded-lg">
//               Reset
//             </button>

//             <button
//               onClick={() => setShowFilter(false)}
//               className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
//               Apply
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeList from "../../components/ListCard";
import SearchBar from "../../components/SearchBar";

const employees = [
  {
    id: "1",
    name: "Caroline Adi Cahya",
    role: "IT Support",
    location: "Bandara SAMS",
  },
  {
    id: "2",
    name: "Annisa Nur Auliya",
    role: "Pranata Humas Ahli",
    location: "Bandara SAMS",
  },
  {
    id: "3",
    name: "Caroline Adi Cahya",
    role: "IT Support",
    location: "Pelabuhan Semayang",
  },
  {
    id: "4",
    name: "Annisa Nur Auliya",
    role: "Pranata Humas Ahli",
    location: "Pelabuhan Semayang",
  },
];

export default function AllUsers() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("All");

  const locations = ["All", ...new Set(employees.map((e) => e.location))];

  const filtered = employees.filter((e) => {
    const matchText =
      e.name.toLowerCase().includes(query.toLowerCase()) ||
      e.role.toLowerCase().includes(query.toLowerCase());

    const matchLocation = location === "All" || e.location === location;

    return matchText && matchLocation;
  });

  return (
    <div className="min-h-screen p-6 bg-white dark:bg-gray-900 text-black dark:text-white space-y-6">
      {/* Header */}
      <h1 className="text-2xl font-bold">Daftar Petugas</h1>

      <div className="w-full flex items-center justify-between gap-6">
        {/* KIRI — Search */}
        <div className="flex-1 max-w-md">
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Cari Petugas..."
          />
        </div>

        {/* KANAN — Filter + Tambah */}
        <div className="flex items-center gap-4 shrink-0">
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="h-11 rounded-lg px-3 bg-gray-200 dark:bg-gray-800">
            {locations.map((loc) => (
              <option key={loc}>{loc}</option>
            ))}
          </select>

          <button className="h-11 border border-blue-500 text-blue-500 px-4 rounded-lg whitespace-nowrap">
            + Tambah
          </button>
        </div>
      </div>

      {/* List */}
      <EmployeeList
        data={filtered}
        onSelect={() => navigate(`/users/profile`)}
      />
    </div>
  );
}
