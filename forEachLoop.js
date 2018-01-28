var tweets = ["Hello World", "Awesome!", "Best of Luck", "Cheers"];
for (var index = 0; index<tweets.length; index++){
  console.log(tweets[index]);
}

var printElement = function(tweet){
  console.log("My tweets are " + tweet);
};
tweets.forEach(printElement);

//weird way 
tweets.forEach(function(tweet){
 console.log("My tweets are " + tweet);
});





var sum = function(list) {
  var sum = 0;
  list.forEach(function(number) {
    sum = sum + number;
  });
  return sum;
};
console.log(sum([9,1,4]));




