var cart = {  subTotal: function() {return 15;},  total: function(){    function getTax(){      return this.subTotal() * this.taxRate;    }    return this.subTotal()*getTax();  }}
console.log(cart.subTotal());//console(cart.total());//error//so the problem is getTax is a subfunction and this.taxRate is a prop vs method.
