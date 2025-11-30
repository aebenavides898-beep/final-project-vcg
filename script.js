"use strict";

// ------------------------------
// Data (Maps per platform)
// ------------------------------
const catalog = new Map();

/// PS5
catalog.set("PS5", {
  hardware: [
    {
      title: "PlayStation 5 Console",
      genre: "Hardware",
      price: 499,
      img: "https://http2.mlstatic.com/D_NQ_NP_955000-MLU75239551715_032024-O.webp"
    },
    {
      title: "Playstation VR 2",
      genre: "Hardware",
      price: 399,
      img: "https://m.media-amazon.com/images/I/617KjYvMgHL._AC_UF894,1000_QL80_.jpg"
    },
    {
      title: "DualSense Wireless Controller",
      genre: "Hardware",
      price: 69,
      img: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-overview-controllers-image-block-01-en-09jul24?$1600px$"
    }
  ],
  games: [
    {
      title: "Elden Ring",
      genre: "RPG",
      price: 59,
      img: "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg"
    },
    {
      title: "Lies of P",
      genre: "Games",
      price: 69,
      img: "https://image.api.playstation.com/vulcan/ap/rnd/202305/2308/06b354c8015b3c71e54f43aa883aab4641285d4a91734681.png"
    },
    {
      title: "GTA 5",
      genre: "Games",
      price: 20,
      img: "https://panamericana.vtexassets.com/arquivos/ids/435966/juego-grand-theft-auto-v-ps5-710425578687.jpg?v=637859699378630000"
    },
    {
      title: "Clair Obscur Expedition 33",
      genre: "Games",
      price: 59,
      img: "https://image.api.playstation.com/vulcan/ap/rnd/202501/2217/e5833a53529ff9879e87689f1e8b04d45ba7e6c97fa791e2.png"
    },
    {
      title: "Silent Hill F",
      genre: "Games",
      price: 69,
      img: "https://cdn2.unrealengine.com/silent-hill-f-key-7680x4320-1e56929c5932.jpeg"
    },
    {
      title: "Silent Hill 2",
      genre: "Game",
      price: 69,
      img: "https://image.api.playstation.com/vulcan/ap/rnd/202210/2000/IgwsFz9BiBrFvyV7pIWpoVgd.png"
    },
    {
      title: "warhammer 40 K space marine 2",
      genre: "Game",
      price: 69,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVSKz3f00B5YUownqWQ1vtvfvwSVNijW9mqQ&s"
    },
    {
      title: "Tainted Grail",
      genre: "Game",
      price: 69,
      img: "https://image.api.playstation.com/vulcan/ap/rnd/202503/1415/dc5eb159097d38843bc0b2daac641160c58b06b633ae5a71.png?w=1024&thumb=false"
    },
    {
      title: "Resident Evil 4 Remake",
      genre: "Horror",
      price: 59,
      img: "https://cdn.akamai.steamstatic.com/steam/apps/2050650/header.jpg"
    },
    {
      title: "Demon's Souls",
      genre: "RPG",
      price: 69,
      img: "https://image.api.playstation.com/vulcan/img/rnd/202011/1717/brIXKBE5BqYgBSrsDn6Wo18O.png?w=5000&thumb=false"
    },
    {
      title: "Returnal",
      genre: "roguelike,shooter",
      price: 69,
      img: "https://image.api.playstation.com/vulcan/ap/rnd/202011/1621/fYZQHZ42eXXUt7c6D5YjLrq5.png?w=440&thumb=false"
    }
  ]
});

// Xbox
catalog.set("Xbox Series X|S", {
  hardware: [
    {
      title: "Xbox Series X",
      genre: "Hardware",
      price: 499,
      img: "https://cms-assets.xboxservices.com/assets/bc/40/bc40fdf3-85a6-4c36-af92-dca2d36fc7e5.png?n=642227_Hero-Gallery-0_A1_857x676.png"
    },
    {
      title: "Xbox Wireless Controller",
      genre: "Hardware",
      price: 59,
      img: "https://assets.xboxservices.com/assets/1d/e9/1de988c2-f32f-4434-a541-f9a4b353ee78.jpg?n=Accessories-Hub_Content-Placement-0_2020-Controller-White_788x444.jpg"
    }
  ],

  games: [
    {
      title: "Avowed",
      genre: "RPG",
      price: 69,
      img: "https://store-images.s-microsoft.com/image/apps.63195.13624715126573049.35e3abd5-bd41-4efb-bc2a-0bfbdd50b02a.d3291934-3236-4279-91eb-792123046d1d?q=90&w=177&h=265"
    },
    {
      title: "Forza Horizon 5",
      genre: "Racing",
      price: 59,
      img: "https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg"
    }
  ]
});

