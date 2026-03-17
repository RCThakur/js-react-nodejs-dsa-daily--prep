/*
This file explains:
1. var (function scoped)
2. let (block scoped)
3. const (block scoped + cannot reassign)

1. var (OLD WAY)
----------------------------------------
- Function scoped
- Can be redeclared
- Can be updated
- Hoisted (initialized as undefined)
*/

function varExample() {
  var x = 10;
  var x = 20; //allowed (re-declaration)
  x = 30; //allowed (update)

  console.log("var inside function:", x); // 30
}

varExample();

// ! var is NOT block scoped
if (true) {
  var a = 100;
}
console.log("var outside block:", a); // 100% accessible

/*
2. let (MODERN WAY)
----------------------------------------
- Block scoped
- Cannot be redeclared in same scope
- Can be updated
- Hoisted but NOT initialized (TDZ - Temporal Dead Zone)
*/

function letExample() {
  let y = 10;
  // let y = 20;ERROR (cannot redeclare)
  y = 20; //allowed (update)

  console.log("let inside function:", y); // 20
}

letExample();

// ! let is block scoped
if (true) {
  let b = 200;
  console.log("let inside block:", b); // 200
}
// console.log(b); ERROR (not accessible outside)

/*
 3. const (CONSTANT)
----------------------------------------
- Block scoped
- Cannot be redeclared
- Cannot be updated (reassigned)
- MUST be initialized at declaration
*/

function constExample() {
  const z = 50;
  // z = 60; ERROR (cannot reassign)

  console.log("const value:", z); // 50
}

constExample();

/*
 Important: const with Objects
----------------------------------------
- You CANNOT reassign the object
- BUT you CAN modify its properties
*/

const user = { name: "John" };

user.name = "Rinkesh"; //allowed
console.log("Updated object:", user);

// user = {} ERROR (cannot reassign)

/*
 Hoisting Behavior
----------------------------------------
*/

console.log(testVar); // undefined
// console.log(testLet); ERROR (TDZ)

var testVar = 5;
let testLet = 10;
