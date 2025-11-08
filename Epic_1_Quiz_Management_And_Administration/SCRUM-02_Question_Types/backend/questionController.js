
import express from "express";
import Quiz from "../SCRUM-01_Quiz_Creation/backend/quizModel.js";
const router = express.Router();
router.post("/add/:quizId", async (req,res)=>{ const q=await Quiz.findById(req.params.quizId); q.questions.push(req.body); await q.save(); res.json(q); });
export default router;
