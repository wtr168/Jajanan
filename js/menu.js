/* =====================================================================
   menu.js — logika tampilan katalog (TIDAK perlu diedit)
   Data produk ada di file products.js, bukan di sini.
   ===================================================================== */

const grid = document.getElementById('catalog-grid');
const emptyMsg = document.getElementById('empty-msg');
const searchInput = document.getElementById('search-input');
const categoryChipsEl = document.getElementById('category-chips');
const priceChipsEl = document.getElementById('price-chips');
const overlay = document.getElementById('overlay');
const modalImg = document.getElementById('modal-img');
const modalName = document.getElementById('modal-name');
const modalPrice = document.getElementById('modal-price');
const modalComp = document.getElementById('modal-comp');
const modalDesc = document.getElementById('modal-desc');
const modalOrder = document.getElementById('modal-order');

const ALL_LABEL = "Semua";

let activeCategory = ALL_LABEL;
let activePrice = ALL_LABEL;
let searchTerm = "";

function formatRupiah(number){
  return "Rp " + Number(number).toLocaleString('id-ID');
}

function placeholderSVG(label){
  const initial = (label || '?').trim().charAt(0).toUpperCase();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
    <rect width="200" height="200" fill="#EDE0C6"/>
    <text x="50%" y="55%" font-family="Georgia, serif" font-size="72" fill="#6E3F27" text-anchor="middle">${initial}</text>
  </svg>`;
  return "data:image/svg+xml," + encodeURIComponent(svg);
}

/* --- bangun daftar chip kategori & harga otomatis dari products.js --- */

function buildChips(){
  const categories = [ALL_LABEL, ...new Set(products.map(p => p.category).filter(Boolean))];
  const prices = [ALL_LABEL, ...new Set(products.map(p => p.price).filter(v => typeof v === 'number'))].
    sort((a, b) => (a === ALL_LABEL ? -1 : b === ALL_LABEL ? 1 : a - b));

  categoryChipsEl.innerHTML = '';
  categories.forEach(cat => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'chip' + (cat === activeCategory ? ' active' : '');
    chip.textContent = cat;
    chip.addEventListener('click', () => {
      activeCategory = cat;
      buildChips();
      renderGrid();
    });
    categoryChipsEl.appendChild(chip);
  });

  priceChipsEl.innerHTML = '';
  prices.forEach(price => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'chip' + (price === activePrice ? ' active' : '');
    chip.textContent = price === ALL_LABEL ? ALL_LABEL : formatRupiah(price);
    chip.addEventListener('click', () => {
      activePrice = price;
      buildChips();
      renderGrid();
    });
    priceChipsEl.appendChild(chip);
  });
}

/* --- render kartu produk sesuai filter aktif --- */

function renderGrid(){
  const term = searchTerm.trim().toLowerCase();

  const filtered = products.filter(p => {
    const matchCategory = activeCategory === ALL_LABEL || p.category === activeCategory;
    const matchPrice = activePrice === ALL_LABEL || p.price === activePrice;
    const matchSearch = term === '' || p.name.toLowerCase().includes(term);
    return matchCategory && matchPrice && matchSearch;
  });

  grid.innerHTML = '';
  emptyMsg.classList.toggle('show', filtered.length === 0);

  filtered.forEach(p => {
    const idx = products.indexOf(p);
    const card = document.createElement('button');
    card.className = 'card';
    card.type = 'button';
    card.innerHTML = `
      <img class="card-img" src="${p.image || placeholderSVG(p.name)}" alt="${p.name}"
        onerror="this.onerror=null;this.src='${placeholderSVG(p.name)}';">
      <div class="card-body">
        <p class="card-name">${p.name}</p>
        <p class="card-price">${formatRupiah(p.price)}</p>
      </div>
    `;
    card.addEventListener('click', () => openModal(idx));
    grid.appendChild(card);
  });
}

searchInput.addEventListener('input', (e) => {
  searchTerm = e.target.value;
  renderGrid();
});

/* --- pop-up detail produk --- */

function openModal(idx){
  const p = products[idx];
  modalImg.src = p.image || placeholderSVG(p.name);
  modalImg.onerror = () => { modalImg.onerror = null; modalImg.src = placeholderSVG(p.name); };
  modalImg.alt = p.name;
  modalName.textContent = p.name;
  modalPrice.textContent = formatRupiah(p.price);
  modalDesc.textContent = p.description || "";
  modalComp.innerHTML = (p.composition || []).map(c => `<li>${c}</li>`).join('');
  const waText = encodeURIComponent(`Halo Solo Tenongan, saya mau pesan ${p.name}`);
  modalOrder.href = `https://wa.me/${WA_NUMBER}?text=${waText}`;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(){
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modal-close').addEventListener('click', closeModal);
overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

/* --- mulai --- */
buildChips();
renderGrid();
