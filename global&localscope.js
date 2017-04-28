//global variable
var example = "Algebra";
alert (example);

function subjectClass(example1) {
  //local variable
  var example1="Geometry";
  alert(example1);
  //accessing global variable
  alert(example);
}
//invoke  a function
subjectClass();
