"use client";
import { useState } from "react";
import { ChevronDown, Menu, Search, ShoppingBag, User, X } from "lucide-react";

const navLinks = [
  { label: "Products", href: "/products" },
  { label: "Collaboration", href: "#" },
  { label: "Man", href: "#" },
  { label: "Woman", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full flex flex-col">
      {/* TOP BAR */}
      <div className="w-full bg-[#2b2b2b] flex justify-center py-3">
        <p className="text-white text-center font-semibold text-[10px] tracking-[0.22em]">
          ENJOY 85% OFF + FREE SHIPPING
        </p>
      </div>

      {/* MAIN NAV ROW */}
      <div className="bg-white w-full px-6 md:px-10 pt-5 pb-4 relative z-40">
        <div className="grid grid-cols-3 items-center">
          {/* LEFT — language */}
          <div className="flex items-center">
            <button className="hidden lg:flex items-center gap-1 text-[10px] font-semibold text-[#6a6a6a] uppercase tracking-[0.18em]">
              <span>Indonesia</span>
              <ChevronDown className="h-3 w-3" />
            </button>
            <button
              aria-label="Open menu"
              className="block lg:hidden"
              onClick={() => setIsOpen(true)}
            >
              <Menu className="h-6 w-6 text-black" />
            </button>
          </div>

          {/* CENTER — logo */}
          <div className="flex justify-center">
            <a href="/" aria-label="Home">
              <img
                src="/asset/icon/holdme.svg"
                alt="Holdme Logo"
                className="h-10 w-10 object-contain"
              />
            </a>
          </div>

          {/* RIGHT — icons */}
          <div className="flex items-center justify-end gap-5 text-[#1c1b1b]">
            <a href="/profile" aria-label="Account">
              <User className="h-5 w-5" strokeWidth={1.5} />
            </a>
            <button aria-label="Search">
              <Search className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <button aria-label="Cart">
              <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden lg:flex justify-center mt-5 border-t border-gray-100 pt-4">
          <ul className="flex gap-10">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[#1c1b1b] text-[11px] font-semibold uppercase tracking-[0.18em] hover:text-gray-500 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-0 left-0 h-screen w-[75%] max-w-xs bg-white z-50 p-6 shadow-lg lg:hidden">
            <button
              onClick={() => setIsOpen(false)}
              className="mb-8"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#1c1b1b] font-semibold text-[13px] uppercase tracking-[0.18em]"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </section>
  );
}
