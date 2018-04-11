'use strict';

var getProduct = function (productID = 900){
	console.log(productID);
}
getProduct();
//output 900

////////////////////////////////////////
'use strict';

var getProduct = function(productID = 1000, type = "software"){
 console.log(productID + ' , ' + type);
}

getProduct(undefined, 'hardware');


////////////////////////////////////////

'use strict';

var getProduct = function(productID = 1000, type = "software"){
 console.log(productID + ' , ' + type);
}

getProduct( 90, 'hardware');
getProduct('Windows');
getProduct(23);

////////////////////////////////////////

"use strict";

var caliTax = 0.07;
var getTotal = function(price, tax = price * caliTax){
  console.log (price + tax);
}

getTotal(5.00);

////////////////////////////////////////

"use strict";

var getTotal = function (caliTax, price, tax = price * caliTax)
{
  console.log(price + tax);
}
getTotal(0.07, 5.00);

////////////////////////////////////////

"use strict";

var getTotal = function (price, tax = price * 0.07)
{
  console.log(price + tax);
}
getTotal(5.00);

////////////////////////////////////////

// number of args will be the number of arguments  passed into a function
// any default parameters ar ignored

var getTotal = function (price, sales, tax = 0.07)
{
  console.log(arguments.length);
}
getTotal(5.00, 90);

////////////////////////////////////////

'use strict';


var getTotal = function(price = adjustment, adjustment = 1) {
    console.log(price + adjustment);
}
getTotal(98.00);


////////////////////////////////////////


