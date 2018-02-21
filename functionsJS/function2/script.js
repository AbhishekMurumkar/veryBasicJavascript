//function declaration 

function plus (a, b){
  return(a+b);
}
console.log(plus(2,2));



//function expression

var plus = function (a, b){
   return console.log(a+b);
};
plus(2,2);


//immidately invoked function
//needed only if you are using once 
// is invoked immidately
//is initiatlized immidately

var plus = function (a, b){
   return console.log(a+b);
}(2,3); 
//initializing or instatiating





