import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { classNames } from "../utils/classNames";
import { useLocation } from "react-router-dom";
import logoBBKHIT from "../assets/logo_bbkhit(2).png";
import ProfilePicture from "../assets/rizal 2020.jpg";
// import logoBarantin from "../assets/logo_barantin.png";

const navigation = [
  { name: "Dashboard", href: "/" },
  { name: "Sertifikasi", href: "/sertifikasi" },
  { name: "Formulir", href: "/formulir" },
];

const userNavigation = [
  { name: "Profil Anda", href: "/users/profile" },
  { name: "Keluar", href: "/login" },
];

export default function Navbar() {
  const location = useLocation();

  // Mark current page
  const navWithCurrent = navigation.map((item) => ({
    ...item,
    current: item.href === location.pathname,
  }));

  return (
    <div className="min-h-full">
      <Disclosure as="nav" className="bg-gray-800 dark:bg-gray-800/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Left */}
            <div className="flex items-center">
              <div className="shrink-0">
                <img alt="Baratin" src={logoBBKHIT} className="w-25 h-auto" />
              </div>

              {/* Desktop menu */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navWithCurrent.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white dark:bg-gray-950/50"
                          : "text-gray-300 hover:bg-white/5 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}>
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <MenuButton className="relative flex max-w-xs items-center rounded-full focus-visible:outline-(--color-primary)">
                    <img
                      alt="User"
                      src={ProfilePicture}
                      className="size-8 rounded-full outline outline-white/10"
                    />
                  </MenuButton>

                  <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-800 py-1 shadow-lg">
                    {userNavigation.map((item) => (
                      <MenuItem key={item.name}>
                        <a
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5">
                          {item.name}
                        </a>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </div>
            </div>

            {/* Mobile button */}
            <div className="-mr-2 flex md:hidden">
              <DisclosureButton className="group rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white">
                <Bars3Icon className="block size-6 group-data-open:hidden" />
                <XMarkIcon className="hidden size-6 group-data-open:block" />
              </DisclosureButton>
            </div>
          </div>
        </div>

        {/* Mobile Panel */}
        <DisclosurePanel className="md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navWithCurrent.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white dark:bg-gray-950/50"
                    : "text-gray-300 hover:bg-white/5 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}>
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
}
