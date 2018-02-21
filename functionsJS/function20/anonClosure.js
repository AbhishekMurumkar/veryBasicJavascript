function kung(){
console.log('foo');
}
kung();


var iKnow = function kung(){
console.log('booby');
}
iKnow();


//anon closure 
(function(){
var a = 3;
console.log(a);
console.log('moomoo');
})();
