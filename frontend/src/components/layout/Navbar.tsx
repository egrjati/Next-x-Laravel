"use client";
import { useState } from "react";
import { ChevronDown, Menu, Search, User, X } from "lucide-react";

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
          <div className="flex items-center justify-end gap-5 md:gap-7 text-[#1c1b1b]">
            <a href="#" aria-label="Search">
              <Search className="h-6 w-6" strokeWidth={1.5} />
            </a>

            <a href="/cart" aria-label="Cart">
              <svg
                width="24"
                height="24"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.75 21C19.5784 21 20.25 20.3284 20.25 19.5C20.25 18.6716 19.5784 18 18.75 18C17.9216 18 17.25 18.6716 17.25 19.5C17.25 20.3284 17.9216 21 18.75 21Z"
                  fill="#121314"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.75 18.75C18.3358 18.75 18 19.0858 18 19.5C18 19.9142 18.3358 20.25 18.75 20.25C19.1642 20.25 19.5 19.9142 19.5 19.5C19.5 19.0858 19.1642 18.75 18.75 18.75ZM16.5 19.5C16.5 18.2574 17.5074 17.25 18.75 17.25C19.9926 17.25 21 18.2574 21 19.5C21 20.7426 19.9926 21.75 18.75 21.75C17.5074 21.75 16.5 20.7426 16.5 19.5Z"
                  fill="#121314"
                />
                <path
                  d="M8.75 21C9.57843 21 10.25 20.3284 10.25 19.5C10.25 18.6716 9.57843 18 8.75 18C7.92157 18 7.25 18.6716 7.25 19.5C7.25 20.3284 7.92157 21 8.75 21Z"
                  fill="#121314"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.75 18.75C8.33579 18.75 8 19.0858 8 19.5C8 19.9142 8.33579 20.25 8.75 20.25C9.16421 20.25 9.5 19.9142 9.5 19.5C9.5 19.0858 9.16421 18.75 8.75 18.75ZM6.5 19.5C6.5 18.2574 7.50736 17.25 8.75 17.25C9.99264 17.25 11 18.2574 11 19.5C11 20.7426 9.99264 21.75 8.75 21.75C7.50736 21.75 6.5 20.7426 6.5 19.5Z"
                  fill="#121314"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.5 1C0.5 0.585786 0.835786 0.25 1.25 0.25C3.21839 0.25 4.30306 1.34155 4.76124 2.25H21.25C21.4724 2.25 21.6833 2.3487 21.8258 2.51944C21.9683 2.69018 22.0277 2.91536 21.9879 3.13416L19.9879 14.1342C19.9231 14.4908 19.6125 14.75 19.25 14.75H6.25C5.88754 14.75 5.57694 14.4908 5.5121 14.1342L3.51716 3.16199C3.40331 2.74877 2.81536 1.75 1.25 1.75C0.835786 1.75 0.5 1.41421 0.5 1ZM5.14866 3.75L6.87593 13.25H18.6241L20.3513 3.75H5.14866Z"
                  fill="#121314"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.89869 15.1411C2.64118 15.3359 2.5 15.6065 2.5 16C2.5 16.3935 2.64118 16.6641 2.89869 16.8589C3.18322 17.0741 3.68492 17.25 4.48077 17.25H18.75C19.1642 17.25 19.5 17.5858 19.5 18C19.5 18.4142 19.1642 18.75 18.75 18.75H4.48077C3.49231 18.75 2.62863 18.5353 1.99385 18.0552C1.33205 17.5547 1 16.8253 1 16C1 15.1747 1.33205 14.4453 1.99385 13.9448C2.62863 13.4647 3.49231 13.25 4.48077 13.25H19.25C19.6642 13.25 20 13.5858 20 14C20 14.4142 19.6642 14.75 19.25 14.75H4.48077C3.68492 14.75 3.18322 14.9259 2.89869 15.1411Z"
                  fill="#121314"
                />
              </svg>
            </a>

            <a href="/profile" aria-label="Account">
              <User className="h-6 w-6" strokeWidth={1.5} />
            </a>
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