// Switch
catalog.set("Switch", {
  hardware: [
    {
      title: "Nintendo Switch OLED",
      genre: "Hardware",
      price: 349,
      img: "https://m.media-amazon.com/images/I/61nqNujSF2L._AC_UY436_FMwebp_QL65_.jpg"
    },
    {
      title: "Joy-Con Pair",
      genre: "Hardware",
      price: 79,
      img: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_600/ncom/en_US/products/accessories/nintendo-switch/controllers/joy-con-controllers/joy-con-neon-red-neon-blue/104882-nintendo-switch-joy-con-red-blue-package-1200x675"
    }
  ],
  games: [
    {
      title: "Metroid Dread",
      genre: "Action",
      price: 59,
      img: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/software/switch/70010000042924/c7e6839975afd46893274cf7cfdb63b39a54d6f700938bcd1c8849ac66755d00"
    },
    {
      title: "The Legend of Zelda: Tears of the Kingdom",
      genre: "Adventure",
      price: 69,
      img: "https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/b37fec09f82c44c9bc3d8627b932557f_1024"
    },
    {
      title: "Donkey Kong Country Tropical Freeze",
      genre: "platformer",
      price: 74,
      img: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/store/software/switch/70010000001339/d01cba67eb98fec32ac98027c07fa8d92dd52773565bfadc69f817c860e34b8a"
    },
    {
      title: "The Legend Of Zelda Breath of the Wild",
      genre: "Adventure",
      price: 59,
      img: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/store/software/switch/70010000000025/7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58"
    },
    {
      title: "Animal Crossing New Horizons",
      genre: "Siumlation",
      price: 59,
      img: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/store/software/switch/70010000027619/9989957eae3a6b545194c42fec2071675c34aadacd65e6b33fdfe7b3b6a86c3a"
    },
    {
      title: "Mario Kart 8 Deluxe",
      genre: "Racing",
      price: 59,
      img: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/store/software/switch/70010000000153/de697f487a36d802dd9a5ff0341f717c8486221f2f1219b675af37aca63bc453"
    },
    {
      title: "Super Smash Bros Ultimate",
      genre: "Fighting",
      price: 74,
      img: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/store/software/switch/70010000012332/ac4d1fc9824876ce756406f0525d50c57ded4b2a666f6dfe40a6ac5c3563fad9"
    },
    {
      title: "Splatoon 3",
      genre: "Shooter",
      price: 79,
      img: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/store/software/switch/70010000046395/4555efa9f2061f7d1e1646ab3d3af790a7491270b1b3e32e730273e9ac096827"
    }
  ]
});

// Switch 2 // test
catalog.set("Nintendo Switch 2", {
  hardware: [
    {
      title: "Nintendo Switch 2",
      genre: "Hardware",
      price: 449,
      img: "https://http2.mlstatic.com/D_NQ_NP_758871-MLA96097438383_102025-O.webp"
    },
    {
      title: "Nintendo Switch Pro Controller 2",
      genre: "Hardware",
      price: 89,
      img: "https://preview.redd.it/switch-2-pro-controller-concept-v0-6hmej5sf6tce1.png?auto=webp&s=07fabd3c14ccd1a83620e90d1f665a0adba39954"
    }
  ],
  games: [
    {
      title: "Mario Kart world Tour",
      genre: "Racing",
      price: 109,
      img: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/store/software/switch2/70010000095431/b664445df3f7a3765a760822d725ea1853bc6f43d2aa96ccee81d6f45cb281ef"
    },
    {
      title: "Donkey Kong Bananza",
      genre: "Adventure",
      price: 96,
      img: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/store/software/switch2/70010000096809/5420893af8eee86d1e49bbf5ed445b991053e6650c28024bc9bb98333d31624c"
    },
    {
      title: "CyberPunk 2077 Definite Edition",
      genre: "RPG",
      price: 79,
      img: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/store/software/switch2/70010000095547/f172668ac499434b33917199f2021f753d42b73862d76d3c93d04a474dade847"
    },
    {
      title: "Kirby Air Riders",
      genre: "Adventure",
      price: 89,
      img: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/store/software/switch2/70010000103775/61c47511e5fc392c271d6f4736fa0575e2aed19c30e6fe73b50906cadb9b2996"
    },
    {
      title: "Hyrule Warriors: Age of Imprisonment",
      genre: "Action",
      price: 96,
      img: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/store/software/switch2/70010000103459/463c88b9defa517be9227d851857d27926c9e2ffe18337790d47a948a3af1ef5"
    }
  ]
});

// PC
catalog.set("PC", {
  hardware: [
    {
      title: "Gaming PC (Prebuilt)",
      genre: "Hardware",
      price: 1299,
      img: "https://images.icecat.biz/img/gallery/ce575b740373ce2a3ebf96228596b9c76a614271.jpg"
    },
    {
      title: "Mechanical Keyboard",
      genre: "Hardware",
      price: 99,
      img: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/SPW5C-2000x1500-BB-00?qlt=90&hei=270&wid=270&bgc=FFFFFFFF&fmt=jpg"
    }
  ],
  games: [
    {
      title: "Cyberpunk 2077",
      genre: "RPG",
      price: 59,
      img: "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg"
    },
    {
      title: "Baldur's Gate 3",
      genre: "RPG",
      price: 59,
      img: "https://cdn.akamai.steamstatic.com/steam/apps/1086940/header.jpg"
    }
  ]
});

// ---------- NEW: flat games array for ViceBot + search ----------
const games = [];
for (const [platform, data] of catalog) {
  if (data && Array.isArray(data.games)) {
    data.games.forEach(g => {
      games.push({
        ...g,
        platform
      });
    });
  }
}
window.games = games;

// ------------------------------
// State + loyalty settings
// ------------------------------
let currentPlatform = null;
let currentItems = []; // items currently displayed (for filters)
let cart = [];

const WINTER_SALE_END = new Date("2026-01-01T23:59:59");
const POINTS_PER_100 = 10;
let loyaltyPoints = 0;

