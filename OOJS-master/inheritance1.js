function Animal() {
    this.name = "Fido";
    this.toString = function() {
        return "My name is " + this.name;
    };
}

function Canine() {
    this.name = "Canine";
}

function Wolf() {
    this.name = "Volk";

}

Canine.prototype = new Animal();
Wolf.prototype = new Canine();

Canine.prototype.constructor = Canine;
Wolf.prototype.constructor = Wolf;

var articWolf = new Wolf();
document.write(articWolf.toString() + "<br />");
document.write((articWolf instanceof Animal));

Animal.prototype.sound = "WOOF WOOF";
Animal.prototype.getSound = function() {
    return this.name + " howls " + this.sound;
}

Canine.prototype.sound = "woof woof woof";
Wolf.prototype.sound = "Auuuuu Auuuu";

document.write(articWolf.getSound() + "<br />");

function Rodent() {
    this.name = "Rodent";
}

function Rat() {
    this.name = "Rat";
}

Rodent.prototype = new Animal();

Rat.prototype = Rodent.prototype;
Rodent.prototype.constructor = Rodent;
Rat.prototype.constructor = Rat;

var caneRat = new Rat();
