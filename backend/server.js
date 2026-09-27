import 'dotenv/config'; import express from 'express'; import cors from 'cors'; import morgan from 'morgan'; import http from 'http'; import {Server} from 'socket.io'; import {connectDB} from './config/db.js'; import authRoutes from './routes/auth.js'; import taskRoutes from './routes/tasks.js';
await connectDB(); const app=express(); const server=http.createServer(app); const io=new Server(server,{cors:{origin:process.env.CLIENT_URL||'http://localhost:5173'}}); app.set('io',io);
app.use(cors({origin:process.env.CLIENT_URL||'http://localhost:5173'})); app.use(express.json()); app.use(morgan('dev'));
app.get('/api/health',(req,res)=>res.json({ok:true,message:'TaskFlow API running'})); app.use('/api/auth',authRoutes); app.use('/api/tasks',taskRoutes);
io.on('connection',socket=>{socket.on('join:user',userId=>socket.join(`user:${userId}`));});
const PORT=process.env.PORT||5000; server.listen(PORT,()=>console.log(`API running on http://localhost:${PORT}`));
