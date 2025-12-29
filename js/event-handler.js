import { unindent } from "./unindenter.js";

window.addEventListener("DOMContentLoaded", () => {
  const inputEl = document.getElementById("input");
  const outputEl = document.getElementById("output");
  const submitEl = document.getElementById("submit");
  const resetEl = document.getElementById("reset");
  const removeAllIndentationEl = document.getElementById("removeAllIndentation");
  const manualUnindentEl = document.getElementById("manualUnindentCheckbox");
  const manualUnindentInputEl = document.getElementById("manualUnindent");
  
  submitEl.addEventListener("click", () => {
    const removeAllIndentation = removeAllIndentationEl.checked;
    const manualUnindentAmount = manualUnindentEl.checked ? manualUnindentInputEl.value : null;
    outputEl.value = unindent(inputEl.value, removeAllIndentation, manualUnindentAmount);
  });

  resetEl.addEventListener("click", () => {
    inputEl.value = "";
    outputEl.value = "";
  });

  manualUnindentEl.addEventListener("click", () => {
    if (manualUnindentEl.checked){
      manualUnindentInputEl.style.display = "";
    } else {
      manualUnindentInputEl.style.display = "none";
    }
  });
});

