# 🚀 Full Stack MERN Portfolio

A modern, high-performance personal portfolio website built to showcase skills, projects, and professional experience. Designed with a mobile-first approach, this application features a sleek dark-themed UI, smooth animations, and a fully functional contact system using **EmailJS**.

---

## ✨ Key Features

-   **🎨 Modern & Responsive UI:** Built with **React** and **Tailwind CSS** for a pixel-perfect experience across all devices.
-   **⚡ High Performance:** Optimized with **Vite** for lightning-fast load times and hot module replacement.
-   **🛠️ Tech Stack Integration:** Demonstrates real-world Full Stack capabilities using the MERN ecosystem (MongoDB, Express, React, Node.js).
-   **📧 Working Contact Form:** Integrated with **EmailJS** to send real-time emails directly from the frontend interface.
-   **🔔 User Feedback:** Uses **React Hot Toast** for professional, non-intrusive success/error notifications.
-   **💫 Smooth Animations:** Enhanced with subtle CSS animations and hover effects for a premium feel.
-   **📱 Mobile-Optimized:** Custom layouts for mobile to ensure readability and usability (e.g., collapsible project cards).

---

## 🛠️ Technology Stack

### **Frontend**
-   **Framework:** [React.js 19](https://react.dev/)
-   **Build Tool:** [Vite](https://vitejs.dev/)
-   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **Notifications:** [React Hot Toast](https://react-hot-toast.com/)
-   **Animations:** Custom CSS Keyframes & Transitions

### **Backend**
-   **Runtime:** [Node.js](https://nodejs.org/)
-   **Framework:** [Express.js](https://expressjs.com/)
-   **Utilities:** `cors`, `dotenv`
-   **Email Service:** [EmailJS](https://www.emailjs.com/) (REST API integration)

---

## 📂 Project Structure

```bash
Portfolio-website/
├── frontend/             # React Client Application
│   ├── src/
│   │   ├── components/   # Reusable UI Components (Hero, Projects, Contact, etc.)
│   │   ├── App.jsx       # Main Application Layout
│   │   └── index.css     # Global Styles & Tailwind Directives
│   ├── .env.example      # Frontend Environment Variables Template
│   └── package.json      # Frontend Dependencies
│
├── backend/              # Node.js Express Server
│   ├── index.js          # API Routes & Server Entry Point
│   ├── .env.example      # Backend Environment Variables Template
│   └── package.json      # Backend Dependencies
│
└── README.md             # Project Documentation
```

---

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### **Prerequisites**
-   **Node.js** (v18 or higher recommended)
-   **npm** or **yarn**

### **1. Clone the Repository**

```bash
git clone https://github.com/Mathiyarasan2102/Portfolio-webSite.git
cd Portfolio-webSite
```

### **2. Frontend Setup**

Navigate to the frontend directory, install dependencies, and start the dev server.

```bash
cd frontend
npm install
```

**Configure Environment:**
Create a `.env` file in the `frontend` folder based on `.env.example`:

```properties
VITE_API_URL=http://localhost:5000
```

**Run Frontend:**
```bash
npm run dev
```
The app will run at `http://localhost:5173`.

### **3. Backend Setup**

Open a new terminal, navigate to the backend directory, and install dependencies.

```bash
cd backend
npm install
```

**Configure Environment:**
Create a `.env` file in the `backend` folder based on `.env.example`. You will need your EmailJS credentials.

```properties
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_PUBLIC_KEY=your_public_key
EMAILJS_PRIVATE_KEY=your_private_key
PORT=5000
```

**Run Backend:**
```bash
npm start
```
The server will run at `http://localhost:5000`.

---

## 🛡️ Security & Best Practices

-   **Environment Variables:** Sensitive keys (like EmailJS secrets) are stored in `.env` files and never committed to version control.
-   **Input Handling:** The backend securely proxies requests to EmailJS, preventing exposure of private keys on the client side.
-   **Error Handling:** Robust error handling ensures the user receives clear feedback (via Toasts) without exposing server stack traces.

---

## 👨‍💻 Author

**Mathiyarasan P**
*   **Role:** Full Stack MERN Developer
*   **Location:** Trichy, Tamil Nadu
*   **Portfolio:** [Your Portfolio URL]
*   **LinkedIn:** [linkedin.com/in/mathiyarasan-p](https://www.linkedin.com/in/mathiyarasan-p)
*   **GitHub:** [github.com/Mathiyarasan2102](https://github.com/Mathiyarasan2102)

---

*Made with ❤️ and code.*
