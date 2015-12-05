// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.

var threeAndFive = function(num) {
  var multiples = [];

  for (var counter = 1; counter < num; counter++) {
    if (counter % 3 == 0 || counter % 5 == 0) {
      multiples.push(counter)
    };
  }

  var multiples_sum = multiples.reduce(function(a,b) {
    return a+b;
  });

  return multiples_sum;
}

// Test Code

threeAndFive(10);

threeAndFive(1000);
