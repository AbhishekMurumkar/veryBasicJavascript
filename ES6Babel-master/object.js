

var person1 = {
                                               //properties
  age: this.age,
  name: this.name,
                                              //method
  nameandAge:
  function(name, age){
  console.log("your client's name is " + name + " . His age is " + age);
  }
};
var person2 = person1.nameandAge("Wayne Woo", 90);
console.log(person2);
