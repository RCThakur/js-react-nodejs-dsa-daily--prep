//Problem  Valid Parentheses approach to solve stack and map

function isValid(s) {
  const stack = [];
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const char of s) {
    if ("({[".includes(char)) {
      stack.push(char);
    } else {
      if (stack.pop() !== map[char]) return false;
    }
  }

  return stack.length === 0;
}

console.log(isValid("()")); //true
console.log(isValid("(]")); // false
