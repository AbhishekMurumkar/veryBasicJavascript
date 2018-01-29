//Name of the class must always be capitalized
class Water {
  
 //code goes here
}

let water = new Water();
console.log(water instanceof Water);



class Water {
constructor(id, name){
  console.log(constructor);
  console.log(id + " of the oceans is the"+" "+ name);
}
}

let water = new Water();
  console.log(typeof Water);
  console.log(typeof water);
  console.log(water instanceof Water);

let pacific = new Water (1, "Pacific Ocean");

//output

Console Clear
function Window() { [native code] }
"undefined of the oceans is the undefined"
"function"
"object"
true
function Window() { [native code] }
"1 of the oceans is the Pacific Ocean"
