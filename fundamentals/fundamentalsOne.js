// Setting and Swapping
let myNumber = 42;
let myName = "Melissa";

let tempName = myName;
myName = myNumber;
myNumber = tempName;

console.log("myName is " + myName);
console.log("myNumber is " + myNumber);

// Print -52-1066
for (let i = -52; i <= 1066; i++) {
  console.log(i);
}

// Don't Worry, Be Happy
function beCheerful() {
  console.log("good morning!");
}

for (let j = 0; j < 98; j++) {
  console.log(j + 1);
  beCheerful();
}

// Multiples of Three - but Not All
for (let k = -300; k <= 0; k += 3) {
  if (k === -3 || k === -6) {
    continue;
  }
  console.log(k);
}

// Printing Integers with While
let x = 2000;
while (x <= 5280) {
  console.log(x);
  x++;
}

// You Say It's Your Birthday
function yourBirthday(month, day) {
  if (month == 12 && day == 1) {
    console.log("How did you know?");
  } else {
    console.log("Just another day...");
  }
}

yourBirthday(1, 12);

// Leap Year
function leapYear(year) {
  if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
    console.log(year + " = Leap Year");
  } else {
    console.log(year + " is not Leap Year");
  }
}

leapYear(2022);

// Print and Count
let count = 0;
for (let y = 512; y <= 4096; y++) {
  {
    if (y % 5 === 0) {
      console.log(y);
      count++;
    }
  }
}
console.log(count);

// Multiples of Six
let z = 6;
while (z <= 60000) {
  if (z % 6 === 0) {
    console.log(z);
  }
  z++;
}

// Counting, the Dojo Way
for (let a = 1; a <= 100; a++) {
  if (a % 5 === 0 && a % 10 === 0) {
    console.log("Coding Dojo");
  } else if (a % 5 === 0) {
    console.log("Coding");
  } else {
    console.log(a);
  }
}

// What do you know?
function printValue(incoming) {
  console.log(incoming);
}

printValue("Melissa");

// Whoa, That Sucker's Huge
let sum = 0;
for (let w = -300000; w <= 300000; w++) {
  sum += w;
}
console.log(sum);

// Countdown by Fours
let num = 2016;
while (num > 0) {
  if (num % 4 === 0) {
    console.log(num);
  }
  num--;
}

// Flexible Countdown
function countdown(lowNum, highNum, mult) {
  for (let num = highNum; num >= lowNum; num--) {
    if (num % mult === 0) {
      console.log(num);
    }
  }
}
countdown(2, 9, 3);

// The Final Countdown
function finalCountdown(mult, start, end, exclude) {
  let num = start;
  while (num <= end) {
    if (num % mult === 0 && num != exclude) {
      console.log(num);
    }
    num++;
  }
}
finalCountdown(3, 5, 17, 9);
