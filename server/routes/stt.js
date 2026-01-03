import express from "express";
import fs from "fs";
import axios from "axios";
import FormData from "form-data";

const router = express.Router();

// POST /api/stt
router.post("/", async (req, res) => {
  try {
    // read the recorded file
    const audioBuffer = fs.readFileSync("input.wav");

    const formData = new FormData();
    formData.append("file", audioBuffer, "input.wav");

    // send to Whisper API or your backend AI STT
    const response = await axios.post("YOUR_STT_BACKEND_URL", formData, {
      headers: formData.getHeaders(),
    });

    const text = response.data.text || "";
    res.json({ text });
  } catch (err) {
    console.error("STT Error:", err);
    res.status(500).json({ error: "STT failed" });
  }
});

export default router;
