// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

// type PaginationProps = {
//   currentPage: number;
//   totalPages: number;
//   onPageChange: (page: number) => void;
// };

// export default function Pagination({
//   currentPage,
//   totalPages,
//   onPageChange,
// }: PaginationProps) {
//   const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

//   const gotoPrev = () => {
//     if (currentPage > 1) onPageChange(currentPage - 1);
//   };

//   const gotoNext = () => {
//     if (currentPage < totalPages) onPageChange(currentPage + 1);
//   };

//   return (
//     <div className="border-t border-gray-200 bg-white px-4 py-6 sm:px-6 dark:border-white/10 dark:bg-transparent">
//       {/* MOBILE */}
//       <div className="flex justify-between sm:hidden">
//         <button
//           onClick={gotoPrev}
//           disabled={currentPage === 1}
//           className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 disabled:opacity-40 hover:bg-gray-50 dark:border-white/10 dark:bg-white/5 dark:text-gray-200">
//           Previous
//         </button>
//         <button
//           onClick={gotoNext}
//           disabled={currentPage === totalPages}
//           className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 disabled:opacity-40 hover:bg-gray-50 dark:border-white/10 dark:bg-white/5 dark:text-gray-200">
//           Next
//         </button>
//       </div>

//       {/* DESKTOP */}
//       <div className="hidden sm:flex sm:flex-col sm:items-center sm:justify-center">
//         {/* TEXT DI TENGAH */}
//         <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
//           Showing <span className="font-medium">{currentPage}</span> of{" "}
//           <span className="font-medium">{totalPages}</span> pages
//         </p>

//         {/* PAGINATION */}
//         <nav
//           aria-label="Pagination"
//           className="isolate inline-flex -space-x-px rounded-md shadow-xs dark:shadow-none">
//           <button
//             onClick={gotoPrev}
//             disabled={currentPage === 1}
//             className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 hover:bg-gray-50 disabled:opacity-40 dark:hover:bg-white/5">
//             <ChevronLeftIcon className="size-5" />
//           </button>

//           {pages.map((page) => (
//             <button
//               key={page}
//               onClick={() => onPageChange(page)}
//               className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold
//                 ${
//                   page === currentPage
//                     ? "z-10 bg-indigo-600 text-white dark:bg-indigo-500"
//                     : "text-gray-900 inset-ring inset-ring-gray-300 hover:bg-gray-50 dark:text-gray-200 dark:inset-ring-gray-700 dark:hover:bg-white/5"
//                 }
//               `}>
//               {page}
//             </button>
//           ))}

//           <button
//             onClick={gotoNext}
//             disabled={currentPage === totalPages}
//             className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 hover:bg-gray-50 disabled:opacity-40 dark:hover:bg-white/5">
//             <ChevronRightIcon className="size-5" />
//           </button>
//         </nav>
//       </div>
//     </div>
//   );
// }

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  perPage: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  totalItems,
  perPage,
  onPageChange,
}: PaginationProps) {
  const start = (currentPage - 1) * perPage + 1;
  const end = Math.min(currentPage * perPage, totalItems);

  const createPageNumbers = () => {
    const pages: (number | "...")[] = [];

    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      return [1, 2, 3, 4, "...", totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [
        1,
        "...",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  };

  const pages = createPageNumbers();

  return (
    <div className="w-full flex flex-col items-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6 dark:border-white/10 dark:bg-transparent">
      {/* Mobile */}
      <div className="flex w-full justify-around sm:hidden">
        <a
          href="#"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-white/10 dark:bg-white/5 dark:text-gray-200 dark:hover:bg-white/10">
          Previous
        </a>

        <a
          href="#"
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-white/10 dark:bg-white/5 dark:text-gray-200 dark:hover:bg-white/10">
          Next
        </a>
      </div>

      {/* Desktop */}
      <div className="hidden sm:flex sm:flex-col sm:items-center sm:justify-center w-full">
        {/* CENTER TEXT */}
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
          Showing <span className="font-medium">{start}</span> to{" "}
          <span className="font-medium">{end}</span> of{" "}
          <span className="font-medium">{totalItems}</span> results
        </p>

        {/* PAGINATION CENTER */}
        <nav
          aria-label="Pagination"
          className="isolate inline-flex -space-x-px rounded-md shadow-xs dark:shadow-none">
          {/* PREV */}
          <a
            href="#"
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:inset-ring-gray-700 dark:hover:bg-white/5">
            <ChevronLeftIcon className="size-5" />
          </a>

          {/* PAGE LIST */}
          {pages.map((page, index) =>
            page === "..." ? (
              <span
                key={index}
                className="relative inline-flex items-center px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                ...
              </span>
            ) : (
              <a
                key={index}
                href="#"
                onClick={() => onPageChange(page as number)}
                aria-current={page === currentPage ? "page" : undefined}
                className={
                  page === currentPage
                    ? "relative z-10 inline-flex items-center bg-(--color-primary-active) px-4 py-2 text-sm font-semibold text-white focus:z-20 dark:bg-(--color-primary-active)"
                    : "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 dark:text-gray-200 dark:inset-ring-gray-700 dark:hover:bg-white/5"
                }>
                {page}
              </a>
            )
          )}

          {/* NEXT */}
          <a
            href="#"
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:inset-ring-gray-700 dark:hover:bg-white/5">
            <ChevronRightIcon className="size-5" />
          </a>
        </nav>
      </div>
    </div>
  );
}
