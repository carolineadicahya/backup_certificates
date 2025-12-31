import React from "react";
import ProfilePicture from "../assets/nisa wisuda.jpeg";
import DefaultProfile from "../assets/DefaultProfile.jpg";
import Card from "../components/Card";

export default function Profile() {
  const user = {
    nama: "Annisa Cantik💗",
    NIP: "17211064",
    jabatan: "Humas Jago",
    satpel: "Kantor Induk BBKHIT",
    role: "Magang",
    photo: ProfilePicture, // kosong kalau belum upload
  };

  return (
    <div className="mt-10 w-full min-h-screen md:px-12">
      <div className="max-w-7xl mx-auto space-y-6 px-10 md:px-0">
        {/* Header */}

        {/* Info Cards */}
        <div className="w-full ">
          <h1 className="font-bold text-xl mb-6 text-center text-(--color-text) dark:text-(--color-primary)">
            Profil {user.role}
          </h1>
          {/* Personal Info */}
          <Card className="min-w-[220px]">
            {/* Header */}
            <div className="flex flex-col justify-center items-center md:flex-row gap-6">
              <img
                src={user.photo ? ProfilePicture : DefaultProfile}
                alt="User Avatar"
                className="w-35 h-35 rounded-full object-cover border-4 border-(--color-primary)"
              />

              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {user.nama}
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-5 text-gray-700 dark:text-gray-300">
              <div className="border-t border-gray-200 dark:border-gray-700"></div>

              <div className="flex items-center justify-between">
                <span className="text-xl text-gray-400">NIP</span>
                <span className="text-xl font-semibold text-gray-900 dark:text-white">
                  {user.NIP}
                </span>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700"></div>

              <div className="flex items-center justify-between">
                <span className="text-xl text-gray-400">Jabatan</span>
                <span className="text-xl font-medium">{user.jabatan}</span>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700"></div>

              <div className="flex items-center justify-between">
                <span className="text-xl text-gray-400">Satpel</span>
                <span className="text-xl font-medium">{user.satpel}</span>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700"></div>

              <div className="flex items-center justify-between">
                <span className="text-xl text-gray-400">Role</span>
                <span className="text-xl px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold">
                  {user.role}
                </span>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700"></div>
            </div>
          </Card>
        </div>
        {/* Action Buttons */}
        <div className="flex flex-col gap-4 justify-center w-full">
          <button className="px-6 py-3 rounded-xl bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition">
            Edit Profil
          </button>
          <button className="mb-10 px-6 py-3 rounded-xl bg-(--color-primary) text-gray-900 hover:bg-(--color-primary-hover) transition shadow">
            Hubungi Admin
          </button>
        </div>
      </div>
    </div>
  );
}
