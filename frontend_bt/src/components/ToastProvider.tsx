"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

type ToastType = "success" | "error" | "warning";

type Toast = {
  id: number;
  message: string;
  type: ToastType;
  leaving: boolean;
};

type ToastContextType = {
  showToast: (message: string, type: ToastType) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, type: ToastType) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type, leaving: false }]);

    // Set timeout untuk fade out
    setTimeout(() => {
      setToasts((prev) =>
        prev.map((t) => (t.id === id ? { ...t, leaving: true } : t))
      );

      // Hapus setelah animasi fade out selesai (0.3s)
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 300);
    }, 3000); // durasi toast tampil
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      <div className="fixed top-4 right-4 flex flex-col gap-3 z-50">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`
              flex items-center w-full max-w-sm p-4 rounded-lg shadow-md border transition-all
              ${
                toast.type === "success"
                  ? "bg-[#647aff]/10 border-[#647aff] text-[#160747]"
                  : ""
              }
              ${
                toast.type === "error"
                  ? "bg-[#FF6B6B]/10 border-[#FF6B6B] text-[#160747]"
                  : ""
              }
              ${
                toast.type === "warning"
                  ? "bg-[#FFD93D]/10 border-[#FFD93D] text-[#160747]"
                  : ""
              }
              ${toast.leaving ? "animate-fade-out" : "animate-fade-in"}
            `}>
            <div
              className={`
                w-8 h-8 flex items-center justify-center rounded-full
                ${toast.type === "success" ? "bg-[#647aff] text-white" : ""}
                ${toast.type === "error" ? "bg-[#FF6B6B] text-white" : ""}
                ${toast.type === "warning" ? "bg-[#FFD93D] text-white" : ""}
              `}>
              {toast.type === "success" && "✔"}
              {toast.type === "error" && "✖"}
              {toast.type === "warning" && "!"}
            </div>

            <p className="ml-3 text-sm flex-1">{toast.message}</p>

            <button
              onClick={() =>
                setToasts((prev) => prev.filter((t) => t.id !== toast.id))
              }
              className="ml-3 text-gray-500 hover:text-gray-700">
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes fade-in {
            0% { opacity: 0; transform: translateY(-10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fade-out {
            0% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-10px); }
          }
          .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
          .animate-fade-out { animation: fade-out 0.3s ease-in forwards; }
        `}
      </style>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within <ToastProvider>");
  return context;
}
