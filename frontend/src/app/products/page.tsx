import { LayoutGrid, Grid3X3, ChevronDown } from "lucide-react";

export default function Products() {
  return (
    <section className="w-full min-h-screen flex flex-col bg-white overflow-x-hidden">
      <div className="w-full flex py-10 flex-col items-center">
        <h2 className="text-xl md:text-xl font-montserrat font-semibold tracking-[0.24em] text-center uppercase text-[#111]">
          HOLDME X KALCER ABIZZ
        </h2>
      </div>

      {/* filter */}
      <div className=" w-full border-b border-t border-gray-200 flex items-center justify-between">
        {/* view box */}
        <div className="px-8 py-4 border-r border-gray-200 flex items-center">
          <button aria-label="Account" className="cursor-pointer">
            <LayoutGrid className="h-6 w-6 text-slate-500" strokeWidth={2} />
          </button>
          <button aria-label="Account" className="cursor-pointer ml-4">
            <Grid3X3 className="h-6 w-6 text-slate-500" strokeWidth={2} />
          </button>
        </div>

        {/* sort */}
        <button className="px-10 py-4 border-l border-gray-200 flex items-center">
          <p className="text-sm font-semibold font-montserrat text-[#6a6a6a] tracking-widest">
            Sort
          </p>
          <span className="text-xs leading-none text-[#6a6a6a] ml-2">
            <ChevronDown className="w-4 h-4" strokeWidth={3} />
          </span>
        </button>
      </div>
    </section>
  );
}
