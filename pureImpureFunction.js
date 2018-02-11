
//impure

var conversionRate = 1.5;
function convertAmount1(amount){
    return amount * conversionRate;
}
console.log("this is from impure" + convertAmount1(30));



//pure
var conversionRates = 1.5;

function convertAmount(amount, rate){
  return amount * rate;
}

console.log(convertAmount(30, conversionRates));
