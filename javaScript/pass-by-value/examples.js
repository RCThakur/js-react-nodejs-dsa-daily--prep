//What is pass-by-value? Give an example.

let a = 5;
let b = a; //Here js create a completely independent copy

b = 10; //Changing the value

console.log(a); // 5 unchanged
console.log(b); //10 beacuse changing the new varibale does not affecct the original one it completely independent copy that why we get 10 as a output
