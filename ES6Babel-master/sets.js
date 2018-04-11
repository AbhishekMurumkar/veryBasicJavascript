var books = new Set();
books.add('War and peace')
     .add('Jane Eyer')
     .add('Oliver Twist');

console.log(books.size);

console.log('has Oliver Twist', books.has('Oliver Twist'));

books.delete('Oliver Twist');
console.log('has Oliver Twist', books.has('Oliver Twist'));


var data = [90, 22, 112, 23, 545, 545, 89];
var set = new Set(data);
console.log('data.length', data.length);
console.log('set.size', set.size);



//output

3
"has Oliver Twist"
true
"has Oliver Twist"
false
"data.length"
7
"set.size"
6
