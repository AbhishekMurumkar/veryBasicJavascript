function findBiggestFraction(a,b){
var result; 
a>b ? result=["firstFraction", a] :
result = ["secondFraction", b];
return result;
}

var firstFraction = 3/5;
var secondFraction = 4/5;

var fractionResult = findBiggestFraction(firstFraction, secondFraction);

console.log(fractionResult);




["secondFraction", 0.8]
