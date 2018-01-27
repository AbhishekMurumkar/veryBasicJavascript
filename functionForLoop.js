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
