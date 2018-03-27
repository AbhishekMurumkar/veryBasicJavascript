var dog = {
    name: "Bud",
    breed: "Spaniel",
    weight: 21,
}

alert(dog.name);
alert(dog["breed"]);

dog.barking = "Woof Woof";
alert(dog.barking);

var cat = {
    name: "Sly",
    breed: "Calico",
    weight: 12,
    meow: function(){
        alert("MEOW MEOW");
    }
};
cat.meow();
