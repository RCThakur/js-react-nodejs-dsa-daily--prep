// Remove Duplicates from Sorted Array

function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
}

let nums = [1, 1, 2, 2, 3];

let k = removeDuplicates(nums);

console.log(k); // 3
console.log(nums.slice(0, k)); // [1, 2, 3]
