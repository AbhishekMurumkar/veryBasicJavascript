//chaining module method calls

var ray = (function(){
var DEFAULTS = {
say: 'hello',
speed: 'normal'
}

return {

speak: function () {
var myArguments = arguments [0] || '';
var statement = myArguments.say || DEFAULTS.say;
console.log(statement);
return this;
},


run: function() {
var myArguments = arguments [0] || '';
var running = myArguments.speed || DEFAULTS.speed;
console.log('running ...' + running);
return this;
}
};
})();


//html

ray.speak({ say: 'howdy'});
ray.run();


ray.speak({ say: 'HI!' }).run();
ray.speak({ say: 'HI!' }).run().run({speed: "gone in 60 sec faster"});
