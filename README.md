# 🚀 Portfolio Website (React + Three.js)

An interactive **3D personal portfolio** built with **React, Vite, and Three.js**, designed to showcase projects, skills, and experience in a modern and visually appealing way.  

---

## 📌 Table of Contents
- [✨ Overview](#-overview)
- [🌟 Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📦 Dependencies](#-dependencies)
- [⚡ Getting Started](#-getting-started)
- [📂 Project Structure](#-project-structure)
- [🎨 Customization](#-customization)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---
---

## 🌐 Live Demo

You can view the portfolio here:  
➡️ [Satwik Saxena Portfolio Live Link](https://satwiksaxena1217.web.app/) 

---


## ✨ Overview
This project serves as a **personal portfolio website** that integrates **3D visuals** with clean UI components.  
It is lightweight, fast, and scalable—perfect for developers who want to impress employers or clients with a modern web presence.  

---

## 🌟 Features
- 🎬 **3D Interactivity** with **Three.js**
- ⚡ **Blazing fast builds** powered by **Vite**
- 🎨 Styled with **Tailwind CSS**
- 📱 **Responsive design** for all devices
- 🧩 **Reusable React components**
- 🛠️ Pre-configured **ESLint** for clean code

---

## 🛠️ Tech Stack
- **Frontend:** [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)  
- **3D Graphics:** [Three.js](https://threejs.org/)  
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)  
- **Code Quality:** [ESLint](https://eslint.org/)  

---

## 📦 Dependencies

Below are the core libraries required for this project:

### Main Dependencies
```bash
npm install react react-dom three
```

- `react` → Core React library  
- `react-dom` → DOM bindings for React  
- `three` → 3D rendering engine (Three.js)  

### Development & Build Tools
```bash
npm install -D vite @vitejs/plugin-react
```

- `vite` → Fast dev server & build tool  
- `@vitejs/plugin-react` → React + JSX support for Vite  

### Tailwind CSS & Styling
```bash
npm install -D tailwindcss postcss autoprefixer
```
- `tailwindcss` → Utility-first CSS framework  
- `postcss` → CSS transformations  
- `autoprefixer` → Vendor prefixing  

Initialize Tailwind:
```bash
npx tailwindcss init -p
```

### ESLint (Code Quality)
```bash
npm install -D eslint eslint-plugin-react
```
- `eslint` → JavaScript/React linting  
- `eslint-plugin-react` → React-specific linting rules  

---

## ⚡ Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/satwik12dev/Portfolio-using-React-and-three-js.git
cd Portfolio-using-React-and-three-js
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Run Development Server
```bash
npm run dev
```
Open 👉 [http://localhost:5173](http://localhost:5173) in your browser.

### 4️⃣ Build for Production
```bash
npm run build
```

### 5️⃣ Preview Production Build
```bash
npm run preview
```

---

## 📂 Project Structure
```
Portfolio-using-React-and-three-js/
│
├── public/              # Static assets
├── src/
│   ├── assets/          
│   ├── components/    
│   ├── constants/     
│   ├── hoc/
    ├── utils/          
│   ├── App.jsx 
    ├──index.css         
│   └── main.jss     
│   
├── index.html           # Root HTML file
├── vite.config.js       # Vite configuration
├── tailwind.config.js
├── package-lock.json
├── postcss.config.js
├── eslint.config.js
└── package.json
```

---

## 🎨 Customization
- ✏️ **Content:** Update text, bio, and projects inside React components.  
- 🖼️ **3D Models/Animations:** Replace assets inside `src/assets/`.  
- 🎨 **Theme/Colors:** Edit `tailwind.config.js` or apply custom Tailwind classes.  

---

## 🤝 Contributing
Contributions are welcome!  

1. Fork this repo  
2. Create a feature branch → `git checkout -b feature/my-feature`  
3. Commit your changes → `git commit -m "Added my feature"`  
4. Push to branch → `git push origin feature/my-feature`  
5. Open a Pull Request 🚀  

---

## 📄 License
This project is licensed under the **MIT License**.  
Feel free to use, modify, and distribute it as per the license.  

---
👨‍💻 Developed by **Satwik Saxena**  
