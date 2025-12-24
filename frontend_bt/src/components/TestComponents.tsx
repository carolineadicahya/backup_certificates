// import Pagination from "./Pagination";
// import { useState } from "react";

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

"use client";

import { useToast } from "../components/ToastProvider";

export default function UseToastDemo() {
  const { showToast } = useToast();

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-semibold text-[#160747]">Contoh Toast</h1>

      <button
        onClick={() => showToast("Berhasil menyimpan data!", "success")}
        className="px-4 py-2 rounded bg-[#647aff] text-white">
        Success Toast
      </button>

      <button
        onClick={() => showToast("Terjadi kesalahan!", "error")}
        className="px-4 py-2 rounded bg-[#FF6B6B] text-white">
        Error Toast
      </button>

      <button
        onClick={() => showToast("Periksa kembali input Anda.", "warning")}
        className="px-4 py-2 rounded bg-[#FFD93D] text-[#160747]">
        Warning Toast
      </button>
    </div>
  );
}
