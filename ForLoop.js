//code challenge
//create a loop in a function that separates every number by a comma but the number 100 does not have a comma.
// steps 
// 1. declare a function 
// 2. add a for loop 
// 3. insert inside of a for loop { if else condition}
// 4. close a function
// 5. call a function myLoop();

function myLoop () {
  for (var i = 1; i<=100; i++){
    if (i <= 99)
      {
        console.log(i + ",");
      }
    else 
      {
        console.log(i +'');
      }
  }
}
myLoop();



//solution 2

var myLoop = function () {
  for (var i = 1; i<=100; i++){
    if (i <= 99)
      {
        console.log(i + ",");
      }
    else 
      {
        console.log(i +'');
      }
  }
}
myLoop();
