import say from "say";
export async function speak(text) {
  console.log("🗣️ Kannu:", text);
  // On Windows, female voice is usually "Microsoft Zira Desktop"
  say.speak(text, "Microsoft Zira Desktop", 1.0);
}
