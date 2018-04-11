'use strict';

var categories = ["google", "faccebook", "twitter"];
for (var item of categories){
  console.log(item);
}

output
"google"

"faccebook"

"twitter"



'use strict';

var categories = "AabCD";
for (var item of categories){
  console.log(item);
}

//output
"A"

"a"

"b"

"C"

"D"


'use strict';

var categories = [ , , ];
for (var item of categories){
console.log(item);
}
//output undefined undefined

var categories = [ , , 90, 22 ];
for (let item of categories){
console.log(item);
}



'use strict';

var word = "Alexandre Dumas";
var count = 0;

for (var letters of word){
  count++;
}
console.log(count);

//output 15



