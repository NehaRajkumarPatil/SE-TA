
import express from "express";
import bcrypt from "bcryptjs";
import User from "./userModel.js";
const router = express.Router();
router.post("/register", async (req,res)=>{ try{ const {name,email,password}=req.body; if(await User.findOne({email})) return res.status(400).json({error:'exists'}); const hash=await bcrypt.hash(password,8); const u=new User({name,email,password:hash,score:0}); await u.save(); res.json({msg:'registered'});}catch(e){res.status(500).json({error:e.message});}});
export default router;
