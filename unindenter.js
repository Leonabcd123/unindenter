function handleSubmit() {
  let stringToUnindent = document.getElementById("inputString").value;
  const unindentedString = unindent(stringToUnindent);
  let resultTextArea = document.getElementById("result");
  resultTextArea.value = unindentedString;
}

function unindent(string){
  let lines = string.split("\n");
  let amountOfSpaces = 0;

  for (let i = 0; i < lines.length; i++){
    const currentLine = lines[i];
    if (i === 0){
      let j = 0;
      
      while (currentLine[j] === " " || currentLine[j] === "\t"){
        amountOfSpaces++;
        j++;
      }
      
      if (amountOfSpaces === 0) break;
    }
    
    lines[i] = currentLine.substring(amountOfSpaces);
  }

  return lines.join("\n");
}
