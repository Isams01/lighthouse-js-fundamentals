const squareCode = function(message) {
  let re = /\s/g;
  let noSpace = message.replace(re,'');
  let numChar = Math.ceil(Math.sqrt(noSpace.length));
  let code = '';
  let array = [];
  let finalArray = [];

  // create square format
  for(let i = 0; i < noSpace.length; i++){
    code += noSpace[i];
    if((i+1) % numChar === 0 || i === noSpace.length - 1){
      array.push(code);
      code = '';
    }
  }
  code = '';

  for(let i = 0; i < numChar; i++){
    for(let j = 0; j < array.length; j++){
      if(array[j][i] !== undefined){
        code += array[j][i];
      }
      else{
        continue;
      }
    }
    finalArray.push(code);
    code = '';
  }

  return finalArray.join(' ');
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
