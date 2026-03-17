/*A closure is when a function remembers and can access
 variables from its outer (parent) scope, even after 
 the outer function has finished executing.

*/

function outer() {
  let count = 0;

  function inner() {
    count++; //Accessing the outer varibale
    console.log("Count : " + count);
  }
  return inner; //returning the inner funtion
}

const counter = outer(); //Run once

counter(); //Count : 1
counter(); //Count : 2
counter(); //Count : 3
