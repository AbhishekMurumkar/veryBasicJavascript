//lexical scope - sstatic scope ..
//code block is created following if statement

let varone = "varone";
if (true) {
  console.log("inside of if " + varone);
  let vartwo = "vartwo";
  console.log(
    "declared vartwo inside of if statement - local variable " + vartwo
  );
  varthree = "varthree";
  console.log("this is varthree " + varthree);
}
console.log("outside of if statement - global var " + varone);
console.log("this is varthree " + varthree);
console.log("outside of if " + vartwo);

//global scope
//defined outside of all code blocks

//local scope
//defined inside of the code block


//output 
"inside of if varone"
"declared vartwo inside of if statement - local variable vartwo"
"this is varthree varthree"
"outside of if statement - global var varone"
"this is varthree varthree"
"error"
"ReferenceError: vartwo is not defined
    at ruhefahaxa.js:14:56
    at https://static.jsbin.com/js/prod/runner-4.1.4.min.js:1:13924
    at https://static.jsbin.com/js/prod/runner-4.1.4.min.js:1:10866"
