// src/models/Resume.js
import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // optional for later
  originalName: { type: String }, // uploaded file name
  fileType: { type: String },     // pdf/docx
  text: { type: String, required: true }, // extracted raw text
  skills: [String],               // extracted skills from resume
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Resume", ResumeSchema);
