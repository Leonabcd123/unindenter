window.addEventListener("DOMContentLoaded", () => {
  const inputEl = document.getElementById("input");
  const outputEl = document.getElementById("output");
  const submitEl = document.getElementById("submit");
  const resetEl = document.getElementById("reset");
  
  submitEl.addEventListener("click", () => {
    outputEl.value = unindent(inputEl.value);
  });

  resetEl.addEventListener("click", () => {
    inputEl.value = "";
    outputEl.value = "";
  });
});

function getNumOfLeadingSpaces(line, limit){
  let i = 0;

  while (line[i] === " " || line[i] === "\t"){
      if (limit > 0 && i >= limit) break;
      i++;
  }

  return i;
}

function unindent(inputString){
  let lines = inputString.split("\n");
  let numOfSpaces = 0;

  for (let i = 0; i < lines.length; i++){
    const currentLine = lines[i];
    const numOfLeadingSpaces = getNumOfLeadingSpaces(currentLine, numOfSpaces);

    if (i === 0){
      numOfSpaces = numOfLeadingSpaces;
      if (numOfSpaces === 0) break;
    }

    lines[i] = currentLine.substring(numOfLeadingSpaces);
  }

  return lines.join("\n");
}
