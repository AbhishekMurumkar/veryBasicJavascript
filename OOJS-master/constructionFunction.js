function Person(name, country) {
    this.name = name;
    this.country = country;
    this.bookTitles = function() {
      return this.name + " is an author from " + this.country; 
    }
}

var julesVerne = new Person ("Jules Verne", "France");
document.write(julesVerne.bookTitles() + "<br />");
document.write((julesVerne instanceof Person));
