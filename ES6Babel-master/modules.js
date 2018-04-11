//fellowshipIndex.js

import {fellowship, total} from './fellowship';
console.log (fellowship, total);

//fellowship.js
const fellowship.js = ['Frodo', 'Sam', 'Gandalf'];
const total = fellowship.length;
export {fellowship, total};




//math.js
const add = (a, b) => {
      return a + b;
};

const multiply = (a, b) => {
      return a * b;
};
export {add, multiply}

//index.js
import {add, multiply} from './math';
console.log(multiply(8,10));


//defaultIndex.js
import multiply from './mathDefault';
console.log(multiply(5,10);

//mathDefault.js
const multiply = (a, b) => {
return a * b;
};
export default multiply;
