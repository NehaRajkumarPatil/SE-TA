
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
const MONGO = process.env.MONGO_URI || "mongodb://localhost:27017/gamified_quiz";
mongoose.connect(MONGO).then(()=>console.log("MongoDB connected")).catch(e=>console.error(e));

// mount routers
import quizRoutes from "./Epic_1_Quiz_Management_And_Administration/SCRUM-01_Quiz_Creation/backend/quizRoutes.js";
import questionRoutes from "./Epic_1_Quiz_Management_And_Administration/SCRUM-02_Question_Types/backend/questionController.js";
import authRoutes from "./Epic_2_User_Experience_And_Gamification/SCRUM-06_User_Registration/backend/authRoutes.js";
import loginRoutes from "./Epic_2_User_Experience_And_Gamification/SCRUM-07_Secure_Login/backend/loginController.js";
import scoreRoutes from "./Epic_2_User_Experience_And_Gamification/SCRUM-10_Scoring_And_Bonuses/backend/scoreController.js";
import leaderboardRoutes from "./Epic_2_User_Experience_And_Gamification/SCRUM-12_Leaderboard_And_Weekly_Reset/backend/leaderboardController.js";

app.use("/api/quizzes", quizRoutes);
app.use("/api/questions", questionRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/auth", loginRoutes);
app.use("/api/scores", scoreRoutes);
app.use("/api/leaderboard", leaderboardRoutes);

app.get("/", (req,res)=> res.send("Gamified Quiz Builder API"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log("Server listening on", PORT));
