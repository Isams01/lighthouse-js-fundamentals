let prompt = require('prompt-sync')();
let target = Math.floor(Math.random() * 10); 
let previousGuesses = [];
let numGuesses = 0;
let answer;
while(parseInt(answer) !== target){
  answer = parseInt(prompt("Guess a number: "));
  if(previousGuesses.includes(answer)){
    console.log('Already Guessed');
  }
  else if(isNaN(parseInt(answer))){
    console.log('Not a number! Try again!');
  }
  else if(answer > target){
    console.log("Too high!");
  }
  else if(answer < target){
    console.log("Too low!")
  }
  if(!isNaN(parseInt(answer))){
    previousGuesses.push(answer);
  }
}
console.log(`You got it! You took ${numGuesses} attempts!`);
