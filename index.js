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

function id() {
  return "up2194485";
}

function fn() {
  return "Thomas"
}

function sn() {
  return "Robinson";
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function checkObject(obj) {
  obj["checked"] = true;
}

function checkObjectInside(obj) {
  if ("data" in obj) {
    obj["data"]["checked"] = true;
  }
}

function arraySet(arr, i, n) {
  if(arr[i]) arr[i] = n;
}

function addAll(arr) {
  let sum = 0;
  arr.forEach(num => sum += num);
  return sum;
}

function larger(a, b) {
  return (a > b) ? a : b;
}

function largest(arr) {
  let max; // we can't set this to 0, since we might have all negative #s
  arr.forEach(num => {
    if(num > max || !max) max = num;
  });
  return max ? max : null;
}

function compare(a, b) {  
  if(a.length !== b.length) return false;

  for(const i in a) {
    if(a[i] !== b[i]) return false;
  }

  return true;
}

function addToAll(arr, n) {
  for(const i in arr) {
    arr[i] += n;
  }
  return arr;
}

let remembered = undefined;
function rememberThis(keepsake) {
  remembered = keepsake;
}

function nArray(n) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr[i] = i + 1;
  }

  return arr;
}

function addAllOpt(arr) {
  if(!arr || arr.length === 0) return 0;

  return addAll(arr);
}

function divisors(arr, div) {
  let divisable = [];

  arr.forEach(n => {
    if(n % div === 0) divisable.push(n);
  });

  return divisable;
}

function multiples(n, m) {
  let arr = [];

  // similar to nArray!
  for (let i = 0; i < n; i++) {
    arr[i] = (i + 1) * m;
  }

  return arr;
}