var person = {
first: "doug",
actions: ['baseball', 'running', 'swimming'],
printAction: function(){
    var _this = this;
    this.actions.forEach(function(action) {
var str = _this.first + " likes to " + action;
console.log(str); 
});
}
}
person.printAction();




var person = {
first: "doug",
last: "Lewis",
actions: ['baseball', 'running', 'swimming'],
printAction: function(){
    this.actions.forEach(function(action) {
    var str = this.first + " likes to " + action;
    console.log(str); 
}.bind(this));
}
};
person.printAction();



var person = {
first: "doug",
last: "Lewis",
actions: ['baseball', 'running', 'swimming'],
printAction(){
    this.actions.forEach(action => {
    var str = this.first + " likes to " + action;
    console.log(str); 
});
}
};
person.printAction();
