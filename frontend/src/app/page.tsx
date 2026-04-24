import TestimonialSlider from "@/components/ui/TestimonialSlider";

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

      <main className="w-full mt-16 relative px-6">
        {/*   judul */}
        <section className="w-full flex flex-col items-center">
          <h1 className="text-xs font-montserrat text-[#222520] font-medium tracking-[0.22em] uppercase text-center">
            Proud of ME
          </h1>
          <p className="font-montserrat max-w-2xl text-center text-xl md:text-xl font-semibold text-[#222520] mt-3 tracking-[0.12em] uppercase">
            Hot Picks You Don’t Want to Miss
          </p>

          {/* Grid Produk */}
          {(() => {
            const dummyProducts = [
              {
                name: "Sweater Hoodie Fleece Oldskull Misty",
                price: "207.900",
                original: "450.000",
              },
              {
                name: "Jacket Taslan Bone Black",
                price: "239.900",
                original: "450.000",
              },
              {
                name: "Sweater Hoodie Fleece Tinylog Black",
                price: "209.900",
                original: "450.000",
              },
              {
                name: "Pants Long Twill Streach Suspect Long Black",
                price: "159.900",
                original: "350.000",
              },
              {
                name: "Tshirt Oversize Graphic Cream",
                price: "119.900",
                original: "250.000",
              },
              {
                name: "Jacket Varsity Wool Navy Blue",
                price: "299.900",
                original: "550.000",
              },
              {
                name: "Sweater Crewneck Basic Black",
                price: "189.900",
                original: "380.000",
              },
              {
                name: "Shorts Cargo Ripstop Olive",
                price: "139.900",
                original: "280.000",
              },
              {
                name: "Tshirt Boxy Fit White Me Logo",
                price: "99.900",
                original: "200.000",
              },
              {
                name: "Jacket Windbreaker Slate Grey",
                price: "279.900",
                original: "500.000",
              },
              {
                name: "Pants Jogger Fleece Charcoal",
                price: "169.900",
                original: "320.000",
              },
              {
                name: "Hoodie Zip Up Stone Wash",
                price: "229.900",
                original: "420.000",
              },
              {
                name: "Tshirt Graphic Vintage Brown",
                price: "109.900",
                original: "220.000",
              },
              {
                name: "Sweater Knit Stripe Cream",
                price: "199.900",
                original: "400.000",
              },
              {
                name: "Jacket Denim Washed Blue",
                price: "319.900",
                original: "600.000",
              },
              {
                name: "Pants Twill Straight Khaki",
                price: "179.900",
                original: "360.000",
              },
            ];
            return (
              <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 mt-10 px-2">
                {dummyProducts.map((product, i) => (
                  <article
                    key={i}
                    className="flex flex-col cursor-pointer group"
                  >
                    <div className="w-full aspect-square bg-[#f5f5f5]" />
                    <div className="mt-4">
                      <h3 className="text-xs font-montserrat font-semibold uppercase text-black tracking-wide leading-snug">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-sm font-poppins text-red-500">
                          {product.price}
                        </span>
                        <span className="text-xs font-poppins text-gray-400 line-through">
                          {product.original}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            );
          })()}
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
          Collaboration Series
        </h2>

        {/* Grid Collaboration */}
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 mt-10 px-4">
          {[
            { name: "Holdme Kids Tshirt Combed 30s Kids Holdpiderman LS 01 White", price: "129.900", original: "250.000" },
            { name: "Holdme Kids Tshirt Combed 30s Kids Holdpiderman SS 01 Black", price: "109.900", original: "200.000" },
            { name: "Holdme Kids Tshirt Combed 30s Kids Holdpiderman SS 01 White", price: "109.900", original: "200.000" },
            { name: "Holdme Kids Tshirt Combed 30s Kids Holdpiderman SS 03 Black", price: "109.900", original: "200.000" },
            { name: "Holdme Kids Tshirt Combed 30s Kids Holdpiderman LS 02 Black", price: "129.900", original: "250.000" },
            { name: "Holdme Hoodie Fleece Holdpiderman Beyond Amazing Black", price: "199.900", original: "380.000" },
            { name: "Holdme Tshirt Oversize Holdpiderman Web Crawler White", price: "119.900", original: "230.000" },
            { name: "Holdme Tshirt Holdpiderman Not A Killer Cream", price: "109.900", original: "200.000" },
          ].map((product, i) => (
            <article key={i} className="flex flex-col cursor-pointer">
              <div className="w-full aspect-square bg-[#f5f5f5]" />
              <div className="mt-4">
                <h3 className="text-xs font-montserrat font-semibold uppercase text-black tracking-wide leading-snug">
                  {product.name}
                </h3>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-sm font-poppins text-red-500">{product.price}</span>
                  <span className="text-xs font-poppins text-gray-400 line-through">{product.original}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button className="mt-16 bg-black font-semibold font-montserrat text-[13px] tracking-[0.18em] text-white py-3 px-8 hover:bg-gray-800 transition-colors">
          View All Products
        </button>
      </section>

      {/* Testimonial */}
      <TestimonialSlider />
    </section>
  );
}
