'use strict';
var getPrice = () => 3.99;
console.log(typeof getPrice);


//execute a function
var getPrice = () => 9.22;
console.log(getPrice());

'use strict';
var getPrice = count => count * 4.22;
console.log(getPrice(2));

//JS ECMA 2015
'use strict';
var getPrice = function getPrice(count) {
    return count
};
console.log(getPrice(2, 3.22));

'use strict';
var getPrice = function getPrice(count, tax) {
    return count * tax;
};
console.log(getPrice(2, 3));
//output 6


'use strict';
let getPrice = (count) => {
    let caliTax = 8.80;
    let nitendo = 200.50;
    let preTax = count * nitendo;
    let price = preTax + (nitendo * caliTax / 100);
    return price;
}
console.log(getPrice(1));



'use strict';

var invoice = {
  number : 90,
  process:  function()
  {
    console.log(this);
  }
};
invoice.process();



'use strict';

var invoice = {
  number : 90,
  process:  function()
  {
    return() =>
      console.log(this.number);
  }
};
invoice.process()();



