//Problem - Container With Most Water

function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    let width = right - left;
    let h = Math.min(height[left], height[right]);
    let area = width * h;

    maxWater = Math.max(maxWater, area);

    // Move the smaller height pointer
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
