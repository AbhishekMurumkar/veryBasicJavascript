var myAge=22;
alert(myAge);
myAge++;
alert(myAge);


//Let's say you want to ask a user to ask a user to enter his/her age then alert them that they will be one year older
var aYearOlder = prompt ("What is your age?", "");
if (aYearOlder) {
  //you will see a popup with the age you entered
  alert("Right now you are " + aYearOlder);
  //+1 year is added 
  aYearOlder++;
  //another alert pops up with a interger +1
  alert("Next year you will be " + aYearOlder);
}
else {
  alert("You did not enter your age.");
}
