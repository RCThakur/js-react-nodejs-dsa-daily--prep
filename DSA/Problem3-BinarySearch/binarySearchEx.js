//Problem 1 — Binary Search
//Eliminate half the search space on every iteration. Works only on sorted data.

function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    // Avoids integer overflow (vs (left + right) / 2)
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) return mid;
    else if (nums[mid] < target)
      left = mid + 1; // target is in right half
    else right = mid - 1; // target is in left half
  }

  return -1; // not found
}

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2)); // -1
