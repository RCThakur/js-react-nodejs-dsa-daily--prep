function twoSum(nums, target) {
  const map = new Map(); //for store number and index

  for (let i = 0; i < nums.length; i++) {
    const a = target - nums[i]; // Here we ar calculating the number to reach target

    if (map.has(a)) {
      // checking if the number is already present in map
      return [map.get(a), i]; // index to a and curr index
    }

    map.set(nums[i], i); //if not found stroe curr number with its index value
  }
}

console.log(twoSum([2, 7, 11, 15], 18)); //[1, 2]
console.log(twoSum([3, 5, 2, 9, 7], 11)); //[2, 3]
