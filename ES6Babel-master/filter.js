//we want even numbers from an array


var numbers = [1,2,3,4,56]
var evenNums = [ ]

for (var i = 0; i<numbers.length; i++){

var element = numbers [i]
if(element % 2 === 0) {
evenNums.push(element)
}
}

console.log(evenNums)





//we want even numbers from an array

var _ = require ('lodash')
var numbers = [1,2,3,4,56]
var evenNums = _.filter(numbers, function(element){

return element % 2 === 0
})

console.log(evenNums)




var employees = [

{name : "john", salary: 4000},
{name : "john", salary: 5000},
{name : "john", salary: 6000}
]

var dueForRaise = [];

for (var i = 0; i<employees.length; i++){
var employee = employees[i]
if(employee.salary < 7000) {
dueForRaise.push(employee)
}
}
console.log(dueForRaise[]);
