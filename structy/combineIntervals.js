// Write a function, combineIntervals, that takes in an array of intervals as an argument. Each interval is an array containing a pair of numbers representing a start and end time. Your function should combine overlapping intervals and return an array containing the combined intervals.

function combineIntervals(intervals) {
  // sort the intervals by start val
  const sorted = intervals.sort((a, b) => a[0] - b[0]);

  // initialize new array with the first pair
  const result = [sorted[0]];

  // loop through all remaining arrays and see if intervals overlap
  for (let interval of sorted.slice(1)) {
    const lastInterval = result[result.length - 1];
    const [lastStart, lastEnd] = lastInterval;

    const [start, end] = interval;
    if (start <= lastEnd) {
      if (end > lastEnd) {
        lastInterval[1] = end;
      }
    } else {
      result.push(interval);
    }
  }

  return result;
}

const intervals = [
  [6, 8],
  [2, 9],
  [10, 12],
  [20, 24],
];

console.log(combineIntervals(intervals))

// n = length of array (number of pairs)
// Time = O(n log(n)) -> because of sorting
// Space = 