// extra discount: trade 50 points for 20% off this order
let extraDiscountPercent = 0;
let redeemUsedThisCart = false;

// ------------------------------
// Helpers
// ------------------------------
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function money(n){ return Number(n).toFixed(2); }

function isWinterSaleActive(){
  return new Date() <= WINTER_SALE_END;
}

function computeSalePrice(item){
  const base = Number(item.originalPrice ?? item.price);
  if (!isWinterSaleActive()) return base;

  if (item.type === "Hardware") {
    return base * 0.8;   // 20% off
  }
  if (item.type === "Game") {
    return base * 0.5;   // 50% off
  }
  return base;
}

function setBodyBg(platform){
  const b = document.body;
  const psSymbols = $("#psSymbols");

  b.classList.remove("ps5-bg", "xbox-bg", "switch-bg", "switch2-bg", "pc-bg");

  if (psSymbols) psSymbols.style.display = "none";

  if (platform === "PS5") {
    b.classList.add("ps5-bg");
    if (psSymbols) psSymbols.style.display = "block";
  } else if (platform === "Xbox Series X|S") {
    b.classList.add("xbox-bg");
  } else if (platform === "Switch") {
    b.classList.add("switch-bg");
  } else if (platform === "PC") {
    b.classList.add("pc-bg");
  } else if (platform === "Nintendo Switch 2" || platform === "Switch 2") {
    b.classList.add("switch2-bg");
  }
}

// Build the console chips
function renderConsoleBar(){
  const bar = $("#consoleBar");
  if (!bar) return;
  bar.innerHTML = "";
  for(const key of catalog.keys()){
    const btn = document.createElement("button");
    btn.className = "chip";
    btn.dataset.cs = key;
    btn.textContent = key;
    btn.addEventListener("click", ()=>selectPlatform(key, true));
    bar.appendChild(btn);
  }
}

function markActiveChip(){
  $$("#consoleBar .chip").forEach(ch=>{
    ch.classList.toggle("active", ch.dataset.cs === currentPlatform);
  });
}

// Combine hardware + games
function itemsForPlatform(platform){
  const data = catalog.get(platform);
  if(!data) return [];
  return [
    ...data.hardware.map(x=>({...x,type:"Hardware",platform})),
    ...data.games.map(x=>({...x,type:"Game",platform}))
  ];
}

// Render catalog cards
function renderCatalog(items){
  const grid = $("#catalogGrid");
  if (!grid) return;

  grid.innerHTML = "";
  currentItems = items.slice();

  items.forEach((it, idx) => {
  const card = document.createElement("div");
  card.className = "card game-card"; // Añadimos clase extra para estilos navideños

  const priceToShow = computeSalePrice(it);
  const isDiscounted = isWinterSaleActive() && priceToShow < it.price;

 card.innerHTML = `
  <img class="hat" src="img/santa-hat.png" alt="Gorro navideño">
  <div class="hat-wrapper">
    <img class="thumb" src="${it.img}" alt="${it.title}"
         onerror="this.onerror=null;this.src='https://placehold.co/640x360?text=Image+not+available'">
  </div>
  <div class="meta">
    <div class="title">${it.title}</div>
    <div class="muted">${it.platform} • ${it.type}${it.genre && it.genre !== "Hardware" ? " • " + it.genre : ""}</div>
    <div class="price">
      ${
        isDiscounted
          ? `<span style="text-decoration:line-through;opacity:.7;margin-right:6px;">$${money(it.price)}</span>
             <span>$${money(priceToShow)}</span>`
          : `$${money(priceToShow)}`

        }
      </div>
      ${isDiscounted ? `<div class="pill">🎄 Winter Sale!</div>` : ""}
      <button class="btn add addBtn"
        data-platform="${it.platform}"
        data-index="${idx}"
      >Add to Cart</button>
    </div>
  `;
  grid.appendChild(card);
});
}

// ---------- renderGames wrapper for ViceBot + search ----------
window.renderGames = function(list){
  const enriched = list.map(g => ({
    ...g,
    type: "Game",
    platform: g.platform
  }));
  currentPlatform = null;
  const title = $("#shopTitle");
  if (title) title.textContent = "All Games";
  setBodyBg(null);
  showScreen("screen-shop", true);
  renderCatalog(enriched);
  markActiveChip();
};

// Allow ViceBot to add a game directly to cart
window.addGameFromViceBot = function(game){
  if (!game) return;
  const enriched = {
    ...game,
    type: "Game",
    platform: game.platform || game.console || "Unknown"
  };
  const original = Number(enriched.originalPrice ?? enriched.price);
  const sale = computeSalePrice(enriched);

  cart.push({
    ...enriched,
    originalPrice: original,
    salePrice: sale
  });

  updateCartUI();
  showScreen("screen-cart");
};

// ------------------------------
// Filters + Search
// ------------------------------
function applyFilters(){
  if(!currentPlatform){ return; }
  const genreSel = $("#genreSelect");
  const minEl = $("#minPrice");
  const maxEl = $("#maxPrice");
  if (!genreSel || !minEl || !maxEl) return;

  const genre = genreSel.value;
  const min = parseFloat(minEl.value || "0");
  const max = parseFloat(maxEl.value || "999999");

  const all = itemsForPlatform(currentPlatform);
  const filtered = all.filter(it=>{
    const inGenre = (genre==="ALL") || (it.genre===genre) || (it.type==="Hardware" && genre==="ALL");
    const inPrice = it.price>=min && it.price<=max;
    return inGenre && inPrice;
  });
  renderCatalog(filtered);
}

