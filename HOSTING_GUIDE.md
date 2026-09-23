# 🧁 Aone's Cakes N Bakes (Since 1952) - Website & Hosting Guide

Congratulations! Your professional bakery web application for **Aone's Cakes N Bakes** is ready. It features your 70+ year legacy (since 1952), custom cake builder, 100% pure butter cookies section, party decor, imported chocolates, frozen snacks (veg/non-veg), gifting hampers, direct WhatsApp ordering, and social media integration!

---

## 🌟 Key Features Included in Your Website

1. **Heritage Branding (Since 1952)**:
   - Deep warm artisanal chocolate & gold aesthetic.
   - Highlights 70+ years of trust, 100% original butter cookies, and fresh daily baking.

2. **Full Product Catalog Across All 7 Categories**:
   - 🎂 **Cakes & Pastries** (Custom Birthday Cakes, Truffle Pastries, Red Velvet, Dessert Slices)
   - 🍪 **100% Original Butter Cookies & Biscuits** (Atta Cookies, Macarons, Pure Butter Biscuits)
   - 🍞 **Breads, Pav & Buns** (Soft Pav Buns, Burger Buns, Whole Wheat Loaves)
   - 🎈 **Party Shop & Decor** (Cake Toppers, Sparkling Candles, Birthday Kits)
   - 🍬 **Imported Confectionery** (Swiss Chocolates, Gourmet Wafers, Candies)
   - ❄️ **Frozen Foods (Veg & Non-Veg)** (Veg Patties, Chicken Nuggets)
   - 🎁 **Gifting & Hampers** (Festive Gift Baskets & Cookie Tins)

3. **Direct WhatsApp Order Generator**:
   - Customers can add items to their **Inquiry Cart** and click **"Send Order List to WhatsApp"**.
   - It automatically formats a clean itemized message with total prices and opens WhatsApp with your bakery number!

4. **Custom Birthday & Designer Cake Request Tool**:
   - Allows customers to select Flavor, Weight (0.5kg to 3kg+), Egg/Eggless, Occasion, Name, and Custom Message.
   - Sends a formatted custom cake inquiry directly to your WhatsApp.

5. **Owner Security & Locked Public Settings**:
   - Public visitor photo uploading and setting modal options are disabled so nobody on the internet can tamper with your bakery images or store details.
   - Photos and store details are permanently set and managed safely by you in your local files (`data.js` & `index.html`).

6. **Social & Contact Hub**:
   - One-click buttons for **WhatsApp**, **Instagram**, **Facebook**, **Google Maps Store Location**, and Phone number.

---

## 📸 How to Update Bakery & Product Photos (Owner Only)

Since public uploads are locked for hosting security, you can easily change photos anytime directly in your files:

1. Put your image files in the `images/` folder.
2. Open [`data.js`](file:///c:/Users/kshit/New%20folder/data.js).
3. Update the `image:` property for any product with your image path (e.g., `'images/my_butter_cookie.jpg'`).

---

## 📱 How to Update WhatsApp Number & Social Handles (Owner Only)

1. Open [`data.js`](file:///c:/Users/kshit/New%20folder/data.js).
2. Edit `BAKERY_CONFIG`:
   - `whatsappNumber: "919417024147"`
   - `instagramHandle: "aone.cakesbakes1952"`
   - `facebookHandle: "aonescakesnbakes"`
   - `phoneNumber: "+91 94170 24147"`

---

## 🚀 How to Host Your Website FOR FREE

### Option 1: GitHub Pages (Recommended & 100% Free Lifetime)
1. Create a free account on [GitHub.com](https://github.com).
2. Create a new repository named `aones-cakes-n-bakes`.
3. Drag and drop all files from this folder (`index.html`, `styles.css`, `data.js`, `app.js`) into your repository.
4. Go to **Settings** -> **Pages** -> Select `main` branch -> Click **Save**.
5. Your website URL will be live at: `https://yourusername.github.io/aones-cakes-n-bakes/`!

### Option 2: Netlify or Vercel (Instant 1-Minute Drag & Drop)
1. Go to [Netlify Drop](https://app.netlify.com/drop) or [Vercel](https://vercel.com).
2. Drag and drop the workspace folder (`c:\Users\kshit\New folder`).
3. In 10 seconds, Netlify/Vercel will give you a free live URL (e.g. `aonescakesnbakes.netlify.app`).

### Option 3: Google Sites / Google Business Profile
1. Go to [sites.google.com](https://sites.google.com).
2. You can embed your live GitHub/Netlify link inside Google Page or link it directly on your **Google My Business** bakery profile!

---

## 📂 Project Files Summary

- [`index.html`](file:///c:/Users/kshit/New%20folder/index.html) - Main Bakery Website
- [`styles.css`](file:///c:/Users/kshit/New%20folder/styles.css) - Premium Gold & Dark Chocolate Theme
- [`data.js`](file:///c:/Users/kshit/New%20folder/data.js) - Product Catalog Dataset & Config
- [`app.js`](file:///c:/Users/kshit/New%20folder/app.js) - Interactive Search, Cart, WhatsApp & Photo Uploader Logic
