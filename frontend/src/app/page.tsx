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

        {/* judul */}
        <div className="w-full flex flex-col items-center">
          <h1 className="lg:text-4xl font-bold text-[#222520] text-center font-sora">
            The Articles
          </h1>
          <p className="font-poppins max-w-xl text-center text-base text-[#222520] mt-5">
            Kumpulan artikel rilisan terbatas yang dirancang khusus buat nemenin
            setiap langkah dan cerita lo di jalanan.
          </p>
        </div>
      </main>

      <div className=" mt-28 mb-96"></div>
    </section>
  );
}
