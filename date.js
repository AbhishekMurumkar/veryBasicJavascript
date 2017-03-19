var date = new Date();
alert(date);

var date1 = new Date (1998, 11, 30);
alert(date1);

var date2 = new Date (1998, 11, 30, 23, 34, 23, 23);
alert(date2);

var date3 = new Date (39999);
alert(date3);

var date4 = new Date (950000000);
alert(date4);
//strange one -- javascript timestamp

var date10 = new Date ();
var months = [
"January",
"February",
"March",
"April"
];
var month = months [date10.getMonth()];
alert(month);
alert(date10.getTime());
alert(date10.getTimezoneOffset() / 60);

//previous month
var date11 = new Date ();
date11.getMonth(3);
date11.setMonth(date11.getMonth() - 1);
alert (date11);

//previous year
var date12 = new Date ();
date12.setFullYear(date12.getFullYear()-1);
alert(date12);

var date13 = new Date (2017, 11, 5);
var date14 = new Date (2016, 9, 4);

if (date13 < date14) {
  alert (date13 + "happened earlier");
}
else {
  alert("today is " + date14 );
}

var date15 = new Date (2017, 11, 5);
var date16 = new Date (2017, 11, 5);

if (date15.getTime() === date16.getTime()){
    alert(date15 + " is the same as " + date16);
} else {
    alert (date15 + "is not the same as " + date16);
}
