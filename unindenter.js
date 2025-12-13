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
    if (j === 0){
      amountOfSpaces = line.split(" ").length - 1;
      if (amountOfSpaces === 0) break;
    } else {
      lines[j] = lines[j].substring(amountOfSpaces);
    }
  }

  return lines.join("\n");
}
