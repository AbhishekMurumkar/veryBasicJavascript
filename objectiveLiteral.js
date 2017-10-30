var blah;
var person = {
  firstName: 'Karl',
  lastName: 'Petersen',
  //greeting : function () {
  //  return "Hello, " + this.firstName + ' ' + this.lastName;
  //}
};

for (var el in person) {
  blah = typeof person [el] == 'function'?
  person [el]():
  person [el];
  console.log(blah);
}
