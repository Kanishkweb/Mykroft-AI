import axios from "axios";
const ESP32_IP = "http://10.183.149.119/data"; // Change if needed

async function getDHT22Data() {
  try {
    const response = await axios.get(ESP32_IP, { timeout: 5000 });
    return response.data; // { temperature: ..., humidity: ... }
  } catch (err) {
    console.error("Error fetching DHT22 data:", err.message);
    return null;
  }
}

export default getDHT22Data;
