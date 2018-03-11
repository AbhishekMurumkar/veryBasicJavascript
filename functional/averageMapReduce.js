var _ = require("lodash");
var employees = [
    { salary: 90000, age: 34, gender: "F" },
    { salary: 530000, age: 24, gender: "M" },
    { salary: 240000, age: 54, gender: "F" },
    { salary: 110000, age: 28, gender: "M" },
    { salary: 10000, age: 71, gender: "F" },
    { salary: 40000, age: 37, gender: "M" },
]

var males = _.filter(employees, function(employee){
    return employee.gender ==="M"
})

var maleAges = _.map(males, function(male){
    return male.age
})

var maleAgeTotal = _.reduce(maleAges, function(acc, age){
    return acc + age
})

var maleAgeAverage =  Math.round(maleAgeTotal/males.length *10) /10;
console.log(maleAgeAverage);
