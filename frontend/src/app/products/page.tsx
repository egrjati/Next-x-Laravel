"use client";
import { useState, useEffect } from "react";
import { LayoutGrid, Grid3X3, ChevronDown, Square } from "lucide-react";

export default function Products() {
  const [view, setView] = useState<"grid2" | "grid4">("grid4");
  const [activeFilter, setActiveFilter] = useState("kaos");
  const [sortOpen, setSortOpen] = useState(false);
  const [activeSort, setActiveSort] = useState("Produk Terlaris");

  useEffect(() => {
    document.body.style.overflow = sortOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [sortOpen]);

  const sortOptions = [
    "Unggulan",
    "Paling Relevan",
    "Produk Terlaris",
    "Berdasarkan Abjad, A-Z",
    "Berdasarkan Abjad, Z-A",
    "Berdasarkan Harga, Rendah ke Tinggi",
    "Berdasarkan Harga, Tinggi ke Rendah",
    "Berdasarkan Tanggal, Lama ke Baru",
  ];

  return (
    <section className="w-full min-h-screen flex flex-col bg-white">
      <div className="w-full flex py-10 flex-col items-center">
        <h2 className="text-lg md:text-xl font-montserrat font-semibold tracking-[0.24em] text-center uppercase text-[#111]">
          HOLDME X KALCER ABIZZ
        </h2>
      </div>

      {/* filter */}
      <section>
        {/* filter bar */}
        <div className=" w-full border-b border-t border-gray-200 flex items-center justify-between">
          {/* komponen item */}
          <div className="order-1 lg:hidden flex items-center justify-center px-8 py-4 border-r border-gray-200">
            <p className="text-[#6a6a6a] text-center">Filter</p>
          </div>

          {/* view box */}
          <div className="order-3 lg:order-first px-8 py-4 border-r border-gray-200 flex items-center gap-4">
            <button
              aria-label="Grid view"
              onClick={() => setView("grid2")}
              className="cursor-pointer"
            >
              <LayoutGrid
                className={`h-5 w-5 transition-colors ${view === "grid2" ? "text-black" : "text-slate-400"}`}
                strokeWidth={2}
              />
            </button>
            <button
              aria-label="Large grid view"
              onClick={() => setView("grid4")}
              className="hidden lg:block cursor-pointer"
            >
              <Grid3X3
                className={`h-5 w-5 transition-colors ${view === "grid4" ? "text-black" : "text-slate-400"}`}
                strokeWidth={2}
              />
            </button>
            <button
              aria-label="Single view"
              onClick={() => setView("grid4")}
              className="lg:hidden cursor-pointer"
            >
              <Square
                className={`h-5 w-5 transition-colors ${view === "grid4" ? "text-black" : "text-slate-400"}`}
                strokeWidth={2}
              />
            </button>
          </div>

          {/* sort */}
          <div className="order-2 lg:order-last relative">
            <button
              onClick={() => setSortOpen((v) => !v)}
              className="px-10 py-4 border-r lg:border-l border-gray-200 flex items-center gap-2"
            >
              <p className="text-sm font-semibold font-montserrat text-[#6a6a6a] tracking-widest uppercase">
                Sort
              </p>
              <ChevronDown
                className={`w-4 h-4 text-[#6a6a6a] transition-transform duration-200 ${sortOpen ? "rotate-180" : ""}`}
                strokeWidth={3}
              />
            </button>

            {sortOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setSortOpen(false)}
                />
                <div className="absolute right-0 top-full z-20 bg-white border border-gray-200 shadow-md min-w-[280px] py-2">
                  {sortOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => { setActiveSort(option); setSortOpen(false); }}
                      className={`w-full text-right px-8 py-3 text-xs font-montserrat tracking-[0.14em] uppercase transition-colors hover:text-black ${
                        activeSort === option ? "text-black font-bold" : "text-[#6a6a6a] font-medium"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Sidebar filter x Products */}
        <div className="w-full flex">
          {/* sidebar filter */}
          <div className="hidden lg:block w-[220px] shrink-0 border-r border-gray-200 sticky top-0 self-start max-h-screen overflow-y-auto">
            <div className="py-10 px-8">
              <h3 className="text-xs font-bold font-montserrat text-black tracking-[0.18em] uppercase mb-4">
                Koleksi
              </h3>
              <a
                href="#"
                className="block py-1.5 text-sm font-montserrat text-[#6a6a6a] hover:text-black transition-colors"
                onClick={() => setActiveFilter("sale")}
              >
                Clearruss Sale!
              </a>
              <ul className="mt-1 text-sm font-montserrat">
                {[
                  { id: "kaos", label: "Kaos" },
                  { id: "kemeja", label: "Kemeja" },
                  { id: "celana", label: "Celana" },
                  { id: "celana-pendek", label: "Celana pendek" },
                  { id: "hoodie", label: "Hoodie" },
                  { id: "crewneck", label: "Crewneck" },
                  { id: "jaket", label: "Jaket" },
                  { id: "kardigan", label: "Kardigan" },
                  { id: "topi", label: "Topi" },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveFilter(item.id)}
                      className={`flex items-center gap-2 py-1.5 w-full text-left transition-all duration-200 ${
                        activeFilter === item.id
                          ? "text-black font-semibold pl-1"
                          : "text-[#6a6a6a] hover:text-black pl-0"
                      }`}
                    >
                      <span className={`text-base leading-none transition-opacity ${activeFilter === item.id ? "opacity-100" : "opacity-0"}`}>
                        •
                      </span>
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* products */}
          <div className={`grid gap-x-5 gap-y-10 p-8 w-full ${view === "grid2" ? "grid-cols-2 md:grid-cols-3" : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}`}>
            {[
              { name: "Tshirt Oversized Cotton 16s OE Baller Black", price: "149.000", original: "250.000" },
              { name: "Kaos Russ Luffy White", price: "104.900", original: "195.000" },
              { name: "Kaos Russ Basisk Hitam", price: "104.900", original: "190.000" },
              { name: "Kaos Russ Memisahkan Tentara", price: "114.900", original: "250.000" },
              { name: "Kaos Russ Seoul Oversize Blue", price: "129.900", original: "220.000" },
              { name: "Kaos Russ Graphic Vintage Brown", price: "109.900", original: "200.000" },
              { name: "Tshirt Boxy Fit Heavy Cotton White", price: "119.900", original: "230.000" },
              { name: "Kaos Russ Basic Essential Black", price: "99.900", original: "180.000" },
              { name: "Tshirt Oversize Russ Classic Green", price: "114.900", original: "210.000" },
              { name: "Kaos Russ Collaboration Series Cream", price: "124.900", original: "240.000" },
            ].map((product, i) => (
              <article key={i} className="w-full flex flex-col cursor-pointer group">
                <div className="w-full aspect-square bg-gray-100 overflow-hidden" />
                <div className="mt-4 flex flex-col">
                  <h3 className="text-xs md:text-sm font-montserrat font-semibold text-black uppercase tracking-wide leading-snug">
                    {product.name}
                  </h3>
                  <div className="flex flex-row items-center gap-3 mt-2">
                    <span className="text-sm md:text-base font-bold text-[#ff5252]">{product.price}</span>
                    <span className="text-sm text-gray-400 line-through">{product.original}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* end */}
        </div>
        
      </section>
    </section>
  );
}
