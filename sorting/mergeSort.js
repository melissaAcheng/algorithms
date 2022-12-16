// Write a function, mergeSort, that takes in an array of numbers as an argument. The function should return a new array containing elements of the original array sorted in ascending order. Your function must implement the merge sort algorithm.

function mergeSort(nums) {
	// recursive function that splits the array in half until it is the smallest element possible
	if (nums.length <= 1) return nums;

	const mid = Math.floor(nums.length / 2);
	const leftHalf = mergeSort(nums.slice(0, mid));
	const rightHalf = mergeSort(nums.slice(mid));

	return merged(leftHalf, rightHalf);
}

// function that merges two arrays to become one sorted array
const merged = (nums1, nums2) => {
	const merged = [];
	let p1 = 0;
	let p2 = 0;

	while (p1 < nums1.length && p2 < nums2.length) {
		if (nums1[p1] < nums2[p2]) {
			merged.push(nums1[p1]);
			p1 += 1;
		} else {
			merged.push(nums2[p2]);
			p2 += 1;
		}
	}

  merged.push(...nums1.slice(p1));
  merged.push(...nums2.slice(p2));

	return merged;
};

const numbers = [10, 4, 42, 5, 8, 100, 5, 6, 12, 40];
console.log(mergeSort(numbers));

// n = array size
// Time = O(n log n)
// Space = O(n)