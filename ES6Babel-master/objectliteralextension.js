'use strict';

var price = 5, quantity = 5;
var productView = {
	price,
	quantity,
	calculateValue(){
		return this.price * this.quantity
	}
};
console.log(productView.calculateValue());
//25


'use strict';

var price = 5.99, quantity = 10;
var productView = {
  price: 7.99,
  quantity: 1,
  calculateValue(){
    return this.price * this.quantity
}
};

console.log(productView.calculateValue());


'use strict';

var price = 5.99, quantity = 10;
var productView = {
  price,
  quantity,
  "calculate value" (){
    return this.price * this.quantity
  }
};
console.log(productView["calculate value"]());
//outout 59.90000000


'use strict';

var field = "dynamic acma"
var price = 9.22;
var productView = {
  [field]:price
};
console.log(productView);

//adding dynamic field
'use strict';

var field = "dynamic acma"
var price = 9.22;
var productView = {
  [field + "-999"]:price
};
console.log(productView);
//field-999

'use strict';

var method = "doIt";
var productView = {
  [method + "-001"](){
    console.log("in a method");
  }
};
productView['doIt-001']();
//outout in the method