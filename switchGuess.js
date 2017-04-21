var secretNumber = prompt("Pick a number between 1 and 5:", " ");
var secretNumber = parseInt(secretNumber);

switch (secretNumber)
{
case 1:
   alert ("your number is too low");
 break;
case 2:
   alert ("your number is wierd");
 break;
 case 3:
   alert ("your number is too wierd");
 break;   
     case 4:
   alert ("your number is right one");
 break; 
     case 5:
   alert ("wanna try that again?");
 break; 
default :
   alert ("You did not enter a number");
    break;
}
