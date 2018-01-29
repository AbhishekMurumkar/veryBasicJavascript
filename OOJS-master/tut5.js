//getters and setters


class collegeSubject {
  constructor (subject){
    this._subject = subject;
  }
 get subject() {
   console.log("Welcome to Our University");
   return this._subject + " is the most popular college Class";
 }
  set subject (value) {
    this._subject = value;
  }
}

let collegeSubject1 = new collegeSubject();
collegeSubject1.subject = "Astronomy";
console.log(collegeSubject1.subject);

let collegeSubject2 = new collegeSubject();
collegeSubject2.subject = "Physics";
console.log(collegeSubject2.subject);

//output
"Welcome to Our University"
"Astronomy is the most popular college Class"
"Welcome to Our University"
"Physics is the most popular college Class"
