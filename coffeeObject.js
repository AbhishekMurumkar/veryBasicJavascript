
//individual vars 
//var myCoffeeFlavor = "Hazelnut";
//var myCoffeeTemp = "Piping Hot";
//var myCoffeeOunces = 100;
//var myCoffeeMilk=true;

//object
var myCoffee={
  flavor: "Hazelnut",
  temp: "Piping Hot",
  ounces: 100,
  milk: true
  
};
alert (myCoffee.milk);

//adding method to an object
var myCoffee={
  flavor: "Hazelnut",
  temperature: "Piping Hot",
  ounces: 100,
  milk: true,
  //add method
  reheat: function (){
    if(myCoffee.temperature==="cold")
    {
       myCoffee.temperature = "piping hot";
       alert("your coffee is reheated");
    }
    else {
      alert ("Your coffee is in freezer");
    }
    }
};
myCoffee.temperature = "cold";
//bracket notation
myCoffee["temperature"]="frozen";
myCoffee.reheat();
 
