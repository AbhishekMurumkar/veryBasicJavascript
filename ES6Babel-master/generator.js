//generatior

function* director(){
yield "three";
yield "two";
yield "one";
yield "action";
}

var action = director();

console.log(action.next().value);
console.log(action.next().value);
console.log(action.next().value);
console.log(action.next().value);
console.log(action.next().value);






function* eachItem(arr) {

for(var i=0; i<arr.length; i++){
   yield arr[i];
}
}

var letters = eachItem(["a", "b", "c", "d", "e", "f", "g"]);


var abc = setInterval((function() {
var letter = letters.next();
if(letter.done){
clearInterval(abcs);
console.log("I know my abcs");
}else{
  console.log(letter.value); 
}
}, 600);
