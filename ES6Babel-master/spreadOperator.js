var numbers = [56490, 33, 211, 4456, 77453];
var sorting = numbers.sort();
console.log(...sorting);


output
211
33
4456
56490
77453


let a = [20, 90, 10, 33];
let b = [32, 64, 67, ...a, 31];
console.log(b);
let c = b.sort();
console.log(c);
