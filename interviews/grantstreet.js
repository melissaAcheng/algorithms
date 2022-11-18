// Suppose you have an array of houses "-H-H-H", each house needs to be close to a water tank on either its left or right side. How many water tanks do you need? Water Tanks can only go where there is a dash.

// Ex. "-H-H-H" -> solution: 2 tanks needed, one option is '-HTHTH', or 'TH-HTH'

// Greedy Problem
// add a bucket to the right of the house, if not able to, add to the left

function minBuckets(str) {
  let n = str.length;

  // edge cases
  if (str.includes("HHH")) return -1;
  if (n === 1) return -1;
  if (str.startsWith("HH") || str.endsWith("HH")) return -1;

  // track the buckets
  let used = Array.from(Array(n).fill(0));

  // loop through the string
  for (let i = 0; i < n; i++) {
    // only need to check if char is H
    if (str[i] === "H") {
      // check if there is a bucket to the left already
      if (i - 1 >= 0 && used[i - 1] === 1) {
        continue;
        // greedy aspect -> always turn the empty plot to the right of the house to bucket
      } else if (i + 1 < n && str[i + 1] === "-") {
        used[i + 1] = 1;
        continue;
      }
    }
  }

  // return sum of buckets
  return used.reduce((a, b) => a + b, 0);
}

console.log(minBuckets("H-H"));
