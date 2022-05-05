// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

function pushFront(arr, val) {
  let newIndex = arr.length;
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[newIndex] = arr[i];
    newIndex--;
  }
  arr[0] = val;
  return arr;
}

console.log("PUSH FRONT =>", pushFront(["a", "b", "c", "d", "e"], "first"));

// Pop Front
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

function popFront(arr) {
  const firstValue = arr[0];

  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr.pop();
  console.log("new array", arr);
  return firstValue;
}

console.log("POP FRONT =>", popFront(["a", "b", "c", "d", "e"]));
