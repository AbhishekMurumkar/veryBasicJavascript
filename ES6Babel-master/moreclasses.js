//js babel es6
class Human {
 gender = "male";

printGender = () => {
console.log(this.gender);
}
}

class Person extends Human {
name = "Max";
gender = "fem";

printMyName = () => {
console.log(this.name);
}
}

const person = new Person();
person.printMyName();
person.printGender();
