//object literal 
var mark = {
  hairColor: "blonde",
  age: 30
}

var nancy = {
  hairColor: "blue",
  age: 39
}

function Friends (hairColor, age) {
  this.hairColor = hairColor;
  this.age = age
}

//object constructor
var john = new Friends ("Black", "23");

alert (john.hairColor);
alert ("Mark's hair color is " + mark.hairColor);

