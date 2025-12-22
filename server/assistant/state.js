let state = "IDLE";

export function setState(newState) {
  state = newState;
  console.log("🧠 State:", state);
}

export function getState() {
  return state;
}
