# 🛒 Modern E-Commerce Store (React + Redux Toolkit)

A modern, responsive e-commerce frontend application built using **React**, **Redux Toolkit**, and **Tailwind CSS**.  
This project demonstrates real-world state management, UI patterns, and shopping cart functionality similar to actual online stores.

---

## 🚀 Features

- 📦 Product listing with images
- 🔍 Search and filter products in real time
- 🪟 Product details modal
- 🛒 Add to cart using Redux Toolkit
- 🔢 Cart item quantity management
- 🧮 Dynamic cart total calculation
- 🧾 Separate cart view (side modal)
- 📱 Fully responsive design
- 🎨 Modern UI using Tailwind CSS

---

## 🧠 Tech Stack

- **React** – Component-based UI
- **Redux Toolkit** – Global state management
- **React Redux** – Connecting Redux with React
- **Tailwind CSS** – Utility-first styling
- **Vite** – Fast development environment

---

## 📂 Project Structure

src/
┣ components/
┃ ┣ Navbar.jsx
┃ ┣ ProductCard.jsx
┃ ┣ ProductGrid.jsx
┃ ┣ ProductModal.jsx
┃ ┗ CartModal.jsx
┣ data/
┃ ┗ products.js
┣ store/
┃ ┣ store.js
┃ ┗ cartSlice.js
┣ App.jsx
┣ main.jsx
┗ index.css

yaml
Copy code

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/e-commerce.git
cd ecommerce
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Run the development server
bash
Copy code
npm run dev