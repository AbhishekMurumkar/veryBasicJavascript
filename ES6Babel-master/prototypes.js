function Wizard (name, house, pet){
  this.name = name;
  this.house = house;
  this.pet = pet;
  
  this.greet = () =>`I am ${this.name} from ${this.house}`
}

let harry = new Wizard("Harry Potter", "Gryffindor", "Owl");
console.log(harry.greet());





function Wizard (name, house, pet){
  this.name = name;
  this.house = house;
  this.pet = pet;
  
  this.greet =()=>`I am ${this.name} from ${this.house}`
}

let harry = new Wizard("Harry Potter", "Gryffindor", "Owl");
harry.petName = "Hedwig";
Wizard.prototype.petName;
Wizard.prototype.info = function() {
  return `I have a ${this.petName}`
};

console.log(harry.info());
