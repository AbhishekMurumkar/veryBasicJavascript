var fido = {
  name: "Fido",
  bark: function(){
    console.log(this.name + " says Woof");
  },
  bark2: function(volume, howl){
      barkMsg = "ARF WOOF";
      if(volume > 5) {
        console.log(barkMsg.toUpperCase());
      }else {
        console.log ("meaw meaw purr");
      }} 
};

var kitty = {
  name: "Purr Kitty",
  meow: function(){
    console.log(this.name + " says Meaw");
  }
}

fido.bark();
kitty.meow();
fido.bark2(34);

//i want my dog to meaw! --- use .call

kitty.meow.call(fido);
fido.bark.call(kitty);


fido.bark2.call(kitty, 7);

//apply
fido.bark2.call(kitty, [20]);
fido.bark2.call(kitty, 2 );
fido.bark2.call(kitty, 24 );


