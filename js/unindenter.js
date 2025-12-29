function getNumOfLeadingSpaces(line, limit){
  let i = 0;

  while (line[i] === " " || line[i] === "\t"){
      if (limit !== null && i >= limit) break;
      i++;
  }

  return i;
}

export function unindent(inputString, removeAllIndentation, manualUnindentAmount){
  let lines = inputString.split("\n");
  let numOfSpaces = manualUnindentAmount && !removeAllIndentation ? manualUnindentAmount : null;

  for (let i = 0; i < lines.length; i++){
    const currentLine = lines[i];

    const numOfLeadingSpaces = getNumOfLeadingSpaces(currentLine, numOfSpaces);

    if (i === 0 && !removeAllIndentation){
      numOfSpaces = numOfLeadingSpaces;
      if (numOfSpaces === 0) break;
    }

    lines[i] = currentLine.substring(numOfLeadingSpaces);
  }

  return lines.join("\n");
}
