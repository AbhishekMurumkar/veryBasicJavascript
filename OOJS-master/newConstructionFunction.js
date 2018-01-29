function CreateEmployeeObject(firstName, lastName, gender, location)
{
  this.firstName = firstName;
  this.lastName = lastName;
  this.gender=gender;
  this.location=location;
}

var employee1 = new CreateEmployeeObject ("John", "McClain", "M", "New York");
console.log(employee1);
