
var person = {
	name : 'Alex',
  age : 27,
  greet : function () {
  console.log(this.name);
  }
};
person.greet();

//you can also get access to property inside of  an object using this.
