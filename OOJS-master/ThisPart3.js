var cart = {  items: [    {name: 'apple', category: 'produce', price: 0.99, qty: 3},    {name: 'pear', category: 'produce', price: 0.25, qty: 9},    {name: 'berry', category: 'produce', price: 0.45, qty: 2},    {name: 'milk', category: 'diary', price: 3.87, qty: 1},    ],    discounts:{      'produce': 0.50,      'canned goods': 0.2,      },   applyDiscounts: function(){     var that = this;     this.items.forEach(function(item){       var discount = that.discounts[item.category];       if(!discount) return;       item.discount = item.price * discount;         });   },};
console.log(cart.applyDiscounts());



cart.applyDiscounts();
//applies discount
//to see what happens
console.log(cart.items);
