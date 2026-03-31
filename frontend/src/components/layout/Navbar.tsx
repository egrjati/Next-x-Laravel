import { ChevronDown, Search, ShoppingBag, User } from "lucide-react";

export default function Navbar() {
  return (
    <section className="w-full flex flex-col overflow-x-hidden">
      {/* top 1 */}
      <div className="w-full bg-[#363636] h-10 items-center justify-center flex gap-4 border-b border-gray-300">
        <p className="text-white text-center text-[12px] font-poppins tracking-wider p-2">
          ENJOY 85% OFF + FREE SHIPPING
        </p>
      </div>
      {/* top 2 */}
      <div className="bg-white w-full px-6 md:px-10 py-4 border-b border-gray-200">
        <div className="grid grid-cols-3 items-center">
          <div className="flex items-center text-[10px] font-inter font-medium text-[#6a6a6a]">
            <button
              aria-label="Change language"
              className="flex items-center gap-1 uppercase tracking-[0.24em]"
            >
              <span>Indonesia</span>
              <ChevronDown className="h-4 w-4" strokeWidth={1.8} />
            </button>
          </div>

          <h1 className="text-black text-2xl md:text-3xl font-bold font-stora text-center uppercase tracking-[0.12em]">
            Holdme
          </h1>

          <div className="flex items-center justify-end gap-4 text-black">
            <button aria-label="Account" className="cursor-pointer">
              <User className="h-5 w-5" strokeWidth={2} />
            </button>
            <button aria-label="Search" className="cursor-pointer">
              <Search className="h-5 w-5" strokeWidth={2} />
            </button>
            <button aria-label="Cart" className="cursor-pointer">
              <ShoppingBag className="h-5 w-5" strokeWidth={2} />
            </button>
          </div>
        </div>

        <div className="mt-5 flex justify-center">
          <ul className="flex flex-wrap items-center justify-center gap-6 md:gap-10 font-inter text-sm text-black uppercase tracking-[0.18em]">
            <li>New</li>
            <li>Product</li>
            <li>Blog</li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
