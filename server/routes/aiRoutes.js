import dotenv from "dotenv";
dotenv.config();
import express from "express";
import Groq from "groq-sdk";
import { addMessage, getContext } from "../helper/conversationMemory.js";
console.log(process.env.GROQ_API_KEY);
const router = express.Router();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// ROUTE: /api/kannu/chat
router.post("/chat", async (req, res) => {
  try {
    const { message , sessionId } = req.body;
    console.log(message);

    if (!message || !sessionId) {
      return res.status(400).json({ error: "Message and sessionId is required" });
    }

    // add user message to memory
    addMessage(sessionId,"user",message);

    // get conversation content
    const contextMessages = getContext(sessionId);

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: "You are Kannu, the personal AI assistant." },
        { role: "user", content: contextMessages },
      ],
      model: "openai/gpt-oss-20b", 
      temperature: 1,
      max_completion_tokens: 8192,
      top_p: 1,
      stream: false, // full response
      reasoning_effort: "medium",
    });

    // Extract the response text
    const token = chatCompletion.choices[0]?.message?.content || "No response";

    // Send the result as a string
    // let token = "Welcome to the Ultron World Kanishk. I am your personal jarvis assistant for your future creation universe"
    res.status(200).send(token);

  } catch (error) {
    console.error("AI Error:", error);
    res.status(500).json({
      error: "AI error",
      details: error?.message || error,
    });
  }
});

export default router;
