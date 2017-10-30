function sumThings () {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++)
  {
    sum += arguments[i];
  }
  return sum;
}
console.log(sumThings(9, 9, 9, 9));
