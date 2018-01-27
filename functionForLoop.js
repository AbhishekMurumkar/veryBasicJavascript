var sumFirstOneHundred = function (){
  var sum = 0;
  var currentNum;
  for (currentNum=1; currentNum<=100; currentNum++){
    sum = sum + currentNum;
  }
    return sum;
}
console.log(sumFirstOneHundred());
//output 5050


var largestDiv = function (number) {
  var result = 1;
  var current;
  
  for (current = 2; current < number; current = current +1){
    if (number%current ===0){
      result = current;
    }
  }
  return result;
};
console.log(largestDiv(100));

jules gems
