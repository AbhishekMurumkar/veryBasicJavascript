var randomNumber = Math.random();
console.log(randomNumber);

var roundMath = Math.round(.5);
console.log(roundMath);

var randomRoundNumber = Math.round(Math.random()*5);
console.log(randomRoundNumber);

if (randomRoundNumber % 3 === 0)
  {
    alert("fuzz" + " " + randomRoundNumber);
  }
else if (randomRoundNumber % 2 === 0)
  {
    alert("buzz" + " " + randomRoundNumber);
  }

else {
  alert (randomRoundNumber);
}
