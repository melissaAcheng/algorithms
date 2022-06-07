function isCreditCardValid(digitArr) {
  let lastDigit = digitArr[digitArr.length - 1];
  digitArr.pop();
  let sum = 0;
  for (let i = digitArr.length - 1; i >= 0; i--) {
    if (i % 2 !== 0) {
      digitArr[i] = digitArr[i] * 2;
      if (digitArr[i] > 9) {
        digitArr[i] = digitArr[i] - 9;
      }
    }
    sum += digitArr[i];
  }
  if ((sum + lastDigit) % 10 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isCreditCardValid([5, 2, 2, 8, 2]));
