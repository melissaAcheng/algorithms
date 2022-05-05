// move the lowest element to array's front
// any elements that were previously ahead of it, add one to index

function minToFront(arr) {
  // find the min value
  let min = arr[0];
  let idx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      idx = i;
    }
  }

  // move min to the beginning
  for (let j = idx - 1; j >= 0; j--) {
    arr[j + 1] = arr[j];
  }

  // move min value to beginning
  arr[0] = min;

  // return new arr
  return arr;
}

console.log(minToFront([4, 2, 1, 3, 5]));
// minToFront([4,2,1,3,5])
