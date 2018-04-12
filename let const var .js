<script>
  //global scope
    var a = 10;
    function logA (){
      console.log(a); //10
    }
    logA();
    console.log(a); //10

    //function scope
    //function scope means that if you define 
    //a var within a funciton it is only avail within that function
    function logB(){
      var b = 100;
      console.log(b);//100
    }
    logB();
    console.log(b);//undefined

  //block scope
  var c = 99;
  if(true) {
    var c = 100;
    console.log(c); //100
  }
  console.log(c); //100 - no block scope


//block scope
if(true) {
  let d = 100;
  console.log(d); //100
}
console.log(d); // not working
