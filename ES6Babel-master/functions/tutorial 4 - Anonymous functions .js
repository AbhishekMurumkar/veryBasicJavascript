
var a = 5/8;
var b = 4/7;


var theBiggest = function (){
var result;
a>b ? result = ["a", a] : result =["b", b];
console.log(result);
}

theBiggest();

//inside of theBiggest variable is a function


//if you are using return you need to add console.log()

var a = 5/8;
var b = 4/7;


var theBiggest = function (){
var result;
a>b ? result = ["a", a] : result =["b", b];
return result;
}

console.log(theBiggest());




//params
var theBiggest = function (){
var result;
a>b ? result = ["a", a] : result =["b", b];
return result;
}

console.log(theBiggest(7/2, 5/6));
