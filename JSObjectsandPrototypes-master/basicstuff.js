//create an object 
var obj = {};

//used in inheritance
var nextObj = Object.create(Object.prototype);

//new object
var lastObj = new Object();

// how to assign keys and values
var obj = {};
obj.param = 'new value';
console.log(obj.param);

//square bracket notation
var obj = {};
obj[`param`] = 'new wolves';
console.log(obj[`param`]);

//advantage of using bracket notation is variable

var obj = {};
var val = 'value';
obj[val] = 'new value';
console.log(obj[val]);

