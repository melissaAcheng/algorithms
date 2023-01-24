// 104 Linked Palindrome
// Given the head of a linked list, return a boolean indicating whether or not the linkedlist is a palindrome.
// A palindrome is a sequence that is the same both forwards and backwards.

// class Node {
// 	constructor(val) {
// 		this.val = val;
// 		this.next = null;
// 	}
// }

const linkedPalindrome = (head) => {
	// Steps
	// 1. Traverse the linked list and add each node into array
	// 2. Make a copy of the array and reverse nodes
	// 3. Check if og array and reversed array are equal
	// 4. If yes, return true. If no, return false

	const nodes = [];
	let current = head;
	while (current !== null) {
		nodes.push(current.val);
		current = current.next;
	}

	const reversedNodes = [...nodes].reverse();

	return nodes.join("") === reversedNodes.join("");
};

// const a = new Node(3);
// const b = new Node(2);
// const c = new Node(7);
// const d = new Node(7);
// const e = new Node(2);
// const f = new Node(3);

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;

// 3 -> 2 -> 7 -> 7 -> 2 -> 3

// console.log(linkedPalindrome(a));

// Time Complexity: O(n)
// Space: O(n)
// -------------------------------------------------------------//
// 105 Middle Value
// Given the head of linked list, return the value of the middle node
// If the linked list has an even number of nodes, then return the value of the second middle node.
// You may assume that the input list is non-empty.

const middleValue = (head) => {
	// add all nodes to array
	// return the node at index Math.floor(array.length / 2)
	const array = [];

	let current = head;

	while (current !== null) {
		array.push(current.val);
		current = current.next;
	}

	return array[Math.floor(array.length / 2)];
};

// console.log(middleValue(a));

// Time: O(n)
// Space: O(n)

const _middleValue = (head) => {
	// initialize slow and fast pointer
	// slow pointer moves by 1, fast pointer moves by 2 (twice as fast as slow)
	// when fast pointer is equal to null or fast.next is equal to null, return the value of slow
	let slow = head;
	let fast = head;

	while (fast !== null && fast.next !== null) {
		slow = slow.next;
		fast = fast.next.next;
	}

	return slow.val;
};

// console.log(_middleValue(a));
// n = num of nodes
// Time - O(n) travsersing through each node
// Space - O(1) not using any extra space
// -------------------------------------------------------------//

// 106 Linked List cycle
// Given the head of a linked list, return a boolean indicating whether or not the linked list contains a cycle

const linkedListCycle = (head) => {
	// use two pointers, slow and fast
	// if slow equals fast, then there is a cycle - return false
	// Edge cases - if it's the first iteration, do NOT return true

	let slow = head;
	let fast = head;
	let firstIteration = true;

	while (fast !== null && fast.next !== null) {
		if (slow === fast && !firstIteration) return true;
		slow = slow.next;
		fast = fast.next.next;
		firstIteration = false;
	}

	return false;
};

// const q = new Node("q");
// const r = new Node("r");
// const s = new Node("s");
// const t = new Node("t");
// const u = new Node("u");

// q.next = r;
// r.next = s;
// s.next = t;
// t.next = u;
// u.next = q; // cycle

//    ________________
//  /                 \
// q -> r -> s -> t -> u

// console.log(linkedListCycle(q));

// 122 build tree in post
// Write a function, buildTreeInPost, that takes in an array of in-ordered values and an array of post-ordered values for a binary tree. The function should build a binary tree that has the given in-order and post-order traversal structure. The function should return the root of this tree.

// You can assume that the values of inorder and postorder are unique.

class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

// inOrder -> left, self, right
// postOrder -> left, right, self

const buildTreeInPost = (inOrder, postOrder) => {
	if (inOrder.length === 0) return null;
	// find self
	const value = postOrder[postOrder.length - 1];
	// start building from self
	const root = new Node(value);
	// find the left and right branches from inOrder
	const mid = inOrder.indexOf(value);
	const leftIn = inOrder.slice(0, mid);
	const rightIn = inOrder.slice(mid + 1);
	// find the left and right branches from postOrder
	const leftPost = postOrder.slice(0, leftIn.length);
	const rightPost = postOrder.slice(leftIn.length, -1);
	// build the tree branches recursively
	root.left = buildTreeInPost(leftIn, leftPost);
	root.right = buildTreeInPost(rightIn, rightPost);
	return root;
};

// console.log(buildTreeInPost(["d", "b", "e", "a", "f", "c", "g"], ["d", "e", "b", "f", "g", "c", "a"]));

// Time = O(n^2) because of the slicing which creates a copy
// Space = O(n^2)

// inOrder -> left, self, right
// preOrder -> self, left, right

const buildTreeInPre = (inOrder, preOrder) => {
	if (inOrder.length === 0) return null;
	// find self
	const self = preOrder[0];
	const root = new Node(self);
	// find index of self in inOrder
	const mid = inOrder.indexOf(self);
	const leftIn = inOrder.slice(0, mid);
	const rightIn = inOrder.slice(mid + 1);
	const leftPre = preOrder.slice(1, leftIn.length + 1);
	const rightPre = preOrder.slice(leftIn.length + 1);
	root.left = buildTreeInPre(leftIn, leftPre);
	root.right = buildTreeInPre(rightIn, rightPre);
	return root;
};

// console.log(buildTreeInPre(["d", "b", "g", "e", "h", "a", "c", "f"], ["a", "b", "d", "e", "g", "h", "c", "f"]));

// 124. Lexical Order

const lexicalOrder = (word1, word2, alphabet) => {
	// find the length of the longest word
	// loop through indices from 0 to longest word length
	// compare the indexOf in the alphabet
	// if you go through all the indices and no difference was found, then return true
	let length = Math.max(word1.length, word2.length);
	for (let i = 0; i < length; i++) {
		let val1 = alphabet.indexOf(word1[i])
		let val2 = alphabet.indexOf(word2[i])
		
		if (val1 < val2) {
			return true;
		} else if (val2 < val1) {
			return false;
		}
	}
	return true;
}

const alphabet = "abcdefghijklmnopqrstuvwxyz";
console.log(lexicalOrder("backs", "backdoor", alphabet));

// n = length of shortest word
// Time = O(n)
// Space = O(1)