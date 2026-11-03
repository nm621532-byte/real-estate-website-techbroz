// 1. Properties ka data
const properties = [
  { name: "2 BHK Flat", city: "Noida", type: "Flat", price: 4500000, size: "950 sq ft", icon: "🏢" },
  { name: "Luxury Villa", city: "Gurgaon", type: "Villa", price: 21000000, size: "3200 sq ft", icon: "🏡" },
  { name: "3 BHK Flat", city: "Pune", type: "Flat", price: 8500000, size: "1450 sq ft", icon: "🏢" },
  { name: "Corner Plot", city: "Jaipur", type: "Plot", price: 3200000, size: "1800 sq ft", icon: "🌳" },
  { name: "Sea View Flat", city: "Mumbai", type: "Flat", price: 12500000, size: "1100 sq ft", icon: "🌊" },
  { name: "Farm House", city: "Lucknow", type: "Villa", price: 9800000, size: "5000 sq ft", icon: "🏡" },
  { name: "Penthouse", city: "Bangalore", type: "Flat", price: 30000000, size: "4000 sq ft", icon: "🌆" },
];

const list = document.getElementById("list");
let favs = [];
let type = "all";

// 2. Price ko Lakh / Crore mein dikhao
function money(p) {
  if (p >= 10000000) return "₹" + (p / 10000000).toFixed(2) + " Cr";
  return "₹" + p / 100000 + " Lakh";
}

// 3. Cards banao
function show(items) {
  list.innerHTML = "";
  items.forEach((p) => {
    list.innerHTML += `
      <div class="card">
        <div class="pic">${p.icon}<span class="badge">${p.type}</span></div>
        <div class="info">
          <h3>${p.name}</h3>
          <p>📍 ${p.city} • ${p.size}</p>
          <div class="row">
            <b>${money(p.price)}</b>
            <button class="fav" data-name="${p.name}">${favs.includes(p.name) ? "❤️" : "🤍"}</button>
          </div>
        </div>
      </div>`;
  });
  document.getElementById("empty").style.display = items.length ? "none" : "block";
}
show(properties);

// 4. Filter + Search + Sort
function update() {
  const q = document.getElementById("search").value.toLowerCase();
  const items = properties.filter((p) =>
    (type === "all" || p.type === type) &&
    (p.city.toLowerCase().includes(q) || p.name.toLowerCase().includes(q))
  );
  const s = document.getElementById("sort").value;
  if (s === "low") items.sort((a, b) => a.price - b.price);
  if (s === "high") items.sort((a, b) => b.price - a.price);
  show(items);
}

document.querySelectorAll(".filters button").forEach((btn) => {
  btn.onclick = () => {
    document.querySelector(".filters .active").classList.remove("active");
    btn.classList.add("active");
    type = btn.dataset.type;
    update();
  };
});
document.getElementById("search").oninput = update;
document.getElementById("sort").onchange = update;

// 5. Favourites (event delegation)
list.addEventListener("click", (e) => {
  const btn = e.target.closest(".fav");
  if (!btn) return;
  const name = btn.dataset.name;
  if (favs.includes(name)) {
    favs = favs.filter((f) => f !== name);
  } else {
    favs.push(name);
  }
  document.getElementById("favCount").textContent = favs.length;
  save();
  update();
});

document.getElementById("favBtn").onclick = () => {
  show(properties.filter((p) => favs.includes(p.name)));
};

// 6. localStorage: favourites yaad rakho
function save() {
  try {
    localStorage.setItem("favs", JSON.stringify(favs));
  } catch (err) {
    console.log("Storage band hai, koi baat nahi");
  }
}

try {
  favs = JSON.parse(localStorage.getItem("favs")) || [];
} catch (err) {}
document.getElementById("favCount").textContent = favs.length;
update();

// 7. Form validation
document.getElementById("form").onsubmit = (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const error = document.getElementById("error");
  error.style.color = "#dc2626";
  if (name.length < 3) {
    error.textContent = "Naam kam se kam 3 letters ka ho";
    return;
  }
  if (phone.length !== 10 || isNaN(phone)) {
    error.textContent = "Mobile number 10 digit ka hona chahiye";
    return;
  }
  error.style.color = "green";
  error.textContent = "✅ Shukriya " + name + "! Hum jaldi call karenge.";
  e.target.reset();
};

// 8. Dark mode
document.getElementById("themeBtn").onclick = () => {
  document.body.classList.toggle("dark");
};

// 9. Mobile menu
document.getElementById("menuBtn").onclick = () => {
  document.getElementById("nav").classList.toggle("open");
};
