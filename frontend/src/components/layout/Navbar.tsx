import { ChevronDown, Search, ShoppingBag, User } from "lucide-react";

export default function Navbar() {
  return (
    <section className="w-full flex flex-col overflow-x-hidden">
      {/* top 1 */}
      <div className="w-full bg-[#363636] h-10 items-center justify-center flex gap-4 border-b border-gray-300">
        <p className="text-white text-center font-bold text-[10px] font-poppins tracking-widest p-2">
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

          <h1 className="text-black text-lg md:text-3xl font-semibold font-poppins text-center uppercase tracking-[0.12em]">
            Holdme
          </h1>

          <div className="flex items-center justify-end gap-5 text-slate-800">
            <button aria-label="Account" className="cursor-pointer">
              <User className="h-6 w-6" strokeWidth={2} />
            </button>
            <button aria-label="Search" className="cursor-pointer">
              <Search className="h-6 w-6" strokeWidth={2} />
            </button>
            <button aria-label="Cart" className="cursor-pointer">
              <ShoppingBag className="h-6 w-6" strokeWidth={2} />
            </button>
          </div>
        </div>

        <div className="mt-5 flex justify-center">
          <ul className="flex flex-wrap items-center justify-center gap-5 md:gap-9 font-poppins text-sm text-black uppercase tracking-[0.18em]">
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
