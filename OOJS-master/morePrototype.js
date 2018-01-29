function Mammal (name) {
this.name = name;
  this.getInfo = function() {
    return "The mammal's name is " + this.name;
  }
}

//prototype
Mammal.prototype.sound = "AARRH";
Mammal.prototype.makeSound = function(){
  return this.name + " says " + this.sound;
}

var grover = new Mammal("Grover");

document.write(grover.makeSound() + "<br />");
for (var prop in grover) {
  document.write(prop + " " + grover[prop] + " <br />");
}

document.write ("name Prop of Grover " + grover.hasOwnProperty("name") + "<br />");
//true name is part of prototype
document.write ("sound Prop of Grover " + grover.hasOwnProperty("sound") + "<br />");
//false sound is not part of a proptobype

