// Prototypes
// Task 1. Given the following objects:
let head = {
  glasses: 1,
};

let table = {
  pen: 3,
};

let bed = {
  sheet: 1,
  pillow: 2,
};

let pockets = {
  money: 2000,
};

// Use __proto__ to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head. For instance, pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).

// Solution 1:
// Using __proto__
table.__proto__ = head;
bed.__proto__ = table;
pockets.__proto__ = bed;

console.log("Solution 1:");
console.log(
  "Using __proto__ to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head."
);
console.log('Checking the prototype chain through "pockets" object:');
console.log(pockets);
console.log("");
console.log(`Testing if "pockets.pen" is 3 and "bed.glasses" is 1. Result:`);
console.log(`"pockets.pen": ${pockets.pen}`); // passed
console.log(`"bed.glasses:" ${bed.glasses}`); // passed
console.log("");

// Solution 2:
// Using Object.create() and Object.assign()
let head2 = {
  glasses: 1,
};

let table2 = {
  pen: 3,
};

let bed2 = {
  sheet: 1,
  pillow: 2,
};

let pockets2 = {
  money: 2000,
};

table2 = Object.assign(Object.create(head2), table2);
bed2 = Object.assign(Object.create(table2), bed2);
pockets2 = Object.assign(Object.create(bed2), pockets2);

console.log("Solution 2:");
console.log(
  "Using Object.create() and Object.assign() to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head."
);
console.log('Checking the prototype chain through "pockets2" object:');
console.log(pockets2);
console.log("");
console.log(`Testing if "pockets2.pen" is 3 and "bed2.glasses" is 1. Result:`);
console.log(`"pockets2.pen": ${pockets2.pen}`); // passed
console.log(`"bed2.glasses:" ${bed2.glasses}`); // passed
console.log("");

// Solution 3:
// Using function constructor
function Head3() {
  this.glasses = 1;
}

function Table3() {
  Head3.call(this);
  this.pen = 3;
}
Table3.prototype = Object.create(Head3.prototype);
Table3.prototype.constructor = Table3;

function Bed3() {
  Table3.call(this);
  this.sheet = 1;
  this.pillow = 2;
}
Bed3.prototype = Object.create(Table3.prototype);
Bed3.prototype.constructor = Bed3;

function Pockets3() {
  Bed3.call(this);
  this.money = 2000;
}
Pockets3.prototype = Object.create(Bed3.prototype);
Pockets3.prototype.constructor = Pockets3;

let head3 = new Head3();
let table3 = new Table3();
let bed3 = new Bed3();
let pockets3 = new Pockets3();

console.log("Solution 3:");
console.log(
  "Using function constructor to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head."
);
console.log('Checking the prototype chain through "pockets3" object:');
console.log(pockets3);
console.log("");
console.log(`Testing if "pockets3.pen" is 3 and "bed3.glasses" is 1. Result:`);
console.log(`"pockets3.pen": ${pockets3.pen}`); // passed
console.log(`"bed3.glasses:" ${bed3.glasses}`); // passed
console.log("");

// Solution 4:
// Using class hierarchy
class Head4 {
  constructor() {
    this.glasses = 1;
  }
}

class Table4 extends Head4 {
  constructor() {
    super();
    this.pen = 3;
  }
}

class Bed4 extends Table4 {
  constructor() {
    super();
    this.sheet = 1;
    this.pillow = 2;
  }
}

class Pockets4 extends Bed4 {
  constructor() {
    super();
    this.money = 2000;
  }
}

let head4 = new Head4();
let table4 = new Table4();
let bed4 = new Bed4();
let pockets4 = new Pockets4();

console.log("Solution 4:");
console.log(
  "Using class hierarchy to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head."
);
console.log('Checking the prototype chain through "pockets4" object:');
console.log(pockets4);
console.log("");
console.log(`Testing if "pockets4.pen" is 3 and "bed4.glasses" is 1. Result:`);
console.log(`"pockets4.pen": ${pockets4.pen}`); // passed
console.log(`"bed4.glasses:" ${bed4.glasses}`); // passed
console.log("");

// Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.
// ANSWER: It is faster to get glasses as head.glasses than pockets.glasses, because head is closer in the prototype chain.

// Task 2.
// We have rabbit inheriting from animal.
// If we call rabbit.eat(), which object receives the full property: animal or rabbit?
let animal = {
  eat() {
    this.full = true;
  },
};

let rabbit = {
  __proto__: animal,
};

