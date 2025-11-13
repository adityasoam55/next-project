"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // lightweight icon set built into Next.js env

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-20 w-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-white">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide hover:opacity-90 transition"
        >
          My<span className="text-yellow-300">Blog</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium">
          <Link
            href="/"
            className="hover:text-yellow-300 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-yellow-300 transition-colors duration-200"
          >
            About
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none text-white hover:text-yellow-300 transition"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white text-gray-800 shadow-inner transition-all duration-300">
          <div className="flex flex-col space-y-4 px-6 py-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-indigo-500 transition"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-indigo-500 transition"
            >
              About
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
