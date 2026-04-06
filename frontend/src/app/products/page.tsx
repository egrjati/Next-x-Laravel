import { LayoutGrid, Grid3X3, ChevronDown, Square } from "lucide-react";

export default function Products() {
  return (
    <section className="w-full min-h-screen flex flex-col bg-white overflow-x-hidden">
      <div className="w-full flex py-10 flex-col items-center">
        <h2 className="text-lg md:text-xl font-montserrat font-semibold tracking-[0.24em] text-center uppercase text-[#111]">
          HOLDME X KALCER ABIZZ
        </h2>
      </div>

      {/* filter */}
      <section>
        <div className=" w-full border-b border-t border-gray-200 flex items-center justify-between">
          {/* komponen item */}
          <div className="order-1 lg:hidden flex items-center justify-center px-8 py-4 border-r border-gray-200">
            <p className="text-[#6a6a6a] text-center">Filter</p>
          </div>

          {/* view box */}
          <div className="order-3 lg:order-first px-8 py-4 border-r border-gray-200 flex items-center">
            <button aria-label="Account" className="cursor-pointer">
              <LayoutGrid className="h-6 w-6 text-slate-500" strokeWidth={2} />
            </button>
            <button
              aria-label="Account"
              className="hidden lg:block cursor-pointer ml-4"
            >
              <Grid3X3 className="h-6 w-6 text-slate-500" strokeWidth={2} />
            </button>
            <button
              aria-label="Account"
              className="lg:hidden cursor-pointer ml-4"
            >
              <Square className="h-6 w-6 text-slate-500" strokeWidth={2} />
            </button>
          </div>

          {/* sort */}
          <button className="order-2 lg:order-last px-10 py-4 border-r lg:border-l border-gray-200 flex items-center">
            <p className="text-sm font-semibold font-montserrat text-[#6a6a6a] tracking-widest">
              Sort
            </p>
            <span className="text-xs leading-none text-[#6a6a6a] ml-2">
              <ChevronDown className="w-4 h-4" strokeWidth={3} />
            </span>
          </button>
        </div>

        {/* Sidebar filter x Products */}
        <div className="w-full flex">
          {/* sidebar filter */}
          <div className="hidden lg:block w-[300px] border-r border-gray-200">
            <div className="py-12 ml-10 ">
              <h3 className="text-sm font-semibold font-montserrat text-black tracking-widest">
                COLLECTIONS
              </h3>

              {/* text-center diletakkan di ul atau li agar isinya ke tengah */}
              <ul className="mt-2 text-[#6a6a6a] text-sm font-montserrat tracking-wide font-medium">
                {/* 1 */}
                <li>
                  <a href="" className="block py-2 hover:text-black max-w-24">
                    T-shirt
                  </a>
                </li>
                {/* 2 */}
                <li>
                  <a href="" className="block py-2 hover:text-black max-w-24">
                    Shirt
                  </a>
                </li>
                {/* 3 */}
                <li>
                  <a href="" className="block py-2 hover:text-black max-w-24">
                    Short Pants
                  </a>
                </li>
                {/* 4 */}
                <li>
                  <a href="" className="block py-2">
                    Hoodie
                  </a>
                </li>
                {/* 5 */}
                <li>
                  <a href="" className="block py-2">
                    Crewneck
                  </a>
                </li>
                {/* 6 */}
                <li>
                  <a href="" className="block py-2">
                    Jacket
                  </a>
                </li>
                {/* 7 */}
                <li>
                  <a href="" className="block py-2">
                    Cardigan
                  </a>
                </li>
                {/* 8 */}
                <li>
                  <a href="" className="block py-2">
                    Hat
                  </a>
                </li>
                {/* 9 */}
                <li>
                  <a href="" className="block py-2">
                    Sandal
                  </a>
                </li>
                {/* 10 */}
                <li>
                  <a href="" className="block py-2">
                    Shoe
                  </a>
                </li>
                {/* 11 */}
                <li>
                  <a href="" className="block py-2">
                    Belt
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* products */}
          <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8 w-full">
            {/* item 1 */}
            <div className="w-40 h-60 lg:w-52 lg:h-64 bg-gray-100 p-4">
              <img
                src="/placeholder.svg"
                alt="Product"
                className="w-full h-auto"
              />
              <h3 className="text-lg font-semibold mt-4">Product Name</h3>
              <p className="text-gray-500 mt-2">$19.99</p>
            </div>
            {/* item 2 */}
            <div className="w-40 h-60 lg:w-52 lg:h-64 bg-gray-100 p-4">
              <img
                src="/placeholder.svg"
                alt="Product"
                className="w-full h-auto"
              />
              <h3 className="text-lg font-semibold mt-4">Product Name</h3>
              <p className="text-gray-500 mt-2">$19.99</p>
            </div>
            {/* item 3 */}
            <div className="w-40 h-60 lg:w-52 lg:h-64 bg-gray-100 p-4">
              <img
                src="/placeholder.svg"
                alt="Product"
                className="w-full h-auto"
              />
              <h3 className="text-lg font-semibold mt-4">Product Name</h3>
              <p className="text-gray-500 mt-2">$19.99</p>
            </div>
            {/* item 4 */}
            <div className="w-40 h-60 lg:w-52 lg:h-64 bg-gray-100 p-4">
              <img
                src="/placeholder.svg"
                alt="Product"
                className="w-full h-auto"
              />
              <h3 className="text-lg font-semibold mt-4">Product Name</h3>
              <p className="text-gray-500 mt-2">$19.99</p>
            </div>
          </div>

          {/* end */}
        </div>

        {/* end */}
      </section>
    </section>
  );
}
