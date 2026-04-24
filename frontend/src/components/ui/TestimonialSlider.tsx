"use client";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "Great product! I'm not saying this for compliment — this is my honest review. Quality and design yang beneran bikin bangga. Proud for Hdme.",
    author: "@hdme_everyday",
  },
  {
    quote:
      "Bahan premium, jahitan rapi, dan desain yang timeless. Udah beli lebih dari 5 item dan semuanya nggak pernah mengecewakan. Hdme is the real deal.",
    author: "@stylegang.id",
  },
  {
    quote:
      "Pakai kaos Hdme tuh bikin pede seharian. Fit-nya pas, nggak melar walau udah dicuci berkali-kali. Ini bukan promosi, ini murni pengalaman.",
    author: "@hariankece",
  },
  {
    quote:
      "Packaging rapih, pengiriman cepat, dan produknya melebihi ekspektasi. Kalau nanya rekomen brand lokal, Hdme selalu jadi jawaban pertama gue.",
    author: "@localpride.co",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
        setVisible(true);
      }, 400);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const goTo = (index: number) => {
    if (index === current) return;
    setVisible(false);
    setTimeout(() => {
      setCurrent(index);
      setVisible(true);
    }, 400);
  };

  return (
    <section className="w-[calc(100%+2rem)] -mx-4 bg-black px-5 py-20 flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full flex flex-col items-center">
        <p
          className="text-center text-white font-poppins font-medium text-lg leading-[1.6] transition-all duration-400"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.4s ease, transform 0.4s ease",
          }}
        >
          "{testimonials[current].quote}"
        </p>

        <p
          className="mt-6 text-white/50 text-sm font-poppins tracking-widest"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        >
          {testimonials[current].author}
        </p>

        <div className="mt-12 flex items-center gap-4" aria-label="testimonial indicators">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-3 h-3 bg-white"
                  : "w-3 h-3 border border-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
