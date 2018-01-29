//normal method invocation
var cart = {  subtotal: function() {    return "$"+35;  }}
console.log(cart.subtotal);console.log(cart.subtotal());
//accessing with square bracket//console.log(cart['subtotal']);
//invoking a function dynamically with using//square brackets
var cart = {  taxRate: 0.05,  subTotal: function(){ return 35; },  total: function(){return this.subTotal() + this.subTotal() * this.taxRate;}}
//invoike cart.subtotalconsole.log(cart.subTotal());//$35console.log(cart.total());//36.75
var finalStep = true;var methodName = finalStep ? 'total' : 'subTotal';console.log(methodName);console.log(cart[methodName]);//function//invoke totalconsole.log(cart[methodName]());// output 36.75methodName = 'subTotal';console.log(methodName);console.log(cart[methodName]());//35
