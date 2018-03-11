var _ = require("lodash");
var shoppingList = [
    {
        name: "Eggs", price: 9.99
    },
    {
        name: "milk", price: 10.00
    },
    {
        name: "Tea", price: 1.99
    },
    {
        name: "battery", price: 2.00
    }

]

var totalCost = _.reduce(shoppingList, function(acc, item){
    return acc + item.price
}, 0)

console.log(totalCost);
