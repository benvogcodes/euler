// The following iterative sequence is defined for the set of positive integers:
//
// n → n/2 (n is even)
// n → 3n + 1 (n is odd)
//
// Using the rule above and starting with 13, we generate the following sequence:
//
// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
//
// Which starting number, under one million, produces the longest chain?
//
// NOTE: Once the chain starts the terms are allowed to go above one million.

var collatzSeq = function(num){
  var sequence = [num];

  while (!sequence.includes(1)) {
    var last_num = sequence[sequence.length -1];

    if (last_num % 2 === 0){
      sequence.push(last_num/2);
    } else {
      sequence.push((3 * last_num) + 1);
    }
  }

  return sequence;
};

var longestCollatz = function(num){
  var greatest_length = 0;
  var starting_num = 0;

  for (var counter = 13; counter < num; counter++){
    if (collatzSeq(counter).length > greatest_length){
      greatest_length = collatzSeq(counter).length;
      starting_num = counter;
    }
  }

  return starting_num;
};

longestCollatz(1000000);
