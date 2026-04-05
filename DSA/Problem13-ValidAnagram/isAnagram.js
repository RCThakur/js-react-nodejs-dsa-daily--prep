//Given two strings s and t, return true if t is an anagram of s.

function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const count = {};

  // Count characters in s
  for (const char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  // Decrement for characters in t
  for (const char of t) {
    if (!count[char]) return false; // char missing or already used up
    count[char]--;
  }

  return true;
}

console.log(isAnagram("anagram", "nagaram")); //true
console.log(isAnagram("rat", "car")); //false

//Time: O(n) | Space: O(1)
