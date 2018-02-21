//var scope and hoisting

function myDog(){
var dogName = "fido";
console.log(dogName + "inside");
}
myDog();
console.log(dogName + "outside");




function myCat() {
var myKitten = "Meaw";
function myOtherCat(){
//var myKitten = "Hello Kitty";
console.log(myKitten + ' says meaw meaw');
}
myOtherCat();
}

myCat();




//myKitten becomes a global var
function myCat() {
  myKitten = "Meaw";
}

myCat();
console.log(myKitten);




