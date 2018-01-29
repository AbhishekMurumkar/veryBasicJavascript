var age = 99;

var person = {
name : 'Marcus',
age : 44,
};

//object.create gives you more control on what prototype should be
var anotherPerson = Object.create(null);
anotherPerson.name = 'Neil';

//so let's say since we do not have age for Sasha we can do this

var student1 = Object.create(person);
student1.name = 'Sasha';
console.log (student1.age);

//we grab info out of person and send it down to Sasha object 
//practical use? sure.  let's say we have 4 students going to the same school and school changes its name and location do we need to change a name for a student if we create school property in for each student! too much headache.

var school = {
	college : "St. Andrew College",
  state : "Washington",
  city: "Seattle"
}

var student10 = Object.create(school);
student10.name = 'Andrew';

var student11 = Object.create(school);
student10.name = 'Rena';

var student12 = Object.create(school);
student10.name = 'Alice';
alert (student10.name + ' ' + "transfered to " + school.college);
//Option 1 passing St Andrew down to Alice 

var student13 = Object.create(school);
student10.name = 'Judy';
alert (student10.name + ' ' + "transfered to " + student10.college);
//option 2