function clearFilters(){
  const genreSel = $("#genreSelect");
  const minEl = $("#minPrice");
  const maxEl = $("#maxPrice");
  if (!genreSel || !minEl || !maxEl) return;

  genreSel.value = "ALL";
  minEl.value = "";
  maxEl.value = "";
  if(currentPlatform){
    renderCatalog(itemsForPlatform(currentPlatform));
  }
}

function runGlobalSearch(q){
  const term = q.trim().toLowerCase();
  if(!term){
    if(currentPlatform){
      renderCatalog(itemsForPlatform(currentPlatform));
    }
    return;
  }
  let results = [];
  for(const [plat] of catalog){
    const items = itemsForPlatform(plat);
    results.push(...items.filter(it => it.title.toLowerCase().includes(term)));
  }
  const title = $("#shopTitle");
  if (title) title.textContent = `Search results for "${q}"`;
  showScreen("screen-shop", true);
  renderCatalog(results);
  markActiveChip();
}

// ------------------------------
// Cart
// ------------------------------
function updateCartUI(){
  const totalOriginal = cart.reduce((s,it)=> s + (Number(it.originalPrice ?? it.price) || 0), 0);
  const totalSaleBase = cart.reduce((s,it)=> s + (Number(it.salePrice ?? computeSalePrice(it)) || 0), 0);
  const saleSavings = totalOriginal - totalSaleBase;

  const extraDiscountAmount = extraDiscountPercent > 0
    ? totalSaleBase * (extraDiscountPercent / 100)
    : 0;

  const totalAfterExtra = totalSaleBase - extraDiscountAmount;

  const cartCount = $("#cartCount");
  const cartTotalHeader = $("#cartTotalHeader");
  const cartItemsCount = $("#cartItemsCount");
  const cartOriginalTotal = $("#cartOriginalTotal");
  const cartSaleTotal = $("#cartSaleTotal");
  const cartFinalTotal = $("#cartTotal");
  const saleInfo = $("#cartSaleInfo");
  const pointsEl = $("#pointsBalance");
  const redeemStatus = $("#redeemStatus");

  const miniCount = $("#miniCount");
  const miniTotal = $("#miniTotal");
  const mini = $("#miniList");
  const list = $("#cartItems");

  // header / mini
  if (cartCount) cartCount.textContent = `(${cart.length})`;
  if (cartTotalHeader) cartTotalHeader.textContent = money(totalAfterExtra);

  if (miniCount) miniCount.textContent = cart.length;
  if (miniTotal) miniTotal.textContent = money(totalAfterExtra);

  if (mini){
    mini.innerHTML = "";
    cart.forEach((it, i)=>{
      const priceToShow = Number(it.salePrice ?? computeSalePrice(it));
      const row = document.createElement("div");
      row.className = "miniRow";
      row.innerHTML = `
        <div class="muted">${it.title}</div>
        <div class="price">$${money(priceToShow)}</div>
        <button data-remove="${i}">X</button>
      `;
      mini.appendChild(row);
    });
  }

  // main cart table
  if (list){
    list.innerHTML = "";
    cart.forEach((it,i)=>{
      const original = Number(it.originalPrice ?? it.price);
      const priceToShow = Number(it.salePrice ?? computeSalePrice(it));
      const row = document.createElement("div");
      row.className = "cartRow";
      row.innerHTML = `
        <span class="cartCol cartCol--title">${it.title}</span>
        <span class="cartCol cartCol--price">$${money(original)}</span>
        <span class="cartCol cartCol--price">$${money(priceToShow)}</span>
        <span class="cartCol cartCol--action">
          <button data-remove="${i}">Remove</button>
        </span>
      `;
      list.appendChild(row);
    });
  }

  // totals in cart screen
  if (cartItemsCount) cartItemsCount.textContent = cart.length;
  if (cartOriginalTotal) cartOriginalTotal.textContent = money(totalOriginal);
  if (cartSaleTotal) cartSaleTotal.textContent = money(totalSaleBase);
  if (cartFinalTotal) cartFinalTotal.textContent = money(totalAfterExtra);

  if (saleInfo){
    let msg = "";
    if (isWinterSaleActive() && saleSavings > 0) {
      msg += `🎄 Winter Sale: You are saving $${money(saleSavings)} from the original prices.`;
    }
    if (extraDiscountAmount > 0) {
      msg += (msg ? " " : "") + `Bonus: extra ${extraDiscountPercent}% off = $${money(extraDiscountAmount)} more savings.`;
    }
    saleInfo.textContent = msg;
  }

  if (pointsEl) pointsEl.textContent = loyaltyPoints;

  if (redeemStatus){
    if (!cart.length){
      redeemStatus.textContent = "";
    } else if (extraDiscountPercent > 0) {
      redeemStatus.textContent = `✅ 20% bonus applied to this cart.`;
    }
  }
}

function addToCart(_platform, index){
  const item = currentItems[index];
  if(!item){ return; }

  const original = Number(item.originalPrice ?? item.price);
  const sale = computeSalePrice(item);

  cart.push({
    ...item,
    originalPrice: original,
    salePrice: sale
  });
  updateCartUI();
}

