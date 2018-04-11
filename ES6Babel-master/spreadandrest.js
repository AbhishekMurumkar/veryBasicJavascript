'use strict';

var showCategories = 
    new Function("...categories", "return categories;");
 console.log(showCategories('search', 'advertising'));
 
 //output ["search", "advertising"]
 
 "use strict";

var prices = [89, 11, 22, 55, 34];
var maxPrice = Math.max(...prices);
console.log(maxPrice);
//output 89


'use strict';

var newPriceArray = Array(...[,,]);
console.log(newPriceArray);
//[undefined, undefined]

 'use strict';
var maxCode = Math.max(..."289213");
console.log(maxCode);
//9

'use strict';
var codeArray = ["A', ..."CSDF", "T"];
console.log(codeArray);


'use strict';

var codeArray = ["A", ..."CSDF", "T"];
var sort = codeArray.sort();
console.log(sort);
//​
var codeArray = ["A", ..."CSDF", "T"];
var sort = codeArray.sort();
console.log(sort);
//["A", "C", "D", "F", "S", "T"]
