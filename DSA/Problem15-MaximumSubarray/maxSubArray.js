//Problem — Maximum Subarray (Kadane’s Algorithm) Approach

function maxSubArray(nums) {
  let maxSoFar = nums[0];
  let maxEndingHere = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // Either extend previous subarray OR start fresh from current element
    maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);

    // Update overall maximum
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6  (subarray: [4,-1,2,1])
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([-1, -2, -3])); // -1
