// 424. Longest Repeating Character Replacement

// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

function characterReplacement(s, k) {
	// set max variable to track longest substring length
	// create obj "seen" to keep track of char count
	// use two pointers (sliding window)

	// right pointer will always move one forward, so you can use a for loop
	// in the for loop
	// add the char at right pointer to seen
	// if - the difference between the distance (r - l + 1) and max value in seen is greater than k,
	// then delete l char from seen
	// shrink window (l += 1)
	// we check for this difference, to see if there are more than k elements that would need to be changed to have the same letters
	// in all cases - set the max to Math.max of current max or current distance

	let maxLength = 0;
	let seen = {};
	let l = 0;

	for (let r = 0; r < s.length; r += 1) {
		if (!(s[r] in seen)) seen[s[r]] = 0;
		seen[s[r]] += 1;

		let values = Object.values(seen);

		if (r - l + 1 - Math.max(...values) > k) {
			seen[s[l]] -= 1;
			l += 1;
		}

		maxLength = Math.max(maxLength, r - l + 1);
	}

	return maxLength;
}

// console.log(characterReplacement("AABCBBA", 1));

// n = length of s
// m = num of unique chars
// Time = O(n)
// Space = O(m)

// 76. Minimum Window Substring

// Given two strings s and t of lengths m and n respectively, return the minimum window
// substring
//  of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

const minWindow = (s, t) => {
	// if length of s is shorter than t, then return ""
	if (s.length < t.length) return "";

	// set up freq counts for t and s
	const tCount = {};
	const window = {};
	for (let char of t) {
		if (!(char in tCount)) tCount[char] = 0;
		tCount[char] += 1;
	}

	// set up variables to check for min substring
	let output = [-1, -1]; // initialize with two values (start, end)
	let outputLen = Infinity; // trying to find the min length
	let l = 0;

	// variables for checking haves and needs
	let have = 0;
	let need = Object.keys(tCount).length;

	// start iterating
	for (let r = 0; r < s.length; r++) {
		let char = s[r];
		// update char count in window
		if (!(char in window)) window[char] = 0;
		window[char] += 1;


		// update have count
		if (char in tCount && window[char] === tCount[char]) {
			have += 1;
		}

		// if have === need, then need to shrink window (left += 1)
		while (have === need) {
			// check for min
			if (r - l + 1 < outputLen) {
				output = [l, r];
				outputLen = r - l + 1;
			}

			// shrink window from left to try and find min window with substring
			window[s[l]] -= 1;
			if (s[l] in tCount && window[s[l]] < tCount[s[l]]) {
				have -= 1;
			}
			l += 1;
		}
	}

	// destructure output
	let [left, right] = output;


	// return sliced string
	return s.slice(left, right + 1);
};

let s = "ADOBECODEBANC";
let t = "ABC";
console.log(minWindow(s, t));
