import React, { useState, useEffect, useRef, SetStateAction } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Hotel } from "lucide-react";
export type NavOption = "HOME"|"ABOUT"|"SERVICES"|"TESTIMONIALS"|"CONTACT"|null
interface NavProps{
  active:string,
  setActive: React.Dispatch<SetStateAction<NavOption>>
}
export default function Navbar({active,setActive}:NavProps) {
  const navItems:{name:NavOption,href:string}[] = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "SERVICES", href: "#services" },
    { name: "TESTIMONIALS", href: "#testimonials" },
    { name: "CONTACT", href: "#contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const refs = useRef({});
  const [indicatorProps, setIndicatorProps] = useState({ width: 0, x: 0 });

  // Animated indicator (desktop only)
  useEffect(() => {
    const el = refs.current[active];
    if (el) {
      const { offsetWidth, offsetLeft } = el;
      setIndicatorProps({ width: offsetWidth, x: offsetLeft });
    }
  }, [active]);

  return (
    <>
      {/* ───────────────────────────── MOBILE BUTTON ───────────────────────────── */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 right-4 z-[60] w-12 h-12 bg-black/80 border border-white/20 rounded-xl backdrop-blur-lg flex items-center justify-center"
      >
        <motion.div
          animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
          className="w-6 h-[2px] bg-white rounded-full relative"
        >
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="absolute top-[-8px] left-0 w-6 h-[2px] bg-white rounded-full"
          />
          <motion.span
            animate={
              isOpen ? { rotate: -90, top: 0 } : { rotate: 0, top: 8 }
            }
            className="absolute top-[8px] left-0 w-6 h-[2px] bg-white rounded-full"
          />
        </motion.div>
      </button>

      {/* ───────────────────────────── DESKTOP NAV ───────────────────────────── */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 min-w-[40%] backdrop-blur-xl bg-black rounded-full border border-white/20 shadow-lg z-50 px-6 py-2 hidden md:flex items-center justify-center">
        {/* Logo */}
        <div className="flex items-center gap-2 select-none pr-4 border-r border-white/20 py-2">
          <a className="text-xl font-bold font-playfair text-orange-200 tracking-wide" href="/">
            Savoria
          </a>
        </div>

        {/* Navigation Items */}
        <ul className="flex items-center flex-1 gap-6 relative">
          {/* Animated indicator */}
          <motion.div
            className="absolute top-[-1/2] -translate-y-1/2 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full backdrop-blur-lg"
            layout
            animate={indicatorProps}
            transition={{ type: "spring", stiffness: 250, damping: 22 }}
          />

          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                ref={(el) => (refs.current[item.name] = el)}
                onClick={() => setActive(item.name)}
                className={cn(
                  "relative z-10 px-3 py-1 text-white font-medium transition-opacity cursor-pointer",
                  active === item.name
                    ? "opacity-100"
                    : "opacity-70 hover:opacity-100"
                )}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ───────────────────────────── MOBILE SLIDE-IN NAV ───────────────────────────── */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 130, damping: 16 }}
        className="fixed top-0 right-0 h-full w-[75%] bg-black/90 backdrop-blur-xl z-[55] p-10 flex flex-col gap-8 md:hidden"
      >
        {/* Mobile Logo */}
        <div className="flex items-center gap-2 mb-6">
          <h1 className="text-2xl font-playfair text-orange-200 tracking-wide">
            Savoria
          </h1>
        </div>

        {/* Mobile Navigation Links */}
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => {
              document
                .querySelector(item.href)
                ?.scrollIntoView({ behavior: "smooth" });
              setActive(item.name);
              setIsOpen(false);
            }}
            className="text-white text-xl font-medium mb-2 text-left tracking-wide hover:opacity-70"
          >
            {item.name}
          </button>
        ))}
      </motion.div>
    </>
  );
}
