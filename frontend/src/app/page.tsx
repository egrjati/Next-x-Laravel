export default function Home() {
  return (
    <section className="w-full min-h-screen flex flex-col bg-[#f6f0da] overflow-x-hidden">
      <header className="w-full md:h-[475px] bg-[#b48453] mt-[0.5px]"></header>

      <main className="w-full mt-28">
        <h1 className="lg:text-5xl font-bold text-black text-center font-sora">
          No.1 K-Body Care
        </h1>
        <p className="font-poppins text-center text-base text-black mt-5">
          Knock is a leading Korean body care brand that brings K-beauty
          innovation to body care.
        </p>

        {/* 2 kotak berpotongan */}
        <div className="grid grid-cols-2 h-96 mt-28">
          <div className="bg-[#e7cc6f]" />
          <div className="bg-sky-400" />
        </div>
      </main>


      <div className=" mt-28 mb-96"></div>
    </section>
  );
}
