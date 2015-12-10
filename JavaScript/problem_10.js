// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//
// Find the sum of all the primes below two million.

// Given an integer as input, this returns a boolean as to whether the integer is a prime number.

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

// Given an integer as input, this returns an array of a prime numbers less than the integer.

var allPrimesBelow = function(num){
  var primes = [];

  for (var counter = 2; counter < num; counter++){
    if (isPrime(counter) === true){
      primes.push(counter);
    }
  }

  return primes;
}

// Given an integer as input, this returns the sum of all prime numbers less than the integer.

var sumOfPrimesBelow = function(num){
  var primes = allPrimesBelow(num);

  var sum_of_primes = primes.reduce(function(a,b){
    return a+b;
  });

  return sum_of_primes;

}

// TEST
sumOfPrimesBelow(2000000);
