// 217. Contains Duplicate
// Given an integer arr of nums
// Return true if any value appears at least twice in the array
// Return false if every element is distinct

let nums = [1,2,3,1];

const containsDuplicate = (nums) => {
  let set = new Set(nums);
  return set.size !== nums.length ? true : false;
}

// console.log(containsDuplicate(nums));
// Time Complexity = O(n) because new Set(nums) iterates over every element of nums and puts it into a Set

// 242. Valid Anagram
// Given two strings, s and t
// Return true if t is an anagram of s 
// Return false if otherwise

let s = "anagram";
let t = "nagaram";

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  let sFreq = {};
  for (let char of s) {
    if (!(char in sFreq)) sFreq[char] = 0;
    sFreq[char] += 1;
  }

  for (let char of t) {
    if (char in sFreq && sFreq[char] !== 0) {
      sFreq[char] -= 1;
    } else {
      return false;
    }
  }

  return true;
}

// console.log(isAnagram(s,t))
// Time Complexity: O(n)

// 1. Two Sum
// Given an array of integers nums and an integer target
// Return indices of the two numbers that add up to the target
// Assume there is exactly one solution
// You cannot use the same element twice
// You can return the answer in any order

let numbers = [3,2,4];
let target = 6;

const twoSum = (numbers, target) => {
  const seen = {};
  
  for (let i = 0; i < numbers.length; i++) {
    let diff = target-numbers[i];
    if (diff in seen) {
      return [i, seen[diff]];
    }
    seen[numbers[i]] = i;
  }
};

// console.log(twoSum(numbers, target))
// Time Complexity: O(n)

// 49. Group Anagrams
// Given an array of strings
// Group the anagrams together (array of arrays)
// You can return the answer in any order

let strs = ["eat","tea","tan","ate","nat","bat"];

const groupAnagrams = (strs) => {
  let map = {};
  let prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];

  for (let word of strs) {
    const letters = word.split('');
    const sum = letters.reduce((a, b) => a * prime[b.charCodeAt()-97], 1)
    if (!(sum in map)) map[sum] = [];
    map[sum].push(word); 
  }

  return Object.values(map);
}

// console.log(groupAnagrams(strs))
// Time Complexity: O(m*n) where m = the length of strs and n = the number of letters in each word of strs

