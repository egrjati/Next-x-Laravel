<div align="center">

  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" style="animation: fadeIn 2s infinite; opacity:0; animation-delay:0s;" />
  <img src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" style="animation: fadeIn 2s infinite; opacity:0; animation-delay:0.5s;" />
  ...

<style>
@keyframes fadeIn {
  0% { opacity:0; }
  20% { opacity:1; }
  80% { opacity:1; }
  100% { opacity:0; }
}
</style>

<br/>

Sebuah fondasi *full-stack* modern eksklusif yang dirancang dengan presisi, memadukan kecepatan **Next.js**, ketangguhan **Laravel**, dan keindahan visual dari **Tailwind CSS**.

---

<img src="https://img.shields.io/badge/Private%20Repository-111827?style=for-the-badge&logo=github&logoColor=white" alt="Private Repository" />
<img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
<img src="https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />

</div>

<br/>

## 🧭 Ikhtisar Arsitektur

Proyek ini mengadopsi pendekatan *decoupled architecture* (pemisahan total antara *client-side* dan *server-side*) untuk memastikan skalabilitas jangka panjang, keamanan data, dan kebebasan dalam mendesain antarmuka pengguna yang *aesthetic* dan modern.

<div align="center">
  <br/>
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=nextjs,ts,tailwind,laravel,php,mysql&perline=6" alt="Tech Stack Icons" />
  </a>
  <br/>
</div>

---

## 🏗️ Penjelasan Tech Stack

### 1. Frontend: Next.js & Tailwind CSS
Lapisan presentasi dibangun untuk memberikan pengalaman pengguna yang cepat dan mulus.
* **Next.js (App Router):** Digunakan sebagai *framework* React utama. Memanfaatkan fitur *Server-Side Rendering* (SSR) dan *Static Site Generation* (SSG) untuk memastikan performa maksimal dan waktu muat (*load time*) yang instan.
* **TypeScript:** Memberikan *type-safety* untuk meminimalisir *bug* pada antarmuka, memastikan kode lebih rapi dan mudah di-*maintenance*.
* **Tailwind CSS:** *Utility-first CSS framework* yang menjadi nyawa dari *styling* aplikasi ini. Memungkinkan pembuatan desain UI yang *clean*, presisi, dan konsisten tanpa perlu menulis file CSS kustom yang panjang. 

### 2. Backend: Laravel
Mesin utama yang menangani logika bisnis dan pemrosesan data.
* **Laravel 11 (API RESTful):** Bertindak murni sebagai penyedia API (*headless CMS*). Laravel dipilih karena arsitekturnya yang elegan, sistem *routing* yang kuat, dan ekosistem keamanan bawaannya yang sangat baik.
* **Sanctum / JWT Authentication:** Menangani autentikasi berbasis token dengan aman antara Next.js dan Laravel, memastikan sesi pengguna dan data *private* terlindungi.
* **Eloquent ORM:** Menyederhanakan interaksi dan manipulasi data yang kompleks menjadi *query* yang intuitif dan mudah dibaca.

### 3. Database: MySQL
* **Relational Database:** Menggunakan MySQL untuk menjaga integritas dan relasi data. Terintegrasi erat dengan sistem *migration* dari Laravel untuk memudahkan kontrol versi pada struktur *database*.

---

## 📂 Struktur Direktori Utama

Repositori ini memuat dua entitas utama yang berjalan secara independen:

```text
📁 root-workspace
├── 📁 backend          # Direktori API (Laravel, PHP, Routes, Migrations)
└── 📁 frontend         # Direktori UI (Next.js, React Components, Tailwind Config)