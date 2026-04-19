<div align="center">

<a href="https://git.io/typing-svg">
  <img src="https://readme-typing-svg.demolab.com?font=Poppins&weight=300&size=23&duration=6200&pause=800&color=FFF5E6&color=F0E6D2&center=true&vCenter=true&width=700&lines=Holdme+%E2%80%94+Fashion+E-Commerce;Built+with+Next.js+%26+Laravel;Clean.+Aesthetic.+Modern.&italic=true" alt="Typing SVG" />
</a>

<br/>

Platform *e-commerce* fashion **Holdme** — memadukan kecepatan **Next.js**, ketangguhan **Laravel + Filament**, dan desain visual yang *clean* dan *aesthetic* dengan **Tailwind CSS**.

---

<img src="https://img.shields.io/badge/Private%20Repository-111827?style=for-the-badge&logo=github&logoColor=white" alt="Private Repository" />
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
<img src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" alt="Laravel" />
<img src="https://img.shields.io/badge/Filament-FDAE4B?style=for-the-badge&logo=laravel&logoColor=white" alt="Filament" />
<img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
<img src="https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />

</div>

<br/>

## 🧭 Ikhtisar Proyek

**Holdme** adalah platform *e-commerce* fashion modern yang menjual produk dari brand **Russ**. Proyek ini mengadopsi pendekatan *decoupled architecture* — memisahkan total antara *client-side* dan *server-side* — untuk memastikan performa tinggi, skalabilitas jangka panjang, keamanan data, dan kebebasan penuh dalam mendesain antarmuka yang *aesthetic*.

<div align="center">
  <br/>
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=nextjs,ts,tailwind,laravel,php,postgres&perline=6" alt="Tech Stack Icons" />
  </a>
  <br/>
</div>

---

## 🛍️ Fitur Utama

| Fitur | Keterangan |
|---|---|
| **Halaman Produk** | Grid produk responsif dengan filter kategori & sidebar sticky |
| **Sort & Filter** | Dropdown sort dengan scroll lock, filter aktif geser kanan |
| **Keranjang Belanja** | Halaman cart dengan animasi hover slide |
| **Halaman Profil** | Tampilan profil user yang clean & minimal |
| **Collaboration Series** | Grid koleksi kolaborasi brand |
| **Upcoming Events** | Seksi event dengan video dan item produk |
| **Testimonial Slider** | Auto-rotate testimonial dengan animasi fade + slide |
| **Floating CS Button** | Tombol customer service pojok kanan bawah (WhatsApp & Email) |
| **Admin Panel** | Manajemen produk, pesanan, dan konten via Filament |

---

## 🏗️ Tech Stack

### Frontend — Next.js
Lapisan presentasi dibangun untuk pengalaman pengguna yang cepat dan mulus.

* **Next.js 14 (App Router):** Framework React utama dengan SSR dan SSG untuk performa maksimal.
* **TypeScript:** Type-safety untuk meminimalisir bug dan memudahkan maintenance.
* **Tailwind CSS:** Utility-first CSS framework untuk desain UI yang clean, presisi, dan konsisten.
* **Lucide React:** Icon library yang konsisten di seluruh antarmuka.
* **Google Fonts:** Montserrat, Poppins, Inter, Sora, Space Grotesk — dikonfigurasi via `next/font`.

### Backend — Laravel + Filament
Mesin utama yang menangani logika bisnis, data, dan panel admin.

* **Laravel 11 (RESTful API):** Bertindak murni sebagai penyedia API (*headless*). Dipilih karena arsitekturnya yang elegan dan ekosistem keamanan bawaannya.
* **Filament v3:** Admin panel modern untuk manajemen produk, kategori, pesanan, dan konten tanpa perlu membangun dashboard dari nol.
* **Laravel Sanctum:** Autentikasi berbasis token yang aman antara Next.js dan Laravel.
* **Eloquent ORM:** Menyederhanakan interaksi database menjadi query yang intuitif.

### Database — PostgreSQL
* Relational database yang robust untuk menjaga integritas dan relasi data (produk, kategori, user, pesanan).
* Terintegrasi dengan sistem migration Laravel untuk kontrol versi struktur database.

---

## 📂 Struktur Direktori

```text
📁 holdme
├── 📁 backend          # Laravel API + Filament Admin Panel
│   ├── app/
│   ├── database/
│   └── routes/api.php
└── 📁 frontend         # Next.js App Router + Tailwind CSS
    ├── src/app/        # Pages (/, /products, /cart, /profile)
    └── src/components/ # Layout & UI Components
```

---

## 🚀 Memulai

### Frontend
```bash
cd frontend
npm install
npm run dev       # http://localhost:3000
```

### Backend
```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve  # http://localhost:8000
```

Admin panel tersedia di `http://localhost:8000/admin`.
