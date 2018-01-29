/* 
var FrenchAuthor = {
  fName: "Alexandre",
  lName: "Dumas",
  bName: "Count of Monte Cristo",
  dPublished: 1845,
  country: "France",
  
  getFullName : function() {
    return this.fName + " " + this.lName + " wrote " + this.bName + " in " + this.dPublished + " in " + this.country;
  },
}; 
*/
function createPerson(firstName, lastName, bookName, datePublished) {
    return {
        firstName: firstName,
        lastName: lastName,
        bookName: bookName,
        datePublished: datePublished,
        getFullName: function() {
            return this.firstName + " " + this.lastName + " published " + this.bookName + " in " + this.datePublished;
        },
        greet: function(person) {
            if (typeof person.getFullName !== "undefined") {
                return "I have read an amazing book, " + person.getFullName();
            } else {
                return ("Do you like books?");
            }
        }
    };
}

var person = createPerson("Alexandre", "Dumas", "Count of Monte Cristo", 1845);
alert (person.greet(person));


