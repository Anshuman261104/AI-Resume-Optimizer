// src/app.js
import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

// Middlewares
app.use(cors());                   // Allow cross-origin requests
app.use(express.json());           // Parse JSON bodies
app.use(morgan("dev"));            // Log requests

// Test route
app.get("/", (req, res) => {
  res.send("AI Resume Optimizer Backend is running 🚀");
});

export default app;
