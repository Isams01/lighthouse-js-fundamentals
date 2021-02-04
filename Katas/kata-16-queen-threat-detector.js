
const generateBoard = function(whiteQueen, blackQueen){
  let chessBoard = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ]
  chessBoard[whiteQueen[0]][whiteQueen[1]] = 1;
  chessBoard[blackQueen[0]][blackQueen[1]] = 1;
  return chessBoard;
}

const queenThreat = function(board){
  // x and y position for first queen
  let x = 0;
  let y = 0;
  let checkX = 0;
  let checkY = 0;
  // find the first queen
  for(let i = 0; i < board.length; i++){
    for(let j = 0; j < board[0].length; j++){
      if(board[i][j] === 1){
        y = i;
        x = j;
        break;
      }
    }
  }

  // check x
  for(let j = 0; j < board[y].length; j++){
    if(board[y][j] === 1 && j !== x){
      return true;
    }
  }
  // check y
  for(let i = 0; i < board.length; i++){
    if(board[i][x] === 1 && i !== y){
      return true;
    }
  }
  checkX = x;
  checkY = y;
  // check diagonals
  // up and right [-][+]
  while((checkX < board[0].length && checkX >= 0) || (checkY < board.length && checkY >= 0)){
    checkX++;
    checkY--;
    if((checkY < 0 || checkX < 0) || (checkX > board[0].length || checkY > board.length - 1)){
      break;
    }
    if(board[checkY][checkX] === 1 && (checkX !== x && checkY !== y)){
      return true;
    }
  }
  checkX = x;
  checkY = y;
  // down and right [+][+]
  while((checkX < board[0].length && checkX >= 0) || (checkY < board.length && checkY >= 0)){
    checkX++;
    checkY++;
    if((checkY < 0 || checkX < 0) || (checkX > board[0].length || checkY > board.length - 1)){
      break;
    }
    if(board[checkY][checkX]===1 && (checkX !== x && checkY !== y)){
      return true;
    }
  }
  checkX = x;
  checkY = y;
  // up and left [-][-]
  while((checkX < board[0].length && checkX >= 0) || (checkY < board.length && checkY >= 0)){
    checkX--;
    checkY--;
    if((checkY < 0 || checkX < 0) || (checkX > board[0].length || checkY > board.length - 1)){
      break;
    }
    if(board[checkY][checkX]===1 && (checkX !== x && checkY !== y)){
      return true;
    }
  }
  checkX = x;
  checkY = y;
  // down and left [+][-]
  while((checkX < board[0].length && checkX >= 0) || (checkY < board.length && checkY >= 0)){
    checkX--;
    checkY++;
    if((checkY < 0 || checkX < 0) || (checkX > board[0].length || checkY > board.length - 1)){
      break;
    }
    if(board[checkY][checkX] === 1 && (checkX !== x && checkY !== y)){
      return true;
    }
  }
  return false;
}

// let whiteQueen = [3, 3];
// let blackQueen = [4, 4];
let whiteQueen = [Math.floor(Math.random() * 8), Math.floor(Math.random() * 8)];
let blackQueen = [Math.floor(Math.random() * 8), Math.floor(Math.random() * 8)];

let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
