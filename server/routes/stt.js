import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  // TEMP: replace with Whisper later
  res.json({ text: "what is the time now" });
});

export default router;
