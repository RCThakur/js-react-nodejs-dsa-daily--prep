//The Missing Number Approach for this is (Sum Formula)

function missingNumber(nums) {
  let n = nums.length;

  // Expected sum of 0 to n
  let expectedSum = (n * (n + 1)) / 2;

  // Actual sum
  let actualSum = nums.reduce((sum, num) => sum + num, 0);

  return expectedSum - actualSum;
}

console.log(missingNumber([3, 0, 1])); // 2
