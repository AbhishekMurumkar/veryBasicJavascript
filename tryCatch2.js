/*
try/catch 

(function() {
    try {
        alert("This code will not fail");
        abert("this code will fail"); //error = abert doesnt exist
        alert("This code will execute");
    } catch (err) {
        alert("An error occured, please fix"); //executes after line 7
        alert(err.message); //points to abert - not defined
    }

    var hello = alert("hello world");
}());
*/

(function() {
    try {
        alert("This code will not fail");
        abert("this code will fail"); //error = abert doesnt exist
        alert("This code will execute");
    } catch (err) {
        alert("An error occured, please fix"); //executes after line 7
        alert(err.message); //points to abert - not defined
    } finally {
    alert ("this is within finally. It gets executed at the end");
    }
}());

