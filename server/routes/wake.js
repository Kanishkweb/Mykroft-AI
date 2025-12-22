import express from "express";
import { handleAfterWake } from "../assistant/afterWake.js";
import { getState } from "../assistant/state.js";

const router = express.Router();

router.post("/", (req, res) => {
  if (getState() !== "IDLE") return res.sendStatus(200);

  console.log("🔥 Wakeword received");
  handleAfterWake("default-session");

  res.sendStatus(200);
});

export default router;
