import React from "react";
import ProfilePicture from "../assets/rizal wisuda.jpeg";
import DefaultProfile from "../assets/DefaultProfile.jpg";
import Card from "../components/Card";

export default function Profile() {
  const user = {
    nama: "Asmi Afrizal Fikri",
    NIP: "G061211035",
    jabatan: " Magang Ahli Tanaman 🌱",
    satpel: "Pelabuhan Semayang",
    role: "Magang",
    photo: { ProfilePicture }, // kosong kalau belum upload
  };

  return (
    <div className="w-full min-h-screen p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          {user.photo ? (
            <img
              src={ProfilePicture}
              alt="User Avatar"
              className="w-32 h-32 rounded-full object-cover border-4 border-(--color-primary)"
            />
          ) : (
            <img
              src={DefaultProfile}
              alt="User Avatar"
              className="w-32 h-32 rounded-full object-cover border-4 border-(--color-primary)"
            />
          )}
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {user.nama}
            </h1>
            <p className="text-gray-500 dark:text-gray-400">{user.NIP}</p>
            <p className="text-sm text-gray-400">{user.jabatan}</p>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Info */}
          <Card>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Informasi Pribadi
            </h2>

            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div className="flex justify-between">
                <span>Nama Lengkap</span>
                <span className="font-medium">{user.nama}</span>
              </div>
              <div className="flex justify-between">
                <span>NIP</span>
                <span className="font-medium">{user.NIP}</span>
              </div>
              <div className="flex justify-between">
                <span>Satpel</span>
                <span className="font-medium ">{user.satpel}</span>
              </div>
              <div className="flex justify-between">
                <span>Role</span>
                <span className="font-medium text-blue-500">{user.role}</span>
              </div>
            </div>
          </Card>

          {/* Account Info */}
          <Card>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Akun
            </h2>

            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div className="flex justify-between">
                <span>Status</span>
                <span className="text-green-500 font-medium">Aktif</span>
              </div>
              <div className="flex justify-between">
                <span>Bergabung</span>
                <span>12 Juni 2024</span>
              </div>
              <div className="flex justify-between">
                <span>Terakhir Login</span>
                <span>Hari ini</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-end">
          <button className="px-6 py-3 rounded-xl bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition">
            Ganti Password
          </button>
          <button className="px-6 py-3 rounded-xl bg-(--color-primary) text-gray-900 hover:bg-(--color-primary-hover) transition shadow">
            Edit Profil
          </button>
        </div>
      </div>
    </div>
  );
}
