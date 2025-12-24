import React from "react";
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-F8F6F0 dark:bg-gray-900 p-6 text-center">
      {/* GIF */}
      <img
        src="/src/assets/error_404.gif"
        alt="404 Error"
        className="w-80 max-w-full mb-6"
      />

      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-3">
        Oops! Halaman Tidak Ditemukan
      </h1>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 max-w-md mb-6">
        Sepertinya kamu mencoba mengakses halaman yang tidak tersedia atau sudah
        dipindahkan.
      </p>

      {/* Back Button */}
      <Link
        to="/login"
        className="px-6 py-3 rounded-xl bg-(--color-primary) text-gray-900 dark:text-grey-900 font-semibold shadow hover:bg-(--color-primary-hover) transition-all">
        Kembali ke Beranda
      </Link>
    </div>
  );
}
