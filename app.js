// Aone's Cakes N Bakes - Main Application Logic

let productsState = [...INITIAL_PRODUCTS];
let cartState = [];
let activeCategory = 'all';
let activeDiet = 'all';
let searchQuery = '';

function initApp() {
  productsState = [...INITIAL_PRODUCTS];

  renderCategories();
  renderProducts();
  updateStoreContactUI();
  setupEventListeners();
}

function updateStoreContactUI() {
  // Update header phone & whatsapp links
  const waBtns = document.querySelectorAll('.dynamic-wa-link');
  waBtns.forEach(btn => {
    btn.href = `https://wa.me/${BAKERY_CONFIG.whatsappNumber}?text=${encodeURIComponent(BAKERY_CONFIG.whatsappMessageHeader)}`;
  });

  const igLink = document.getElementById('ig-contact-link');
  if (igLink) igLink.href = `https://instagram.com/${BAKERY_CONFIG.instagramHandle}`;

  const fbLink = document.getElementById('fb-contact-link');
  if (fbLink) fbLink.href = `https://facebook.com/${BAKERY_CONFIG.facebookHandle}`;

  const storePhone = document.getElementById('store-phone-text');
  if (storePhone) storePhone.textContent = BAKERY_CONFIG.phoneNumber;
  
  const storeAddr = document.getElementById('store-address-text');
  if (storeAddr) storeAddr.textContent = BAKERY_CONFIG.storeAddress;
}

function renderCategories() {
  const container = document.getElementById('category-tabs-container');
  if (!container) return;

  container.innerHTML = CATEGORIES.map(cat => `
    <button class="category-tab ${cat.id === activeCategory ? 'active' : ''}" data-category="${cat.id}">
      <span>${cat.icon}</span> ${cat.name}
    </button>
  `).join('');

  container.querySelectorAll('.category-tab').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const categoryId = e.currentTarget.getAttribute('data-category');
      activeCategory = categoryId;
      renderCategories();
      renderProducts();
    });
  });
}

