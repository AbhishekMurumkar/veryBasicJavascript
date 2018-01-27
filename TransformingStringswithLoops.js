var greeting = "Hell, World!";
for (var index=0; index<greeting.length; index++){
  console.log(greeting.charAt(index));
}

//remove vowels
var removeVowels = function(word){
  if (typeof word != "string"){
    throw "throw removeVowels";
  }
  var result = "";
 
  for (var index = 0; index < word.length; index++){
   if(word.charAt(index) !=="a" && word.charAt(index) !=="e" &&
     word.charAt(index) !=="o" && word.charAt(index) !=="u" &&
     word.charAt(index) !=="i"){
     
     result += word.charAt(index);
  }
  }
  
  return result;
};

console.log(removeVowels("hello"));
