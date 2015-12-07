// The sum of the squares of the first ten natural numbers is,
//
// 1^2 + 2^2 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,
//
// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
//
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

// Given an integer as input, this will return the sum of the squares of all integers between 1 and the integer.

var sumOfSquares = function(num){
  var sum = 0;

  for (var counter = 1; counter <= num; counter++){
    sum += (counter * counter);
  }

  return sum;
}

// Given an integer as input, this will return the square of the sum of all integers between 1 and the integer.

var squareOfSum = function(num){
  var sum = 0;

  for (var counter = 1; counter <= num; counter++){
    sum += counter;
  }

  return (sum * sum);
}

// Given an integer as input, this will return the difference between (the square of the sum of all integers between 1 and that number) and (the sum of the squares of all integers between 1 and the integer). 
var diffOfSOS = function(num){
  var a = sumOfSquares(num);
  var b = squareOfSum(num);

  return (b - a)
}

diffOfSOS(100);
