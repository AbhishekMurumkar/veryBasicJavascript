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

function startswithC (value, index, array) {
  return value[0] === "c";
  }


function isLengthOfOne(value, index, array) {
  return value.length === 1;
  }


function startswithKP (value, index, array) {
  return value[0] === "k" || value [0] === "b"
}

//filters any word that starts with K and P
var resultFilter = fruit.filter(startswithKP);
alert ("Fruits starting with K and P have been filtered! They are: " + resultFilter);
//creates a new array with K and P


alert (fruit.every(isString));
  //true

//this checks if every object in the array is a string
alert (fruit.every(isLengthOfOne));
//false - it is more than 1

var result = fruit.some(isLengthOfOne);
alert (result);
//false

 var result1 = fruit.some(startswithC);
alert (result1);
//true





//For Each
var fruit = ["oranges", "kiwi", "bananas", "apples", "pears", "cherries", "bananas"];

function doSomething(value, index, array) {
  alert(value);
}
fruit.forEach(doSomething);
//alerts each fruit individually

