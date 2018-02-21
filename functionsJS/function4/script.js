

//invoking functions as methods

var calc = {
     status : "awesome",
     plus : function (a, b) {
          return (
              console.log(this),
              console.log(a+b),
              console.log(arguments),
              console.log(this.status)
)
}
}

calc.plus(2,2);
