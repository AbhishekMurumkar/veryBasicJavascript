doSomething();
//is hoisted to the top before it was decalred

function doSomething(){
alert("do something");
}

//cannot be hoisted / called out before a functionw as assigned to the variable
var doSomethingElse = function() {
alert("Hello function expression");
};

