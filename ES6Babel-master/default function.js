function add(x,y){
console.log(x+y);
}
add(4,5);


//default values
function adds(x=5,y=6){
console.log(x+y);
}
adds();


function haveFun(activity="Skiing", time){
console.log(`Today I am going ${activity} at ${time}`)
}
haveFun("skiing", 5);
