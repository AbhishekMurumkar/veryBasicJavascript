var sign = prompt ("what is your zodiac sign?");

switch (sign..toLowerCase()) {
  case "Taurus":
    alert ("You are Taurus");
    break;
  case "Scorpio":
    alert ("you are indeed a Scorpio"); 
    break;
  default: 
    alert ("You must be the other");
    break;
}

//remove break from one of the cases and run it.. you should see your sign and alert popping up and default message appear. 

//now let's try case sensitivity

var sign = prompt ("what is your zodiac sign?");
switch (sign) {
  case 'Taurus':
    alert ("You are Taurus");
    break;
  case 'Scorpio':
  case 'scorpio':
    alert ("you are indeed a Scorpio"); 
    break;
  default: 
    alert ("You must be the other");
    break;
}

//here .. you get Scorpio with a capital letter but if you enter scorpio with all small case you will get default message. 
//one of the remedies is adding another case "scorpio" to solve the issue...
