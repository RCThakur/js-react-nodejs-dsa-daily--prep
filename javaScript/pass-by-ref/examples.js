//What is pass-by-reference? Give an example.

let obj = { value: 5 }; //
let newObj = obj; //When you assign obj or array to new varibale they both are pointing to the same memory location

console.log(obj); // 5

newObj.value = 10; // That why changes affect the original object

console.log(obj); // 10

console.log(newObj); // 10
