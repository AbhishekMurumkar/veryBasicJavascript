const set = new Set ([90, 20, 20, 20, 2, 4, 5, 9]);
set.add(29);

const entries = set.entries();
for(let [value] of entries){
value;
}

set;

//Set { 90, 20, 2, 4, 5, 9, 29 }


const set = new Set ([90, 20, 20, 20, 2, 4, 5, 9]);
set.add(29);

const entries = set.entries();
for(let [value] of entries){
console.log(value);
}

set;
Native Browser JavaScript
   
90
20
2
4
5
9
29
=> Set { 90, 20, 2, 4, 5, 9, 29 }
   
const set = new Set ([90, 20, 20, 20, 2, 4, 5, 9]);
set.add(29);

const entries = [...set.entries()];
console.log(entries);
set;
Native Browser JavaScript
   
[ [ 90, 90 ],
  [ 20, 20 ],
  [ 2, 2 ],
  [ 4, 4 ],
  [ 5, 5 ],
  [ 9, 9 ],
  [ 29, 29 ] ]
=> Set { 90, 20, 2, 4, 5, 9, 29 }



const set = new Set ([90, 20, 20, 20, 2, 4, 5, 9]);
set.add(29);

console.log(set.has(100)); //false
console.log(set.has(29)); //true


const set = new Set ([90, 20, 20, 20, 2, 4, 5, 9]);
set.add(29);
console.log("this is set keys " +[ ...set.keys()]);
this is set keys 90,20,2,4,5,9,29







1
2
3
4
5
6
7




const set = new Set ([90, 20, 20, 20, 2, 4, 5, 9]);
set.add(29);

set.forEach(value => {
  console.log("this is the value " + value);
});
set;


 

const set = new Set ([90, 20, 20, 20, 2, 4, 5, 9]);
set.add(29);
console.log("this is set values " +[ ...set.values()]);
//this is set values 90,20,2,4,5,9,29

const set = new Set ([90, 20, 20, 20, 2, 4, 5, 9]);
set.add(29);

set.forEach(value => {
  console.log("this is the value " + value);
});
set;


const set = new Set ([90, 20, 20, 20, 2, 4, 5, 9]);
set.add(29);

set.forEach(value => {
  console.log("this is the value " + value);
});
set;
//output   
this is the value 90
this is the value 20
this is the value 2
this is the value 4
this is the value 5
this is the value 9
this is the value 29
=> Set { 90, 20, 2, 4, 5, 9, 29 }
   
 
const set = new Set ([90, 20, 20, 20, 2, 4, 5, 9]);
set.add(29);
for (let value of set) {
  value;
}
console.log(set)
//Set { 90, 20, 2, 4, 5, 9, 29 }

