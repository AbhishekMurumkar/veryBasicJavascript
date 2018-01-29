//task object

var task = {};
task.title = 'My task';
task.description = 'My desc';
console.log(task.title);

//object.create option

var task = Object.create(Object.prototype);

task.title = 'My task';
task.description = 'My Description';
console.log(task.title);

//string option

var task = Object.create(Object.prototype);

task.title = 'My task';
task.description = 'My 
task.toString = function(){
return this.title + ' ' + this.description;
}

console.log(task.toString());


//new object

var task = new Object;

task.title = 'My task';
task.description = 'My 
task.toString = function(){
return this.title + ' ' + this.description;
}

console.log(task.toString());


//the most common
var task = {
title: 'My Title',
description: 'My desc'
};
task.toString = function(){
return this.title + ' ' + this.description;
}
console.log(task.toString());
