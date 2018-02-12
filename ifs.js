var age = prompt('your age please?', "enter your age");

var message = (age < 3) ? 'BABY!':
  (age < 18) ? 'you are still under 18':
  (age < 100) ? 'you are over 18':
  'digits?';

alert( message );
