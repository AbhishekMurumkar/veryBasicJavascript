
'use strict';

function fn(){
  console.log("hi");
}
fn();



var fn = () =>
console.log("Hi! welcome to es6");
fn();



var fn = () => {
    let b = 9;
    let a = 90;
    return a + b;
};
console.log(fn());


//timeout Function
setTimeout(() => console.log("Ticking...."), 1000);

function fn() {
  console.log(this);
}
fn();

