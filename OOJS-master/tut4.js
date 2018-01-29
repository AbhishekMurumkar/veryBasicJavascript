class Water {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

  //static method
static getFish(){
  console.log("All oceans have fish!");
}
  
  
  //method = a function within a class
  tsunami(){
    console.log(this.name + " had experienced a tsunami!");
  }
}


//static properties
Water.maxHeight = 35797;

let pacific = new Water(1, "Pacific Ocean");
let atlantic = new Water(2, "Atlantic Ocean");

console.log("There are two oceans: : " + pacific.name + " and " + atlantic.name);

console.log(pacific.maxHeight); // output undefined
console.log(Water.maxHeight); // 35797

pacific.tsunami();

Water.getFish();
pacific.getFish(); 

//output

"There are two oceans: : Pacific Ocean and Atlantic Ocean"
undefined
35797
"Pacific Ocean had experienced a tsunami!"
"All oceans have fish!"
"error"
"TypeError: pacific.getFish is not a function
    at qopolad.js:51:9
    at https://static.jsbin.com/js/prod/runner-4.1.0.min.js:1:13850
    at https://static.jsbin.com/js/prod/runner-4.1.0.min.js:1:10792"
