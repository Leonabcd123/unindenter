document.addEventListener("click", () => {
  let stringToUnindent = document.getElementById("inputString").value;
  const unindentedString = unindent(stringToUnindent);
  let resultTextArea = document.getElementById("result");
  resultTextArea.value = unindentedString;
});

function getNumOfLeadingSpaces(string, limit){
  let i = 0;
  while (string[i] === " " || string[i] === "\t"){
      if (limit > 0 && i >= limit) break;
      i++;
  }

  return i;
}

function unindent(string){
  let lines = string.split("\n");
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
