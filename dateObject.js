var now = new Date();
console.log(now.getFullYear());
console.log(now.toString());

var then = new Date('9/20/2018');
console.log(then.toString());


//output
//2017
//"Fri Oct 13 2017 22:59:33 GMT-0700 (Pacific Daylight Time)"
//"Thu Sep 20 2018 00:00:00 GMT-0700 (Pacific Daylight Time)"



var now = new Date();


var setDate = now.setFullYear(2100);
  console.log(setDate);
var setDate1 = now.setHours(20);
  console.log(setDate1);
var setDate2 = now.toString();
  console.log(setDate2);
var setDate3 = now.toLocaleDateString();
  console.log(setDate3);
