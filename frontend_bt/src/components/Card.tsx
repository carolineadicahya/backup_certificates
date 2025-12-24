import React from "react";
// import { classNames } from "../utils/classNames";

interface CardProps {
  children: React.ReactNode;
  className?: string; // opsional, untuk menambah styling khusus
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`w-full max-w-md min-h-[220px] bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-md space-y-6  
              transform transition-transform duration-300 ease-in-out hover:scale-105 
              mx-auto ${className}`}>
      {children}
    </div>
  );
}
