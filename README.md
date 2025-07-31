# 🛍️ Online Shopping Application

Live: https://onlineshoppingcart1.netlify.app/

An elegant, responsive e-commerce web app built with React, Tailwind CSS, and context-based state management. This app features dark mode support, cart functionality, product filtering, and a modern checkout experience.

---

## 🚀 Features

- 🧭 SPA with React Router and dynamic routes
- 🌓 Light/Dark mode toggle with localStorage persistence
- 🛒 Add to Cart, quantity management, and live cart badge
- 🔍 Live search and category filter dropdown
- 🎨 Beautiful UI using Tailwind CSS and backdrop image styling
- 🧾 Checkout form with customer details and order summary
- 📦 Context-based cart management (`CartContext`)
- ⚡ Fixed background image and responsive design

---

## 🧑‍💻 Tech Stack

| Frontend   | Styling        | State Management | Routing       |
|------------|----------------|------------------|----------------|
| React      | Tailwind CSS   | React Context     | React Router  |
| HTML5      | CSS3           | useState/useEffect | Dynamic Routing |

---


## 🛠️ Installation

```bash
git clone https://github.com/KishoreKumar6/shopping-app
cd shopping-app
npm install
npm start


## 🧱 App Structure

```plaintext
src/
├── components/
│   ├── CartItem.js
│   ├── Filter.js
│   ├── Footer.js
│   ├── Header.js
│   ├── ProductCard.js
│   ├── SearchBar.js
├── context/
│   └── CartContext.js
├── hooks/
│   └── useDarkMode.js
├── pages/
│   ├── Cart.js
│   ├── CheckOutPage.js
│   ├── Home.js
│   ├── OrderSummary.js
│   └── ProductDetails.js
├── App.js
└── index.js


🧠 Credits
Created by Kishore ✨ — with a passion for clean UI, scalable architecture, and dark mode friendliness.
