// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//
// Find the largest palindrome made from the product of two 3-digit numbers.

// steps:
// 1) find all the possible products of 2 3-digit numbers, push them into an array.
// 2) filter out those that are not palindromes.
// 3) Find the max value of those that remain.

// Given an integer as input, this will return a boolean as to whether the integer is a palindromic number.

var isPalindrome = function(num) {
  var num_string = num.toString();

  var numbers = num_string.split('');

  var numbers_reverse = numbers.reverse();

  var reverse_string = numbers_reverse.join('');

  var reverse_num = parseInt(reverse_string);

  if (num == reverse_num) {
    return true;
  } else {
    return false;
  }
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

// This wrapper function will output the greatest palindromic product of two three-digit numbers.

var largestPalindromeProduct = function() {
  var three_digit_nums = [];

  for (var counter = 100; counter < 999; counter++) {
    three_digit_nums.push(counter);
  }

  var products = [];

  for (num1 in three_digit_nums) {
    for (num2 in three_digit_nums) {
      products.push(num1 * num2);
    }
  }

  var palindrome_products = products.filter(isPalindrome);

  return largestNumber(palindrome_products);
}
