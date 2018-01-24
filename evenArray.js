
/*
Challenge Needed: (remember you cannot use looping or native methods/libraries that complete it automaticallyUsing Javascript, given an array of n integers (example: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 112, 113] ), remove all odd numbers, leaving only the even numbers.Rules:NO LOOPING. This means native methods, or libraries that loop for you are not allowed either.Supply the answer on github via Gist 
*/

var n = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30] ;

n = (function (n) { 
 if( ! n.length ) return [] ;
 var num1 = n.shift();
 a = arguments.callee(n);
 if (num1 % 2 === 0 ) n.unshift(num1);
 return n;
}(n));
console.log(n.join(','));



//Solution #2
const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 112, 113].filter((number) => number%2==0);
 console.log(n);

 //output
 [2, 4, 6, 8, 10, 100, 112]
