//destructuring 


const nums = [34, 33, 44];
[num1, num2] = nums;
console.log(num1, num2);



'use strict';

let salary = ['9000', '5000', '9900'];
let [low, average, high]=salary;
console.log(average);



'use strict';

let salary = ['9000', '2922'];
let [low, average, high]=salary;
console.log(high);


'use strict';

let salary = ['9000', '2922', '43002'];
let [low, average, high]=salary;
console.log(high);



'use strict';

let salary = ['9000', '5000', '9900'];
let [low, average, high]=salary;
console.log(average);



'use strict';

let salary = ['9000', '2922'];
let [low, average, high]=salary;
console.log(high);


'use strict';

let salary = ['9000', '2922', ];
let [low, average, high]=salary;
console.log(high);

'use strict';

let salary = ['1', '2', ['3', '9']];
let [low, average, [actualLow, actualHigh]]=salary;
console.log(actualHigh);


'use strict';

let salary = {
  low: '5020',
  average: '90000',
  high: '6000'
};

let {low, average, high} = salary;
console.log(high);


'use strict';

let salary = {
  low: 90,
  average: 100,
  high: 200
}

let newLow, newAverage, newHigh;
({
  low: newLow,
  average: newAverage,
  high: newHigh} = salary);

console.log(newHigh);


'use strict';

let salary = ['9000', '5000', '9900'];
let [low, average, high]=salary;
console.log(average);



'use strict';

let salary = ['9000', '2922'];
let [low, average, high]=salary;
console.log(high);


'use strict';

let salary = ['9000', '2922', ];
let [low, average, high]=salary;
console.log(high);

'use strict';

let salary = ['1', '2', ['3', '9']];
let [low, average, [actualLow, actualHigh]]=salary;
console.log(actualHigh);



'use strict';
let[high, low]=[400, 222];
console.log(`high: ${high}, low: ${low}`);

for (let [a,b] of [[4,9]]){
  console.log(`${a} - ${b}`);
}
	
