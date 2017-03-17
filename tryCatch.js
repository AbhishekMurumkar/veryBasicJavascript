var Name = prompt ("What is your name?");
try {
  var leng = Name.length;
  if (leng > 10){
    throw "Your name is a bit too long ";
}
else if (leng < 10) {
  throw ("Your name is a bit too short");
} else {
  throw "Your name is perfect!";
}
}
catch (e) {
  alert (e);
}
