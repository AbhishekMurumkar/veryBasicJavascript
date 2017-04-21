var tempString = "56.09 degrees C";
var myInt;
var myFloat; 

document.write (tempString + " - " + parseInt(tempString) + "<BR>");

var myInt = parseInt(tempString);
document.write ("The string is converted to an interger -" + " " + myInt + "<BR>");


var myFloat = parseFloat(tempString);
document.write("This string is converted into a floating point -" + " " + myFloat);

