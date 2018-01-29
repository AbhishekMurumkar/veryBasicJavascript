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


function extend(Child, Parent) {
    var Temp = function() {};

    Temp.prototype = Parent.prototype;
    Child.prototype = new Temp();
    Child.prototype.constructor = Child;
}

function Deer() {
    this.name = "Bambi";
    this.sound = "Snort";
}

extend(Deer, Animal);

var elk = new Deer();


document.write(elk.getSound() + "<br />"); 
