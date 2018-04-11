# ES6Babel

Quick notes

var msg = 'Hello';
let msg = 'world!';
//this will not work 
//duplicate declaration

const MSG = "howdy";
MSG = "Good Morning";
//this will not work
//const is read only 

const MSG = 'HELLO';
if (true) {
MSG = 'Good night';
}
console.log(MSG);
//does not work because const cannot be redefined --- read only
