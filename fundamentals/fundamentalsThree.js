function biggieSize(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) arr[i] = "big";
  }
  return arr;
}

// console.log(biggieSize([-1,3,5,-5]))

function lowHigh(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }
  console.log(min);
  return max;
}

// console.log(lowHigh([4,1,5,8,3,2,10,7]))

function printReturn(arr) {
  console.log(arr[arr.length - 2]);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      return arr[i];
    }
  }
}

// console.log(printReturn([4,3,6,2,7]))

function doubleVision(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }
  return newArr;
}

// console.log(doubleVision([1,2,3]))

function countPositives(arr) {
  let positiveCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) positiveCount++;
  }
  arr[arr.length - 1] = positiveCount;
  return arr;
}

// console.log(countPositives([-1,1,1,1]))
