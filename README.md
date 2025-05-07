
# TODO Management App 📝

A clean and responsive TODO management application built with **React** and **Redux Toolkit**. The app supports full CRUD operations, task sorting, filtering by category, and modern form validation. Styled with TailwindCSS for rapid UI development.

## 🚀 Demo

Check out the live demo:  
👉 [https://parham-ab-cyberia-tech-todo-managemen.netlify.app/](https://parham-ab-cyberia-tech-todo-managemen.netlify.app/)

---

## 🛠 Tech Stack

- **React**  
- **Redux Toolkit**  
- **React Router DOM**  
- **TailwindCSS**  
- **React Icons**  
- **React Hook Form**  
- **Yup (Schema Validation)**

---

## 📁 Folder Structure

```
├── public
│   ├── logo.png
│   └── _redirects
│
├── src
│   ├── app
│   │   └── store.js
│   │
│   ├── assets
│   │   └── logo.png
│   │
│   ├── components
│   │   ├── Popup.jsx
│   │   ├── common
│   │   │   ├── Badge.jsx
│   │   │   ├── CustomInput.jsx
│   │   │   └── Preloader.jsx
│   │   └── layout
│   │       ├── Header.jsx
│   │       └── index.jsx
│   │
│   ├── features
│   │   └── todo
│   │       └── todoSlice.jsx
│   │
│   ├── pages
│   │   └── Homepage
│   │       ├── components
│   │       │   ├── TodoForm.jsx
│   │       │   └── TodoList.jsx
│   │       ├── constants
│   │       │   └── CATEGORY_OPTIONS.js
│   │       └── validations
│   │           └── addTodoValidations.js
│   │
│   ├── routes
│   │   └── index.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│
├── index.html
├── package.json
└── package-lock.json
```

---

## ✅ Features

- Add, edit, and delete todos
- Form validation with React Hook Form + Yup
- Filter todos by category:
  - `all`, `sport`, `work`, `personal`, `study`, `shop`
- Sort todos in ascending or descending order
- Responsive layout and clean UI

---

## 🧪 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to see the app in action.

---

## 🧾 License

This project is licensed under the MIT License.

---

## 🙌 Acknowledgements

- Built by [Parham Abolghasemi](https://github.com/parham-ab)
