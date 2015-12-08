// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//
// What is the 10 001st prime number?

// Given an integer as input, this will return a boolean as to whether the integer is prime or not.
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

// Given an integer "num" as input, this will return the nth prime number.

var nthPrime = function(num){
  var primes = [];
  var target_index = num - 1;

  for (var counter = 2; primes.length < num; counter++){
    if (isPrime(counter) === true){
      primes.push(counter);
    }
  }

  return primes[target_index];
}

// TEST
nthPrime(10001);
