const logDiv = document.querySelector("#log");
const startDiv = document.querySelector("#stop");
const startBtn = document.querySelector(".str-btn");
const stopBtn = document.querySelector(".stp-btn");

startBtn.addEventListener("click", () => {
  document.addEventListener("keydown", handleDown);
  document.addEventListener("keyup", handleUp);
  startBtn.disabled = true;
  stopBtn.disabled = false;
});
stopBtn.addEventListener("click", () => {
  document.removeEventListener("keydown", handleDown);
  document.removeEventListener("keyup", handleUp);
  logDiv.textContent = "";
  startDiv.textContent = " ";
  startBtn.disabled = false;
  stopBtn.disabled = true;
});
function handleDown(e) {
  logDiv.textContent = `key ${e.key} pressed down`;
  startDiv.textContent = `key is Down`;
}

function handleUp(e) {
  logDiv.textContent = `key ${e.key} pressed up`;
  startDiv.textContent = `key is UP`;
}
