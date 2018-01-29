//defining properties ECMA5 defineProperty

Object.defineProperty(obj, 'name', {
value: 'Wayne',
writable: true,
enumerable: true,
configurable: true
})


var task = {
title: 'black tullip',
description: 'written by A.Dumas'
};

Object.defineProperty(task, 'toString', {
value: function(){
return this.title + ' ' + this.description;
},
  writable: true,
enumerable: true,
configurable: true
});
console.log(task.toString());




