# 📘 Learnify

Learnify is a full-stack MERN-based learning platform that allows users to explore educational content organized into categories through a clean, responsive, and modern UI.

---

## 🚀 About the Project

Learnify is designed to provide a smooth and intuitive learning experience.  
It focuses on:

- Clean UI/UX  
- Scalable backend structure  
- Fast API responses  
- Category-wise content filtering  
- Reusable React component architecture  

---

## ✨ Features

- ✔ Category-based content browsing  
- ✔ Fully responsive UI with TailwindCSS  
- ✔ REST API built using Node.js & Express  
- ✔ MongoDB database for storing content  
- ✔ Fast page navigation using React Router  
- ✔ Clean & reusable component structure  

---

## 🧩 Tech Stack

**Frontend:** React, TailwindCSS, React Router  
**Backend:** Node.js, Express.js  
**Database:** MongoDB  
**Tools:** Git, Axios, Postman  

---
## 🏗 Project Architecture

         ┌──────────────────────────┐
         │        Frontend           │
         │  React + TailwindCSS       │
         │                            │
         └───────────▲────────────────┘
                     │ REST API Calls
                     ▼
       ┌───────────────────────────────┐
       │            Backend             │
       │      Node.js + Express         │
       │    Routing + Controllers       │
       └──────────────▲────────────────┘
                      │
                      ▼
       ┌───────────────────────────────┐
       │           Database             │
       │            MongoDB             │
       │   Content + Category Models    │
       └───────────────────────────────┘


---

## 📂 Folder Structure
```bash
Learnify/
│
├── client/ # React Frontend
│ ├── src/
│ │ ├── components/ # Reusable UI Components
│ │ ├── pages/ # Pages (Home, Content, Category)
│ │ ├── App.jsx
│ │ └── main.jsx
│ └── package.json
│
├── server/ # Backend
│ ├── controllers/
│ ├── routes/
│ ├── models/
│ ├── index.js
│ └── package.json
│
└── README.md

```
---

## ⚙️ Installation & Setup

### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/learnify.git
cd learnify
```

### **2. Setup Backend**
```bash
cd server
npm install
```
**Create a .env file:**
```bash
MONGO_URI=your_mongodb_connection_string
PORT=5000
```


**Start backend:**
```bash
npm start
```

### **3. Setup Frontend**
```bash
cd ../client
npm install
npm run dev
```

## 🛠 API Endpoints
**GET all categories**
```bash
GET /api/categories
```

**GET content by category**
```bash
GET /api/content/:category
```

**GET all content**
```bash
GET /api/content
```



