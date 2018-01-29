var countries = ["USA", "Canada", "France", "Italy", "Iceland"];
console.log(countries[1]);
console.log(countries.indexOf('France'));
countries.pop();
console.log(countries);
countries.push("Uzbekistan");
console.log(countries);
countries.sort();
console.log(countries);
countries.push("Mozambique");
console.log(countries);

countries.shift();
console.log(countries);

countries.unshift('Brasil');
console.log(countries);


while(countries.length>0){
  console.log("I have visited " + countries.pop());
};

//more coming
