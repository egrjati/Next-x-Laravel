export default function Profile() {
  const user = {
    name: "Egrjati",
    email: "jatibelive@gmail.com",
    joined: "Januari 2024",
    avatar: null,
  };

  const menuItems = [
    { label: "Pesanan Saya", desc: "Lihat status & riwayat pesanan", href: "#" },
    { label: "Alamat Pengiriman", desc: "Kelola alamat tersimpan", href: "#" },
    { label: "Wishlist", desc: "Produk yang kamu simpan", href: "#" },
    { label: "Pengaturan Akun", desc: "Ubah data & password", href: "#" },
  ];

  return (
    <section className="w-full min-h-screen bg-white px-6 py-16 md:px-16 lg:px-32">
      {/* Header profil */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pb-12 border-b border-gray-100">
        {/* Avatar */}
        <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
          {user.avatar ? (
            <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full object-cover" />
          ) : (
            <span className="text-2xl font-montserrat font-semibold text-gray-400 uppercase">
              {user.name.charAt(0)}
            </span>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-montserrat font-semibold tracking-[0.08em] text-black uppercase">
            {user.name}
          </h1>
          <p className="text-sm font-poppins text-gray-400">{user.email}</p>
          <p className="text-xs font-poppins text-gray-300 mt-1">
            Member sejak {user.joined}
          </p>
        </div>
      </div>

      {/* Menu */}
      <div className="mt-10 flex flex-col divide-y divide-gray-100">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="group flex items-center justify-between py-5 hover:pl-1 transition-all duration-200"
          >
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-montserrat font-semibold tracking-wide text-black uppercase">
                {item.label}
              </span>
              <span className="text-xs font-poppins text-gray-400">
                {item.desc}
              </span>
            </div>
            <svg
              className="w-4 h-4 text-gray-300 group-hover:text-black transition-colors"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        ))}
      </div>

      {/* Logout */}
      <div className="mt-16 pt-8 border-t border-gray-100">
        <button className="text-xs font-montserrat font-semibold tracking-[0.18em] uppercase text-gray-400 hover:text-black transition-colors">
          Keluar
        </button>
      </div>
    </section>
  );
}
