import { Search, ShoppingBag, CircleUserRound } from "lucide-react";

export default function Navbar() {
  return (
    <section className="w-full flex flex-col overflow-x-hidden">
      {/* top 1 */}
      <div className="w-full bg-[#ffffff] h-9 items-center justify-center flex gap-4 border-b border-gray-300">
        <p className="text-black text-center text-sm font-inter">
          No.1 K-Accesorice Brand in East Java
        </p>
      </div>
      {/* top 2 */}
      <div className="bg-white w-full h-16 flex items-center justify-between px-10">
        <h1 className="text-black text-3xl font-bold font-stora">
          Holdme
        </h1>
        {/* Menu Tengah */}
        <div>
          <ul className="flex gap-5 font-inter text-sm text-black">
            <li>New</li>
            <li>Product</li>
            <li>Blog</li>
            <li>About us</li>
          </ul>
        </div>

        {/* End */}
        <ul className="flex gap-2">
          <button className="p-2" aria-label="CircleUserRound">
            <CircleUserRound color="black" className="w-6 h-6 text-gray-700" />
          </button>
          <button className="p-2" aria-label="Search">
            <Search color="black" className="w-6 h-6 text-gray-700" />
          </button>
          <button className="p-2" aria-label="ShoppingBag">
            <ShoppingBag color="black" className="w-6 h-6 text-gray-700" />
          </button>
        </ul>
      </div>
    </section>
  );
}
