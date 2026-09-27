import React from "react"; import {createContext,useContext,useEffect,useState} from 'react'; import api from '../lib/api';
const C=createContext(); export const useAuth=()=>useContext(C);
export function AuthProvider({children}){const [user,setUser]=useState(null);const [loading,setLoading]=useState(true);
useEffect(()=>{const t=localStorage.getItem('taskflow_token');if(!t)return setLoading(false);api.get('/auth/me').then(r=>setUser(r.data.user)).catch(()=>localStorage.removeItem('taskflow_token')).finally(()=>setLoading(false))},[]);
const login=async(data)=>{const r=await api.post('/auth/login',data);localStorage.setItem('taskflow_token',r.data.token);setUser(r.data.user)}; const register=async(data)=>{const r=await api.post('/auth/register',data);localStorage.setItem('taskflow_token',r.data.token);setUser(r.data.user)}; const logout=()=>{localStorage.removeItem('taskflow_token');setUser(null)};
return <C.Provider value={{user,loading,login,register,logout}}>{children}</C.Provider>}
