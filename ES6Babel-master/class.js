class Human {
    constructor(){
       this.gender = "male";
}
printGender(){
    console.log(this.gender);
  }
}


//inherit
class Person extends Human {
   constructor(){
//needs to be added if constructor exists in another class
       super() 
       this.name = "Alexa";
       this.gender = "female";

}

//adding a method 
printMyName(){
console.log(this.name);
}
}

const person = new Person();
person.printMyName();
person.printGender();











//building a constructor
class Animal {
  constructor (name, height) {
    this.name = name;
    this.height = height;
  }
}
let King = new Animal ("Mufasa", 5.0);
console.log(King);



//adding method
class Animal {
  constructor (name, height) {
    this.name = name;
    this.height = height;
  }
    hello(){
      console.log(`Hello! This is ${this.name}`);
    }
}
let King = new Animal ("Mufasa", 5.0);
King.hello();

//expanding
class Animal {
  constructor (name, height) {
    this.name = name;
    this.height = height;
  }
    hello(){
      console.log(`Hello! This is ${this.name}`);
    }
}


class Lion extends Animal {
  constructor(name, height, color){
    super(name, height);
    this.color=color;
  }
}

let son = new Lion("Simba", 2, "golden");
console.log(son);


//overriding value
class Animal {
  constructor (name, height) {
    this.name = name;
    this.height = height;
  }
    hello(){
      console.log(`Hello! This is ${this.name}`);
    }
}


class Lion extends Animal {
  constructor(name, height, color){
    super(name, height);
    this.color=color;
  }

hello(){
  console.log(`Hello, this is ${this.name}. I am from a cartoon`)
}
}


let son = new Lion("Simba", 2, "golden");
//console.log(son);
son.hello();



