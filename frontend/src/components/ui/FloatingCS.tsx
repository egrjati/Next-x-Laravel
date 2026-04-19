"use client";
import { useState } from "react";
import { X, MessageCircle, Phone, Mail } from "lucide-react";

const channels = [
  {
    icon: <Phone className="w-4 h-4" />,
    label: "WhatsApp",
    desc: "Chat langsung CS kami",
    href: "https://wa.me/6281234567890",
    bg: "bg-[#25D366]",
  },
  {
    icon: <Mail className="w-4 h-4" />,
    label: "Email",
    desc: "cs@holdme.id",
    href: "mailto:cs@holdme.id",
    bg: "bg-black",
  },
];

export default function FloatingCS() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Channel cards */}
      <div
        className={`flex flex-col gap-2 transition-all duration-300 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Label */}
        <p className="text-right text-[10px] font-montserrat font-semibold tracking-[0.18em] uppercase text-gray-400 mb-1">
          Hubungi Kami
        </p>

        {channels.map((ch) => (
          <a
            key={ch.label}
            href={ch.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white rounded-xl shadow-lg px-4 py-3 hover:shadow-xl transition-shadow group"
          >
            <span className={`${ch.bg} text-white rounded-full w-8 h-8 flex items-center justify-center shrink-0`}>
              {ch.icon}
            </span>
            <div className="flex flex-col">
              <span className="text-xs font-montserrat font-semibold text-black tracking-wide">
                {ch.label}
              </span>
              <span className="text-[10px] font-poppins text-gray-400">
                {ch.desc}
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* FAB button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Customer Service"
        className={`w-13 h-13 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          open ? "bg-gray-900 rotate-90" : "bg-black hover:scale-105"
        }`}
        style={{ width: 52, height: 52 }}
      >
        {open ? (
          <X className="w-5 h-5 text-white" />
        ) : (
          <MessageCircle className="w-5 h-5 text-white" fill="white" />
        )}
      </button>
    </div>
  );
}
