function Person(name, country) {
    this.name = name;
    this.country = country;
    this.bookTitles = function() {
      return this.name + " is an author from " + this.country; 
    }
};


var julesVerne = new Person ("Jules Verne", "France");
var voltaire = new Person ("Voltaire", "France");
document.write ("are they equal " + (julesVerne === voltaire) + "<br />");
