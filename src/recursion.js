/* jshint esversion: 6 */

// Solve the following prompts using recursion.
// test

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  // I - integer
  // O - integer(product)
  // C - use recursion
  // E - 0! = 1

  if (n === 0) {
    return 1;
  }

  if (n < 0) {
    return null;
  }

  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  // I - array of integers
  // O - number
  // C - use recursion
  // E - negative numbers, empty array, array with one input

  // base case: if array is empty, return 0
  if (array.length === 0) {
    return 0;
  }
  // else: return sum of element at beginning of array and rest of elements in array
  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {

  var sum = 0;

  if (!Array.isArray(array)) {
    return array;
  }
  for (let i = 0;  i < array.length; i++) {
    sum += arraySum(array[i])
  }
  return sum;
};

// 4. Check if a number is even.
var isEven = function(n) {
  n = Math.abs(n);

  if (n === 0) {
    return true;
  }
  if (n === 1) {
    return false
  };

  return isEven(n - 2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n === 0) {
    return 0;
  }

  if (n > 0) {
    return (n - 1) + sumBelow(n - 1);
  }

  if (n < 0) {
    return (n + 1) + sumBelow(n + 1);
  }


};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  // base case for if range goes from a smaller x to a larger y
  if (x === y - 1) {
    return [];
  }

  // base case if x and y are equal
  if (x === y) {
    return [];
  }

  // base case if range goes from a larger x to a smaller y
  if (x === y + 1) {
    return [];
  }

  // recursive case: if range goes from larger x to smaller y
  if (x > y) {
    return [x - 1].concat(range(x - 1, y));
  }

  // recursive case: if range goes from smaller x to larger y
  return [x + 1].concat(range(x + 1, y));
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  // I - two numbers representing base and exponent
  // O - number which is result of computing the exponent of a number
  // C - none
  // E - if exponent is zero, if base is zero

  // base case: if exponent is equal to zero, return one

  if (exp === 0) {
    return 1;
  }

  // base case: if exponent is equal to one, return base number

  if (exp === 1) {
    return base;
  }

  // base case: if exponent is equal to negative one, return one divided by base number

  if (exp === -1) {
    return (1 / base);
  }

  // recursive case if exponent positive: return base multipled by result of calling exponent(base, exp - 1)

  if (exp > 1) {
    return base * exponent(base, exp - 1);
  }

  // recursive case if exponent negative: return one divided by base times result of one divided by calling of exponent(base, exp + 1)

  if (exp < -1) {
    return (1 / base) * (exponent(base, exp + 1));
  }

};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  // I - integer
  // O - boolean
  // C - none
  // E - if number is zero

  // base case: if number is less than 1, return false

  if (n < 1) {
    return false;
  }

  // base case: if number is 1 return true
  // base case: if number if 2, return true

  if (n === 1 || n === 2) {
    return true;
  }

  // recursive case: return powerOfTwo(n / 2)

  return powerOfTwo(n / 2);
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  // I - string
  // O - string(reversed)
  // C - none
  // E - empty string

  // base case: if string is empty, return empty string
  if (string.length === 0) {
    return '';
  }

  // recursive case: return concatination of string and call to reverse

  return (reverse(string.slice(1))).concat(string[0]);
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  // I - string
  // O - string
  // C - none
  // E - if string is one letetr or zero letters long

  // base case: if string is equal to zero, return true
  if (string.length === 0) {
    return true;
  }
  // base case: if string is equal to one, return true
  if (string.length === 1) {
    return true;
  }
  // recursive case: if letter at beginning of string is equal to letter at end of string, call palidrome on string remaining after letters removed
  if (string[0].toLowerCase() === string[string.length - 1].toLowerCase()) {
    return palindrome(string.slice(1, -1));
  } else {
    // else, return false
    return false;
  }

};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {

  if (y === 0) {
    return NaN;
  }

  if (x < y) {
    return x;
  }

  if (x > y && (x < 0 && y < 0)) {
    return x;
  }

  if (x >= y && (x > 0 && y > 0)) {
    return modulo((x - y), y);
  }
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {

  if (y === 0) {
    return 0;
  };

  if (y > 0) {
    return x + multiply(x , y - 1);
  }

  if (y < 0 && x < 0) {
    return -x + multiply(x, y + 1);
  }

  if (y < 0 && x > 0) {
    return -x + multiply(x, y + 1);
  }

};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {

  if (x < 1) {
    return 0;
  }

  return 1 + divide(x - y, y);

};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {

  if (str1.length === 0 && str2.length === 0) {
    return true;
  }

  if (str1[0] === str2[0]) {
    return compareStr(str1.slice(1), str2.slice(1));
  }

  return false;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {

  if (str.length === 0) {
    return [];
  }

  return [str[0]].concat(createArray(str.slice(1)));

};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  if (array.length === 0) {
    return [];
  }

  return reverseArr(array.slice(1)).concat([array[0]]);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  if (length === 0) {
    return [];
  }
  return [value].concat(buildList(value, length - 1));
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {

  let result = 0;

  for (let k in obj) {
    if (typeof obj[k] === 'object') {
      result += countKeysInObj(obj[k], key);
    }
    if (k === key) {
      result += 1;
    }
  }
  return result;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  let result = 0;

  for (let k in obj) {
    if (typeof obj[k] === 'object') {
      result += countValuesInObj(obj[k], value);
    }
    if (obj[k] === value) {
      result += 1;
    }
  }
  return result;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {

  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      replaceKeysInObj(obj[key], oldKey, newKey);
    }
    if (key === oldKey) {
      obj[newKey] = obj[key];
      delete obj[key];
    }
  }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {

  let result = 0;

  for (let k in obj) {
    if (typeof obj[k] === 'object') {
      result += nestedEvenSum(obj[k]);
    }
    if ((typeof obj[k] === 'number') && (obj[k] % 2 === 0)) {
      result += obj[k];
    }
  }
  return result;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {

    let result = [];

    if (!Array.isArray(array)) {
      return [array];
    }

    for (let i = 0; i < array.length; i++) {
      result = result.concat(flatten(array[i]));
    }
    return result;

};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {

  let first = 0;
  let second = 1;
  let result = [];
  let pushed = false;

  if (list.length === 1) {
    return list;
  }

  for (let i = 0; i < list.length - 1; i++) {
    if (list[first] !== list[second]) {
      pushed = true;
      result.push(list[first]);
      return result.concat(compress(list.slice(second)));
    } else {
      second++;
    }
  }
  if (!pushed) {
    result.push(list[first]);
  }
  return result;
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  let result = [];
  if (array.length === 0) {
    array.push(aug);
    return array;
  }
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result.push(augmentElements(array[i], aug));
    } else {
      array.push(aug);
      return array;
    }
  }
  return result;
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
  var merge = (array1, array2) => {
    let merged = [];
    var i = 0;
    var j = 0;

    while (i < array1.length && j < array2.length) {
      if (array1[i] <= array2[j]) {
        merged.push(array[i]);
        i++;
      } else {
        merged.push(array[j]);
        j++;
      }
    }
    while(i < array1.length) {
      merged.push(array1[i]);
      i++;
    }
    while(j < array2.length) {
      merged.push(array2[j]);
      j++;
    }
    return merged;
  }

  if (array.length <= 1) {
    return array;
  }

  let middle = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, middle));
  let right = mergeSort(array.slice(middle));

  return merge(left,right);
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
