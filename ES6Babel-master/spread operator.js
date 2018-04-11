var cat = ["Tabby", "Siamese", "Mein Coon"];
var dog = ["german shepherd", "shetty", "poodle"];

var animals = ["whale", "giraffe", ...cat, ...dog];
console.log(animals);

//output
//["whale", "giraffe", "Tabby", "Siamese", "Mein Coon", "german shepherd", "shetty", "poodle"]
