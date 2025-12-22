import { listenOnce } from "../stt/listenOnce.js";
import { speak } from "../tts/speak.js";
import { setState } from "./state.js";
import axios from "axios";

export async function handleAfterWake(sessionId) {
  try {
    setState("LISTENING");
    await speak("Yes?");

    const userText = await listenOnce();
    console.log("🧍 User said:", userText);

    if (!userText) {
      await speak("I didn't hear anything.");
      setState("IDLE");
      return;
    }

    setState("THINKING");

    const aiRes = await axios.post(
      "http://localhost:5000/api/kannu/chat",
      {
        message: userText,
        sessionId,
      }
    );

    const reply = aiRes.data;
    setState("SPEAKING");
    await speak(reply);

    setState("IDLE");
  } catch (err) {
    console.error(err);
    setState("IDLE");
  }
}
