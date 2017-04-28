




function alertNumber() {
  var one = "1";
  alert (one);
}
alertNumber();
//cannot access alert(one);
alert(one);

//global var
var three = "3";

function alertNumber(){
var one = "1";
alert(one);

function alertAnotherNumber(){
var two = "2";
alert(two);
alert(three); //cannot be accessed
alert(one);
}

alertAnotherNumber();
alert(two);
}
alertNumber();
