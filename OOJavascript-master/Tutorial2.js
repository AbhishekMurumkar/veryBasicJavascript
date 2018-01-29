//adding more items into object
var person = {
  name: 'Alex',
  age: 14,
  //now we are going to create another object within an object that will contain a list of details and hobbies
  details: {
    hobbies: ['ski jumping', 'skipping classes'],
    location: ' Hamlin Jr. High School'
  },
  //Let's create a function
  greet:function() {
    alert(person.name + ' is an Honor student!');
  }
};
//now, let's access hobbies through console.log and alert

alert(person.details.hobbies[0]);
alert(person.details.hobbies[1]);
alert(person.name + '' + "has two hobbies: " + person.details.hobbies[0] + ' ' +
  " and " + person.details.hobbies[1] + ' ' + "He is an awesome student at" + ' ' + person.details.location);

// All indexes in JS start with 0, therefore skiing takes index 0 and skipping classes takes 1

// let's access the function greet
person.greet();

//little lecturing time
//let's say you want to find out if the object is an object
console.log(typeof person);
//you should see Object in your dev tools
//let's say you want to know what if property Name inside of an object person is a string
console.log(typeof person.name);
//you will see string!


//One last thing before we move on
//var person = {
//name: 'Alex',
//You can also use double quotes in the properties 
//"first-name":
//You cannot use dashes without double quote but it esentially does the same thing.
//if you use double quotes and want to access "first-name" property inside of person object, you need to use console.log(person['first-name']);
