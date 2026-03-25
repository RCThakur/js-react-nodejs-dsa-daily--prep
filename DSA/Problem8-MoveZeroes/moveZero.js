//Problem: Move all zeroes to the end of the array
// while maintaining the order of non-zero elements. Do it in-place.

function moveZero(nums) {
  let value = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[value] = nums[i];
      value++;
    }
  }

  for (let i = value; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
}

console.log(moveZero([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]
console.log(moveZero([0, 0, 1])); // [1, 0, 0]
