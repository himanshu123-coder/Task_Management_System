
## Fixed frontend build
This version pins Vite 6 + @vitejs/plugin-react 4 and includes vite.config.js.
# TaskFlow — Task Management Application

Full-stack task management app with JWT authentication, MongoDB, task CRUD, search/filter, responsive UI, and optional Socket.IO real-time updates.

## Stack
- Frontend: React + Vite + Tailwind CSS + Axios + React Router + Lucide React + Recharts
- Backend: Node.js + Express + MongoDB/Mongoose + JWT + bcrypt + Socket.IO

## Run locally
### 1. Backend
```bash
cd backend
npm install
copy .env.example .env
npm run dev
```

### 2. Frontend
```bash
cd frontend
npm install
copy .env.example .env
npm run dev
```

Backend: http://localhost:5000
Frontend: http://localhost:5173

MongoDB default: mongodb://127.0.0.1:27017/taskflow

## Features
- Register/login/logout with JWT
- Protected dashboard
- Create, update, delete, complete tasks
- Search, status and priority filters
- Due-date tracking
- Responsive desktop/mobile UI
- Dashboard statistics and progress chart
- Socket.IO hooks for real-time task refresh
