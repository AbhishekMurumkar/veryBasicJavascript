//array methods are not supported in IE8 but supported in IE9

var fruit = ["oranges", "kiwi", "bananas", "apples", "pears", "cherries", "bananas"];
var index = fruit.indexOf("bananas");
alert (index);
//output will only produce only 1 banana which is placed in 2nd index
var index1 = fruit.lastIndexOf("bananas");
alert(index1);
//2nd bananas placement is on 6th 

var fruit = ["oranges", "kiwi", "bananas", "apples", "pears", "cherries", "bananas"];
function isString(value, index, array) {
  return typeof value === "string";
  }
  function isLengthOfOne(value, index, array) {
  }
  alert (fruit.every(isString));
  //this checks if every object in the array is a string
