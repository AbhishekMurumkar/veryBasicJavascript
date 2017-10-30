function sayHello(){
  document.write("hello");
}

sayHello();


//user driven
function sayIt(name){
  document.write(name);
};

sayIt("Sebastian");


//function with return value
function add( num1, num3)  {
  sum = num1 + num3;
  return sum;
}
document.write(add(5, 53));


//default parameter with a missing parameter
function sayIt (word1, word2){
  word2 = word2 || "World";
  document.write(word1 + ", " + word2 + "<br/>");
}
sayIt("Hello", "Brad");
sayIt("Hello");
