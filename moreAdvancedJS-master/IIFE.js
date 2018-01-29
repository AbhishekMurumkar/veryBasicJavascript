var myArr = [1,2,3,4,5];
console.log(myArr[0]);
console.log([1,2,3,4,5][4]);

var myStr = "Alexa Ben";
console.log(myStr.toUpperCase());
console.log("Bend".toUpperCase());

var sayHi = function(){
  console.log("hi");
};
sayHi();

//immidately invoked expression
(function(){
  var name = "Angie"
  console.log(name + ", I am IFFE");
})();

