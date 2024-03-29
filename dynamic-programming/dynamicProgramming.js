// 70. Climbing Stairs
// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

function climbStairs(n, memo = {}) {
  if (n <= 2) return n;
  if (n in memo) return memo[n];

  memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  return memo[n];
}

let n = 5;
console.log(climbStairs(n));
