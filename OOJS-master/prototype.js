var Person = function (firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
};

Person.prototype.getFullName = function(){
  return this.firstName + " " + this.lastName;
};

Person.prototype.greet = function(person) {
  if (person instanceof Person) {
    return "Hello, " + person.getFullName();
  } else { 
  return "Hi, there!";
  }
};
  
var person = new Person ("john", "doe"),
    person2 = new Person ("Alexandre", "Dumas");

alert (person.greet(person2));
