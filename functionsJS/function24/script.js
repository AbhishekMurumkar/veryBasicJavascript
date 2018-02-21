//passing arguments and setting module defaults


var ray = (function () {

var DEFAULTS = {
say: "greetings"
}


return {
speak : function() {
var myArguments = arguments[0] || '';
console.log(arguments[0].say);
console.log(arguments.say);


var statement = myArguments.say || 'testing';
console.log(statement);


}
};
})();






ray.speak({say: 'speak' });
