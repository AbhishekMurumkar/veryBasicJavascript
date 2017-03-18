function toThePower (num, exp) {
  var value = num;
  
  for(var i=1; i < exp; i++)
    {
      value = value * num;
    }
  return value;
}
alert(toThePower(5, 3));
//5 * 5 * 5

var value = toThePower(8, 4);
alert(value);
