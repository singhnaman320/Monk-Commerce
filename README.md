
# 🛒 Monk Commerce Frontend

A sleek, scalable, and high-performance frontend built with **React.js (Vite)** and **Tailwind CSS** for managing product workflows in the **Monk Commerce** ecosystem.  
This application streamlines **product listing**, **discount application**, **variant management**, and **drag-and-drop reordering** with a powerful and user-friendly interface.

---

## ✨ Key Features

- ✅ **Product Listing & Management**  
  Add, remove, edit, and reorder products using an intuitive drag-and-drop interface.

- 🔍 **Product Picker Dialog**  
  Select products via a scrollable modal with real-time search, infinite scroll, and multi-select support.

- 🧩 **Variant Handling**  
  Toggle visibility of product variants and manage discounts at variant-level.

- 💸 **Discount Engine**  
  Apply **flat** or **percentage-based** discounts to individual products or variants.

- 🖱️ **Drag & Drop Interface**  
  Seamless reordering of products using `react-beautiful-dnd`.

- 🔁 **Product Replacement**  
  Instantly replace a product in the list without breaking the flow.

---

## 🖥️ Tech Stack

| Technology        | Description                           |
|------------------|---------------------------------------|
| React.js (Vite)   | Lightning-fast frontend framework     |
| Tailwind CSS      | Utility-first CSS styling framework   |
| React Beautiful DnD | Drag-and-drop functionality        |
| Heroicons         | Icon library                         |
| Intersection Observer | Infinite scroll loading         |

---

## ⚙️ Project Setup

### 📦 Clone the Repository
```bash
git clone https://github.com/your-username/monk-commerce-frontend.git
cd monk-commerce-frontend
```

### 📥 Install Dependencies
```bash
npm install
```

### ▶️ Start Development Server
```bash
npm run dev
```

### 🏗 Build for Production
```bash
npm run build
```

---

## 🔗 API Integration

The frontend communicates with a REST API to fetch and manage products.
> API response should include products, variants, and pagination metadata.

---

## 📁 Folder Structure

```
monk-commerce-frontend/
├── components/
│   ├── ProductList/
│   ├── ProductPicker/
├── hooks/
├── services/
└── assets/
```
### 📦 .env
```bash
API_KEY = '<Provide API Key>';
BASE_URL = '<Provide Base URL>';
```
---

## 🗂 TODO (Planned Enhancements)

- [ ] API integration for persisting discounts  
- [ ] Enhanced product replacement experience  
- [ ] Accessibility improvements (WCAG compliance)

---

## 🤝 Contributing

We welcome contributions! 🚀

1. Fork this repo
2. Create your branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m "Add awesome feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---
