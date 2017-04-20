

var randomRoundNumber = Math.round(Math.random()*5);
//console.log(randomRoundNumber);

if (randomRoundNumber % 3 === 0 && randomRoundNumber != 0)
  {
    alert("fizz" + " " + randomRoundNumber);
  }
else if (randomRoundNumber % 2 === 0 && randomRoundNumber != 0)
  {
    alert("buzz" + " " + randomRoundNumber);
  }

else {
  alert (randomRoundNumber);
}






var randomRoundNumber = Math.round(Math.random()*5);
//console.log(randomRoundNumber);

if (randomRoundNumber % 3 === 0 && randomRoundNumber !== 0)
  {
    alert("fizz" + " " + randomRoundNumber);
  }
else if (randomRoundNumber % 2 === 0 && randomRoundNumber !== 0)
  {
    alert("buzz" + " " + randomRoundNumber);
  }
else if (randomRoundNumber % 2 === 0 && randomRoundNumber % 3 === 0 ){
 alert ("Yipee! Random number is divided by 2 and 3! Your number is" + " " + randomRoundNumber);
}
else {
  alert (randomRoundNumber);
}




