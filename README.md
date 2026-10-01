# Solo Tenongan — Website Link Tree & Katalog

## Struktur folder

```
index.html          → halaman utama (link tree untuk bio Instagram)
menu.html           → halaman katalog menu & harga
css/
  style.css         → gaya dasar (warna, font, kartu link, header, footer)
  menu.css          → gaya khusus halaman katalog (grid produk, pop-up detail)
js/
  products.js        ⭐ EDIT DI SINI untuk ubah/tambah produk & nomor WhatsApp
  menu.js           → logika tampilan katalog (biasanya tidak perlu diubah)
images/
  mascot-klepon.png → maskot yang tampil di halaman utama
  (taruh foto produk kamu di sini juga, lalu arahkan di products.js)
```

## Yang paling sering kamu edit

- **`js/products.js`** — daftar produk (nama, kategori, harga, komposisi,
  foto, deskripsi) dan nomor WhatsApp. Semua penjelasan cara editnya ada
  di komentar paling atas file itu. Filter kategori dan filter harga di
  halaman menu otomatis muncul mengikuti isi file ini — tidak perlu
  diatur di tempat lain.
- **`index.html`** — kalau mau ubah teks tagline, tambah/hapus tombol link
  (WhatsApp, Instagram, lokasi, dll), atau ganti nomor WhatsApp di tombol
  utama.

## Menjalankan di komputer (opsional, untuk cek sebelum upload)

Cukup buka `index.html` langsung di browser (klik dua kali), atau kalau
pakai VS Code, install ekstensi **Live Server** lalu klik kanan pada
`index.html` → "Open with Live Server".

## Upload ke GitHub Pages

1. Buat repo baru, upload SEMUA isi folder ini (jaga strukturnya —
   jangan hanya upload index.html saja).
2. Settings → Pages → pilih branch `main`, folder `/root` → Save.
3. Alamat situsmu akan jadi `https://namauser.github.io/nama-repo/`.
