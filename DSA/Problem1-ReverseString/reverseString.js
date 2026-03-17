//Approach: Two pointers from both ends, swap until they meet.
function reverseString(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]]; //Swap the characters
    left++;
    right--;
  }
  return s.join(" ");
}

console.log(reverseString(["r", "i", "n", "k", "e", "s", "h"]));

//Time: O(n) | Space: O(1)
