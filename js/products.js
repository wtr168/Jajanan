/* =====================================================================
   products.js — DATA MENU, EDIT DI SINI
   ---------------------------------------------------------------------
   Ini satu-satunya file yang perlu kamu sentuh untuk mengubah menu.
   Setiap produk berbentuk seperti ini:

   {
     name: "Nama Produk",
     category: "Kue Basah",          // dipakai untuk filter kategori di atas
     price: 15000,                    // ANGKA saja, tanpa "Rp" dan tanpa titik
     image: "images/kue-lapis.jpg",   // path ke foto produk
     composition: ["Bahan 1", "Bahan 2", "Bahan 3"],
     description: "Deskripsi singkat produk (opsional)."
   },

   PENTING soal "price": tulis angka polos seperti 15000 (BUKAN "Rp 15.000"
   dan BUKAN "15.000"). Situs yang akan otomatis memformat jadi "Rp 15.000"
   di layar, dan angka ini juga dipakai untuk filter rentang harga.

   PENTING soal "category": tulis persis sama untuk produk yang sejenis
   (huruf besar/kecil tidak masalah, tapi ejaan harus sama), misalnya
   selalu "Kue Basah" atau selalu "Kue Kering" — kategori yang muncul di
   filter atas otomatis diambil dari semua nilai "category" yang ada di
   daftar ini. Kalau kamu menulis kategori baru (misal "Minuman"), tombol
   filternya akan muncul sendiri, tidak perlu diatur di tempat lain.

   CARA MENAMBAH FOTO PRODUK:
   - Taruh file foto di dalam folder "images" (sudah ada di proyek ini).
   - Tulis nama filenya di bagian "image", contoh: "images/klepon.jpg"
   - Kalau "image" dikosongkan (""), otomatis muncul kotak dengan huruf
     awal nama produk sebagai placeholder — jadi tidak akan error.

   CARA MENAMBAH PRODUK BARU:
   - Salin (copy-paste) satu blok "{ ... }," di bawah, tempel sebelum
     tanda "]" penutup, lalu ubah isinya.
   - Jangan lupa tanda koma (,) di akhir tiap produk KECUALI produk
     yang paling terakhir dalam daftar.

   NOMOR WHATSAPP:
   - Diatur satu kali di WA_NUMBER di bawah (format: kode negara tanpa
     tanda + atau 0 di depan, contoh Indonesia: 62812xxxxxxx).
     Semua tombol "Pesan produk ini" otomatis memakai nomor ini.
   ===================================================================== */

const WA_NUMBER = "6281234567890";

