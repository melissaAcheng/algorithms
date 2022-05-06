// Reverse

function reverseArr(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr;
}

// console.log(reverseArr([1, 2, 3, 4, 5]));

// Rotate
function rotateArr(arr, shiftBy) {
  //reverse the array
  reverseArray(arr, 0, arr.length - 1);
  // reverse the first k elements
  reverseArray(arr, 0, shiftBy - 1);
  // reverse the last elements
  reverseArray(arr, shiftBy, arr.length - 1);
  return arr;
}

function reverseArray(arr, left, right) {
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
}

// console.log(rotateArr([1, 2, 3, 4, 5], 2));

// Filter Range
function filterRange(arr, min, max) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min || arr[i] > max) {
      for (let j = i + 1; j < arr.length; j++) {
        arr[j - 1] = arr[j];
      }
      arr.length--;
    }
  }
  return arr;
}

// console.log(filterRange([1, 5, 3, 6, 2], 1, 3));

// Concat
function concat(arrOne, arrTwo) {
  let newArr = [];
  let curIdx = 0;
  for (let i = 0; i < arrOne.length; i++) {
    newArr[curIdx] = arrOne[i];
    curIdx++;
  }
  for (let j = 0; j < arrTwo.length; j++) {
    newArr[curIdx] = arrTwo[j];
    curIdx++;
  }
  return newArr;
}

console.log(concat([1, 2], [3, 4, 5]));
