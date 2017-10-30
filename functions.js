function myFunc(){
  console.log("hi");
}
//call myFunc
myFunc();



function myFunc(a, b){
  return a * b;
}
var fun = myFunc(8,9);
console.log(fun);



var add3  = function (a, b){
  return a - b;
}
console.log(add3(5, 8));



var x = 2;
function numberLog (){
  return x;
}  
console.log(numberLog());
//output 2 

var x = 2;
function numberLog (){
  var x = 34;
  return x;
}  
console.log(numberLog());
//output 34
