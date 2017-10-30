var s = "Hello";
console.log("var S starts with " + s.charAt(0));


var hello = "Hello from Google";
console.log (hello.indexOf("f"));
console.log (hello.slice(3, 9));
console.log (hello.toUpperCase());
console.log (hello.split("from"));
console.log (hello.split("oo"));

var hello = "Hello from Google";
console.log (hello.replace("Google", "Washington"));
//output "Hello from Washington"



var quote = "There is nothing either good or bad, but thinking makes it so.";
var incQuote = quote.includes("or");
console.log(incQuote);

var searchQuote = quote.search("either");
console.log(searchQuote);

var replaceQuote = quote.replace("thinking", "everything");
console.log(replaceQuote);

var sliceQuote = quote.slice(0, 23);
console.log(sliceQuote);

var splitQuote = quote.split(" ");
console.log(splitQuote);
for (var i = 0; i<splitQuote.length; i++){
  console.log(splitQuote[i] + "");
};
var substringQuote = quote.substr(9,28);
console.log(substringQuote);
