"use client";
import { useState } from "react";
import { ChevronDown, Menu, Search, ShoppingBag, User, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full flex flex-col">
      {/* TOP BAR */}
      <div className="w-full bg-[#363636] flex justify-center">
        <p className="text-white text-center font-semibold text-[10px] tracking-[0.18em] p-3">
          ENJOY 85% OFF + FREE SHIPPING
        </p>
      </div>

      {/* NAVBAR */}
      <div className="bg-white w-full px-6 md:px-10 py-6 border-b border-gray-200 relative z-40">
        <div className="grid grid-cols-3 items-center">
          {/* LEFT */}
          <div className="flex items-center">
            {/* MOBILE MENU BUTTON */}
            <button
              aria-label="Open menu"
              className="block lg:hidden"
              onClick={() => setIsOpen(true)}
            >
              <Menu className="h-6 w-6 text-black" />
            </button>

            {/* DESKTOP LANGUAGE */}
            <div className="hidden lg:flex items-center text-[10px] font-semibold text-[#6a6a6a]">
              <button className="flex items-center gap-1 uppercase tracking-[0.18em]">
                <span>Indonesia</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* CENTER LOGO */}
          <h1 className="text-black text-xl md:text-2xl font-semibold text-center uppercase tracking-[0.12em]">
            <a href="/">Holdme</a>
          </h1>

          {/* RIGHT ICONS */}
          <div className="flex items-center justify-end gap-5 text-slate-800">
            <button aria-label="Account">
              <User className="h-6 w-6" />
            </button>
            <button aria-label="Search">
              <Search className="h-6 w-6" />
            </button>
            <button aria-label="Cart">
              <ShoppingBag className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex mt-5 justify-center">
          <ul className="text-[#1c1b1b] flex gap-9 font-semibold text-[12px] uppercase tracking-[0.18em]">
            <li>Website Exclusive</li>
            <li>New</li>
            <li>
              <a href="/products">Product</a>
            </li>
            <li>Blog</li>
            <li>About Us</li>
          </ul>
        </div>
      </div>

      {/* 🔥 MOBILE MENU */}
      {isOpen && (
        <>
          {/* OVERLAY */}
          <div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* SIDEBAR MENU */}
          <div className="fixed top-0 left-0 h-screen w-[75%] max-w-xs bg-white z-50 p-6 shadow-lg lg:hidden">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setIsOpen(false)}
              className="mb-6"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>

            {/* MENU LIST */}
            <ul className="flex flex-col gap-6 font-semibold text-[14px] uppercase tracking-[0.18em]">
              <li>Website Exclusive</li>
              <li>New</li>
              <li>
                <a href="/products">Product</a>
              </li>
              <li>Blog</li>
              <li>About Us</li>
            </ul>
          </div>
        </>
      )}
    </section>
  );
}
