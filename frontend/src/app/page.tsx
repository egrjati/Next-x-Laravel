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

      <main className="w-full mt-16 relative ml-6">
        {/* garis kiri */}
        <div className="absolute left-0 top-0 h-[400px] bg-black w-0.5"></div>

        {/* Kanan */}
        <section className="w-full flex flex-col items-center">
          <h1 className="text-lg font-montserrat text-[#222520] font-medium tracking-widest text-center">
            Holdme x Nomitees
          </h1>
          <p className="font-poppins max-w-xl text-center text-base text-[#222520] mt-2">
            Kumpulan artikel rilisan terbatas yang dirancang khusus buat nemenin
            setiap langkah dan cerita lo di jalanan.
          </p>

          {/* Grid Produk */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            <article className="group h-72 w-60 p-3 overflow-hidden">
              <div className="h-full w-full border border-black rounded-lg will-change-transform transition-[border-radius,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rounded-full group-hover:scale-[0.985]"></div>
            </article>
            <article className="group h-72 w-60 p-3 overflow-hidden">
              <div className="h-full w-full border border-black rounded-lg will-change-transform transition-[border-radius,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rounded-full group-hover:scale-[0.985]"></div>
            </article>
            <article className="group h-72 w-60 p-3 overflow-hidden">
              <div className="h-full w-full border border-black rounded-lg will-change-transform transition-[border-radius,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rounded-full group-hover:scale-[0.985]"></div>
            </article>
            <article className="group h-72 w-60 p-3 overflow-hidden">
              <div className="h-full w-full border border-black rounded-lg will-change-transform transition-[border-radius,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rounded-full group-hover:scale-[0.985]"></div>
            </article>
          </div>
          <div className="w-full flex justify-center mt-24 mb-4">
            <button className="bg-black font-semibold font-montserrat text-[13px] tracking-[0.18em] text-white py-3 px-8 hover:bg-gray-800 transition-colors">
              View All Products
            </button>
          </div>
        </section>
      </main>

      <hr className="mt-20 w-full border-0 border-t border-[#dddddd]" />

      {/* Event */}
      <section className="w-full mt-20 py-5 px-4">
        {/* title event */}
        <h2 className="text-sm uppercase font-montserrat text-[#1c1b1b] font-medium tracking-widest text-center">
          Upcoming Events
        </h2>

        <p className="text-sm font-poppins text-[#1c1b1b] mt-8 text-center max-w-lg mx-auto">
          Berlari, tertawa, dan kebersamaan terasa utuh. Kenangan itu tumbuh
          bersama waktu, kami membawa rasa itu ke dalam koleksi.
        </p>

        <p className="text-sm font-poppins text-[#1c1b1b] mt-8 text-center mx-auto underline decoration underline-offset-8">
          Full Chapter Video
        </p>

        {/* Vidio */}
        <div className="w-[calc(100%+2rem)] -mx-4 py-8 bg-black mt-20">
          <div className="w-full h-[32rem] bg-gray-800 flex"></div>
        </div>

        <h2 className="text-xl font-montserrat text-[#222520] font-semibold tracking-widest text-center mt-20">
          EVENT SKENA KALCER 2026
        </h2>

        {/* Item Event */}
        <div className="w-full mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
          {/* kotak 1 */}
          <div className="flex flex-col">
            <div className="w-full h-80 border border-black rounded-lg p-4 relative">
              {/* status */}
              <div className="p-1 bg-gray-300 rounded-2xl w-fit">
                <p className="top-0 text-black text-sm font-poppins">
                  New Color
                </p>
              </div>
              <p className="absolute bottom-2 left-2 text-gray-600 text-xs font-poppins">
                Available now
              </p>
            </div>
            {/* Product Info */}
            <div className="w-full mt-4">
              <h3 className="text-sm font-montserrat font-medium text-black">
                ALSUKH KOKO MOTIF SHIR
              </h3>
              <p className="text-xs font-poppins text-gray-600 mt-1">
                SHORT SLEEVE BROWN
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-lg font-poppins font-reguler text-red-500">
                  129.900
                </span>
                <span className="text-sm font-poppins text-gray-400 line-through">
                  300.000
                </span>
              </div>
            </div>
          </div>

          {/* kotak 2 */}
          <div className="flex flex-col">
            <div className="w-full h-80 border border-black rounded-lg p-4 relative">
              {/* status */}
              <div className="p-1 bg-gray-300 rounded-2xl w-fit">
                <p className="top-0 text-black text-sm font-poppins">
                  New Color
                </p>
              </div>
              <p className="absolute bottom-2 left-2 text-gray-600 text-xs font-poppins">
                Available now
              </p>
            </div>
            {/* Product Info */}
            <div className="w-full mt-4">
              <h3 className="text-sm font-montserrat font-medium text-black">
                ALSUKH KOKO MOTIF SHIR
              </h3>
              <p className="text-xs font-poppins text-gray-600 mt-1">
                SHORT SLEEVE BROWN
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-lg font-poppins font-reguler text-red-500">
                  129.900
                </span>
                <span className="text-sm font-poppins text-gray-400 line-through">
                  300.000
                </span>
              </div>
            </div>
          </div>

          {/* kotak 3 */}
          <div className="flex flex-col">
            <div className="w-full h-80 border border-black rounded-lg p-4 relative">
              {/* status */}
              <div className="p-1 bg-gray-300 rounded-2xl w-fit">
                <p className="top-0 text-black text-sm font-poppins">
                  New Color
                </p>
              </div>
              <p className="absolute bottom-2 left-2 text-gray-600 text-xs font-poppins">
                Available now
              </p>
            </div>
            {/* Product Info */}
            <div className="w-full mt-4">
              <h3 className="text-sm font-montserrat font-medium text-black">
                ALSUKH KOKO MOTIF SHIR
              </h3>
              <p className="text-xs font-poppins text-gray-600 mt-1">
                SHORT SLEEVE BROWN
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-lg font-poppins font-reguler text-red-500">
                  129.900
                </span>
                <span className="text-sm font-poppins text-gray-400 line-through">
                  300.000
                </span>
              </div>
            </div>
          </div>

          {/* kotak 4 */}
          <div className="flex flex-col">
            <div className="w-full h-80 border border-black rounded-lg p-4 relative">
              {/* status */}
              <div className="p-1 bg-gray-300 rounded-2xl w-fit">
                <p className="top-0 text-black text-sm font-poppins">
                  New Color
                </p>
              </div>
              <p className="absolute bottom-2 left-2 text-gray-600 text-xs font-poppins">
                Available now
              </p>
            </div>
            {/* Product Info */}
            <div className="w-full mt-4">
              <h3 className="text-sm font-montserrat font-medium text-black">
                ALSUKH KOKO MOTIF SHIR
              </h3>
              <p className="text-xs font-poppins text-gray-600 mt-1">
                SHORT SLEEVE BROWN
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-lg font-poppins font-reguler text-red-500">
                  129.900
                </span>
                <span className="text-sm font-poppins text-gray-400 line-through">
                  300.000
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center mt-24 mb-4">
          <button className="bg-black font-semibold font-montserrat text-[13px] tracking-[0.18em] text-white py-3 px-8 hover:bg-gray-800 transition-colors">
            View All Products
          </button>
        </div>
        {/* End Promo */}
      </section>

      {/* Banner Colaboration */}
      <section className="w-[calc(100%+2rem)] -mx-4 h-[48rem] bg-black mt-16 mb-20"></section>
      <section className="w-full mt-8 mb-28 flex flex-col items-center">
        <h2 className="text-xl md:text-xl font-montserrat font-semibold tracking-[0.24em] text-center uppercase text-[#111]">
          HOLDME X TOY STORY
        </h2>
        <button className="mt-8 bg-black font-semibold font-montserrat text-[13px] tracking-[0.18em] text-white py-3 px-8 hover:bg-gray-800 transition-colors">
          View All Products
        </button>
      </section>

      {/* Testimonial */}
      <section className="w-[calc(100%+2rem)] -mx-4 bg-black px-5 py-20 flex flex-col items-center justify-center">
        <p className="max-w-2xl text-center text-white font-poppins font-medium text-lg leading-[1.6]">
          "Great Product! Iam not saying for compliment, this my honest review.
          Proud for Russ."
        </p>

        <div
          className="mt-20 flex items-center gap-4"
          aria-label="testimonial indicators"
        >
          <span className="w-3 h-3 rounded-full border border-white/40"></span>
          <span className="w-3 h-3 rounded-full bg-white"></span>
          <span className="w-3 h-3 rounded-full border border-white/40"></span>
        </div>
      </section>
    </section>
  );
}
