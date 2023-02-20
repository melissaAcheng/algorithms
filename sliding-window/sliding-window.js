// Leetcode 239 - Sliding Window Maximum

// Given an array and a window size (k), return an output array of all the maximum values of each subarray.
// Use a queue to keep track of indices of max values in decreasing order

function maxSlidingWindow(arr, k) {
	let output = [];
	let queue = [];
	let l = 0;
	let r = 0;

	while (r < arr.length) {
		// remove any values in queue that are less than current value (starting from the end of queue[])
		while (queue && arr[r] > arr[queue[queue.length - 1]]) {
			queue.pop();
		}

		// add current idx to window
		queue.push(r);

		// remove the first idx in queue if less than l
		if (l > queue[0]) {
			queue.shift();
		}

		// add to output arr once we have reach window size
		if (r + 1 >= k) {
			output.push(arr[queue[0]]);
			l += 1;
		}
		r += 1;
	}

	return output;
}

let arr = [-4, 5, 4, -4, 4, 6, 7];
let k = 3;
console.log(maxSlidingWindow(arr, k));

// n = length of arr
// Time = O(n)
// Space = O(n)