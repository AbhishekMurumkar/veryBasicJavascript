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

