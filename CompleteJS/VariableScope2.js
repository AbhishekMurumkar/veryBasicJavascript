let varOne = "varOne";

if (true) {
  console.log(varOne);
  let varTwo = "varTwo";
  console.log(varTwo);

  if (true) {
    let varFour = "varFour";
  }
}

if (true) {
  let varThree = "varThree";
}

console.log(varTwo);

//output

"varOne"
"varTwo"
"error"
"ReferenceError: varTwo is not defined
    at ruhefahaxa.js:17:38
    at https://static.jsbin.com/js/prod/runner-4.1.4.min.js:1:13924
    at https://static.jsbin.com/js/prod/runner-4.1.4.min.js:1:10866"
