//ALERT accepts only 1 parameter
//CONFIRM accepts only 1 parameter
//PROMPT accepts 2 parameters
//parameter is a set of answers in a function that it can accept. 
//code below has 2 params for ALERT and CONFIRM functions. 2nd param does not work. JS ignores 2nd set of params

alert("Alert box1", "Alert box2");
confirm("Confirm 1", "Confirm2");
prompt("how are you?", "I am well, thank you");


//let's say, we want to harvest an input and spill it on the screen in a alert box

//1st thing we we assign a value to variable ageAlert
var ageAlert = prompt("How old are you?", "");
// 2nd param inside of the prompt is blank because we need user input
//The very next thing we need to do is predict what would a user enter and doesn't enter
if (ageAlert){
  alert (ageAlert + " is your age");
  //as soon as a person entered a number you will see a prompt with a message (XX is your age)
  //
} else {
  alert ("No data was entered");
  //if nothing was entered this alert pops up
}

//you can get more elaborate 
var ageAlert = prompt("How old are you?", "");
if (ageAlert < 0){
alert ("At least enter 0!");
}
else if (ageAlert > 100) {
    alert ("are you sure you are older than 100 years old?");
  }
else if (ageAlert > 0 && ageAlert < 100){
  alert (ageAlert + " is your age");
} 
   
else {
  alert ("No data was entered");
}
