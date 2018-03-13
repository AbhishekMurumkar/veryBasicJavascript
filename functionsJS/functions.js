

function print() {

document.getElementById('example').innerHTML = 'Javascript';
}

print();

function print1 (a, b, c) {
console.log(a + b + c);
}
print1(4, 6, 7);


var printing = function (c, d, e){
console.log( c * d * e);
}
printing(9, 5, 9);


var multiply = function (a, b){
 return a * b;
}

var product = multiply (5, 7);
console.log(product);
