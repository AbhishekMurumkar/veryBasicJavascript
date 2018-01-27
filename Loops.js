///problem 
//list all nums even and odd 
//depending on if they are 
//even or odd until interger 10

var num = 0;

while (num <=10){
  if (num % 2 === 0){
    console.log(num + " is even");
  }else{
    console.log(num + " is odd");
  }
num = num + 1;
}

//for - initialization statement, gets executed once before the loop
//continuation condition, checked each time before executing the body
//++ update statement, executed each time the loop body ends
//code within {} the loop body executed each time the continuation condition is true

//for loop method
for (num = 0; num<=50; num++){
  if (num % 2 === 0){
    console.log(num + " is even");
  }else{
    console.log(num + " is odd");
  }
}; 
for (var i = 0; i<10; i++){
document.write('number ' + i + " " + "<br/>")
}


while loop --- while loop will run at least once
var i = 0;
while (i<=10) {
document.write('num ' + i + " " + "<br/>");
i++;
}

var people = ["Sally", "Mary", "John", "Tom", "Jeff"];
document.write(people[0]);

for (i in people) {
  document.write (people[i] + "<br/>");
}


//this for loop does not limit the number of items in the array
for (i=0; i<people.length; i++){
  document.write(people[i]+'<br/>');
}



//problme 1
//print the first 100 intergers
//step 1 declare var count
var count;

//step 2  write a loop
for (count = 0; count <=100 ; count++){
  console.log(count);
}

//print all the multiples of 3
//smaler than 30

for (count = 0; count<=30; count++){
  if(count%3 ===0){
    console.log(count + " s divideable")
  }
}

