// Find the Largest value on each level of a binary tree

const { node } = require("prop-types");

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const findMax = function (root) {
  let result = [];
  if (root === null) return [];

  const queue = [root];

  while (queue.length > 0) {
    let currentMax = -Infinity;
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();
      currentMax = Math.max(currentMax, node.value);

      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }

    result.push(currentMax);
  }

  return result;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

console.log(`Level largest values are: ${findMax(root)}`);
