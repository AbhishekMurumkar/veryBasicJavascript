//Arrow Function

var Hello = () => 'Hello World';
console.log(Hello());


//compiled into ES5/Vanilla JS
'use strict';
var hello = function hello() {
return 'hello world';
};
console.log(hello());


var hello1 = name => 'Hello, ' + name;
console.log(hello1('Alex'));







//more arrow functions

const printMyName = (name, age) => {
      console.log(name, age);
      console.log("My name is " + name + ". I am " + age);
}
printMyName('Max', 32);




const multiply = (number) => {
return number * 2;
}
console.log(multiply(2));



const divide = (number) => number / 2;
console.log(divide(90));


const divide = number => number / 2;
console.log(divide(90));

