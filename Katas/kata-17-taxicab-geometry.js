const blocksAway = function(directions) {
  let orientation = ['north','east','south','west']; // "right -> + 1, left -> -1"
  
  let position = {
    north: 0,
    east: 0,
    south: 0,
    west: 0
  }


  let ori = 0; // this number is used to track orientation
  if(directions[0] === 'right'){
    ori = 1
  }
  else {
    ori = 0
  }

  for(let i = 1; i < directions.length; i++){
    if(directions[i] === 'right'){
      ori++
      if(ori > 3){
        ori = 0;
      }
    }
    else if(directions[i] === 'left'){
      ori--
      if(ori < 0){
        ori = 3;
      }
    }
    else if(typeof directions[i] === 'number'){
      position[orientation[ori]] += directions[i]
    }
  }

  // this is intentional because i like my north south east west format better
  // and would like to keep it in case I need it later.
  let finalPosition = {
    east: position.east - position.west,
    north: position.north - position.south
  }
  return finalPosition;
};
console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
