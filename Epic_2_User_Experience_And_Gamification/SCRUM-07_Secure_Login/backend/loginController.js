
import express from "express";
import bcrypt from "bcryptjs";
import User from "../SCRUM-06_User_Registration/backend/userModel.js";
const router = express.Router();
router.post("/login", async (req,res)=>{ const {email,password}=req.body; const u=await User.findOne({email}); if(!u) return res.status(400).json({error:'invalid'}); const ok=await bcrypt.compare(password,u.password); if(!ok) return res.status(400).json({error:'invalid'}); res.json({msg:'ok', user:{name:u.name,email:u.email}});});
export default router;
