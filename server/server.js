import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import aiRoutes from "./routes/aiRoutes.js";
import wakeRoute from "./routes/wake.js";
import sttRoute from "./routes/stt.js";
import getDHT22Data from "./utils/getDHT22Data.js";
import say from "say";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

function speak(text) {
  // On Windows, female voice is usually "Microsoft Zira Desktop"
  say.speak(text, "Microsoft Zira Desktop", 1.0);
}
async function runSensorCheck() {
  const data = await getDHT22Data();
  if (data) {
    console.log(`Temperature: ${data.temperature}°C`);
    console.log(`Humidity: ${data.humidity}%`);
  }
}

runSensorCheck();

app.use("/api/wake", wakeRoute);
app.use("/api/stt", sttRoute);
app.use("/api/kannu", aiRoutes);

app.get("/", (req, res) => {
  res.send("Kannu AI backend is running...");
});
app.post("/", (req, res) => {
  const { wakeword, message } = req.body;

  if (wakeword) {
    let str =
      "Yes, you can run a lightweight AI agent on a Raspberry Pi, using libraries like TensorFlow Lite or PyTorch Mobile and pairing it with local inference or cloud‑backed models. It works best for simple tasks such as voice commands, sensor monitoring, or basic image recognition.";
    console.log("🔥 Wakeword detected!");
    // speak("Yes? I am listening. Welcome to the ultron world Kanishk. I am your personal ai assisant speaking. Anything today I can do for you.");
    speak(str);
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
