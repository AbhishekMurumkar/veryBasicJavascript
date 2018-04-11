
var course = new Map();
course.set('react', {description: 'ui'});
course.set('angular', {description: 'ui'});
course.set('node', {description: 'backend'});
course.set('mongo', {description: 'database'});

console.log(course);

console.log(course.get('react'));


var details = new Map([
     [new Date(), 'today'],
['items', [1,2]]
]);

console.log(`details'size is ${details.size}`);


details.forEach(function(item){
console.log(item)
})


//output 

[object Map] { ... }
[object Object] {
  description: "ui"
}
"details'size is 2"
"today"
[1, 2]