const products = [
  {
    name: "Kue Lapis",
    category: "Kue Basah",
    price: 2000,
    image: "images/kuelapis.jpg",
    composition: ["Tepung beras", "Tepung tapioka", "Santan", "Gula pasir", "Pewarna alami"],
    description: "Kue basah berlapis warna-warni dengan tekstur kenyal dan rasa gurih-manis khas Solo."
  },
  {
    name: "Klepon",
    category: "Kue Basah",
    price: 2000,
    image: "images/klepon.jpg",
    composition: ["Tepung ketan", "Gula merah cair", "Kelapa parut", "Daun pandan"],
    description: "Bola ketan isi gula merah cair, dibalut kelapa parut segar. Favorit sepanjang masa."
  },
  {
    name: "Klepon",
    category: "Kue Basah",
    price: 2500,
    image: "images/klepon.jpg",
    composition: ["Tepung ketan", "Gula merah cair", "Kelapa parut", "Daun pandan"],
    description: "Bola ketan isi gula merah cair, dibalut kelapa parut segar. Favorit sepanjang masa."
  },
  {
    name: "Putu Ayu",
    category: "Kue Basah",
    price: 1500,
    image: "images/putuayu.jpg",
    composition: ["Tepung beras", "Kelapa parut", "Gula pasir", "Telur", "Pasta pandan"],
    description: "Kue kukus lembut beraroma pandan, bertabur kelapa parut di atasnya."
  },
  {
    name: "Lemper Ayam",
    category: "Kue Basah",
    price: 2500,
    image: "images/lemper.jpg",
    composition: ["Beras ketan", "Santan", "Ayam suwir bumbu", "Daun pisang"],
    description: "Ketan gurih berisi ayam suwir berbumbu, dibungkus daun pisang harum."
  },
  {
    name: "Nagasari",
    category: "Kue Basah",
    price: 1500,
    image: "images/nogosari.jpg",
    composition: ["Tepung beras", "Santan", "Pisang raja", "Daun pisang"],
    description: "Kue kukus lembut isi pisang, dibungkus daun pisang dengan aroma khas."
  },
  {
    name: "Semar Mendem",
    category: "Kue Basah",
    price: 1500,
    image: "images/semarmendem.jpg",
    composition: ["Beras ketan", "Santan", "Ayam suwir berbumbu", "Tepung", "Telur", "Daun pisang"],
    description: "Ketan gurih berisi ayam suwir berbumbu, dibungkus dengan dadar telur lembut dan harum."
  },
  {
    name: "Semar Mendem",
    category: "Kue Basah",
    price: 2000,
    image: "images/semarmendem.jpg",
    composition: ["Beras ketan", "Santan", "Ayam suwir berbumbu", "Tepung", "Telur", "Daun pisang"],
    description: "Ketan gurih berisi ayam suwir berbumbu, dibungkus dengan dadar telur lembut dan harum."
  },
  {
    name: "Semar Mendem",
    category: "Kue Basah",
    price: 2500,
    image: "images/semarmendem.jpg",
    composition: ["Beras ketan", "Santan", "Ayam suwir berbumbu", "Tepung", "Telur", "Daun pisang"],
    description: "Ketan gurih berisi ayam suwir berbumbu, dibungkus dengan dadar telur lembut dan harum."
  },
  {
    name: "Tahu Bakso",
    category: "Gorengan",
    price: 1500,
    image: "",
    composition: ["Tahu", "Daging", "Tepung tapioka", "Bawang putih", "Bumbu rempah"],
    description: "Tahu lembut berisi adonan bakso, yang gurih dan kenyal."
  },
  {
    name: "Tahu Bakso",
    category: "Gorengan",
    price: 2000,
    image: "",
    composition: ["Tahu", "Daging", "Tepung tapioka", "Bawang putih", "Bumbu rempah"],
    description: "Tahu lembut berisi adonan bakso, yang gurih dan kenyal."
  },
  {
    name: "Donat",
    category: "Kue Basah",
    price: 1500,
    image: "",
    composition: ["Tepung terigu", "Ragi", "Margarin", "Kuning telur", "Gula", "Susu", "meses"],
    description: "Donat lembut dan empuk dengan toping meses coklat, yang manis dan lezat."
  },
  {
    name: "Donat",
    category: "Kue Basah",
    price: 2000,
    image: "",
    composition: ["Tepung terigu", "Ragi", "Margarin", "Kuning telur", "Gula", "Susu", "meses"],
    description: "Donat lembut dan empuk dengan toping meses coklat, yang manis dan lezat."
  },
  {
    name: "Sus Basah",
    category: "Kue Basah",
    price: 1500,
    image: "images/susbasah.jpg",
    composition: ["Tepung terigu", "Ragi", "Margarin", "Kuning telur", "Gula", "Susu", "Vanilli", "vla"],
    description: "Kue sus dengan kulit yang lembut dan ringan, berisi vla yang manis dan lembut."
  },
  {
    name: "Sus Basah",
    category: "Kue Basah",
    price: 2500,
    image: "images/susbasah.jpg",
    composition: ["Tepung terigu", "Ragi", "Margarin", "Kuning telur", "Gula", "Susu", "Vanilli", "vla"],
    description: "Kue sus dengan kulit yang lembut dan ringan, berisi vla yang manis dan lembut."
  },
  {
    name: "Bolu Kukus",
    category: "Kue Basah",
    price: 1500,
    image: "images/bolukukus.jpg",
    composition: ["Tepung terigu", "Ragi", "Margarin", "Kuning telur", "Gula", "Susu", "Vanilli", "Pewarna makanan"],
    description: "Kue yang lembut empuk dan mengembang dengan rasa manis dan aroma harum."
  },
  {
    name: "Bolu Kukus",
    category: "Kue Basah",
    price: 2000,
    image: "images/bolukukus.jpg",
    composition: ["Tepung terigu", "Ragi", "Margarin", "Kuning telur", "Gula", "Susu", "Vanilli", "Pewarna makanan"],
    description: "Kue yang lembut empuk dan mengembang dengan rasa manis dan aroma harum."
  },
  {
    name: "Bolu Caramel",
    category: "Kue Basah",
    price: 2500,
    image: "images/bolucaramel.jpg",
    composition: ["Tepung terigu", "Backing soda", "Margarin", "Kuning telur", "Gula", "Susu", "Caramel"],
    description: "Kue dengan tekstur lembut dan berserat memiliki rasa manis serta aroma caramel yang khas."
  },
  {
    name: "Bolu Caramel",
    category: "Kue Basah",
    price: 3500,
    image: "images/bolucaramel.jpg",
    composition: ["Tepung terigu", "Backing soda", "Margarin", "Kuning telur", "Gula", "Susu", "Caramel"],
    description: "Kue dengan tekstur lembut dan berserat memiliki rasa manis serta aroma caramel yang khas."
  },
  {
    name: "Jelly",
    category: "Kue Basah",
    price: 1500,
    image: "",
    composition: ["Bubuk Jelly", "Gula", "Air"],
    description: "Makanan yang memiliki tekstur kenyal dan rasa manis."
  },
  {
    name: "Arem-arem",
    category: "Kue Basah",
    price: 2500,
    image: "images/aremarem.jpg",
    composition: ["Beras", "Santen", "Ayam", "Kentang", "Bumbu rempah", "Daun pisang"],
    description: "Makanan tradisional yang terbuat dari beras yang dibungkus dengan daun pisang dan diisi dengan isian seperti ayam dan kentang."
  },
  {
    name: "Arem-arem",
    category: "Kue Basah",
    price: 3000,
    image: "images/aremarem.jpg",
    composition: ["Beras", "Santen", "Ayam", "Kentang", "Bumbu rempah", "Daun pisang"],
    description: "Makanan tradisional yang terbuat dari beras yang dibungkus dengan daun pisang dan diisi dengan isian seperti ayam dan kentang."
  },
  {
    name: "Dadar Gulung eten-eten",
    category: "Kue Basah",
    price: 1500,
    image: "images/dadargulung.jpg",
    composition: ["Tepung terigu", "Telur", "Santan", "Gula merah", "Kelapa parut", "Daun pandan"],
    description: "Kue tradisional yang lembut dan memiliki rasa manis dengan aroma daun pandan."
  },
  {
    name: "Dadar Gulung Piscok",
    category: "Kue Basah",
    price: 2000,
    image: "images/dadargulungcoklat.jpg",
    composition: ["Tepung terigu", "Telur", "Santan", "Gula merah", "Coklat", "pisang", "vanilli"],
    description: "Kue tradisional yang lembut dan memiliki rasa manis legit dengan isian pisang dan coklat."
  },
  {
    name: "Martabak",
    category: "Gorengan",
    price: 2000,
    image: "images/martabak.jpg",
    composition: ["Telur", "Kulit lumpia", "Daun bawang", "Bawang putih", "Bumbu rempah"],
    description: "Gorengan yang dilapisi kulit lumpia, disajikan dengan isian telur, daun bawang dan bumbu rempah."
  },
  {
    name: "Martabak",
    category: "Gorengan",
    price: 2500,
    image: "images/martabak.jpg",
    composition: ["Telur", "Kulit lumpia", "Daun bawang", "Bawang putih", "Bumbu rempah"],
    description: "Gorengan yang dilapisi kulit lumpia, disajikan dengan isian telur, daun bawang dan bumbu rempah."
  },
  {
    name: "Prastel",
    category: "Gorengan",
    price: 2500,
    image: "images/prastel.jpg",
    composition: ["Tepung terigu", "Telur", "Margarin", "Wortel", "Kentang", "Bawang putih", "Bumbu rempah"],
    description: "Gorengan dengan kulit renyah dan gurih berisi sayuran dan telur yang lezat."
  },
  {
    name: "Onde-onde",
    category: "Gorengan",
    price: 2000,
    image: "images/ondeonde.jpg",
    composition: ["Tepung ketan", "Gula", "Wijen", "Kacang hijau", "Santan", "Garam"],
    description: "Gorengan tradisional berbentuk bulat berlapis wijen dan isian kacang hijau yang lezat."
  },
  {
    name: "Sosis Basah",
    category: "Gorengan",
    price: 2500,
    image: "images/sosisbasah.jpg",
    composition: ["Tepung terigu", "Telur", "Margarin", "Bumbu rempah", "Daging ayam"],
    description: "Makanan yang dibalut dengan telur dan diisi dengan daging ayam yang dikukus."
  },
  {
    name: "Sosis Basah",
    category: "Gorengan",
    price: 3000,
    image: "images/sosisbasah.jpg",
    composition: ["Tepung terigu", "Telur", "Margarin", "Bumbu rempah", "Daging ayam"],
    description: "Makanan yang dibalut dengan telur dan diisi dengan daging ayam yang dikukus."
  },
  {
    name: "Sosis Ayam",
    category: "Gorengan",
    price: 1500,
    image: "images/sosisayam.jpg",
    composition: ["Tepung terigu", "Telur", "Bumbu rempah", "Daging ayam"],
    description: "Gorengan yang renyah dan gurih dengan dengan isian daging ayam."
  },
  {
    name: "Sosis Ayam",
    category: "Gorengan",
    price: 2000,
    image: "images/sosisayam.jpg",
    composition: ["Tepung terigu", "Telur", "Bumbu rempah", "Daging ayam"],
    description: "Gorengan yang renyah dan gurih dengan dengan isian daging ayam."
  },
  {
    name: "Sosis Ayam",
    category: "Gorengan",
    price: 2500,
    image: "images/sosisayam.jpg",
    composition: ["Tepung terigu", "Telur", "Bumbu rempah", "Daging ayam"],
    description: "Gorengan yang renyah dan gurih dengan dengan isian daging ayam."
  },
  {
    name: "Kue Ku",
    category: "Kue Basah",
    price: 2500,
    image: "images/kueku.jpg",
    composition: ["Tepung ketan", "Gula", "Santan", "Kacang hijau", "Pewarna makanan", "Daun pandan"],
    description: "Kue yang memiliki tekstur kenyal dan lembut dengan isian kacang hijau yang lezat."
  },
  {
    name: "Roti Gulung",
    category: "Kue Basah",
    price: 2500,
    image: "images/rotigulung.jpg",
    composition: ["Tepung terigu", "Telur", "Gula", "Ragi", "Margarin", "Susu", "Selai"],
    description: "Kue yang lembut dan empuk digulung dengan isian selai yang manis."
  },
  {
    name: "Pie Buah",
    category: "Kue Basah",
    price: 2500,
    image: "images/piebuah.jpg",
    composition: ["Tepung terigu", "Telur", "Margarin", "Maizena", "Gula", "Buah-buahan segar"],
    description: "Kue kering yang renyah dan lezat dengan isian vla yang lembut dan manis dengan toping buah-buahan."
  },
  {
    name: "Pie Buah",
    category: "Kue Basah",
    price: 3000,
    image: "images/piebuah.jpg",
    composition: ["Tepung terigu", "Telur", "Margarin", "Maizena", "Gula", "Buah-buahan segar"],
    description: "Kue kering yang renyah dan lezat dengan isian vla yang lembut dan manis dengan toping buah-buahan."
  },
  {
    name: "Kue Lumpur",
    category: "Kue Basah",
    price: 2500,
    image: "images/kuelumpur.jpg",
    composition: ["Tepung terigu", "Telur", "Margarin", "Santan", "Gula", "Kentang", "Vanilli"],
    description: "Kue bertekstur lembut dengan rasa manis yang lezat."
  },
  {
    name: "Sosis Timlo",
    category: "Gorengan",
    price: 2500,
    image: "images/sosistimlo.jpg",
    composition: ["Tepung terigu", "Telur", "Bumbu rempah", "Bihun", "Jamur", "Ati ampela"],
    description: "Gorengan yang renyah dan gurih dengan berbagai isian yang lezat."
  },
  {
    name: "Srabi",
    category: "Kue Basah",
    price: 2000,
    image: "images/srabi.jpg",
    composition: ["Tepung beras", "Santan", "Gula", "Daun pandan"],
    description: "Makanan tradisional yang lembut dan manis."
  },
  {
    name: "Kue Talm",
    category: "Kue Basah",
    price: 1500,
    image: "images/kuetalm.jpg",
    composition: ["Tepung beras", "Tepung terigu", "Telur", "Santan", "Gula", "Daun pandan"],
    description: "Makanan tradisional yang lembut dan manis."
  },
  {
    name: "Kue Talm",
    category: "Kue Basah",
    price: 2500,
    image: "images/kuetalm.jpg",
    composition: ["Tepung beras", "Tepung terigu", "Telur", "Santan", "Gula", "Daun pandan"],
    description: "Makanan tradisional yang lembut dan manis."
  },
  {
    name: "Cendol Keju",
    category: "Kue Kering",
    price: 1500,
    image: "",
    composition: ["Tepung terigu", "Margarin", "Gula", "Telur", "Keju"],
    description: "Kue kering gurih rasa keju, cocok untuk camilan."
  },
  {
    name: "Sus Kering",
    category: "Kue Kering",
    price: 1500,
    image: "",
    composition: ["Tepung terigu", "Margarin", "Gula", "Telur"],
    description: "Kue kering gurih, cocok untuk camilan."
  },
  {
    name: "Kuping Gajah",
    category: "Kue Kering",
    price: 1500,
    image: "",
    composition: ["Tepung terigu", "Margarin", "Gula", "Telur", "Coklat"],
    description: "Kue kering gurih dan renyah, cocok untuk camilan."
  },
  {
    name: "Kacang Telur",
    category: "Kue Kering",
    price: 1500,
    image: "",
    composition: ["Tepung terigu", "Kacang", "Margarin", "Telur", "Gula"],
    description: "Camilan khas yang gurih dan renyah."
  },
  {
    name: "Corobikan",
    category: "Kue Basah",
    price: 3000,
    image: "images/corobikang.jpg",
    composition: ["Tepung terigu", "Gula", "Margarin", "Telur", "Santan", "Pewarna makanan"],
    description: "Kue tradisional yang lembut dengan perpaduan rasa santan, manis dan gurih."
  },
  {
    name: "Susu Kedelai",
    category: "Minuman",
    price: 3000,
    image: "",
    composition: ["Kacang kedelai", "Gula", "Vanilli"],
    description: "Minuman tradisional yang lezat dan menyehatkan."
  },
  {
    name: "Risol Mayo",
    category: "Gorengan",
    price: 3500,
    image: "images/risolmayo.jpg",
    composition: ["Tepung terigu", "Telur", "Mayonise", "Sosis", "Tepung panir"],
    description: "Camilan gorengan yang lezat dan gurih dengan isian mayonise dan sosis."
  },
  {
    name: "Risol Mentai",
    category: "Gorengan",
    price: 3500,
    image: "images/risolmayo.jpg",
    composition: ["Tepung terigu", "Telur", "Mayonise", "Saos mentai", "Sosis", "Tepung panir"],
    description: "Camilan gorengan yang lezat dan gurih dengan isian mayonise dan sosis yang sedikit pedas."
  },
  {
    name: "Tahu Isi",
    category: "Gorengan",
    price: 1500,
    image: "images/tahuisi.jpg",
    composition: ["Tepung terigu", "Tahu", "Wortel", "Kol", "Toge", "Bumbu rempah"],
    description: "Gorengan yang terbuat dari tahu dengan isian berbagai sayuran dan bumbu."
  },
  {
    name: "Tahu Telur Puyuh",
    category: "Gorengan",
    price: 3000,
    image: "images/tahuisitelurpuyuh.jpg",
    composition: ["Tepung terigu", "Tahu", "Telur puyuh", "Bumbu rempah",],
    description: "Gorengan yang terbuat dari tahu dengan isian telur puyuh dan bumbu rempah."
  },
  {
    name: "Tahu Bacem",
    category: "Gorengan",
    price: 2000,
    image: "images/tahubacem.jpg",
    composition: ["Tahu", "Bumbu bacem", "Gula merah", "Kecap manis"],
    description: "Gorengan yang terbuat dari tahu dengan bumbu bacem yang lezat."
  },
  {
    name: "Tahu Bacem",
    category: "Gorengan",
    price: 2500,
    image: "images/tahubacem.jpg",
    composition: ["Tahu", "Bumbu bacem", "Gula merah", "Kecap manis"],
    description: "Gorengan yang terbuat dari tahu dengan bumbu bacem yang lezat."
  },
  {
    name: "Martabak Mini",
    category: "Kue Basah",
    price: 2000,
    image: "images/martabakmini.jpg",
    composition: ["Terigu", "Telur", "Meses", "Gula", "Margarin"],
    description: "Kue basah yang lembut dan lezat."
  },
  {
    name: "Bika Ambon",
    category: "Kue Basah",
    price: 2000,
    image: "images/bikaambon.jpg",
    composition: ["Telur", "Terigu", "Santan", "Gula", "Margarin"],
    description: "Kue basah yang lembut dan lezat."
  },
];
