🤖 **Mykroft – Offline AI Assistant for Smart Environments**  
**Privacy-first | Offline | Sensor-Aware | Edge AI**

Mykrot is an offline AI assistant that understands voice commands and real-time environmental data to control smart devices. Unlike cloud-based assistants, Mykroft runs locally, ensuring low latency, high reliability, and full user privacy.

---

## 🚀 **Key Features**

🟢 **Offline Wake Word Detection**
- Uses **openWakeWord** (open-source)
- Works **100% offline**
- Trained on **30,000+ hours** of audio data
- Wake-up latency **< 0.20 ms**
- Extremely low false activations

🧠 **Local AI Brain (PC-Based)**
- PC acts as the central brain
- Processes commands locally
- Makes decisions using sensor context
- No Raspberry Pi required
- Ready for **offline LLM integration**

🎙️ **Voice-Controlled Automation**
- Turn **ON / OFF** lights and appliances
- Voice commands → AI reasoning → hardware action
- Controlled using **ESP32 + Relay Module**

🌡️ **Real-Time Sensor Awareness**  
The assistant understands the environment using live sensor data:
- **DHT22** – Temperature & Humidity
- **MQ-2** – Smoke Detection
- **MQ-6** – Gas Leakage
- **MQ-7** – Carbon Monoxide
- **MQ-135** – Air Quality Index (AQI)
- **PIR Sensor** – Motion Detection

🔐 **Privacy-First Architecture**
- No cloud dependency
- No continuous audio streaming
- All voice processing happens locally
- Works even without internet

---

## 🧩 **System Architecture**
User Voice
↓
Wake Word Detection (Offline)
↓
Speech-to-Text (Local)
↓
AI Brain (PC)
↓
Decision Making
↓
ESP32 (Wi-Fi)
↓
Sensors & Relays


---

## 🛠️ **Hardware Used**
- ESP32 Microcontroller
- DHT22 Temperature & Humidity Sensor
- MQ-2, MQ-6, MQ-7, MQ-135 Gas Sensors
- PIR Motion Sensor
- Relay Module
- Breadboard & Jumper Wires
- USB Microphone

---

## 💻 **Software Stack**
- **Wake Word:** openWakeWord (Offline)
- **Backend AI Brain:** Node.js / Python
- **Speech-to-Text:** Offline STT
- **Microcontroller Framework:** Arduino (ESP32)
- **Communication:**
  - Serial (Current)
  - MQTT (Planned)

---

## 🗣️ **Example Voice Commands**
- 🟢 “Turn on the light”
- 🔴 “Turn off the fan”
- 🌡️ “What is the room temperature?”
- 💧 “What is the humidity level?”
- 🌫️ “What is the air quality?”
- 🚨 “Is the room safe?”

---

## 🧠 **Smart Behaviors**
- Alerts when air quality becomes unhealthy
- Advises actions based on temperature & humidity
- Detects motion and responds intelligently
- Warns on gas leaks or smoke detection

---

## ⚡ **Why Mykroft is Different**
| Feature                | Mykroft | Traditional Assistants |
|------------------------|-------|------------------------|
| Offline Wake Word      | ✅ Yes | ❌ No                  |
| Sensor-Based Reasoning | ✅ Yes | ❌ No                  |
| Privacy Focused        | ✅ Yes | ❌ No                  |
| Edge AI                | ✅ Yes | ❌ No                  |

---

## 🎯 **Use Cases**
- 🏠 Smart Homes
- 🔐 Privacy-Sensitive Environments
- 🧪 IoT & AI Research
- 🏆 Hackathons
- ⚙️ Edge AI Applications

---

## 🔮 **Future Enhancements**
- MQTT-based wireless communication
- Web dashboard for live sensor monitoring
- Memory & personalized responses
- Mobile app integration
- Multi-room support
- Offline LLM reasoning

---

## 👨‍💻 **Team**
Built with passion for AI, IoT, and Edge Computing.  
Designed to redefine smart environments without cloud dependency.

---
