/*
 JavaScript Hoisting Explained
========================================

Hoisting means:
JavaScript moves declarations to the top of their scope
BEFORE code execution.

 1. var Hoisting
----------------------------------------
- var is hoisted and initialized as undefined
*/

console.log(a); // undefined (NOT error)
var a = 10;

/*
Behind the scenes:
var a;
console.log(a); // undefined
a = 10;
*/

console.log("Value of a after assignment:", a); // 10

/*
 2. let Hoisting (TDZ - Temporal Dead Zone)
----------------------------------------
- let is hoisted BUT NOT initialized
- Accessing before declaration → ERROR
*/

// console.log(b); ReferenceError
let b = 20;

/*
TDZ (Temporal Dead Zone):
Time between hoisting and initialization
where variable cannot be accessed
*/

console.log("Value of b:", b); // 20

/*
 3. const Hoisting (TDZ)
----------------------------------------
- Same as let
- Must be initialized at declaration
*/

// console.log(c);  ReferenceError
const c = 30;

console.log("Value of c:", c); // 30

/*
4. Function Hoisting
----------------------------------------
- Function declarations are fully hoisted
*/

greet(); //Works before declaration

function greet() {
  console.log("Hello from function declaration!");
}

/*
 5. Function Expression Hoisting
----------------------------------------
- Only variable is hoisted, NOT function
*/

//sayHi(); //TypeError (undefined is not a function)

var sayHi = function () {
  console.log("Hi!");
};

/*
Behind the scenes:
var sayHi;
sayHi(); // undefined()
sayHi = function() {...}
*/

/*
 6. Arrow Function Hoisting
----------------------------------------
- Same as function expression
*/

//sayHello(); //TypeError

const sayHello = () => {
  console.log("Hello!");
};
