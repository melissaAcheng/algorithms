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

console.log(characterReplacement("AABCBBA", 1));

// n = length of s
// m = num of unique chars
// Time = O(n)
// Space = O(m)
