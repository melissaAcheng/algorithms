// Write a function, isBinarySearchTree, that takes in the root of a binary tree. The function should return a boolean indicating whether or not the tree satisfies the binary search tree property.

// A Binary Search Tree is a binary tree where all values within a node's left subtree are smaller than the node's value and all values in a node's right subtree are greater than or equal to the node's value.

class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

const isBinarySearchTree = (root) => {
	const values = [];
	// in order traversal (left, self, right)
	inOrderTraversal(root, values);
	// see if values are sorted in ascending order
	return isSorted(values);
};

const inOrderTraversal = (root, values) => {
	if (root === null) return;
	inOrderTraversal(root.left, values);
	values.push(root.val);
	inOrderTraversal(root.right, values);
};

const isSorted = (nums) => {
	for (let i = 0; i < nums.length - 1; i++) {
		let current = nums[i];
		let next = nums[i + 1];
		if (next < current) return false;
	}
	return true;
};

const a = new Node(12);
const b = new Node(5);
const c = new Node(18);
const d = new Node(3);
const e = new Node(90);
const f = new Node(19);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      12
//    /   \
//   5     18
//  / \     \
// 3   9     19

console.log(isBinarySearchTree(a));
