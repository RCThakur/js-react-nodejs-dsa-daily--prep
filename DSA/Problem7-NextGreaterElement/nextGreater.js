// Next Greater Element (NGE)

function nextGreaterElement(arr) {
  let n = arr.length;
  let result = new Array(n).fill(-1);
  let stack = [];

  for (let i = n - 1; i >= 0; i--) {
    // Remove smaller elements
    while (stack.length && stack[stack.length - 1] <= arr[i]) {
      stack.pop();
    }

    // If stack not empty, top is next greater
    if (stack.length) {
      result[i] = stack[stack.length - 1];
    }

    // Push current element
    stack.push(arr[i]);
  }

  return result;
}

console.log(nextGreaterElement([4, 5, 2, 10]));
