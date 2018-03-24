function changeName (person){
   person.name = "Anna";
};

let person = {

name: "John",
age: 32,
partTime: false

};

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.partTime);

changeName(person);
console.log(person.name);



