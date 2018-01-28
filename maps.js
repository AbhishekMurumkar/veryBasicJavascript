var doubleForLoop = function(list){
  var result =[];
  var index;
  
  for (index=0; index<list.length; index++){
    result.push(list[index]*2);
  }
  return result;
};

console.log(doubleForLoop([2,3,4,5]));



var doubleMap = function(list){
  var result = list.map(function(number){
    return number*2;
  });
  return result;
};
console.log(doubleMap([3,2,3,5]));


var doubleMap = function(list){
  return list.map(function(number){
    return number*2;
  });
};
console.log(doubleMap([3,2,3,5]));


var square = function (number){
  return number * number;
}
var numbers = [2,3,4,5];
console.log(numbers.map(square));


//triple in power

var numbers = [2,3,4,5];
numbers.map(function (number) {
  return Math.pow(number, 3);
});


[true, false, false, true].map(function(value){
  return !value;
});



var double = function(number){
  return number * 2;
};

console.log([2,3,4,5].map(double));


[2,3,4,5].map(double).forEach(function(number){
  console.log("This is the number "+ number )
});

//output first letter of array items

var firstLetter=["Jode", "Anna", "Steve"];
var firstLetters = function(listOfStrings){
  return listOfStrings.map(function(word){
    return word.charAt(0);
  });
};
console.log(firstLetters(firstLetter));



var range = function(max){
    var result=[];
    var index;
    for (index = 0; index <= max; index++){
      result.push(index);
    };
    return result;
};
console.log(range (10));


var range = function(max){
    var result=[];
    var index;
    for (index = 0; index <= max; index++){
      result.push(index);
    };
    return result;
};

console.log(range (10));

range(10).map(function(number){
  var number = number*2;
  return console.log(number);
});


//Fuzz after 3
var range = function(max){
    var result=[];
    var index;
    for (index = 0; index <= max; index++){
      result.push(index);
    };
    return result;
};

range(100).map(function(number){
  if(number % 3 === 0){
    return "fuzz";
  } else {
    return number;
  }
}).forEach(function(number) {
  console.log(number);
});

