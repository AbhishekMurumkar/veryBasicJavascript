//function invoce

//4 ways oof invokign functions
1. as Functions
2. as methods
3. as constructors
4. as call and apply methods


//patterns 
  1. receive arguments and this
  
  
  function plus (a, b) {
return (
    console.log(a+b),
    console.log(this),
    console.log(arguments)
)
}
plus(2,2);
