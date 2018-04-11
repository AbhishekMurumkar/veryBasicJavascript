let name = "anna";
let age = 23;
let obj = {
  name, age
};

console.log(obj.age + " " + obj.name);

https://github.com/CaptStorm/es6
let name = "alex";
let age = 22;

let obj = {
    name: "Max",
    age: 89,
    greet: function() {
        console.log(this.name + " " + this.age);
    }
};
obj.greet();