function renderProducts() {
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  let filtered = productsState.filter(p => {
    const matchCat = activeCategory === 'all' || p.category === activeCategory;
    const matchDiet = activeDiet === 'all' || 
                      (activeDiet === 'veg' && p.isVeg) || 
                      (activeDiet === 'nonveg' && !p.isVeg);
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        (p.tag && p.tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchDiet && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
        <h3>No bakery items found matching your filter</h3>
        <p>Try searching for cakes, butter cookies, breads, or party decor!</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(p => `
    <div class="product-card" data-id="${p.id}">
      <div class="product-image-wrap">
        <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80'">
        ${p.tag ? `<span class="product-badge">${p.tag}</span>` : ''}
        <span class="${p.isVeg ? 'veg-icon-badge' : 'nonveg-icon-badge'}" title="${p.isVeg ? 'Veg' : 'Non-Veg'}"></span>
      </div>
      <div class="product-info">
        <h3 class="product-title">${p.name}</h3>
        <p class="product-desc">${p.description}</p>
        <div class="product-footer">
          <div>
            ${p.price ? `<span class="price-tag">₹${p.price}</span>` : ''}
            <span class="price-unit">${p.unit}</span>
          </div>
          <button class="add-cart-btn" onclick="addToCart(${p.id})">
            ➕ Add to Inquiry
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Cart Logic
function addToCart(productId) {
  const item = productsState.find(p => p.id === productId);
  if (!item) return;

  const existing = cartState.find(c => c.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cartState.push({ ...item, qty: 1 });
  }

  updateCartUI();
  openCartDrawer();
}

function updateCartQty(productId, delta) {
  const itemIndex = cartState.findIndex(c => c.id === productId);
  if (itemIndex > -1) {
    cartState[itemIndex].qty += delta;
    if (cartState[itemIndex].qty <= 0) {
      cartState.splice(itemIndex, 1);
    }
  }
  updateCartUI();
}

function updateCartUI() {
  const badge = document.getElementById('cart-badge-count');
  const body = document.getElementById('cart-items-container');
  const subtotalEl = document.getElementById('cart-subtotal-price');

  const totalQty = cartState.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cartState.reduce((sum, item) => sum + (item.price * item.qty), 0);

  if (badge) badge.textContent = totalQty;
  if (subtotalEl) subtotalEl.textContent = `₹${totalPrice}`;

  if (!body) return;

  if (cartState.length === 0) {
    body.innerHTML = `
      <div style="text-align: center; color: var(--text-muted); padding: 3rem 1rem;">
        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🛍️</div>
        <p>Your inquiry list is empty.</p>
        <small style="display:block; margin-top:0.5rem;">Add butter cookies, cakes, or breads to send a WhatsApp order!</small>
      </div>
    `;
    return;
  }

  body.innerHTML = cartState.map(item => `
    <div class="cart-item">
      <img src="${item.image}" class="cart-item-img" alt="${item.name}">
      <div class="cart-item-details">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-price">₹${item.price} x ${item.qty} = ₹${item.price * item.qty}</div>
      </div>
      <div class="cart-item-qty">
        <button class="qty-btn" onclick="updateCartQty(${item.id}, -1)">-</button>
        <span>${item.qty}</span>
        <button class="qty-btn" onclick="updateCartQty(${item.id}, 1)">+</button>
      </div>
    </div>
  `).join('');
}

function sendCartToWhatsApp() {
  if (cartState.length === 0) {
    alert("Please add items to your inquiry first!");
    return;
  }

  let text = `👋 Hello *Aone's Cakes N Bakes (Est. 1952)*,\nI would like to order/inquire about the following items:\n\n`;

  let grandTotal = 0;
  cartState.forEach((item, idx) => {
    const itemTotal = item.price * item.qty;
    grandTotal += itemTotal;
    text += `${idx + 1}. *${item.name}* x ${item.qty} (${item.unit}) - ₹${itemTotal}\n`;
  });

  text += `\n💵 *Estimated Total: ₹${grandTotal}*\n`;
  text += `\n📍 Please confirm item availability & delivery/pickup timing. Thank you!`;

  const waUrl = `https://wa.me/${BAKERY_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  window.open(waUrl, '_blank');
}

// Custom Cake Builder WhatsApp Generator
function handleCustomCakeOrder(e) {
  e.preventDefault();
  const flavor = document.getElementById('cake-flavor').value;
  const weight = document.getElementById('cake-weight').value;
  const type = document.getElementById('cake-type').value;
  const occasion = document.getElementById('cake-occasion').value;
  const message = document.getElementById('cake-message').value;
  const name = document.getElementById('customer-name').value;

  let text = `🎂 *CUSTOM CAKE INQUIRY - Aone's Cakes N Bakes*\n\n`;
  text += `👤 *Customer Name:* ${name || 'Valued Customer'}\n`;
  text += `🍰 *Flavor Choice:* ${flavor}\n`;
  text += `⚖️ *Weight / Size:* ${weight}\n`;
  text += `🌱 *Preference:* ${type}\n`;
  text += `🎉 *Occasion:* ${occasion}\n`;
  if (message) {
    text += `✍️ *Custom Icing Text:* "${message}"\n`;
  }
  text += `\n📷 *Note:* I will send the design / reference photo here on WhatsApp. Please let me know the price & availability!`;

  const waUrl = `https://wa.me/${BAKERY_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  window.open(waUrl, '_blank');
}

function toggleMobileNav() {
  const drawer = document.getElementById('mobile-nav-drawer');
  if (drawer) {
    drawer.classList.toggle('active');
  }
}

function openCartDrawer() {
  const overlay = document.getElementById('cart-drawer-overlay');
  if (overlay) overlay.classList.add('active');
}

function closeCartDrawer() {
  const overlay = document.getElementById('cart-drawer-overlay');
  if (overlay) overlay.classList.remove('active');
}

function setupEventListeners() {
  // Search input
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderProducts();
    });
  }

  // Diet filter buttons
  const dietBtns = document.querySelectorAll('.diet-btn');
  dietBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      dietBtns.forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      activeDiet = e.currentTarget.getAttribute('data-diet');
      renderProducts();
    });
  });

  // Custom cake form submit
  const cakeForm = document.getElementById('custom-cake-form');
  if (cakeForm) {
    cakeForm.addEventListener('submit', handleCustomCakeOrder);
  }
}

document.addEventListener('DOMContentLoaded', initApp);

