//set datastructure

const set = new Set ([1, 2, 3, 4, 9, 9]);
set; 
//removes a duplicate 9


const set1 = new Set([9,34, 22, 78, 78, 89, 78, 100]);
set1.add(900);
//output Set { 9, 34, 22, 78, 89, 100, 900 }
set1.delete(78);
//true
set1;
//Set { 9, 34, 22, 89, 100, 900 }
set1.entries();
set1;
//Set { 9, 34, 22, 89, 100, 900 }

const entries1 = set.entries();
entries1;
//SetIterator {}

for (let [value] of entries1){
  value;
}
set1
