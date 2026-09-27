import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
const tokenFor=id=>jwt.sign({id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRES_IN||'7d'});
export const register=async(req,res)=>{
  try{const {name,email,password}=req.body;if(!name||!email||!password||password.length<6)return res.status(400).json({message:'Name, email and password (6+ chars) are required'});if(await User.findOne({email}))return res.status(409).json({message:'Email already registered'});const user=await User.create({name,email,password:await bcrypt.hash(password,12)});res.status(201).json({token:tokenFor(user._id),user:{id:user._id,name:user.name,email:user.email}})}catch(e){
  console.error("REGISTER ERROR:", e);
  res.status(500).json({
    message: "Registration failed",
    error: e.message
  });
}
};
export const login=async(req,res)=>{try{const {email,password}=req.body;const user=await User.findOne({email}).select('+password');if(!user||!(await bcrypt.compare(password,user.password)))return res.status(401).json({message:'Invalid email or password'});res.json({token:tokenFor(user._id),user:{id:user._id,name:user.name,email:user.email}})}catch(e){res.status(500).json({message:'Login failed'})}};
export const me=async(req,res)=>res.json({user:{id:req.user._id,name:req.user.name,email:req.user.email}});
