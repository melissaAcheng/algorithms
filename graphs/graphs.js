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

// console.log(orangesRotting(grid));


// 204. Course Schedule
// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

 var canFinish = function(numCourses, prerequisites) {
  // create graph
  const graph = buildGraph(numCourses, prerequisites);

  // if there is a cycle, return false
  const visited = new Set();
  for (let node in graph) {
      if (findCycle(graph, node, visited, new Set())) {
          return false;
      } // if cycle is found (true) then return false;
  }

  return true;
};

const findCycle = (graph, node, visited, visiting) => {
  if (visited.has(node)) return false;
  if (visiting.has(node)) return true;
  visiting.add(node);

  for (let neighbor of graph[node]) {
      if (findCycle(graph, neighbor, visited, visiting)) {
          return true;
      }
  }

  visited.add(node);
  visiting.delete(node);
  return false;
}



const buildGraph = (numCourses, prerequisites) => {
  const graph = {};

  for (let i = 0; i < numCourses; i++) {
      graph[i] = [];
  }

  // fill prereqs
  for (let prereq of prerequisites) {
      const [a, b] = prereq;
      graph[a].push(b);
  }

  return graph;
}

let numCourses = 2;
let prerequisites = [[1,0]];

console.log(canFinish(numCourses, prerequisites));


// 323. Number of Connected Components in an Undirected Graph
// You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.

// Return the number of connected components in the graph.

 var countComponents = function(n, edges) {
  let count = 0;
  // build adjacency graph
  let graph = buildGraph1(n, edges);
  const visited = new Set();
  
  // use DFS to find number of connected components
  for (let node in graph) {
      if (explore(graph, node, visited)) {
          count += 1;
      } // whenever this returns true, a component was fully found, add one to count

  }

  return count;
};

const explore = (graph, node, visited) => {
  if (visited.has(graph[node])) return false;
  visited.add(graph[node]);

  for (let neighbor of graph[node]) {
      explore(graph, neighbor, visited)
  }

  return true;
}

const buildGraph1 = (n, edges) => {
  const graph = {};

  for (let i = 0; i < n; i++) {
      graph[i] = [];
  }

  for (let edge of edges) {
      const [a, b] = edge;
      graph[a].push(b);
      graph[b].push(a);
  }

  return graph;
}

let n = 5;
let edges = [[0,1],[1,2],[3,4]];

// console.log(countComponents(n, edges));

// Time: O(N) - traversing through each node and it's neighbors once
// Space: O(N) - the visited set is as big as there are nodes


// 261. Graph Valid Tree
// You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n and a list of edges where edges[i] = [ai, bi] indicates that there is an undirected edge between nodes ai and bi in the graph.

// Return true if the edges of the given graph make up a valid tree, and false otherwise.


 var validTree = function(n, edges) {
  if (edges.length != n - 1) return false;

  // build adjacency list
  let graph = buildGraph2(n, edges);

  // because this is an undirected graph
  // keep track of the node and its parent
  let parent = {0: -1};
  let stack = [0];

  // DFS using iterative stack to check
  // if the neighbor node is equal to the parent of the node (cycle), continue to next iteration
  // if the neighbor node already exists in parent map, it means we have already visited it, return false (there's a cycle between two or more nodes)
  while (stack.length > 0) {
      let node = stack.pop();

      for (let neighbor of graph[node]) {
          if (neighbor == parent[node]) {
              continue;
          } else if (neighbor in parent) {
              return false;
          }
          parent[neighbor] = node;
          stack.push(neighbor);
      }
  }

  // check if all nodes have been seen
  return Object.keys(parent).length === n;
};



const buildGraph2 = (n, edges) => {
  const graph = {};

  for (let i = 0; i < n; i++) {
      graph[i] = [];
  }

  for (let edge of edges) {
      const [a,b] = edge;
      graph[a].push(b);
      graph[b].push(a);
  }

  return graph;
}

let x = 5;
let e = [[0,1],[0,2],[0,3],[1,4]];
console.log(validTree(x, e));

// if N = nodes
// if E = edges
// Time: O(N + E)
// Space: O(N + E)
