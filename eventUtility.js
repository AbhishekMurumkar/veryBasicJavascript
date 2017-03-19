/*
//build an immidate invoke function
(function() {
} ());

//use document.getElementbyID method to retreive form div
    var form = document.getElementById("theForm"), 
//var form = gets form element object
//when a use click on submit - it fires the form's submit event
    eventUtility.addEvent(form, "submit", function(evt) {
    });

//if a user inputs an invalid info, we use js for user valid verification
eventUtility.preventDefault(evt);

