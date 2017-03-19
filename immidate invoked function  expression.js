//immidate invoked function  expression

var artistName = 'Piet Mondrian';

(function (era1) {
  var artistName = 'Leonardo da Vinci';
  console.log(artistName);
  console.log(era1 + ' from 2nd console log');
} ('Modern Art'));

console.log (artistName);
