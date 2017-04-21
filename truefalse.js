var age = prompt ("What is your age?", "");
var isOver60 = parseInt(age)>60;

document.write("It's " + isOver60 + ". You are " + age + " years old.");




var myAge = prompt ("What is your age", "");
if ( (myAge >= 30 && myAge <= 39) || (myAge >= 80 && myAge <= 89) )
{
alert (myAge);
}
else
  {
    alert ("you dont qualify");
  }
