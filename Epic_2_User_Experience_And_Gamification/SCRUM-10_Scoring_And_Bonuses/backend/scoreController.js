
import express from "express";
import User from "../SCRUM-06_User_Registration/backend/userModel.js";
const router = express.Router();
router.post("/update/:email", async (req,res)=>{ const u=await User.findOne({email:req.params.email}); if(!u) return res.status(404).json({error:'no'}); u.score=(u.score||0)+ (req.body.delta||0); await u.save(); res.json({score:u.score});});
export default router;
