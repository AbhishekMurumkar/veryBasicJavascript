// passing function to another function

var calculator = {
  calculate: function (x, y, fn) {
    return fn(x,y);
  }
};



//calculator is an object
//object has calculate method that accept 2 methods X & Y 
// and a function to do something with a function fn
//when the function gets executed it return 2 values X & Y
//modular style
 
//passing a function to the method to allow method to work


var sum = function (x, y) {
  return x + y;
},
    diff = function (x,y) {
      return x-y;
    };

var sumResult = calculator.calculate (1, 2, sum),
    diffResult = calculator.calculate (1, 2, diff);

alert(sumResult);
alert(diffResult);
