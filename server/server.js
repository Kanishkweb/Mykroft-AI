import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import aiRoutes from "./routes/aiRoutes.js";
import say from "say";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

function speak(text) {
  // On Windows, female voice is usually "Microsoft Zira Desktop"
  say.speak(text, "Microsoft Zira Desktop", 1.0); 
}
app.use("/api", aiRoutes);

app.get("/", (req, res) => {
  res.send("Kannu AI backend is running...");
});
app.post("/", (req, res) => {
  const { wakeword, message } = req.body;

  if (wakeword) {
    console.log("🔥 Wakeword detected!");
    speak("Yes? I am listening. Welcome to the ultron world Kanishk. I am your personal ai assisant speaking. Anything today I can do for you.");
    return res.json({ response: "Yes? I am listening." });
  }

  if (message) {
    console.log("💬 Message received:", message);
    return res.json({ response: "I heard your message." });
  }

  res.json({ response: "Idle" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
