export default function Footer() {
  return (
    <footer className="w-full bg-white px-8 py-24 md:px-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-14">
          <section>
            <h3 className="font-montserrat text-[13px] font-semibold uppercase tracking-[0.22em] text-[#1f1f1f]">
              Marketplace
            </h3>
            <ul className="mt-5 space-y-2.5 font-poppins text-[12px] text-[#636363]">
              <li>Shopee</li>
              <li>Tiktokshop</li>
              <li>Lazada</li>
              <li>Zalora</li>
              <li>Tokopedia</li>
              <li>Russ Kids Shopee</li>
              <li>Russ Kids Tiktokshop</li>
              <li>Russ Indonesia</li>
            </ul>
          </section>

          <section>
            <h3 className="font-montserrat text-[13px] font-semibold uppercase tracking-[0.22em] text-[#1f1f1f]">
              Flagship Store
            </h3>
            <ul className="mt-5 space-y-2.5 font-poppins text-[12px] text-[#636363]">
              <li>Bandung | Jl. Sultan Agung no 27</li>
              <li>Bandung | Jl. Ir. H. Djuanda no 125</li>
              <li>Bekasi | Jl. Galaxy Raya B12</li>
              <li>Bogor | Bogor Trade Mall, GF</li>
              <li>Serang | Jl. KH. Wahid 05</li>
              <li>Tasik | Jl. Dr. Sukardjo no 61</li>
              <li>Garut | Jl. Cikuray no 38</li>
              <li>Yogyakarta | Jl. Cendrawasih no 27A</li>
              <li>Makassar | Jl. Boulevard no 10</li>
              <li>Medan | Jl. Dr. Mansyur no 125</li>
              <li>Jakarta | Plaza Blok M, 4F</li>
              <li>Malang | Mall Olympic Mall, 2F</li>
              <li>Surabaya | Royal Plaza Mall, UG</li>
            </ul>
          </section>

          <section>
            <h3 className="font-montserrat text-[13px] font-semibold uppercase tracking-[0.22em] text-[#1f1f1f]">
              Layanan Pengaduan Konsumen
            </h3>
            <div className="mt-5 space-y-4 font-poppins text-[12px] leading-[1.6] text-[#636363]">
              <p>Phone : +62 8111 111 9328</p>
              <p>Email : russofficial28@gmail.com</p>
              <p>
                Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga
                Kementerian Perdagangan RI0853-1111-1010
              </p>
            </div>
          </section>
        </div>

        <section className="mt-12 max-w-md lg:mt-14 lg:max-w-lg">
          <h3 className="font-montserrat text-[13px] font-semibold uppercase tracking-[0.22em] text-[#1f1f1f]">
            Join Russ Community
          </h3>
          <form className="mt-4" action="#" method="post">
            <label htmlFor="email" className="sr-only">
              Enter your email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="w-full border border-[#dfdfdf] bg-transparent px-4 py-2.5 font-poppins text-[12px] text-[#444] placeholder:text-[#8f8f8f] focus:border-[#1f1f1f] focus:outline-none"
            />
            <button
              type="submit"
              className="mt-4 bg-[#1b1b1f] px-7 py-2.5 font-montserrat text-[12px] font-semibold uppercase tracking-[0.24em] text-white transition-colors hover:bg-black"
            >
              Subscribe
            </button>
          </form>
        </section>

        <div className="mt-14 flex flex-col gap-5 font-montserrat text-[11px] uppercase tracking-[0.22em] text-[#686868]">
          <button type="button" className="w-fit">
            English
          </button>
          <p className="font-semibold text-[#303030]">
            © Russ & Co | Proud To Be
          </p>
        </div>
      </div>
    </footer>
  );
}
