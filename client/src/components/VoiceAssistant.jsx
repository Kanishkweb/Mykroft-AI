import React, { useState, useEffect, useRef } from "react";

const VoiceAssistant = () => {
  const [listening, setListening] = useState(false);
  const [activated, setActivated] = useState(false); // <-- new state
  const [message, setMessage] = useState("");
  const recognitionRef = useRef(null);

  // Text-to-Speech
  const speak = (text) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-IN";
    synth.speak(utterance);
  };
  //-------------------------------------------
  // AUTO RESTART FIX
useEffect(() => {
  let interval;

  if (listening && recognitionRef.current) {
    interval = setInterval(() => {
      console.log("🔄 Force restart to bypass Chrome timeout");
      recognitionRef.current.stop();
      recognitionRef.current.start();
    }, 9000);
  }

  return () => clearInterval(interval);
}, [listening]);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = "en-IN";
    recognitionRef.current = recognition;

    recognition.onresult = async (event) => {
      const transcript = event.results[event.resultIndex][0].transcript.trim();
      console.log("Heard:", transcript);
      setMessage(transcript);

      if (!activated) {
        if (
          transcript.toLowerCase().includes("hey kannu") ||
          transcript.toLowerCase().includes("jarvis")
        ) {
          setActivated(true);
          speak("Hello, I am Kannu! How can I help you?");
        }
      } else {
        try {
          const response = await fetch("http://localhost:5000/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: transcript }),
          });
          const data = await response.text();
          setMessage(data);
          speak(data);
        } catch (error) {
          console.error("Error:", error);
          speak("Sorry, I couldn't get a response.");
        } finally {
          setActivated(false);
        }
      }
    };

    recognition.onerror = (err) => {
      console.error("Recognition error:", err);
    };
  }, [activated]);

  const toggleListening = () => {
    if (!recognitionRef.current) return;
    if (listening) {
      recognitionRef.current.stop();
      setListening(false);
    } else {
      recognitionRef.current.start();
      setListening(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-4xl font-bold mb-6">🎙️ Kannu AI</h1>
      <button
        onClick={toggleListening}
        className={`px-6 py-3 rounded-full text-lg !bg-black  font-semibold transition-all ${
          listening ? "bg-red-500" : "bg-pink-500"
        }`}
      >
        {listening ? "Stop Listening" : "Start Listening"}
      </button>
      <p className="mt-6 text-gray-300 italic">
        {activated
          ? "Listening for your command..."
          : message
          ? `Heard: "${message}"`
          : "Waiting for wake word..."}
      </p>
    </div>
  );
};

export default VoiceAssistant;