rabbit.eat();
// ANSWER: If we call rabbit.eat(), rabbit object receives the full property.
// If we call animal.eat(), both animal and rabbit objects receive the full property. In this case, even if eat() method is not called on rabbit object directly, it still receives the full property from the animal object, because they share the same eat() method in their prototype chain.
console.log(
  'Checking if "rabbit" object receives the "full" property after calling eat() method on "rabbit" object. Result:'
);
console.log(`rabbit.full: ${rabbit.full}`);
console.log(
  'Checking if "animal" object receives the "full" property after calling eat() method on "rabbit" object. Result:'
);
console.log(`animal.full: ${animal.full}`);
animal.eat();
console.log(
  'Checking if "animal" object receives the "full" property after calling eat() method on "animal" object. Result:'
);
console.log(`animal.full: ${animal.full}`);
console.log("");

// Classes
/*
Task 1. The Clock class (see the sandbox) is written in functional style. Rewrite it in the “class” syntax.

function Clock({ template }) {
    let timer;
    function render() {
     let date = new Date();
      let hours = date.getHours();
     if (hours < 10) hours = '0' + hours;
      let mins = date.getMinutes();
     if (mins < 10) mins = '0' + mins;
      let secs = date.getSeconds();
     if (secs < 10) secs = '0' + secs;
      let output = template
       .replace('h', hours)
       .replace('m', mins)
       .replace('s', secs);
      console.log(output);
   }
    this.stop = function() {
     clearInterval(timer);
   };
    this.start = function() {
     render();
     timer = setInterval(render, 1000);
   };
}
let clock = new Clock({template: 'h:m:s'});
clock.start();
*/

// Solution:
// Redundant or unnecessary parts like template, if statemets, and replace methods were removed.
// As well, for testing conveniency, added the clock, start button (mapped to startClock method), and stop button (mapped to stopClock method) for display on htlm page
class Clock {
  constructor() {
    this.timer = null;
  }
  render() {
    let date = new Date();
    let hours = date.getHours().toString().padStart(2, 0);
    let mins = date.getMinutes().toString().padStart(2, 0);
    let secs = date.getSeconds().toString().padStart(2, 0);

    let timeString = `${hours}:${mins}:${secs}`;

    document.getElementById("clock").textContent = timeString;

    console.log(timeString);
  }

  startClock() {
    console.log("Clock start");
    // Calling the stopClock method to clear existing interval before starting a new one, to prevent multiple intervals from running simultaneously and broking the stopClock method
    this.stopClock();
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }

  stopClock() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
      console.log("Clock stop");
    }
  }
}

let clock = new Clock();
console.log(
  'Calling start() method and then stop() method on "clock" object. Result:'
);
clock.startClock();
clock.stopClock();
console.log("");

// Objects
// Task 1.
// Write a function count(obj) that returns the number of properties in the object:
let user = {
  name: "John",
  age: 30,
};

// Solution 1:
function count(obj) {
  let sum = 0;
  for (let property in obj) {
    if (obj.hasOwnProperty(property)) sum++;
  }
  return sum;
}

console.log('Logging the "user" object. Result:');
console.log(user);
console.log("");
console.log("Solution 1:");
console.log('Calling function count() with "user" object as argument. Result:');
console.log(`The number of properties is: ${count(user)}`);
console.log("");

// Solution 2:
function count2(obj) {
  return Object.keys(obj).length;
}

console.log("Solution 2:");
console.log(
  'Calling function count2() with "user" object as argument. Result:'
);
console.log(`The number of properties is: ${count2(user)}`);
console.log("");

// Task 2.
// There is a salaries object with arbitrary number of salaries.
// Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.
// If salaries is empty, then the result must be 0.
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(salaries) {
  let sum = 0;
  let arrayOfSalaries = Object.values(salaries);
  for (let salary of arrayOfSalaries) sum += salary;
  return sum;
}

console.log('Logging the "salaries" object. Result:');
console.log(salaries);
console.log("");
console.log(
  'Calling function sumSalaries() with "salaries" object as argument. Result:'
);
console.log(
  `The sum of ${salaries.John}, ${salaries.Pete}, and ${
    salaries.Mary
  } is: ${sumSalaries(salaries)}`
); // 650
console.log("");

// Destructuring assignment
// Task 1.
// We have an object:
let user2 = {
  name: "John",
  years: 30,
};
// Write the destructuring assignment that reads:
// 1. name property into the variable name.
// 2. years property into the variable age.
// 3. isAdmin property into the variable isAdmin (false, if no such property)
// Here’s an example of the values after your assignment:
// let user = { name: "John", years: 30 };
// your code to the left side:
// ... = user

// Solution:
console.log('Logging the "user2" object. Result:');
console.log(user2);
let { name, years: age, isAdmin = false } = user2;
console.log(
  `After "user2" object destructuring the value of variable "name" is: ${name}`
); // John
console.log(
  `After "user2" object destructuring the value of variable "age" is: ${age}`
); // 30
console.log(
  `After "user2" object destructuring the value of variable "isAdmin" is: ${isAdmin}`
); // false
console.log("");
