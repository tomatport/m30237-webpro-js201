/* eslint-disable no-unused-vars */
/*
 * This is index.js
 *
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

// 2. Return student ID number
function id() {
  return 'up2194485';
}

// 3. Return first name
function fn() {
  return 'Thomas';
}

// 4. Return surname
function sn() {
  return 'Robinson';
}

// 5. Sum two parameters
function add(a, b) {
  return a + b;
}

// 6. Subtract two parameters
function subtract(a, b) {
  return a - b;
}

// 7. Set the 'checked' property of a given object
function checkObject(obj) {
  obj.checked = true;
}

// 8. Set the 'checked' property of a given object's 'data' property, if it exists
function checkObjectInside(obj) {
  if ('data' in obj) {
    obj.data.checked = true;
  }
}

// 9. Set the value of arr index i to n
function arraySet(arr, i, n) {
  if (arr[i]) arr[i] = n;
}

// 10. Sum an array of numbers
function addAll(arr) {
  let sum = 0;
  arr.forEach(num => { sum += num; });
  return sum;
}

// 11. Return whichever number is larger
function larger(a, b) {
  return (a > b) ? a : b;
}

// 12. Return the largest number in an array
function largest(arr) {
  let max; // we can't set this to 0, since we might have all negative #s
  arr.forEach(num => {
    if (num > max || !max) max = num;
  });
  return max || null; // didn't know about using || here - same as max ? max : null
}

// 13. Check if two arrays are identical
// Returns true if they are, false if they are not
function compare(a, b) {
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) { // not allowed to use for...in
    if (a[i] !== b[i]) return false;
  }

  return true;
}

// 14. Returns an array with all elements incremented by n
function addToAll(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += n;
  }
  return arr;
}

// 15. Remember a value for later
let remembered;
function rememberThis(keepsake) {
  remembered = keepsake;
}

// 16. Make an array of n numbers, from 1 to n
function nArray(n) {
  const arr = [];

  for (let i = 0; i < n; i++) {
    arr[i] = i + 1;
  }

  return arr;
}

// 17. Return the sum of all numbers in an array
// If array doesn't exist or is empty, return 0
function addAllOpt(arr) {
  if (!arr || arr.length === 0) return 0;

  return addAll(arr);
}

// 18. Returns numbers in array that are divisible by a given number
function divisors(arr, div) {
  const divisable = [];

  arr.forEach(n => {
    if (n % div === 0) divisable.push(n);
  });

  return divisable;
}

// 19. Create an array of n numbers, from 1*m to n*m
function multiples(n, m) {
  const arr = [];

  // similar to nArray!
  for (let i = 0; i < n; i++) {
    arr[i] = (i + 1) * m;
  }

  return arr;
}
