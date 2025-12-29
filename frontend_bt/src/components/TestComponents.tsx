// import Pagination from "./Pagination";
// import { useState } from "react";

import Forms from "./Forms";

// export default function Layout() {
//   const [page, setPage] = useState(1);

//   return (
//     <Pagination
//       currentPage={page}
//       totalPages={10}
//       totalItems={97}
//       perPage={10}
//       onPageChange={(p) => setPage(p)}
//     />
//   );
// }

// import AlertDialog from "./AlertDialog";
// import { useState } from "react";

// export default function Layout() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="p-6">
//       <button
//         onClick={() => setOpen(true)}
//         className="rounded-md bg-gray-900/10 px-3 py-2 text-sm font-semibold dark:bg-white/10 dark:text-white">
//         Buka Dialog
//       </button>

//       <AlertDialog
//         open={open}
//         setOpen={setOpen}
//         status="danger" // success | warning | danger | info
//         title="success"
//         message="Yakin ingin menghapus data ini?"
//         confirmText="Hapus"
//         cancelText="Batal"
//       />
//     </div>
//   );
// }

// "use client";

// import { useToast } from "../components/ToastProvider";

// export default function UseToastDemo() {
//   const { showToast } = useToast();

//   return (
//     <div className="p-6 space-y-4">
//       <h1 className="text-xl font-semibold text-[#160747]">Contoh Toast</h1>

//       <button
//         onClick={() => showToast("Berhasil menyimpan data!", "success")}
//         className="px-4 py-2 rounded bg-[#647aff] text-white">
//         Success Toast
//       </button>

//       <button
//         onClick={() => showToast("Terjadi kesalahan!", "error")}
//         className="px-4 py-2 rounded bg-[#FF6B6B] text-white">
//         Error Toast
//       </button>

//       <button
//         onClick={() => showToast("Periksa kembali input Anda.", "warning")}
//         className="px-4 py-2 rounded bg-[#FFD93D] text-[#160747]">
//         Warning Toast
//       </button>
//     </div>
//   );
// }

import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function FormPage() {
  const location = useLocation();
  const category = location.state?.category ?? "ikan";

  const [certificate, setCertificate] = useState<"health" | "quarantine">(
    "health"
  );

  return (
    <div className="min-h-screen p-10 space-y-6">
      <h1 className="text-2xl font-bold capitalize">
        Form Sertifikat — Karantina {category}
      </h1>

      {/* Dropdown Sertifikat */}
      <select
        className="border p-3 rounded-lg"
        value={certificate}
        onChange={(e) =>
          setCertificate(e.target.value as "health" | "quarantine")
        }>
        <option value="health" className="dark:text-gray-900">
          Sertifikat Kesehatan
        </option>
        <option value="quarantine" className="dark:text-gray-900">
          Sertifikat Karantina
        </option>
      </select>

      {/* FORM DINAMIS */}
      <Forms category={category} certificate={certificate} />
    </div>
  );
}
