//create a loop 1-100
// if var divides by 3 without remainder - console.log ("fuzz")
//if var divides by 5 without remainder - console.log("buzz");
//if var divides 3 and 5 without remainder - console.log ("fuzzbuzz");
//else console.log("i")

for (i=1; i<=100; i++){
if (i%3===0) {
  console.log ("Fuzz");
}
  else if (i%5===0){
    console.log("buzz");
  }
  else if (i%5===0 && i%3===0){
    console.log("fuzzbuzz");
  }
else {
  console.log (i);
}
}
