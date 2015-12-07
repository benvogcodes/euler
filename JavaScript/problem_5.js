// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

// This function will return the smallest positive number for which all the numbers from 1 to 20 are factors.

var smallestNumber = function(){
  var result = 0;

  for (var counter = 1; result === 0; counter++){
    if (counter % 1 === 0 && counter % 2 === 0 && counter % 3 === 0 && counter % 4 === 0 && counter % 5 === 0 && counter % 6 === 0 && counter % 7 === 0 && counter % 8 === 0 && counter % 9 === 0 && counter % 10 === 0 && counter % 11 === 0 && counter % 12 === 0 && counter % 13 === 0 && counter % 14 === 0 && counter % 15 === 0 && counter % 16 === 0 && counter % 17 === 0 && counter % 18 === 0 && counter % 19 === 0 && counter % 20 === 0) {
      result = counter;
    }
  }

  return result;
}

smallestNumber();
