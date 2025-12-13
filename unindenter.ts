window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("submit").addEventListener("click", () => {
    let stringToUnindent = document.getElementById("input").value;
    const unindentedString = unindent(stringToUnindent);
    let resultTextArea = document.getElementById("output");
    resultTextArea.value = unindentedString;
  });

  document.getElementById("reset").addEventListener("click", () => {
    document.getElementById("input").value = "";
    document.getElementById("output").value = "";
  });
});

function getNumOfLeadingSpaces(line: string, limit: number){
  let i = 0;

  while (line[i] === " " || line[i] === "\t"){
      if (limit > 0 && i >= limit) break;
      i++;
  }

  return i;
}

function unindent(inputString: string){
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
