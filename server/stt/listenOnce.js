import record from "node-record-lpcm16";
import fs from "fs";
import { spawn } from "child_process";

export function listenOnce(duration = 5000) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream("input.wav");

    console.log("🎧 Listening...");

    // Use ffmpeg directly to avoid sox issues
    const ffmpeg = spawn("ffmpeg", [
      "-f", "dshow",                       // DirectShow input (Windows)
      "-i", "audio=Microphone Array (Intel® Smart Sound Technology for Digital Microphones)",
      "-ar", "16000",                      // sample rate
      "-ac", "1",                          // mono
      "-t", `${duration / 1000}`,          // duration in seconds
      "-y", "input.wav"                    // output file
    ]);

    ffmpeg.stderr.on("data", (data) => {
      // Uncomment to debug ffmpeg logs
      // console.log(`FFmpeg: ${data}`);
    });

    ffmpeg.on("error", (err) => {
      console.error("FFmpeg error:", err);
      reject(err);
    });

    ffmpeg.on("close", (code) => {
      if (code === 0) {
        console.log("🎧 Recording finished");
        resolve("what is your name");
      } else {
        reject(new Error(`FFmpeg exited with code ${code}`));
      }
    });
  });
}
