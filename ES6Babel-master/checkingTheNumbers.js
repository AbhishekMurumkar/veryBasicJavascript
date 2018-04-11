const addToCart = (item, number) => {
  return Number.isSafeInteger(number);
}
console.log(addToCart('shirt',Math.pow(2,95)));
