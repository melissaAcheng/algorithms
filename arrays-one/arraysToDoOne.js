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

console.log(pushFront(["a", "b", "c", "d", "e"], "first"));
