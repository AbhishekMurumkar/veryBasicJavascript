//private properties

function SecretCode(){
  var secretNum = 78;
  
  this.guessNum = function(num) {
    if(num > secretNum) {
      return "Your number needs to be lower";
    } else if (num < secretNum) {
      return "Your number needs to be higher";      
    } else { 
    return "You guessed it right!";
    }
  }
}

var secret = new SecretCode();
alert(secret.guessNum(80));
