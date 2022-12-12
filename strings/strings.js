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

//238. Product of Array Except Self
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

function productExceptSelf(nums) {
  const prefix = Array(nums.length).fill(0);
    const postfix = Array(nums.length).fill(0);
    const result = Array(nums.length).fill(0);

    prefix[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        prefix[i] = prefix[i-1] * nums[i-1];
    }

    postfix[nums.length - 1] = 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        postfix[i] = postfix[i+1] * nums[i+1];
    }

    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix[i] * postfix[i];
    }   

    return result;
}

console.log(productExceptSelf([1, 2, 3, 4]));
// n = number of elements in array
// Time = O(n)
// Space = O(n)