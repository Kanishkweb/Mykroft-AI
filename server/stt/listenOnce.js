import recorder from "node-record-lpcm16";
import fs from "fs";

export function listenOnce(duration = 5000) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream("input.wav");

    console.log("🎧 Listening...");

    const rec = recorder.record({
      sampleRate: 16000,
      channels: 1,
      audioType: "wav",
      recordProgram: "ffmpeg",
      device: "Microphone Array (Intel® Smart Sound Technology for Digital Microphones)", // 👈 EXACT NAME
      verbose: true,
    });

    rec.stream()
      .on("error", reject)
      .pipe(file);

    setTimeout(() => {
      rec.stop();
      resolve("done");
    }, duration);
  });
}