// ------------------------------
// Navigation + Screens
// ------------------------------
function showScreen(id, fullpage=false){
  $$(".screen").forEach(s => s.classList.remove("show"));
  const screen = document.getElementById(id);
  if (!screen) return;
  screen.classList.add("show");
  if(id==="screen-shop"){
    screen.classList.toggle("fullpage", !!fullpage);
  }else{
    screen.classList.remove("fullpage");
  }
}

function selectPlatform(platform, _viaBar=false){
  currentPlatform = platform;
  extraDiscountPercent = 0;
  redeemUsedThisCart = false;
  const title = $("#shopTitle");
  if (title) title.textContent = `${platform} Store`;
  setBodyBg(platform);
  renderCatalog(itemsForPlatform(platform));
  showScreen("screen-shop", true);
  markActiveChip();
}

// ------------------------------
// Wire up DOM
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
  renderConsoleBar();
  updateCartUI();

  // Home big console buttons
  $$(".consoleBtn").forEach(b=>{
    b.addEventListener("click", ()=>selectPlatform(b.dataset.console, false));
  });

  // Top nav
  const navHome = $("#navHome");
  const navBuy = $("#navBuy");
  const navCart = $("#navCart");
  const backHome = $("#backHome");
  const backShop = $("#backShop");

  if (navHome) navHome.addEventListener("click", ()=>{ showScreen("screen-home"); setBodyBg(null); });
  if (navBuy)  navBuy.addEventListener("click", ()=>{ showScreen("screen-shop", true); });
  if (navCart) navCart.addEventListener("click", ()=> showScreen("screen-cart"));
  if (backHome) backHome.addEventListener("click", ()=>{ showScreen("screen-home"); setBodyBg(null); });
  if (backShop) backShop.addEventListener("click", ()=> showScreen("screen-shop", true));

  // Filters
  const applyBtn = $("#applyFilters");
  const clearBtn = $("#clearFilters");
  if (applyBtn) applyBtn.addEventListener("click", applyFilters);
  if (clearBtn) clearBtn.addEventListener("click", clearFilters);

  // delegate "Add to Cart" buttons from catalog
  document.addEventListener("click", (e)=>{
    const btn = e.target.closest(".addBtn");
    if (!btn) return;
    const idx = Number(btn.dataset.index);
    addToCart(btn.dataset.platform, idx);
  });

  // Mini cart actions
  const miniClear = $("#miniClear");
  const miniGoCart = $("#miniGoCart");
  if (miniClear) miniClear.addEventListener("click", ()=>{
    cart = [];
    extraDiscountPercent = 0;
    redeemUsedThisCart = false;
    updateCartUI();
  });
  if (miniGoCart) miniGoCart.addEventListener("click", ()=> showScreen("screen-cart"));

  // Full cart actions
  const clearCartBtn = $("#clearCart");
  const checkoutBtn = $("#checkoutBtn");
  const redeemBtn = $("#redeem50");

  if (clearCartBtn) clearCartBtn.addEventListener("click", ()=>{
    cart = [];
    extraDiscountPercent = 0;
    redeemUsedThisCart = false;
    updateCartUI();
  });

  if (redeemBtn){
    redeemBtn.addEventListener("click", ()=>{
      const status = $("#redeemStatus");
      if (!cart.length){
        if (status) status.textContent = "Add items to your cart before redeeming points.";
        return;
      }
      if (redeemUsedThisCart){
        if (status) status.textContent = "You already used the 20% bonus on this cart.";
        return;
      }
      if (loyaltyPoints < 50){
        if (status) status.textContent = "You need at least 50 points to trade for the 20% bonus.";
        return;
      }
      loyaltyPoints -= 50;
      extraDiscountPercent = 20;
      redeemUsedThisCart = true;
      if (status) status.textContent = "✅ 20% bonus applied to this cart.";
      updateCartUI();
    });
  }

  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", ()=>{
      if(!cart.length){
        alert("Your cart is empty.");
        return;
      }

      const originalTotal = cart.reduce(
        (s,it)=> s + (Number(it.originalPrice ?? it.price) || 0),
        0
      );
      const discountedTotal = cart.reduce(
        (s,it)=> s + (Number(it.salePrice ?? computeSalePrice(it)) || 0),
        0
      );
      const saleSavings = originalTotal - discountedTotal;

      const extraDiscountAmount = extraDiscountPercent > 0
        ? discountedTotal * (extraDiscountPercent / 100)
        : 0;

      const finalTotal = discountedTotal - extraDiscountAmount;

      // earn new points based on what you actually paid
      const pointsEarned = Math.floor(finalTotal / 100) * POINTS_PER_100;
      loyaltyPoints += pointsEarned;

      const summaryEl = $("#checkoutSummary");
      if (summaryEl) {
        summaryEl.innerHTML = `
          <p>Original total: <strong>$${money(originalTotal)}</strong></p>
          <p>Winter Sale total: <strong>$${money(discountedTotal)}</strong></p>
          ${saleSavings > 0
            ? `<p>You saved <strong>$${money(saleSavings)}</strong> with the Winter Sale. 🎄</p>`
            : ``}
          ${extraDiscountAmount > 0
            ? `<p>Extra 20% bonus: −$${money(extraDiscountAmount)}.</p>`
            : `<p>No extra 20% bonus used this time.</p>`}
          <p>Final total to pay: <strong>$${money(finalTotal)}</strong></p>
          <p>Points earned this order: <strong>${pointsEarned}</strong></p>
          <p>Your new balance: <strong>${loyaltyPoints} points</strong>.</p>
        `;
      }

      const pointsEl = $("#pointsBalance");
      if (pointsEl) pointsEl.textContent = loyaltyPoints;

      alert(
        `Thanks for your purchase! 🎄\n\n` +
        `Original total: $${money(originalTotal)}\n` +
        `Sale total (after Winter discounts): $${money(discountedTotal)}\n` +
        (saleSavings > 0 ? `You saved $${money(saleSavings)} with the Winter Sale.\n` : "") +
        (extraDiscountAmount > 0
          ? `Extra 20% bonus: -$${money(extraDiscountAmount)}\n`
          : "") +
        `Final total: $${money(finalTotal)}\n\n` +
        `Points earned this order: ${pointsEarned}\n` +
        `Your remaining points: ${loyaltyPoints}`
      );

      cart = [];
      extraDiscountPercent = 0;
      redeemUsedThisCart = false;
      updateCartUI();
    });
  }

  // Global search (on Enter)
  const searchBar = $("#searchBar");
  if (searchBar){
    searchBar.addEventListener("keydown", (e)=>{
      if(e.key === "Enter"){
        e.preventDefault();
        runGlobalSearch(e.target.value);
      }
    });
  }

  // Home floating orb canvas (non-critical)
  try{
    const cvs = document.getElementById("viceOrbs");
    if(cvs){
      const ctx = cvs.getContext("2d");
      function size(){ cvs.width = cvs.clientWidth; cvs.height = cvs.clientHeight; }
      window.addEventListener("resize", size); size();
      const orbs = Array.from({length:18}, ()=>({
        x: Math.random()*cvs.width,
        y: Math.random()*cvs.height,
        r: 6+Math.random()*12,
        dx: -0.6+Math.random()*1.2,
        dy: -0.6+Math.random()*1.2
      }));
      function loop(){
        ctx.clearRect(0,0,cvs.width,cvs.height);
        orbs.forEach(o=>{
          o.x+=o.dx; o.y+=o.dy;
          if(o.x<0||o.x>cvs.width) o.dx*=-1;
          if(o.y<0||o.y>cvs.height) o.dy*=-1;
          const grd = ctx.createRadialGradient(o.x,o.y,0,o.x,o.y,o.r*3);
          grd.addColorStop(0,"rgba(0,229,255,.55)");
          grd.addColorStop(1,"rgba(255,77,184,.0)");
          ctx.fillStyle = grd;
          ctx.beginPath(); ctx.arc(o.x,o.y,o.r*3,0,Math.PI*2); ctx.fill();
        });
        requestAnimationFrame(loop);
      }
      loop();
    }
  }catch(_){}
});

