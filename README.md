# 📈 MERN Stack Stock Trading Platform

A full-stack **Stock Trading Web Application** built using the **MERN Stack**  
(**MongoDB, Express.js, React.js, Node.js**).

This project provides users with a complete stock trading experience including authentication, portfolio management, dashboard analytics, and an integrated trading bot.

---

# 🚀 Features

- 🔐 User Authentication (Signup/Login)
- 📊 Interactive Trading Dashboard
- 📈 Stock Portfolio Management
- 🤖 Integrated Trading Bot
- ⚡ REST API Architecture
- 🗄️ MongoDB Database Integration
- 📡 Real-Time Data Handling
- 🎨 Responsive User Interface

---

# 🛠️ Tech Stack

## Frontend
- React.js
- HTML5
- CSS3
- JavaScript

## Backend
- Node.js
- Express.js

## Database
- MongoDB

## Tools & Libraries
- Mongoose
- JWT Authentication
- Axios
- Nodemon

---

# 📂 Project Structure


Stock-Trading-Platform/
│
├── frontend/          # Main frontend application
│
├── backend/           # Backend server and APIs
│
├── dashboard/         # Dashboard + Trading Bot
│
└── README.md
---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone <repository-link>
```

---

## 2️⃣ Move into the Project Directory

```bash
cd Stock-Trading-Platform
```

---

# 🗄️ MongoDB Setup

1. Create a cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Copy your MongoDB connection string
3. Create a `.env` file inside the `backend` folder

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string

```

---

# ▶️ Running the Project

## 🔹 Start Backend Server

Open Terminal 1:

```bash
cd backend
npm install
npm start
```

---

## 🔹 Start Dashboard

Open Terminal 2:

```bash
cd dashboard
npm install
npm start
```

---

## 🔹 Start Frontend

Open Terminal 3:

```bash
cd frontend
npm install
npm start
```

---


---

# 🔑 How to Use

1. Open the frontend in your browser
2. Create a new account using **Sign Up**
3. Login with your credentials
4. After successful login, the dashboard will open
5. Start exploring trading features and bot functionality

---

# 🤖 Trading Bot

The dashboard section also includes an automated trading bot that helps simulate trading operations and enhances the overall platform functionality.

---

# 📦 Future Improvements

- 📈 Live Stock Market API Integration
- 🔔 Real-Time Notifications
- 📱 Fully Responsive Mobile Design
- 💳 Payment Gateway Integration
- 🧠 AI-Based Trading Suggestions
- 📊 Advanced Analytics & Reports
