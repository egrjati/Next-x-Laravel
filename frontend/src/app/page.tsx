export default function Home() {
  return (
    <section className="w-full min-h-screen flex flex-col bg-white overflow-x-hidden">
      <header className="w-full md:h-[475px]">
        <img
          src="/asset/img/Hero Section.svg"
          alt="Hero Banner"
          className="w-full h-full object-cover"
        />
      </header>

      <main className="w-full mt-28 relative ml-6">
        {/* garis kiri */}
        <div className="absolute left-0 top-0 h-screen bg-black w-0.5"></div>

        {/* Kanan */}
        <section className="w-full flex flex-col items-center">
          <h1 className="lg:text-4xl font-bold text-[#222520] text-center font-sora">
            The Articles
          </h1>
          <p className="font-poppins max-w-xl text-center text-base text-[#222520] mt-5">
            Kumpulan artikel rilisan terbatas yang dirancang khusus buat nemenin
            setiap langkah dan cerita lo di jalanan.
          </p>

          {/* Grid Produk */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            <article className="group h-72 w-56 p-3 overflow-hidden">
              <div className="h-full w-full border border-black rounded-lg will-change-transform transition-[border-radius,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rounded-full group-hover:scale-[0.985]"></div>
            </article>
            <article className="group h-72 w-56 p-3 overflow-hidden">
              <div className="h-full w-full border border-black rounded-lg will-change-transform transition-[border-radius,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rounded-full group-hover:scale-[0.985]"></div>
            </article>
            <article className="group h-72 w-56 p-3 overflow-hidden">
              <div className="h-full w-full border border-black rounded-lg will-change-transform transition-[border-radius,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rounded-full group-hover:scale-[0.985]"></div>
            </article>
            <article className="group h-72 w-56 p-3 overflow-hidden">
              <div className="h-full w-full border border-black rounded-lg will-change-transform transition-[border-radius,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rounded-full group-hover:scale-[0.985]"></div>
            </article>
          </div>

          {/* Promo */}
          <div>

          </div>
          
        </section>
      </main>
    </section>
  );
}
