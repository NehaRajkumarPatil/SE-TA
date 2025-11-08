
import mongoose from "mongoose";
const QuestionSchema = new mongoose.Schema({
  questionText: String,
  type: { type: String, default: "MCQ" },
  options: [String],
  correctAnswer: String
});
const QuizSchema = new mongoose.Schema({
  title: String, description: String, category: String, difficulty: String,
  visibility: { type: String, default: "public" }, timeLimit: Number,
  questions: [QuestionSchema], createdAt: { type: Date, default: Date.now }
});
const Quiz = mongoose.model("Quiz", QuizSchema);
export default Quiz;
