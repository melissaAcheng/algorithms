// Recursive Sigma
function sigma(num) {
  if (num < 1) {
    return 0;
  } else if (!Number.isInteger(num)) {
    num = Math.floor(num);
  }

  return num + sigma(num - 1);
}

// console.log(sigma(5));


// Recursive Factorial
function factorial(num) {
  if (num < 0) {
    num === 0;
  } else if (num === 0) {
    return 1;
  } else if (!Number.isInteger(num)) {
    num = Math.floor(num);
  }

  return num * factorial(num - 1);
}

// console.log(factorial(3));
