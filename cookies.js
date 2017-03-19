//not supported by IE7
//local storage object
//holds name and value

localStorage.firstName = "John";
//localStorage.setItem(key, value);
localStorage.setItem("lastName", "Johnson");

alert(localStorage.firstName + " " + localStorage.getItem("lastName"));

