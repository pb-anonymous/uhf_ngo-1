"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Stories", "Events", "Volunteer", "Donate", "Log In"];
  const isButton = (item: string) => ["Donate", "Log In"].includes(item);

  const getHref = (item: string) => {
    switch (item) {
      case "Log In": return "/login";
      case "Donate": return "/donate";
      case "Home": return "/";
      default: return `/${item.toLowerCase()}`;
    }
  };

  // Hide the navbar entirely on login page to avoid clashing with the back button
  if (pathname === "/login") {
    return null;
  }

  // On the home page, start with opacity-0 so the OpeningAnimation can fade it in
  const isHome = pathname === "/";

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-[80px] z-[150] flex items-center justify-between px-6 lg:px-10 transition-colors duration-500 ${
          scrolled ? "bg-[#0B0B0B] border-b border-white/5" : "bg-transparent"
        }`}
      >
        {/* Navbar Logo — circular + text beside it */}
        <Link href="/" className="nav-logo flex items-center gap-4 cursor-pointer relative z-50" style={{ opacity: isHome ? 0 : 1 }}>
          {/* Hamburger Menu Icon (Mobile Only) */}
          <div 
            className="lg:hidden flex flex-col justify-center gap-[5px] mr-2 px-2 py-2 -ml-2"
            onClick={(e) => { e.preventDefault(); setMobileMenuOpen(!mobileMenuOpen); }}
          >
            <span className={`w-6 h-[2px] bg-white block rounded-full transition-transform duration-300 origin-center ${mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
            <span className={`w-6 h-[2px] bg-white block rounded-full transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-[2px] bg-white block rounded-full transition-transform duration-300 origin-center ${mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
          </div>

          {/* Circular logo */}
          <div
            className="w-[62px] h-[62px] rounded-full overflow-hidden flex-shrink-0"
            style={{
              border: "1.5px solid rgba(255, 255, 255, 0.45)",
              boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.08)",
            }}
          >
            <img
              src="/logo-enhanced.png"
              alt="UNITED H.O.P.E FOUNDATION"
              className="w-full h-full object-cover scale-[1.18]"
            />
          </div>

          {/* Text beside logo */}
          <div className="flex flex-col justify-center hidden sm:flex">
            <div className="flex items-baseline gap-0 leading-none mb-[2px]">
              <span className="font-cormorant font-light text-[15px] tracking-[0.18em] text-white/95 uppercase">
                UNITED&nbsp;H.O.P.E&nbsp;FOUNDATION
              </span>
            </div>
          </div>
        </Link>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <Link
              key={item}
              href={getHref(item)}
              className={`nav-link font-inter font-medium text-[11px] tracking-[0.2em] uppercase transition-all duration-300 relative group ${
                item === "Donate"
                  ? "bg-[#FF9A3C] text-[#0B0B0B] border border-[#FF9A3C] px-5 h-[34px] flex items-center rounded-full hover:brightness-110"
                  : isButton(item)
                  ? "border border-white/25 text-white px-5 h-[34px] flex items-center rounded-full hover:bg-white hover:text-black"
                  : "text-white/75 hover:text-white"
              }`}
              style={{ 
                opacity: isHome ? 0 : 1,
                transform: isHome ? "translateY(-6px)" : "translateY(0)" 
              }}
            >
              {item}
              {!isButton(item) && (
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#0B0B0B] z-[140] flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-8 mt-12">
          {navItems.map((item) => (
            <Link
              key={item}
              href={getHref(item)}
              onClick={() => setMobileMenuOpen(false)}
              className={`font-inter font-medium text-[16px] tracking-[0.2em] uppercase transition-all duration-300 ${
                item === "Donate"
                  ? "bg-[#FF9A3C] text-[#0B0B0B] border border-[#FF9A3C] px-8 py-3 rounded-full hover:brightness-110"
                  : isButton(item)
                  ? "border border-white/25 text-white px-8 py-3 rounded-full hover:bg-white hover:text-black"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* Spacer to push page content down so it doesn't collide with the fixed navbar */}
      {!isHome && <div className="h-[80px] w-full shrink-0" />}
    </>
  );
}
