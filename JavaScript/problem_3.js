// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

// Given an integer as input, this will return a boolean as to whether the integer is prime.

var isPrime = function(num){
  var factors = [];

  for (var counter = 1; counter < num; counter++) {
    if (num % counter == 0) {
      factors.push(counter);
    };
  }

  if (factors.length > 1) {
    return false;
  } else {
    return true;
  }
}

// Given an integer as input, this will return an array of all factors of that integer.

var theFactorsOf = function(num) {
  var factors = [];

  for (var counter = 1; counter < num; counter++) {
    if (num % counter == 0) {
      factors.push(counter);
    }
  }

  return factors;
}

// Given an array as input, this will return the greatest value from the array.

var largestNumber = function(arr) {
  var largest = 0;

  for (element in arr) {
    if (arr[element] > largest) {
      largest = arr[element];
    }
  }

  return largest;
}

// Given an integer as input, this will return the greatest prime factor of that integer.

var largestPrimeFactor = function(num) {
  var factors = theFactorsOf(num);

  factors = factors.filter(isPrime);

  var largestPrime = largestNumber(factors);

  return largestPrime;
}

// TEST
largestPrimeFactor(600851475143);
