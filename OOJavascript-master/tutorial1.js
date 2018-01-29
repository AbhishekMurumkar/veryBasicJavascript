//creation of an object
//create a variable 
var person = {
	name : 'Alex',
  age : 27,
};
//between opening and closing braces, that is where you define and object
//when you are creating an object you are absolutely required to use object notation. 
// keyword : 'value',
// The very last item should not have a comma at the end. 
alert(person.name + ' ' + person.age);
//You should see in your alert window Alex 27
//What is going on here? Basically, I want to access only the name of the person object so you can isolate it by using person.name
//if you want use alert (person); you will see a popup with Objectobject, which is not what we want to see. However, it will work on console.log
console.log(person);
