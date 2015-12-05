// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
//
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.


// Given an integer as input, this will return the nth term in the Fibonacci sequence.

var fibonacciTerm = function(num) {
  var sequence = [1,2];

  var target_index = num - 1;

  while (sequence.length < num) {
    var a = sequence[sequence.length-1];
    var b = sequence[sequence.length-2];
    sequence.push(a+b);
  }

 return sequence[target_index];
}

// Given an integer as input, this will return the index of the greatest term in the Fibonacci sequence that is still less than the integer.

var fibonacciLessThan = function(num) {
  var counter = 1;

  while (fibonacciTerm(counter) < num) {
    counter++;
  }

  counter--;

  return counter;
}

// Given an integer as input, this will return an array of "n" terms in the Fibonacci sequence.

var fibonacciSequence = function(num) {
  var sequence = [1,2];

  while (sequence.length < num) {
    var a = sequence[sequence.length-1];
    var b = sequence[sequence.length-2];
    sequence.push(a+b);
  }

  return sequence;
}

// Given an integer as input, this will return the sum of all even terms of the Fibonacci sequence less than the integer.

var fibonacciEvenSumLessThan = function(num) {
  var highest_term = fibonacciLessThan(num);

  var sequence_to_highest = fibonacciSequence(highest_term);

  var evens = function(value) {
    return value % 2 == 0;
  }

  var sequence_evens = sequence_to_highest.filter(evens);

  var sum_of_evens = sequence_evens.reduce(function(a,b){
    return a + b;
  })

  return sum_of_evens;
}