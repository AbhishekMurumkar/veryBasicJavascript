
/*
var studentList = function (students){
console.log(students);
};
studentList = (["Edward Koch", "Mary Kane", "Sherlock Holmes"];
*/




var studentsDean = pupil => console.log(pupil);
studentsDean(["Ema", "joe", "steve"]);

const arr = [1,2,3,4.5];
const byTwo = arr.map(function(number){
return number *2;
});

byTwo;


const arr2 = [1,2,3,4.5];
const byThree = arr2.map((number3)=> {
return number3 *3;
});

byThree;

//callback function 




//one parameter
const arr2 = [1,2,3,4.5];
const byThree = arr2.map(number3 => {
return number3 *3;
});
byThree;





//one parameter
const array1 = [3, 6, 7, 90];

const byTwo = array1.map(number => number*2);

"log another array " + byTwo;



const array1 = [90, 92, 243, 928];
const byTwo = array1.map(number => (
    {
      number: number * 2
    }
  ));
  
  byTwo;

/*
output 

Native Browser JavaScript
   
=> [ { number: 180 },
  { number: 184 },
  { number: 486 },
  { number: 1856 } ]
  
 */


const array1 = [90, 92, 243, 928];

const byTwo = array1.map(() => 
    {
      return 2
    }
  
  );
  
  byTwo;
// [ 2, 2, 2, 2 ]


