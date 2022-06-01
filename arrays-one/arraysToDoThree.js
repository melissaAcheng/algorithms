// Remove Negatives
function removeNegatives(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      for (let j = i; j < arr.length; j++) {
        arr[j] = arr[j+1]
      }
    }
  }
  return arr;
}

console.log(removeNegatives([1,-5,3,4,2,-6]))
// notes - high time complexity of O(n^2)

// Second-to-Last
function secondToLast(arr) {
  if (arr.length < 2) {
    return null;
  } else {
    return arr[arr.length-2];
  }
}

console.log(secondToLast([42]))

// Second-Largest
function secondLargest(arr) {
  if (arr.length < 2) {
    return null;
  } else {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          let tmp = arr[i];
          arr[i] = arr[j];
          arr[j] = tmp;
        }
      }
    }
    return arr[arr.length-2]
  }
}

console.log(secondLargest([5,3,4,6,2,1]))

// Nth-to-Last
function nthToLast(arr, n) {
  if (arr.length < n) {
    return null
  } else {
    return arr[arr.length-n]
  }
}

console.log(nthToLast([5,2,3,6,4,9,7],3))

// nth-Largest
function nthLargest(arr, n) {
  if (arr.length < n) {
    return null;
  } else {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          let tmp = arr[i];
          arr[i] = arr[j];
          arr[j] = tmp;
        }
      }
    }
    return arr[arr.length-n]
  }
}

console.log(nthLargest([1,3,2,5,6,4], 2))
