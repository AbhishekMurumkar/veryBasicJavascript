function doSomething (arg1) {
  return function() {
    alert(arg1);
  };
}

var fn = doSomething("hello, this is a closure");
fn();



function doSomething (arg1) {
  return function() {
    alert(arg1);
  };
}

var fn = doSomething("hello, this is a closure");
fn();

var fn1 = doSomething("hello, this is closure 2");
fn1();

fn();
