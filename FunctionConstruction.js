//Function constructor .. the function name is capitalized

function Ruler (firstname, lastname) {

  this.firstname = firstname;
  this.lastname = lastname;

}

var alexander = new Ruler ('Alexander', 'The Great');
console.log(alexander.firstname + ' ' + alexander.lastname);


//prototype example


function Book (titlebook, authorbook) {
  this.titlebook = titlebook;
  this.authorbook = authorbook;
}

Book.prototype.listing = function() {
  console.log(this.titlebook + ' was written by ' + this.authorbook);
};

var lordoftherings = new Book("Lord of the Rings", "Tolkien");

lordoftherings.listing();


//testing  mode
console.log(lordoftherings.__proto__);
//you should see Book { listing: [Function] }

