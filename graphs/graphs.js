// 994. Rotting Oranges
// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

var orangesRotting = function (grid) {
  // if there are no fresh oranges, return 0
  if (!grid.flat(1).includes(1)) return 0;

  // find all the rotten oranges and add them to queue
  // then start from rotten oranges and turn the neighboring fresh oranges to rotten
  // check, if array includes 1 still, then return -1, otherwise return minutes

  const queue = [];
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === 2) {
        queue.push([r, c, 0]); // row, col, minutes
      }
    }
  }

  let minutes = 0;

  while (queue.length > 0) {
    const [row, col, min] = queue.shift();
    minutes = Math.max(minutes, min);

    let deltas = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];
    for (let delta of deltas) {
      const [deltaRow, deltaCol] = delta;
      const nextRow = row + deltaRow;
      const nextCol = col + deltaCol;
      if (
        nextRow >= 0 &&
        nextRow < grid.length &&
        nextCol >= 0 &&
        nextCol < grid[0].length &&
        grid[nextRow][nextCol] === 1
      ) {
        queue.push([nextRow, nextCol, min + 1]);
        grid[nextRow][nextCol] = 2;
      }
    }
  }

  if (grid.flat(1).includes(1) === true) {
    return -1;
  } else {
    return minutes;
  }
};

let grid = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
];
console.log(orangesRotting(grid));
