//Problem - Remove All Adjacent Duplicates In String

function removeDuplicates(str) {
  let stack = [];

  for (let char of str) {
    if (stack.length && stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
}

let str = "abbaca";

console.log(removeDuplicates(str)); //output "ca"
