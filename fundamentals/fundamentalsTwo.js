function countdown(num) {
  let arr = [];
  for (let i = num; i >= 0; i--) {
    arr.push(i);
  }
  console.log(arr.length);
  return arr;
}

// console.log(countdown(10));

function printReturn(arr) {
  console.log(arr[0]);
  return arr[1];
}

// console.log(printReturn([1, 2]));

function firstPlusLength(arr) {
  return arr[0] + arr.length;
}

// console.log(firstPlusLength([false, 1, 4, 6]));

function valuesGreaterThanSecond(arr) {
  let count = 0;
  if ((arr.length = 1)) return 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[1]) {
      console.log(arr[i]);
      count++;
    }
  }
  return count;
}

// console.log(valuesGreaterThanSecond([1,3,5,7,9,13]))
// console.log(valuesGreaterThanSecond([1]))

function thisLengthThatValue(num1, num2) {
  let arr = [];
  for (let i = 0; i < num1; i++) {
    arr.push(num2);
  }
  if (num1 === num2) console.log("Jinx!");
  return arr;
}

// console.log(thisLengthThatValue(2,2))

function fitFirstValue(arr) {
  if (arr[0] > arr.length) {
    console.log("Too big!");
  } else if (arr[0] < arr.length) {
    console.log("Too small!");
  } else {
    console.log("Just right!");
  }
}

// fitFirstValue([1,2,5,2,4])

function fahrenheitToCelsius(fDegrees) {
  let celsius = (fDegrees - 32) * (5/9);
  return celsius;
}

// console.log(fahrenheitToCelsius(84))

function celsiusToFahrenheit(cDegrees) {
  let fahrenheit = (9/5 * cDegrees) + 32;
  return fahrenheit;
}

// console.log(celsiusToFahrenheit(32))

function equate() {
  for (let i = 200; i >= 0; i--) {
    let fahrenheit = (9/5 * i) + 32;
    if (i === fahrenheit) {
      console.log(i + " equals " + fahrenheit)
    }
  }
  console.log("no match")
}

equate();