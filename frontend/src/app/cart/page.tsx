export default function ChartPage() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-white px-6">
      <h1 className="text-sm font-montserrat font-semibold tracking-[0.22em] uppercase text-black">
        Your Cart Is Empty
      </h1>
      <p className="mt-3 text-sm font-poppins text-gray-500">
        Spend 200.000 more and get free shipping!
      </p>
      <a
        href="/products"
        className="relative mt-8 border border-black text-[11px] font-montserrat font-semibold tracking-[0.22em] uppercase py-4 px-16 overflow-hidden group"
      >
        <span className="absolute inset-0 bg-black translate-x-0 group-hover:translate-x-full transition-transform duration-300 ease-in-out" />
        <span className="relative z-10 text-white group-hover:text-black transition-colors duration-150 delay-100">
          Shop Our Products
        </span>
      </a>
    </section>
  );
}
