// import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
// // import { classNames } from "../utils/classNames";

// export default function Dropdown() {
//   return (
//     <Menu as="div" className="relative inline-block">
//       <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring-1 inset-ring-gray-300 hover:bg-gray-50 dark:bg-white/10 dark:text-white dark:shadow-none dark:inset-ring-white/5 dark:hover:bg-white/20">
//         Options
//         <ChevronDownIcon
//           aria-hidden="true"
//           className="-mr-1 size-5 text-(--color-secondary)"
//         />
//       </MenuButton>

//       <MenuItems
//         transition
//         className="absolute left-5 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
//         <div className="py-1">
//           <MenuItem>
//             <a
//               href="#"
//               className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden dark:text-gray-300 dark:data-focus:bg-white/5 dark:data-focus:text-white">
//               Account settings
//             </a>
//           </MenuItem>
//           <MenuItem>
//             <a
//               href="#"
//               className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden dark:text-gray-300 dark:data-focus:bg-white/5 dark:data-focus:text-white">
//               Support
//             </a>
//           </MenuItem>
//           <MenuItem>
//             <a
//               href="#"
//               className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden dark:text-gray-300 dark:data-focus:bg-white/5 dark:data-focus:text-white">
//               License
//             </a>
//           </MenuItem>
//           <form action="#" method="POST">
//             <MenuItem>
//               <button
//                 type="submit"
//                 className="block w-full px-4 py-2 text-left text-sm text-(--color-secondary) data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden dark:text-gray-300 dark:data-focus:bg-white/5 dark:data-focus:text-white">
//                 Sign out
//               </button>
//             </MenuItem>
//           </form>
//         </div>
//       </MenuItems>
//     </Menu>
//   );
// }

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Dropdown() {
  return (
    <Menu as="div" className="relative inline-block">
      {/* BUTTON */}
      <MenuButton
        className="
          inline-flex w-full items-center justify-center gap-x-1.5
          rounded-xl px-4 py-2 text-sm font-semibold
          bg-white text-gray-900 shadow-sm ring-1 ring-gray-200
          hover:bg-gray-50
          dark:bg-gray-900 dark:text-gray-900
          dark:ring-white/1 dark:hover:bg-gray-800
          transition
        ">
        Options
        <ChevronDownIcon className="size-5 text-(--color-secondary)" />
      </MenuButton>

      {/* DROPDOWN */}
      <MenuItems
        transition
        className="
          absolute left-5 z-10 mt-2 w-56 origin-top-right
          rounded-xl bg-white shadow-xl ring-1 ring-black/5
          transition
          data-closed:scale-95 data-closed:opacity-0

          dark:bg-gray-900 dark:ring-white/10 dark:shadow-black/30
        ">
        <div className="py-1">
          {["Account settings", "Support", "License"].map((item) => (
            <MenuItem key={item}>
              <a
                href="#"
                className="
                  block px-4 py-2 text-sm
                  text-gray-900 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white
                  transition
                ">
                {item}
              </a>
            </MenuItem>
          ))}

          <div className="my-1 h-px bg-gray-200 dark:bg-white/10" />

          <MenuItem>
            <button
              type="submit"
              className="
                block w-full px-4 py-2 text-left text-sm font-medium
                text-(--color-secondary)
                hover:bg-gray-100

                dark:text-red-400 dark:hover:bg-red-500/10
                transition
              ">
              Sign out
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
