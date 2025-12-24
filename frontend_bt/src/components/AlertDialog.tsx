// "use client";

// import { useState } from "react";
// import {
//   Dialog,
//   DialogBackdrop,
//   DialogPanel,
//   DialogTitle,
// } from "@headlessui/react";
// import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

// export default function AlertDialog() {
//   const [open, setOpen] = useState(true);

//   return (
//     <div>
//       <button
//         onClick={() => setOpen(true)}
//         className="rounded-md bg-gray-950/5 px-2.5 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-950/10 dark:bg-white/10 dark:text-white dark:inset-ring dark:inset-ring-white/5 dark:hover:bg-white/20">
//         Open dialog
//       </button>
//       <Dialog open={open} onClose={setOpen} className="relative z-10">
//         <DialogBackdrop
//           transition
//           className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in dark:bg-gray-900/50"
//         />

//         <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
//           <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
//             <DialogPanel
//               transition
//               className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95 dark:bg-gray-800 dark:outline dark:-outline-offset-1 dark:outline-white/10">
//               <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 dark:bg-gray-800">
//                 <div className="sm:flex sm:items-start">
//                   <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10 dark:bg-red-500/10">
//                     <ExclamationTriangleIcon
//                       aria-hidden="true"
//                       className="size-6 text-red-600 dark:text-red-400"
//                     />
//                   </div>
//                   <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
//                     <DialogTitle
//                       as="h3"
//                       className="text-base font-semibold text-gray-900 dark:text-white">
//                       Deactivate account
//                     </DialogTitle>
//                     <div className="mt-2">
//                       <p className="text-sm text-gray-500 dark:text-gray-400">
//                         Are you sure you want to deactivate your account? All of
//                         your data will be permanently removed. This action
//                         cannot be undone.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 dark:bg-gray-700/25">
//                 <button
//                   type="button"
//                   onClick={() => setOpen(false)}
//                   className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto dark:bg-red-500 dark:shadow-none dark:hover:bg-red-400">
//                   Deactivate
//                 </button>
//                 <button
//                   type="button"
//                   data-autofocus
//                   onClick={() => setOpen(false)}
//                   className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto dark:bg-white/10 dark:text-white dark:shadow-none dark:inset-ring-white/5 dark:hover:bg-white/20">
//                   Cancel
//                 </button>
//               </div>
//             </DialogPanel>
//           </div>
//         </div>
//       </Dialog>
//     </div>
//   );
// }

"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const statusConfig = {
  success: {
    icon: CheckCircleIcon,
    bg: "bg-green-100 dark:bg-green-500/10",
    iconColor: "text-green-600 dark:text-green-400",
    button:
      "bg-green-600 hover:bg-green-500 dark:bg-green-500 dark:hover:bg-green-400",
  },
  warning: {
    icon: ExclamationTriangleIcon,
    bg: "bg-yellow-100 dark:bg-yellow-500/10",
    iconColor: "text-yellow-600 dark:text-yellow-400",
    button:
      "bg-yellow-600 hover:bg-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-400",
  },
  danger: {
    icon: XCircleIcon,
    bg: "bg-red-100 dark:bg-red-500/10",
    iconColor: "text-red-600 dark:text-red-400",
    button: "bg-red-600 hover:bg-red-500 dark:bg-red-500 dark:hover:bg-red-400",
  },
  info: {
    icon: InformationCircleIcon,
    bg: "bg-blue-100 dark:bg-blue-500/10",
    iconColor: "text-blue-600 dark:text-blue-400",
    button:
      "bg-blue-600 hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400",
  },
};

export default function AlertDialog({
  open,
  setOpen,
  status = "info",
  title = "Information",
  message = "This is an info alert dialog.",
  confirmText = "OK",
  cancelText = "Cancel",
  onConfirm,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
  status?: "success" | "warning" | "danger" | "info";
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
}) {
  const cfg = statusConfig[status];
  const Icon = cfg.icon;

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/40 transition-opacity data-closed:opacity-0"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:opacity-0 data-closed:translate-y-4 dark:bg-gray-800 dark:outline dark:-outline-offset-1 dark:outline-white/10 sm:my-8 sm:w-full sm:max-w-lg">
            <div className="px-6 py-5 bg-white dark:bg-gray-800">
              <div className="sm:flex sm:items-start">
                <div
                  className={`mx-auto flex size-12 shrink-0 items-center justify-center rounded-full sm:mx-0 sm:size-10 ${cfg.bg}`}>
                  <Icon
                    aria-hidden="true"
                    className={`size-6 ${cfg.iconColor}`}
                  />
                </div>

                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle className="text-base font-semibold text-gray-900 dark:text-white">
                    {title}
                  </DialogTitle>

                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {message}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse dark:bg-gray-700/20">
              <button
                type="button"
                onClick={() => {
                  if (onConfirm) onConfirm();
                  setOpen(false);
                }}
                className={`inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-xs sm:ml-3 sm:w-auto ${cfg.button}`}>
                {confirmText}
              </button>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto dark:bg-white/10 dark:text-white dark:inset-ring-white/10 dark:hover:bg-white/20">
                {cancelText}
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
