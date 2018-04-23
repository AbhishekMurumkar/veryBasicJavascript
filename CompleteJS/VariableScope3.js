if (true) {
  if (true) {
  }
}

if (true) {
}

//Global
  //Local
    //Local
// Local


let name = "Vinny";
if (true) {
  let name = "Mikey";
  
  if (true) {
    console.log(name);
  }
}

if (true) {
}

//Global (name)
  //Local (name)
    //Local
// Local
//output MIKEY!



let name = "Vinny";
if (true) {
  let name = "Mikey";

  if (true) {
    console.log(name);
  }
}

if (true) {
  console.log(name);
}

//Global (name) --- Mikey
//Local (name) ---Mikey
//Local
// Local (name) --- Vinny


let name = "Vinny";
console.log(name);

if (true) {
  let name = "Mikey";
  console.log(name);

  if (true) {
  //leaked global
    name = "Jen";
    console.log(name);
  }
}

if (true) {
  console.log(name);
}

//Global (name) --- Vinny
//Local (name) ---Mikey
//Local (name) - Jen
// Local (name) --- Vinny
