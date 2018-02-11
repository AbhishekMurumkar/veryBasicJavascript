//construction function
function Car(color){
  this.color = color;
}
//attaching prototype method
Car.prototype.getColor = function(){
  return this.color;
}
function colorOfCar(){
  return this.color;
}
//instantiate the constuction function
var myCar = new Car ('red');

console.log(myCar.getColor());
console.log(myCar);



//es6

class Car2 {
  constructor(color2){
    this.color2= color2;
  }
  getColor2(){
    return this.color2;
  }
}

var myCar2 = new Car2 ("purple");
console.log(myCar2.getColor2());
