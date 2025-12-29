project:
  name: "Mykroft"
  tagline: "Offline AI Assistant for Smart Environment Control"

description: >
  Mykroft is a privacy-first, offline-capable AI assistant that understands
  voice commands and real-time environmental data to control smart devices.
  It runs locally, ensuring low latency, high reliability, and complete user privacy.

features:
  wake_word_detection:
    name: "Offline Wake Word Detection"
    technology: "openWakeWord"
    highlights:
      - Fully offline (no cloud dependency)
      - Trained on 30,000+ hours of data
      - Wake-up latency less than 0.20 ms
      - Very low false wake-ups

  ai_brain:
    name: "Local AI Brain"
    highlights:
      - Processes voice commands locally
      - Makes decisions using sensor context
      - Supports offline LLM integration
      - PC acts as the central brain

  sensor_awareness:
    name: "Real-Time Sensor Awareness"
    sensors:
      - DHT22 (Temperature & Humidity)
      - MQ-2 (Smoke)
      - MQ-6 (Gas)
      - MQ-7 (Carbon Monoxide)
      - MQ-135 (Air Quality)
      - PIR Motion Sensor

  voice_automation:
    name: "Voice-Controlled Automation"
    highlights:
      - Turn ON/OFF lights and appliances
      - Relay-based hardware control
      - ESP32-based execution

  privacy:
    name: "Privacy First"
    highlights:
      - No continuous microphone streaming
      - All voice processing is local
      - Works without internet access

architecture:
  overview:
    - "Wake Word Detection (openWakeWord)"
    - "Offline Speech-to-Text"
    - "Node.js AI Brain"
    - "ESP32 (Sensors & Relays)"
    - "Smart Environment Actions"

hardware:
  microcontroller: "ESP32"
  sensors:
    - "DHT22 – Temperature & Humidity"
    - "MQ-2 – Smoke"
    - "MQ-6 – Gas"
    - "MQ-7 – Carbon Monoxide"
    - "MQ-135 – Air Quality"
    - "PIR – Motion Detection"
  other_components:
    - "Relay Module"
    - "Breadboard"
    - "Jumper Wires"
    - "Power Supply"

software_stack:
  wake_word: "openWakeWord (Offline)"
  backend_brain: "Node.js"
  microcontroller_framework: "Arduino Framework"
  communication:
    - "Serial (Current)"
    - "MQTT (Planned)"
  speech_processing: "Offline Speech-to-Text"
  ai_reasoning: "Local LLM (Optional)"

voice_commands:
  examples:
    - "Turn on the light"
    - "Turn off the fan"
    - "What is the room temperature?"
    - "What is the humidity level?"
    - "What is the air quality?"
    - "Is the room safe?"

smart_behaviors:
  - "Alerts when air quality becomes unhealthy"
  - "Advises actions based on temperature and humidity"
  - "Detects motion and responds intelligently"
  - "Gas or smoke detection triggers warnings"

comparison:
  kannu:
    offline_wake_word: true
    sensor_based_reasoning: true
    privacy_focused: true
    edge_ai: true
  traditional_assistants:
    offline_wake_word: false
    sensor_based_reasoning: false
    privacy_focused: false
    edge_ai: false

use_cases:
  - "Smart Homes"
  - "Privacy-Sensitive Environments"
  - "IoT + AI Research"
  - "Hackathons and Prototypes"
  - "Edge AI Applications"

future_enhancements:
  - "MQTT-based wireless communication"
  - "Web dashboard for live sensor monitoring"
  - "Long-term memory and user preferences"
  - "Mobile app integration"
  - "Multi-room support"

team:
  note: "Built with passion for hackathon innovation"
