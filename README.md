# 🛍️ Online Shopping Application

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

## 📷 Screenshots

> Add images here if needed! You can drag screenshots of your Home, Cart, and Checkout pages.

---

## 🛠️ Installation

```bash
git clone https://github.com/yourusername/online-shopping-app.git
cd online-shopping-app
npm install
npm start


src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── ProductCard.jsx
│   ├── SearchBar.jsx
│   ├── Filter.jsx
├── pages/
│   ├── Home.jsx
│   ├── Cart.jsx
│   ├── CheckOutPage.jsx
├── context/
│   └── CartContext.js
├── hooks/
│   └── useDarkMode.js

🎨 Customization
Update shopping backimage.jpg in public/ for custom background.

Tweak Tailwind classes for styling enhancements.

Modify categories in Filter.jsx to suit your store's inventory.

🧠 Credits
Created by Kishore ✨ — with a passion for clean UI, scalable architecture, and dark mode friendliness.
