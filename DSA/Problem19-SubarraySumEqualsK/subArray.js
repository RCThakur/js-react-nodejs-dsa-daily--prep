function subarraySum(nums, k) {
  const map = new Map();
  map.set(0, 1);

  let count = 0;
  let prefixSum = 0;

  for (const num of nums) {
    prefixSum += num;

    if (map.has(prefixSum - k)) {
      count += map.get(prefixSum - k);
    }

    map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
  }

  return count;
}

console.log(subarraySum([1, 1, 1], 2)); // 2  → [1,1] at index 0-1 and 1-2
console.log(subarraySum([1, 2, 3], 3)); // 2  → [3] and [1,2]
console.log(subarraySum([3, 4, 7, 2, -3, 1, 4, 2], 7)); // 4
