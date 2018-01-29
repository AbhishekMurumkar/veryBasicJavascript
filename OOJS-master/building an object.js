# oopJavascript
object oriented Javascript



var book = {
    title: "Willow Creek",
    author: "Adam Smart",
    year: 1938,

    //object method
    printBook: function() {
        console.log("The book on your shelf is " + book.title);
    },

    yearBook: function() {
        console.log(book.title + " was published in " + book.year);
    }

};

book.printBook();
book.yearBook();




var student = [];
student.firstName = "John";
student.age = 12;
student.class = "CSS";
student.university = "USC";

console.log(student.firstName + " signed up for " + student.class);
