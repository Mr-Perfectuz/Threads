# 🧵 Threads

<p align="center">
  <img src="/frontend/public/main.png" alt="Threads App Preview" />
</p>

**Threads** is a real-time messaging platform built with **React**, **Vite**, **Node.js**, and **Socket.IO**. It offers a modern UI with responsive design, real-time updates, user authentication, and a smooth chat experience — ideal for developers looking to learn or build scalable full-stack messaging applications.

---

## 🔥 Highlights

💬 Real-time messaging with Socket.IO
🔐 Secure JWT-based authentication
🧑‍🤝‍🧑 Online users tracking
✅ Seen/unseen message status
🎨 Chakra UI for accessible, styled components
📱 Mobile responsive design
🌐 CORS-ready for Vercel/Render deployment
📁 MongoDB document-based storage
⚡ Easy local development with Vite and Nodemon
📡 Deployed backend on Render, frontend on Vercel

---

## 🚀 Tech Stack

### Frontend

* **React 18 + Vite**: Fast frontend development
* **Chakra UI**: Component-based styling
* **Recoil**: State management
* **React Router DOM**: Routing
* **Framer Motion**: Smooth animations
* **Socket.IO Client**: Real-time data sync
* **Date-fns**: Friendly date formatting

### Backend

* **Node.js + Express**: REST API & WebSocket logic
* **MongoDB + Mongoose**: NoSQL database
* **Socket.IO**: Real-time bidirectional communication
* **JWT + Bcrypt**: Authentication and password hashing
* **Cloudinary**: Media/image upload handling
* **Dotenv + Nodemon**: Env config & dev workflow

---

## 🛠 Scripts

### Backend

```bash
npm run dev     # Development server with nodemon
npm run start   # Production start
```

### Frontend

```bash
npm run dev     # Starts Vite dev server
npm run build   # Build for production
npm run preview # Preview production build
```

---

## 📂 Folder Structure

```
/threads
├── backend/
│   ├── server.js            # Main Express server
│   ├── .env                 # Env config (MONGO_URI, JWT_SECRET)
│   ├── controllers/         # Request handlers
│   ├── db/                  # Database connection setup
│   ├── middlewares/        # Custom middleware functions
│   ├── models/             # Mongoose schemas
│   ├── routes/             # API routes
│   ├── socket/             # Socket.IO server logic
│   └── utils/              # Utility functions
├── frontend/
│   ├── public/             # Static files and images
│   ├── src/
│   │   ├── assets/         # Images, icons, etc.
│   │   ├── atoms/          # Recoil atoms/selectors
│   │   ├── components/     # Shared UI components
│   │   ├── context/        # React context providers
│   │   ├── hooks/          # Custom React hooks
│   │   ├── pages/          # Route-level pages
│   │   ├── App.jsx         # Main App component
│   │   ├── index.css       # Global styles
│   │   └── main.jsx        # App entry point
│   ├── .env                # VITE_API_URL, VITE_SOCKET_URL
│   ├── index.html          # HTML template
│   ├── vite.config.js      # Vite configuration
│   └── eslint.config.js    # ESLint configuration
```

---

## 🧪 Environment Setup

### Backend `.env`

```
PORT=3005
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
CLOUDINARY_URL=<your_cloudinary_url>
```

### Frontend `.env`

```
VITE_API_URL=http://localhost:3005
VITE_SOCKET_URL=http://localhost:3005
```

---

## 📦 Deployment Notes

**Frontend (Vercel)**
Update `.env` with production URLs:

```
VITE_API_URL=https://your-backend.render.com
VITE_SOCKET_URL=https://your-backend.render.com
```

**Backend (Render or Node Server)**
Ensure CORS is set correctly:

```js
cors({
  origin: ["https://your-frontend.vercel.app", "http://localhost:3000"],
  credentials: true
});
```

---

## 🧱 TODO / Roadmap

* ✅ Real-time chat
* ✅ Online user list
* ✅ Seen status
* ⬜ User typing indicator
* ⬜ Emoji/sticker support
* ⬜ File/image sharing
* ⬜ Group conversations
---

## 🧠 Credits

Created by [Anvarbek Ziyodov](https://github.com/Mr-Perfectuz)
Special thanks to open-source packages that made this project possible.

---

## 📃 License

MIT License. Free to fork and build upon.

<p align="center">
  <img src="/frontend/public/login.png"   />
  <img src="/frontend/public/main.png"  />
  <img src="/frontend/public/user_light_mode.png"   />
  <img src="/frontend/public/chat.png"   />
  <img src="/frontend/public/comment.png"   />
  <img src="/frontend/public/createPost.png"   />
  <img src="/frontend/public/like_post.png"   />
  <img src="/frontend/public/realtime_chatting.png"   />
  <img src="/frontend/public/settings.png"   />
  <img src="/frontend/public/update.png"   />
</p>
