# 🏠 Apna Ghar Properties — Real Estate Website (HTML CSS JavaScript Full Project)

Ek complete, responsive **Real Estate / Property listing website** jo humne YouTube video mein **zero se** banayi — sirf HTML, CSS aur JavaScript (koi framework nahi).

🎬 **YouTube video (Hindi):** https://www.youtube.com/watch?v=C-_zuCS4AfE

📱 **Instagram Reel:** https://www.instagram.com/reel/DfRvK28IUg5/
🌐 **Live demo:** https://nm621532-byte.github.io/real-estate-website-techbroz/
💻 **Code khud chala ke dekho (free editor):** https://techbroz-code.sites.tab.bot/?v=real-estate-website
⬇️ **Download (zip):** https://github.com/nm621532-byte/real-estate-website-techbroz/raw/main/release/apna-ghar-real-estate-website-v1.0.zip (ya Releases → v1.0)

## ✨ Features
- Sticky header + hero section with search bar
- Property cards **JavaScript se** (array of objects + `forEach` + template literals), price Lakh/Crore format
- **Filter** (Flat / Villa / Plot), live **search** (city ya naam), **sort** (price low ↔ high)
- ❤️ **Favourites** with event delegation + count + "sirf favourites" view
- **localStorage** (favourites save) with `try...catch`
- **Enquiry form** validation (naam 3+ letters, 10-digit mobile)
- 🌙 **Dark mode** (CSS variables) • 📱 **Responsive** + hamburger menu

## 🐞 Video mein fix kiye 2 real bugs
1. `sort((a, b) => a.price > b.price)` kuch sort nahi karta → comparator ko **number** chahiye: `a.price - b.price`
2. Filter ke baad heart buttons kaam nahi karte (innerHTML ne naye buttons banaye) → **event delegation** (`list.addEventListener` + `closest()`)

## ▶️ Kaise chalayein
```bash
git clone https://github.com/nm621532-byte/real-estate-website-techbroz.git
cd real-estate-website-techbroz
# bas index.html ko browser mein kholo (double click)
```
Ya upar diye editor link pe kholo aur **"🌐 Website live karo"** dabao — apni website ka link mil jayega.

## 📁 Files
- `index.html` — structure (HTML)
- `style.css` — design (CSS)
- `script.js` — features (JavaScript)

## 🏠 Homework
Ek **price range filter** add karo (jaise "50 Lakh se kam") — `filter()` mein bas ek aur shart.

---
Made by **Tech Bro Z** — YouTube [@techbrozdeveloper](https://www.youtube.com/@techbrozdeveloper) • Instagram [@tech_bro_z_1](https://www.instagram.com/tech_bro_z_1/)

MIT License — seekho, badlo, apna bana lo. Pasand aaye to ⭐ star zaroor do!
