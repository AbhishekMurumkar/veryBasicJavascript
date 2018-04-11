const age = [23, 44, 55, 77, 90, 39];
console.log (age);
age.push(89);
age.sort();
console.log(age);

[23, 44, 55, 77, 90, 39]
[23, 39, 44, 55, 77, 89, 90]



let number = [89, 22, 21, 664, 992];

function sumUp(toAdd) {
    let result = 0;
    for (let i = 0; i < toAdd.length; i++) {
        result += toAdd[i];
    }
    return result;
};
console.log(sumUp(number));




let numbers = [56490, 33, 211, 4456, 77453, 33];

let a = numbers[1];
let b = numbers[2];
let c = numbers[5];

console.log(b == a); //false
console.log(c === a); //true
