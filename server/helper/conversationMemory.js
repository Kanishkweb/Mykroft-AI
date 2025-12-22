// conversationMemory.js
const memory = {}; // key: sessionId, value: array of messages

export function getContext(sessionId) {
  if (!memory[sessionId]) memory[sessionId] = [];
  return memory[sessionId];
}

export function addMessage(sessionId, role, content) {
  if (!memory[sessionId]) memory[sessionId] = [];
  memory[sessionId].push({ role, content });

  // Keep only last 5 messages to shorten context
  if (memory[sessionId].length > 5) {
    memory[sessionId].shift();
  }
  console.log(memory);
}