function sayHi (){
  var name = 'Benjamin Franklin'
  function getName(){
    return name;
  }
console.log('hi, my name is ' + getName());
}
sayHi();


function dogFactory(dogName) {
    var isHappy = true;

    function dogBark() {
        if (isHappy) {
            isHappy = true;
            console.log(this.name + " wags tail");
        } else {
            console.log(this.name + " is depressed")
        }
    }

    function dogFood(food) {
        if (food === 'grass') {
            isHappy = false;
            console.log("dog is a cow");
        }
    }

    return {
        name: dogName,
        bark: dogBark,
        eat:dogFood

    };
}

var fido = dogFactory('Fido');
fido.bark();
fido.eat('grass');
fido.eat('treat');
