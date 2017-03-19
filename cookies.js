var person = {
  firstName: "John",
  lastName: "Doe",
  age: 47
};

localStorage.person = JSON.stringify(person);
var personObj=JSON.parse(localStorage.person);
alert (personObj.firstName+ " " + personObj.lastName);
localStorage.clear();





/*
//not supported by IE7
//local storage object
//holds name and value

localStorage.firstName = "John";
//localStorage.setItem(key, value);
localStorage.setItem("lastName", "Johnson");

alert(localStorage.firstName + " " + localStorage.getItem("lastName"));

localStorage.removeItem("lastName");
alert (localStorage.lastName);

localStorage.clear();
alert(localStorage.firstName);
//undefined - firstname is no longer there

localStorage.age=33;
//will not work needs to be converted into a int

var age = parseInt(localStorage.age, 10);

alert(typeof localStorage.age);
*/
