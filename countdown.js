var countDown = function(number){
  if(typeof number !== "number"){
    throw "number should be a number"
  }
  var current;
  for(current = number; current >=0; current--){
    console.log(current);
  }
};
countDown(4);
