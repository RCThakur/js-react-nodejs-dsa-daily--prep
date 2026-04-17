//Problem to find the minimum length subarray with sum >= target
function minSubArrayLen(target, nums) {
  let minLen = Infinity;
  let windowSum = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    windowSum += nums[right];

    while (windowSum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      windowSum -= nums[left];
      left++;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2 (subarray [4,3])
console.log(minSubArrayLen(4, [1, 4, 4])); // 1 ([4])
