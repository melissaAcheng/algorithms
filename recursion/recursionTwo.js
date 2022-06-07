// recursive fibonacci
function rFib(num) {
  num = Math.floor(num);
  if (num <= 1 && num >= 0) {
    return num;
  } else if (num < 0) {
    return 0;
  }
  return rFib(num - 1) + rFib(num - 2);
}

// console.log(rFib(-2));

// recursive Tribonacci
function rTrib(num) {
  num = Math.floor(num);
  if (num === 0 || num === 1) {
    return 0;
  } else if (num === 2) {
    return 1;
  } else if (num < 0) {
    return 0;
  }
  return rTrib(num - 1) + rTrib(num - 2) + rTrib(num - 3);
}

console.log(rTrib(6));
