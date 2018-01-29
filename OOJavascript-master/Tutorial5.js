//Lets compare 2

var person1 = {
name : 'Stephanie',
age : 45,
profession : "Professor"
};

// this is 2nd

var person2 = {
name : 'Stephanie',
age : 45,
profession : "Professor"
};

alert (person1 == person2);

//as you can see it is false because both objects are in different locations in the memory
// lets do === equal

alert (person1 === person2);
//see you get again FALSE ...  === it checks not only the same value but location in the memory

var person1 = {
name : 'Stephanie',
age : 46,
profession : "Professor"
};

alert (person1 == person1);
alert (person1 === person1);
// check this out
//i changed the age from person1 on the top and person1 
//so literally person 1 on top gets overwritten so therefore you get == true and === true
