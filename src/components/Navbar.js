"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Spin as Hamburger } from "hamburger-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <nav className="relative z-50 flex items-center justify-between border-b-2 border-[#a3ff12] bg-[#050505] px-6 py-4 text-[#a3ff12] shadow-lg shadow-[#a3ff12]/10">
      {/* Brand */}
      <Link
        href="/"
        className="text-xl font-bold tracking-wider transition hover:text-white"
      >
        <span className="text-[#a3ff12]">&gt;_</span> ZeroStack Labs
      </Link>

      {/* Hamburger + Dropdown */}
      <div ref={dropdownRef}>
        <Hamburger
          toggled={menuOpen}
          toggle={setMenuOpen}
          color="#a3ff12"
          size={28}
          rounded
          duration={0.4}
        />

        {menuOpen && (
          <div className="absolute right-4 top-16 w-56 rounded-md border border-[#a3ff12] bg-[#0a0a0a] p-3 shadow-xl shadow-[#a3ff12]/10">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="block rounded px-3 py-2 transition hover:bg-[#a3ff12] hover:text-black"
            >
              Home
            </Link>

            <Link
              href="/team"
              onClick={() => setMenuOpen(false)}
              className="block rounded px-3 py-2 transition hover:bg-zs-green hover:text-zs-black"
            >
              Team
            </Link>

            <Link
              href="/projects"
              onClick={() => setMenuOpen(false)}
              className="block rounded px-3 py-2 transition hover:bg-[#a3ff12] hover:text-black"
            >
              Projects
            </Link>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="block rounded px-3 py-2 transition hover:bg-[#a3ff12] hover:text-black"
            >
              About
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
