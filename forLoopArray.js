var nums=[];
for (var i=0; i<6; i++){
nums[i]=i*2;
}
alert(nums);


Here we have a blank array that we assign a variable nums
and we want to see an alert with even numbers less than 6 

var nums = []; //we asigned a blank value to nums and formatted [] for an array

Now, we need to use for loop 

for (var i = 0 ; i < 6 ; i++) {}

in plain english. For *loop* we give condition (our initial value starts at 0 so we need to create a new variabble i, 
then we tell that i to be less than 6 that would be our condition that var i cannot be a bigger number than 6
then last stage is give post increment i++

if we dont add an increment  but leave it at initial state i
js will run for loop only once and it will prompt you 0

by adding post increment i++, we are telling JS to continue running the for loop until you reach  6!

then we bring back var nums and add i to array and that we want to multiply i * 2

so the process is 

i = 0  0 * 2 = 0 ... is 0 less than 6? TRUE, next number
i = 1  1 * 2 = 2
i = 2  2 * 2 = 4
i = 3  2 * 2 = 6
i = 4  2 * 2 = 8
i = 5  2 * 2 = 10

The loop stops since 6 is not less than 6.






