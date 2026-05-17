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
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "./Magnetic";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [scrolled, setScrolled] = useState<boolean>(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItem = [
    { href: "/", label: "Home", sectionId: "home" },
    { href: "/about", label: "About", sectionId: "about" },
    { href: "/projects", label: "Projects", sectionId: "projects" },
    { href: "/blogs", label: "Blogs", sectionId: "blogs" },
    { href: "/contract", label: "Contact", sectionId: "newsletter" },
  ];

  // 1. Check Scroll State to apply premium glass backdrop
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Active section highlight on scroll (IntersectionObserver)
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = ["home", "about", "services", "projects", "blogs", "newsletter"];
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, [pathname]);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-[999] transition-all duration-500 border-b ${scrolled
        ? "bg-dark/80 backdrop-blur-md border-primary/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
        : "bg-transparent border-transparent py-5"
        }`}
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">

          {/* Brand Logo with Magnetic Hook */}
          <Magnetic range={30} strength={0.3}>
            <Link href="/" className="text-2xl font-bold tracking-tighter text-white hover:text-primary transition-colors flex items-center gap-1 group">
              <span className="text-primary group-hover:scale-110 transition-transform duration-300">{"<"}</span>
              Abul Bashar
              <span className="text-primary group-hover:scale-110 transition-transform duration-300">{">"}</span>
            </Link>
          </Magnetic>

          {/* Desktop Menu Items */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {menuItem.map((item, index) => {
              const isCurrentPath = pathname === item.href;
              const isCurrentSection = pathname === "/" && activeSection === item.sectionId;
              const isActive = isCurrentPath || isCurrentSection;

              return (
                <div key={index} className="relative">
                  <Magnetic range={20} strength={0.2}>
                    <Link
                      href={item.href}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative z-10 block ${isActive
                        ? "text-primary font-semibold"
                        : "text-gray-300 hover:text-white"
                        }`}
                    >
                      {item.label}

                      {/* Active highlight backdrop */}
                      {isActive && (
                        <motion.div
                          layoutId="navBackdrop"
                          className="absolute inset-0 bg-primary/10 rounded-full -z-10 border border-primary/20 shadow-[0_0_15px_rgba(255,95,56,0.15)]"
                          transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                        />
                      )}
                    </Link>
                  </Magnetic>
                </div>
              );
            })}

            {/* Theme Toggle Button */}
            <Magnetic range={20} strength={0.3}>
              <motion.button
                onClick={toggleTheme}
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/30 text-gray-300 hover:text-primary transition-all duration-300 ml-4 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {theme === "dark" ? (
                  <SunIcon className="w-5 h-5" />
                ) : (
                  <MoonIcon className="w-5 h-5" />
                )}
              </motion.button>
            </Magnetic>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/5 text-gray-300"
            >
              {theme === "dark" ? (
                <SunIcon className="w-5 h-5" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )}
            </button>

            <motion.button
              className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-primary hover:bg-white/10 cursor-pointer"
              onClick={toggleMenu}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </motion.button>
          </div>

        </div>

        {/* Mobile Full Screen Drawer Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.6, 0.05, 0.2, 0.9] }}
              className="md:hidden overflow-hidden border-t border-white/5 bg-dark/95 backdrop-blur-xl rounded-2xl mt-4"
            >
              <div className="py-6 px-4 space-y-4 flex flex-col">
                {menuItem.map((item, index) => {
                  const isActive = pathname === item.href || (pathname === "/" && activeSection === item.sectionId);

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <Link
                        href={item.href}
                        className={`block px-4 py-3 rounded-xl text-lg font-medium transition-all ${isActive
                          ? "bg-primary/10 text-primary border-l-4 border-primary pl-6"
                          : "text-gray-300 hover:text-white hover:bg-white/5"
                          }`}
                        onClick={toggleMenu}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
