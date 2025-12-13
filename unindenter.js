function handleSubmit() {
  let stringToUnindent = document.getElementById("inputString").value;
  const unindentedString = unindent(stringToUnindent);
  let resultTextArea = document.getElementById("result");
  resultTextArea.value = unindentedString;
}

function unindent(string){
  let lines = string.split("\n");
  let amountOfSpaces = 0;

  for (let j = 0; j < lines.length; j++){
    const currentLine = lines[j];
    if (j === 0){
      amountOfSpaces = currentLine.split(" ").length - 1;
      if (amountOfSpaces === 0) break;
    } else {
      lines[j] = currentLine.substring(amountOfSpaces);
    }
  }

  return lines.join("\n");
}
