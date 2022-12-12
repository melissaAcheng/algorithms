// 242. Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  let sMap = {};
  for (let char of s) {
    if (!(char in sMap)) sMap[char] = 0;
    sMap[char] += 1;
  }

  for (let char of t) {
    if (char in sMap && sMap[char] !== 0) {
      sMap[char] -= 1;
    } else {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("anagram", "nagaram"));

// n = length of string s or t
// Time: O(n)
// Space: O(n)