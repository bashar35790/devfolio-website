"use client";
import { useTheme } from "@/app/context/ThemeContext";
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const {theme, toggleTheme}= useTheme();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItem = [
    { href: "/", lebel: "Home" },
    { href: "/about", lebel: "About" },
    { href: "/blogs", lebel: "Blogs" },
    { href: "/contract", lebel: "Contact" },
    { href: "/projects", lebel: "Projects" },
  ];

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors">
      <div className="container max-w-7xl mx-auto px-4">
        {/* destop menu */}

        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-primary">
            Devfolio&trade;
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {menuItem.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={index}
                  href={item.href}
                  className={`hover:text-primary transition-colors font-medium ${
                    isActive && "text-primary"
                  }`}
                >
                  {item.lebel}
                </Link>
              );
            })}

            <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors hover:text-primary">
              {theme === "dark" ? (
                <SunIcon className="w-5 h-5" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )}
            </button>
          </div>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors hover:text-primary cursor-pointer"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-5 h-5" />
            ) : (
              <Bars3Icon className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* MObile menu  */}

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="py-4 space-y-4">
              {menuItem.map((item, index) => (
                <Link key={index}
                  href={item.href}
                  className="block hover:text-primary  transition-colors"
                onClick={toggleMenu}>
                  {item.lebel}
                </Link>
              ))}
              <div>
                <button onClick={toggleTheme} className="py-2 flex items-center transition-colors hover:text-primary">
                  {theme === "dark" ? (
                   <> <SunIcon className="w-5 h-5 mr-2" /> Light Mood</>
                  ) : (
                    <><MoonIcon className="w-5 h-5 mr-2" /> Dark Mood</>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