// ================== VICEBOT + SMART SEARCH ==================
(function () {
  const openChatBtn = document.getElementById("openChat");
  const chatBox     = document.getElementById("chat");
  const chatLog     = document.getElementById("chatlog");
  const chatForm    = document.getElementById("chatForm");
  const chatInput   = document.getElementById("chatInput");
  const searchBar   = document.getElementById("searchBar");

  if (!openChatBtn || !chatBox || !chatLog || !chatForm || !chatInput || !Array.isArray(window.games)) {
    console.warn("ViceBot: missing DOM elements or games array.");
    return;
  }

  // ====== SEARCH BAR HOOK (live filter by title) ======
  if (searchBar && typeof window.renderGames === "function") {
    searchBar.addEventListener("input", (e) => {
      const term = e.target.value.toLowerCase().trim();
      if (!term) {
        window.renderGames(window.games);
        return;
      }
      const filtered = window.games.filter(g =>
        String(g.title || "").toLowerCase().includes(term)
      );
      window.renderGames(filtered);
    });
  }

  // ====== CHAT UI WIRING ======
  function addMessage(text, who) {
    const div = document.createElement("div");
    div.className = "msg " + (who === "me" ? "me" : "bot");
    div.textContent = text;
    chatLog.appendChild(div);
    chatLog.scrollTop = chatLog.scrollHeight;
  }

  openChatBtn.addEventListener("click", () => {
    const isOpen = chatBox.style.display === "flex";
    chatBox.style.display = isOpen ? "none" : "flex";
    if (!isOpen) {
      chatInput.focus();
    }
  });

  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const q = chatInput.value.trim();
    if (!q) return;

    addMessage(q, "me");
    const reply = answerQuestion(q);
    addMessage(reply, "bot");
    chatInput.value = "";
  });

  // ====== HELPER: extract platform / genre / price ======
  function getPlatform(g) {
    return String(g.platform || g.console || "").toLowerCase();
  }
  function getGenre(g) {
    return String(g.genre || "").toLowerCase();
  }
  function getPrice(g) {
    return Number(g.price || 0);
  }
  function formatGame(g) {
    return `${g.title} (${g.platform || g.console || "Unknown"} – $${getPrice(g).toFixed(2)})`;
  }

  function listNames(list, max = 5) {
    if (!list.length) return "none.";
    const shown = list.slice(0, max).map(g => g.title).join(", ");
    if (list.length > max) {
      return `${shown}, and ${list.length - max} more.`;
    }
    return shown + ".";
  }

  function cheapest(list) {
    return list.reduce((min, g) => (getPrice(g) < getPrice(min) ? g : min), list[0]);
  }

  function mostExpensive(list) {
    return list.reduce((max, g) => (getPrice(g) > getPrice(max) ? g : max), list[0]);
  }

  function parsePriceFromText(text) {
    const match = text.match(/(\d+)(?:\.\d+)?/);
    return match ? Number(match[1]) : null;
  }

  function detectPlatforms(text) {
    const found = [];
    if (text.includes("ps5")) found.push("ps5");
    if (text.includes("xbox")) found.push("xbox");
    if (text.includes("switch 2") || text.includes("switch2") || text.includes("nintendo switch 2")) found.push("nintendo switch 2");
    if (text.includes("switch") && !text.includes("switch 2")) found.push("switch");
    if (text.includes("pc")) found.push("pc");
    return found;
  }

  function detectGenres(text) {
    const known = ["action","adventure","horror","rpg","shooter","racing","platformer","simulation"];
    return known.filter(g => text.includes(g));
  }

  function filterByQuestion(text) {
    const lower = text.toLowerCase();
    const platforms = detectPlatforms(lower);
    const genres    = detectGenres(lower);

    let pool = window.games.slice();

    if (platforms.length) {
      pool = pool.filter(g => {
        const p = getPlatform(g);
        return platforms.some(pl => p.includes(pl));
      });
    }

    if (genres.length) {
      pool = pool.filter(g => {
        const gen = getGenre(g);
        return genres.some(gg => gen.includes(gg));
      });
    }

    return pool;
  }

  function wantsAddToCart(text) {
    return /(add|put|buy).*(cart)|add\b|buy\b/.test(text);
  }

  function tryAddNamedGameToCart(text) {
    const re = /add\s+(.+?)(\s+to\s+(my\s+)?cart|\s+in\s+my\s+cart|\s+into\s+my\s+cart|$)/i;
    const m = text.match(re);
    if (!m) return null;
    const namePart = m[1].trim().toLowerCase();
    if (!namePart) return null;

    const pool = window.games.filter(g =>
      String(g.title || "").toLowerCase().includes(namePart)
    );
    if (!pool.length) return null;

    const game = pool[0];
    if (typeof window.addGameFromViceBot === "function") {
      window.addGameFromViceBot(game);
    }
    if (typeof window.renderGames === "function") {
      window.renderGames([game]);
    }
    return game;
  }

  // ====== MAIN BRAIN: answerQuestion ======
  function answerQuestion(q) {
    const text = q.toLowerCase();

    // 0) Direct "add X to cart" intent
    const namedGame = tryAddNamedGameToCart(text);
    if (namedGame) {
      return `I found ${namedGame.title} and added it to your cart 🛒 You can see it in the catalog right now.`;
    }

    // 1) Small talk / vibe
    if (/(^|\b)(hi|hello|hey|hola)\b/.test(text)) {
      return "Hey babe, welcome to Vice City Games 🌴🎮 What are you looking for? (games, prices, genres, consoles…)";
    }
    if (text.includes("who are you") || text.includes("what are you")) {
      return "I’m ViceBot, your neon-soaked digital clerk for Vice City Games 💾 I can help you find games by console, genre, or price, and explain how the store works.";
    }
    if (text.includes("thank")) {
      return "You’re welcome, babe ✨ Enjoy shopping under the Miami moon.";
    }

    // 2) Store help / navigation
    if (text.includes("how") && text.includes("add") && text.includes("cart")) {
      return "To add a game to your cart, click the ‘Add to cart’ button on the game card. I can also auto-add if you say things like ‘add Elden Ring to my cart’. 🛒";
    }
    if (text.includes("clear") && text.includes("cart")) {
      return "Use the ‘Clear Cart’ button on the cart screen or the mini-cart to empty everything in one click.";
    }
    if (text.includes("filter") || text.includes("genre")) {
      return "You can filter by genre and price using the controls above the catalog. I can also help if you say things like ‘show me horror games under 50 on PS5’.";
    }
    if (text.includes("platform") || text.includes("console")) {
      return "Right now we show games for: PS5, Xbox Series X|S, Nintendo Switch, Nintendo Switch 2 (concept), and PC.";
    }

    // 3) “What games do you have?” / listing
    if (text.includes("what games") || text.includes("show me all") || text.includes("list all")) {
      const pool = filterByQuestion(text);
      if (!pool.length) {
        return "I didn’t find any games matching that description 🥺 Try another genre or console.";
      }
      if (typeof window.renderGames === "function") {
        window.renderGames(pool);
      }
      return `Here are some games I found:\n${listNames(pool)}`;
    }

    // 4) Price questions
    if (text.includes("cheapest") || text.includes("lowest price")) {
      const pool = filterByQuestion(text);
      if (!pool.length) return "No games match that filter, babe.";
      const g = cheapest(pool);

      if (typeof window.renderGames === "function") {
        window.renderGames([g]);
      }

      if (wantsAddToCart(text) && typeof window.addGameFromViceBot === "function") {
        window.addGameFromViceBot(g);
        return `The cheapest is ${formatGame(g)} — I added it to your cart 🛒`;
      }

      return `The cheapest I see is ${formatGame(g)}. I’ve highlighted it in the store for you.`;
    }

    if (text.includes("most expensive") || text.includes("highest price")) {
      const pool = filterByQuestion(text);
      if (!pool.length) return "No games match that filter, babe.";
      const g = mostExpensive(pool);

      if (typeof window.renderGames === "function") {
        window.renderGames([g]);
      }

      if (wantsAddToCart(text) && typeof window.addGameFromViceBot === "function") {
        window.addGameFromViceBot(g);
        return `The most expensive is ${formatGame(g)} — I added it to your cart 🛒`;
      }

      return `The most expensive I see is ${formatGame(g)}. I’ve highlighted it in the store for you.`;
    }

    if (text.includes("under") || text.includes("less than")) {
      const limit = parsePriceFromText(text);
      if (!limit) {
        return "Tell me a number, like ‘under 40 dollars’, and I’ll search below that price.";
      }
      const pool = filterByQuestion(text).filter(g => getPrice(g) <= limit);
      if (!pool.length) return `I don’t see any games under $${limit.toFixed(2)} for those filters.`;

      if (typeof window.renderGames === "function") {
        window.renderGames(pool);
      }

      return `Games under $${limit.toFixed(2)}:\n${listNames(pool)}\nI’ve opened them in the catalog for you.`;
    }

    if (text.includes("over") || text.includes("more than")) {
      const limit = parsePriceFromText(text);
      if (!limit) {
        return "Tell me a number, like ‘over 50 dollars’, and I’ll search above that price.";
      }
      const pool = filterByQuestion(text).filter(g => getPrice(g) >= limit);
      if (!pool.length) return `I don’t see any games over $${limit.toFixed(2)} for those filters.`;

      if (typeof window.renderGames === "function") {
        window.renderGames(pool);
      }

      return `Games over $${limit.toFixed(2)}:\n${listNames(pool)}\nI’ve opened them in the catalog for you.`;
    }

    // 5) Direct price of a game
    if (text.includes("how much") || text.includes("price of")) {
      const namePart = q.replace(/how much is|how much|price of/gi, "").trim().toLowerCase();
      if (namePart.length) {
        const pool = window.games.filter(g =>
          String(g.title || "").toLowerCase().includes(namePart)
        );
        if (pool.length) {
          const g = pool[0];

          if (typeof window.renderGames === "function") {
            window.renderGames([g]);
          }

          if (wantsAddToCart(text) && typeof window.addGameFromViceBot === "function") {
            window.addGameFromViceBot(g);
            return `${g.title} costs $${getPrice(g).toFixed(2)} on ${g.platform || g.console || "that platform"}, and I’ve added it to your cart 🛒`;
          }

          return `${g.title} costs $${getPrice(g).toFixed(2)} on ${g.platform || g.console || "that platform"}. I’ve highlighted it in the catalog for you.`;
        }
      }
      return "Tell me the game name, like ‘How much is Elden Ring?’ and I’ll check the price for you.";
    }

    // 6) Genre-based requests
    if (detectGenres(text).length || text.includes("game") || text.includes("recommend")) {
      const pool = filterByQuestion(text);
      if (!pool.length) {
        return "I couldn’t find anything with those filters, babe. Try another genre, console, or price range.";
      }

      if (typeof window.renderGames === "function") {
        window.renderGames(pool);
      }

      if (text.includes("recommend") || text.includes("suggest") || text.includes("pick one")) {
        const g = pool[Math.floor(Math.random() * pool.length)];

        if (wantsAddToCart(text) && typeof window.addGameFromViceBot === "function") {
          window.addGameFromViceBot(g);
          return `I recommend ${formatGame(g)} 🌃 and added it to your cart.`;
        }

        return `I recommend ${formatGame(g)} 🌃 I’ve opened it in the catalog for you.`;
      }

      return `Here’s what I found:\n${listNames(pool)}\nThey’re now visible in the catalog so you can add what you like.`;
    }

    // 7) Misc store questions
    if (text.includes("where") && text.includes("search")) {
      return "The search bar is at the top of the page, in the center of the header. Type part of a game’s name and I’ll filter the catalog live.";
    }

    // 8) Default fallback
    return "I might not be smart like ChatGPT, but I can help you find games by **console, genre, and price**. Try asking me things like:\n- ‘Show me horror games on PS5’\n- ‘Cheapest game under 30’\n- ‘Recommend an RPG on Xbox’ 🌴\nYou can also say ‘add Elden Ring to my cart’.";
  }

  // Little welcome message
  addMessage("Hey babe, I’m ViceBot 💾 Ask me about games, prices, genres, consoles, or how to use the store 🌴 I can even add games to your cart for you.", "bot");
})();
// --- EFECTO DE NIEVE NAVIDEÑA --- //
function createSnowflakes() {
  for (let i = 0; i < 30; i++) {
    let snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.textContent = "❄";
    snowflake.style.left = Math.random() * window.innerWidth + "px";
    snowflake.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.body.appendChild(snowflake);
  }
}

// Llamar la función cuando cargue la página
window.onload = function() {
  createSnowflakes();
};
window.addEventListener("click", () => {
  const bgMusic = document.getElementById("bgMusic");
  bgMusic.volume = 0.3; // ajusta el volumen entre 0.0 y 1.0
  bgMusic.play();
}, { once: true });
window.addEventListener("click", () => {
  const bgMusic = document.getElementById("bgMusic");
  bgMusic.volume = 0.3; // volumen entre 0.0 y 1.0
  bgMusic.play();
}, { once: true });