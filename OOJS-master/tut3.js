class Water {
    constructor(id, name) {
        this.id = id;
        this.name = name;
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

pacific.tsunami();
//output - "Pacific Ocean had experienced a tsunami!"
