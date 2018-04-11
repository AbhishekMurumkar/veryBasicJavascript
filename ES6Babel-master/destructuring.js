//destructuring

var [first, , second, third] = ["spokane", "los angeles", "miami", "portland"];
console.log(first); //spokane
console.log(second); //miami
console.log(third); //portland




var {title, price} = {

title: "Reuben",
price: 8.99,
description: "Hot dog",
ingridients: ['bread', 'beef', 'dressing', 'sourkraut', 'cheese']
};

console.log(title);
console.log(price);


var vacation = {

    destination: "Chile",
    travelers: 3,
    activity: "skiing",
    cost: 9000
};


function marketing ({destination, activity}) {

     return `come to ${destination} and do ${activity}`
}
console.log(marketing(vacation));

