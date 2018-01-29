
function awesome() {  var warrior = "Ninja";  warrior = "Samurai";return console.log("I am a awesome " + warrior);}
awesome();
console.log(typeof awesome);
awesome.foo = "bar";console.log(awesome.foo);awesome.metafunction = function() { return "I am a function on a function"};
console.log("awesome.metafunction is " + awesome.metafunction);
//invoke a functionawesome.metafunction();
