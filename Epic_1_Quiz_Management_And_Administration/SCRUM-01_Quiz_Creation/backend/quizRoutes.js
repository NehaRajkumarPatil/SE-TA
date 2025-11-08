
import express from "express";
import Quiz from "./quizModel.js";
const router = express.Router();
router.post("/", async (req,res)=>{ try{ const q=new Quiz(req.body); await q.save(); res.status(201).json(q);}catch(e){res.status(500).json({error:e.message});}});
router.get("/", async (req,res)=>{ const list=await Quiz.find({}); res.json(list);});
router.get("/:id", async (req,res)=>{ const q=await Quiz.findById(req.params.id); res.json(q);});
export default router;
