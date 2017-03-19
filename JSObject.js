var band = {
  band: "Oomph",
  country: "Germany",
  year: 1994,
  greet: function() {
         console.log ("you are listening to " + this.band + ' ' + "from" + ' ' + this.country + ' formed in ' + this.year);
  },
  greet1: function() {
         console.log (this.band + " is awesome!");
  }
};
band.greet();
band.greet1();
console.log(band['band']);
