import { Search, ShoppingBag, CircleUserRound } from "lucide-react";

export default function Navbar() {
  return (
    <section className="w-full flex flex-col overflow-x-hidden">
      {/* top 1 */}
      <div className="w-full bg-[#7eb7c4] h-9 items-center justify-center flex gap-4">
        <p className="text-white text-center text-sm font-inter">
          Wahyu Enggar Jati
        </p>
      </div>
      {/* top 2 */}
      <div className="bg-[#278236] w-full h-16 flex items-center justify-between px-7">
        <h1 className="text-white text-2xl font-bold font-montserrat ml-4">
          Holdme
        </h1>
        {/* Menu Tengah */}
        <div>
          <ul className="flex gap-5 font-inter text-sm text-white">
            <li>Home</li>
            <li>Product</li>
            <li>Blog</li>
            <li>About us</li>
          </ul>
        </div>

        {/* End */}
        <ul className="flex gap-2">
          <button className="p-2" aria-label="CircleUserRound">
            <CircleUserRound color="white" className="w-6 h-6 text-gray-700" />
          </button>
          <button className="p-2" aria-label="Search">
            <Search color="white" className="w-6 h-6 text-gray-700" />
          </button>
          <button className="p-2" aria-label="ShoppingBag">
            <ShoppingBag color="white" className="w-6 h-6 text-gray-700" />
          </button>
        </ul>
      </div>
    </section>
  );
}
