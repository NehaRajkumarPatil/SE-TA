
import express from "express";
import User from "../SCRUM-06_User_Registration/backend/userModel.js";
const router = express.Router();
router.get("/", async (req,res)=>{ const users = await User.find({}).sort({score:-1}).limit(20); res.json(users.map(u=>({name:u.name,score:u.score})));});
export default router;
