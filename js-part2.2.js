// Map and Set
// Task 1.
// Let arr be an array.
// Create a function unique(arr) that should return an array with unique items of arr.
// For instance:
//function unique(arr) {
/* your code */
// }
// let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
// console.log( unique(values) ); // Hare, Krishna, :-O
// P.S. Here strings are used, but can be values of any type.
// P.P.S. Use Set to store unique values.

//Solution 1:
// Using set, array, and loops
function unique(arr) {
  let set = new Set();
  let result = new Array();
  for (let item of arr) {
    set.add(item);
  }
  for (let item of set) {
    result.push(item);
  }
  return result;
}

// Solution 2:
// Using set (and passing the array as an argument to the set constructor), and array (converting the set back to an array using the Array.from method)
function unique2(arr) {
  let set = new Set(arr);
  let result = Array.from(set);
  return result;
}

// Solution 3:
// Using filter method
function unique3(arr) {
  let uniqueValues = [];
  let result = arr.filter(
    (item) => !uniqueValues.includes(item) && uniqueValues.push(item)
  );
  return result;
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log("Task 1. Solution 1:");
console.log("Using set, array, and loops.");
console.log(
  `The array "values" contains the following elements: ${values.join(", ")}`
);
console.log(
  'Testing the function unique() with the array "values" as argument.'
);
console.log("Expected result: Hare, Krishna, :-O");
console.log(`Actual result: ${unique(values).join(", ")}`); // passed
console.log("");
console.log("Task 1. Solution 2:");
console.log(
  "Using set (and passing the array as an argument to the set constructor), and array (converting the set back to an array using the Array.from method)."
);
console.log(
  `The array "values" contains the following elements: ${values.join(", ")}`
);
console.log(
  'Testing the function unique2() with the array "values" as argument.'
);
console.log("Expected result: Hare, Krishna, :-O");
console.log(`Actual result: ${unique2(values).join(", ")}`); // passed
console.log("");
console.log("Task 1. Solution 3:");
console.log("Using filter method.");
console.log(
  `The array "values" contains the following elements: ${values.join(", ")}`
);
console.log(
  'Testing the function unique3() with the array "values" as argument.'
);
console.log("Expected result: Hare, Krishna, :-O");
console.log(`Actual result: ${unique3(values).join(", ")}`); // passed
console.log("");

// Task 2.
// We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push.
// But that doesn’t work:
// let map = new Map();
// map.set("name", "John");
// let keys = map.keys();
// Error: keys.push is not a function
//keys.push("more");
// Why? How can we fix the code to make keys.push work?
// ANSWER: The map.keys() method returns an iterable object, and not an array-like object. Thus, array-specific methods like push cannot be used on it. To fix this, we can convert the iterator to an array.

// Solution 1:
// Using the Array.from method to convert the iterable object to an array.
let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");

console.log("Task 2. Solution 1:");
console.log(
  'Using the Array.from method to convert the iterable object (with variable name "keys") to an array, and then using on it push method to add the value "more".'
);
console.log('Logging the variable "keys". Expected result: name, more');
console.log(`Actual result: ${keys.join(", ")}`); // passed
console.log("");

// Solution 2:
// Using the spread operator to convert the iterable object to an array.
let map2 = new Map();
map2.set("name", "John");
let keys2 = [...map2.keys()];
keys2.push("more");

console.log("Task 2. Solution 2:");
console.log(
  'Using the spread operator to convert the iterable object (with variable name "keys") to an array, and then using on it push method to add the value "more".'
);
console.log('Logging the variable "keys". Expected result: name, more');
console.log(`Actual result: ${keys2.join(", ")}`); // passed
console.log("");
