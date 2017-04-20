
var randomNum = 325;

if (randomNum%3 === 0 && randomNum!==0){
  if (randomNum%5 === 0){
    alert ("The fuzz is here");
  }
  else {
    alert ("the buzz is here");
  }
}
else if (randomNum%5===0 && randomNum!==0){
  alert("The buzz is not here");
}
else {
  console.log(randomNum);
}
