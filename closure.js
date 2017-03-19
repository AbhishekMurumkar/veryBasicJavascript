function doSomething (arg1) {
  return function() {
    alert(arg1);
  };
}

var fn = doSomething("hello, this is a closure");
fn();
