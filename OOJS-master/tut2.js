
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



class Water {
constructor(id, name){
this.id = id;
this.name = name;
}
}


let pacific = new Water (1, "Pacific Ocean");
let atlantic = new Water (2, "Atlantic Ocean");

console.log ("There are two oceans: : " + pacific.name + " and " + atlantic.name);

//output
"Pacific Ocean and Atlantic Ocean"
"There are two oceans: : Pacific Ocean and Atlantic Ocean"
"There are two oceans: : Pacific Ocean and Atlantic Ocean"

